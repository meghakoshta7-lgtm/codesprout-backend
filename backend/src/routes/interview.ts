import { Router, Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import PDFDocument from 'pdfkit';
import { authenticate, AuthRequest } from '../middleware/auth';
import {
  getInterviewPreferenceByUser, upsertInterviewPreference, deleteInterviewPreference,
  getGeneratedQuestionsForSubject, addGeneratedInterviewQuestions, clearGeneratedQuestionsForSubject,
  getMockSessionsByUser, getMockSession, addMockInterviewSession, updateMockInterviewSession,
  getInterviewKitsByUser, getInterviewKit, addInterviewKit,
} from '../data/db';
import { getRoleById } from '../data/roles';
import { getSubjectQuestions, getAllSubjectNames } from '../data/interviewQuestionsBank';
import {
  createAiSession, processAiInterviewTurn, generateAiInterviewReport,
  type AiSessionState,
} from '../services/interviewEngine';
import { saveAiSession, getAiSession, getAiSessionsByUser } from '../data/db';
import type {
  InterviewPreference, GeneratedInterviewQuestion, MockInterviewSession, MockAnswer,
  InterviewKit, InterviewExperienceLevel, QuestionDifficulty, MockRoundType,
} from '../types';

const router = Router();

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

// Model fallback chain: tries each in order until one succeeds.
// Free models are listed first so default usage stays free.
// Override the primary with OPENROUTER_MODEL env var (e.g. "anthropic/claude-3.5-sonnet").
const DEFAULT_MODEL_CHAIN: string[] = [
  'meta-llama/llama-3.3-70b-instruct:free',
  'qwen/qwen-2.5-72b-instruct:free',
  'google/gemini-2.0-flash-exp:free',
  'meta-llama/llama-3.1-8b-instruct:free',
  'mistralai/mistral-7b-instruct:free',
  'nvidia/llama-3.1-nemotron-70b-instruct:free',
];
const PRIMARY_MODEL = process.env.OPENROUTER_MODEL || DEFAULT_MODEL_CHAIN[0];
const MODEL_CHAIN: string[] = [
  PRIMARY_MODEL,
  ...DEFAULT_MODEL_CHAIN.filter(m => m !== PRIMARY_MODEL),
];

type OpenRouterResult = { ok: true; content: string; model: string; } | { ok: false; error: string; model: string; status?: number; };

async function tryModel(model: string, messages: { role: 'system' | 'user'; content: string }[], timeoutMs = 25000): Promise<OpenRouterResult> {
  if (!OPENROUTER_API_KEY) return { ok: false, error: 'no_key', model };
  const controller = new AbortController();
  const t = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://codesprout.com',
        'X-Title': 'CodeSprout Interview Prep',
      },
      body: JSON.stringify({ model, messages, temperature: 0.7, max_tokens: 4000 }),
      signal: controller.signal,
    });
    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      return { ok: false, error: errText.slice(0, 200) || `HTTP ${res.status}`, model, status: res.status };
    }
    const data = await res.json() as { choices?: { message?: { content?: string } }[] };
    const content = data.choices?.[0]?.message?.content || '';
    if (!content) return { ok: false, error: 'empty_content', model, status: res.status };
    return { ok: true, content, model };
  } catch (err: any) {
    return { ok: false, error: err?.name === 'AbortError' ? 'timeout' : (err?.message || 'network'), model };
  } finally {
    clearTimeout(t);
  }
}

async function callOpenRouter(messages: { role: 'system' | 'user'; content: string }[]): Promise<string> {
  const errors: string[] = [];
  for (const model of MODEL_CHAIN) {
    const r = await tryModel(model, messages);
    if (r.ok) {
      if (model !== PRIMARY_MODEL) console.log(`[interview-prep] AI fallback used: ${model}`);
      return r.content;
    }
    errors.push(`${model}: ${r.status || ''} ${r.error}`);
    // 4xx other than 429 = request itself is bad, no point trying more models
    if (r.status && r.status >= 400 && r.status < 500 && r.status !== 429) break;
  }
  throw new Error(`All models failed: ${errors.slice(0, 3).join(' | ')}`);
}

// =============== STATIC FALLBACK QUESTION BANK ===============
// Used only when ALL AI models fail (rate limits / network / 5xx).
// Each subject has a small bank of common interview questions per difficulty.
// Returns empty array if subject is unknown — UI will prompt user to retry.

const FALLBACK_QUESTIONS: Record<string, { basic: { question: string; answer: string; tags: string[] }[]; intermediate: { question: string; answer: string; tags: string[] }[]; advanced: { question: string; answer: string; tags: string[] }[] }> = {
  default: {
    basic: [
      { question: 'Tell me about yourself and your background.', answer: 'Briefly summarize your education, key projects, technologies you have worked with, and what motivates you. Keep it 2-3 minutes and end with why you are excited about this role.', tags: ['intro', 'behavioral'] },
      { question: 'Why do you want to work at our company?', answer: 'Research the company product, culture, and recent news. Mention specific things that align with your values and career goals. Show genuine interest, not generic flattery.', tags: ['motivation'] },
      { question: 'What are your strengths and weaknesses?', answer: 'Pick 2-3 strengths with concrete examples showing impact. For weaknesses, mention one you are actively working on and what steps you are taking to improve.', tags: ['self-awareness'] },
      { question: 'Where do you see yourself in 5 years?', answer: 'Show ambition but realism. Mention growing into a senior IC or tech lead role, deepening expertise in chosen area, and contributing to team/company success.', tags: ['career-goals'] },
      { question: 'Why are you leaving your current role?', answer: 'Stay positive. Focus on what you are looking for (growth, new challenges, better alignment with goals) rather than what you are running from.', tags: ['motivation'] },
    ],
    intermediate: [
      { question: 'Describe a challenging project and how you handled it.', answer: 'Use STAR method: Situation, Task, Action, Result. Pick a project with measurable impact. Focus on your specific contributions and what you learned.', tags: ['behavioral', 'problem-solving'] },
      { question: 'How do you handle disagreements with teammates?', answer: 'Give an example where you listened first, sought to understand their perspective, found common ground, and reached a better solution through collaboration.', tags: ['collaboration', 'conflict'] },
      { question: 'Tell me about a time you failed and what you learned.', answer: 'Be honest about a real failure, take responsibility without blaming others, and focus on the specific lessons learned and how you applied them afterwards.', tags: ['growth', 'self-awareness'] },
    ],
    advanced: [
      { question: 'Design a system like Twitter / URL shortener / Instagram.', answer: 'Clarify requirements (read-heavy vs write-heavy, scale). Cover: load balancer, API gateway, database choice (SQL vs NoSQL), caching layer (Redis), CDN for media, message queue for async tasks, monitoring. Discuss trade-offs.', tags: ['system-design'] },
      { question: 'How would you scale a service from 1k to 1M users?', answer: 'Walk through stages: vertical scaling first, then horizontal with load balancers, then database read replicas, sharding, caching, CDN, async processing, microservices decomposition. Mention specific tools and metrics.', tags: ['scalability'] },
      { question: 'Describe how you would debug a production outage.', answer: 'Steps: check dashboards/alerts, identify blast radius, check recent deploys, examine logs and traces, form hypothesis, test with feature flags or rollback, communicate status, write postmortem with action items.', tags: ['debugging', 'operations'] },
    ],
  },
};

function getFallbackQuestions(subject: string, difficulty: QuestionDifficulty, count: number): { question: string; answer: string; tags: string[] }[] {
  // Try subject-specific static bank first
  const subjectQs = getSubjectQuestions(subject, difficulty);
  if (subjectQs.length > 0) return subjectQs.slice(0, count);
  // Then try FALLBACK_QUESTIONS per-subject entries
  const lower = subject.toLowerCase();
  for (const [key, bank] of Object.entries(FALLBACK_QUESTIONS)) {
    if (key === 'default') continue;
    if (lower.includes(key) || key.includes(lower)) {
      const pool = bank[difficulty] || [];
      if (pool.length > 0) return pool.slice(0, count);
    }
  }
  // Last resort: default bank with subject-name substitution
  const defaultBank = FALLBACK_QUESTIONS.default[difficulty] || [];
  return defaultBank.slice(0, count).map(q => ({
    question: q.question.replace(/\b(system|service|project|role)\b/gi, subject),
    answer: q.answer,
    tags: q.tags,
  }));
}

const SUBJECT_ALIASES: Record<string, string[]> = {
  'dbms': ['database', 'dbms', 'db', 'rdbms'],
  'os': ['operating system', 'os', 'kernel'],
  'dsa': ['data structure', 'algorithm', 'dsa'],
  'oop': ['object oriented', 'oop', 'class', 'inheritance'],
  'html & css': ['html', 'css', 'hypertext', 'cascading'],
  'cicd': ['ci/cd', 'ci', 'cd', 'pipeline', 'continuous'],
};

function isSubjectSpecific(question: string, subject: string): boolean {
  const lowerQ = question.toLowerCase();
  const lowerSubj = subject.toLowerCase();
  const genericPatterns = [
    'tell me about yourself', 'why do you want', 'what are your strengths',
    'what are your weaknesses', 'where do you see yourself',
    'why are you leaving', 'describe a challenging',
    'how do you handle disagreement', 'tell me about a time',
    'describe a time', 'how would your colleagues describe',
    'why should we hire', 'what motivates you',
    'good morning', 'good afternoon', 'good evening',
    'how are you', 'how are you doing', 'nice to meet you',
    'great to have you', 'let me start', 'first of all',
  ];
  for (const gp of genericPatterns) {
    if (lowerQ.includes(gp)) return false;
  }
  // Build keyword list from subject name + aliases
  const keywords: string[] = [];
  for (const [aliasKey, aliasList] of Object.entries(SUBJECT_ALIASES)) {
    if (lowerSubj.includes(aliasKey) || aliasKey.includes(lowerSubj)) {
      keywords.push(...aliasList);
    }
  }
  keywords.push(...lowerSubj.split(/\s+/).filter((kw: string) => kw.length > 2));
  if (keywords.length === 0) return true;
  return keywords.some((kw: string) => lowerQ.includes(kw));
}

function sanitizeQuestion(text: string): string {
  return text
    .replace(/^(Good\s*(morning|afternoon|evening)[\s,!.-]*)/i, '')
    .replace(/^(Hello|Hi|Hey|Greetings)[\s,!.-]*/i, '')
    .replace(/^(Welcome[\s\w,]+!?\s*)/i, '')
    .replace(/^(Let'?s?\s*start\s*(with|by|the)[\s\w]*!?\s*)/i, '')
    .replace(/^(First\s*(of\s*all)?,?\s*)/i, '')
    .trim();
}

function filterSubjectSpecific(questions: any[], subject: string): any[] {
  return questions
    .filter(q => q && q.question && isSubjectSpecific(q.question, subject))
    .map(q => ({ ...q, question: sanitizeQuestion(q.question) }));
}

function extractJsonArray(text: string): any[] {
  const trimmed = text.trim();
  const start = trimmed.indexOf('[');
  const end = trimmed.lastIndexOf(']');
  if (start === -1 || end === -1) throw new Error('No JSON array in response');
  const slice = trimmed.slice(start, end + 1);
  return JSON.parse(slice);
}

// =============== PREFERENCES ===============

router.get('/interview-prep/preferences', authenticate, (req: AuthRequest, res: Response) => {
  const pref = getInterviewPreferenceByUser(req.user!.id);
  res.json(pref || null);
});

router.post('/interview-prep/preferences', authenticate, (req: AuthRequest, res: Response) => {
  const { role, custom_role, experience, subjects, mode, daily_goal } = req.body as Partial<InterviewPreference>;
  if (!role) return res.status(400).json({ error: 'role is required' });
  if (!experience) return res.status(400).json({ error: 'experience is required' });
  if (!Array.isArray(subjects) || subjects.length === 0) return res.status(400).json({ error: 'subjects must be a non-empty array' });
  if (!mode) return res.status(400).json({ error: 'mode is required' });

  const roleDef = getRoleById(role);
  if (!roleDef) return res.status(400).json({ error: 'Invalid role' });
  if (roleDef.isCustom && (!custom_role || !custom_role.trim())) {
    return res.status(400).json({ error: 'custom_role is required for Custom Role' });
  }

  const pref: InterviewPreference = {
    id: `pref_${req.user!.id}`,
    user_id: req.user!.id,
    role,
    custom_role: roleDef.isCustom ? (custom_role || '').trim() : undefined,
    experience: experience as InterviewExperienceLevel,
    subjects: subjects.slice(0, 20),
    mode,
    daily_goal: Math.max(1, Math.min(50, Number(daily_goal) || 5)),
    created_at: getInterviewPreferenceByUser(req.user!.id)?.created_at || new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };
  const saved = upsertInterviewPreference(pref);
  res.json(saved);
});

router.delete('/interview-prep/preferences', authenticate, (req: AuthRequest, res: Response) => {
  const ok = deleteInterviewPreference(req.user!.id);
  res.json({ success: ok });
});

router.get('/interview-prep/roles', (_req, res: Response) => {
  res.json([
    { id: 'software-developer', name: 'Software Developer', description: 'General-purpose software engineering interviews', icon: 'Code2' },
    { id: 'frontend', name: 'Frontend Developer', description: 'React, JS, CSS, browser fundamentals', icon: 'Layout' },
    { id: 'backend', name: 'Backend Developer', description: 'Node.js, databases, API design, system design', icon: 'Server' },
    { id: 'fullstack', name: 'Full Stack Developer', description: 'End-to-end web development', icon: 'Layers' },
    { id: 'data-analyst', name: 'Data Analyst', description: 'SQL, Excel, Python, statistics, visualization', icon: 'BarChart3' },
    { id: 'data-scientist', name: 'Data Scientist', description: 'ML, deep learning, statistics, math', icon: 'Brain' },
    { id: 'devops', name: 'DevOps Engineer', description: 'Linux, Docker, Kubernetes, CI/CD, cloud', icon: 'Cloud' },
    { id: 'qa', name: 'QA / Test Engineer', description: 'Testing fundamentals, automation, Selenium', icon: 'Bug' },
    { id: 'hr', name: 'HR Interview', description: 'Behavioral, aptitude, communication', icon: 'Users' },
    { id: 'custom', name: 'Custom Role', description: 'Type your own subjects and focus', icon: 'Sparkles' },
  ]);
});

router.get('/interview-prep/role/:id', (req, res: Response) => {
  const role = getRoleById(req.params.id);
  if (!role) return res.status(404).json({ error: 'Role not found' });
  res.json(role);
});

// =============== QUESTION GENERATION ===============

router.post('/interview-prep/generate-questions', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { subject, role: roleId, count_per_difficulty } = req.body as { subject: string; role: string; count_per_difficulty?: Partial<Record<QuestionDifficulty, number>> };
    if (!subject || !subject.trim()) return res.status(400).json({ error: 'subject is required' });
    if (!roleId) return res.status(400).json({ error: 'role is required' });

    const pref = getInterviewPreferenceByUser(req.user!.id);
    if (!pref) return res.status(400).json({ error: 'Set up interview preferences first' });

    const existing = getGeneratedQuestionsForSubject(req.user!.id, subject);
    const existingByDiff: Record<QuestionDifficulty, number> = { basic: 0, intermediate: 0, advanced: 0 };
    for (const q of existing) existingByDiff[q.difficulty]++;

    const targets: Record<QuestionDifficulty, number> = {
      basic: count_per_difficulty?.basic ?? 10,
      intermediate: count_per_difficulty?.intermediate ?? 10,
      advanced: count_per_difficulty?.advanced ?? 5,
    };

    const toGenerate: QuestionDifficulty[] = [];
    for (const diff of ['basic', 'intermediate', 'advanced'] as QuestionDifficulty[]) {
      const need = targets[diff] - existingByDiff[diff];
      if (need > 0) toGenerate.push(diff);
    }

    if (toGenerate.length === 0) {
      return res.json({ generated: 0, total: existing.length, message: 'Already have enough questions for this subject' });
    }

    const roleName = pref.custom_role && pref.role === 'custom' ? pref.custom_role : (getRoleById(pref.role)?.name || pref.role);
    const newQuestions: GeneratedInterviewQuestion[] = [];
    const usedFallback: string[] = [];

    for (const diff of toGenerate) {
      const need = targets[diff] - existingByDiff[diff];
      const subjectKeywords = subject.split(/\s+/).join(', ');
      const prompt = `You are an expert technical interviewer preparing questions for a ${pref.experience}-level ${roleName} candidate.

Generate exactly ${need} ${diff.toUpperCase()}-level interview questions on the subject "${subject}".

For each question, return a JSON object with this exact shape:
{ "question": "<the question text>", "answer": "<a clear, 3-6 sentence answer>", "tags": ["<tag1>", "<tag2>"] }

CRITICAL RULES:
- EVERY question MUST be specifically and exclusively about "${subject}"
- Forbidden: generic HR/behavioral questions like "Tell me about yourself", "Why do you want this job", "What are your strengths", "Where do you see yourself", "Describe a challenging project", "Tell me about a time"
- Your question MUST contain keywords like: ${subjectKeywords}
- The answer must demonstrate technical depth specific to ${subject}, not generic advice
- Vary question types: conceptual explanations, compare/contrast, scenario-based problem solving, implementation details
- Return ONLY a JSON array, no markdown, no commentary, no preamble

Example for subject "JavaScript": [{"question":"What is the difference between let and var in JavaScript?","answer":"let is block-scoped...","tags":["variables","scoping"]}]`;

      let aiSucceeded = false;
      try {
        const text = await callOpenRouter([
          { role: 'system', content: 'You output strict JSON arrays only. No markdown, no explanations.' },
          { role: 'user', content: prompt },
        ]);
        const arr = extractJsonArray(text);
        if (Array.isArray(arr)) {
          // Quality check: reject generic questions that lack subject-specific terms
          const filtered = filterSubjectSpecific(arr, subject);
          for (const item of filtered.slice(0, need)) {
            if (!item?.question || !item?.answer) continue;
            newQuestions.push({
              id: `giq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
              user_id: req.user!.id,
              subject,
              role: roleId,
              difficulty: diff,
              question: sanitizeQuestion(String(item.question).trim()),
              answer: String(item.answer).trim(),
              tags: Array.isArray(item.tags) ? item.tags.map((t: any) => String(t).trim()).slice(0, 3) : [],
              source: 'ai',
              created_at: new Date().toISOString(),
            });
          }
          aiSucceeded = newQuestions.filter(q => q.difficulty === diff).length > 0;
          const rejectedCount = arr.length - filtered.length;
          if (rejectedCount > 0) console.log(`[interview-prep] rejected ${rejectedCount} generic questions for ${subject}/${diff}`);
        }
      } catch (err: any) {
        console.error(`[interview-prep] gen failed for ${subject}/${diff}:`, err.message);
      }

      // Static fallback: never let the user see an error
      if (!aiSucceeded) {
        const fallbackPool = getFallbackQuestions(subject, diff, need);
        for (const item of fallbackPool) {
          newQuestions.push({
            id: `giq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            user_id: req.user!.id,
            subject,
            role: roleId,
            difficulty: diff,
            question: sanitizeQuestion(item.question),
            answer: item.answer,
            tags: item.tags,
            source: 'ai',
            created_at: new Date().toISOString(),
          });
        }
        if (fallbackPool.length > 0) usedFallback.push(diff);
      }
    }

    if (usedFallback.length > 0) {
      console.log(`[interview-prep] used static fallback bank for ${subject}: ${usedFallback.join(', ')}`);
    }

    if (newQuestions.length > 0) {
      addGeneratedInterviewQuestions(newQuestions);
    }

    const all = getGeneratedQuestionsForSubject(req.user!.id, subject);
    res.json({ generated: newQuestions.length, total: all.length, questions: all });
  } catch (err: any) {
    console.error('[interview-prep] generate-questions error:', err);
    res.status(500).json({ error: err.message || 'Generation failed' });
  }
});

router.get('/interview-prep/questions/:subject', authenticate, (req: AuthRequest, res: Response) => {
  const subject = req.params.subject;
  const list = getGeneratedQuestionsForSubject(req.user!.id, subject);
  res.json({ subject, count: list.length, questions: list });
});

router.delete('/interview-prep/questions/:subject', authenticate, (req: AuthRequest, res: Response) => {
  const removed = clearGeneratedQuestionsForSubject(req.user!.id, req.params.subject);
  res.json({ removed });
});

// =============== MOCK INTERVIEW ===============

router.post('/interview-prep/mock/start', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { subject, round_type, num_questions } = req.body as { subject: string; round_type: MockRoundType; num_questions?: number };
    if (!subject) return res.status(400).json({ error: 'subject is required' });
    if (!round_type) return res.status(400).json({ error: 'round_type is required' });

    const pref = getInterviewPreferenceByUser(req.user!.id);
    if (!pref) return res.status(400).json({ error: 'Set up interview preferences first' });

    const N = Math.max(3, Math.min(15, Number(num_questions) || 5));

    let pool = getGeneratedQuestionsForSubject(req.user!.id, subject);
    if (pool.length < N) {
      const newOnes: GeneratedInterviewQuestion[] = [];
      try {
        const subjectKeywords = subject.split(/\s+/).join(', ');
        const prompt = `Generate ${Math.max(N, 8)} interview questions on "${subject}" for a ${pref.experience}-level ${getRoleById(pref.role)?.name || pref.role} candidate. Round type: ${round_type}.
Return a JSON array of { "question": "<text>", "answer": "<3-6 sentence answer>", "tags": ["..."] }.
${round_type === 'behavioral' || round_type === 'hr' ? 'Focus on behavioral/situational questions, not technical.' : 'Focus on technical depth.'}
CRITICAL RULES:
- EVERY question MUST be specifically about "${subject}" and contain keywords like: ${subjectKeywords}
- DO NOT generate generic questions like "Tell me about yourself", "Why do you want this job", "What are your strengths"
- Use specific terminology belonging to ${subject}
Output only the JSON array, no markdown.`;
        const text = await callOpenRouter([
          { role: 'system', content: 'You output strict JSON arrays only.' },
          { role: 'user', content: prompt },
        ]);
        const arr = extractJsonArray(text);
        if (Array.isArray(arr)) {
          const filtered = filterSubjectSpecific(arr, subject);
          for (const item of filtered) {
            if (!item?.question || !item?.answer) continue;
            newOnes.push({
              id: `giq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
              user_id: req.user!.id,
              subject,
              role: pref.role,
              difficulty: 'intermediate',
              question: sanitizeQuestion(String(item.question).trim()),
              answer: String(item.answer).trim(),
              tags: Array.isArray(item.tags) ? item.tags.map((t: any) => String(t).trim()).slice(0, 3) : [],
              source: 'ai',
              created_at: new Date().toISOString(),
            });
          }
          const rejected = arr.length - filtered.length;
          if (rejected > 0) console.log(`[interview-prep] mock/start rejected ${rejected} generic questions`);
        }
      } catch (err: any) {
        console.error('[interview-prep] mock/start auto-gen failed:', err.message);
      }

      // Static fallback if AI yielded nothing
      if (newOnes.length === 0) {
        const fallback = getFallbackQuestions(subject, 'intermediate', Math.max(N, 8));
        for (const item of fallback) {
          newOnes.push({
            id: `giq_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            user_id: req.user!.id,
            subject,
            role: pref.role,
            difficulty: 'intermediate',
            question: sanitizeQuestion(item.question),
            answer: item.answer,
            tags: item.tags,
            source: 'ai',
            created_at: new Date().toISOString(),
          });
        }
        if (fallback.length > 0) console.log(`[interview-prep] mock/start used static fallback for ${subject}`);
      }

      if (newOnes.length > 0) {
        addGeneratedInterviewQuestions(newOnes);
        pool = getGeneratedQuestionsForSubject(req.user!.id, subject);
      }
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, N).map(q => ({ id: q.id, question: q.question, expected_answer: q.answer }));

    const session: MockInterviewSession = {
      id: uuidv4(),
      user_id: req.user!.id,
      role: pref.role,
      experience: pref.experience,
      round_type,
      subject,
      questions: picked,
      answers: [],
      overall_score: 0,
      started_at: new Date().toISOString(),
      status: 'in_progress',
    };
    addMockInterviewSession(session);
    res.json(session);
  } catch (err: any) {
    console.error('[interview-prep] mock/start error:', err);
    res.status(500).json({ error: err.message || 'Failed to start mock' });
  }
});

router.post('/interview-prep/mock/:id/answer', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { answer, audio_data_url, question_id } = req.body as { answer: string; audio_data_url?: string; question_id: string };
    if (!answer) return res.status(400).json({ error: 'answer is required' });
    if (!question_id) return res.status(400).json({ error: 'question_id is required' });

    const session = getMockSession(req.params.id, req.user!.id);
    if (!session) return res.status(404).json({ error: 'Session not found' });
    if (session.status !== 'in_progress') return res.status(400).json({ error: 'Session not in progress' });

    const q = session.questions.find(x => x.id === question_id);
    if (!q) return res.status(400).json({ error: 'Question not in session' });

    let feedback = '';
    let technical_accuracy = 0;
    try {
      const prompt = `You are a strict but fair technical interviewer evaluating a candidate's answer.

Question: ${q.question}

Expected/Reference Answer: ${q.expected_answer}

Candidate's Answer: ${answer}

Evaluate ONLY the technical accuracy and correctness. Do NOT evaluate confidence, voice, or delivery.

Return STRICT JSON with this exact shape, no markdown, no preamble:
{ "score": <0-100>, "feedback": "<2-3 sentences of concise, actionable feedback>" }

Scoring guide:
- 0-30: Wrong or missing key concepts
- 31-60: Partial understanding, missing key points
- 61-80: Mostly correct, minor gaps
- 81-100: Excellent, comprehensive answer`;
      const text = await callOpenRouter([
        { role: 'system', content: 'You output strict JSON objects only.' },
        { role: 'user', content: prompt },
      ]);
      const cleaned = text.trim().replace(/^```json\s*/i, '').replace(/```\s*$/i, '');
      const start = cleaned.indexOf('{');
      const end = cleaned.lastIndexOf('}');
      if (start !== -1 && end !== -1) {
        const parsed = JSON.parse(cleaned.slice(start, end + 1));
        technical_accuracy = Math.max(0, Math.min(100, Number(parsed.score) || 0));
        feedback = String(parsed.feedback || 'No feedback provided').trim();
      } else {
        technical_accuracy = 50;
        feedback = 'Could not parse AI feedback, but your answer was recorded.';
      }
    } catch (err: any) {
      console.error('[interview-prep] AI feedback failed:', err.message);
      const words = answer.toLowerCase().split(/\s+/).filter(w => w.length > 3);
      const refWords = q.expected_answer.toLowerCase().split(/\s+/).filter(w => w.length > 3);
      const overlap = refWords.filter(w => words.includes(w)).length;
      technical_accuracy = Math.min(100, Math.round((overlap / Math.max(refWords.length, 1)) * 100));
      feedback = `Heuristic estimate: ${overlap} keyword matches. (AI feedback unavailable.)`;
    }

    const mockAnswer: MockAnswer = {
      question_id,
      question: q.question,
      expected_answer: q.expected_answer,
      user_answer: answer,
      audio_data_url,
      feedback,
      technical_accuracy,
      score: technical_accuracy,
      answered_at: new Date().toISOString(),
    };
    const updatedAnswers = [...session.answers, mockAnswer];
    const total = updatedAnswers.length;
    const overall = Math.round(updatedAnswers.reduce((s, a) => s + a.score, 0) / total);
    updateMockInterviewSession(session.id, req.user!.id, { answers: updatedAnswers, overall_score: overall });

    res.json({ feedback, technical_accuracy, score: technical_accuracy, overall_score: overall, answered: total, total: session.questions.length });
  } catch (err: any) {
    console.error('[interview-prep] answer error:', err);
    res.status(500).json({ error: err.message || 'Failed to evaluate answer' });
  }
});

router.post('/interview-prep/mock/:id/end', authenticate, (req: AuthRequest, res: Response) => {
  const session = getMockSession(req.params.id, req.user!.id);
  if (!session) return res.status(404).json({ error: 'Session not found' });
  const updated = updateMockInterviewSession(session.id, req.user!.id, { status: 'completed', ended_at: new Date().toISOString() });
  res.json(updated);
});

router.post('/interview-prep/mock/:id/abandon', authenticate, (req: AuthRequest, res: Response) => {
  const session = getMockSession(req.params.id, req.user!.id);
  if (!session) return res.status(404).json({ error: 'Session not found' });
  const updated = updateMockInterviewSession(session.id, req.user!.id, { status: 'abandoned', ended_at: new Date().toISOString() });
  res.json(updated);
});

router.get('/interview-prep/mock/sessions', authenticate, (req: AuthRequest, res: Response) => {
  res.json(getMockSessionsByUser(req.user!.id));
});

router.get('/interview-prep/mock/:id', authenticate, (req: AuthRequest, res: Response) => {
  const s = getMockSession(req.params.id, req.user!.id);
  if (!s) return res.status(404).json({ error: 'Session not found' });
  res.json(s);
});

// =============== PDF KIT ===============

function buildKitPdf(kit: InterviewKit, pref: InterviewPreference, roleName: string, sections: { subject: string; questions: GeneratedInterviewQuestion[] }[]): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: 'A4', margin: 50 });
      const chunks: Buffer[] = [];
      doc.on('data', (c: Buffer) => chunks.push(c));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', reject);

      const COLORS = { primary: '#7C3AED', accent: '#EC4899', dark: '#1F2937', gray: '#6B7280', light: '#F3F4F6' };
      const PAGE_W = doc.page.width - 100;

      // ===== COVER =====
      doc.rect(0, 0, doc.page.width, doc.page.height).fill(COLORS.primary);
      doc.fillColor('white').fontSize(44).font('Helvetica-Bold').text('Interview Kit', 50, 200);
      doc.fontSize(28).font('Helvetica').text(roleName, 50, 270);
      doc.fontSize(16).text(`Experience: ${pref.experience}`, 50, 320);
      doc.fontSize(14).text(`Generated on ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}`, 50, 350);
      doc.fontSize(12).text(`CodeSprout · ${kit.total_questions} questions · ${kit.page_count} pages`, 50, 400);
      doc.fontSize(10).fillColor('#E0E7FF').text('Built with CodeSprout Interview Prep', 50, doc.page.height - 80);
      doc.addPage();

      // ===== TABLE OF CONTENTS =====
      doc.fillColor(COLORS.dark).fontSize(28).font('Helvetica-Bold').text('Table of Contents', 50, 50);
      doc.moveDown(1.5);
      doc.font('Helvetica').fontSize(13);
      let y = doc.y;
      sections.forEach((sec, i) => {
        doc.fillColor(COLORS.dark).text(`${i + 1}. ${sec.subject}`, 70, y);
        doc.fillColor(COLORS.gray).text(`${sec.questions.length} questions`, 400, y, { width: 100, align: 'right' });
        y += 28;
      });
      doc.moveDown(2);
      doc.fillColor(COLORS.gray).fontSize(10).text(`Total Questions: ${kit.total_questions}`, { align: 'center' });
      doc.addPage();

      // ===== SECTIONS =====
      let qNum = 0;
      for (const section of sections) {
        if (section.questions.length === 0) continue;
        doc.fillColor(COLORS.primary).fontSize(22).font('Helvetica-Bold').text(section.subject, 50, 50);
        doc.moveDown(0.3);
        doc.fillColor(COLORS.gray).fontSize(11).text(`${section.questions.length} questions · ${pref.experience} level`, { align: 'left' });
        doc.moveDown(1);
        doc.strokeColor(COLORS.primary).lineWidth(2).moveTo(50, doc.y).lineTo(doc.page.width - 50, doc.y).stroke();
        doc.moveDown(1);

        for (const q of section.questions) {
          qNum++;
          if (doc.y > doc.page.height - 150) doc.addPage();
          doc.fillColor(COLORS.dark).fontSize(13).font('Helvetica-Bold').text(`Q${qNum}. ${q.question}`, 50, doc.y, { width: PAGE_W });
          doc.moveDown(0.5);
          const diffColor = q.difficulty === 'basic' ? '#10B981' : q.difficulty === 'advanced' ? '#EF4444' : '#F59E0B';
          doc.fillColor(diffColor).fontSize(9).font('Helvetica').text(q.difficulty.toUpperCase(), 50, doc.y);
          doc.moveDown(0.5);
          doc.fillColor(COLORS.gray).fontSize(11).font('Helvetica').text('Answer:', 50, doc.y);
          doc.moveDown(0.2);
          doc.fillColor(COLORS.dark).fontSize(11).font('Helvetica').text(q.answer, 60, doc.y, { width: PAGE_W - 10, align: 'justify' });
          doc.moveDown(1.2);
        }
        doc.addPage();
      }

      // ===== REVISION NOTES =====
      doc.fillColor(COLORS.primary).fontSize(24).font('Helvetica-Bold').text('Last-Minute Revision', 50, 50);
      doc.moveDown(1);
      doc.fillColor(COLORS.dark).fontSize(12).font('Helvetica');
      const tips = [
        `For ${roleName} interviews at ${pref.experience} level, focus on fundamentals first.`,
        'Practice explaining your thought process out loud before writing code.',
        'Use the STAR method (Situation, Task, Action, Result) for behavioral questions.',
        'Always clarify constraints and edge cases before coding.',
        'Test your solution with at least 2-3 examples, including edge cases.',
        'Communicate time and space complexity at the end of your solution.',
        'Keep answers concise (2-3 minutes) unless asked to elaborate.',
        'Ask clarifying questions — it shows maturity and saves you from wrong assumptions.',
        'Review your strong subjects and weak areas before the interview.',
        'Sleep well, stay hydrated, and arrive 10 minutes early.',
      ];
      for (const tip of tips) {
        if (doc.y > doc.page.height - 80) doc.addPage();
        doc.text(`•  ${tip}`, 60, doc.y, { width: PAGE_W - 20 });
        doc.moveDown(0.5);
      }

      // Footer on each page
      const pageCount = doc.bufferedPageRange().count;
      for (let i = 0; i < pageCount; i++) {
        doc.switchToPage(i);
        if (i > 0) {
          doc.fillColor(COLORS.gray).fontSize(9).font('Helvetica')
            .text(`CodeSprout Interview Kit · ${roleName} · Page ${i + 1} of ${pageCount}`,
              50, doc.page.height - 40, { width: PAGE_W, align: 'center' });
        }
      }

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

router.post('/interview-prep/kit/generate', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const pref = getInterviewPreferenceByUser(req.user!.id);
    if (!pref) return res.status(400).json({ error: 'Set up interview preferences first' });

    const subjects: string[] = (req.body?.subjects && Array.isArray(req.body.subjects) && req.body.subjects.length > 0)
      ? req.body.subjects
      : pref.subjects;
    const maxPerSubject = Math.max(10, Math.min(100, Number(req.body?.max_per_subject) || 25));

    const sections: { subject: string; questions: GeneratedInterviewQuestion[] }[] = [];
    let totalQ = 0;
    for (const subj of subjects) {
      const all = getGeneratedQuestionsForSubject(req.user!.id, subj);
      const ordered = [...all].sort((a, b) => {
        const order: Record<QuestionDifficulty, number> = { basic: 0, intermediate: 1, advanced: 2 };
        return order[a.difficulty] - order[b.difficulty];
      });
      const picked = ordered.slice(0, maxPerSubject);
      if (picked.length > 0) {
        sections.push({ subject: subj, questions: picked });
        totalQ += picked.length;
      }
    }

    if (totalQ === 0) {
      return res.status(400).json({ error: 'No questions available for the selected subjects. Generate questions first by opening each subject.' });
    }

    const roleName = pref.custom_role && pref.role === 'custom' ? pref.custom_role : (getRoleById(pref.role)?.name || pref.role);
    const roleDisplay = `${roleName} (${pref.experience})`;
    const kit: InterviewKit = {
      id: `kit_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
      user_id: req.user!.id,
      role: pref.role,
      custom_role: pref.custom_role,
      experience: pref.experience,
      subjects: sections.map(s => s.subject),
      file_url: '',
      total_questions: totalQ,
      page_count: 0,
      created_at: new Date().toISOString(),
    };

    const buf = await buildKitPdf(kit, pref, roleDisplay, sections);
    kit.page_count = Math.ceil(buf.length / 3000) + sections.length * 2 + 5;

    const fileName = `${kit.id}.pdf`;
    const dataUrl = `data:application/pdf;base64,${buf.toString('base64')}`;
    kit.file_url = dataUrl;
    addInterviewKit(kit);

    res.json({ ...kit, file_url: dataUrl, role_name: roleName });
  } catch (err: any) {
    console.error('[interview-prep] kit error:', err);
    res.status(500).json({ error: err.message || 'Failed to generate kit' });
  }
});

router.get('/interview-prep/kits', authenticate, (req: AuthRequest, res: Response) => {
  res.json(getInterviewKitsByUser(req.user!.id));
});

router.get('/interview-prep/kit/:id', authenticate, (req: AuthRequest, res: Response) => {
  const kit = getInterviewKit(req.params.id, req.user!.id);
  if (!kit) return res.status(404).json({ error: 'Kit not found' });
  const pref = getInterviewPreferenceByUser(req.user!.id);
  const roleName = pref?.custom_role && pref.role === 'custom' ? pref.custom_role : (getRoleById(pref?.role || '')?.name || kit.role);
  res.json({ ...kit, role_name: roleName });
});

// =============== AI INTERVIEW ENGINE (Multi-Round) ===============

router.post('/interview-prep/ai-interview/start', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const pref = getInterviewPreferenceByUser(req.user!.id);
    if (!pref) return res.status(400).json({ error: 'Set up interview preferences first' });
    const roleDef = getRoleById(pref.role);
    const roleName = pref.custom_role && pref.role === 'custom' ? pref.custom_role : (roleDef?.name || pref.role);
    const state = createAiSession(req.user!.id, pref.role, pref.experience, pref.subjects, pref.custom_role);
    saveAiSession(state);
    // Get greeting from AI
    const { reply, updatedState } = await processAiInterviewTurn(state, 'Start the interview');
    saveAiSession(updatedState);
    res.json({ sessionId: updatedState.id, reply, round: updatedState.rounds[updatedState.current_round_idx].type, state: updatedState });
  } catch (err: any) {
    console.error('[ai-interview] start error:', err);
    res.status(500).json({ error: err.message || 'Failed to start interview' });
  }
});

router.post('/interview-prep/ai-interview/:id/chat', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { message } = req.body as { message: string };
    if (!message || !message.trim()) return res.status(400).json({ error: 'message is required' });
    const state = getAiSession(req.params.id, req.user!.id);
    if (!state) return res.status(404).json({ error: 'Session not found' });
    if (state.status !== 'in_progress') return res.status(400).json({ error: 'Interview already completed' });
    const { reply, updatedState } = await processAiInterviewTurn(state, message);
    saveAiSession(updatedState);
    const round = updatedState.rounds[updatedState.current_round_idx];
    const completedRounds = updatedState.rounds.filter(r => r.status === 'completed').map(r => ({ type: r.type, score: r.score }));
    res.json({
      reply,
      round: round.type,
      difficulty: round.difficulty,
      roundNumber: updatedState.current_round_idx + 1,
      totalRounds: updatedState.rounds.length,
      interviewComplete: updatedState.status === 'completed',
      completedRounds,
    });
  } catch (err: any) {
    console.error('[ai-interview] chat error:', err);
    res.status(500).json({ error: err.message || 'Chat failed' });
  }
});

router.get('/interview-prep/ai-interview/:id', authenticate, (req: AuthRequest, res: Response) => {
  const state = getAiSession(req.params.id, req.user!.id);
  if (!state) return res.status(404).json({ error: 'Session not found' });
  res.json({ state });
});

router.post('/interview-prep/ai-interview/:id/end', authenticate, (req: AuthRequest, res: Response) => {
  const state = getAiSession(req.params.id, req.user!.id);
  if (!state) return res.status(404).json({ error: 'Session not found' });
  state.status = 'abandoned';
  state.ended_at = new Date().toISOString();
  saveAiSession(state);
  res.json({ success: true });
});

router.get('/interview-prep/ai-interview/:id/report', authenticate, (req: AuthRequest, res: Response) => {
  const state = getAiSession(req.params.id, req.user!.id);
  if (!state) return res.status(404).json({ error: 'Session not found' });
  if (state.status === 'in_progress') return res.status(400).json({ error: 'Interview still in progress' });
  const report = JSON.parse(generateAiInterviewReport(state));
  res.json({ report, conversation: state.conversation, rounds: state.rounds.map((r: any) => ({ type: r.type, difficulty: r.difficulty, score: r.score, questions_asked: r.questions_asked })) });
});

router.get('/interview-prep/ai-interviews', authenticate, (req: AuthRequest, res: Response) => {
  const list = getAiSessionsByUser(req.user!.id);
  res.json(list.map((s: AiSessionState) => ({
    id: s.id, role: s.role, status: s.status, started_at: s.started_at,
    overall_score: s.overall_score, rounds: s.rounds.map(r => ({ type: r.type, score: r.score })),
  })));
});

export default router;

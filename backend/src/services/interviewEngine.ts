import { v4 as uuidv4 } from 'uuid';
import type { InterviewExperienceLevel } from '../types';

// ====== TYPES ======

export type AiRoundType = 'greeting' | 'technical' | 'coding' | 'behavioral' | 'hr' | 'counter' | 'closing';

export interface AiConversationTurn {
  role: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export interface AiAnswerEvaluation {
  score: number;
  comprehension: 'excellent' | 'good' | 'partial' | 'poor';
  missing_points: string[];
}

export interface AiRoundState {
  type: AiRoundType;
  difficulty: 'easy' | 'medium' | 'hard';
  status: 'pending' | 'in_progress' | 'completed';
  questions_asked: number;
  evaluations: AiAnswerEvaluation[];
  score?: number;
}

export interface AiSessionState {
  id: string;
  user_id: string;
  role: string;
  custom_role?: string;
  experience: InterviewExperienceLevel;
  subjects: string[];
  rounds: AiRoundState[];
  current_round_idx: number;
  conversation: AiConversationTurn[];
  candidate_name?: string;
  candidate_tech?: string[];
  overall_score?: number;
  started_at: string;
  ended_at?: string;
  status: 'in_progress' | 'completed' | 'abandoned';
}

export interface AiEngineResponse {
  reply: string;
  evaluation?: AiAnswerEvaluation;
  round_complete: boolean;
  interview_complete: boolean;
  difficulty_change?: 'up' | 'down' | 'same';
}

// ====== PROMPTS ======

const ROUND_PROMPTS: Record<AiRoundType, string> = {
  greeting: `You are a friendly senior interviewer starting a mock interview.

Your job: Welcome the candidate, introduce yourself, and ask about them naturally.

Ask their:
- Name
- Role they're preparing for
- Years of experience
- Technologies they're comfortable with

Keep it warm and conversational. Ask one thing at a time. After they answer each, acknowledge and ask the next. Once you have all info, say you're ready to begin and signal round complete.

CRITICAL: Output ONLY a JSON object with this exact format:
{ "reply": "<your greeting message>", "round_complete": false }`,

  technical: `You are a senior technical interviewer conducting a mock interview.

CANDIDATE: {candidate_info}
CURRENT DIFFICULTY: {difficulty}
ROUND: Technical ({round_num}/6)

RULES:
- Ask ONE technical question at a time
- Question MUST be specifically about {subjects}
- After candidate answers, give brief feedback (1 sentence), then ask a FOLLOW-UP that dives deeper
- If answer is excellent (depth, accuracy), increase difficulty and ask harder follow-up
- If answer is partial or wrong, ask an easier follow-up or give a hint
- Keep your responses concise (2-4 sentences)
- Vary question types: conceptual, compare/contrast, scenario, implementation
- After 3-5 Q&A exchanges, signal round complete

Output JSON:
{ "reply": "<your message>", "evaluation": { "score": <0-100>, "comprehension": "excellent|good|partial|poor", "missing_points": ["point1"] }, "round_complete": <true/false>, "difficulty_change": "up|down|same" }`,

  coding: `You are a senior technical interviewer conducting a coding round.

CANDIDATE: {candidate_info}
DIFFICULTY: {difficulty}

RULES:
- Give ONE coding problem at a time
- Ask the candidate to write code in the chat
- After they submit, evaluate: correctness, time complexity, space complexity, edge cases
- If solution has issues, point out and ask them to fix
- If correct, ask optimization follow-up or give harder variant
- Keep responses focused on the code
- After 1-2 problems, signal round complete

Output JSON:
{ "reply": "<your message>", "evaluation": { "score": <0-100>, "comprehension": "excellent|good|partial|poor", "missing_points": ["missing edge case X"] }, "round_complete": <true/false> }`,

  behavioral: `You are an interviewer conducting a behavioral round using the STAR method.

CANDIDATE: {candidate_info}

RULES:
- Ask behavioral questions one at a time
- Cover: teamwork, conflict, failure, leadership, pressure
- After each answer, ask a follow-up that probes deeper (what was your specific role? what was the outcome? what did you learn?)
- Evaluate based on: clarity, structure (STAR), self-awareness, outcome orientation
- Keep responses natural and conversational
- After 3-5 questions, signal round complete

Output JSON:
{ "reply": "<your message>", "evaluation": { "score": <0-100>, "comprehension": "excellent|good|partial|poor", "missing_points": ["lacked specific outcome"] }, "round_complete": <true/false> }`,

  hr: `You are an HR interviewer.

CANDIDATE: {candidate_info}

RULES:
- Ask standard HR questions: tell me about yourself, why this role, strengths, weaknesses, where you see yourself in 5 years, why we should hire you
- One question at a time
- After each answer, give brief feedback and ask the next question
- Keep responses professional but warm
- After 4-5 questions, signal round complete

Output JSON:
{ "reply": "<your message>", "evaluation": { "score": <0-100>, "comprehension": "excellent|good|partial|poor", "missing_points": [] }, "round_complete": <true/false> }`,

  counter: `You are a recruiter at the end of an interview.

RULES:
- Ask the candidate: "Do you have any questions for me?"
- Answer any questions they ask as a knowledgeable recruiter would
- Be honest and informative
- If they have no questions, suggest 1-2 things they could ask
- After 1-3 exchanges, signal round complete

Output JSON:
{ "reply": "<your message>", "evaluation": { "score": 0, "comprehension": "good", "missing_points": [] }, "round_complete": <true/false> }`,

  closing: `You are an interviewer wrapping up the interview.

RULES:
- Thank the candidate for their time
- Tell them what to expect next (feedback report will be available shortly)
- Keep it brief and professional
- Signal interview complete

Output JSON:
{ "reply": "<your message>", "round_complete": true, "interview_complete": true }`,
};

// ====== ENGINE ======

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const MODEL = process.env.OPENROUTER_MODEL || 'meta-llama/llama-3.3-70b-instruct:free';

async function callAi(messages: { role: string; content: string }[]): Promise<string> {
  if (!OPENROUTER_API_KEY) return JSON.stringify({ reply: 'I see. Let me continue with the next question.' });
  try {
    const res = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'https://codesprout.com',
        'X-Title': 'CodeSprout AI Interviewer',
      },
      body: JSON.stringify({ model: MODEL, messages, temperature: 0.7, max_tokens: 1024 }),
      signal: AbortSignal.timeout(30000),
    });
    if (!res.ok) { const t = await res.text().catch(() => ''); console.error('[AiEngine] API error:', t.slice(0, 200)); return JSON.stringify({ reply: 'Interesting. Let me ask you the next question.' }); }
    const data = await res.json() as any;
    return data?.choices?.[0]?.message?.content || JSON.stringify({ reply: 'Thank you for your answer. Let us continue.' });
  } catch (err: any) {
    console.error('[AiEngine] fetch error:', err.message);
    return JSON.stringify({ reply: 'Got it. Moving to the next question.' });
  }
}

function parseAiResponse(text: string): AiEngineResponse {
  // Try to find and parse JSON block
  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (jsonMatch) {
    try {
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        reply: parsed.reply || text.replace(/\{[\s\S]*\}/, '').trim() || 'Let me ask you the next question.',
        evaluation: parsed.evaluation,
        round_complete: !!parsed.round_complete,
        interview_complete: !!parsed.interview_complete,
        difficulty_change: parsed.difficulty_change || 'same',
      };
    } catch {}
  }
  // Fallback: treat entire response as reply
  return { reply: text, round_complete: false, interview_complete: false };
}

function buildConversationMessages(
  state: AiSessionState,
  userMessage: string,
): { role: string; content: string }[] {
  const round = state.rounds[state.current_round_idx];
  const candidateInfo = `Role: ${state.custom_role || state.role}, Experience: ${state.experience}, Subjects: ${state.subjects.join(', ')}${state.candidate_name ? `, Name: ${state.candidate_name}` : ''}${state.candidate_tech ? `, Tech Stack: ${state.candidate_tech?.join(', ')}` : ''}`;

  let systemPrompt = ROUND_PROMPTS[round.type]
    .replace('{candidate_info}', candidateInfo)
    .replace('{difficulty}', round.difficulty)
    .replace('{subjects}', state.subjects.join(', '))
    .replace('{round_num}', String(state.current_round_idx + 1));

  const messages: { role: string; content: string }[] = [
    { role: 'system', content: systemPrompt },
  ];

  // Add recent conversation (last 10 turns to keep context manageable)
  const recentConv = state.conversation.slice(-10);
  for (const turn of recentConv) {
    messages.push({ role: turn.role === 'ai' ? 'assistant' : 'user', content: turn.text });
  }

  // Add current user message
  messages.push({ role: 'user', content: userMessage });

  return messages;
}

export async function processAiInterviewTurn(
  state: AiSessionState,
  userMessage: string,
): Promise<{ reply: string; updatedState: AiSessionState }> {
  const round = state.rounds[state.current_round_idx];
  const messages = buildConversationMessages(state, userMessage);
  const raw = await callAi(messages);
  const parsed = parseAiResponse(raw);

  // Add turns to conversation
  state.conversation.push({ role: 'user', text: userMessage, timestamp: new Date().toISOString() });
  state.conversation.push({ role: 'ai', text: parsed.reply, timestamp: new Date().toISOString() });

  // Store evaluation if present
  if (parsed.evaluation && round.type !== 'counter' && round.type !== 'closing') {
    round.evaluations.push(parsed.evaluation);
    round.score = Math.round(
      round.evaluations.reduce((s, e) => s + e.score, 0) / round.evaluations.length,
    );
  }
  round.questions_asked++;

  // Difficulty adaptation
  if (parsed.difficulty_change === 'up' && round.difficulty !== 'hard') {
    const levels: ['easy', 'medium', 'hard'] = ['easy', 'medium', 'hard'];
    const idx = levels.indexOf(round.difficulty);
    if (idx < 2) round.difficulty = levels[idx + 1];
  } else if (parsed.difficulty_change === 'down' && round.difficulty !== 'easy') {
    const levels: ['easy', 'medium', 'hard'] = ['easy', 'medium', 'hard'];
    const idx = levels.indexOf(round.difficulty);
    if (idx > 0) round.difficulty = levels[idx - 1];
  }

  // Round transitions
  if (parsed.round_complete || round.questions_asked >= 8) {
    round.status = 'completed';
    if (state.current_round_idx < state.rounds.length - 1) {
      state.current_round_idx++;
      state.rounds[state.current_round_idx].status = 'in_progress';
    } else {
      state.status = 'completed';
      state.ended_at = new Date().toISOString();
      // Calculate overall score
      const scores = state.rounds
        .filter(r => r.score !== undefined)
        .map(r => r.score!);
      state.overall_score = scores.length > 0
        ? Math.round(scores.reduce((s, x) => s + x, 0) / scores.length)
        : 0;
    }
  }

  return { reply: parsed.reply, updatedState: { ...state } };
}

export function createAiSession(
  userId: string,
  role: string,
  experience: InterviewExperienceLevel,
  subjects: string[],
  customRole?: string,
): AiSessionState {
  const roundTypes: AiRoundType[] = ['greeting', 'technical', 'behavioral', 'hr', 'counter', 'closing'];
  const rounds: AiRoundState[] = roundTypes.map((type, i) => ({
    type,
    difficulty: experience === 'fresher' || experience === 'junior' ? 'easy' : experience === 'mid' ? 'medium' : 'hard',
    status: i === 0 ? 'in_progress' : 'pending',
    questions_asked: 0,
    evaluations: [],
  }));

  return {
    id: `ai_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
    user_id: userId,
    role,
    custom_role: customRole,
    experience,
    subjects,
    rounds,
    current_round_idx: 0,
    conversation: [],
    started_at: new Date().toISOString(),
    status: 'in_progress',
  };
}

export function generateAiInterviewReport(state: AiSessionState): string {
  const scores = state.rounds.filter(r => r.score !== undefined);
  const avg = scores.length > 0 ? Math.round(scores.reduce((s, r) => s + r.score!, 0) / scores.length) : 0;

  // Categorize scores
  const categories: Record<string, number> = {};
  for (const round of state.rounds) {
    const key = round.type === 'technical' ? 'Technical Skills' :
                round.type === 'behavioral' ? 'Behavioral Answers' :
                round.type === 'hr' ? 'Communication' :
                round.type === 'coding' ? 'Problem Solving' :
                round.type === 'greeting' ? 'Confidence' : '';
    if (key && round.score) categories[key] = round.score;
  }

  // Collect strengths/weaknesses
  const allMissing = state.rounds.flatMap(r => r.evaluations.flatMap(e => e.missing_points));
  const excellentRounds = state.rounds.filter(r => r.score && r.score >= 80).map(r => r.type);
  const poorRounds = state.rounds.filter(r => r.score && r.score < 60).map(r => r.type);

  const report = {
    overall: avg,
    breakdown: Object.entries(categories).map(([name, score]) => ({ name, score })),
    strengths: excellentRounds.map(r => {
      const labels: Record<string, string> = { technical: 'Strong technical knowledge', behavioral: 'Good behavioral responses', hr: 'Clear communication', greeting: 'Good confidence', coding: 'Strong problem solving' };
      return labels[r] || `${r} round performed well`;
    }),
    weaknesses: poorRounds.map(r => {
      const labels: Record<string, string> = { technical: 'Need deeper technical understanding', behavioral: 'Answers need more structure (STAR method)', hr: 'Improve HR question responses', coding: 'Need more coding practice', greeting: 'Work on introduction confidence' };
      return labels[r] || `${r} round needs improvement`;
    }),
    missing_points: [...new Set(allMissing)].slice(0, 5),
    recommendations: generateRecommendations(state, poorRounds, allMissing),
  };

  return JSON.stringify(report, null, 2);
}

function generateRecommendations(state: AiSessionState, poorRounds: string[], missing: string[]): string[] {
  const recs: string[] = [];
  if (poorRounds.includes('technical')) recs.push('Review core concepts in ' + state.subjects.join(', '));
  if (poorRounds.includes('coding')) recs.push('Practice coding problems on platforms like LeetCode');
  if (poorRounds.includes('behavioral')) recs.push('Prepare STAR-format stories for common behavioral questions');
  if (poorRounds.includes('hr')) recs.push('Practice answering "Tell me about yourself" and strengths/weaknesses');
  if (missing.some(m => m.toLowerCase().includes('edge case'))) recs.push('Pay attention to edge cases when solving problems');
  if (missing.some(m => m.toLowerCase().includes('complexity'))) recs.push('Always analyze time and space complexity');
  if (recs.length === 0) recs.push('Keep practicing to maintain your skills');
  return recs;
}

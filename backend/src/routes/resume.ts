import { Router, Request, Response } from 'express';
import { authenticate, AuthRequest } from '../middleware/auth';
import { getDb, saveDb } from '../data/db';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import type { ParsedResume, ResumeSection, ResumeScore, ResumeAnalysis, ResumeTemplate } from '../types';

let pdfParse: any = null;
let mammoth: any = null;
try { pdfParse = require('pdf-parse'); } catch (e) { console.warn('[resume] pdf-parse not available:', (e as Error).message); }
try { mammoth = require('mammoth'); } catch (e) { console.warn('[resume] mammoth not available:', (e as Error).message); }

const router = Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

const OLLAMA_URL = process.env.OLLAMA_URL || 'http://localhost:11434';
const OLLAMA_MODEL = process.env.OLLAMA_MODEL || 'llama3.1';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '';
const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || 'meta-llama/llama-3.3-70b-instruct:free';

// ====== RESUME TEMPLATES ======
const TEMPLATES: ResumeTemplate[] = [
  { id: 'ats-beginner', name: 'ATS Beginner', description: 'Clean single-column layout optimized for ATS parsers', category: 'ats-beginner', preview: '/resume-templates/ats-beginner.png', is_ats_friendly: true, columns: 1, colors: ['#1e293b', '#f8fafc', '#ffffff'] },
  { id: 'sde', name: 'SDE Resume', description: 'Software engineering focused with technical skills emphasis', category: 'sde', preview: '/resume-templates/sde.png', is_ats_friendly: true, columns: 1, colors: ['#0f172a', '#e2e8f0', '#ffffff'] },
  { id: 'frontend', name: 'Frontend Resume', description: 'Modern layout with visual portfolio & project highlights', category: 'frontend', preview: '/resume-templates/frontend.png', is_ats_friendly: false, columns: 2, colors: ['#312e81', '#f0f9ff', '#ffffff'] },
  { id: 'backend', name: 'Backend Resume', description: 'System design & architecture focused clean format', category: 'backend', preview: '/resume-templates/backend.png', is_ats_friendly: true, columns: 1, colors: ['#1e3a5f', '#f1f5f9', '#ffffff'] },
  { id: 'ai-ml', name: 'AI/ML Resume', description: 'Research & model-focused layout for data scientists', category: 'ai-ml', preview: '/resume-templates/ai-ml.png', is_ats_friendly: false, columns: 2, colors: ['#581c87', '#fdf4ff', '#ffffff'] },
  { id: 'fullstack', name: 'Full Stack Resume', description: 'Versatile format balancing frontend & backend skills', category: 'fullstack', preview: '/resume-templates/fullstack.png', is_ats_friendly: true, columns: 1, colors: ['#0d9488', '#f0fdfa', '#ffffff'] },
  { id: 'executive', name: 'Executive Resume', description: 'Leadership-focused layout for senior management roles', category: 'executive', preview: '/resume-templates/executive.png', is_ats_friendly: true, columns: 1, colors: ['#1e3a8a', '#f8fafc', '#ffffff'] },
  { id: 'minimalist', name: 'Minimalist Resume', description: 'Clean, spacious design with elegant typography', category: 'minimalist', preview: '/resume-templates/minimalist.png', is_ats_friendly: true, columns: 1, colors: ['#475569', '#ffffff', '#ffffff'] },
  { id: 'creative', name: 'Creative Resume', description: 'Bold gradient header with portfolio metrics section', category: 'creative', preview: '/resume-templates/creative.png', is_ats_friendly: false, columns: 1, colors: ['#7c3aed', '#fdf4ff', '#ffffff'] },
  { id: 'technical', name: 'Technical Resume', description: 'Skills-first layout with visual proficiency bars', category: 'technical', preview: '/resume-templates/technical.png', is_ats_friendly: true, columns: 1, colors: ['#0369a1', '#f0f9ff', '#ffffff'] },
  { id: 'professional', name: 'Professional Resume', description: 'Polished one-page layout with a strong header and balanced sections', category: 'professional', preview: '', is_ats_friendly: true, columns: 1, colors: ['#0f172a', '#e2e8f0', '#ffffff'] },
  { id: 'academic', name: 'Academic Resume', description: 'Research & publication focused for academia roles', category: 'academic', preview: '/resume-templates/academic.png', is_ats_friendly: false, columns: 1, colors: ['#b91c1c', '#fef2f2', '#ffffff'] },
];

// ====== RULE ENGINE ======
interface Rule { id: string; section: string; label: string; check: (sections: ResumeSection[], text: string) => boolean; points: number; }

const RULES: Rule[] = [
  { id: 'linkedin', section: 'basic_info', label: 'LinkedIn URL present', check: (_, t) => /linkedin\.com\/in\//i.test(t), points: 5 },
  { id: 'github', section: 'basic_info', label: 'GitHub URL present', check: (_, t) => /github\.com\//i.test(t), points: 5 },
  { id: 'portfolio', section: 'basic_info', label: 'Portfolio URL present', check: (_, t) => /portfolio|vercel\.app|netlify\.app/i.test(t) || /(?:https?:\/\/)?[\w-]+\.(?:com|dev|app)/i.test(t), points: 5 },
  { id: 'phone', section: 'basic_info', label: 'Phone number present', check: (_, t) => /[\+\d\s\-\(\)]{10,}/i.test(t), points: 3 },
  { id: 'email', section: 'basic_info', label: 'Email present', check: (_, t) => /[\w.-]+@[\w.-]+\.\w+/i.test(t), points: 3 },
  { id: 'projects_3plus', section: 'projects', label: '3+ Projects', check: (s) => { const p = s.find(x => x.type === 'projects'); return p ? (p.items?.length || 1) >= 3 : false; }, points: 10 },
  { id: 'project_metrics', section: 'projects', label: 'Project metrics/impact', check: (_, t) => /\d+%|\d+x|\d+ users|\d+ requests|\d+ ms|\d+ stars/i.test(t), points: 10 },
  { id: 'github_links_projects', section: 'projects', label: 'GitHub links in projects', check: (_, t) => /github\.com/i.test(t) && /\b(?:project|app|built|developed|created)\b/i.test(t), points: 5 },
  { id: 'dsa_mentioned', section: 'skills', label: 'DSA mentioned', check: (_, t) => /\b(dsa|data structure|algorithm|leetcode|codeforces|codechef)\b/i.test(t), points: 5 },
  { id: 'sql_mentioned', section: 'skills', label: 'SQL mentioned', check: (_, t) => /\b(sql|database|postgresql|mysql|mongodb)\b/i.test(t), points: 5 },
  { id: 'git_mentioned', section: 'skills', label: 'Git mentioned', check: (_, t) => /\bgit|github|version control\b/i.test(t), points: 5 },
  { id: 'experience_metrics', section: 'experience', label: 'Experience with metrics', check: (_, t) => /\b(?:led|managed|increased|decreased|reduced|improved|delivered)\b.*\d+/i.test(t), points: 10 },
  { id: 'education_bachelors', section: 'education', label: 'Bachelor\'s degree or higher', check: (_, t) => /\b(bachelor|b\.?tech|b\.?e|b\.?s|master|m\.?tech|m\.?s|phd|ph\.?d)\b/i.test(t), points: 5 },
  { id: 'ats_single_column', section: 'ats', label: 'Single column layout', check: (_, t) => { const lines = t.split('\n').filter(l => l.trim()); const avgLen = lines.reduce((a, l) => a + l.length, 0) / (lines.length || 1); return avgLen > 40; }, points: 10 },
  { id: 'ats_no_tables', section: 'ats', label: 'No tables detected', check: (_, t) => !/─+.*─+|┌|┐|└|┘|├|┤|┬|┴|┼|\|\s*[A-Z]+\s*\|/.test(t), points: 10 },
  { id: 'ats_readable_font', section: 'ats', label: 'Readable font size indicators', check: (_, t) => t.split('\n').filter(l => l.trim().length > 20).length > 15, points: 5 },
];

function calcScore(sections: ResumeSection[], rawText: string): ResumeScore {
  let basicInfo = 0, projects = 0, skills = 0, experience = 0, education = 0, ats = 0;
  for (const rule of RULES) {
    if (rule.check(sections, rawText)) {
      switch (rule.section) {
        case 'basic_info': basicInfo += rule.points; break;
        case 'projects': projects += rule.points; break;
        case 'skills': skills += rule.points; break;
        case 'experience': experience += rule.points; break;
        case 'education': education += rule.points; break;
        case 'ats': ats += rule.points; break;
      }
    }
  }
  const total = Math.min(100, basicInfo + projects + skills + experience + education + ats);
  return { total, breakdown: { basic_info: basicInfo, projects: projects, skills: skills, experience: experience, education: education, ats: ats } };
}

// ====== TEXT EXTRACTION ======
async function extractTextFromBuffer(buffer: Buffer, mime: string): Promise<string> {
  if (mime === 'application/pdf' || mime.includes('pdf')) {
    if (pdfParse) {
      try {
        const data = await pdfParse(buffer);
        if (data.text && data.text.trim().length > 10) return data.text;
      } catch (e: any) { console.error('[resume] pdf-parse error:', e.message); }
    }
    return buffer.toString('utf-8').replace(/[^\x20-\x7E\n]/g, '');
  }
  if (mime.includes('word') || mime.includes('docx') || mime.includes('officedocument')) {
    if (mammoth) {
      try {
        const r = await mammoth.extractRawText({ buffer });
        if (r.value && r.value.trim().length > 10) return r.value;
      } catch (e: any) { console.error('[resume] mammoth error:', e.message); }
    }
    return buffer.toString('utf-8');
  }
  return buffer.toString('utf-8');
}

function extractSections(text: string): ResumeSection[] {
  const sections: ResumeSection[] = [];

  const emailMatch = text.match(/[\w.-]+@[\w.-]+\.\w+/);
  if (emailMatch) sections.push({ type: 'email', value: emailMatch[0] });

  const phoneMatch = text.match(/[\+]?[\d\s\-\(\)]{10,}/);
  if (phoneMatch) sections.push({ type: 'phone', value: phoneMatch[0].trim() });

  const linkedinMatch = text.match(/linkedin\.com\/in\/[\w-]+/i);
  if (linkedinMatch) sections.push({ type: 'linkedin', value: linkedinMatch[0] });

  const githubMatch = text.match(/github\.com\/[\w-]+/i);
  if (githubMatch) sections.push({ type: 'github', value: githubMatch[0] });

  const nameMatch = text.match(/^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)+)/m);
  if (nameMatch) sections.push({ type: 'name', value: nameMatch[1] });

  const skillKeywords = ['python', 'javascript', 'typescript', 'java', 'c++', 'react', 'node', 'angular', 'vue', 'docker', 'kubernetes', 'aws', 'gcp', 'azure', 'sql', 'mongodb', 'redis', 'graphql', 'rest', 'git', 'linux', 'html', 'css', 'tailwind', 'sass', 'express', 'django', 'flask', 'spring', 'next', 'nuxt', 'nestjs'];
  const foundSkills = skillKeywords.filter(sk => new RegExp('\\b' + sk.replace(/[+\/]/g, '\\$&') + '\\b', 'i').test(text));
  if (foundSkills.length > 0) sections.push({ type: 'skills', value: foundSkills.join(', '), items: foundSkills });

  const eduKeywords = ['bachelor', 'b.tech', 'b.e', 'master', 'm.tech', 'm.s', 'phd', 'ph.d', 'bca', 'mca', 'degree', 'university', 'college', 'school', 'institute', 'b.sc', 'm.sc'];
  const eduLines = text.split('\n').filter(l => eduKeywords.some(k => l.toLowerCase().includes(k)));
  if (eduLines.length > 0) sections.push({ type: 'education', value: eduLines.join('; '), items: eduLines.map(l => l.trim()) });

  return sections;
}

// ====== AI ANALYSIS ======
async function callOllama(prompt: string): Promise<string> {
  const r = await fetch(`${OLLAMA_URL}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: OLLAMA_MODEL, prompt, stream: false, options: { num_predict: 2048 } }),
  });
  if (!r.ok) throw new Error(`Ollama error: ${r.status}`);
  const d: any = await r.json();
  return d.response || '';
}

async function callGemini(prompt: string): Promise<string> {
  if (!GEMINI_API_KEY) throw new Error('GEMINI_API_KEY not configured');
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }], generationConfig: { maxOutputTokens: 2048 } }),
  });
  if (!r.ok) throw new Error(`Gemini error: ${r.status}`);
  const d: any = await r.json();
  return d?.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

async function callOpenRouter(prompt: string): Promise<string> {
  if (!OPENROUTER_API_KEY) throw new Error('OPENROUTER_API_KEY not configured');
  const r = await fetch(OPENROUTER_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${OPENROUTER_API_KEY}` },
    body: JSON.stringify({ model: OPENROUTER_MODEL, messages: [{ role: 'user', content: prompt }], max_tokens: 2048 }),
  });
  if (!r.ok) { const errBody = await r.text().catch(() => ''); throw new Error(`OpenRouter error ${r.status}: ${errBody}`); }
  const d: any = await r.json();
  return d?.choices?.[0]?.message?.content || '';
}

async function analyzeWithAI(text: string): Promise<{ analysis: Omit<ResumeAnalysis, 'rewrite_suggestions'>; rewrites: { original: string; rewritten: string }[] }> {
  const prompt = `Analyze this resume text. Return STRICT JSON only (no markdown). Format:
{
  "strength": "Low"|"Medium"|"High",
  "weak_areas": ["..."],
  "missing_sections": ["..."],
  "ats_improvements": ["..."],
  "project_suggestions": ["..."],
  "skill_suggestions": ["..."],
  "template_recommendation": "...",
  "ats_friendly": number(0-100),
  "project_score": number(0-10),
  "rewrites": [{"original": "...existing bullet...", "rewritten": "...improved..."}]
}

Resume:
${text.slice(0, 8000)}`;

  let raw: string;
  try {
    raw = await callOpenRouter(prompt);
  } catch (e1) {
    console.error('[resume] OpenRouter failed:', (e1 as Error).message);
    try {
      raw = await callGemini(prompt);
    } catch (e2) {
      console.error('[resume] Gemini failed:', (e2 as Error).message);
      try {
        raw = await callOllama(prompt);
      } catch {
        raw = '{}';
      }
    }
  }

  try {
    const cleaned = raw.replace(/```(?:json)?\n?/g, '').trim();
    const parsed = JSON.parse(cleaned);
    return {
      analysis: {
        strength: parsed.strength || 'Medium',
        weak_areas: parsed.weak_areas || [],
        missing_sections: parsed.missing_sections || [],
        ats_improvements: parsed.ats_improvements || [],
        project_suggestions: parsed.project_suggestions || [],
        skill_suggestions: parsed.skill_suggestions || [],
        template_recommendation: parsed.template_recommendation || 'ATS Beginner',
        ats_friendly: parsed.ats_friendly || 70,
        project_score: parsed.project_score || 5,
      },
      rewrites: parsed.rewrites || [],
    };
  } catch {
    return {
      analysis: {
        strength: 'Medium', weak_areas: ['Could not parse AI response'], missing_sections: [], ats_improvements: [],
        project_suggestions: [], skill_suggestions: [], template_recommendation: 'ATS Beginner', ats_friendly: 70, project_score: 5,
      },
      rewrites: [],
    };
  }
}

// ====== ROUTES ======

router.post('/upload', authenticate, upload.single('resume'), async (req: AuthRequest, res: Response) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const rawText = await extractTextFromBuffer(req.file.buffer, req.file.mimetype);
    const sections = extractSections(rawText);
    const score = calcScore(sections, rawText);

    const parsed: ParsedResume = {
      id: uuidv4(),
      user_id: req.user!.id,
      title: `Resume - ${new Date().toLocaleDateString()}`,
      raw_text: rawText,
      sections,
      score,
      created_at: new Date().toISOString(),
    };

    const db = getDb();
    db.resumes = db.resumes || [];
    db.resumes.push(parsed);
    saveDb();

    res.json({ resume: parsed });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Upload failed' });
  }
});

router.post('/analyze', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { resume_id, text } = req.body;
    let rawText = text || '';

    if (resume_id) {
      const db = getDb();
      const found = (db.resumes || []).find(r => r.id === resume_id && r.user_id === req.user!.id);
      if (!found) return res.status(404).json({ error: 'Resume not found' });
      rawText = found.raw_text;
    }

    if (!rawText) return res.status(400).json({ error: 'No text to analyze' });

    const sections = extractSections(rawText);
    const score = calcScore(sections, rawText);
    const { analysis, rewrites } = await analyzeWithAI(rawText);

    const fullAnalysis: ResumeAnalysis = { ...analysis, rewrite_suggestions: rewrites };

    if (resume_id) {
      const db = getDb();
      const found = (db.resumes || []).find(r => r.id === resume_id);
      if (found) { found.score = score; found.analysis = fullAnalysis; saveDb(); }
    }

    res.json({ score, analysis: fullAnalysis, sections });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Analysis failed' });
  }
});

router.get('/list', authenticate, (req: AuthRequest, res: Response) => {
  const db = getDb();
  const list = (db.resumes || []).filter(r => r.user_id === req.user!.id).map(r => ({
    id: r.id, title: r.title, score: r.score?.total || null, created_at: r.created_at, sections: r.sections,
  }));
  res.json({ resumes: list });
});

router.get('/templates', (_req: Request, res: Response) => {
  res.json({ templates: TEMPLATES });
});

router.get('/templates/:id', (req: Request, res: Response) => {
  const tpl = TEMPLATES.find(t => t.id === req.params.id);
  if (!tpl) return res.status(404).json({ error: 'Template not found' });
  res.json({ template: tpl });
});

router.post('/templates', (req: Request, res: Response) => {
  const body = req.body;
  const id = body.id || `custom-${Date.now()}`;
  if (TEMPLATES.find(t => t.id === id)) return res.status(409).json({ error: 'Template ID already exists' });
  const tpl = { id, name: body.name || id, description: body.description || '', category: body.category || id, preview: body.preview || '', is_ats_friendly: body.is_ats_friendly ?? true, columns: (body.columns ?? 1) as 1 | 2, colors: body.colors || ['#6d28d9', '#f8fafc', '#ffffff'] };
  TEMPLATES.push(tpl);
  res.status(201).json({ template: tpl });
});

router.put('/templates/:id', (req: Request, res: Response) => {
  const idx = TEMPLATES.findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Template not found' });
  TEMPLATES[idx] = { ...TEMPLATES[idx], ...req.body, id: req.params.id };
  res.json({ template: TEMPLATES[idx] });
});

router.delete('/templates/:id', (req: Request, res: Response) => {
  const idx = TEMPLATES.findIndex(t => t.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'Template not found' });
  TEMPLATES.splice(idx, 1);
  res.json({ success: true });
});

router.post('/templates/:id/duplicate', (req: Request, res: Response) => {
  const src = TEMPLATES.find(t => t.id === req.params.id);
  if (!src) return res.status(404).json({ error: 'Source template not found' });
  const newId = `${req.params.id}-copy-${Date.now()}`;
  const dup = { ...src, id: newId, name: `${src.name} (Copy)` };
  TEMPLATES.push(dup);
  res.status(201).json({ template: dup });
});

router.post('/rewrite', authenticate, async (req: AuthRequest, res: Response) => {
  try {
    const { text: bulletText } = req.body;
    if (!bulletText) return res.status(400).json({ error: 'Text required' });
    const prompt = `Rewrite this resume bullet point to be more impactful with metrics and strong action verbs. Return ONLY the rewritten version, no explanations.\n\nOriginal: ${bulletText}\n\nRewritten:`;
    let rewritten = '';
    try { rewritten = await callOpenRouter(prompt); } catch {
      try { rewritten = await callOllama(prompt); } catch { rewritten = bulletText; }
    }
    res.json({ original: bulletText, rewritten: rewritten.trim() });
  } catch (e: any) {
    res.status(500).json({ error: e.message || 'Rewrite failed' });
  }
});

router.get('/:id', authenticate, (req: AuthRequest, res: Response) => {
  const db = getDb();
  const found = (db.resumes || []).find(r => r.id === req.params.id && r.user_id === req.user!.id);
  if (!found) return res.status(404).json({ error: 'Resume not found' });
  res.json(found);
});

router.delete('/:id', authenticate, (req: AuthRequest, res: Response) => {
  const db = getDb();
  const idx = (db.resumes || []).findIndex(r => r.id === req.params.id && r.user_id === req.user!.id);
  if (idx < 0) return res.status(404).json({ error: 'Resume not found' });
  db.resumes.splice(idx, 1);
  saveDb();
  res.json({ success: true });
});

export default router;

import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import compression from 'compression';
import { createProxyMiddleware } from 'http-proxy-middleware';
import multer from 'multer';

let pdfParse: any = null;
let mammoth: any = null;
try { pdfParse = require('pdf-parse'); } catch (e) { console.warn('[gateway] pdf-parse not available:', (e as Error).message); }
try { mammoth = require('mammoth'); } catch (e) { console.warn('[gateway] mammoth not available:', (e as Error).message); }

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.set('trust proxy', 1);

// ====== Compression (gzip/deflate) — 60-80% size reduction ======
app.use(compression({
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  },
  threshold: 1024,
}));

// ====== Response time logging ======
app.use((req: Request, _res: Response, next: NextFunction) => {
  (req as any)._start = Date.now();
  const originalEnd = _res.end;
  _res.end = function (this: Response, ...args: any[]) {
    const ms = Date.now() - ((req as any)._start || 0);
    if (ms > 200) {
      console.warn(`[gateway] SLOW ${req.method} ${req.path} ${ms}ms`);
    }
    return originalEnd.apply(this, args as any);
  } as any;
  next();
});

app.use(cors({
  origin: (_origin, callback) => callback(null, _origin || true),
  credentials: true,
  maxAge: 86400,
}));

const SERVICES = {
  auth: process.env.AUTH_SERVICE_URL || 'https://codesprout-auth-production.up.railway.app',
  content: process.env.CONTENT_SERVICE_URL || 'https://codesprout-content-production.up.railway.app',
  social: process.env.SOCIAL_SERVICE_URL || 'https://codesprout-social-production.up.railway.app',
  execution: process.env.EXECUTION_SERVICE_URL || 'https://codesprout-execution-production.up.railway.app',
  payment: process.env.PAYMENT_SERVICE_URL || 'http://localhost:3005',
  resume: process.env.RESUME_SERVICE_URL || 'http://localhost:3006',
};

const proxies = new Map<string, ReturnType<typeof createProxyMiddleware>>();

const getProxy = (target: string) => {
  let proxy = proxies.get(target);
  if (!proxy) {
    proxy = createProxyMiddleware({
      target,
      changeOrigin: true,
      proxyTimeout: 30000,
      timeout: 30000,
      pathRewrite: (_path: string, req: any) => req.originalUrl,
      selfHandleResponse: false,
      on: {
        error: (err: any, req: any, res: any) => {
          console.error(`[gateway] proxy error to ${target}:`, err.message);
          if (!res.headersSent) {
            const origin = req.headers['origin'];
            if (origin) {
              res.setHeader('access-control-allow-origin', origin);
              res.setHeader('access-control-allow-credentials', 'true');
            }
            res.status(502).json({ error: 'Service unavailable', service: target });
          }
        },
        proxyRes: (proxyRes: any, req: any, _res: any) => {
          const origin = req.headers['origin'];
          if (origin) {
            proxyRes.headers['access-control-allow-origin'] = origin;
            proxyRes.headers['access-control-allow-credentials'] = 'true';
            proxyRes.headers['access-control-allow-methods'] = 'GET, POST, PUT, DELETE, PATCH, OPTIONS';
            proxyRes.headers['access-control-allow-headers'] = 'Content-Type, Authorization, X-User-Id, x-user-id, x-requested-with';
          }
        },
      },
    });
    proxies.set(target, proxy);
  }
  return proxy;
};

app.get('/health', (_req, res) => res.json({
  service: 'gateway',
  status: 'ok',
  timestamp: new Date().toISOString(),
  services: SERVICES,
}));

// ====== Resume Templates (mutable, CRUD via API) ======
let RESUME_TEMPLATES: any[] = [
  { id: 'ats-beginner', category: 'ats-beginner', name: 'ATS Beginner', description: 'Clean single-column layout optimized for ATS parsers', is_ats_friendly: true, columns: 1, colors: ['#1e293b', '#f8fafc', '#ffffff'], is_premium: false, price: 0 },
  { id: 'sde', category: 'sde', name: 'SDE Resume', description: 'Software engineering focused with technical skills emphasis', is_ats_friendly: true, columns: 1, colors: ['#0f172a', '#f8fafc', '#ffffff'], is_premium: false, price: 0 },
  { id: 'frontend', category: 'frontend', name: 'Frontend Resume', description: 'Modern layout with visual portfolio & project highlights', is_ats_friendly: false, columns: 2, colors: ['#312e81', '#f0f9ff', '#ffffff'], is_premium: false, price: 0 },
  { id: 'backend', category: 'backend', name: 'Backend Resume', description: 'System design & architecture focused clean format', is_ats_friendly: true, columns: 1, colors: ['#1e3a5f', '#f1f5f9', '#ffffff'], is_premium: false, price: 0 },
  { id: 'ai-ml', category: 'ai-ml', name: 'AI/ML Resume', description: 'Research & model-focused layout for data scientists', is_ats_friendly: false, columns: 2, colors: ['#581c87', '#fdf4ff', '#ffffff'], is_premium: false, price: 0 },
  { id: 'fullstack', category: 'fullstack', name: 'Full Stack Resume', description: 'Versatile format balancing frontend & backend skills', is_ats_friendly: true, columns: 1, colors: ['#0d9488', '#f0fdfa', '#ffffff'], is_premium: false, price: 0 },
  { id: 'executive', category: 'executive', name: 'Executive Resume', description: 'Leadership-focused layout for senior management roles', is_ats_friendly: true, columns: 1, colors: ['#1e3a8a', '#f8fafc', '#ffffff'], is_premium: false, price: 0 },
  { id: 'minimalist', category: 'minimalist', name: 'Minimalist Resume', description: 'Clean, spacious design with elegant typography', is_ats_friendly: true, columns: 1, colors: ['#475569', '#ffffff', '#ffffff'], is_premium: false, price: 0 },
  { id: 'creative', category: 'creative', name: 'Creative Resume', description: 'Bold gradient header with portfolio metrics section', is_ats_friendly: false, columns: 1, colors: ['#7c3aed', '#fdf4ff', '#ffffff'], is_premium: false, price: 0 },
  { id: 'technical', category: 'technical', name: 'Technical Resume', description: 'Skills-first layout with visual proficiency bars', is_ats_friendly: true, columns: 1, colors: ['#0369a1', '#f0f9ff', '#ffffff'], is_premium: false, price: 0 },
  { id: 'professional', category: 'professional', name: 'Professional', description: 'Polished one-page layout with a strong header and balanced sections', is_ats_friendly: true, columns: 1, colors: ['#0f172a', '#e2e8f0', '#ffffff'], is_premium: false, price: 0 },
  { id: 'professional-blue', category: 'professional', name: 'Professional Blue', description: 'Clean single-column with blue section headers, ATS-friendly corporate layout', is_ats_friendly: true, columns: 1, colors: ['#1a3c6e', '#ffffff', '#ffffff'], is_premium: false, price: 0 },
  { id: 'academic', category: 'academic', name: 'Academic Resume', description: 'Research & publication focused for academia roles', is_ats_friendly: false, columns: 1, colors: ['#b91c1c', '#fef2f2', '#ffffff'], is_premium: false, price: 0 },
];

const extractText = async (buffer: Buffer, mime: string): Promise<string> => {
  if (mime.includes('pdf')) {
    if (pdfParse) {
      try {
        const data = await pdfParse(buffer);
        if (data.text && data.text.trim().length > 10) return data.text;
      } catch (e: any) { console.error('[gateway] pdf-parse error:', e.message); }
    }
    return buffer.toString('utf-8').replace(/[^\x20-\x7E\n]/g, '');
  }
  if (mime.includes('word') || mime.includes('docx') || mime.includes('officedocument')) {
    if (mammoth) {
      try {
        const r = await mammoth.extractRawText({ buffer });
        if (r.value && r.value.trim().length > 10) return r.value;
      } catch (e: any) { console.error('[gateway] mammoth error:', e.message); }
    }
    return buffer.toString('utf-8');
  }
  return buffer.toString('utf-8');
};

// ====== Feedback storage ======
const FEEDBACKS: any[] = [];

// ====== In-memory cache with LRU-like eviction ======
const memoryCache = new Map<string, { data: any; expiry: number; hits: number }>();
const MAX_CACHE_SIZE = 500;
const CACHEABLE_PATHS = ['/topics', '/patterns', '/stats', '/leaderboard', '/roadmaps', '/questions', '/resume/list', '/resume/templates', '/shop'];
const CACHE_TTL: Record<string, number> = {
  '/topics': 5 * 60 * 1000,
  '/patterns': 10 * 60 * 1000,
  '/stats': 3 * 60 * 1000,
  '/leaderboard': 2 * 60 * 1000,
  '/roadmaps': 5 * 60 * 1000,
  '/questions': 3 * 60 * 1000,
  '/resume/list': 2 * 60 * 1000,
  '/resume/templates': 30 * 60 * 1000,
  '/shop': 10 * 60 * 1000,
};

function getCacheKey(path: string, req: Request): string {
  const auth = (req.headers['authorization'] || '') as string;
  return `${req.method}:${path}:${auth}`;
}

function cacheGet(key: string): any | null {
  const entry = memoryCache.get(key);
  if (!entry) return null;
  if (Date.now() > entry.expiry) {
    memoryCache.delete(key);
    return null;
  }
  entry.hits++;
  return entry.data;
}

function cacheSet(key: string, data: any, ttl: number): void {
  if (memoryCache.size >= MAX_CACHE_SIZE) {
    let minHits = Infinity, minKey = '';
    for (const [k, v] of memoryCache) {
      if (v.hits < minHits) { minHits = v.hits; minKey = k; }
    }
    if (minKey) memoryCache.delete(minKey);
  }
  memoryCache.set(key, { data, expiry: Date.now() + ttl, hits: 0 });
}

setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of memoryCache) {
    if (now > entry.expiry) memoryCache.delete(key);
  }
}, 60 * 1000);

const extractSections = (text: string) => {
  const sections: any[] = [];
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
  const foundSkills = skillKeywords.filter((sk: string) => new RegExp('\\b' + sk.replace(/[+\/]/g, '\\$&') + '\\b', 'i').test(text));
  if (foundSkills.length > 0) sections.push({ type: 'skills', value: foundSkills.join(', '), items: foundSkills });
  const eduKeywords = ['bachelor', 'b.tech', 'b.e', 'master', 'm.tech', 'm.s', 'phd', 'ph.d', 'bca', 'mca', 'degree', 'university', 'college', 'school', 'institute', 'b.sc', 'm.sc'];
  const eduLines = text.split('\n').filter((l: string) => eduKeywords.some((k: string) => l.toLowerCase().includes(k)));
  if (eduLines.length > 0) sections.push({ type: 'education', value: eduLines.join('; '), items: eduLines.map((l: string) => l.trim()) });
  return sections;
};

const resumeUpload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 10 * 1024 * 1024 } });

const handle = async (req: Request, res: Response, next: NextFunction) => {
  const path = req.path;

  // ====== Resume Templates CRUD (gateway-direct) ======
  if (path === '/resume/templates' && req.method === 'GET') {
    return res.json({ templates: RESUME_TEMPLATES });
  }
  if (path === '/resume/templates' && req.method === 'POST') {
    const body = req.body;
    const id = body.id || `custom-${Date.now()}`;
    if (RESUME_TEMPLATES.find(t => t.id === id)) {
      return res.status(409).json({ error: 'Template ID already exists' });
    }
    const tpl = { id, name: body.name || id, description: body.description || '', is_ats_friendly: body.is_ats_friendly ?? true, columns: body.columns ?? 1, colors: body.colors || ['#6d28d9', '#f8fafc', '#ffffff'], is_premium: body.is_premium ?? false, price: body.price ?? 0 };
    RESUME_TEMPLATES.push(tpl);
    return res.status(201).json({ template: tpl });
  }

  const tplMatch = path.match(/^\/resume\/templates\/([^/]+)$/);
  if (tplMatch) {
    const tplId = tplMatch[1];
    if (req.method === 'GET') {
      const tpl = RESUME_TEMPLATES.find(t => t.id === tplId);
      if (!tpl) return res.status(404).json({ error: 'Template not found' });
      return res.json({ template: tpl });
    }
    if (req.method === 'PUT') {
      const idx = RESUME_TEMPLATES.findIndex(t => t.id === tplId);
      if (idx === -1) return res.status(404).json({ error: 'Template not found' });
      RESUME_TEMPLATES[idx] = { ...RESUME_TEMPLATES[idx], ...req.body, id: tplId };
      return res.json({ template: RESUME_TEMPLATES[idx] });
    }
    if (req.method === 'DELETE') {
      const idx = RESUME_TEMPLATES.findIndex(t => t.id === tplId);
      if (idx === -1) return res.status(404).json({ error: 'Template not found' });
      RESUME_TEMPLATES.splice(idx, 1);
      return res.json({ success: true });
    }
  }

  const dupMatch = path.match(/^\/resume\/templates\/([^/]+)\/duplicate$/);
  if (dupMatch && req.method === 'POST') {
    const srcId = dupMatch[1];
    const src = RESUME_TEMPLATES.find(t => t.id === srcId);
    if (!src) return res.status(404).json({ error: 'Source template not found' });
    const newId = `${srcId}-copy-${Date.now()}`;
    const dup = { ...src, id: newId, name: `${src.name} (Copy)` };
    RESUME_TEMPLATES.push(dup);
    return res.status(201).json({ template: dup });
  }

  // ====== Feedback ======
  if (path === '/feedback' && req.method === 'POST') {
    FEEDBACKS.push({ ...req.body, timestamp: new Date().toISOString() });
    return res.json({ success: true });
  }
  if (path === '/feedback' && req.method === 'GET') {
    return res.json({ feedbacks: FEEDBACKS });
  }

  // ====== Cache GET requests ======
  if (req.method === 'GET') {
    const cacheKey = getCacheKey(path, req);
    const cached = cacheGet(cacheKey);
    if (cached) {
      res.setHeader('X-Cache', 'HIT');
      return res.json(cached);
    }
  }

  let target: string | null = null;
  if (path.startsWith('/auth') || path.startsWith('/notifications') || path.startsWith('/email')) target = SERVICES.auth;
  else if (path.startsWith('/topics') || path.startsWith('/questions') || path.startsWith('/patterns') || path.startsWith('/stats') || path.startsWith('/shop')) target = SERVICES.content;
  else if (path.startsWith('/bookmarks') || path.startsWith('/dashboard') || path.startsWith('/leaderboard')) target = SERVICES.social;
  else if (path.startsWith('/interview-prep')) target = SERVICES.social;
  else if (path.startsWith('/subscription')) target = SERVICES.payment;
  else if (path.startsWith('/communities') || path.startsWith('/answers') || path.startsWith('/chat') || path.startsWith('/discussions') || path.startsWith('/progress') || path.startsWith('/notes') || path.startsWith('/interviews') || path.startsWith('/resources') || path.startsWith('/contests') || path.startsWith('/roadmaps') || path.startsWith('/challenges') || path.startsWith('/points')) target = SERVICES.social;
  else if (path.startsWith('/execute') || path.startsWith('/upload')) target = SERVICES.execution;
  else if (path.startsWith('/resume')) target = SERVICES.resume;
  else if (path.startsWith('/payments')) target = SERVICES.payment;
  else if (path.startsWith('/admin')) {
    if (path.startsWith('/admin/ai') || path.startsWith('/admin/patterns')) target = SERVICES.execution;
    else if (path.startsWith('/admin/payments') || path.startsWith('/admin/requests')) target = SERVICES.payment;
    else target = SERVICES.content;
  }

  if (!target) return res.status(404).json({ error: 'Route not found', path });

  // ====== GET: fetch + cache ======
  if (req.method === 'GET') {
    const cacheKey = getCacheKey(path, req);
    const url = `${target}${req.originalUrl}`;
    try {
      const headers: Record<string, string> = {};
      const auth = req.headers['authorization'];
      if (auth) headers['authorization'] = auth as string;
      const proxyRes = await fetch(url, { headers, signal: AbortSignal.timeout(10000) });
      if (!proxyRes.ok) {
        return res.status(proxyRes.status).json({ error: `Upstream error: ${proxyRes.status}` });
      }
      const data = await proxyRes.json();
      const ttl = CACHE_TTL[CACHEABLE_PATHS.find(p => path.startsWith(p))!] || 30_000;
      cacheSet(cacheKey, data, ttl);
      res.setHeader('X-Cache', 'MISS');
      return res.json(data);
    } catch (e: any) {
      console.error(`[gateway] fetch error to ${target}:`, e.message);
      return res.status(502).json({ error: 'Service unavailable', service: target });
    }
  }

  // ====== POST/PUT/DELETE: proxy ======
  return getProxy(target)(req, res, next);
};

app.options('/api/*', (_req: Request, res: Response) => {
  res.status(204).end();
});
app.use('/api', handle);

app.use((_req, res) => res.status(404).json({ error: 'Route not found' }));

app.listen(PORT, () => {
  console.log(`[gateway] running on http://localhost:${PORT}`);
  console.log(`[gateway] routing to:`);
  Object.entries(SERVICES).forEach(([name, url]) => console.log(`  - ${name}: ${url}`));
}).setMaxListeners(50);

import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import fs from 'fs';
import executeRouter from '../routes/execute';
import aiRouter from '../routes/ai';
import adminPatternsRouter from '../routes/patterns';
import { initDb } from '../data/db';
import { questions, topics, cheatSheets, users, patternDetails } from '../data/seed';
import { TEST_CASES } from '../data/testCases';

const testCaseData = Object.entries(TEST_CASES).flatMap(([slug, cases]) =>
  cases.map(tc => ({ ...tc, slug }))
);

const app = express();
const PORT = Number(process.env.PORT) || 3004;

app.use(compression({ threshold: 1024 }));
app.use(cors({
  origin: (_origin, callback) => callback(null, _origin || true),
  credentials: true,
}));
app.use(express.json({ limit: '50mb' }));

const uploadsDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });
const storage = multer.diskStorage({
  destination: uploadsDir,
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname) || '.png';
    cb(null, `${uuidv4()}${ext}`);
  },
});
const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['.png', '.jpg', '.jpeg', '.gif', '.svg', '.webp'];
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, allowed.includes(ext));
  },
});
app.post('/api/upload', upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ url: `/uploads/${req.file.filename}`, filename: req.file.filename });
});
app.post('/api/upload-base64', express.json({ limit: '10mb' }), (req, res) => {
  const { data, name } = req.body;
  if (!data) return res.status(400).json({ error: 'No image data' });
  const matches = data.match(/^data:image\/(\w+);base64,(.+)$/);
  if (!matches) return res.status(400).json({ error: 'Invalid base64 image' });
  const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
  const filename = `${uuidv4()}.${ext}`;
  const buffer = Buffer.from(matches[2], 'base64');
  const filepath = path.join(uploadsDir, filename);
  fs.writeFileSync(filepath, buffer);
  res.json({ url: `/uploads/${filename}`, filename });
});
app.use('/uploads', express.static(uploadsDir));

app.get('/health', (_req, res) => res.json({ service: 'execution', status: 'ok', timestamp: new Date().toISOString() }));
app.use('/api/execute', executeRouter);
app.use('/api/admin', aiRouter);
app.use('/api/admin', adminPatternsRouter);

(async () => {
  await initDb(questions, topics, cheatSheets, users, testCaseData, patternDetails);
  app.listen(PORT, () => {
    console.log(`[execution-service] running on http://localhost:${PORT}`);
  });
})();

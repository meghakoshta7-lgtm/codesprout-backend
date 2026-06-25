import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import authRouter from '../routes/auth';
import notificationsRouter from '../routes/notifications';
import emailRouter from '../routes/email';
import { initDb } from '../data/db';
import { questions, topics, cheatSheets, users, patternDetails } from '../data/seed';
import { TEST_CASES } from '../data/testCases';

const testCaseData = Object.entries(TEST_CASES).flatMap(([slug, cases]) =>
  cases.map(tc => ({ ...tc, slug }))
);

const app = express();
const PORT = Number(process.env.PORT) || 3001;

app.use(compression({ threshold: 1024 }));
app.use(cors({
  origin: (_origin, callback) => callback(null, _origin || true),
  credentials: true,
}));
app.use(express.json({ limit: '50mb' }));

app.get('/health', (_req, res) => res.json({ service: 'auth', status: 'ok', timestamp: new Date().toISOString() }));
app.use('/api/auth', authRouter);
app.use('/api/notifications', notificationsRouter);
app.use('/api/email', emailRouter);

(async () => {
  await initDb(questions, topics, cheatSheets, users, testCaseData, patternDetails);
  app.listen(PORT, () => {
    console.log(`[auth-service] running on http://localhost:${PORT}`);
  });
})();

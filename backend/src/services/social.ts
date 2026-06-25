import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import socialRouter from '../routes/social';
import bookmarksRouter from '../routes/bookmarks';
import dashboardRouter from '../routes/dashboard';
import subscriptionRouter from '../routes/subscription';
import leaderboardRouter from '../routes/leaderboard';
import interviewRouter from '../routes/interview';
import { initDb } from '../data/db';
import { questions, topics, cheatSheets, users, patternDetails } from '../data/seed';
import { TEST_CASES } from '../data/testCases';

const testCaseData = Object.entries(TEST_CASES).flatMap(([slug, cases]) =>
  cases.map(tc => ({ ...tc, slug }))
);

const app = express();
const PORT = Number(process.env.PORT) || 3003;

app.use(compression({ threshold: 1024 }));
app.use(cors({
  origin: (_origin, callback) => callback(null, _origin || true),
  credentials: true,
}));
app.use(express.json({ limit: '50mb' }));

app.get('/health', (_req, res) => res.json({ service: 'social', status: 'ok', timestamp: new Date().toISOString() }));
app.use('/api', socialRouter);
app.use('/api/bookmarks', bookmarksRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/api/subscription', subscriptionRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api', interviewRouter);

(async () => {
  await initDb(questions, topics, cheatSheets, users, testCaseData, patternDetails);
  app.listen(PORT, () => {
    console.log(`[social-service] running on http://localhost:${PORT}`);
  });
})();

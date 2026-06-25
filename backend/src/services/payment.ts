import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import paymentsRouter from '../routes/payments';
import subscriptionRouter from '../routes/subscription';
import { initDb } from '../data/db';
import { questions, topics, cheatSheets, users, patternDetails } from '../data/seed';
import { TEST_CASES } from '../data/testCases';

process.on('unhandledRejection', (reason) => {
  console.error('[payment] UNHANDLED REJECTION —', reason);
});
process.on('uncaughtException', (err) => {
  console.error('[payment] UNCAUGHT EXCEPTION —', err.message, err.stack);
});

const testCaseData = Object.entries(TEST_CASES).flatMap(([slug, cases]) =>
  cases.map(tc => ({ ...tc, slug }))
);

const app = express();
const PORT = Number(process.env.PORT) || 3005;

app.use(compression({ threshold: 1024 }));
app.use(cors({
  origin: true,
  credentials: true,
}));
app.use(express.json({
  limit: '50mb',
  verify: (req: any, _res, buf) => { req.rawBody = buf.toString('utf8'); },
}));

app.get('/health', (_req, res) => res.json({ service: 'payment', status: 'ok', timestamp: new Date().toISOString() }));
app.use('/api/payments', paymentsRouter);
app.use('/api/subscription', subscriptionRouter);

(async () => {
  await initDb(questions, topics, cheatSheets, users, testCaseData, patternDetails);
  app.listen(PORT, () => {
    console.log(`[payment-service] running on http://localhost:${PORT}`);
  });
})();

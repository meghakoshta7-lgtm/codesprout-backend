import { Router, Request, Response } from 'express';
import { executeCode, runTestCases, executeVisualize, analyzeComplexity, aiAnalyzeComplexity, TestCase } from '../services/executor';
import { generateDriver, extractFunctionName } from '../drivers/driverGenerator';
import { runCode } from '../runners/index';
import { getTestCases, getQuestion } from '../data/db';
import { recordSubmission, getSubmissions } from '../data/store';
import { questions } from '../data/seed';
import { v4 as uuidv4 } from 'uuid';

const router = Router();

function getDefaultTestCases(slug: string): TestCase[] {
  return [];
}

router.get('/testcases/:slug', (req: Request, res: Response) => {
  const testCases = getTestCases(req.params.slug);
  res.json(testCases);
});

router.post('/run', (req: Request, res: Response) => {
  const { code, language, slug } = req.body;
  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language required' });
  }

  const allTestCases = getTestCases(slug || '');
  if (allTestCases.length === 0) {
    return res.status(400).json({ error: 'No test cases found for this question' });
  }
  const results = allTestCases.map((tc) => {
    let codeToRun = code;
    if (language !== 'javascript') {
      const fnName = extractFunctionName(code, language);
      codeToRun = generateDriver(code, language, [{ input: tc.input, expected: tc.expected_output }], fnName);
    }
    const r = executeCode(codeToRun, language, tc.input);
    return {
      id: tc.id,
      input: tc.input,
      expected: tc.expected_output,
      output: r.output,
      error: r.error,
      runtime: r.runtime,
      status: r.status,
    };
  });

  function normalizeOutput(s: string): string {
    try { return JSON.stringify(JSON.parse(s.toLowerCase())); } catch { return s.trim().toLowerCase(); }
  }
  const firstPassed = results[0]?.status === 'success' && normalizeOutput(results[0]?.output || '') === normalizeOutput(allTestCases[0]?.expected_output || '');

  res.json({
    results,
    first_passed: firstPassed,
  });
});

router.post('/run-custom', (req: Request, res: Response) => {
  const { code, language, input } = req.body;
  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language required' });
  }

  const result = executeCode(code, language, input || '');

  res.json({
    output: result.output,
    error: result.error,
    runtime: result.runtime,
    status: result.status,
  });
});

router.post('/submit', (req: Request, res: Response) => {
  const { code, language, slug } = req.body;
  const userId = (req as any).user?.id || (req.body.user_id as string) || 'guest';
  const userName = (req as any).user?.name || (req.body.user_name as string) || 'Guest';
  if (!code || !language || !slug) {
    return res.status(400).json({ error: 'Code, language, and slug required' });
  }

  const testCases = getTestCases(slug);
  if (testCases.length === 0) {
    return res.status(400).json({ error: 'No test cases found for this question' });
  }
  const result = runTestCases(code, language, testCases, slug);

  const question = getQuestion(slug) || questions.find((q) => q.slug === slug);
  const totalRuntime = (result.test_results || []).reduce((sum: number, t: any) => sum + (t.runtime || 0), 0);

  recordSubmission({
    id: uuidv4(),
    user_id: userId,
    user_name: userName,
    question_id: question?.id || '',
    question_slug: slug,
    question_title: question?.title || slug,
    language,
    passed: result.passed === result.total && result.total > 0,
    total: result.total,
    runtime_ms: totalRuntime,
    submitted_at: new Date().toISOString(),
  });

  res.json({
    passed: result.passed,
    total: result.total,
    status: result.status,
    test_results: result.test_results,
  });
});

router.post('/visualize', (req: Request, res: Response) => {
  const { code, language, input } = req.body;
  if (!code || !language) {
    return res.status(400).json({ error: 'Code and language required' });
  }

  const result = executeVisualize(code, language, input || '');
  res.json(result);
});

router.post('/analyze', async (req: Request, res: Response) => {
  const { code, language } = req.body;
  if (!code) {
    return res.status(400).json({ error: 'Code required' });
  }

  const complexity = await aiAnalyzeComplexity(code, language || 'javascript');
  res.json(complexity);
});

export default router;

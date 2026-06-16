import { execSync } from 'child_process';
import { writeFileSync, mkdtempSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

const JUDGE0_URL = process.env.JUDGE0_URL || 'https://ce.judge0.com';

const LANGUAGE_MAP: Record<string, number> = {
  javascript: 93,
  python: 100,
  java: 91,
  cpp: 105,
  c: 103,
};

export interface Judge0Result {
  output: string;
  error: string | null;
  runtime: number;
  status: 'success' | 'error' | 'timeout';
}

export function submitToJudge0(code: string, language: string, stdin: string = ''): Judge0Result {
  const langId = LANGUAGE_MAP[language];
  if (!langId) {
    return { output: '', error: `Language '${language}' not supported`, runtime: 0, status: 'error' };
  }

  const start = Date.now();
  const tmpDir = mkdtempSync(join(tmpdir(), 'judge0-'));

  try {
    const payload = JSON.stringify({ source_code: code, language_id: langId, stdin });
    const payloadFile = join(tmpDir, 'payload.json');
    writeFileSync(payloadFile, payload, 'utf-8');

    const cmd = `curl -s -X POST "${JUDGE0_URL}/submissions?base64_encoded=false&wait=true" -H "Content-Type: application/json" -d @"${payloadFile.replace(/\\/g, '/')}"`;
    
    const out = execSync(cmd, { timeout: 30000, encoding: 'utf-8' });
    const result = JSON.parse(out.trim());

    if (!result || result.error) {
      return { output: '', error: `Judge0: ${result?.error || 'No response'}`, runtime: Date.now() - start, status: 'error' };
    }

    if (!result.status) {
      return { output: '', error: `Judge0 response: ${JSON.stringify(result).slice(0, 500)}`, runtime: Date.now() - start, status: 'error' };
    }

    const statusId = result.status.id;

    if (statusId === 3) {
      return {
        output: (result.stdout || '').trim(),
        error: null,
        runtime: Date.now() - start,
        status: 'success',
      };
    }

    if (statusId === 4) {
      return {
        output: (result.stdout || '').trim(),
        error: result.stderr || 'Wrong Answer',
        runtime: Date.now() - start,
        status: 'error',
      };
    }

    if (statusId === 5) {
      return { output: '', error: 'Time Limit Exceeded', runtime: Date.now() - start, status: 'timeout' };
    }

    if (statusId >= 6) {
      return {
        output: '',
        error: result.compile_output || result.stderr || result.status?.description || 'Runtime Error',
        runtime: Date.now() - start,
        status: 'error',
      };
    }

    return { output: '', error: `Unknown status ${statusId}: ${result.status?.description}`, runtime: Date.now() - start, status: 'error' };
  } catch (err: any) {
    const errMsg = err.stdout ? `stdout: ${err.stdout.toString().slice(0, 300)}` : err.message;
    return { output: '', error: `Judge0 error: ${errMsg}`, runtime: Date.now() - start, status: 'error' };
  } finally {
    try { rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  }
}

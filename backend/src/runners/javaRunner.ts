import { execSync } from 'child_process';
import { writeFileSync, mkdtempSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

const IS_WIN = process.platform === 'win32';
const EXTRA_PATH = IS_WIN ? 'C:\\Program Files\\Java\\jdk-17\\bin' : '/usr/bin';
const SEP = IS_WIN ? ';' : ':';

interface RunResult {
  output: string;
  error: string;
  runtime: number;
  status: string;
}

export function runJava(code: string): RunResult {
  const startTime = Date.now();
  const tmpDir = mkdtempSync(join(tmpdir(), 'java-'));

  try {
    const className = extractClassName(code) || 'Main';
    const filePath = join(tmpDir, `${className}.java`);
    writeFileSync(filePath, code);

    execSync(`javac "${filePath}"`, { timeout: 15000, cwd: tmpDir, env: { ...process.env, PATH: `${EXTRA_PATH}${SEP}${process.env.PATH}` } });

    const result = execSync(`java -cp "${tmpDir}" ${className}`, { timeout: 10000, cwd: tmpDir, env: { ...process.env, PATH: `${EXTRA_PATH}${SEP}${process.env.PATH}` } });

    const runtime = Date.now() - startTime;
    return {
      output: result.toString().trim(),
      error: '',
      runtime,
      status: 'success',
    };
  } catch (e: any) {
    const runtime = Date.now() - startTime;
    if (e.stderr) {
      let errStr = e.stderr.toString();
      errStr = errStr.replace(new RegExp(tmpDir.replace(/\\\\/g, '\\\\'), 'g'), '<code>');
      return { output: '', error: errStr, runtime, status: 'error' };
    }
    return { output: '', error: e.message || 'Execution failed', runtime, status: 'error' };
  } finally {
    try { rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  }
}

function extractClassName(code: string): string | null {
  const match = code.match(/public\s+class\s+(\w+)/);
  return match ? match[1] : null;
}

import { execSync } from 'child_process';
import { writeFileSync, mkdtempSync, rmSync } from 'fs';
import { join } from 'path';
import { tmpdir } from 'os';

interface RunResult {
  output: string;
  error: string;
  runtime: number;
  status: string;
}

export function runC(code: string): RunResult {
  const startTime = Date.now();
  const tmpDir = mkdtempSync(join(tmpdir(), 'c-'));

  try {
    const filePath = join(tmpDir, 'main.c');
    const binaryPath = join(tmpDir, process.platform === 'win32' ? 'main.exe' : 'main');
    writeFileSync(filePath, code);

    execSync(`gcc "${filePath}" -o "${binaryPath}" -std=c11`, { timeout: 30000, cwd: tmpDir });

    const result = execSync(`"${binaryPath}"`, { timeout: 10000, cwd: tmpDir });

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
    if (e.stdout) return { output: e.stdout.toString().trim(), error: '', runtime, status: 'success' };
    return { output: '', error: e.message || 'Execution failed', runtime, status: 'error' };
  } finally {
    try { rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  }
}

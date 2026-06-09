const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..', 'src', 'data');

// ============ 1. Read existing testCases.ts slugs ============
const tcContent = fs.readFileSync(path.join(ROOT, 'testCases.ts'), 'utf-8');
const existingSlugs = new Set();
let m;
const re = /'([\w-]+)':\s*\[/g;
while ((m = re.exec(tcContent)) !== null) existingSlugs.add(m[1]);
console.log(`Existing testCases.ts slugs: ${existingSlugs.size}`);

// ============ 2. Parse bulk files (valid JSON arrays) ============
// Bulk files are like: export const BULK_XXX: Question[] = [{...}, {...}]
const bulkDir = path.join(ROOT, 'bulk');
const bulkEntries = [];
const bulkFiles = fs.readdirSync(bulkDir).filter(f => f.endsWith('.ts') && f !== 'index.ts');

for (const file of bulkFiles) {
  const content = fs.readFileSync(path.join(bulkDir, file), 'utf-8');
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  if (start === -1 || end === -1) continue;
  bulkEntries.push({ slug: file.replace('.ts', ''), content: content.substring(start, end + 1) });
}
console.log(`Bulk files to parse: ${bulkEntries.length}`);

// ============ 3. Parse questions from all sources ============
const allQuestions = [];

// Parse a question object's block to extract fields
function extractFields(block, isJSON) {
  if (isJSON) {
    const slug = block.match(/"slug":\s*"([^"]+)"/)?.[1];
    if (!slug) return null;
    const title = block.match(/"title":\s*"([^"]+)"/)?.[1] || slug;
    const dif = block.match(/"difficulty":\s*"([^"]+)"/)?.[1] || 'Medium';
    const testCases = [];
    const tcRe = /\{\s*"id":\s*"([^"]+)",\s*"input":\s*"((?:[^"\\]|\\.)*)",\s*"expected_output":\s*"((?:[^"\\]|\\.)*)",\s*"is_hidden":\s*(true|false)\s*\}/g;
    let tcM;
    while ((tcM = tcRe.exec(block)) !== null) {
      testCases.push({ id: tcM[1], input: tcM[2], expected_output: tcM[3], is_hidden: tcM[4] === 'true' });
    }
    const examples = [];
    const exRe = /\{\s*"input":\s*"((?:[^"\\]|\\.)*)",\s*"output":\s*"((?:[^"\\]|\\.)*)"/g;
    let exM;
    while ((exM = exRe.exec(block)) !== null) {
      if (!testCases.some(t => t.input === exM[1] && t.expected_output === exM[2])) {
        examples.push({ input: exM[1], output: exM[2] });
      }
    }
    return { slug, title, difficulty: dif, test_cases: testCases, examples };
  } else {
    // TS format: slug: 'value', test_cases: [...], etc.
    const slug = block.match(/slug:\s*'([^']+)'/)?.[1];
    if (!slug) return null;
    const title = block.match(/title:\s*'([^']+)'/)?.[1] || slug;
    const dif = block.match(/difficulty:\s*'([^']+)'/)?.[1] || 'Medium';
    const testCases = [];
    const tcRe = /\{\s*id:\s*'([^']+)',\s*input:\s*'((?:[^'\\]|\\.)*)',\s*expected_output:\s*'((?:[^'\\]|\\.)*)',\s*is_hidden:\s*(true|false)\s*\}/g;
    let tcM;
    while ((tcM = tcRe.exec(block)) !== null) {
      testCases.push({ id: tcM[1], input: tcM[2], expected_output: tcM[3], is_hidden: tcM[4] === 'true' });
    }
    const examples = [];
    const exRe = /\{\s*input:\s*'((?:[^'\\]|\\.)*)',\s*output:\s*'((?:[^'\\]|\\.)*)'/g;
    let exM;
    while ((exM = exRe.exec(block)) !== null) {
      if (!testCases.some(t => t.input === exM[1] && t.expected_output === exM[2])) {
        examples.push({ input: exM[1], output: exM[2] });
      }
    }
    return { slug, title, difficulty: dif, test_cases: testCases, examples };
  }
}

// 3a. Parse bulk files (JSON format)
for (const entry of bulkEntries) {
  const content = entry.content;
  // Split into individual question blocks
  const blocks = [];
  let depth = 0;
  let blockStart = -1;
  for (let i = 0; i < content.length; i++) {
    if (content[i] === '{' && depth === 0) blockStart = i;
    if (content[i] === '{') depth++;
    if (content[i] === '}') depth--;
    if (depth === 0 && blockStart >= 0) {
      blocks.push(content.substring(blockStart, i + 1));
      blockStart = -1;
    }
  }
  for (const block of blocks) {
    const q = extractFields(block, true);
    if (q) allQuestions.push(q);
  }
}
console.log(`From bulk files: ${allQuestions.length}`);

// 3b. Parse seed-new-questions.ts (TS format)
const newContent = fs.readFileSync(path.join(ROOT, 'seed-new-questions.ts'), 'utf-8');
const newStart = newContent.indexOf('[');
const newEnd = newContent.lastIndexOf(']');
if (newStart !== -1 && newEnd !== -1) {
  const newArr = newContent.substring(newStart, newEnd + 1);
  let depth = 0;
  let blockStart = -1;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '{' && depth === 0) blockStart = i;
    if (newArr[i] === '{') depth++;
    if (newArr[i] === '}') depth--;
    if (depth === 0 && blockStart >= 0) {
      const block = newArr.substring(blockStart, i + 1);
      const q = extractFields(block, false);
      if (q) allQuestions.push(q);
      blockStart = -1;
    }
  }
}
console.log(`After new questions: ${allQuestions.length}`);

// 3c. Parse seed.ts inline questions (TS format, only those without test_cases)
const seedContent = fs.readFileSync(path.join(ROOT, 'seed.ts'), 'utf-8');
const seedQPos = seedContent.indexOf('export const questions');
const seedStart = seedContent.indexOf('=', seedQPos);
const seedEnd = seedContent.lastIndexOf(';');
if (seedStart !== -1 && seedEnd !== -1) {
  const seedArr = seedContent.substring(seedStart + 1, seedEnd);
  let depth = 0;
  let blockStart = -1;
  for (let i = 0; i < seedArr.length; i++) {
    if (seedArr[i] === '{' && depth === 0) blockStart = i;
    if (seedArr[i] === '{') depth++;
    if (seedArr[i] === '}') depth--;
    if (depth === 0 && blockStart >= 0) {
      const block = seedArr.substring(blockStart, i + 1);
      const q = extractFields(block, false);
      if (q && !q.test_cases.length) allQuestions.push(q);
      blockStart = -1;
    }
  }
}
console.log(`Total unique questions (seed without TCs): ${allQuestions.length}`);

// ============ 4. Filter & generate ============
// Remove duplicates (keep last), remove existing
const seen = new Set();
const uniqueQuestions = [];
for (const q of allQuestions) {
  if (existingSlugs.has(q.slug)) continue;
  if (seen.has(q.slug)) continue;
  seen.add(q.slug);
  uniqueQuestions.push(q);
}

function escapeStr(s) {
  return (s || '').replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, '\\n');
}

function genTestCases(question) {
  const tcs = [];
  
  // If question already has test_cases, use them directly (up to 3)
  if (question.test_cases && question.test_cases.length > 0) {
    for (let i = 0; i < Math.min(3, question.test_cases.length); i++) {
      tcs.push(question.test_cases[i]);
    }
    return tcs;
  }
  
  // Otherwise generate from examples
  const ex = question.examples || [];
  if (ex.length >= 3) {
    tcs.push({ id: '1', input: ex[0].input, expected_output: ex[0].output, is_hidden: false });
    tcs.push({ id: '2', input: ex[1].input, expected_output: ex[1].output, is_hidden: true });
    tcs.push({ id: '3', input: ex[2].input, expected_output: ex[2].output, is_hidden: true });
  } else if (ex.length === 2) {
    tcs.push({ id: '1', input: ex[0].input, expected_output: ex[0].output, is_hidden: false });
    tcs.push({ id: '2', input: ex[1].input, expected_output: ex[1].output, is_hidden: true });
    tcs.push({ id: '3', input: ex[0].input, expected_output: ex[0].output, is_hidden: true });
  } else if (ex.length === 1) {
    tcs.push({ id: '1', input: ex[0].input, expected_output: ex[0].output, is_hidden: false });
    tcs.push({ id: '2', input: ex[0].input, expected_output: ex[0].output, is_hidden: true });
    tcs.push({ id: '3', input: ex[0].input, expected_output: ex[0].output, is_hidden: true });
  }
  return tcs;
}

let output = '\n\n// ===== Auto-generated test cases =====\n';
let generated = 0;
let skipped = [];

for (const q of uniqueQuestions) {
  const tcs = genTestCases(q);
  
  if (tcs.length === 0) {
    skipped.push(q.slug);
    continue;
  }
  
  output += `  '${q.slug}': [\n`;
  for (const tc of tcs) {
    output += `    { id: '${escapeStr(tc.id)}', input: '${escapeStr(tc.input)}', expected_output: '${escapeStr(tc.expected_output)}', is_hidden: ${tc.is_hidden} },\n`;
  }
  output += '  ],\n';
  generated++;
}

console.log(`\nGenerated test cases for: ${generated} questions`);
console.log(`Skipped (no TCs/examples): ${skipped.length} questions`);
if (skipped.length > 0) console.log('  First 10 skipped:', skipped.slice(0, 10).join(', '));

// Write output
const genPath = path.join(__dirname, 'generated-tc.txt');
fs.writeFileSync(genPath, output);
console.log(`\nOutput written to: ${genPath} (${output.split('\n').length} lines)`);

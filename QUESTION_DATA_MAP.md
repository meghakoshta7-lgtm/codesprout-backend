# Backend Question Data Storage & Loading System

## Overview
The backend manages DSA questions through a multi-layer system combining hardcoded seed data with bulk-generated questions, exported as TypeScript modules, and persisted to either JSON files or MongoDB.

---

## 1. WHERE QUESTION DATA IS STORED

### Primary Storage Locations

#### A. **Hardcoded Seed Questions** (First ~26 hardcoded questions)
- **Location**: [backend/src/data/seed.ts](backend/src/data/seed.ts) (lines 1-26759)
- **Content**: 
  - Manually curated ~26 hand-written questions (IDs 1-26)
  - Topics array (59 topics)
  - CheatSheets data
  - User templates
- **Questions IDs**: `1` to `26`
- **Format**: TypeScript constant export
```typescript
export const questions: Question[] = [
  { id: '1', title: 'Two Sum', slug: 'two-sum', ... },
  { id: '2', title: 'Best Time to Buy and Sell Stock', ... },
  // ... up to ~26
];
```

#### B. **Bulk Generated Questions** (5900+ questions, IDs 30001-59880)
- **Location**: [backend/src/data/bulk/](backend/src/data/bulk/) (59 TypeScript files)
- **Structure**: One file per topic (e.g., `arrays.ts`, `strings.ts`, `dp.ts`)
- **Content**: 100 generated questions per topic × 59 topics
- **File Pattern**: `{topic-slug}.ts` exports `BULK_{TOPIC_SLUG_UPPERCASE}: Question[]`
- **Questions IDs**: `30001` onwards
- **Example Files**:
  - [backend/src/data/bulk/arrays.ts](backend/src/data/bulk/arrays.ts) - BULK_ARRAYS (100 questions, IDs 30001-30100)
  - [backend/src/data/bulk/strings.ts](backend/src/data/bulk/strings.ts) - BULK_STRINGS (100 questions)
  - [backend/src/data/bulk/dp.ts](backend/src/data/bulk/dp.ts) - BULK_DP (100 questions)
  - ... (57 more topic files)

#### C. **Aggregated Bulk Index**
- **Location**: [backend/src/data/bulk/index.ts](backend/src/data/bulk/index.ts)
- **Content**: Imports and merges all 59 topic bulk files
- **Export**: `export const ALL_BULK_QUESTIONS: Question[]` (5900+ questions)
- **Usage**: Final merge of all bulk questions for seeding

#### D. **Runtime Database** (JSON File)
- **Location**: [backend/data/db.json](backend/data/db.json)
- **Content**: Complete question set + all runtime data (users, bookmarks, progress, etc.)
- **Size**: ~5926+ total questions (26 hardcoded + 5900 bulk)
- **Loaded On**: App startup via `initDb()`
- **Persisted To**: This file is updated whenever data changes

#### E. **MongoDB** (Optional Production Database)
- **Connection**: Via `MONGODB_URL` environment variable
- **Collections**: `questions`, `topics`, `cheatSheets`, etc.
- **Fallback**: If MongoDB unavailable, app falls back to JSON file
- **Init**: `initDb()` seeds MongoDB on first run if empty

---

## 2. HOW QUESTIONS ARE SEEDED/ADDED TO DATABASE

### Initialization Flow

**File**: [backend/src/index.ts](backend/src/index.ts) (lines 24-102)

```typescript
// Step 1: Import seed data
import { questions, topics, cheatSheets, users, patternDetails } from './data/seed';
import { TEST_CASES } from './data/testCases';

// Step 2: Transform test cases
const testCaseData = Object.entries(TEST_CASES).flatMap(([slug, cases]) =>
  cases.map(tc => ({ ...tc, slug }))
);

// Step 3: Initialize database on startup
await initDb(questions, topics, cheatSheets, users, testCaseData, patternDetails);
```

### Seed Data Composition

**File**: [backend/src/data/seed.ts](backend/src/data/seed.ts)

```typescript
// Merges two sources:
export const questions: Question[] = [
  // Lines 100-26750: Hardcoded ~26 questions
  { id: '1', title: 'Two Sum', ... },
  { id: '2', title: 'Best Time to Buy and Sell Stock', ... },
  // ... more hardcoded questions
  
  // Lines 26750-26759: Bulk generated questions
  ...ALL_BULK_QUESTIONS,  // Adds 5900+ bulk questions (IDs 30001+)
];
```

### Database Initialization Logic

**File**: [backend/src/data/db.ts](backend/src/data/db.ts) (lines 119-170)

```typescript
export async function initDb(
  questions: Question[], 
  topics: Topic[], 
  cheatSheets: CheatSheet[], 
  users: User[], 
  testCases: TestCaseData[], 
  patternDetails: PatternDetail[] = []
) {
  // 1. Try MongoDB first (if MONGODB_URL env var is set)
  if (MONGO_URL) {
    mongoClient = new MongoClient(MONGO_URL);
    await mongoClient.connect();
    
    // 2. Check if already seeded
    const existing = await mongoDb.collection('questions').countDocuments();
    if (existing === 0) {
      // Seed MongoDB
      await mongoDb.collection('questions').insertMany(questions);
      console.log(`[DB] Seeded MongoDB with ${questions.length} questions`);
    }
  }
  
  // 3. Fallback: JSON file storage
  const fresh: DbData = { questions, topics, cheatSheets, users, testCases, patternDetails };
  writeFileSync(DB_PATH, JSON.stringify(fresh, null, 2));
  console.log(`[DB] Initialized with ${questions.length} questions`);
}
```

---

## 3. BULK QUESTION GENERATION & IMPORT SCRIPTS

### Main Generation Script #1
- **File**: [backend/scripts/generate-bulk-questions.ts](backend/scripts/generate-bulk-questions.ts)
- **Purpose**: Generate 100 unique questions for first 2 topics (Arrays, Strings) + template pattern
- **Run Command**: `npx tsx scripts/generate-bulk-questions.ts`
- **Output**: Writes to [backend/src/data/bulk/arrays.ts](backend/src/data/bulk/arrays.ts) and similar files
- **ID Range**: Starts at 30001
- **Logic**:
  - Creates QSpec (Question Specification) templates
  - Generates questions per topic with unique titles, patterns, examples
  - Exports as `BULK_{TOPIC}` const

### Main Generation Script #2
- **File**: [backend/scripts/generate-bulk-questions-2.ts](backend/scripts/generate-bulk-questions-2.ts)
- **Purpose**: Generate 100 questions for remaining 57 topics (Topics 3-59)
- **Run Command**: `npx tsx scripts/generate-bulk-questions-2.ts`
- **Output**: Appends to existing [backend/src/data/bulk/](backend/src/data/bulk/) files
- **ID Range**: Continues from script #1
- **Generic Pattern**: Creates standardized questions for each topic (Search, Sort, Reverse, etc.)

### Batch/Merge System (Alternative/Legacy)
- **Files**: 
  - [backend/data/generated/batch1.ts](backend/data/generated/batch1.ts) - Questions for topics 4+ (IDs 2001+)
  - [backend/data/generated/batch2.ts](backend/data/generated/batch2.ts)
  - [backend/data/generated/batch3.ts](backend/data/generated/batch3.ts)
  - [backend/data/generated/batch4.ts](backend/data/generated/batch4.ts)
  - [backend/data/generated/merge.ts](backend/data/generated/merge.ts) - Merge script
- **Status**: Legacy system (not currently used in main flow)
- **Purpose**: Alternative approach to merge batches into seed.ts

---

## 4. SEED INITIALIZATION FILES

### Primary Seed File
- **File**: [backend/src/data/seed.ts](backend/src/data/seed.ts)
- **Content**:
  - `topics[]` - 59 hardcoded topic definitions
  - `questions[]` - Merged hardcoded + bulk questions (5926 total)
  - `cheatSheets[]` - Pattern-based cheat sheets
  - `users[]` - Admin/test user accounts
  - `patternDetails[]` - Algorithm patterns library
- **Key Line**: Line 26759 contains `...ALL_BULK_QUESTIONS` that merges all 5900+ bulk questions

### Test Cases File
- **File**: [backend/src/data/testCases.ts](backend/src/data/testCases.ts)
- **Structure**: Record mapping question slugs to test case arrays
- **Format**: `Record<string, TestCaseData[]>`

### Supporting Data Files
- [backend/src/data/functionSignatures.ts](backend/src/data/functionSignatures.ts) - Function signature templates
- [backend/src/data/templateGenerator.ts](backend/src/data/templateGenerator.ts) - Starter code generation helpers

---

## 5. OLD/UNUSED QUESTIONS & ARCHIVED DATA

### Legacy Batch System (NOT CURRENTLY USED)
- **Location**: [backend/data/generated/](backend/data/generated/) folder
- **Files**:
  - `batch1.ts` - Contains questions for topics 4+ (IDs 2001+)
  - `batch2.ts`, `batch3.ts`, `batch4.ts` - Additional batches
  - `merge.ts` - Script to merge batches (not executed in current flow)
- **Status**: Superseded by [backend/scripts/generate-bulk-questions.ts](backend/scripts/generate-bulk-questions.ts) and [backend/scripts/generate-bulk-questions-2.ts](backend/scripts/generate-bulk-questions-2.ts)
- **Why Not Used**: The bulk/ folder system is now the primary method

### Alternative/Commented Approaches
- Batch files follow older ID scheme (2001+, 3001+, etc.) instead of 30001+
- Merge script tries string manipulation on seed.ts file (fragile approach)
- Current bulk/ system is cleaner with separate TypeScript files per topic

---

## 6. DATA FLOW DIAGRAM

```
┌─────────────────────────────────────────────────────────────┐
│                  APPLICATION STARTUP                         │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       ▼
        ┌──────────────────────────────┐
        │   backend/src/index.ts       │
        │  (Entry Point)               │
        └──────────────────┬───────────┘
                           │
                           ▼
        ┌──────────────────────────────────────┐
        │  import from ./data/seed             │
        │  - questions (26 + 5900 bulk)        │
        │  - topics (59)                       │
        │  - cheatSheets                       │
        │  - users                             │
        │  - patternDetails                    │
        └──────────────────┬───────────────────┘
                           │
                    ┌──────┴──────┐
                    │             │
         ┌──────────▼────┐    ┌───▼──────────────────┐
         │ seed.ts lines │    │ bulk/index.ts        │
         │ 1-26750       │    │ (ALL_BULK_QUESTIONS) │
         │ (26 hardcoded)│    │ (5900 questions)     │
         └───────────────┘    └──────────────────────┘
                    │             │
                    └──────┬───────┘
                           │
                    ┌──────▼───────────────┐
                    │  seed.ts line 26759  │
                    │  ...ALL_BULK_QUESTIONS
                    │  (Total: 5926)       │
                    └──────┬───────────────┘
                           │
                           ▼
        ┌──────────────────────────────┐
        │  initDb() in db.ts           │
        │  - Checks MongoDB (env var)  │
        │  - Seeds database            │
        └──────────────────┬───────────┘
                           │
                ┌──────────┴──────────┐
                │                     │
         ┌──────▼──────┐      ┌──────▼──────────┐
         │  MongoDB    │      │  db.json file   │
         │  (Optional) │      │  (Persistent)   │
         └─────────────┘      └─────────────────┘
```

---

## 7. KEY FILE REFERENCES SUMMARY

| Purpose | File Path | ID Range | Count |
|---------|-----------|----------|-------|
| Hardcoded Q's | backend/src/data/seed.ts | 1-26 | ~26 |
| Topics | backend/src/data/seed.ts | 59 IDs | 59 |
| Bulk Arrays | backend/src/data/bulk/arrays.ts | 30001-30100 | 100 |
| Bulk Strings | backend/src/data/bulk/strings.ts | 30101-30200 | 100 |
| All 59 Topics | backend/src/data/bulk/{topic}.ts | 30001-59880 | 5900 |
| Index | backend/src/data/bulk/index.ts | - | - |
| Test Cases | backend/src/data/testCases.ts | - | - |
| Runtime DB | backend/data/db.json | - | 5926 |
| Legacy Batch 1 | backend/data/generated/batch1.ts | 2001+ | - |
| Generation #1 | backend/scripts/generate-bulk-questions.ts | - | - |
| Generation #2 | backend/scripts/generate-bulk-questions-2.ts | - | - |

---

## 8. QUICK START: ADDING NEW QUESTIONS

### Option A: Add to Hardcoded Seed (Simple)
1. Edit [backend/src/data/seed.ts](backend/src/data/seed.ts) before line 26750
2. Add Question object with unique ID
3. Restart app

### Option B: Regenerate Bulk (Complex)
1. Modify [backend/scripts/generate-bulk-questions.ts](backend/scripts/generate-bulk-questions.ts) or #2
2. Run: `npx tsx scripts/generate-bulk-questions.ts`
3. Restart app

### Option C: Direct MongoDB
1. If using MongoDB, insert via MongoClient directly
2. App loads existing data if collection not empty


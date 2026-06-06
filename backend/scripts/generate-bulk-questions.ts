/**
 * Bulk question generator.
 * Run: npx tsx scripts/generate-bulk-questions.ts
 *
 * Generates 100 unique questions per topic (59 topics => 5900 total).
 * Each topic is written to src/data/bulk/{topic_slug}.ts and exported
 * as BULK_{TOPIC_SLUG}. seed.ts imports & merges them all.
 */
import * as fs from 'fs';
import * as path from 'path';
import type { Question, VisualizationType } from '../src/types';
import { topics as TOPICS } from '../src/data/seed';

// ============================================================
// Helpers
// ============================================================

const slugify = (s: string) =>
  s.toLowerCase()
    .replace(/['''`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

let ID_COUNTER = 30000;
const nextId = () => String(++ID_COUNTER);

type Difficulty = 'Easy' | 'Medium' | 'Hard';

interface Param { name: string; type: string; desc: string; }
interface ExIn { input: string; output: string; explanation: string; }
interface TC { input: string; output: string; hidden: boolean; }
interface QSpec {
  title: string;
  pattern: string;
  algoType: string;
  vizType: VisualizationType;
  difficulty: Difficulty;
  fnName: string;
  paramSig: Param[];
  returnType: string;
  problemStatement: string;
  inputFormat: string;
  outputFormat: string;
  examples: ExIn[];
  constraints: string[];
  testCases: TC[];
  companies?: string[];
  keyInsight?: string;
  relatedTitles?: string[];
}

const TOPIC_SLUG: Record<string, string> = {};
TOPICS.forEach((t) => (TOPIC_SLUG[t.id] = t.slug));
const TOPIC_NAME: Record<string, string> = {};
TOPICS.forEach((t) => (TOPIC_NAME[t.id] = t.name));

function buildStarter(spec: QSpec): Record<string, string> {
  const paramsJs = spec.paramSig.map((p) => `${p.name}: ${p.type}`).join(', ');
  const paramsPy = spec.paramSig.map((p) => `${p.name}: ${p.type}`).join(', ');
  const paramsJa = spec.paramSig.map((p) => `${p.type} ${p.name}`).join(', ');
  const paramsCpp = spec.paramSig.map((p) => `${p.type} ${p.name}`).join(', ');
  const stub = spec.returnType === 'int' ? '0' : spec.returnType === 'boolean' ? 'false' : spec.returnType === 'double' ? '0.0' : spec.returnType === 'long' ? '0L' : 'null';
  return {
    javascript: `function ${spec.fnName}(${paramsJs}): ${spec.returnType} {
  // your code here
}
`,
    python: `def ${spec.fnName}(${paramsPy}) -> ${spec.returnType}:
    # your code here
    pass
`,
    java: `class Solution {
    public ${spec.returnType} ${spec.fnName}(${paramsJa}) {
        // your code here
        return ${stub};
    }
}
`,
    cpp: `class Solution {
public:
    ${spec.returnType} ${spec.fnName}(${paramsCpp}) {
        // your code here
        return ${spec.returnType === 'int' ? '0' : spec.returnType === 'bool' ? 'false' : spec.returnType === 'double' ? '0.0' : ''};
    }
};
`,
  };
}

function makeQuestion(spec: QSpec, topicId: string, topicName: string, idx: number): Question {
  const topicSlug = TOPIC_SLUG[topicId] || 'misc';
  const slug = `${slugify(spec.title)}-${topicSlug}-${idx + 1}`;
  return {
    id: nextId(),
    title: spec.title,
    slug,
    difficulty: spec.difficulty,
    topic_id: topicId,
    topic_name: topicName,
    pattern: spec.pattern,
    algorithm_type: spec.algoType,
    visualization_type: spec.vizType,
    enable_visualization: spec.vizType !== 'none',
    problem_statement: spec.problemStatement,
    input_format: spec.inputFormat,
    output_format: spec.outputFormat,
    constraints: spec.constraints.join('\n'),
    explanation: spec.keyInsight,
    key_insight: spec.keyInsight,
    companies: spec.companies,
    related_problems: spec.relatedTitles?.map((t) => ({ title: t, slug: slugify(t), difficulty: 'Medium' })),
    examples: spec.examples,
    sample_input: spec.examples[0]?.input,
    starter_code: buildStarter(spec),
    test_cases: spec.testCases.map((tc, i) => ({ id: String(i + 1), input: tc.input, expected_output: tc.output, is_hidden: tc.hidden })),
  };
}

function mk(
  title: string,
  pattern: string,
  algoType: string,
  vizType: VisualizationType,
  difficulty: Difficulty,
  fnName: string,
  paramSig: Param[],
  returnType: string,
  problemStatement: string,
  inputFormat: string,
  outputFormat: string,
  examples: ExIn[],
  constraints: string[],
  testCases: TC[]
): QSpec {
  return {
    title, pattern, algoType, vizType, difficulty, fnName, paramSig, returnType,
    problemStatement, inputFormat, outputFormat, examples, constraints, testCases,
    companies: ['Google', 'Amazon', 'Microsoft', 'Meta'],
  };
}

// ============================================================
// ARRAY SPECS (100)
// ============================================================
const ARRAY_SPECS: QSpec[] = [
mk('Sum of Array','Iteration','O(n)','array','Easy','sumArray',[{name:'nums',type:'number[]',desc:'integers'}],'number',
'Given an array of integers, return the sum of all elements.','nums = [1, 2, 3, 4, 5]','integer sum',
[{input:'nums = [1,2,3,4]',output:'10',explanation:'1+2+3+4 = 10'}],
['1 <= nums.length <= 10^5','-10^9 <= nums[i] <= 10^9'],
[{input:'[1,2,3]',output:'6',hidden:false},{input:'[-1,1,0]',output:'0',hidden:true},{input:'[100]',output:'100',hidden:true}]),

mk('Product of Array','Iteration','O(n)','array','Easy','productArray',[{name:'nums',type:'number[]',desc:'positive integers'}],'number',
'Return the product of all elements in the array.','nums = [2, 3, 4]','integer product',
[{input:'nums = [2,3,4]',output:'24',explanation:'2*3*4 = 24'}],
['1 <= nums.length <= 10^5','0 <= nums[i] <= 100'],
[{input:'[2,3,4]',output:'24',hidden:false},{input:'[1,1,1]',output:'1',hidden:true},{input:'[0,5,6]',output:'0',hidden:true}]),

mk('Average of Array','Iteration','O(n)','array','Easy','averageArray',[{name:'nums',type:'number[]',desc:'integers'}],'number',
'Compute the average of all elements rounded to 2 decimal places.','nums = [1, 2, 3, 4]','mean rounded',
[{input:'nums = [1,2,3,4]',output:'2.5',explanation:'(1+2+3+4)/4 = 2.5'}],
['1 <= nums.length <= 10^5','-10^4 <= nums[i] <= 10^4'],
[{input:'[1,2,3,4]',output:'2.5',hidden:false},{input:'[5,5]',output:'5.00',hidden:true}]),

mk('Maximum Element','Iteration','O(n)','array','Easy','findMax',[{name:'nums',type:'number[]',desc:'integers'}],'number',
'Return the maximum element in the array.','nums = [3, 1, 4, 1, 5, 9]','largest element',
[{input:'nums = [3,1,4,1,5,9,2,6]',output:'9',explanation:'9 is largest'}],
['1 <= nums.length <= 10^5','-10^9 <= nums[i] <= 10^9'],
[{input:'[3,1,4,1,5]',output:'5',hidden:false},{input:'[-1,-2,-3]',output:'-1',hidden:true}]),

mk('Minimum Element','Iteration','O(n)','array','Easy','findMin',[{name:'nums',type:'number[]',desc:'integers'}],'number',
'Return the minimum element.','nums = [3, 1, 4, 1, 5, 9]','smallest element',
[{input:'nums = [3,1,4,1,5,9,2,6]',output:'1',explanation:'1 is smallest'}],
['1 <= nums.length <= 10^5','-10^9 <= nums[i] <= 10^9'],
[{input:'[3,1,4,1,5]',output:'1',hidden:false},{input:'[5,5,5]',output:'5',hidden:true}]),

mk('Second Maximum','Iteration','O(n)','array','Easy','secondMax',[{name:'nums',type:'number[]',desc:'distinct integers'}],'number',
'Return the second largest distinct element.','nums = [3, 1, 4, 1, 5, 9]','second largest element',
[{input:'nums = [3,1,4,1,5,9,2,6]',output:'6',explanation:'sorted: 1,1,2,3,4,5,6,9 -> 6'}],
['2 <= nums.length <= 10^5','elements are distinct'],
[{input:'[10,20,30]',output:'20',hidden:false},{input:'[5,5,5,5]',output:'-1',hidden:true}]),

mk('Second Minimum','Iteration','O(n)','array','Easy','secondMin',[{name:'nums',type:'number[]',desc:'distinct integers'}],'number',
'Return the second smallest distinct element.','nums = [3, 1, 4, 1, 5]','second smallest element',
[{input:'nums = [3,1,4,1,5]',output:'3',explanation:'sorted: 1,1,3,4,5 -> 3'}],
['2 <= nums.length <= 10^5','elements are distinct'],
[{input:'[10,20,30]',output:'20',hidden:false},{input:'[1,1,1]',output:'-1',hidden:true}]),

mk('Count Frequency','HashMap','O(n)','hashmap','Easy','countFrequency',[{name:'nums',type:'number[]',desc:'integers'}],'number[]',
'Return the count of each unique element as a flat array.','nums = [1, 2, 2, 3, 3, 3]','array of [element, count] pairs',
[{input:'nums = [1,2,2,3,3,3]',output:'[[1,1],[2,2],[3,3]]',explanation:''}],
['1 <= nums.length <= 10^5','-10^9 <= nums[i] <= 10^9'],
[{input:'[1,1,2]',output:'[[1,2],[2,1]]',hidden:false},{input:'[5]',output:'[[5,1]]',hidden:true}]),

mk('Running Sum','Prefix Sum','O(n)','array','Easy','runningSum',[{name:'nums',type:'number[]',desc:'integers'}],'number[]',
'Return array where runningSum[i] = sum of nums[0..i].','nums = [1, 2, 3, 4]','array of running sums',
[{input:'nums = [1,2,3,4]',output:'[1,3,6,10]',explanation:'cumulative sum'}],
['1 <= nums.length <= 10^5','-10^3 <= nums[i] <= 10^3'],
[{input:'[1,2,3,4]',output:'[1,3,6,10]',hidden:false},{input:'[3,1,2,10,1]',output:'[3,4,6,16,17]',hidden:true}]),

mk('Cumulative Product','Prefix Product','O(n)','array','Easy','cumulativeProduct',[{name:'nums',type:'number[]',desc:'positive integers'}],'number[]',
'Return array where each element is the product of all previous elements.','nums = [1, 2, 3, 4]','cumulative products',
[{input:'nums = [1,2,3,4]',output:'[1,2,6,24]',explanation:''}],
['1 <= nums.length <= 10^5','1 <= nums[i] <= 10'],
[{input:'[1,2,3,4]',output:'[1,2,6,24]',hidden:false},{input:'[2,2,2]',output:'[2,4,8]',hidden:true}]),

mk('Reverse Array','Two Pointers','O(n)','array','Easy','reverseArray',[{name:'nums',type:'number[]',desc:'integers'}],'number[]',
'Reverse the array and return it.','nums = [1, 2, 3, 4]','reversed array',
[{input:'nums = [1,2,3,4,5]',output:'[5,4,3,2,1]',explanation:''}],
['1 <= nums.length <= 10^5'],
[{input:'[1,2,3]',output:'[3,2,1]',hidden:false},{input:'[1]',output:'[1]',hidden:true}]),

mk('Rotate Array Right','Reversal','O(n)','array','Easy','rotateRight',[{name:'nums',type:'number[]',desc:'integers'},{name:'k',type:'number',desc:'steps'}],'number[]',
'Rotate array to the right by k steps.','nums = [1,2,3,4,5,6,7], k = 3','rotated array',
[{input:'nums = [1,2,3,4,5,6,7], k = 3',output:'[5,6,7,1,2,3,4]',explanation:''}],
['1 <= nums.length <= 10^5','0 <= k <= 10^5'],
[{input:'[1,2,3,4,5], k=2',output:'[4,5,1,2,3]',hidden:false}]),

mk('Rotate Array Left','Reversal','O(n)','array','Easy','rotateLeft',[{name:'nums',type:'number[]',desc:'integers'},{name:'k',type:'number',desc:'steps'}],'number[]',
'Rotate array to the left by k steps.','nums = [1,2,3,4,5,6,7], k = 2','rotated array',
[{input:'nums = [1,2,3,4,5,6,7], k = 2',output:'[3,4,5,6,7,1,2]',explanation:''}],
['1 <= nums.length <= 10^5','0 <= k <= 10^5'],
[{input:'[1,2,3,4,5], k=2',output:'[3,4,5,1,2]',hidden:false}]),

mk('Move Zeros to End','Two Pointers','O(n)','array','Easy','moveZeros',[{name:'nums',type:'number[]',desc:'integers'}],'number[]',
'Move all zeros to the end, maintaining order of non-zeros.','nums = [0, 1, 0, 3, 12]','array with zeros at end',
[{input:'nums = [0,1,0,3,12]',output:'[1,3,12,0,0]',explanation:''}],
['1 <= nums.length <= 10^4','-2^31 <= nums[i] <= 2^31 - 1'],
[{input:'[0,1,0,3,12]',output:'[1,3,12,0,0]',hidden:false},{input:'[0,0,1]',output:'[1,0,0]',hidden:true}]),

mk('Rearrange Even Odd','Two Pointers','O(n)','array','Easy','rearrangeEvenOdd',[{name:'nums',type:'number[]',desc:'integers'}],'number[]',
'Rearrange so all even numbers come before all odd numbers.','nums = [1, 2, 3, 4, 5]','evens then odds',
[{input:'nums = [1,2,3,4,5,6]',output:'[2,4,6,1,3,5]',explanation:''}],
['1 <= nums.length <= 10^5','0 <= nums[i] <= 10^9'],
[{input:'[1,2,3,4]',output:'[2,4,1,3]',hidden:false}]),

mk('Reverse K Groups','Reversal','O(n)','array','Medium','reverseKGroup',[{name:'nums',type:'number[]',desc:'integers'},{name:'k',type:'number',desc:'group size'}],'number[]',
'Reverse array in groups of k. If remaining < k, keep as is.','nums = [1,2,3,4,5,6], k = 3','k-group reversed',
[{input:'nums = [1,2,3,4,5,6,7,8], k = 3',output:'[3,2,1,6,5,4,8,7]',explanation:''}],
['1 <= nums.length <= 10^5','1 <= k <= nums.length'],
[{input:'[1,2,3,4,5,6,7,8], k=3',output:'[3,2,1,6,5,4,8,7]',hidden:false}]),

mk('Rotate 90 Clockwise (Matrix)','Matrix','O(n^2)','array','Medium','rotateMatrix',[{name:'matrix',type:'number[][]',desc:'square matrix'}],'number[][]',
'Rotate an n x n matrix 90 degrees clockwise.','matrix = [[1,2,3],[4,5,6],[7,8,9]]','rotated matrix',
[{input:'matrix = [[1,2,3],[4,5,6],[7,8,9]]',output:'[[7,4,1],[8,5,2],[9,6,3]]',explanation:''}],
['1 <= n <= 200','-1000 <= matrix[i][j] <= 1000'],
[{input:'[[1,2],[3,4]]',output:'[[3,1],[4,2]]',hidden:false}]),

mk('Linear Search','Linear Search','O(n)','array','Easy','linearSearch',[{name:'nums',type:'number[]',desc:'integers'},{name:'target',type:'number',desc:'target value'}],'number',
'Return the index of target, or -1 if not found.','nums = [4, 2, 7, 1, 9], target = 7','index or -1',
[{input:'nums = [4,2,7,1,9], target = 7',output:'2',explanation:''}],
['1 <= nums.length <= 10^4'],
[{input:'[4,2,7,1,9], 7',output:'2',hidden:false},{input:'[1,2,3], 4',output:'-1',hidden:true}]),

mk('Binary Search','Binary Search','O(log n)','array','Easy','binarySearch',[{name:'nums',type:'number[]',desc:'sorted'},{name:'target',type:'number',desc:'target'}],'number',
'Search a sorted array for target. Return index or -1.','nums = [1, 3, 5, 7, 9], target = 5','index or -1',
[{input:'nums = [1,3,5,7,9,11], target = 7',output:'3',explanation:''}],
['1 <= nums.length <= 10^4','nums is sorted'],
[{input:'[1,3,5,7,9], 5',output:'2',hidden:false}]),

mk('First Occurrence','Binary Search','O(log n)','array','Easy','firstOccurrence',[{name:'nums',type:'number[]',desc:'sorted'},{name:'target',type:'number',desc:'target'}],'number',
'Find the first index where target appears (sorted, with duplicates).','nums = [1, 2, 2, 2, 3], target = 2','first index',
[{input:'nums = [1,2,2,2,3,4], target = 2',output:'1',explanation:''}],
['1 <= nums.length <= 10^5','nums is sorted non-decreasing'],
[{input:'[1,2,2,2,3], 2',output:'1',hidden:false}]),

mk('Last Occurrence','Binary Search','O(log n)','array','Easy','lastOccurrence',[{name:'nums',type:'number[]',desc:'sorted'},{name:'target',type:'number',desc:'target'}],'number',
'Find the last index where target appears.','nums = [1, 2, 2, 2, 3], target = 2','last index',
[{input:'nums = [1,2,2,2,3,4], target = 2',output:'3',explanation:''}],
['1 <= nums.length <= 10^5','nums is sorted non-decreasing'],
[{input:'[1,2,2,2,3], 2',output:'3',hidden:false}]),

mk('Count Occurrences','Binary Search','O(log n)','array','Easy','countOccurrences',[{name:'nums',type:'number[]',desc:'sorted'},{name:'target',type:'number',desc:'target'}],'number',
'Count how many times target appears in a sorted array.','nums = [1, 2, 2, 2, 3], target = 2','count',
[{input:'nums = [1,2,2,2,3,4], target = 2',output:'3',explanation:''}],
['1 <= nums.length <= 10^5','nums is sorted non-decreasing'],
[{input:'[1,2,2,2,3], 2',output:'3',hidden:false}]),

mk('Find Missing Number','XOR','O(n)','array','Easy','findMissing',[{name:'nums',type:'number[]',desc:'0..n with one missing'}],'number',
'Array contains n distinct numbers from 0 to n with one missing. Find it.','nums = [3, 0, 1]','missing number',
[{input:'nums = [3,0,1]',output:'2',explanation:'range [0,3] -> 2 missing'}],
['1 <= n <= 10^4','nums has n distinct numbers from 0..n'],
[{input:'[0,1,3]',output:'2',hidden:false},{input:'[0]',output:'1',hidden:true}]),

mk('Find Duplicate','Floyd','O(n)','array','Medium','findDuplicate',[{name:'nums',type:'number[]',desc:'1..n with one dup'}],'number',
'Array has n+1 integers in [1, n] with one duplicate. Find it.','nums = [1, 3, 4, 2, 2]','duplicate',
[{input:'nums = [1,3,4,2,2]',output:'2',explanation:''}],
['1 <= n <= 10^5','nums.length = n+1'],
[{input:'[3,1,3,4,2]',output:'3',hidden:false}]),

mk('All Duplicates','HashMap','O(n)','array','Medium','findAllDuplicates',[{name:'nums',type:'number[]',desc:'1..n'}],'number[]',
'Find all elements that appear twice.','nums = [4, 3, 2, 7, 8, 2, 3, 1]','duplicates',
[{input:'nums = [4,3,2,7,8,2,3,1]',output:'[2,3]',explanation:''}],
['1 <= n <= 10^5','elements in [1,n]','1 or 2 occurrences'],
[{input:'[4,3,2,7,8,2,3,1]',output:'[2,3]',hidden:false}]),

mk('Contains Duplicate','Hash Set','O(n)','array','Easy','containsDuplicate',[{name:'nums',type:'number[]',desc:'integers'}],'boolean',
'Return true if any value appears at least twice.','nums = [1, 2, 3, 1]','true or false',
[{input:'nums = [1,2,3,1]',output:'true',explanation:''}],
['1 <= nums.length <= 10^5'],
[{input:'[1,2,3,1]',output:'true',hidden:false}]),

mk('Single Number','XOR','O(n)','array','Easy','singleNumber',[{name:'nums',type:'number[]',desc:'all but one appear twice'}],'number',
'Every element appears twice except one. Find the unique one.','nums = [2, 2, 1]','unique',
[{input:'nums = [4,1,2,1,2]',output:'4',explanation:''}],
['1 <= nums.length <= 3*10^4'],
[{input:'[2,2,1]',output:'1',hidden:false}]),

mk('Two Sum','HashMap','O(n)','hashmap','Easy','twoSum',[{name:'nums',type:'number[]',desc:'integers'},{name:'target',type:'number',desc:'target'}],'number[]',
'Return indices of two numbers that add to target.','nums = [2, 7, 11, 15], target = 9','indices',
[{input:'nums = [2,7,11,15], target = 9',output:'[0,1]',explanation:''}],
['2 <= nums.length <= 10^4','exactly one solution'],
[{input:'[2,7,11,15], 9',output:'[0,1]',hidden:false}]),

mk('Two Sum Sorted','Two Pointers','O(n)','array','Easy','twoSumSorted',[{name:'nums',type:'number[]',desc:'sorted'},{name:'target',type:'number',desc:'target'}],'number[]',
'Return 1-indexed positions of two numbers in sorted array that sum to target.','nums = [2, 7, 11, 15], target = 9','1-indexed positions',
[{input:'nums = [2,7,11,15], target = 9',output:'[1,2]',explanation:''}],
['2 <= nums.length <= 3*10^4','nums is sorted','exactly one solution'],
[{input:'[2,3,4], 6',output:'[1,3]',hidden:false}]),

mk('Three Sum','Two Pointers','O(n^2)','array','Medium','threeSum',[{name:'nums',type:'number[]',desc:'integers'}],'number[][]',
'Find all unique triplets that sum to zero.','nums = [-1, 0, 1, 2, -1, -4]','all unique triplets',
[{input:'nums = [-1,0,1,2,-1,-4]',output:'[[-1,-1,2],[-1,0,1]]',explanation:''}],
['0 <= nums.length <= 3000','-10^5 <= nums[i] <= 10^5'],
[{input:'[0,1,1]',output:'[]',hidden:false}]),

mk('Three Sum Closest','Two Pointers','O(n^2)','array','Medium','threeSumClosest',[{name:'nums',type:'number[]',desc:'integers'},{name:'target',type:'number',desc:'target'}],'number',
'Find the sum of three integers closest to target.','nums = [-1, 2, 1, -4], target = 1','closest sum',
[{input:'nums = [-1,2,1,-4], target = 1',output:'2',explanation:''}],
['3 <= nums.length <= 500','-10^3 <= nums[i] <= 10^3'],
[{input:'[0,0,0], 1',output:'0',hidden:false}]),

mk('Four Sum','Two Pointers','O(n^3)','array','Medium','fourSum',[{name:'nums',type:'number[]',desc:'integers'},{name:'target',type:'number',desc:'target'}],'number[][]',
'Find all unique quadruplets that sum to target.','nums = [1, 0, -1, 0, -2, 2], target = 0','all unique quadruplets',
[{input:'nums = [1,0,-1,0,-2,2], target = 0',output:'[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]',explanation:''}],
['1 <= nums.length <= 200'],
[{input:'[2,2,2,2,2], 8',output:'[[2,2,2,2]]',hidden:false}]),

mk('Max Subarray Sum (Kadane)','Kadane','O(n)','array','Medium','maxSubArray',[{name:'nums',type:'number[]',desc:'integers'}],'number',
'Find the contiguous subarray with the largest sum.','nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]','max sum',
[{input:'nums = [-2,1,-3,4,-1,2,1,-5,4]',output:'6',explanation:'[4,-1,2,1] = 6'}],
['1 <= nums.length <= 10^5','-10^4 <= nums[i] <= 10^4'],
[{input:'[-2,1,-3,4,-1,2,1,-5,4]',output:'6',hidden:false}]),

mk('Min Subarray Sum','Kadane variant','O(n)','array','Medium','minSubArray',[{name:'nums',type:'number[]',desc:'integers'}],'number',
'Find the contiguous subarray with the smallest sum.','nums = [3, -2, 5, -1]','min sum',
[{input:'nums = [3,-2,5,-1]',output:'-3',explanation:'whole array: 3-2+5-1=5, or [3,-2,-1] = 0. minimum is -3 for [3,-2,5,-1]: try [-2,5,-1]=2, single -2=-2. actually min=5 with whole array; but -2 is the smallest single element. min subarray is just -2 = -2'}],
['1 <= nums.length <= 10^5'],
[{input:'[3,-2,5,-1]',output:'-2',hidden:false}]),

mk('Max Product Subarray','DP','O(n)','array','Medium','maxProduct',[{name:'nums',type:'number[]',desc:'integers'}],'number',
'Find the contiguous subarray with the largest product.','nums = [2, 3, -2, 4]','max product',
[{input:'nums = [2,3,-2,4]',output:'6',explanation:'[2,3] = 6'}],
['1 <= nums.length <= 2*10^4','-10 <= nums[i] <= 10'],
[{input:'[-2,0,-1]',output:'0',hidden:false}]),

mk('Min Size Subarray Sum','Sliding Window','O(n)','array','Medium','minSubArrayLen',[{name:'target',type:'number',desc:'target'},{name:'nums',type:'number[]',desc:'positive ints'}],'number',
'Find minimal length of a contiguous subarray with sum >= target.','target = 7, nums = [2, 3, 1, 2, 4, 3]','min length',
[{input:'target = 7, nums = [2,3,1,2,4,3]',output:'2',explanation:'[4,3] sum 7'}],
['1 <= target <= 10^9','1 <= nums.length <= 10^5'],
[{input:'4, [1,4,4]',output:'1',hidden:false}]),

mk('Subarray Sum Equals K','Prefix + HashMap','O(n)','array','Medium','subarraySum',[{name:'nums',type:'number[]',desc:'integers'},{name:'k',type:'number',desc:'target sum'}],'number',
'Count contiguous subarrays that sum to k.','nums = [1, 1, 1], k = 2','count',
[{input:'nums = [1,1,1], k = 2',output:'2',explanation:''}],
['1 <= nums.length <= 2*10^4','-1000 <= nums[i] <= 1000'],
[{input:'[1,2,3], 3',output:'2',hidden:false}]),

mk('Longest Subarray Sum K','Prefix + HashMap','O(n)','array','Medium','longestSubarraySumK',[{name:'nums',type:'number[]',desc:'integers'},{name:'k',type:'number',desc:'target'}],'number',
'Length of the longest subarray with sum k.','nums = [1, -1, 5, -2, 3], k = 3','longest length',
[{input:'nums = [1,-1,5,-2,3], k = 3',output:'4',explanation:'[1,-1,5,-2] sums to 3'}],
['1 <= nums.length <= 10^5'],
[{input:'[-1,1,2,3], 3',output:'3',hidden:false}]),

mk('Subarray With Given Sum (Positives)','Sliding Window','O(n)','array','Easy','subarraySumPositive',[{name:'nums',type:'number[]',desc:'positive'},{name:'target',type:'number',desc:'sum'}],'number[]',
'Find a contiguous subarray (1-indexed) of positive numbers that sums to target.','nums = [1, 4, 20, 3, 10, 5], target = 33','subarray indices',
[{input:'nums = [1,2,3,7,5], target = 12',output:'[2,4]',explanation:'2+3+7=12'}],
['1 <= nums.length <= 10^5','1 <= nums[i] <= 100'],
[{input:'[1,10,3], 10',output:'[1,1]',hidden:false}]),

mk('Largest Subarray Length With Sum <= K','Sliding Window','O(n)','array','Medium','longestSubarrayAtMostK',[{name:'nums',type:'number[]',desc:'positive'},{name:'k',type:'number',desc:'limit'}],'number',
'Find the longest subarray of positive numbers with sum <= k.','nums = [3, 1, 2, 1, 1], k = 4','longest length',
[{input:'nums = [3,1,2,1,1], k = 4',output:'3',explanation:'[1,2,1] sum 4'}],
['1 <= nums.length <= 10^5','1 <= nums[i] <= 100'],
[{input:'[1,1,1], 2',output:'2',hidden:false}]),

mk('Maximum Average Subarray I','Sliding Window','O(n)','array','Easy','findMaxAverage',[{name:'nums',type:'number[]',desc:'integers'},{name:'k',type:'number',desc:'window size'}],'number',
'Find the contiguous subarray of size k with maximum average.','nums = [1, 12, -5, -6, 50, 3], k = 4','max avg',
[{input:'nums = [1,12,-5,-6,50,3], k = 4',output:'12.75',explanation:''}],
['1 <= k <= nums.length <= 10^5','-10^4 <= nums[i] <= 10^4'],
[{input:'[5], 1',output:'5',hidden:false}]),

mk('Contiguous Array (Equal 0 and 1)','Prefix + HashMap','O(n)','array','Medium','findMaxLength',[{name:'nums',type:'number[]',desc:'0/1 array'}],'number',
'Find max length of contiguous subarray with equal 0s and 1s.','nums = [0, 1, 0]','max length',
[{input:'nums = [0,1,0]',output:'2',explanation:'[0,1] or [1,0]'}],
['1 <= nums.length <= 10^5','nums[i] is 0 or 1'],
[{input:'[0,1,0,1]',output:'4',hidden:false}]),

mk('Continuous Subarray Sum','Prefix + HashMap','O(n)','array','Medium','checkSubarraySum',[{name:'nums',type:'number[]',desc:'ints'},{name:'k',type:'number',desc:'mod'}],'boolean',
'Check if array has continuous subarray of size >= 2 with sum divisible by k.','nums = [23, 2, 4, 6, 7], k = 6','true or false',
[{input:'nums = [23,2,4,6,7], k = 6',output:'true',explanation:'[2,4] = 6'}],
['1 <= nums.length <= 10^5','0 <= nums[i] <= 10^9','1 <= k <= 2^31 - 1'],
[{input:'[23,2,6,4,7], 6',output:'true',hidden:false}]),

mk('Maximum Subarray Sum Circular','Kadane','O(n)','array','Medium','maxSubarraySumCircular',[{name:'nums',type:'number[]',desc:'integers'}],'number',
'Find max subarray sum in a circular array.','nums = [1, -2, 3, -2]','max sum',
[{input:'nums = [5,-3,5]',output:'10',explanation:'[5] + [5] wrap = 10'}],
['1 <= nums.length <= 3*10^4','-3*10^4 <= nums[i] <= 3*10^4'],
[{input:'[3,-1,2,-1]',output:'4',hidden:false}]),

mk('Longest Subarray of 1s After Deleting One','Sliding Window','O(n)','array','Medium','longestOnes',[{name:'nums',type:'number[]',desc:'0/1'},{name:'k',type:'number',desc:'max flips'}],'number',
'Return length of longest subarray of 1s if you can flip at most k zeros.','nums = [1, 1, 0, 0, 1, 1, 1, 0, 1], k = 1','longest length',
[{input:'nums = [1,1,0,0,1,1,1,0,1], k = 1',output:'6',explanation:''}],
['1 <= nums.length <= 10^5','nums[i] is 0 or 1','0 <= k <= nums.length'],
[{input:'[0,0,1,1], 0',output:'2',hidden:false}]),

mk('Maximum Number of Vowels in Substring','Sliding Window','O(n)','array','Medium','maxVowels',[{name:'s',type:'string',desc:'string'},{name:'k',type:'number',desc:'window size'}],'number',
'Max number of vowels in any substring of length k.','s = "abciiidef", k = 3','max vowel count',
[{input:'s = "abciiidef", k = 3',output:'3',explanation:'"iii"'}],
['1 <= s.length <= 10^5','s consists of lowercase English letters','1 <= k <= s.length'],
[{input:'"aeiou", 2',output:'2',hidden:false}]),

mk('Max Consecutive Ones III','Sliding Window','O(n)','array','Medium','longestOnes2',[{name:'nums',type:'number[]',desc:'0/1'},{name:'k',type:'number',desc:'flips'}],'number',
'Max consecutive 1s if you can flip at most k zeros.','nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2','max length',
[{input:'nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2',output:'6',explanation:''}],
['1 <= nums.length <= 10^5','nums[i] is 0 or 1','0 <= k <= nums.length'],
[{input:'[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3',output:'10',hidden:false}]),

mk('Fruit Into Baskets','Sliding Window','O(n)','array','Medium','totalFruit',[{name:'fruits',type:'number[]',desc:'tree types'}],'number',
'Longest subarray with at most 2 distinct values.','fruits = [1, 2, 1]','max fruits',
[{input:'fruits = [1,2,1,2,3]',output:'4',explanation:'[1,2,1,2]'}],
['1 <= fruits.length <= 10^5','0 <= fruits[i] < fruits.length'],
[{input:'[0,1,2,2]',output:'3',hidden:false}]),

mk('Kth Largest Element','Quick Select','O(n) avg','array','Medium','findKthLargest',[{name:'nums',type:'number[]',desc:'ints'},{name:'k',type:'number',desc:'rank'}],'number',
'Find the kth largest element in unsorted array.','nums = [3, 2, 1, 5, 6, 4], k = 2','kth largest',
[{input:'nums = [3,2,1,5,6,4], k = 2',output:'5',explanation:''}],
['1 <= k <= nums.length <= 10^5'],
[{input:'[3,2,3,1,2,4,5,5,6], 4',output:'4',hidden:false}]),

mk('Kth Smallest Element','Quick Select','O(n) avg','array','Medium','findKthSmallest',[{name:'nums',type:'number[]',desc:'ints'},{name:'k',type:'number',desc:'rank'}],'number',
'Find the kth smallest element.','nums = [3, 2, 1, 5, 6, 4], k = 2','kth smallest',
[{input:'nums = [3,2,1,5,6,4], k = 2',output:'2',explanation:''}],
['1 <= k <= nums.length <= 10^5'],
[{input:'[3,2,1,5,6,4], 2',output:'2',hidden:false}]),

mk('Top K Frequent Elements','Bucket Sort','O(n)','array','Medium','topKFrequent',[{name:'nums',type:'number[]',desc:'ints'},{name:'k',type:'number',desc:'k'}],'number[]',
'Return the k most frequent elements.','nums = [1, 1, 1, 2, 2, 3], k = 2','top k',
[{input:'nums = [1,1,1,2,2,3], k = 2',output:'[1,2]',explanation:''}],
['1 <= nums.length <= 10^5'],
[{input:'[1], 1',output:'[1]',hidden:false}]),

mk('Top K Frequent Words','HashMap + Heap','O(n log k)','array','Medium','topKFrequentWords',[{name:'words',type:'string[]',desc:'words'},{name:'k',type:'number',desc:'k'}],'string[]',
'Return the k most frequent words, sorted by frequency desc, lex asc.','words = ["i","love","leetcode","i","love","coding"], k = 2','top k words',
[{input:'words = ["i","love","leetcode","i","love","coding"], k = 2',output:'["i","love"]',explanation:''}],
['1 <= words.length <= 500'],
[{input:'["a","b"], 2',output:'["a","b"]',hidden:false}]),

mk('K Closest Points to Origin','Heap','O(n log k)','array','Medium','kClosest',[{name:'points',type:'number[][]',desc:'[x,y]'},{name:'k',type:'number',desc:'k'}],'number[][]',
'Return the k closest points to origin (0,0).','points = [[1,3],[-2,2]], k = 1','k closest',
[{input:'points = [[1,3],[-2,2],[2,-2]], k = 2',output:'[[-2,2],[2,-2]]',explanation:''}],
['1 <= k <= points.length <= 10^4'],
[{input:'[[3,3],[5,-1],[-2,4]], 2',output:'[[3,3],[-2,4]]',hidden:false}]),

mk('Sort Array by Parity','Two Pointers','O(n)','array','Easy','sortArrayByParity',[{name:'nums',type:'number[]',desc:'ints'}],'number[]',
'Return array with all evens first, then odds.','nums = [3, 1, 2, 4]','parity sorted',
[{input:'nums = [3,1,2,4]',output:'[2,4,3,1]',explanation:''}],
['1 <= nums.length <= 5*10^4','0 <= nums[i] <= 5000'],
[{input:'[0,1]',output:'[0,1]',hidden:false}]),

mk('Sort Array by Parity II','Two Pointers','O(n)','array','Easy','sortArrayByParityII',[{name:'nums',type:'number[]',desc:'half even half odd'}],'number[]',
'Half are even at even indices, half are odd at odd indices.','nums = [4, 2, 5, 7]','parity-correct',
[{input:'nums = [4,2,5,7]',output:'[4,5,2,7]',explanation:''}],
['2 <= nums.length <= 2*10^4','nums.length is even','half even half odd'],
[{input:'[2,3]',output:'[2,3]',hidden:false}]),

mk('Sort Colors (0,1,2)','Dutch Flag','O(n)','array','Medium','sortColors',[{name:'nums',type:'number[]',desc:'0/1/2'}],'number[]',
'Sort an array of 0s, 1s, and 2s in-place.','nums = [2, 0, 2, 1, 1, 0]','sorted',
[{input:'nums = [2,0,2,1,1,0]',output:'[0,0,1,1,2,2]',explanation:''}],
['1 <= nums.length <= 300','nums[i] is 0, 1, or 2'],
[{input:'[0]',output:'[0]',hidden:false}]),

mk('Wiggle Sort','Greedy + Sort','O(n log n)','array','Medium','wiggleSort',[{name:'nums',type:'number[]',desc:'ints'}],'number[]',
'Rearrange so nums[0] <= nums[1] >= nums[2] <= nums[3]...','nums = [3, 5, 2, 1, 6, 4]','wiggle-sorted',
[{input:'nums = [3,5,2,1,6,4]',output:'[3,5,1,6,2,4]',explanation:''}],
['1 <= nums.length <= 5*10^3','0 <= nums[i] <= 3*10^3'],
[{input:'[1,2,3]',output:'[1,3,2]',hidden:false}]),

mk('Sort Array Squared','Two Pointers','O(n)','array','Easy','sortedSquares',[{name:'nums',type:'number[]',desc:'sorted'}],'number[]',
'Return squares of sorted array, also sorted.','nums = [-4, -1, 0, 3, 10]','sorted squares',
[{input:'nums = [-4,-1,0,3,10]',output:'[0,1,9,16,100]',explanation:''}],
['1 <= nums.length <= 10^4','nums is sorted'],
[{input:'[-7,-3,2,3,11]',output:'[4,9,9,49,121]',hidden:false}]),

mk('Merge Intervals','Sorting','O(n log n)','array','Medium','mergeIntervals',[{name:'intervals',type:'number[][]',desc:'[start,end]'}],'number[][]',
'Merge all overlapping intervals.','intervals = [[1,3],[2,6],[8,10],[15,18]]','merged',
[{input:'intervals = [[1,3],[2,6],[8,10],[15,18]]',output:'[[1,6],[8,10],[15,18]]',explanation:''}],
['1 <= intervals.length <= 10^4'],
[{input:'[[1,4],[4,5]]',output:'[[1,5]]',hidden:false}]),

mk('Insert Interval','Linear Scan','O(n)','array','Medium','insertInterval',[{name:'intervals',type:'number[][]',desc:'sorted'},{name:'newInterval',type:'number[]',desc:'[start,end]'}],'number[][]',
'Insert a new interval into sorted non-overlapping intervals.','intervals = [[1,3],[6,9]], newInterval = [2,5]','merged',
[{input:'intervals = [[1,3],[6,9]], newInterval = [2,5]',output:'[[1,5],[6,9]]',explanation:''}],
['0 <= intervals.length <= 10^4','intervals sorted by start'],
[{input:'[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]',output:'[[1,2],[3,10],[12,16]]',hidden:false}]),

mk('Non-Overlapping Intervals','Greedy','O(n log n)','array','Medium','eraseOverlapIntervals',[{name:'intervals',type:'number[][]',desc:'[start,end]'}],'number',
'Min intervals to remove so rest are non-overlapping.','intervals = [[1,2],[2,3],[3,4],[1,3]]','min removals',
[{input:'intervals = [[1,2],[2,3],[3,4],[1,3]]',output:'1',explanation:''}],
['1 <= intervals.length <= 10^5'],
[{input:'[[1,2],[2,3]]',output:'0',hidden:false}]),

mk('Meeting Rooms','Sort','O(n log n)','array','Easy','canAttendMeetings',[{name:'intervals',type:'number[][]',desc:'[start,end]'}],'boolean',
'Check if a person can attend all meetings.','intervals = [[0,30],[5,10],[15,20]]','true or false',
[{input:'intervals = [[0,30],[5,10],[15,20]]',output:'false',explanation:''}],
['0 <= intervals.length <= 10^4'],
[{input:'[[7,10],[2,4]]',output:'true',hidden:false}]),

mk('Meeting Rooms II','Min Heap','O(n log n)','array','Medium','minMeetingRooms',[{name:'intervals',type:'number[][]',desc:'[start,end]'}],'number',
'Min number of conference rooms required.','intervals = [[0,30],[5,10],[15,20]]','min rooms',
[{input:'intervals = [[0,30],[5,10],[15,20]]',output:'2',explanation:''}],
['1 <= intervals.length <= 10^4'],
[{input:'[[7,10],[2,4]]',output:'1',hidden:false}]),

mk('Min Arrows to Burst Balloons','Greedy','O(n log n)','array','Medium','findMinArrowShots',[{name:'points',type:'number[][]',desc:'[start,end]'}],'number',
'Min arrows to burst all balloons.','points = [[10,16],[2,8],[1,6],[7,12]]','min arrows',
[{input:'points = [[10,16],[2,8],[1,6],[7,12]]',output:'2',explanation:''}],
['1 <= points.length <= 10^5'],
[{input:'[[1,2],[3,4],[5,6]]',output:'3',hidden:false}]),

mk('Summary Ranges','Linear Scan','O(n)','array','Easy','summaryRanges',[{name:'nums',type:'number[]',desc:'sorted unique'}],'string[]',
'Return the smallest sorted list of ranges that cover all numbers.','nums = [0, 1, 2, 4, 5, 7]','ranges',
[{input:'nums = [0,1,2,4,5,7]',output:'["0->2","4->5","7"]',explanation:''}],
['0 <= nums.length <= 20','sorted, unique'],
[{input:'[0,2,3,4,6,8,9]',output:'["0","2->4","6","8->9"]',hidden:false}]),

mk('Partition Labels','Greedy + Last Index','O(n)','array','Medium','partitionLabels',[{name:'s',type:'string',desc:'string'}],'number[]',
'Partition string so each letter appears in at most one part.','s = "ababcbacadefegdehijhklij"','partition sizes',
[{input:'s = "ababcbacadefegdehijhklij"',output:'[9,7,8]',explanation:''}],
['1 <= s.length <= 500','s contains lowercase English letters'],
[{input:'"eccbbbbdec"',output:'[10]',hidden:false}]),

mk('Best Time Buy Sell Stock','Greedy','O(n)','array','Easy','maxProfit',[{name:'prices',type:'number[]',desc:'daily prices'}],'number',
'Max profit from one buy and one sell.','prices = [7, 1, 5, 3, 6, 4]','max profit',
[{input:'prices = [7,1,5,3,6,4]',output:'5',explanation:''}],
['1 <= prices.length <= 10^5'],
[{input:'[7,6,4,3,1]',output:'0',hidden:false}]),

mk('Best Time Buy Sell Stock II','Greedy','O(n)','array','Medium','maxProfitII',[{name:'prices',type:'number[]',desc:'daily prices'}],'number',
'Max profit from unlimited transactions.','prices = [7, 1, 5, 3, 6, 4]','max profit',
[{input:'prices = [7,1,5,3,6,4]',output:'7',explanation:''}],
['1 <= prices.length <= 3*10^4'],
[{input:'[1,2,3,4,5]',output:'4',hidden:false}]),

mk('Best Time Buy Sell Stock With Cooldown','DP','O(n)','array','Medium','maxProfitCooldown',[{name:'prices',type:'number[]',desc:'prices'}],'number',
'Max profit with cooldown of 1 day after each sell.','prices = [1, 2, 3, 0, 2]','max profit',
[{input:'prices = [1,2,3,0,2]',output:'3',explanation:''}],
['1 <= prices.length <= 5000'],
[{input:'[1]',output:'0',hidden:false}]),

mk('Best Time Buy Sell Stock With Fee','DP','O(n)','array','Medium','maxProfitFee',[{name:'prices',type:'number[]',desc:'prices'},{name:'fee',type:'number',desc:'fee'}],'number',
'Max profit with transaction fee.','prices = [1, 3, 2, 8, 4, 9], fee = 2','max profit',
[{input:'prices = [1,3,2,8,4,9], fee = 2',output:'8',explanation:''}],
['1 <= prices.length <= 5*10^4'],
[{input:'[1,3,7,5,10,3], 3',output:'6',hidden:false}]),

mk('Jump Game','Greedy','O(n)','array','Medium','canJump',[{name:'nums',type:'number[]',desc:'max jump at i'}],'boolean',
'Can you reach the last index?','nums = [2, 3, 1, 1, 4]','true or false',
[{input:'nums = [2,3,1,1,4]',output:'true',explanation:''}],
['1 <= nums.length <= 10^4'],
[{input:'[3,2,1,0,4]',output:'false',hidden:false}]),

mk('Jump Game II','Greedy BFS','O(n)','array','Medium','jump',[{name:'nums',type:'number[]',desc:'max jump'}],'number',
'Min number of jumps to reach last index.','nums = [2, 3, 1, 1, 4]','min jumps',
[{input:'nums = [2,3,1,1,4]',output:'2',explanation:''}],
['1 <= nums.length <= 10^4'],
[{input:'[2,3,0,1,4]',output:'2',hidden:false}]),

mk('Gas Station','Greedy','O(n)','array','Medium','canCompleteCircuit',[{name:'gas',type:'number[]',desc:'gas'},{name:'cost',type:'number[]',desc:'cost'}],'number',
'Starting gas station index to complete circuit, or -1.','gas = [1,2,3,4,5], cost = [3,4,5,1,2]','start index',
[{input:'gas = [1,2,3,4,5], cost = [3,4,5,1,2]',output:'3',explanation:''}],
['1 <= gas.length == cost.length <= 10^5'],
[{input:'[2,3,4], [3,4,3]',output:'-1',hidden:false}]),

mk('Candy Distribution','Two-Pass','O(n)','array','Hard','candy',[{name:'ratings',type:'number[]',desc:'ratings'}],'number',
'Distribute candies so a child with higher rating has more candies.','ratings = [1, 0, 2]','min candies',
[{input:'ratings = [1,0,2]',output:'5',explanation:''}],
['1 <= ratings.length <= 2*10^4'],
[{input:'[1,2,2]',output:'4',hidden:false}]),

mk('Trapping Rain Water','Two Pointers','O(n)','array','Hard','trap',[{name:'height',type:'number[]',desc:'elevations'}],'number',
'Compute water trapped between bars after raining.','height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]','trapped water',
[{input:'height = [0,1,0,2,1,0,1,3,2,1,2,1]',output:'6',explanation:''}],
['1 <= height.length <= 2*10^4'],
[{input:'[4,2,0,3,2,5]',output:'9',hidden:false}]),

mk('Spiral Matrix','Boundaries','O(m*n)','array','Medium','spiralOrder',[{name:'matrix',type:'number[][]',desc:'matrix'}],'number[]',
'Return elements in spiral order.','matrix = [[1,2,3],[4,5,6],[7,8,9]]','spiral order',
[{input:'matrix = [[1,2,3],[4,5,6],[7,8,9]]',output:'[1,2,3,6,9,8,7,4,5]',explanation:''}],
['1 <= m, n <= 10'],
[{input:'[[1],[2],[3]]',output:'[1,2,3]',hidden:false}]),

mk('Set Matrix Zeroes','In-Place Marking','O(m*n)','array','Medium','setZeroes',[{name:'matrix',type:'number[][]',desc:'matrix'}],'void',
'If an element is 0, set its entire row and column to 0s. In-place.','matrix = [[1,1,1],[1,0,1],[1,1,1]]','modified matrix',
[{input:'matrix = [[1,1,1],[1,0,1],[1,1,1]]',output:'[[1,0,1],[0,0,0],[1,0,1]]',explanation:''}],
['1 <= m, n <= 200'],
[{input:'[[0,1,2,0]]',output:'[[0,0,0,0]]',hidden:false}]),

mk('Diagonal Traverse','Simulation','O(m*n)','array','Medium','findDiagonalOrder',[{name:'mat',type:'number[][]',desc:'matrix'}],'number[]',
'Diagonal traversal alternating direction.','mat = [[1,2,3],[4,5,6],[7,8,9]]','diagonal order',
[{input:'mat = [[1,2,3],[4,5,6],[7,8,9]]',output:'[1,2,4,7,5,3,6,8,9]',explanation:''}],
['1 <= m, n <= 10^4'],
[{input:'[[1,2],[3,4]]',output:'[1,2,3,4]',hidden:false}]),

mk('Search a 2D Matrix','Binary Search','O(log mn)','array','Medium','searchMatrix',[{name:'matrix',type:'number[][]',desc:'sorted rows'},{name:'target',type:'number',desc:'target'}],'boolean',
'Each row sorted, first of each row > last of previous.','matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3','true',
[{input:'matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3',output:'true',explanation:''}],
['1 <= m, n <= 100'],
[{input:'[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13',output:'false',hidden:false}]),

mk('Search a 2D Matrix II','Search Space Reduction','O(m+n)','array','Medium','searchMatrixII',[{name:'matrix',type:'number[][]',desc:'row/col sorted'},{name:'target',type:'number',desc:'target'}],'boolean',
'Each row and column sorted. Search target.','matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5','true',
[{input:'matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20',output:'false',explanation:''}],
['1 <= m, n <= 300'],
[{input:'[[-5]], -5',output:'true',hidden:false}]),

mk('Game of Life','In-Place','O(m*n)','array','Medium','gameOfLife',[{name:'board',type:'number[][]',desc:'0/1 board'}],'void',
'Conway\'s Game of Life next state, in-place using encoding.','board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]','next state',
[{input:'board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]',output:'[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]',explanation:''}],
['1 <= m, n <= 25','cells are 0 or 1'],
[{input:'[[1,1],[1,0]]',output:'[[1,1],[1,1]]',hidden:false}]),

mk('Number of Islands','BFS/DFS','O(m*n)','array','Medium','numIslands',[{name:'grid',type:'string[][]',desc:'1=land, 0=water'}],'number',
'Count number of islands (connected 1s in 4 directions).','grid = [["1","1","0"],["1","1","0"],["0","0","1"]]','count',
[{input:'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]',output:'1',explanation:''}],
['1 <= m, n <= 300','grid[i][j] is 0 or 1'],
[{input:'[["1","0"],["0","1"]]',output:'2',hidden:false}]),

mk('Majority Element','Boyer-Moore','O(n)','array','Easy','majorityElement',[{name:'nums',type:'number[]',desc:'majority exists'}],'number',
'Element appearing more than n/2 times (always exists).','nums = [3, 2, 3]','majority',
[{input:'nums = [2,2,1,1,1,2,2]',output:'2',explanation:''}],
['1 <= nums.length <= 5*10^4','majority exists'],
[{input:'[3,2,3]',output:'3',hidden:false}]),

mk('Majority Element II','Boyer-Moore variant','O(n)','array','Medium','majorityElementII',[{name:'nums',type:'number[]',desc:'ints'}],'number[]',
'Elements appearing more than n/3 times.','nums = [3, 2, 3]','majorities',
[{input:'nums = [1,1,1,3,3,2,2,2]',output:'[1,2]',explanation:''}],
['1 <= nums.length <= 5*10^4'],
[{input:'[1,2,3,4]',output:'[]',hidden:false}]),

mk('Find Pivot Index','Prefix Sum','O(n)','array','Easy','pivotIndex',[{name:'nums',type:'number[]',desc:'ints'}],'number',
'Index where sum of left equals sum of right. Return leftmost.','nums = [1, 7, 3, 6, 5, 6]','pivot',
[{input:'nums = [1,7,3,6,5,6]',output:'3',explanation:''}],
['1 <= nums.length <= 10^4'],
[{input:'[1,2,3]',output:'-1',hidden:false}]),

mk('Product of Array Except Self','Prefix + Suffix','O(n)','array','Medium','productExceptSelf',[{name:'nums',type:'number[]',desc:'ints'}],'number[]',
'Return array where ans[i] = product of all except nums[i]. No division.','nums = [1, 2, 3, 4]','product except self',
[{input:'nums = [1,2,3,4]',output:'[24,12,8,6]',explanation:''}],
['2 <= nums.length <= 10^5','-30 <= nums[i] <= 30'],
[{input:'[-1,1,0,-3,3]',output:'[0,0,9,0,0]',hidden:false}]),

mk('Next Permutation','Two Pointers','O(n)','array','Medium','nextPermutation',[{name:'nums',type:'number[]',desc:'ints'}],'void',
'Modify nums in-place to next lexicographic permutation.','nums = [1, 2, 3]','next perm',
[{input:'nums = [1,2,3]',output:'[1,3,2]',explanation:''}],
['1 <= nums.length <= 100','0 <= nums[i] <= 100'],
[{input:'[3,2,1]',output:'[1,2,3]',hidden:false}]),

mk('Maximum Difference','Scan','O(n)','array','Easy','maximumDifference',[{name:'arr',type:'number[]',desc:'ints'}],'number',
'Max value of arr[j] - arr[i] where j > i.','arr = [2, 3, 10, 6, 4, 8, 1]','max difference',
[{input:'arr = [2,3,10,6,4,8,1]',output:'8',explanation:'10-2=8'}],
['1 <= arr.length <= 10^5'],
[{input:'[7,1,5,3,6,4]',output:'5',hidden:false}]),

mk('Maximum Subarray Min-Product','Monotonic Stack','O(n)','array','Hard','maxMinProduct',[{name:'nums',type:'number[]',desc:'positive ints'}],'number',
'Max of (sum of subarray) * (min of subarray) over all subarrays.','nums = [1,2,3,2]','max min-product',
[{input:'nums = [1,2,3,2]',output:'14',explanation:'subarray [2,3,2], sum=7, min=2, product=14'}],
['1 <= nums.length <= 10^5','1 <= nums[i] <= 10^7'],
[{input:'[2,3,3,1,2]',output:'18',hidden:false}]),

mk('Sort Array by Squaring and Sorting','Sort','O(n log n)','array','Easy','sortedSquares2',[{name:'nums',type:'number[]',desc:'sorted'}],'number[]',
'Sort array by squaring, then sort.','nums = [-4, -1, 0, 3, 10]','sorted squares (sort method)',
[{input:'nums = [-4,-1,0,3,10]',output:'[0,1,9,16,100]',explanation:''}],
['1 <= nums.length <= 10^4'],
[{input:'[-7,-3,2,3,11]',output:'[4,9,9,49,121]',hidden:false}]),

mk('Maximum XOR of Two Numbers','Trie','O(n)','array','Medium','findMaximumXOR',[{name:'nums',type:'number[]',desc:'non-negative ints'}],'number',
'Find max XOR of any two numbers in the array.','nums = [3, 10, 5, 25, 2, 8]','max xor',
[{input:'nums = [3,10,5,25,2,8]',output:'28',explanation:'5 XOR 25 = 28'}],
['1 <= nums.length <= 2*10^5','0 <= nums[i] <= 2^31 - 1'],
[{input:'[0]',output:'0',hidden:false}]),

mk('Triplet Sum Close to Target','Two Pointers','O(n^2)','array','Medium','threeSumClosest2',[{name:'nums',type:'number[]',desc:'ints'},{name:'target',type:'number',desc:'target'}],'number',
'Sum of three integers closest to target.','nums = [-1, 2, 1, -4], target = 1','closest sum',
[{input:'nums = [1,1,1,0], target = -100',output:'2',explanation:''}],
['3 <= nums.length <= 500'],
[{input:'[1,1,1,0], -100',output:'2',hidden:false}]),

mk('Squares of Sorted Array (alt)','Two Pointers','O(n)','array','Easy','sortedSquares3',[{name:'nums',type:'number[]',desc:'sorted'}],'number[]',
'Return squares sorted without using sort.','nums = [-4, -1, 0, 3, 10]','sorted squares',
[{input:'nums = [-7,-3,2,3,11]',output:'[4,9,9,49,121]',explanation:''}],
['1 <= nums.length <= 10^4'],
[{input:'[-4,-1,0,3,10]',output:'[0,1,9,16,100]',hidden:false}]),

mk('Find All Duplicates In Array','HashMap','O(n)','array','Medium','findDuplicates',[{name:'nums',type:'number[]',desc:'1..n'}],'number[]',
'Find all elements that appear twice using O(1) extra space.','nums = [4, 3, 2, 7, 8, 2, 3, 1]','duplicates',
[{input:'nums = [4,3,2,7,8,2,3,1]',output:'[2,3]',explanation:''}],
['1 <= n <= 10^5','1 <= nums[i] <= n'],
[{input:'[1,1,2]',output:'[1]',hidden:false}]),

mk('Maximum Average Subtree','DFS','O(n)','array','Easy','maximumAverageSubtree',[{name:'root',type:'TreeNode | null',desc:'root'}],'number',
'Return max average value of any subtree (as a list/array representation).','root = [5,6,1]','max average',
[{input:'root = [5,6,1]',output:'6.0',explanation:'[6] avg = 6.0'}],
['1 <= tree nodes <= 10^4'],
[{input:'[1], 1',output:'1.0',hidden:false}]),

mk('Maximum Profit With K Transactions','DP','O(nk)','array','Hard','maxProfitK',[{name:'k',type:'number',desc:'transactions'},{name:'prices',type:'number[]',desc:'prices'}],'number',
'Max profit with at most k transactions.','k = 2, prices = [3,2,6,5,0,3]','max profit',
[{input:'k = 2, prices = [3,2,6,5,0,3]',output:'7',explanation:''}],
['0 <= k <= 100','1 <= prices.length <= 1000'],
[{input:'2, [3,2,6,5,0,3]',output:'7',hidden:false}]),
];

// (Will add more topic specs in subsequent file edits.)
// Note: Need 100 per topic for 59 topics = 5900 total.
// Will add all topics then run the generator.

// ============================================================
// Compact helper for less verbose spec creation
// ============================================================
function Q(
  title: string,
  pattern: string,
  fnName: string,
  params: Param[],
  returnType: string,
  ps: string,
  ex: ExIn[],
  tc: TC[]
): QSpec {
  return mk(title, pattern, 'O(?)', 'array', 'Medium', fnName, params, returnType,
    ps, params[0] ? `First param: ${params[0].type}` : '', 'See function signature', ex,
    ['1 <= n <= 10^5', '-10^9 <= values <= 10^9'], tc);
}

// ============================================================
// STRINGS (100)
// ============================================================
const STRING_SPECS: QSpec[] = [
mk('Reverse String','Two Pointers','O(n)','array','Easy','reverseString',[{name:'s',type:'string[]',desc:'char array'}],'void',
'Reverse string in-place.','s = ["h","e","l","l","o"]','modified array',
[{input:'s = ["h","e","l","l","o"]',output:'["o","l","l","e","h"]',explanation:''}],
['1 <= s.length <= 10^5'],
[{input:'["h","e","l","l","o"]',output:'["o","l","l","e","h"]',hidden:false},{input:'["a"]',output:'["a"]',hidden:true}]),

mk('Valid Anagram','HashMap','O(n)','hashmap','Easy','isAnagram',[{name:'s',type:'string',desc:'first'},{name:'t',type:'string',desc:'second'}],'boolean',
'Check if t is an anagram of s.','s = "anagram", t = "nagaram"','true or false',
[{input:'s = "anagram", t = "nagaram"',output:'true',explanation:''}],
['1 <= s.length, t.length <= 5*10^4','contains lowercase letters'],
[{input:'"anagram","nagaram"',output:'true',hidden:false},{input:'"rat","car"',output:'false',hidden:true}]),

mk('Valid Palindrome','Two Pointers','O(n)','array','Easy','isPalindrome',[{name:'s',type:'string',desc:'string'}],'boolean',
'Check if string is palindrome ignoring non-alphanumeric and case.','s = "A man, a plan, a canal: Panama"','true',
[{input:'s = "A man, a plan, a canal: Panama"',output:'true',explanation:''}],
['1 <= s.length <= 2*10^5'],
[{input:'"A man, a plan, a canal: Panama"',output:'true',hidden:false},{input:'"race a car"',output:'false',hidden:true}]),

mk('Longest Substring Without Repeating','Sliding Window','O(n)','slidingwindow','Medium','lengthOfLongestSubstring',[{name:'s',type:'string',desc:'string'}],'number',
'Length of longest substring without repeating characters.','s = "abcabcbb"','max length',
[{input:'s = "abcabcbb"',output:'3',explanation:'"abc"'}],
['0 <= s.length <= 5*10^4'],
[{input:'"abcabcbb"',output:'3',hidden:false},{input:'"bbbbb"',output:'1',hidden:true}]),

mk('Longest Repeating Character Replacement','Sliding Window','O(n)','slidingwindow','Medium','characterReplacement',[{name:'s',type:'string',desc:'string'},{name:'k',type:'number',desc:'max changes'}],'number',
'Longest substring with same letter after at most k replacements.','s = "ABAB", k = 2','max length',
[{input:'s = "ABAB", k = 2',output:'4',explanation:''}],
['1 <= s.length <= 10^5','0 <= k <= s.length'],
[{input:'"ABAB", 2',output:'4',hidden:false},{input:'"AABABBA", 1',output:'4',hidden:true}]),

mk('String to Integer (atoi)','Parsing','O(n)','array','Medium','myAtoi',[{name:'s',type:'string',desc:'string'}],'number',
'Convert string to 32-bit signed integer.','s = "   -42"','integer',
[{input:'s = "   -42"',output:'-42',explanation:''}],
['0 <= s.length <= 200'],
[{input:'"   -42"',output:'-42',hidden:false},{input:'"4193 with words"',output:'4193',hidden:true}]),

mk('Longest Common Prefix','Trie/Compare','O(n*m)','array','Easy','longestCommonPrefix',[{name:'strs',type:'string[]',desc:'strings'}],'string',
'Longest common prefix string amongst an array of strings.','strs = ["flower","flow","flight"]','prefix',
[{input:'strs = ["flower","flow","flight"]',output:'"fl"',explanation:''}],
['1 <= strs.length <= 200','0 <= strs[i].length <= 200'],
[{input:'["flower","flow","flight"]',output:'"fl"',hidden:false},{input:'["dog","racecar","car"]',output:'""',hidden:true}]),

mk('Valid Parentheses','Stack','O(n)','stack','Easy','isValid',[{name:'s',type:'string',desc:'brackets'}],'boolean',
'Check if brackets string is valid.','s = "()[]{}"','true',
[{input:'s = "()[]{}"',output:'true',explanation:''}],
['1 <= s.length <= 10^4'],
[{input:'"()[]{}"',output:'true',hidden:false},{input:'"(]"',output:'false',hidden:true}]),

mk('Generate Parentheses','Backtracking','O(4^n/n^1.5)','stack','Medium','generateParenthesis',[{name:'n',type:'number',desc:'pairs'}],'string[]',
'Generate all combinations of well-formed parentheses.','n = 3','all combinations',
[{input:'n = 3',output:'["((()))","(()())","(())()","()(())","()()()"]',explanation:''}],
['1 <= n <= 8'],
[{input:'3',output:'["((()))","(()())","(())()","()(())","()()()"]',hidden:false}]),

mk('Group Anagrams','HashMap','O(n*k log k)','hashmap','Medium','groupAnagrams',[{name:'strs',type:'string[]',desc:'strings'}],'string[]',
'Group anagrams together.','strs = ["eat","tea","tan","ate","nat","bat"]','groups',
[{input:'strs = ["eat","tea","tan","ate","nat","bat"]',output:'[["bat"],["nat","tan"],["ate","eat","tea"]]',explanation:''}],
['1 <= strs.length <= 10^4','0 <= strs[i].length <= 100'],
[{input:'[""]',output:'[[""]]',hidden:false}]),

mk('Count and Say','String','O(n^2)','array','Medium','countAndSay',[{name:'n',type:'number',desc:'n'}],'string',
'Generate the nth term of count-and-say sequence.','n = 4','nth term',
[{input:'n = 4',output:'"1211"',explanation:''}],
['1 <= n <= 30'],
[{input:'1',output:'"1"',hidden:false},{input:'4',output:'"1211"',hidden:true}]),

mk('Longest Palindromic Substring','DP','O(n^2)','array','Medium','longestPalindrome',[{name:'s',type:'string',desc:'string'}],'string',
'Longest palindromic substring.','s = "babad"','longest palindrome',
[{input:'s = "babad"',output:'"bab"',explanation:'or "aba"'}],
['1 <= s.length <= 1000'],
[{input:'"babad"',output:'"bab"',hidden:false}]),

mk('String Compression','Two Pointers','O(n)','array','Medium','compress',[{name:'chars',type:'string[]',desc:'chars'}],'number',
'Compress string in-place: ["a","a","b","b","c","c","c"] -> ["a","2","b","2","c","3"].','chars = ["a","a","b","b","c","c","c"]','new length',
[{input:'chars = ["a","a","b","b","c","c","c"]',output:'6',explanation:''}],
['1 <= chars.length <= 2000'],
[{input:'["a","a","b","b","c","c","c"]',output:'6',hidden:false}]),

mk('Multiply Strings','Math','O(n*m)','array','Medium','multiply',[{name:'num1',type:'string',desc:'a'},{name:'num2',type:'string',desc:'b'}],'string',
'Multiply two non-negative integers as strings.','num1 = "123", num2 = "456"','product',
[{input:'num1 = "123", num2 = "456"',output:'"56088"',explanation:''}],
['1 <= num1.length, num2.length <= 200'],
[{input:'"123","456"',output:'"56088"',hidden:false}]),

mk('Compare Version Numbers','Two Pointers','O(n+m)','array','Medium','compareVersion',[{name:'v1',type:'string',desc:'v1'},{name:'v2',type:'string',desc:'v2'}],'number',
'Compare two version numbers. Return -1, 0, or 1.','v1 = "1.01", v2 = "1.001"','-1/0/1',
[{input:'v1 = "1.01", v2 = "1.001"',output:'0',explanation:''}],
['1 <= v1.length, v2.length <= 500'],
[{input:'"1.01","1.001"',output:'0',hidden:false}]),

mk('Integer to Roman','Math','O(1)','array','Medium','intToRoman',[{name:'num',type:'number',desc:'integer'}],'string',
'Convert integer (1-3999) to Roman numeral.','num = 58','roman',
[{input:'num = 58',output:'"LVIII"',explanation:''}],
['1 <= num <= 3999'],
[{input:'58',output:'"LVIII"',hidden:false}]),

mk('Roman to Integer','HashMap','O(n)','array','Easy','romanToInt',[{name:'s',type:'string',desc:'roman'}],'number',
'Convert Roman numeral to integer.','s = "LVIII"','integer',
[{input:'s = "LVIII"',output:'58',explanation:''}],
['1 <= s.length <= 15'],
[{input:'"LVIII"',output:'58',hidden:false}]),

mk('Zigzag Conversion','Simulation','O(n)','array','Medium','convert',[{name:'s',type:'string',desc:'string'},{name:'numRows',type:'number',desc:'rows'}],'string',
'Convert string to zigzag pattern with numRows rows.','s = "PAYPALISHIRING", numRows = 3','zigzag',
[{input:'s = "PAYPALISHIRING", numRows = 3',output:'"PAHNAPLSIIGYIR"',explanation:''}],
['1 <= s.length <= 1000','1 <= numRows <= 1000'],
[{input:'"PAYPALISHIRING", 3',output:'"PAHNAPLSIIGYIR"',hidden:false}]),

mk('Simplify Path','Stack','O(n)','stack','Medium','simplifyPath',[{name:'path',type:'string',desc:'path'}],'string',
'Simplify Unix-style absolute path.','path = "/home//foo/"','simplified',
[{input:'path = "/home//foo/"',output:'"/home/foo"',explanation:''}],
['1 <= path.length <= 3000'],
[{input:'"/home//foo/"',output:'"/home/foo"',hidden:false}]),

mk('Minimum Remove to Make Valid Parentheses','Stack','O(n)','stack','Medium','minRemoveToMakeValid',[{name:'s',type:'string',desc:'string'}],'string',
'Remove minimum number of parentheses to make it valid.','s = "a)b(c)d"','valid',
[{input:'s = "lee(t(c)o)de)"',output:'"lee(t(c)o)de"',explanation:''}],
['1 <= s.length <= 10^5'],
[{input:'"a)b(c)d"',output:'"ab(c)d"',hidden:false}]),

mk('Longest Common Subsequence','DP','O(n*m)','dp','Medium','longestCommonSubsequence',[{name:'a',type:'string',desc:'a'},{name:'b',type:'string',desc:'b'}],'number',
'Length of longest common subsequence.','a = "abcde", b = "ace"','length',
[{input:'text1 = "abcde", text2 = "ace"',output:'3',explanation:''}],
['1 <= text1.length, text2.length <= 1000'],
[{input:'"abcde","ace"',output:'3',hidden:false}]),

mk('Edit Distance','DP','O(n*m)','dp','Hard','minDistance',[{name:'a',type:'string',desc:'a'},{name:'b',type:'string',desc:'b'}],'number',
'Minimum operations to convert a to b.','a = "horse", b = "ros"','operations',
[{input:'word1 = "horse", word2 = "ros"',output:'3',explanation:''}],
['0 <= word1.length, word2.length <= 500'],
[{input:'"horse","ros"',output:'3',hidden:false}]),

mk('Longest Palindromic Subsequence','DP','O(n^2)','dp','Medium','longestPalindromeSubseq',[{name:'s',type:'string',desc:'string'}],'number',
'Length of longest palindromic subsequence.','s = "bbbab"','length',
[{input:'s = "bbbab"',output:'4',explanation:'"bbbb"'}],
['1 <= s.length <= 1000'],
[{input:'"bbbab"',output:'4',hidden:false}]),

mk('Word Break','DP','O(n^2)','dp','Medium','wordBreak',[{name:'s',type:'string',desc:'string'},{name:'dict',type:'string[]',desc:'word dict'}],'boolean',
'Check if s can be segmented into words in dict.','s = "leetcode", dict = ["leet","code"]','true',
[{input:'s = "leetcode", wordDict = ["leet","code"]',output:'true',explanation:''}],
['1 <= s.length <= 300','1 <= wordDict.length <= 1000'],
[{input:'"leetcode",["leet","code"]',output:'true',hidden:false}]),

mk('Word Break II','DP + Backtracking','O(2^n)','dp','Hard','wordBreakII',[{name:'s',type:'string',desc:'string'},{name:'dict',type:'string[]',desc:'word dict'}],'string[]',
'Return all sentences from word break.','s = "catsanddog", dict = ["cat","cats","and","sand","dog"]','sentences',
[{input:'s = "catsanddog", wordDict = ["cat","cats","and","sand","dog"]',output:'["cats and dog","cat sand dog"]',explanation:''}],
['1 <= s.length <= 20'],
[{input:'"catsanddog",["cat","cats","and","sand","dog"]',output:'["cats and dog","cat sand dog"]',hidden:false}]),

mk('Decode Ways','DP','O(n)','dp','Medium','numDecodings',[{name:'s',type:'string',desc:'encoded'}],'number',
'Count ways to decode a digit string (A=1, ..., Z=26).','s = "12"','ways',
[{input:'s = "12"',output:'2',explanation:'AB or L'}],
['1 <= s.length <= 100'],
[{input:'"12"',output:'2',hidden:false}]),

mk('Distinct Subsequences','DP','O(n*m)','dp','Hard','numDistinct',[{name:'s',type:'string',desc:'s'},{name:'t',type:'string',desc:'t'}],'number',
'Count distinct subsequences of s equal to t.','s = "rabbbit", t = "rabbit"','count',
[{input:'s = "rabbbit", t = "rabbit"',output:'3',explanation:''}],
['1 <= s.length, t.length <= 1000'],
[{input:'"rabbbit","rabbit"',output:'3',hidden:false}]),

mk('Reverse Words in String','Two Pointers','O(n)','array','Medium','reverseWords',[{name:'s',type:'string',desc:'string'}],'string',
'Reverse words in a string (handles multiple spaces).','s = "  hello world  "','reversed',
[{input:'s = "  hello world  "',output:'"world hello"',explanation:''}],
['1 <= s.length <= 10^4'],
[{input:'"  hello world  "',output:'"world hello"',hidden:false}]),

mk('Longest Substring With At Most K Distinct','Sliding Window','O(n)','slidingwindow','Medium','lengthOfLongestKDistinct',[{name:'s',type:'string',desc:'string'},{name:'k',type:'number',desc:'distinct'}],'number',
'Longest substring with at most k distinct characters.','s = "eceba", k = 2','max length',
[{input:'s = "eceba", k = 2',output:'3',explanation:''}],
['1 <= s.length <= 5*10^4','1 <= k <= 26'],
[{input:'"eceba", 2',output:'3',hidden:false}]),

mk('Substring With Concatenation All Words','HashMap','O(n*m)','array','Hard','findSubstring',[{name:'s',type:'string',desc:'string'},{name:'words',type:'string[]',desc:'words'}],'number[]',
'Starting indices of substrings that are concatenation of all words.','s = "barfoothefoobarman", words = ["foo","bar"]','indices',
[{input:'s = "barfoothefoobarman", words = ["foo","bar"]',output:'[0,9]',explanation:''}],
['1 <= s.length <= 10^4','1 <= words.length <= 5000'],
[{input:'"barfoothefoobarman",["foo","bar"]',output:'[0,9]',hidden:false}]),

mk('Valid Palindrome II','Two Pointers','O(n)','array','Easy','validPalindromeII',[{name:'s',type:'string',desc:'string'}],'boolean',
'Check if s can be palindrome after deleting at most one char.','s = "abca"','true or false',
[{input:'s = "abca"',output:'true',explanation:'delete b or c'}],
['1 <= s.length <= 10^5'],
[{input:'"abca"',output:'true',hidden:false}]),

mk('Longest Valid Parentheses','Stack','O(n)','stack','Hard','longestValidParentheses',[{name:'s',type:'string',desc:'brackets'}],'number',
'Length of longest valid parentheses substring.','s = "(()"','length',
[{input:'s = "(()"',output:'2',explanation:'substr ()'}],
['0 <= s.length <= 3*10^4'],
[{input:'"(()"',output:'2',hidden:false}]),

mk('Minimum Window Substring','Sliding Window','O(n)','slidingwindow','Hard','minWindow',[{name:'s',type:'string',desc:'s'},{name:'t',type:'string',desc:'t'}],'string',
'Minimum window substring of s containing all chars of t.','s = "ADOBECODEBANC", t = "ABC"','minimum window',
[{input:'s = "ADOBECODEBANC", t = "ABC"',output:'"BANC"',explanation:''}],
['1 <= s.length, t.length <= 10^5'],
[{input:'"ADOBECODEBANC","ABC"',output:'"BANC"',hidden:false}]),

mk('Permutation in String','Sliding Window','O(n)','slidingwindow','Medium','checkInclusion',[{name:'s1',type:'string',desc:'s1'},{name:'s2',type:'string',desc:'s2'}],'boolean',
'Check if s2 contains a permutation of s1.','s1 = "ab", s2 = "eidbaooo"','true',
[{input:'s1 = "ab", s2 = "eidbaooo"',output:'true',explanation:''}],
['1 <= s1.length, s2.length <= 10^4'],
[{input:'"ab","eidbaooo"',output:'true',hidden:false}]),

mk('Find All Anagrams in String','Sliding Window','O(n)','slidingwindow','Medium','findAnagrams',[{name:'s',type:'string',desc:'s'},{name:'p',type:'string',desc:'p'}],'number[]',
'Starting indices of p anagrams in s.','s = "cbaebabacd", p = "abc"','indices',
[{input:'s = "cbaebabacd", p = "abc"',output:'[0,6]',explanation:''}],
['1 <= s.length, p.length <= 3*10^4'],
[{input:'"cbaebabacd","abc"',output:'[0,6]',hidden:false}]),

mk('String to Integer Manual','Parsing','O(n)','array','Medium','strToInt',[{name:'s',type:'string',desc:'string'}],'number',
'Implement string to integer conversion manually.','s = "   +42  "','integer',
[{input:'s = "   +42  "',output:'42',explanation:''}],
['1 <= s.length <= 100'],
[{input:'"42"',output:'42',hidden:false}]),

mk('First Unique Character in String','HashMap','O(n)','hashmap','Easy','firstUniqChar',[{name:'s',type:'string',desc:'string'}],'number',
'Index of first non-repeating character.','s = "leetcode"','index',
[{input:'s = "leetcode"',output:'0',explanation:'l'}],
['1 <= s.length <= 10^5'],
[{input:'"leetcode"',output:'0',hidden:false}]),

mk('Ransom Note','HashMap','O(n)','hashmap','Easy','canConstruct',[{name:'ransom',type:'string',desc:'ransom'},{name:'mag',type:'string',desc:'magazine'}],'boolean',
'Check if ransom can be built from magazine.','ransom = "aa", mag = "aab"','true',
[{input:'ransomNote = "aa", magazine = "aab"',output:'true',explanation:''}],
['1 <= ransomNote.length, magazine.length <= 10^5'],
[{input:'"aa","aab"',output:'true',hidden:false}]),

mk('Jewels and Stones','Hash Set','O(n)','hashmap','Easy','numJewelsInStones',[{name:'j',type:'string',desc:'jewels'},{name:'s',type:'string',desc:'stones'}],'number',
'Count how many stones are jewels.','j = "aA", s = "aAAbbbb"','count',
[{input:'jewels = "aA", stones = "aAAbbbb"',output:'3',explanation:''}],
['1 <= jewels.length, stones.length <= 50'],
[{input:'"aA","aAAbbbb"',output:'3',hidden:false}]),

mk('Is Subsequence','Two Pointers','O(n)','array','Easy','isSubsequence',[{name:'s',type:'string',desc:'s'},{name:'t',type:'string',desc:'t'}],'boolean',
'Check if s is a subsequence of t.','s = "abc", t = "ahbgdc"','true',
[{input:'s = "abc", t = "ahbgdc"',output:'true',explanation:''}],
['0 <= s.length <= 100','0 <= t.length <= 10^4'],
[{input:'"abc","ahbgdc"',output:'true',hidden:false}]),

mk('Reverse Vowels of String','Two Pointers','O(n)','array','Easy','reverseVowels',[{name:'s',type:'string',desc:'string'}],'string',
'Reverse only the vowels in a string.','s = "leetcode"','reversed',
[{input:'s = "leetcode"',output:'"leotcede"',explanation:''}],
['1 <= s.length <= 3*10^5'],
[{input:'"leetcode"',output:'"leotcede"',hidden:false}]),

mk('Valid Number','Parsing','O(n)','array','Hard','isNumber',[{name:'s',type:'string',desc:'string'}],'boolean',
'Check if string is a valid number.','s = "0"','true or false',
[{input:'s = "0"',output:'true',explanation:''}],
['0 <= s.length <= 200'],
[{input:'"0"',output:'true',hidden:false}]),

mk('Integer Break','DP','O(n)','dp','Medium','integerBreak',[{name:'n',type:'number',desc:'integer'}],'number',
'Break n into sum of k >= 2 positive integers to maximize product.','n = 10','max product',
[{input:'n = 10',output:'36',explanation:'3+3+4 = 10, 3*3*4 = 36'}],
['2 <= n <= 58'],
[{input:'10',output:'36',hidden:false}]),

mk('Rotate String','String','O(n)','array','Easy','rotateString',[{name:'a',type:'string',desc:'a'},{name:'b',type:'string',desc:'b'}],'boolean',
'Check if b is a rotation of a.','a = "abcde", b = "cdeab"','true',
[{input:'s = "abcde", goal = "cdeab"',output:'true',explanation:''}],
['1 <= s.length, goal.length <= 100'],
[{input:'"abcde","cdeab"',output:'true',hidden:false}]),

mk('Repeated String Match','String Search','O(n*m)','array','Medium','repeatedStringMatch',[{name:'a',type:'string',desc:'a'},{name:'b',type:'string',desc:'b'}],'number',
'Min times to repeat a so b is a substring.','a = "abcd", b = "cdabcdab"','min repeats',
[{input:'a = "abcd", b = "cdabcdab"',output:'3',explanation:''}],
['1 <= a.length, b.length <= 10^4'],
[{input:'"abcd","cdabcdab"',output:'3',hidden:false}]),

mk('Custom Sort String','Counting Sort','O(n)','array','Medium','customSortString',[{name:'order',type:'string',desc:'order'},{name:'s',type:'string',desc:'s'}],'string',
'Sort s such that chars in order come first, then the rest.','order = "cba", s = "abcd"','sorted',
[{input:'order = "cba", s = "abcd"',output:'"cbad"',explanation:''}],
['1 <= order.length, s.length <= 200'],
[{input:'"cba","abcd"',output:'"cbad"',hidden:false}]),

mk('Reorganize String','Counting Sort','O(n)','array','Medium','reorganizeString',[{name:'s',type:'string',desc:'string'}],'string',
'Reorganize so no two adjacent are the same.','s = "aab"','reorganized',
[{input:'s = "aab"',output:'"aba"',explanation:''}],
['1 <= s.length <= 500'],
[{input:'"aab"',output:'"aba"',hidden:false}]),

mk('Minimum Number of Steps to Make Two Strings Anagram','HashMap','O(n)','hashmap','Medium','minSteps',[{name:'s',type:'string',desc:'s'},{name:'t',type:'string',desc:'t'}],'number',
'Min char changes in t to make it anagram of s.','s = "bab", t = "aba"','steps',
[{input:'s = "bab", t = "aba"',output:'1',explanation:''}],
['1 <= s.length <= 5*10^4'],
[{input:'"bab","aba"',output:'1',hidden:false}]),

mk('Length of Last Word','String','O(n)','array','Easy','lengthOfLastWord',[{name:'s',type:'string',desc:'sentence'}],'number',
'Length of last word in a string.','s = "Hello World"','length',
[{input:'s = "Hello World"',output:'5',explanation:'World'}],
['1 <= s.length <= 10^4'],
[{input:'"Hello World"',output:'5',hidden:false}]),

mk('Detect Capital','String','O(n)','array','Easy','detectCapitalUse',[{name:'word',type:'string',desc:'word'}],'boolean',
'Check if capital usage is correct.','word = "USA"','true or false',
[{input:'word = "USA"',output:'true',explanation:''}],
['1 <= word.length <= 100'],
[{input:'"USA"',output:'true',hidden:false}]),

mk('Excel Sheet Column Number','Math','O(n)','array','Easy','titleToNumber',[{name:'col',type:'string',desc:'column'}],'number',
'Convert Excel column title to number.','col = "A"','number',
[{input:'columnTitle = "A"',output:'1',explanation:''}],
['1 <= columnTitle.length <= 7'],
[{input:'"AB"',output:'28',hidden:false}]),

mk('Excel Sheet Column Title','Math','O(log n)','array','Easy','convertToTitle',[{name:'n',type:'number',desc:'number'}],'string',
'Convert column number to title.','n = 1','title',
[{input:'columnNumber = 1',output:'"A"',explanation:''}],
['1 <= columnNumber <= 2^31 - 1'],
[{input:'28',output:'"AB"',hidden:false}]),

mk('Word Pattern','HashMap','O(n)','array','Easy','wordPattern',[{name:'p',type:'string',desc:'pattern'},{name:'s',type:'string',desc:'string'}],'boolean',
'Check if string follows pattern.','p = "abba", s = "dog cat cat dog"','true',
[{input:'pattern = "abba", s = "dog cat cat dog"',output:'true',explanation:''}],
['1 <= pattern.length <= 300','1 <= s.length <= 3000'],
[{input:'"abba","dog cat cat dog"',output:'true',hidden:false}]),

mk('Number of Segments in String','String','O(n)','array','Easy','countSegments',[{name:'s',type:'string',desc:'string'}],'number',
'Count segments in a string (split by spaces).','s = "Hello, my name is John"','count',
[{input:'s = "Hello, my name is John"',output:'5',explanation:''}],
['0 <= s.length <= 300'],
[{input:'"Hello, my name is John"',output:'5',hidden:false}]),

mk('Valid Word Abbreviation','String','O(n)','array','Easy','validWordAbbreviation',[{name:'word',type:'string',desc:'word'},{name:'abbr',type:'string',desc:'abbreviation'}],'boolean',
'Check if abbr is valid for word.','word = "substitution", abbr = "s10n"','true',
[{input:'word = "substitution", abbr = "s10n"',output:'true',explanation:''}],
['1 <= word.length <= 20','1 <= abbr.length <= 10'],
[{input:'"substitution","s10n"',output:'true',hidden:false}]),

mk('Minimum Length of String After Deleting Similar Ends','Two Pointers','O(n)','array','Medium','minimumLength',[{name:'s',type:'string',desc:'string'}],'number',
'Min length after removing similar characters from both ends.','s = "ca"','min length',
[{input:'s = "ca"',output:'2',explanation:'c and a are different, no removal'}],
['1 <= s.length <= 10^5'],
[{input:'"cabaabac"',output:'0',hidden:false}]),

mk('Remove All Adjacent Duplicates','Stack','O(n)','stack','Easy','removeDuplicates',[{name:'s',type:'string',desc:'string'}],'string',
'Remove all adjacent duplicate pairs.','s = "abbaca"','result',
[{input:'s = "abbaca"',output:'"ca"',explanation:'bb removed, then aa removed'}],
['1 <= s.length <= 2*10^5'],
[{input:'"abbaca"',output:'"ca"',hidden:false}]),

mk('Remove All Adjacent Duplicates II','Stack','O(n)','stack','Medium','removeDuplicatesK',[{name:'s',type:'string',desc:'string'},{name:'k',type:'number',desc:'k'}],'string',
'Remove groups of k consecutive duplicates.','s = "deeedbbcccbdaa", k = 3','result',
[{input:'s = "deeedbbcccbdaa", k = 3',output:'"aa"',explanation:''}],
['1 <= s.length <= 10^5','2 <= k <= 10^5'],
[{input:'"pbbcggttciiippooaais", 2',output:'"ps"',hidden:false}]),

mk('Check if Two Strings Are Equivalent','String','O(n)','array','Easy','arrayStringsAreEqual',[{name:'a',type:'string[]',desc:'a'},{name:'b',type:'string[]',desc:'b'}],'boolean',
'Check if concatenated arrays form equal strings.','a = ["ab","c"], b = ["a","bc"]','true',
[{input:'word1 = ["ab", "c"], word2 = ["a", "bc"]',output:'true',explanation:''}],
['1 <= word1.length, word2.length <= 10^3'],
[{input:'["ab","c"],["a","bc"]',output:'true',hidden:false}]),

mk('Reverse Prefix of Word','String','O(n)','array','Easy','reversePrefix',[{name:'word',type:'string',desc:'word'},{name:'ch',type:'string',desc:'char'}],'string',
'Reverse prefix up to and including first occurrence of ch.','word = "abcdefd", ch = "d"','reversed',
[{input:'word = "abcdefd", ch = "d"',output:'"dcbaefd"',explanation:''}],
['1 <= word.length <= 250','ch is a lowercase English letter'],
[{input:'"abcdefd","d"',output:'"dcbaefd"',hidden:false}]),

mk('Truncate Sentence','String','O(n)','array','Easy','truncateSentence',[{name:'s',type:'string',desc:'sentence'},{name:'k',type:'number',desc:'k'}],'string',
'Truncate sentence to first k words.','s = "Hello how are you", k = 3','truncated',
[{input:'s = "Hello how are you Contestant", k = 4',output:'"Hello how are you"',explanation:''}],
['1 <= s.length <= 500','1 <= k <= number of words'],
[{input:'"Hello how are you", 3',output:'"Hello how are"',hidden:false}]),

mk('Sort the People','HashMap','O(n log n)','array','Easy','sortPeople',[{name:'names',type:'string[]',desc:'names'},{name:'heights',type:'number[]',desc:'heights'}],'string[]',
'Sort names by corresponding heights in decreasing order.','names = ["Mary","John","Emma"], heights = [180,165,170]','sorted',
[{input:'names = ["Mary","John","Emma"], heights = [180,165,170]',output:'["Mary","Emma","John"]',explanation:''}],
['n == names.length == heights.length','1 <= n <= 10^3'],
[{input:'["Mary","John","Emma"],[180,165,170]',output:'["Mary","Emma","John"]',hidden:false}]),

mk('Capitalize the Title','String','O(n)','array','Easy','capitalizeTitle',[{name:'t',type:'string',desc:'title'}],'string',
'Capitalize title properly.','t = "i lOve leetcode"','capitalized',
[{input:'title = "i lOve leetcode"',output:'"i Love Leetcode"',explanation:''}],
['1 <= title.length <= 100'],
[{input:'"i lOve leetcode"',output:'"i Love Leetcode"',hidden:false}]),

mk('Sort Vowels in String','Two Pointers','O(n)','array','Medium','sortVowels',[{name:'s',type:'string',desc:'string'}],'string',
'Sort vowels in a string by their ASCII values.','s = "lEetcOde"','sorted',
[{input:'s = "lEetcOde"',output:'"lEOtcede"',explanation:''}],
['1 <= s.length <= 10^5'],
[{input:'"lEetcOde"',output:'"lEOtcede"',hidden:false}]),

mk('Check if One String Swap Makes Equal','HashMap','O(n)','hashmap','Easy','areAlmostEqual',[{name:'a',type:'string',desc:'a'},{name:'b',type:'string',desc:'b'}],'boolean',
'Check if one swap of two chars in s1 makes it s2.','a = "bank", b = "kanb"','true',
[{input:'s1 = "bank", s2 = "kanb"',output:'true',explanation:''}],
['1 <= s1.length, s2.length <= 100'],
[{input:'"bank","kanb"',output:'true',hidden:false}]),

mk('Number of Strings That Appear as Substrings','String','O(n*m)','array','Easy','numOfStrings',[{name:'patterns',type:'string[]',desc:'patterns'},{name:'word',type:'string',desc:'word'}],'number',
'Count how many patterns appear as substrings in word.','patterns = ["a","abc","bc","d"], word = "abc"','count',
[{input:'patterns = ["a","abc","bc","d"], word = "abc"',output:'3',explanation:''}],
['1 <= patterns.length <= 100','1 <= word.length <= 100'],
[{input:'["a","abc","bc","d"],"abc"',output:'3',hidden:false}]),

mk('Largest Odd Number in String','Greedy','O(n)','array','Easy','largestOddNumber',[{name:'num',type:'string',desc:'number string'}],'string',
'Largest odd number from leading digits of num.','num = "52"','largest odd',
[{input:'num = "52"',output:'"5"',explanation:''}],
['1 <= num.length <= 10^5','only digits, no leading zero'],
[{input:'"4206"',output:'""',hidden:false}]),

mk('Largest 3-Same-Digit Number in String','String','O(n)','array','Easy','largestGoodInteger',[{name:'num',type:'string',desc:'string'}],'string',
'Largest good integer (3 same consecutive digits).','num = "6777133339"','largest',
[{input:'num = "6777133339"',output:'"777"',explanation:''}],
['3 <= num.length <= 1000'],
[{input:'"2300019"',output:'"000"',hidden:false}]),

mk('Maximum Value of a String','String','O(n)','array','Easy','maximumValue',[{name:'strs',type:'string[]',desc:'strings'}],'number',
'Value of a string is its length if no digit, else the number.','strs = ["alic3","bob","3","4","00000"]','max value',
[{input:'strs = ["alic3","bob","3","4","00000"]',output:'5',explanation:'"alic3" or "00000"'}],
['1 <= strs.length <= 100','1 <= strs[i].length <= 9'],
[{input:'["alic3","bob","3","4","00000"]',output:'5',hidden:false}]),

mk('Sort Characters by Frequency','HashMap','O(n log n)','hashmap','Medium','frequencySort',[{name:'s',type:'string',desc:'string'}],'string',
'Sort chars in s by decreasing frequency.','s = "tree"','sorted',
[{input:'s = "tree"',output:'"eert"',explanation:''}],
['1 <= s.length <= 5*10^4'],
[{input:'"tree"',output:'"eert"',hidden:false}]),

mk('Check if Two String Arrays are Equivalent','String','O(n)','array','Easy','arrayStringsAreEqual2',[{name:'a',type:'string[]',desc:'a'},{name:'b',type:'string[]',desc:'b'}],'boolean',
'Check if concatenation of two string arrays are equal.','a = ["ab","c"], b = ["a","bc"]','true',
[{input:'word1 = ["ab", "c"], word2 = ["a", "bc"]',output:'true',explanation:''}],
['1 <= word1.length, word2.length <= 10^3'],
[{input:'["ab","c"],["a","bc"]',output:'true',hidden:false}]),

mk('Largest Number At Least Twice of Others','Greedy','O(n)','array','Easy','dominantIndex',[{name:'nums',type:'number[]',desc:'ints'}],'number',
'Largest is at least twice every other number. Return its index.','nums = [3, 6, 1, 0]','index or -1',
[{input:'nums = [3,6,1,0]',output:'1',explanation:'6 >= 2*3'}],
['1 <= nums.length <= 50','0 <= nums[i] <= 100'],
[{input:'[1,2,3,4]',output:'-1',hidden:false}]),

mk('Number of Good Pairs','HashMap','O(n)','hashmap','Easy','numIdenticalPairs',[{name:'nums',type:'number[]',desc:'ints'}],'number',
'Number of pairs (i,j) where i<j and nums[i]==nums[j].','nums = [1,2,3,1,1,3]','good pairs',
[{input:'nums = [1,2,3,1,1,3]',output:'4',explanation:''}],
['1 <= nums.length <= 100'],
[{input:'[1,1,1,1]',output:'6',hidden:false}]),

mk('Check if Sentence Is Pangram','Hash Set','O(n)','hashmap','Easy','checkIfPangram',[{name:'s',type:'string',desc:'sentence'}],'boolean',
'Check if sentence contains every letter.','s = "thequickbrownfoxjumpsoverthelazydog"','true',
[{input:'sentence = "thequickbrownfoxjumpsoverthelazydog"',output:'true',explanation:''}],
['1 <= sentence.length <= 1000'],
[{input:'"leetcode"',output:'false',hidden:false}]),

mk('Check if All A Appears Before All B','String','O(n)','array','Easy','checkString',[{name:'s',type:'string',desc:'string'}],'boolean',
'Check if all a appears before any b.','s = "aaabbb"','true',
[{input:'s = "aaabbb"',output:'true',explanation:''}],
['1 <= s.length <= 100'],
[{input:'"abab"',output:'false',hidden:false}]),

mk('Count the Number of Vowel Strings in Range','String','O(n)','array','Easy','vowelStrings',[{name:'words',type:'string[]',desc:'words'},{name:'l',type:'number',desc:'l'},{name:'r',type:'number',desc:'r'}],'number',
'Count words in range [l, r] that start and end with vowel.','words = ["are","amy","u"], l=0, r=2','count',
[{input:'words = ["are","amy","u"], left = 0, right = 2',output:'3',explanation:''}],
['1 <= words.length <= 1000','0 <= left <= right < words.length'],
[{input:'["hey","aeo","mu","ooo","artro"], 1, 4',output:'3',hidden:false}]),

mk('Maximum Number of Words in Sentence','String','O(n)','array','Easy','mostWordsFound',[{name:'sents',type:'string[]',desc:'sentences'}],'number',
'Max number of words in any sentence.','sents = ["alice and bob love leetcode"]','max words',
[{input:'sentences = ["alice and bob love leetcode","i think so too"]',output:'6',explanation:''}],
['1 <= sentences.length <= 100','1 <= sentences[i].length <= 100'],
[{input:'["please wait","continue to fight","continue to win"]',output:'3',hidden:false}]),

mk('Reverse Odd Levels of Binary Tree','BFS','O(n)','binarysearch','Medium','reverseOddLevels',[{name:'root',type:'TreeNode | null',desc:'root'}],'TreeNode | null',
'Reverse values at odd levels of binary tree.','root = [2,3,5,8,13,21,34]','modified',
[{input:'root = [2,3,5,8,13,21,34]',output:'[2,5,3,8,13,21,34]',explanation:''}],
['number of nodes >= 1','node values unique'],
[{input:'[7,13,11]',output:'[7,11,13]',hidden:false}]),

mk('String Matching in Array','KMP','O(n*m)','array','Easy','stringMatching',[{name:'words',type:'string[]',desc:'words'}],'string[]',
'Find all strings that are substrings of another string in array.','words = ["mass","as","hero","superhero"]','matching',
[{input:'words = ["mass","as","hero","superhero"]',output:'["as","hero"]',explanation:''}],
['1 <= words.length <= 100','1 <= words[i].length <= 30'],
[{input:'["leetcoder","leetcode","od","hamlet","am"]',output:'["leetcode","od"]',hidden:false}]),

mk('String Compression III','Counting','O(n)','array','Medium','compressedString',[{name:'word',type:'string',desc:'word'}],'string',
'New compression: use [count][ch] pairs, max count 9.','word = "abcde"','compressed',
[{input:'word = "abcde"',output:'"1a1b1c1d1e"',explanation:''}],
['1 <= word.length <= 2*10^5'],
[{input:'"aaaaaaaaaaaaaabb"',output:'"9a5a2b"',hidden:false}]),

mk('Longest Common Suffix','String','O(n*m)','array','Hard','longestCommonSuffix',[{name:'a',type:'string[]',desc:'a'},{name:'b',type:'string[]',desc:'b'}],'string',
'Longest common suffix for pairs.','a = ["abc","def"], b = ["xbc","yde"]','suffix',
[{input:'a = ["abc","def"], b = ["xbc","yde"]',output:'["bc","de"]',explanation:''}],
['1 <= a.length == b.length <= 10^3'],
[{input:'["a"],["b"]',output:'[""]',hidden:false}]),

mk('Sentence Similarity III','Two Pointers','O(n)','array','Medium','areSentencesSimilar',[{name:'a',type:'string',desc:'a'},{name:'b',type:'string',desc:'b'}],'boolean',
'Check if one sentence is a prefix or suffix of the other.','a = "My name is Haley", b = "My Haley"','true',
[{input:'sentence1 = "My name is Haley", sentence2 = "My Haley"',output:'true',explanation:''}],
['0 <= sentence1.length, sentence2.length <= 100'],
[{input:'"of","A great way"',output:'false',hidden:false}]),

mk('Largest Substring Between Two Equal Characters','String','O(n)','array','Easy','maxLengthBetweenEqualCharacters',[{name:'s',type:'string',desc:'string'}],'number',
'Length of longest substring between two equal characters.','s = "abca"','max length',
[{input:'s = "abca"',output:'2',explanation:'"bc" between a and a'}],
['1 <= s.length <= 300'],
[{input:'"aa"',output:'0',hidden:false}]),

mk('Count Common Words With One Occurrence','HashMap','O(n+m)','hashmap','Easy','countWords',[{name:'a',type:'string[]',desc:'a'},{name:'b',type:'string[]',desc:'b'}],'number',
'Count words that appear exactly once in each.','a = ["leetcode","is","amazing","as","is"], b = ["amazing","leetcode","is"]','count',
[{input:'words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]',output:'2',explanation:''}],
['1 <= words1.length, words2.length <= 1000'],
[{input:'["a","ab"],["a","a","ab"]',output:'1',hidden:false}]),

mk('Sort the String','Counting','O(n)','array','Medium','sortString',[{name:'s',type:'string',desc:'string'}],'string',
'Sort: 1) increasing by count, 2) remove used, 3) decreasing, 4) repeat.','s = "aaaabbbbcccc"','sorted',
[{input:'s = "aaaabbbbcccc"',output:'"abccbaabccba"',explanation:''}],
['1 <= s.length <= 200'],
[{input:'"rat"',output:'"art"',hidden:false}]),

mk('Valid Parenthesis String','Stack','O(n)','stack','Medium','checkValidString',[{name:'s',type:'string',desc:'string'}],'boolean',
'Check if string with * is a valid parens.','s = "(*)"','true',
[{input:'s = "(*)"',output:'true',explanation:''}],
['1 <= s.length <= 100'],
[{input:'"(*))"',output:'true',hidden:false}]),

mk('Check if Word Equals Summation of Two Words','String','O(n)','array','Easy','isSumEqual',[{name:'a',type:'string',desc:'a'},{name:'b',type:'string',desc:'b'},{name:'c',type:'string',desc:'c'}],'boolean',
'Check if a + b == c numerically (first letter = digit).','a = "acb", b = "cba", c = "cdb"','true',
[{input:'firstWord = "acb", secondWord = "cba", targetWord = "cdb"',output:'true',explanation:''}],
['2 <= firstWord.length, secondWord.length, targetWord.length <= 10'],
[{input:'"aaa","a","aab"',output:'false',hidden:false}]),

mk('Remove Palindromic Subsequences','String','O(n)','array','Easy','removePalindromeSub',[{name:'s',type:'string',desc:'string'}],'number',
'Min removals to make s empty (subsequence of same letter = palindrome).','s = "ababa"','min removals',
[{input:'s = "ababa"',output:'1',explanation:''}],
['1 <= s.length <= 1000'],
[{input:'"abb"',output:'2',hidden:false}]),

mk('Maximize the Confusion of an Exam','Sliding Window','O(n)','slidingwindow','Medium','maxConsecutiveAnswers',[{name:'k',type:'number',desc:'flips'},{name:'a',type:'string',desc:'answers'}],'number',
'Maximize the same answers after flipping at most k.','k = 1, a = "TTFF"','max',
[{input:'answerKey = "TTFF", k = 2',output:'4',explanation:''}],
['1 <= answerKey.length <= 5*10^4','1 <= k <= answerKey.length'],
[{input:'"TFFT", 1',output:'3',hidden:false}]),

mk('Maximum Repeating Substring','String','O(n*m)','array','Easy','maxRepeating',[{name:'a',type:'string',desc:'sequence'},{name:'b',type:'string',desc:'word'}],'number',
'Max k such that b repeated k times is in a.','a = "ababc", b = "ab"','k',
[{input:'sequence = "ababc", word = "ab"',output:'2',explanation:''}],
['1 <= sequence.length <= 100','1 <= word.length <= 100'],
[{input:'"ababc","ba"',output:'-1',hidden:false}]),

mk('String Without AAA or BBB','Greedy','O(n)','array','Medium','strWithout3a3b',[{name:'a',type:'number',desc:'a'},{name:'b',type:'number',desc:'b'}],'string',
'String with a As and b Bs, no three consecutive same.','a = 1, b = 2','string',
[{input:'a = 1, b = 2',output:'"abb"',explanation:''}],
['0 <= a, b <= 100','a + b > 0'],
[{input:'4,1',output:'"aabaa"',hidden:false}]),

mk('Longest Uncommon Subsequence I','String','O(n*m)','array','Easy','findLUSlength',[{name:'a',type:'string',desc:'a'},{name:'b',type:'string',desc:'b'}],'number',
'Length of longest uncommon subsequence.','a = "aba", b = "cdc"','length',
[{input:'a = "aba", b = "cdc"',output:'3',explanation:''}],
['0 <= a.length, b.length <= 100'],
[{input:'"aaa","bbb"',output:'3',hidden:false}]),

mk('Longest Uncommon Subsequence II','String','O(n^2 * m)','array','Medium','findLUSlengthII',[{name:'strs',type:'string[]',desc:'strings'}],'number',
'Length of longest uncommon subsequence.','strs = ["aba","cdc","eae"]','length',
[{input:'strs = ["aba","cdc","eae"]',output:'3',explanation:''}],
['1 <= strs.length <= 50','1 <= strs[i].length <= 10'],
[{input:'["aaa","aaa","aa"]',output:'-1',hidden:false}]),

mk('Camelcase Matching','Trie','O(n*m)','array','Medium','camelMatch',[{name:'queries',type:'string[]',desc:'queries'},{name:'p',type:'string',desc:'pattern'}],'boolean[]',
'Match camelCase where pattern letters are upper-cased.','queries = ["FooBar","FooBarTest","FootBall"]','matches',
[{input:'queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"',output:'[true,false,true,false,false]',explanation:''}],
['1 <= queries.length <= 100','1 <= pattern.length <= 100'],
[{input:'["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], "FB"',output:'[true,false,true,false,false]',hidden:false}]),

mk('Shortest Distance to Target String in Circular Array','Linear Scan','O(n)','array','Easy','shortestDistance',[{name:'words',type:'string[]',desc:'words'},{name:'target',type:'string',desc:'target'},{name:'start',type:'number',desc:'start'}],'number',
'Shortest distance from start to target in circular array.','words = ["hello","i","am","leetcode","hello"], target = "hello", start = 1','distance',
[{input:'words = ["hello","i","am","leetcode","hello"], target = "hello", startIndex = 1',output:'1',explanation:''}],
['1 <= words.length <= 100','startIndex is valid'],
[{input:'["a","b","leetc","ets","le"], "leets", 0',output:'-1',hidden:false}]),

mk('Longest Common Prefix After at Most One Removal','String','O(n*m)','array','Medium','longestCommonPrefix2',[{name:'a',type:'string[]',desc:'a'}],'number',
'Longest common prefix after removing at most one string.','a = ["ab","a"]','prefix',
[{input:'arr = ["ab","a"]',output:'1',explanation:''}],
['2 <= arr.length <= 100'],
[{input:'["ab","abc"]',output:'2',hidden:false}]),

mk('Most Common Word','HashMap','O(n)','hashmap','Easy','mostCommonWord',[{name:'p',type:'string',desc:'paragraph'},{name:'banned',type:'string[]',desc:'banned'}],'string',
'Most common non-banned word in paragraph.','p = "Bob hit a ball, the hit BALL flew far after it was hit.", b = ["hit"]','most common',
[{input:'paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]',output:'"ball"',explanation:''}],
['1 <= paragraph.length <= 1000'],
[{input:'"a.",[]',output:'"a"',hidden:false}]),

mk('Reverse String II','String','O(n)','array','Easy','reverseStr',[{name:'s',type:'string',desc:'string'},{name:'k',type:'number',desc:'k'}],'string',
'Reverse first k chars for every 2k chars.','s = "abcdefg", k = 2','reversed',
[{input:'s = "abcdefg", k = 2',output:'"bacdfeg"',explanation:''}],
['1 <= s.length <= 10^4','1 <= k <= 10^4'],
[{input:'"abcdefg", 2',output:'"bacdfeg"',hidden:false}]),

mk('Most Frequent Vowel and Consonant','HashMap','O(n)','hashmap','Easy','maxFreqSum',[{name:'s',type:'string',desc:'string'}],'number',
'Sum of most frequent vowel and most frequent consonant.','s = "successes"','sum',
[{input:'s = "successes"',output:'6',explanation:''}],
['1 <= s.length <= 100'],
[{input:'"aeiaeia"',output:'3',hidden:false}]),

mk('Custom Sort String II','Counting Sort','O(n)','array','Medium','customSortString2',[{name:'order',type:'string',desc:'order'},{name:'s',type:'string',desc:'s'}],'string',
'Sort s by order, then any order for the rest.','order = "cba", s = "abcd"','sorted',
[{input:'order = "cba", s = "abcd"',output:'"cbad"',explanation:''}],
['1 <= order.length, s.length <= 200'],
[{input:'"bcafg","abcd"',output:'"bcad"',hidden:false}]),
];

// (Continue with more topics in the same file)

const TOPIC_SPECS: Record<string, QSpec[]> = {
  '1': ARRAY_SPECS,
  '2': STRING_SPECS,
};

function main() {
  const bulkDir = path.join(__dirname, '..', 'src', 'data', 'bulk');
  if (!fs.existsSync(bulkDir)) fs.mkdirSync(bulkDir, { recursive: true });

  // Generate all topics
  for (const topicId of Object.keys(TOPIC_SPECS)) {
    const specs = TOPIC_SPECS[topicId];
    if (!specs || specs.length === 0) continue;
    const topicSlug = TOPIC_SLUG[topicId] || 'misc';
    const topicName = TOPIC_NAME[topicId] || 'Unknown';

    const questions: Question[] = specs.slice(0, 100).map((s, idx) => makeQuestion(s, topicId, topicName, idx));

    const exportName = `BULK_${topicSlug.toUpperCase().replace(/-/g, '_')}`;
    const filePath = path.join(bulkDir, `${topicSlug}.ts`);
    const content = `import type { Question } from '../../types';
export const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};
`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Wrote ${filePath} (${questions.length} questions)`);
  }

  // Generate index.ts that re-exports all
  const indexPath = path.join(bulkDir, 'index.ts');
  const allExports: string[] = [];
  const allImports: string[] = [];
  for (const topicId of Object.keys(TOPIC_SPECS)) {
    const topicSlug = TOPIC_SLUG[topicId] || 'misc';
    const exportName = `BULK_${topicSlug.toUpperCase().replace(/-/g, '_')}`;
    allImports.push(`import { ${exportName} } from './${topicSlug}';`);
    allExports.push(`  ...${exportName},`);
  }
  const indexContent = `import type { Question } from '../types';
${allImports.join('\n')}
export const ALL_BULK_QUESTIONS: Question[] = [
${allExports.join('\n')}
];
`;
  fs.writeFileSync(indexPath, indexContent, 'utf-8');
  console.log(`Wrote ${indexPath}`);
}

main();

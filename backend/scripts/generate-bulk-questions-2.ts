/**
 * Bulk question generator for remaining 56 topics.
 * Run: npx tsx scripts/generate-bulk-questions-2.ts
 * Appends to existing bulk/ files for topics 3..59.
 */
import * as fs from 'fs';
import * as path from 'path';
import type { Question, VisualizationType } from '../src/types';
import { topics as TOPICS } from '../src/data/seed';

const slugify = (s: string) =>
  s.toLowerCase()
    .replace(/['''`]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

let ID_COUNTER = 40000;
const nextId = () => String(++ID_COUNTER);

const TOPIC_SLUG: Record<string, string> = {};
const TOPIC_NAME: Record<string, string> = {};
TOPICS.forEach((t) => {
  TOPIC_SLUG[t.id] = t.slug;
  TOPIC_NAME[t.id] = t.name;
});

function buildStarter(fnName: string, paramsJs: string, returnType: string): Record<string, string> {
  const stub = returnType === 'int' ? '0' : returnType === 'boolean' ? 'false' : returnType === 'double' ? '0.0' : returnType === 'long' ? '0L' : 'null';
  return {
    javascript: `function ${fnName}(${paramsJs}): ${returnType} {\n  // your code here\n}\n`,
    python: `def ${fnName}(${paramsJs}) -> ${returnType}:\n    # your code here\n    pass\n`,
    java: `class Solution {\n    public ${returnType} ${fnName}(${paramsJs.replace(/(\w+):/g, '$1').replace(/(\w+)\s+(\w+)/g, '$2 $1')}) {\n        // your code here\n        return ${stub};\n    }\n}\n`,
    cpp: `class Solution {\npublic:\n    ${returnType} ${fnName}(${paramsJs}) {\n        // your code here\n        return ${returnType === 'int' ? '0' : returnType === 'bool' ? 'false' : returnType === 'double' ? '0.0' : ''};\n    }\n};\n`,
  };
}

interface QSpec {
  title: string;
  pattern: string;
  algoType: string;
  vizType: VisualizationType;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  fnName: string;
  params: string;
  paramTypes: string;
  returnType: string;
  problemStatement: string;
  inputFormat: string;
  outputFormat: string;
  examples: { input: string; output: string; explanation: string }[];
  testCases: { input: string; output: string; hidden: boolean }[];
  constraints: string[];
}

const Q = (
  title: string,
  pattern: string,
  vizType: VisualizationType,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  fnName: string,
  params: string,
  paramTypes: string,
  returnType: string,
  problemStatement: string,
  examples: { input: string; output: string; explanation: string }[],
  testCases: { input: string; output: string; hidden: boolean }[],
  constraints: string[]
): QSpec => ({
  title, pattern, algoType: 'O(n)', vizType, difficulty, fnName, params, paramTypes, returnType,
  problemStatement, inputFormat: 'See function signature', outputFormat: 'See function signature', examples, testCases, constraints,
});

function makeQuestion(spec: QSpec, topicId: string, topicName: string, idx: number): Question {
  const topicSlug = TOPIC_SLUG[topicId] || 'misc';
  const slug = `${slugify(spec.title)}-${topicSlug}-${idx + 1}`;
  const paramsJs = spec.params;
  const starterJs = `function ${spec.fnName}(${paramsJs}): ${spec.returnType} {\n  // your code here\n}\n`;
  const paramsList = paramsJs.split(',').map(s => s.trim());
  const pyParams = paramsList.map(p => {
    const [name, type] = p.split(':').map(s => s.trim());
    return `${name}: ${type}`;
  }).join(', ');
  const javaParams = paramsList.map(p => {
    const [name, type] = p.split(':').map(s => s.trim());
    return `${type} ${name}`;
  }).join(', ');
  const cppParams = javaParams;
  const stub = spec.returnType === 'int' ? '0' : spec.returnType === 'boolean' ? 'false' : spec.returnType === 'double' ? '0.0' : spec.returnType === 'long' ? '0L' : 'null';
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
    examples: spec.examples,
    sample_input: spec.examples[0]?.input,
    starter_code: {
      javascript: starterJs,
      python: `def ${spec.fnName}(${pyParams}) -> ${spec.returnType}:\n    # your code here\n    pass\n`,
      java: `class Solution {\n    public ${spec.returnType} ${spec.fnName}(${javaParams}) {\n        return ${stub};\n    }\n}\n`,
      cpp: `class Solution {\npublic:\n    ${spec.returnType} ${spec.fnName}(${cppParams}) {\n        return ${spec.returnType === 'int' ? '0' : spec.returnType === 'bool' ? 'false' : spec.returnType === 'double' ? '0.0' : ''};\n    }\n};\n`,
    },
    test_cases: spec.testCases.map((tc, i) => ({ id: String(i + 1), input: tc.input, expected_output: tc.output, is_hidden: tc.hidden })),
  };
}

// ============================================================
// TOPIC PATTERNS - generate 100 questions per topic
// ============================================================

// Generic patterns used for most topics
function makeTopicSpecs(topicId: string, topicName: string, domain: string): QSpec[] {
  const specs: QSpec[] = [];

  // Pattern 1-10: Search/Find
  specs.push(Q(`Find Element in ${domain}`,'Linear Search','array','Easy','findElement',`arr: any[], target: any`,'arr: any[], target: any','number',
    `Find the index of target in ${domain} array. Return -1 if not found.`,
    [{input:`arr = [1,2,3,4,5], target = 3`,output:'2',explanation:'Standard linear search.'}],
    [{input:'[1,2,3,4,5], 3',output:'2',hidden:false},{input:'[1,2,3,4,5], 6',output:'-1',hidden:true}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Binary Search in ${domain}`,'Binary Search','array','Easy','binarySearch',`arr: any[], target: any`,'arr: any[], target: any','number',
    `Binary search in sorted ${domain} array for target.`,
    [{input:`arr = [1,2,3,4,5], target = 3`,output:'2',explanation:'Binary search.'}],
    [{input:'[1,2,3,4,5], 3',output:'2',hidden:false},{input:'[1,2,3,4,5], 1',output:'0',hidden:true}],
    ['1 <= arr.length <= 10^5','sorted']));

  specs.push(Q(`First Occurrence in ${domain}`,'Binary Search','array','Easy','firstOccurrence',`arr: any[], target: any`,'arr: any[], target: any','number',
    `Find the first index where target appears.`,
    [{input:`arr = [1,2,2,2,3,4], target = 2`,output:'1',explanation:'Binary search for lower bound.'}],
    [{input:'[1,2,2,2,3,4], 2',output:'1',hidden:false},{input:'[1,1,1,1], 1',output:'0',hidden:true}],
    ['1 <= arr.length <= 10^5','sorted']));

  specs.push(Q(`Last Occurrence in ${domain}`,'Binary Search','array','Easy','lastOccurrence',`arr: any[], target: any`,'arr: any[], target: any','number',
    `Find the last index where target appears.`,
    [{input:`arr = [1,2,2,2,3,4], target = 2`,output:'3',explanation:'Binary search for upper bound.'}],
    [{input:'[1,2,2,2,3,4], 2',output:'3',hidden:false}],
    ['1 <= arr.length <= 10^5','sorted']));

  specs.push(Q(`Count Occurrences in ${domain}`,'HashMap','array','Easy','countOccurrences',`arr: any[], target: any`,'arr: any[], target: any','number',
    `Count how many times target appears.`,
    [{input:`arr = [1,2,2,2,3,4], target = 2`,output:'3',explanation:''}],
    [{input:'[1,2,2,2,3,4], 2',output:'3',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Find Maximum in ${domain}`,'Iteration','array','Easy','findMax',`arr: number[]`,'arr: number[]','number',
    `Return the maximum element.`,
    [{input:`arr = [3,1,4,1,5,9,2,6]`,output:'9',explanation:''}],
    [{input:'[3,1,4,1,5,9,2,6]',output:'9',hidden:false},{input:'[-1,-2,-3]',output:'-1',hidden:true}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Find Minimum in ${domain}`,'Iteration','array','Easy','findMin',`arr: number[]`,'arr: number[]','number',
    `Return the minimum element.`,
    [{input:`arr = [3,1,4,1,5,9,2,6]`,output:'1',explanation:''}],
    [{input:'[3,1,4,1,5,9,2,6]',output:'1',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Sum of ${domain}`,'Iteration','array','Easy','sumElements',`arr: number[]`,'arr: number[]','number',
    `Compute the sum of all elements.`,
    [{input:`arr = [1,2,3,4,5]`,output:'15',explanation:''}],
    [{input:'[1,2,3,4,5]',output:'15',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Product of ${domain}`,'Iteration','array','Easy','productElements',`arr: number[]`,'arr: number[]','number',
    `Compute the product of all elements.`,
    [{input:`arr = [2,3,4]`,output:'24',explanation:''}],
    [{input:'[2,3,4]',output:'24',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Contains Duplicate in ${domain}`,'HashSet','array','Easy','containsDuplicate',`arr: any[]`,'arr: any[]','boolean',
    `Check if any value appears twice.`,
    [{input:`arr = [1,2,3,1]`,output:'true',explanation:''}],
    [{input:'[1,2,3,1]',output:'true',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  // Pattern 11-20: Reverse/Sort
  specs.push(Q(`Reverse ${domain}`,'Two Pointers','array','Easy','reverseElements',`arr: any[]`,'arr: any[]','any[]',
    `Reverse the order.`,
    [{input:`arr = [1,2,3,4,5]`,output:'[5,4,3,2,1]',explanation:''}],
    [{input:'[1,2,3,4,5]',output:'[5,4,3,2,1]',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Sort ${domain}`,'Sorting','array','Easy','sortElements',`arr: number[]`,'arr: number[]','number[]',
    `Sort in ascending order.`,
    [{input:`arr = [3,1,4,1,5,9,2,6]`,output:'[1,1,2,3,4,5,6,9]',explanation:''}],
    [{input:'[3,1,4,1,5,9,2,6]',output:'[1,1,2,3,4,5,6,9]',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Sort ${domain} Descending`,'Sorting','array','Easy','sortDescElements',`arr: number[]`,'arr: number[]','number[]',
    `Sort in descending order.`,
    [{input:`arr = [3,1,4,1,5,9,2,6]`,output:'[9,6,5,4,3,2,1,1]',explanation:''}],
    [{input:'[3,1,4,1,5,9,2,6]',output:'[9,6,5,4,3,2,1,1]',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Rotate ${domain} Right by K`,'Reversal','array','Medium','rotateRight',`arr: any[], k: number`,'arr: any[], k: number','any[]',
    `Rotate right by k steps.`,
    [{input:`arr = [1,2,3,4,5,6,7], k = 3`,output:'[5,6,7,1,2,3,4]',explanation:''}],
    [{input:'[1,2,3,4,5,6,7], 3',output:'[5,6,7,1,2,3,4]',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Rotate ${domain} Left by K`,'Reversal','array','Medium','rotateLeft',`arr: any[], k: number`,'arr: any[], k: number','any[]',
    `Rotate left by k steps.`,
    [{input:`arr = [1,2,3,4,5,6,7], k = 2`,output:'[3,4,5,6,7,1,2]',explanation:''}],
    [{input:'[1,2,3,4,5,6,7], 2',output:'[3,4,5,6,7,1,2]',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Move Zeros in ${domain}`,'Two Pointers','array','Easy','moveZeros',`arr: number[]`,'arr: number[]','number[]',
    `Move all zeros to end, preserving order.`,
    [{input:`arr = [0,1,0,3,12]`,output:'[1,3,12,0,0]',explanation:''}],
    [{input:'[0,1,0,3,12]',output:'[1,3,12,0,0]',hidden:false}],
    ['1 <= arr.length <= 10^4']));

  specs.push(Q(`Rearrange Even Odd in ${domain}`,'Two Pointers','array','Easy','rearrangeEvenOdd',`arr: number[]`,'arr: number[]','number[]',
    `Rearrange so evens come first.`,
    [{input:`arr = [1,2,3,4,5,6]`,output:'[2,4,6,1,3,5]',explanation:''}],
    [{input:'[1,2,3,4,5,6]',output:'[2,4,6,1,3,5]',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Sort Array by Parity in ${domain}`,'Two Pointers','array','Easy','sortByParity',`arr: number[]`,'arr: number[]','number[]',
    `Sort array by parity (evens first).`,
    [{input:`arr = [3,1,2,4]`,output:'[2,4,3,1]',explanation:''}],
    [{input:'[3,1,2,4]',output:'[2,4,3,1]',hidden:false}],
    ['1 <= arr.length <= 5*10^4']));

  specs.push(Q(`Sort Colors in ${domain}`,'Dutch Flag','array','Medium','sortColors',`arr: number[]`,'arr: number[]','number[]',
    `Sort an array of 0s, 1s, and 2s in-place.`,
    [{input:`arr = [2,0,2,1,1,0]`,output:'[0,0,1,1,2,2]',explanation:''}],
    [{input:'[2,0,2,1,1,0]',output:'[0,0,1,1,2,2]',hidden:false}],
    ['1 <= arr.length <= 300','nums[i] is 0, 1, or 2']));

  specs.push(Q(`Sort Array Squared`,'Two Pointers','array','Easy','sortedSquares',`arr: number[]`,'arr: number[]','number[]',
    `Return squares of sorted array, also sorted.`,
    [{input:`arr = [-4,-1,0,3,10]`,output:'[0,1,9,16,100]',explanation:''}],
    [{input:'[-4,-1,0,3,10]',output:'[0,1,9,16,100]',hidden:false}],
    ['1 <= arr.length <= 10^4','sorted']));

  // Pattern 21-30: Aggregation/Counting
  specs.push(Q(`Count Frequency in ${domain}`,'HashMap','array','Easy','countFrequency',`arr: any[]`,'arr: any[]','Map<any,number>',
    `Count frequency of each element.`,
    [{input:`arr = [1,2,2,3,3,3]`,output:'{1:1,2:2,3:3}',explanation:''}],
    [{input:'[1,2,2,3,3,3]',output:'{1:1,2:2,3:3}',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Find Duplicate in ${domain}`,'Floyd','array','Medium','findDuplicate',`arr: number[]`,'arr: number[]','number',
    `Find duplicate number.`,
    [{input:`arr = [1,3,4,2,2]`,output:'2',explanation:''}],
    [{input:'[1,3,4,2,2]',output:'2',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Single Number in ${domain}`,'XOR','array','Easy','singleNumber',`arr: number[]`,'arr: number[]','number',
    `Find unique element.`,
    [{input:`arr = [4,1,2,1,2]`,output:'4',explanation:''}],
    [{input:'[4,1,2,1,2]',output:'4',hidden:false}],
    ['1 <= arr.length <= 3*10^4']));

  specs.push(Q(`Missing Number in ${domain}`,'XOR','array','Easy','missingNumber',`arr: number[]`,'arr: number[]','number',
    `Find missing number in [0, n].`,
    [{input:`arr = [3,0,1]`,output:'2',explanation:''}],
    [{input:'[3,0,1]',output:'2',hidden:false}],
    ['1 <= arr.length <= 10^4']));

  specs.push(Q(`Majority Element in ${domain}`,'Boyer-Moore','array','Easy','majorityElement',`arr: number[]`,'arr: number[]','number',
    `Find element appearing more than n/2 times.`,
    [{input:`arr = [3,2,3]`,output:'3',explanation:''}],
    [{input:'[3,2,3]',output:'3',hidden:false}],
    ['1 <= arr.length <= 5*10^4']));

  specs.push(Q(`Two Sum in ${domain}`,'HashMap','array','Easy','twoSum',`arr: number[], target: number`,'arr: number[], target: number','number[]',
    `Find two numbers summing to target.`,
    [{input:`arr = [2,7,11,15], target = 9`,output:'[0,1]',explanation:''}],
    [{input:'[2,7,11,15], 9',output:'[0,1]',hidden:false}],
    ['2 <= arr.length <= 10^4']));

  specs.push(Q(`Three Sum in ${domain}`,'Two Pointers','array','Medium','threeSum',`arr: number[]`,'arr: number[]','number[][]',
    `Find triplets summing to 0.`,
    [{input:`arr = [-1,0,1,2,-1,-4]`,output:'[[-1,-1,2],[-1,0,1]]',explanation:''}],
    [{input:'[-1,0,1,2,-1,-4]',output:'[[-1,-1,2],[-1,0,1]]',hidden:false}],
    ['0 <= arr.length <= 3000']));

  specs.push(Q(`Kth Largest in ${domain}`,'Quick Select','array','Medium','findKthLargest',`arr: number[], k: number`,'arr: number[], k: number','number',
    `Find kth largest.`,
    [{input:`arr = [3,2,1,5,6,4], k = 2`,output:'5',explanation:''}],
    [{input:'[3,2,1,5,6,4], 2',output:'5',hidden:false}],
    ['1 <= k <= arr.length <= 10^5']));

  specs.push(Q(`Kth Smallest in ${domain}`,'Quick Select','array','Medium','findKthSmallest',`arr: number[], k: number`,'arr: number[], k: number','number',
    `Find kth smallest.`,
    [{input:`arr = [3,2,1,5,6,4], k = 2`,output:'2',explanation:''}],
    [{input:'[3,2,1,5,6,4], 2',output:'2',hidden:false}],
    ['1 <= k <= arr.length <= 10^5']));

  specs.push(Q(`Top K Frequent in ${domain}`,'Bucket Sort','array','Medium','topKFrequent',`arr: number[], k: number`,'arr: number[], k: number','number[]',
    `K most frequent elements.`,
    [{input:`arr = [1,1,1,2,2,3], k = 2`,output:'[1,2]',explanation:''}],
    [{input:'[1,1,1,2,2,3], 2',output:'[1,2]',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  // Pattern 31-40: Subarray/Sliding Window
  specs.push(Q(`Max Subarray Sum (Kadane)`,'Kadane','array','Medium','maxSubArray',`arr: number[]`,'arr: number[]','number',
    `Find max sum of contiguous subarray.`,
    [{input:`arr = [-2,1,-3,4,-1,2,1,-5,4]`,output:'6',explanation:'[4,-1,2,1]'}],
    [{input:'[-2,1,-3,4,-1,2,1,-5,4]',output:'6',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Min Subarray Sum`,'Kadane','array','Medium','minSubArray',`arr: number[]`,'arr: number[]','number',
    `Find min sum of contiguous subarray.`,
    [{input:`arr = [3,-2,5,-1]`,output:'-3',explanation:''}],
    [{input:'[3,-2,5,-1]',output:'-3',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Max Product Subarray`,'DP','array','Medium','maxProduct',`arr: number[]`,'arr: number[]','number',
    `Find max product of contiguous subarray.`,
    [{input:`arr = [2,3,-2,4]`,output:'6',explanation:'[2,3]'}],
    [{input:'[2,3,-2,4]',output:'6',hidden:false}],
    ['1 <= arr.length <= 2*10^4']));

  specs.push(Q(`Subarray Sum Equals K`,'Prefix+Map','array','Medium','subarraySum',`arr: number[], k: number`,'arr: number[], k: number','number',
    `Count subarrays summing to k.`,
    [{input:`arr = [1,1,1], k = 2`,output:'2',explanation:''}],
    [{input:'[1,1,1], 2',output:'2',hidden:false}],
    ['1 <= arr.length <= 2*10^4']));

  specs.push(Q(`Longest Subarray Sum K`,'Prefix+Map','array','Medium','longestSubarraySumK',`arr: number[], k: number`,'arr: number[], k: number','number',
    `Longest subarray with sum k.`,
    [{input:`arr = [1,-1,5,-2,3], k = 3`,output:'4',explanation:'[1,-1,5,-2]'}],
    [{input:'[1,-1,5,-2,3], 3',output:'4',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Min Size Subarray Sum`,'Sliding Window','array','Medium','minSubArrayLen',`target: number, arr: number[]`,'target: number, arr: number[]','number',
    `Min length subarray with sum >= target.`,
    [{input:`target = 7, arr = [2,3,1,2,4,3]`,output:'2',explanation:'[4,3]'}],
    [{input:'7, [2,3,1,2,4,3]',output:'2',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Max Consecutive Ones with K Flips`,'Sliding Window','array','Medium','longestOnes',`arr: number[], k: number`,'arr: number[], k: number','number',
    `Max 1s with k flips.`,
    [{input:`arr = [1,1,0,0,1,1,1,0,1], k = 1`,output:'6',explanation:''}],
    [{input:'[1,1,0,0,1,1,1,0,1], 1',output:'6',hidden:false}],
    ['1 <= arr.length <= 10^5']));

  specs.push(Q(`Longest Substring Without Repeating`,'Sliding Window','array','Medium','lengthOfLongestSubstring',`s: string`,'s: string','number',
    `Longest substring without repeating characters.`,
    [{input:`s = "abcabcbb"`,output:'3',explanation:'"abc"'}],
    [{input:'"abcabcbb"',output:'3',hidden:false}],
    ['0 <= s.length <= 5*10^4']));

  specs.push(Q(`Max Vowels in Substring`,'Sliding Window','array','Medium','maxVowels',`s: string, k: number`,'s: string, k: number','number',
    `Max vowels in any k-substring.`,
    [{input:`s = "abciiidef", k = 3`,output:'3',explanation:'"iii"'}],
    [{input:'"abciiidef", 3',output:'3',hidden:false}],
    ['1 <= s.length <= 10^5']));

  specs.push(Q(`Minimum Window Substring`,'Sliding Window','array','Hard','minWindow',`s: string, t: string`,'s: string, t: string','string',
    `Minimum window containing all chars of t.`,
    [{input:`s = "ADOBECODEBANC", t = "ABC"`,output:'"BANC"',explanation:''}],
    [{input:'"ADOBECODEBANC","ABC"',output:'"BANC"',hidden:false}],
    ['1 <= s.length, t.length <= 10^5']));

  // Pattern 41-50: DP
  specs.push(Q(`Fibonacci Number`,'DP','array','Easy','fib',`n: number`,'n: number','number',
    `Compute the nth Fibonacci number.`,
    [{input:`n = 4`,output:'3',explanation:'0,1,1,2,3'}],
    [{input:'4',output:'3',hidden:false},{input:'2',output:'1',hidden:true}],
    ['0 <= n <= 30']));

  specs.push(Q(`Climbing Stairs`,'DP','array','Easy','climbStairs',`n: number`,'n: number','number',
    `Ways to climb n stairs (1 or 2 at a time).`,
    [{input:`n = 3`,output:'3',explanation:'111, 12, 21'}],
    [{input:'3',output:'3',hidden:false},{input:'2',output:'2',hidden:true}],
    ['1 <= n <= 45']));

  specs.push(Q(`House Robber`,'DP','array','Medium','rob',`arr: number[]`,'arr: number[]','number',
    `Max money without robbing adjacent houses.`,
    [{input:`arr = [1,2,3,1]`,output:'4',explanation:'rob house 1 and 3'}],
    [{input:'[1,2,3,1]',output:'4',hidden:false}],
    ['1 <= arr.length <= 100']));

  specs.push(Q(`House Robber II`,'DP','array','Medium','rob2',`arr: number[]`,'arr: number[]','number',
    `House Robber with circular constraint.`,
    [{input:`arr = [2,3,2]`,output:'3',explanation:''}],
    [{input:'[2,3,2]',output:'3',hidden:false}],
    ['1 <= arr.length <= 100']));

  specs.push(Q(`Longest Increasing Subsequence`,'DP','array','Medium','lengthOfLIS',`arr: number[]`,'arr: number[]','number',
    `Length of longest increasing subsequence.`,
    [{input:`arr = [10,9,2,5,3,7,101,18]`,output:'4',explanation:'[2,3,7,101]'}],
    [{input:'[10,9,2,5,3,7,101,18]',output:'4',hidden:false}],
    ['1 <= arr.length <= 2500']));

  specs.push(Q(`Longest Common Subsequence`,'DP','array','Medium','longestCommonSubsequence',`a: string, b: string`,'a: string, b: string','number',
    `Length of LCS.`,
    [{input:`a = "abcde", b = "ace"`,output:'3',explanation:''}],
    [{input:'"abcde","ace"',output:'3',hidden:false}],
    ['1 <= a.length, b.length <= 1000']));

  specs.push(Q(`Edit Distance`,'DP','array','Hard','minDistance',`a: string, b: string`,'a: string, b: string','number',
    `Min operations to convert a to b.`,
    [{input:`a = "horse", b = "ros"`,output:'3',explanation:''}],
    [{input:'"horse","ros"',output:'3',hidden:false}],
    ['0 <= a.length, b.length <= 500']));

  specs.push(Q(`Coin Change`,'DP','array','Medium','coinChange',`coins: number[], amount: number`,'coins: number[], amount: number','number',
    `Min coins to make amount.`,
    [{input:`coins = [1,5,10,25], amount = 30`,output:'2',explanation:'25+5'}],
    [{input:'[1,5,10,25], 30',output:'2',hidden:false}],
    ['1 <= coins.length <= 12']));

  specs.push(Q(`Coin Change II`,'DP','array','Medium','change',`amount: number, coins: number[]`,'amount: number, coins: number[]','number',
    `Count combinations to make amount.`,
    [{input:`amount = 5, coins = [1,2,5]`,output:'4',explanation:''}],
    [{input:'5, [1,2,5]',output:'4',hidden:false}],
    ['0 <= amount <= 5000']));

  specs.push(Q(`0-1 Knapsack`,'DP','array','Medium','knapsack',`weights: number[], values: number[], capacity: number`,'weights: number[], values: number[], capacity: number','number',
    `Max value within capacity.`,
    [{input:`weights = [1,2,3], values = [10,15,40], capacity = 6`,output:'55',explanation:''}],
    [{input:'[1,2,3], [10,15,40], 6',output:'55',hidden:false}],
    ['1 <= n <= 100']));

  // Pattern 51-60: Graph/Traversal
  specs.push(Q(`BFS Traversal of ${domain}`,'BFS','graph','Medium','bfs',`nodes: number[][]`,'nodes: number[][]','number[]',
    `BFS traversal order.`,
    [{input:`nodes = [[2,4],[1,3],[2,4],[1,3]]`,output:'[1,2,3,4]',explanation:''}],
    [{input:'[[2,4],[1,3],[2,4],[1,3]]',output:'[1,2,3,4]',hidden:false}],
    ['1 <= nodes.length <= 100']));

  specs.push(Q(`DFS Traversal of ${domain}`,'DFS','graph','Medium','dfs',`nodes: number[][]`,'nodes: number[][]','number[]',
    `DFS traversal order.`,
    [{input:`nodes = [[2,4],[1,3],[2,4],[1,3]]`,output:'[1,2,4,3]',explanation:''}],
    [{input:'[[2,4],[1,3],[2,4],[1,3]]',output:'[1,2,4,3]',hidden:false}],
    ['1 <= nodes.length <= 100']));

  specs.push(Q(`Count Connected Components`,'DFS','graph','Medium','countComponents',`n: number, edges: number[][]`,'n: number, edges: number[][]','number',
    `Count connected components.`,
    [{input:`n = 5, edges = [[0,1],[1,2],[3,4]]`,output:'2',explanation:''}],
    [{input:'5, [[0,1],[1,2],[3,4]]',output:'2',hidden:false}],
    ['0 <= n <= 100']));

  specs.push(Q(`Shortest Path in ${domain}`,'BFS','graph','Medium','shortestPath',`graph: number[][], src: number, dst: number`,'graph: number[][], src: number, dst: number','number',
    `Shortest path between two nodes.`,
    [{input:`graph = [[1,3],[0,2],[1,3],[0,2]], src = 0, dst = 3`,output:'2',explanation:''}],
    [{input:'[[1,3],[0,2],[1,3],[0,2]], 0, 3',output:'2',hidden:false}],
    ['1 <= graph.length <= 100']));

  specs.push(Q(`Detect Cycle in ${domain}`,'DFS','graph','Medium','hasCycle',`n: number, edges: number[][]`,'n: number, edges: number[][]','boolean',
    `Detect if graph has cycle.`,
    [{input:`n = 4, edges = [[0,1],[1,2],[2,3],[3,0]]`,output:'true',explanation:''}],
    [{input:'4, [[0,1],[1,2],[2,3],[3,0]]',output:'true',hidden:false}],
    ['0 <= n <= 100']));

  specs.push(Q(`Topological Sort of ${domain}`,'Topo Sort','graph','Medium','topologicalSort',`n: number, edges: number[][]`,'n: number, edges: number[][]','number[]',
    `Topological ordering.`,
    [{input:`n = 4, edges = [[1,0],[2,0],[3,1],[3,2]]`,output:'[0,1,2,3]',explanation:''}],
    [{input:'4, [[1,0],[2,0],[3,1],[3,2]]',output:'[0,1,2,3]',hidden:false}],
    ['0 <= n <= 100']));

  specs.push(Q(`Number of Islands`,'BFS/DFS','graph','Medium','numIslands',`grid: string[][]`,'grid: string[][]','number',
    `Count islands in grid.`,
    [{input:`grid = [["1","1","0"],["1","1","0"],["0","0","1"]]`,output:'2',explanation:''}],
    [{input:'[["1","1","0"],["1","1","0"],["0","0","1"]]',output:'2',hidden:false}],
    ['1 <= m, n <= 300']));

  specs.push(Q(`Pacific Atlantic Water Flow`,'DFS','graph','Medium','pacificAtlantic',`heights: number[][]`,'heights: number[][]','number[][]',
    `Cells reaching both oceans.`,
    [{input:`heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]`,output:'[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',explanation:''}],
    [{input:'[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]',output:'[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]',hidden:false}],
    ['1 <= m, n <= 150']));

  specs.push(Q(`Word Search`,'DFS','graph','Medium','exist',`board: string[][], word: string`,'board: string[][], word: string','boolean',
    `Check if word exists in board.`,
    [{input:`board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"`,output:'true',explanation:''}],
    [{input:'[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED"',output:'true',hidden:false}],
    ['1 <= m, n <= 6']));

  specs.push(Q(`Clone Graph`,'DFS+Map','graph','Medium','cloneGraph',`node: number`,'node: number','number',
    `Deep copy a graph.`,
    [{input:`node = 1`,output:'1',explanation:''}],
    [{input:'1',output:'1',hidden:false}],
    ['0 <= n <= 100']));

  // Pattern 61-70: String operations
  specs.push(Q(`Reverse String`,'Two Pointers','string','Easy','reverseString',`s: string[]`,'s: string[]','void',
    `Reverse string in-place.`,
    [{input:`s = ["h","e","l","l","o"]`,output:'["o","l","l","e","h"]',explanation:''}],
    [{input:'["h","e","l","l","o"]',output:'["o","l","l","e","h"]',hidden:false}],
    ['1 <= s.length <= 10^5']));

  specs.push(Q(`Valid Anagram`,'HashMap','string','Easy','isAnagram',`s: string, t: string`,'s: string, t: string','boolean',
    `Check if t is an anagram of s.`,
    [{input:`s = "anagram", t = "nagaram"`,output:'true',explanation:''}],
    [{input:'"anagram","nagaram"',output:'true',hidden:false}],
    ['1 <= s.length, t.length <= 5*10^4']));

  specs.push(Q(`Valid Palindrome`,'Two Pointers','string','Easy','isPalindrome',`s: string`,'s: string','boolean',
    `Check if palindrome ignoring non-alphanumeric.`,
    [{input:`s = "A man, a plan, a canal: Panama"`,output:'true',explanation:''}],
    [{input:'"A man, a plan, a canal: Panama"',output:'true',hidden:false}],
    ['1 <= s.length <= 2*10^5']));

  specs.push(Q(`Longest Common Prefix`,'Trie','string','Easy','longestCommonPrefix',`strs: string[]`,'strs: string[]','string',
    `Longest common prefix.`,
    [{input:`strs = ["flower","flow","flight"]`,output:'"fl"',explanation:''}],
    [{input:'["flower","flow","flight"]',output:'"fl"',hidden:false}],
    ['1 <= strs.length <= 200']));

  specs.push(Q(`Valid Parentheses`,'Stack','string','Easy','isValid',`s: string`,'s: string','boolean',
    `Check if brackets are valid.`,
    [{input:`s = "()[]{}"`,output:'true',explanation:''}],
    [{input:'"()[]{}"',output:'true',hidden:false}],
    ['1 <= s.length <= 10^4']));

  specs.push(Q(`First Unique Character`,'HashMap','string','Easy','firstUniqChar',`s: string`,'s: string','number',
    `Index of first non-repeating character.`,
    [{input:`s = "leetcode"`,output:'0',explanation:'l'}],
    [{input:'"leetcode"',output:'0',hidden:false}],
    ['1 <= s.length <= 10^5']));

  specs.push(Q(`Group Anagrams`,'HashMap','string','Medium','groupAnagrams',`strs: string[]`,'strs: string[]','string[]',
    `Group anagrams.`,
    [{input:`strs = ["eat","tea","tan","ate","nat","bat"]`,output:'[["bat"],["nat","tan"],["ate","eat","tea"]]',explanation:''}],
    [{input:'["eat","tea","tan","ate","nat","bat"]',output:'[["bat"],["nat","tan"],["ate","eat","tea"]]',hidden:false}],
    ['1 <= strs.length <= 10^4']));

  specs.push(Q(`Longest Palindromic Substring`,'DP','string','Medium','longestPalindrome',`s: string`,'s: string','string',
    `Longest palindromic substring.`,
    [{input:`s = "babad"`,output:'"bab"',explanation:''}],
    [{input:'"babad"',output:'"bab"',hidden:false}],
    ['1 <= s.length <= 1000']));

  specs.push(Q(`String to Integer (atoi)`,'Parsing','string','Medium','myAtoi',`s: string`,'s: string','number',
    `Convert string to 32-bit integer.`,
    [{input:`s = "   -42"`,output:'-42',explanation:''}],
    [{input:'"   -42"',output:'-42',hidden:false}],
    ['0 <= s.length <= 200']));

  specs.push(Q(`Roman to Integer`,'HashMap','string','Easy','romanToInt',`s: string`,'s: string','number',
    `Convert Roman to integer.`,
    [{input:`s = "LVIII"`,output:'58',explanation:''}],
    [{input:'"LVIII"',output:'58',hidden:false}],
    ['1 <= s.length <= 15']));

  // Pattern 71-80: Tree operations
  specs.push(Q(`Max Depth of ${domain}`,'DFS','tree','Easy','maxDepth',`root: any`,'root: any','number',
    `Max depth of tree.`,
    [{input:`root = [3,9,20,null,null,15,7]`,output:'3',explanation:''}],
    [{input:'[3,9,20,null,null,15,7]',output:'3',hidden:false}],
    ['0 <= n <= 10^4']));

  specs.push(Q(`Min Depth of ${domain}`,'DFS','tree','Easy','minDepth',`root: any`,'root: any','number',
    `Min depth of tree.`,
    [{input:`root = [3,9,20,null,null,15,7]`,output:'2',explanation:''}],
    [{input:'[3,9,20,null,null,15,7]',output:'2',hidden:false}],
    ['0 <= n <= 10^4']));

  specs.push(Q(`Invert ${domain}`,'DFS','tree','Easy','invertTree',`root: any`,'root: any','any',
    `Invert a binary tree.`,
    [{input:`root = [4,2,7,1,3,6,9]`,output:'[4,7,2,9,6,3,1]',explanation:''}],
    [{input:'[4,2,7,1,3,6,9]',output:'[4,7,2,9,6,3,1]',hidden:false}],
    ['0 <= n <= 100']));

  specs.push(Q(`Validate ${domain}`,'DFS','tree','Medium','isValid',`root: any`,'root: any','boolean',
    `Validate the structure.`,
    [{input:`root = [2,1,3]`,output:'true',explanation:''}],
    [{input:'[2,1,3]',output:'true',hidden:false}],
    ['1 <= n <= 10^4']));

  specs.push(Q(`Symmetric ${domain}`,'DFS','tree','Easy','isSymmetric',`root: any`,'root: any','boolean',
    `Check if tree is symmetric.`,
    [{input:`root = [1,2,2,3,4,4,3]`,output:'true',explanation:''}],
    [{input:'[1,2,2,3,4,4,3]',output:'true',hidden:false}],
    ['1 <= n <= 1000']));

  specs.push(Q(`Level Order of ${domain}`,'BFS','tree','Medium','levelOrder',`root: any`,'root: any','any[][]',
    `Level order traversal.`,
    [{input:`root = [3,9,20,null,null,15,7]`,output:'[[3],[9,20],[15,7]]',explanation:''}],
    [{input:'[3,9,20,null,null,15,7]',output:'[[3],[9,20],[15,7]]',hidden:false}],
    ['0 <= n <= 2000']));

  specs.push(Q(`Zigzag Level Order`,'BFS','tree','Medium','zigzagLevelOrder',`root: any`,'root: any','any[][]',
    `Zigzag level order traversal.`,
    [{input:`root = [3,9,20,null,null,15,7]`,output:'[[3],[20,9],[15,7]]',explanation:''}],
    [{input:'[3,9,20,null,null,15,7]',output:'[[3],[20,9],[15,7]]',hidden:false}],
    ['0 <= n <= 2000']));

  specs.push(Q(`Right Side View`,'BFS','tree','Medium','rightSideView',`root: any`,'root: any','any[]',
    `Right side view of tree.`,
    [{input:`root = [1,2,3,null,5,null,4]`,output:'[1,3,4]',explanation:''}],
    [{input:'[1,2,3,null,5,null,4]',output:'[1,3,4]',hidden:false}],
    ['0 <= n <= 100']));

  specs.push(Q(`Diameter of ${domain}`,'DFS','tree','Easy','diameter',`root: any`,'root: any','number',
    `Diameter of binary tree.`,
    [{input:`root = [1,2,3,4,5]`,output:'3',explanation:''}],
    [{input:'[1,2,3,4,5]',output:'3',hidden:false}],
    ['0 <= n <= 10^4']));

  specs.push(Q(`Lowest Common Ancestor`,'DFS','tree','Medium','lowestCommonAncestor',`root: any, p: any, q: any`,'root: any, p: any, q: any','any',
    `LCA of two nodes.`,
    [{input:`root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1`,output:'3',explanation:''}],
    [{input:'[3,5,1,6,2,0,8,null,null,7,4], 5, 1',output:'3',hidden:false}],
    ['2 <= n <= 10^5']));

  // Pattern 81-90: Math/Number
  specs.push(Q(`Factorial of ${domain}`,'Math','array','Easy','factorial',`n: number`,'n: number','number',
    `Compute n!`,
    [{input:`n = 5`,output:'120',explanation:'5*4*3*2*1'}],
    [{input:'5',output:'120',hidden:false},{input:'0',output:'1',hidden:true}],
    ['0 <= n <= 12']));

  specs.push(Q(`Power of Two`,'Bit','array','Easy','isPowerOfTwo',`n: number`,'n: number','boolean',
    `Check if n is a power of two.`,
    [{input:`n = 16`,output:'true',explanation:''}],
    [{input:'16',output:'true',hidden:false},{input:'3',output:'false',hidden:true}],
    ['-2^31 <= n <= 2^31 - 1']));

  specs.push(Q(`Power of Three`,'Math','array','Easy','isPowerOfThree',`n: number`,'n: number','boolean',
    `Check if n is a power of three.`,
    [{input:`n = 27`,output:'true',explanation:''}],
    [{input:'27',output:'true',hidden:false},{input:'0',output:'false',hidden:true}],
    ['-2^31 <= n <= 2^31 - 1']));

  specs.push(Q(`Sqrt(x)`,'Binary Search','array','Easy','mySqrt',`x: number`,'x: number','number',
    `Compute floor(sqrt(x)).`,
    [{input:`x = 4`,output:'2',explanation:''}],
    [{input:'4',output:'2',hidden:false},{input:'8',output:'2',hidden:true}],
    ['0 <= x <= 2^31 - 1']));

  specs.push(Q(`Count Primes`,'Sieve','array','Medium','countPrimes',`n: number`,'n: number','number',
    `Count primes less than n.`,
    [{input:`n = 10`,output:'4',explanation:'2,3,5,7'}],
    [{input:'10',output:'4',hidden:false}],
    ['0 <= n <= 5*10^6']));

  specs.push(Q(`Reverse Integer`,'Math','array','Medium','reverse',`x: number`,'x: number','number',
    `Reverse digits of integer.`,
    [{input:`x = 123`,output:'321',explanation:''}],
    [{input:'123',output:'321',hidden:false},{input:'-123',output:'-321',hidden:true}],
    ['-2^31 <= x <= 2^31 - 1']));

  specs.push(Q(`Palindrome Number`,'Math','array','Easy','isPalindrome',`x: number`,'x: number','boolean',
    `Check if integer is palindrome.`,
    [{input:`x = 121`,output:'true',explanation:''}],
    [{input:'121',output:'true',hidden:false}],
    ['-2^31 <= x <= 2^31 - 1']));

  specs.push(Q(`GCD of Two Numbers`,'Math','array','Easy','gcd',`a: number, b: number`,'a: number, b: number','number',
    `Compute greatest common divisor.`,
    [{input:`a = 12, b = 8`,output:'4',explanation:''}],
    [{input:'12, 8',output:'4',hidden:false}],
    ['1 <= a, b <= 10^9']));

  specs.push(Q(`LCM of Two Numbers`,'Math','array','Easy','lcm',`a: number, b: number`,'a: number, b: number','number',
    `Compute least common multiple.`,
    [{input:`a = 4, b = 6`,output:'12',explanation:''}],
    [{input:'4, 6',output:'12',hidden:false}],
    ['1 <= a, b <= 10^9']));

  specs.push(Q(`Number of Digits`,'Math','array','Easy','countDigits',`n: number`,'n: number','number',
    `Count the digits in n.`,
    [{input:`n = 12345`,output:'5',explanation:''}],
    [{input:'12345',output:'5',hidden:false}],
    ['0 <= n <= 2^31 - 1']));

  // Pattern 91-100: More variations
  specs.push(Q(`XOR of All Numbers`,'Bit','array','Easy','xorAll',`arr: number[]`,'arr: number[]','number',
    `XOR of all elements.`,
    [{input:`arr = [1,2,3]`,output:'0',explanation:'1^2^3=0'}],
    [{input:'[1,2,3]',output:'0',hidden:false}],
    ['1 <= arr.length <= 3*10^4']));

  specs.push(Q(`Count Set Bits`,'Bit','array','Easy','hammingWeight',`n: number`,'n: number','number',
    `Count number of 1 bits.`,
    [{input:`n = 11`,output:'3',explanation:'1011 has three 1s'}],
    [{input:'11',output:'3',hidden:false}],
    ['0 <= n <= 2^31 - 1']));

  specs.push(Q(`Power Function`,'Math','array','Medium','myPow',`x: number, n: number`,'x: number, n: number','number',
    `Compute x^n.`,
    [{input:`x = 2.0, n = 10`,output:'1024.0',explanation:''}],
    [{input:'2.0, 10',output:'1024.0',hidden:false}],
    ['-100.0 < x < 100.0','-2^31 <= n <= 2^31-1']));

  specs.push(Q(`Reverse Bits`,'Bit','array','Easy','reverseBits',`n: number`,'n: number','number',
    `Reverse bits of 32-bit integer.`,
    [{input:`n = 43261596`,output:'964176192',explanation:''}],
    [{input:'43261596',output:'964176192',hidden:false}],
    ['0 <= n <= 2^32 - 1']));

  specs.push(Q(`Missing Number in Range`,'Math','array','Easy','missingNumber',`arr: number[]`,'arr: number[]','number',
    `Find missing in range [0, n].`,
    [{input:`arr = [0,1,3]`,output:'2',explanation:''}],
    [{input:'[0,1,3]',output:'2',hidden:false}],
    ['1 <= arr.length <= 10^4']));

  specs.push(Q(`Plus One`,'Math','array','Easy','plusOne',`arr: number[]`,'arr: number[]','number[]',
    `Add 1 to number represented as array.`,
    [{input:`arr = [1,2,3]`,output:'[1,2,4]',explanation:''}],
    [{input:'[1,2,3]',output:'[1,2,4]',hidden:false}],
    ['1 <= arr.length <= 100']));

  specs.push(Q(`Add Binary`,'Bit','string','Easy','addBinary',`a: string, b: string`,'a: string, b: string','string',
    `Add two binary strings.`,
    [{input:`a = "11", b = "1"`,output:'"100"',explanation:''}],
    [{input:'"11","1"',output:'"100"',hidden:false}],
    ['1 <= a.length, b.length <= 10^4']));

  specs.push(Q(`Multiply Strings`,'Math','string','Medium','multiply',`a: string, b: string`,'a: string, b: string','string',
    `Multiply two non-negative integers.`,
    [{input:`a = "123", b = "456"`,output:'"56088"',explanation:''}],
    [{input:'"123","456"',output:'"56088"',hidden:false}],
    ['1 <= a.length, b.length <= 200']));

  specs.push(Q(`Intersection of Arrays`,'HashSet','array','Easy','intersection',`a: number[], b: number[]`,'a: number[], b: number[]','number[]',
    `Find intersection.`,
    [{input:`a = [1,2,2,1], b = [2,2]`,output:'[2]',explanation:''}],
    [{input:'[1,2,2,1], [2,2]',output:'[2]',hidden:false}],
    ['1 <= a.length, b.length <= 10^5']));

  specs.push(Q(`Union of Arrays`,'HashSet','array','Easy','union',`a: number[], b: number[]`,'a: number[], b: number[]','number[]',
    `Find union.`,
    [{input:`a = [1,2,3], b = [2,3,4]`,output:'[1,2,3,4]',explanation:''}],
    [{input:'[1,2,3], [2,3,4]',output:'[1,2,3,4]',hidden:false}],
    ['1 <= a.length, b.length <= 10^5']));

  return specs;
}

// Generate specs for each remaining topic
const TOPIC_SPECS: Record<string, QSpec[]> = {};
for (const topic of TOPICS) {
  // Skip if already done (topics 1, 2)
  if (['1', '2'].includes(topic.id)) continue;
  TOPIC_SPECS[topic.id] = makeTopicSpecs(topic.id, topic.name, topic.name);
}

function main() {
  const bulkDir = path.join(__dirname, '..', 'src', 'data', 'bulk');
  if (!fs.existsSync(bulkDir)) fs.mkdirSync(bulkDir, { recursive: true });

  let total = 0;
  for (const topicId of Object.keys(TOPIC_SPECS)) {
    const specs = TOPIC_SPECS[topicId];
    if (!specs || specs.length === 0) continue;
    const topicSlug = TOPIC_SLUG[topicId] || 'misc';
    const topicName = TOPIC_NAME[topicId] || 'Unknown';

    const questions: Question[] = specs.slice(0, 100).map((s, idx) => makeQuestion(s, topicId, topicName, idx));

    const exportName = `BULK_${topicSlug.toUpperCase().replace(/-/g, '_')}`;
    const filePath = path.join(bulkDir, `${topicSlug}.ts`);
    const content = `import type { Question } from '../../types';\nexport const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    total += questions.length;
    if (total % 1000 === 0) console.log(`Progress: ${total} questions generated...`);
  }
  console.log(`Generated ${total} questions for ${Object.keys(TOPIC_SPECS).length} topics.`);
}

main();

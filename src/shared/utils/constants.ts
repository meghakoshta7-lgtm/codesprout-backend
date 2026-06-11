export const DIFFICULTIES = ['Easy', 'Medium', 'Hard'] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];

export const TOPICS = [
  'Arrays', 'Strings', 'Hashing', 'Linked List', 'Stack', 'Queue',
  'Heap', 'Trees', 'BST', 'Graphs', 'Greedy', 'DP',
  'Backtracking', 'Sliding Window', 'Binary Search',
] as const;
export type TopicName = (typeof TOPICS)[number];

export const PATTERNS = [
  'Two Pointers', 'Sliding Window', 'Binary Search', 'HashMap Lookup',
  'Depth First Search', 'Breadth First Search', 'Dynamic Programming',
  'Backtracking', 'Greedy', 'Union Find', 'Topological Sort',
  'Quick Select', 'Merge Intervals', 'Monotonic Stack',
  'Fast & Slow Pointer', 'Matrix Traversal', 'Prefix Sum',
] as const;
export type PatternName = (typeof PATTERNS)[number];

export const SUBSCRIPTION_PLANS = {
  FREE: { name: 'Free', price: 0, features: ['Pattern', 'Complexity', 'Basic Approach'] as string[] },
  PREMIUM: {
    name: 'Premium',
    price: 49,
    features: [
      'Recognition Signals',
      'Interview Notes',
      'Edge Cases',
      'Optimization Tricks',
      'Pattern Deep Dive',
      'Company Frequency',
      'Related Question Chains',
      'All Hard Questions',
    ] as string[],
  },
} as const;

export const COMPANY_FREQUENCY = ['Google', 'Amazon', 'Microsoft', 'Meta', 'Apple', 'Netflix'] as const;

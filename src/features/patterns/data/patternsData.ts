export interface PatternDetail {
  name: string;
  category: string;
  summary: string;
  flow: { step: string; desc: string }[];
  template: string;
  tips: string[];
  traps: string[];
  timeComplexity: string;
  spaceComplexity: string;
}

export const PATTERN_DETAILS: Record<string, PatternDetail> = {
  'HashMap Lookup': {
    name: 'HashMap Lookup',
    category: 'HashMap',
    summary: 'Use a hash map to store values for O(1) lookup. Ideal for problems involving complements, frequency counting, or pair matching.',
    flow: [
      { step: 'Initialize', desc: 'Create an empty hash map (object/Map/dict) to store key-value pairs.' },
      { step: 'Iterate', desc: 'Loop through the input data (array, string, etc.) one element at a time.' },
      { step: 'Check Complement', desc: 'For each element, compute the required complement or check if it already exists in the map.' },
      { step: 'Return / Update', desc: 'If complement found, return the result. Otherwise, store the current element in the map and continue.' },
    ],
    template: 'map = {}\nfor each element in input:\n    complement = target - element\n    if complement in map:\n        return [map[complement], index]\n    map[element] = index',
    tips: ['Use Map() for better key types than objects', 'Initialize with default values for frequency counting', 'Consider using two-pass when order matters'],
    traps: ['Forgetting to handle duplicate keys', 'Using objects where Map() would be safer', 'Not accounting for integer overflow in some languages'],
    timeComplexity: 'O(n) average, O(n²) worst case',
    spaceComplexity: 'O(n) for the hash map',
  },
  'Two Pointers': {
    name: 'Two Pointers',
    category: 'Two Pointers',
    summary: 'Use two pointers to traverse data from different directions or speeds. Common for sorted arrays, pair finding, and palindrome problems.',
    flow: [
      { step: 'Initialize', desc: 'Set left pointer at start (0) and right pointer at end (n-1) of the array.' },
      { step: 'Check Condition', desc: 'While left < right, evaluate the current pair or window condition.' },
      { step: 'Move Pointers', desc: 'If condition met, return result or record it. Then move left++ or right-- based on comparison.' },
      { step: 'Continue', desc: 'Repeat until pointers cross or meet the target condition.' },
    ],
    template: 'left, right = 0, len(arr) - 1\nwhile left < right:\n    current = arr[left] + arr[right]\n    if current == target:\n        return [left, right]\n    elif current < target:\n        left += 1\n    else:\n        right -= 1',
    tips: ['Works best on sorted arrays', 'Can also use fast/slow for cycle detection', 'Consider three pointers (Dutch National Flag) for 3-way partitioning'],
    traps: ['Forgetting to sort first (when needed)', 'Off-by-one errors with pointer movement', 'Not handling duplicate pairs correctly'],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
  },
  'Sliding Window': {
    name: 'Sliding Window',
    category: 'Sliding Window',
    summary: 'Maintain a window over a contiguous portion of data, expanding/shrinking it as needed. For subarray/substring problems.',
    flow: [
      { step: 'Initialize Window', desc: 'Set left pointer = 0. Define data structure to track window contents (set, map, sum).' },
      { step: 'Expand Right', desc: 'For each right pointer position, add the new element to the window and update state.' },
      { step: 'Shrink Left', desc: 'While window violates the constraint, remove leftmost element and advance left pointer.' },
      { step: 'Update Result', desc: 'At each valid window, update the answer (max/min length, count, etc.).' },
    ],
    template: 'left = 0\nfor right in range(n):\n    window.add(arr[right])\n    while not valid(window):\n        window.remove(arr[left])\n        left += 1\n    result = max(result, right - left + 1)',
    tips: ['Fixed window: just slide without shrinking', 'Variable window: always shrink when invalid', 'Use deque for sliding window max/min problems'],
    traps: ['Wrong window expansion/contraction logic', 'Not resetting auxiliary data structures', 'Missing edge case of single element window'],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(k) where k is window size or distinct elements',
  },
  'Monotonic Stack': {
    name: 'Monotonic Stack',
    category: 'Stack',
    summary: 'A stack that maintains elements in increasing or decreasing order. Useful for next greater/smaller element problems.',
    flow: [
      { step: 'Initialize Stack', desc: 'Create an empty stack. Typically store indices rather than values.' },
      { step: 'Iterate Items', desc: 'For each item, check the stack top to see if the monotonic condition is broken.' },
      { step: 'Pop While Condition', desc: 'While stack is not empty AND condition violates monotonicity, pop the top. For each pop, record the result for that index.' },
      { step: 'Push Current', desc: 'After processing, push the current index/value onto the stack.' },
    ],
    template: 'stack = []\nresult = [0] * n\nfor i in range(n):\n    while stack and arr[stack[-1]] < arr[i]:\n        idx = stack.pop()\n        result[idx] = i - idx\n    stack.append(i)',
    tips: ['Store indices, not values — you can always get values via arr[index]', 'Increasing stack for next greater, decreasing for next smaller', 'Use monotonic stack for histogram and rain water problems'],
    traps: ['Confusing increasing vs decreasing', 'Forgetting to process remaining stack items at the end', 'Wrong result array initialization'],
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
  },
  'DFS': {
    name: 'DFS (Depth-First Search)',
    category: 'DFS',
    summary: 'Explore as far as possible along each branch before backtracking. Used for tree traversal, path finding, and connected components.',
    flow: [
      { step: 'Base Case', desc: 'If current node is null/visited/out of bounds, return.' },
      { step: 'Process Node', desc: 'Handle the current node (visit, add to result, modify state).' },
      { step: 'Mark Visited', desc: 'Mark current node as visited to avoid cycles in graphs.' },
      { step: 'Recurse Neighbors', desc: 'Recursively call DFS on each child/neighbor.' },
    ],
    template: 'def dfs(node, visited):\n    if not node or node in visited:\n        return\n    visited.add(node)\n    process(node)\n    for neighbor in node.neighbors:\n        dfs(neighbor, visited)',
    tips: ['Use iterative stack to avoid recursion depth limits', 'For graphs, always use a visited set', 'Pre-order, in-order, post-order for trees'],
    traps: ['Stack overflow for deep recursion', 'Missing visited check in graphs (infinite loops)', 'Not using backtracking (restoring state) when needed'],
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V) for recursion stack + visited set',
  },
  'BFS': {
    name: 'BFS (Breadth-First Search)',
    category: 'BFS',
    summary: 'Explore all neighbors at the current depth before moving deeper. Used for shortest path, level-order, and nearest neighbor problems.',
    flow: [
      { step: 'Initialize Queue', desc: 'Create a queue and enqueue the starting node. Mark it visited.' },
      { step: 'Process Level', desc: 'While queue is not empty, dequeue a node and process it.' },
      { step: 'Enqueue Neighbors', desc: 'For each unvisited neighbor, mark visited and enqueue it.' },
      { step: 'Track Level', desc: 'If level tracking needed, process all nodes at current depth before incrementing.' },
    ],
    template: 'from collections import deque\nqueue = deque([start])\nvisited = {start}\nwhile queue:\n    node = queue.popleft()\n    process(node)\n    for neighbor in node.neighbors:\n        if neighbor not in visited:\n            visited.add(neighbor)\n            queue.append(neighbor)',
    tips: ['BFS guarantees shortest path in unweighted graphs', 'Use deque for O(1) popleft operations', 'For matrix BFS, track coordinates as tuples'],
    traps: ['Not marking visited when enqueuing (causes duplicates)', 'Wrong order of processing levels', 'BFS in weighted graphs (use Dijkstra instead)'],
    timeComplexity: 'O(V + E)',
    spaceComplexity: 'O(V) for queue + visited set',
  },
  'Dynamic Programming': {
    name: 'Dynamic Programming',
    category: 'DP',
    summary: 'Break problem into overlapping subproblems, solve each once, and store results. Used for optimization with optimal substructure.',
    flow: [
      { step: 'Define State', desc: 'Identify what dp[i] or dp[i][j] represents. This is the most critical step.' },
      { step: 'Recurrence Relation', desc: 'Find how dp[n] relates to previous states (dp[n-1], dp[n-2], etc.).' },
      { step: 'Base Cases', desc: 'Set initial values for the smallest subproblems (dp[0], dp[1], etc.).' },
      { step: 'Compute', desc: 'Iterate from base to target, filling the DP table bottom-up, or use memoization top-down.' },
    ],
    template: '# Top-down (memoization)\ndef solve(n, memo={}):\n    if n in memo: return memo[n]\n    if n <= 1: return n\n    memo[n] = solve(n-1, memo) + solve(n-2, memo)\n    return memo[n]\n\n# Bottom-up (tabulation)\ndp = [0] * (n+1)\ndp[0], dp[1] = 0, 1\nfor i in range(2, n+1):\n    dp[i] = dp[i-1] + dp[i-2]',
    tips: ['Start with brute force recursion, then add memoization', 'Identify DP by: overlapping subproblems + optimal substructure', 'Space optimization: only keep needed previous states'],
    traps: ['Wrong recurrence relation', 'Incorrect or missing base cases', 'Index out of bounds in bottom-up approach'],
    timeComplexity: 'O(n) or O(n²) depending on state dimensions',
    spaceComplexity: 'O(n) or can be O(1) with space optimization',
  },
  'Binary Search': {
    name: 'Binary Search',
    category: 'Array',
    summary: 'Repeatedly divide the search space in half. Requires sorted data or a monotonic predicate function.',
    flow: [
      { step: 'Define Range', desc: 'Set low = 0, high = n-1 (or valid search bounds).' },
      { step: 'Find Mid', desc: 'Calculate mid = low + (high - low) // 2 to avoid overflow.' },
      { step: 'Compare & Narrow', desc: 'If arr[mid] == target, return mid. If target < arr[mid], search left half. Otherwise search right half.' },
      { step: 'Continue', desc: 'Repeat until low > high (not found) or target is found.' },
    ],
    template: 'low, high = 0, len(arr) - 1\nwhile low <= high:\n    mid = low + (high - low) // 2\n    if arr[mid] == target: return mid\n    elif arr[mid] < target: low = mid + 1\n    else: high = mid - 1\nreturn -1',
    tips: ['Use mid = low + (high-low)//2 to avoid overflow', 'For lower/upper bound, adjust the condition and return value', 'Apply to any monotonic predicate, not just sorted arrays'],
    traps: ['Infinite loop from wrong mid calculation', 'Off-by-one in boundary updates', 'Not handling duplicate elements correctly'],
    timeComplexity: 'O(log n)',
    spaceComplexity: 'O(1)',
  },
};

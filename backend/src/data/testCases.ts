export interface TestCaseData {
  id: string;
  slug: string;
  input: string;
  expected_output: string;
  is_hidden: boolean;
}

export const TEST_CASES: Record<string, Omit<TestCaseData, 'slug'>[]> = {
  'two-sum': [
    { id: '1', input: 'nums = [2,7,11,15], target = 9', expected_output: '[0,1]', is_hidden: false },
    { id: '2', input: 'nums = [3,2,4], target = 6', expected_output: '[1,2]', is_hidden: true },
    { id: '3', input: 'nums = [3,3], target = 6', expected_output: '[0,1]', is_hidden: true },
  ],
  'best-time-to-buy-and-sell-stock': [
    { id: '1', input: 'prices = [7,1,5,3,6,4]', expected_output: '5', is_hidden: false },
    { id: '2', input: 'prices = [7,6,4,3,1]', expected_output: '0', is_hidden: true },
  ],
  'contains-duplicate': [
    { id: '1', input: 'nums = [1,2,3,1]', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'nums = [1,2,3,4]', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'nums = [1,1,1,3,3,4,3,2,4,2]', expected_output: 'true', is_hidden: true },
  ],
  'maximum-subarray': [
    { id: '1', input: 'nums = [-2,1,-3,4,-1,2,1,-5,4]', expected_output: '6', is_hidden: false },
    { id: '2', input: 'nums = [1]', expected_output: '1', is_hidden: true },
    { id: '3', input: 'nums = [5,4,-1,7,8]', expected_output: '23', is_hidden: true },
  ],
  'valid-parentheses': [
    { id: '1', input: 's = "()"', expected_output: 'true', is_hidden: false },
    { id: '2', input: 's = "()[]{}"', expected_output: 'true', is_hidden: true },
    { id: '3', input: 's = "(]"', expected_output: 'false', is_hidden: true },
  ],
  'reverse-linked-list': [
    { id: '1', input: 'head = [1,2,3,4,5]', expected_output: '[5,4,3,2,1]', is_hidden: false },
    { id: '2', input: 'head = [1,2]', expected_output: '[2,1]', is_hidden: true },
  ],
  'merge-two-sorted-lists': [
    { id: '1', input: 'list1 = [1,2,4], list2 = [1,3,4]', expected_output: '[1,1,2,3,4,4]', is_hidden: false },
    { id: '2', input: 'list1 = [], list2 = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-search': [
    { id: '1', input: 'nums = [-1,0,3,5,9,12], target = 9', expected_output: '4', is_hidden: false },
    { id: '2', input: 'nums = [-1,0,3,5,9,12], target = 2', expected_output: '-1', is_hidden: true },
  ],
  'valid-anagram': [
    { id: '1', input: 's = "anagram", t = "nagaram"', expected_output: 'true', is_hidden: false },
    { id: '2', input: 's = "rat", t = "car"', expected_output: 'false', is_hidden: true },
    { id: '3', input: 's = "", t = ""', expected_output: 'true', is_hidden: true },
    { id: '4', input: 's = "a", t = "ab"', expected_output: 'false', is_hidden: true },
  ],
  'valid-palindrome': [
    { id: '1', input: 's = "A man, a plan, a canal: Panama"', expected_output: 'true', is_hidden: false },
    { id: '2', input: 's = "race a car"', expected_output: 'false', is_hidden: true },
    { id: '3', input: 's = " "', expected_output: 'true', is_hidden: true },
  ],
  'reverse-string': [
    { id: '1', input: 's = ["h","e","l","l","o"]', expected_output: '["o","l","l","e","h"]', is_hidden: false },
    { id: '2', input: 's = ["H","a","n","n","a","h"]', expected_output: '["h","a","n","n","a","H"]', is_hidden: true },
  ],
  'longest-common-prefix': [
    { id: '1', input: 'strs = ["flower","flow","flight"]', expected_output: '"fl"', is_hidden: false },
    { id: '2', input: 'strs = ["dog","racecar","car"]', expected_output: '""', is_hidden: true },
  ],
  'implement-strstr': [
    { id: '1', input: 'haystack = "hello", needle = "ll"', expected_output: '2', is_hidden: false },
    { id: '2', input: 'haystack = "aaaaa", needle = "bba"', expected_output: '-1', is_hidden: true },
    { id: '3', input: 'haystack = "", needle = ""', expected_output: '0', is_hidden: true },
  ],
  'find-pivot-index': [
    { id: '1', input: 'nums = [1,7,3,6,5,6]', expected_output: '3', is_hidden: false },
    { id: '2', input: 'nums = [1,2,3]', expected_output: '-1', is_hidden: true },
    { id: '3', input: 'nums = [2,1,-1]', expected_output: '0', is_hidden: true },
  ],
  'product-of-array-except-self': [
    { id: '1', input: 'nums = [1,2,3,4]', expected_output: '[24,12,8,6]', is_hidden: false },
    { id: '2', input: 'nums = [-1,1,0,-3,3]', expected_output: '[0,0,9,0,0]', is_hidden: true },
  ],
  '3sum': [
    { id: '1', input: 'nums = [-1,0,1,2,-1,-4]', expected_output: '[[-1,-1,2],[-1,0,1]]', is_hidden: false },
    { id: '2', input: 'nums = [0,1,1]', expected_output: '[]', is_hidden: true },
    { id: '3', input: 'nums = [0,0,0]', expected_output: '[[0,0,0]]', is_hidden: true },
  ],
  'container-with-most-water': [
    { id: '1', input: 'height = [1,8,6,2,5,4,8,3,7]', expected_output: '49', is_hidden: false },
    { id: '2', input: 'height = [1,1]', expected_output: '1', is_hidden: true },
  ],
  'rotate-array': [
    { id: '1', input: 'nums = [1,2,3,4,5,6,7], k = 3', expected_output: '[5,6,7,1,2,3,4]', is_hidden: false },
    { id: '2', input: 'nums = [-1,-100,3,99], k = 2', expected_output: '[3,99,-1,-100]', is_hidden: true },
  ],
  'merge-intervals': [
    { id: '1', input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', expected_output: '[[1,6],[8,10],[15,18]]', is_hidden: false },
    { id: '2', input: 'intervals = [[1,4],[4,5]]', expected_output: '[[1,5]]', is_hidden: true },
  ],
  'happy-number': [
    { id: '1', input: 'n = 19', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'n = 2', expected_output: 'false', is_hidden: true },
  ],
  'isomorphic-strings': [
    { id: '1', input: 's = "egg", t = "add"', expected_output: 'true', is_hidden: false },
    { id: '2', input: 's = "foo", t = "bar"', expected_output: 'false', is_hidden: true },
    { id: '3', input: 's = "paper", t = "title"', expected_output: 'true', is_hidden: true },
  ],
  'intersection-of-two-arrays': [
    { id: '1', input: 'nums1 = [1,2,2,1], nums2 = [2,2]', expected_output: '[2]', is_hidden: false },
    { id: '2', input: 'nums1 = [4,9,5], nums2 = [9,4,9,8,4]', expected_output: '[9,4]', is_hidden: true },
  ],
  'longest-substring-without-repeating-characters': [
    { id: '1', input: 's = "abcabcbb"', expected_output: '3', is_hidden: false },
    { id: '2', input: 's = "bbbbb"', expected_output: '1', is_hidden: true },
    { id: '3', input: 's = "pwwkew"', expected_output: '3', is_hidden: true },
  ],
  'group-anagrams': [
    { id: '1', input: 'strs = ["eat","tea","tan","ate","nat","bat"]', expected_output: '[["bat"],["nat","tan"],["ate","eat","tea"]]', is_hidden: false },
    { id: '2', input: 'strs = [""]', expected_output: '[[""]]', is_hidden: true },
    { id: '3', input: 'strs = ["a"]', expected_output: '[["a"]]', is_hidden: true },
  ],
  'decode-string': [
    { id: '1', input: 's = "3[a]2[bc]"', expected_output: '"aaabcbc"', is_hidden: false },
    { id: '2', input: 's = "3[a2[c]]"', expected_output: '"accaccacc"', is_hidden: true },
    { id: '3', input: 's = "2[abc]3[cd]ef"', expected_output: '"abcabccdcdcdef"', is_hidden: true },
  ],
  'palindromic-substrings': [
    { id: '1', input: 's = "abc"', expected_output: '3', is_hidden: false },
    { id: '2', input: 's = "aaa"', expected_output: '6', is_hidden: true },
  ],
  'daily-temperatures': [
    { id: '1', input: 'temperatures = [73,74,75,71,69,72,76,73]', expected_output: '[1,1,4,2,1,1,0,0]', is_hidden: false },
    { id: '2', input: 'temperatures = [30,40,50,60]', expected_output: '[1,1,1,0]', is_hidden: true },
    { id: '3', input: 'temperatures = [30,60,90]', expected_output: '[1,1,0]', is_hidden: true },
  ],
  'baseball-game': [
    { id: '1', input: 'ops = ["5","2","C","D","+"]', expected_output: '30', is_hidden: false },
    { id: '2', input: 'ops = ["5","-2","4","C","D","9","+","+"]', expected_output: '27', is_hidden: true },
  ],
  'backspace-string-compare': [
    { id: '1', input: 's = "ab#c", t = "ad#c"', expected_output: 'true', is_hidden: false },
    { id: '2', input: 's = "ab##", t = "c#d#"', expected_output: 'true', is_hidden: true },
    { id: '3', input: 's = "a#c", t = "b"', expected_output: 'false', is_hidden: true },
  ],
  'number-of-islands': [
    { id: '1', input: 'grid = [["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]', expected_output: '1', is_hidden: false },
    { id: '2', input: 'grid = [["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]', expected_output: '3', is_hidden: true },
  ],
  'clone-graph': [
    { id: '1', input: 'adjList = [[2,4],[1,3],[2,4],[1,3]]', expected_output: '[[2,4],[1,3],[2,4],[1,3]]', is_hidden: false },
    { id: '2', input: 'adjList = [[]]', expected_output: '[[]]', is_hidden: true },
  ],
  'course-schedule': [
    { id: '1', input: 'numCourses = 2, prerequisites = [[1,0]]', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'numCourses = 2, prerequisites = [[1,0],[0,1]]', expected_output: 'false', is_hidden: true },
  ],
  'maximum-depth-of-binary-tree': [
    { id: '1', input: 'root = [3,9,20,null,null,15,7]', expected_output: '3', is_hidden: false },
    { id: '2', input: 'root = [1,null,2]', expected_output: '2', is_hidden: true },
  ],
  'invert-binary-tree': [
    { id: '1', input: 'root = [4,2,7,1,3,6,9]', expected_output: '[4,7,2,9,6,3,1]', is_hidden: false },
    { id: '2', input: 'root = [2,1,3]', expected_output: '[2,3,1]', is_hidden: true },
  ],
  'same-tree': [
    { id: '1', input: 'p = [1,2,3], q = [1,2,3]', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'p = [1,2], q = [1,null,2]', expected_output: 'false', is_hidden: true },
    { id: '3', input: 'p = [1,2,1], q = [1,1,2]', expected_output: 'false', is_hidden: true },
  ],
  'validate-binary-search-tree': [
    { id: '1', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
  ],
  'lowest-common-ancestor-of-a-binary-search-tree': [
    { id: '1', input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8', expected_output: '6', is_hidden: false },
    { id: '2', input: 'root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4', expected_output: '2', is_hidden: true },
  ],
  'kth-smallest-element-in-a-bst': [
    { id: '1', input: 'root = [3,1,4,null,2], k = 1', expected_output: '1', is_hidden: false },
    { id: '2', input: 'root = [5,3,6,2,4,null,null,1], k = 3', expected_output: '3', is_hidden: true },
  ],
  'linked-list-cycle': [
    { id: '1', input: 'head = [3,2,0,-4], pos = 1', expected_output: 'true', is_hidden: false },
    { id: '2', input: 'head = [1,2], pos = 0', expected_output: 'true', is_hidden: true },
    { id: '3', input: 'head = [1], pos = -1', expected_output: 'false', is_hidden: true },
  ],
  'middle-of-linked-list': [
    { id: '1', input: 'head = [1,2,3,4,5]', expected_output: '[3,4,5]', is_hidden: false },
    { id: '2', input: 'head = [1,2,3,4,5,6]', expected_output: '[4,5,6]', is_hidden: true },
  ],

  'find-largest-element': [
    { id: '460', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '461', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '462', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'find-smallest-element': [
    { id: '463', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '464', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '465', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'find-second-largest': [
    { id: '466', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '467', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '468', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'find-second-smallest': [
    { id: '469', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '470', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '471', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'reverse-array': [
    { id: '472', input: 's = "abc"', expected_output: '"cba"', is_hidden: false },
    { id: '473', input: 's = "a"', expected_output: '"a"', is_hidden: true },
    { id: '474', input: 's = ""', expected_output: '""', is_hidden: true },
  ],
  'sum-of-elements': [
    { id: '475', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '476', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '477', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'average-of-elements': [
    { id: '478', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '479', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '480', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-even-numbers': [
    { id: '481', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '482', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '483', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-odd-numbers': [
    { id: '484', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '485', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '486', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'max-difference': [
    { id: '487', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '488', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '489', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'min-difference': [
    { id: '490', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '491', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '492', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'linear-search': [
    { id: '493', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '494', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '495', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],

  'check-if-sorted': [
    { id: '499', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '500', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '501', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'array-palindrome': [
    { id: '502', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '503', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '504', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'count-frequency': [
    { id: '505', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '506', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '507', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'remove-duplicates-from-array': [
    { id: '508', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '509', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '510', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'find-unique-elements': [
    { id: '511', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '512', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '513', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-duplicates': [
    { id: '514', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '515', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '516', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'left-rotate-by-1': [
    { id: '517', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '518', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '519', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'right-rotate-by-1': [
    { id: '520', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '521', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '522', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'move-negatives-beginning': [
    { id: '523', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '524', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '525', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'rearrange-positive-negative': [
    { id: '526', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '527', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '528', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'minimum-subarray-sum': [
    { id: '529', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '530', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '531', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'subarray-given-sum': [
    { id: '532', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '533', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '534', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'count-subarrays-sum-k': [
    { id: '535', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '536', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '537', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'longest-subarray-sum-k': [
    { id: '538', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '539', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '540', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'shortest-subarray-sum-k': [
    { id: '541', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '542', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '543', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-array': [
    { id: '544', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '545', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '546', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'suffix-sum-array': [
    { id: '547', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '548', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '549', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'count-zero-sum-subarrays': [
    { id: '550', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '551', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '552', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'largest-zero-sum-subarray': [
    { id: '553', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '554', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '555', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'count-positive-sum-subarrays': [
    { id: '556', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '557', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '558', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'count-negative-sum-subarrays': [
    { id: '559', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '560', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '561', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'maximum-product-subarray': [
    { id: '562', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '563', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '564', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'minimum-product-subarray': [
    { id: '565', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '566', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '567', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'circular-subarray-sum': [
    { id: '568', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '569', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '570', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'count-subarrays-divisible-by-k': [
    { id: '571', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '572', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '573', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'longest-increasing-subarray': [
    { id: '574', input: 'nums = [10,9,2,5,3,7,101,18]', expected_output: '4', is_hidden: false },
    { id: '575', input: 'nums = [1,2,3]', expected_output: '3', is_hidden: true },
    { id: '576', input: 'nums = [3,2,1]', expected_output: '1', is_hidden: true },
  ],
  'longest-decreasing-subarray': [
    { id: '577', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '578', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '579', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'maximum-average-subarray-i': [
    { id: '580', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '581', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '582', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'kth-largest-element': [
    { id: '583', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '584', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '585', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'kth-smallest-element': [
    { id: '586', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '587', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '588', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'merge-two-sorted-arrays': [
    { id: '589', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '590', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '591', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'intersection-of-arrays': [
    { id: '592', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '593', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '594', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'union-of-arrays': [
    { id: '595', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '596', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '597', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-missing-number': [
    { id: '598', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '599', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '600', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-repeating-number': [
    { id: '601', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '602', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '603', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-missing-and-repeating': [
    { id: '604', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '605', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '606', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'majority-element-ii': [
    { id: '607', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '608', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '609', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'insert-interval': [
    { id: '610', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '611', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '612', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'meeting-rooms': [
    { id: '613', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '614', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '615', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'search-rotated-array': [
    { id: '616', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '617', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '618', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'peak-element': [
    { id: '619', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '620', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '621', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'ceiling-of-element': [
    { id: '622', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '623', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '624', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'floor-of-element': [
    { id: '625', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '626', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '627', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'pair-given-sum': [
    { id: '628', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '629', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '630', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  '4sum': [
    { id: '631', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '632', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '633', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'remove-duplicates-sorted-ii': [
    { id: '634', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '635', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '636', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'remove-element': [
    { id: '637', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '638', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '639', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'squares-sorted-array': [
    { id: '640', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '641', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '642', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'pair-difference-k': [
    { id: '643', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '644', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '645', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'closest-pair-sum': [
    { id: '646', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '647', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '648', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'closest-triplet-sum': [
    { id: '649', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '650', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '651', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'partition-array': [
    { id: '652', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '653', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '654', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'minimum-window-k': [
    { id: '655', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '656', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '657', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'first-negative-window': [
    { id: '658', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '659', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '660', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-distinct-window': [
    { id: '661', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '662', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '663', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'longest-unique-subarray': [
    { id: '664', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '665', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '666', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'minimum-window-sum-k': [
    { id: '667', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '668', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '669', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'maximum-sum-window-k': [
    { id: '670', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '671', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '672', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'count-anagrams-window': [
    { id: '673', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '674', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '675', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'longest-substring-wt-repeating': [
    { id: '676', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '677', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '678', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'longest-substring-k-distinct': [
    { id: '679', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '680', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '681', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'sliding-window-median': [
    { id: '682', input: 'nums = [1,3,-1,-3,5], k = 3', expected_output: '[3,3,5,5,6]', is_hidden: false },
    { id: '683', input: 'nums = [1], k = 1', expected_output: '[1]', is_hidden: true },
    { id: '684', input: 'nums = [1,-1], k = 1', expected_output: '[1,-1]', is_hidden: true },
  ],
  'max-consecutive-ones': [
    { id: '685', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '686', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '687', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'fruit-into-baskets': [
    { id: '688', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '689', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '690', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'best-time-to-buy-sell-stock-ii': [
    { id: '691', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '692', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '693', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'jump-game': [
    { id: '694', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '695', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '696', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'jump-game-ii': [
    { id: '697', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '698', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '699', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'gas-station': [
    { id: '700', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '701', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '702', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'longest-consecutive-sequence': [
    { id: '703', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '704', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '705', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-inversions': [
    { id: '706', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '707', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '708', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'median-two-sorted-arrays': [
    { id: '709', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '710', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '711', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'split-array-largest-sum': [
    { id: '712', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '713', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '714', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'largest-rectangle-histogram': [
    { id: '715', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '716', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '717', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'find-length-string': [
    { id: '718', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '719', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '720', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-vowels': [
    { id: '721', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '722', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '723', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-consonants': [
    { id: '724', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '725', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '726', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-digits': [
    { id: '727', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '728', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '729', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-alphabets': [
    { id: '730', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '731', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '732', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-special-chars': [
    { id: '733', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '734', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '735', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'to-uppercase': [
    { id: '736', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '737', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '738', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'to-lowercase': [
    { id: '739', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '740', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '741', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'toggle-case': [
    { id: '742', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '743', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '744', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'remove-spaces': [
    { id: '745', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '746', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '747', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'remove-extra-spaces': [
    { id: '748', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '749', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '750', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'count-words': [
    { id: '751', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '752', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '753', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'longest-word': [
    { id: '754', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '755', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '756', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'shortest-word': [
    { id: '757', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '758', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '759', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'reverse-words-sentence': [
    { id: '760', input: 's = "abc"', expected_output: '"cba"', is_hidden: false },
    { id: '761', input: 's = "a"', expected_output: '"a"', is_hidden: true },
    { id: '762', input: 's = ""', expected_output: '""', is_hidden: true },
  ],
  'char-frequency': [
    { id: '763', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '764', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '765', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'first-occurrence': [
    { id: '766', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '767', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '768', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'last-occurrence': [
    { id: '769', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '770', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '771', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'all-occurrences': [
    { id: '772', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '773', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '774', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'replace-character': [
    { id: '775', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '776', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '777', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'remove-character': [
    { id: '778', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '779', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '780', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'check-substring': [
    { id: '781', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '782', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '783', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'extract-substring': [
    { id: '784', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '785', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '786', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'concatenate-strings': [
    { id: '787', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '788', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '789', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'compare-strings': [
    { id: '790', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '791', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '792', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'check-equality': [
    { id: '793', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '794', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '795', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'first-non-repeating': [
    { id: '796', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '797', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '798', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'first-repeating': [
    { id: '799', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '800', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '801', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'remove-duplicate-chars': [
    { id: '802', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '803', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '804', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'sort-characters': [
    { id: '805', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '806', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '807', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'check-pangram': [
    { id: '808', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '809', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '810', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'check-isogram': [
    { id: '811', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '812', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '813', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-uppercase': [
    { id: '814', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '815', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '816', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-lowercase': [
    { id: '817', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '818', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '819', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'reverse-each-word': [
    { id: '820', input: 's = "abc"', expected_output: '"cba"', is_hidden: false },
    { id: '821', input: 's = "a"', expected_output: '"a"', is_hidden: true },
    { id: '822', input: 's = ""', expected_output: '""', is_hidden: true },
  ],
  'print-ascii-values': [
    { id: '823', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '824', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '825', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'largest-character': [
    { id: '826', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '827', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '828', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'longest-common-suffix': [
    { id: '829', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '830', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '831', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'run-length-encoding': [
    { id: '832', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '833', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '834', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'check-string-rotation': [
    { id: '835', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '836', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '837', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rotate-string-left': [
    { id: '838', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '839', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '840', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rotate-string-right': [
    { id: '841', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '842', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '843', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'longest-palindromic-substring': [
    { id: '844', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '845', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '846', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'longest-palindromic-subsequence': [
    { id: '847', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '848', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '849', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'min-insertions-palindrome': [
    { id: '850', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '851', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '852', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'min-deletions-palindrome': [
    { id: '853', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '854', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '855', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'longest-substring-k-distinct-chars': [
    { id: '856', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '857', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '858', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'find-all-anagrams': [
    { id: '859', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '860', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '861', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'permutation-in-string': [
    { id: '862', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '863', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '864', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],

  'word-pattern': [
    { id: '868', input: 'edges = [[0,0],[0,1]]', expected_output: '1', is_hidden: false },
    { id: '869', input: 'edges = []', expected_output: '0', is_hidden: true },
    { id: '870', input: 'edges = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'most-frequent-char': [
    { id: '871', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '872', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '873', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'least-frequent-char': [
    { id: '874', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '875', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '876', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'character-replacement': [
    { id: '877', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '878', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '879', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rearrange-characters': [
    { id: '880', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '881', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '882', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rearrange-no-adjacent': [
    { id: '883', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '884', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '885', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-distinct-substrings': [
    { id: '886', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '887', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '888', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'smallest-distinct-window': [
    { id: '889', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '890', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '891', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'longest-repeating-replacement': [
    { id: '892', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '893', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '894', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'max-vowels-substring': [
    { id: '895', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '896', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '897', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'count-binary-substrings': [
    { id: '898', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '899', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '900', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'longest-balanced-binary': [
    { id: '901', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '902', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '903', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'remove-consecutive-duplicates': [
    { id: '904', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '905', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '906', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'remove-adjacent-duplicates': [
    { id: '907', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '908', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '909', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'encode-string': [
    { id: '910', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '911', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '912', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'validate-email': [
    { id: '913', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '914', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '915', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'validate-password': [
    { id: '916', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '917', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '918', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'validate-phone': [
    { id: '919', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '920', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '921', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'string-hashing': [
    { id: '922', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '923', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '924', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'lexicographically-smallest': [
    { id: '925', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '926', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '927', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'kmp-pattern-matching': [
    { id: '928', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '929', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '930', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'rabin-karp': [
    { id: '931', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '932', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '933', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'z-algorithm': [
    { id: '934', input: 's = "aaaa"', expected_output: '[4,3,2,1]', is_hidden: false },
    { id: '935', input: 's = "a"', expected_output: '[1]', is_hidden: true },
    { id: '936', input: 's = "abc"', expected_output: '[3,0,0]', is_hidden: true },
  ],
  'boyer-moore': [
    { id: '937', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '938', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '939', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'finite-automata': [
    { id: '940', input: 'edges = [[0,0],[0,1]]', expected_output: '1', is_hidden: false },
    { id: '941', input: 'edges = []', expected_output: '0', is_hidden: true },
    { id: '942', input: 'edges = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'longest-common-subsequence': [
    { id: '943', input: 's1 = "abcde", s2 = "ace"', expected_output: '3', is_hidden: false },
    { id: '944', input: 's1 = "abc", s2 = "def"', expected_output: '0', is_hidden: true },
    { id: '945', input: 's1 = "", s2 = "abc"', expected_output: '0', is_hidden: true },
  ],
  'longest-common-substring': [
    { id: '946', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '947', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '948', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'shortest-common-supersequence': [
    { id: '949', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '950', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '951', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'word-break': [
    { id: '952', input: 's = "leetcode", wordDict = ["leet","code"]', expected_output: 'true', is_hidden: false },
    { id: '953', input: 's = "a", wordDict = ["b"]', expected_output: 'false', is_hidden: true },
    { id: '954', input: 's = "", wordDict = []', expected_output: 'true', is_hidden: true },
  ],
  'word-break-ii': [
    { id: '955', input: 's = "leetcode", wordDict = ["leet","code"]', expected_output: 'true', is_hidden: false },
    { id: '956', input: 's = "a", wordDict = ["b"]', expected_output: 'false', is_hidden: true },
    { id: '957', input: 's = "", wordDict = []', expected_output: 'true', is_hidden: true },
  ],
  'decode-ways': [
    { id: '958', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '959', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '960', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'interleaving-string': [
    { id: '961', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '962', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '963', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'scramble-string': [
    { id: '964', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '965', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '966', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'palindrome-partitioning': [
    { id: '967', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '968', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '969', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'palindrome-partitioning-ii': [
    { id: '970', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '971', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '972', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'wildcard-matching': [
    { id: '973', input: 'edges = [[0,0],[0,1]]', expected_output: '1', is_hidden: false },
    { id: '974', input: 'edges = []', expected_output: '0', is_hidden: true },
    { id: '975', input: 'edges = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'alien-dictionary': [
    { id: '976', input: 'words = ["wrt","wrf","er","ett","rftt"]', expected_output: '"wertf"', is_hidden: false },
    { id: '977', input: 'words = ["z","x"]', expected_output: '"zx"', is_hidden: true },
    { id: '978', input: 'words = ["z","x","z"]', expected_output: '""', is_hidden: true },
  ],
  'trie-word-search': [
    { id: '979', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '980', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '981', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'trie-prefix-matching': [
    { id: '982', input: 'words = ["app","apple"], search = "app"', expected_output: 'true', is_hidden: false },
    { id: '983', input: 'words = ["cat"], search = "car"', expected_output: 'false', is_hidden: true },
    { id: '984', input: 'words = [], search = "a"', expected_output: 'false', is_hidden: true },
  ],
  'stream-of-characters': [
    { id: '985', input: 'nums = [1,2,3]', expected_output: '2', is_hidden: false },
    { id: '986', input: 'nums = [1]', expected_output: '1', is_hidden: true },
    { id: '987', input: 'nums = [2,1]', expected_output: '1.5', is_hidden: true },
  ],
  'suffix-array': [
    { id: '988', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '989', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '990', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'suffix-tree': [
    { id: '991', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '992', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '993', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'suffix-automaton': [
    { id: '994', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '995', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '996', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'longest-duplicate-substring': [
    { id: '997', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '998', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '999', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'repeated-dna-sequences': [
    { id: '1000', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1001', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1002', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'short-encoding-words': [
    { id: '1003', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1004', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1005', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'remove-invalid-parentheses': [
    { id: '1006', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1007', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1008', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'basic-calculator': [
    { id: '1009', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1010', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1011', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'expression-evaluation': [
    { id: '1012', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1013', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1014', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'boolean-expression-parsing': [
    { id: '1015', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1016', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1017', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-different-palindromic-subseq': [
    { id: '1018', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1019', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1020', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'strange-printer': [
    { id: '1021', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1022', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1023', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'min-ascii-delete-sum': [
    { id: '1024', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1025', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1026', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'string-transformation': [
    { id: '1027', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1028', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1029', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'lexicographically-smallest-rotation': [
    { id: '1030', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1031', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1032', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'shortest-palindrome': [
    { id: '1033', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '1034', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '1035', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'count-frequency-array-hash': [
    { id: '1036', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1037', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1038', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-frequency-string-hash': [
    { id: '1039', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1040', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1041', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'first-non-repeating-hash': [
    { id: '1042', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1043', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1044', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'first-repeating-hash': [
    { id: '1045', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1046', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1047', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-all-duplicates': [
    { id: '1048', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1049', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1050', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-all-unique': [
    { id: '1051', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1052', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1053', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'check-arrays-equal': [
    { id: '1054', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1055', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1056', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'check-two-anagrams': [
    { id: '1057', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1058', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1059', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'word-frequency': [
    { id: '1060', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1061', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1062', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-distinct-hash': [
    { id: '1063', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1064', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1065', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'max-freq-element': [
    { id: '1066', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1067', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1068', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'min-freq-element': [
    { id: '1069', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1070', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1071', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'remove-dups-array-hash': [
    { id: '1072', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1073', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1074', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'remove-dups-string-hash': [
    { id: '1075', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1076', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1077', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'check-array-contains-dups': [
    { id: '1078', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1079', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1080', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'common-elements-two-arrays': [
    { id: '1081', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1082', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1083', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'union-of-two-arrays': [
    { id: '1084', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1085', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1086', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'intersection-two-arrays-hash': [
    { id: '1087', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1088', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1089', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'check-subset': [
    { id: '1090', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1091', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1092', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'find-missing-number-hash': [
    { id: '1093', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1094', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1095', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-repeating-number-hash': [
    { id: '1096', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1097', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1098', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-occurrences-target': [
    { id: '1099', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1100', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1101', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'majority-element-n2': [
    { id: '1102', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1103', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1104', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'majority-element-n3': [
    { id: '1105', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1106', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1107', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'group-identical-elements': [
    { id: '1108', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1109', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1110', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'pair-given-sum-hash': [
    { id: '1111', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1112', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1113', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'pair-given-diff': [
    { id: '1114', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1115', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1116', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-pairs-given-sum': [
    { id: '1117', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1118', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1119', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'count-pairs-given-diff': [
    { id: '1120', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1121', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1122', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'find-symmetric-pairs': [
    { id: '1123', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1124', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1125', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'palindrome-permutation': [
    { id: '1126', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '1127', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '1128', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'most-freq-char-hash': [
    { id: '1129', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '1130', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '1131', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'least-freq-char-hash': [
    { id: '1132', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '1133', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '1134', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'sort-by-frequency': [
    { id: '1135', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1136', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1137', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'kth-most-frequent': [
    { id: '1138', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '1139', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '1140', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  '3sum-hashing': [
    { id: '1141', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1142', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1143', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  '4sum-hashing': [
    { id: '1144', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1145', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1146', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'longest-subarray-sum-k-hash': [
    { id: '1147', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1148', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1149', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'count-subarrays-sum-k-hash': [
    { id: '1150', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1151', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1152', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'largest-zero-sum-subarray-hash': [
    { id: '1153', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1154', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1155', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'count-zero-sum-subarrays-hash': [
    { id: '1156', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1157', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1158', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'subarray-divisible-k-hash': [
    { id: '1159', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1160', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1161', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-subarrays-divisible-k-hash': [
    { id: '1162', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1163', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1164', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'longest-equal-0-1-subarray': [
    { id: '1165', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1166', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1167', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-equal-0-1-subarrays': [
    { id: '1168', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1169', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1170', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'find-duplicate-number-hash': [
    { id: '1171', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1172', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1173', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-all-dups-in-array': [
    { id: '1174', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1175', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1176', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-disappeared-numbers': [
    { id: '1177', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1178', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1179', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'first-unique-number': [
    { id: '1180', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1181', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1182', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'design-hashset': [
    { id: '1183', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1184', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1185', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'design-hashmap': [
    { id: '1186', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1187', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1188', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'find-anagram-indices': [
    { id: '1189', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1190', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1191', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'word-pattern-matching-hash': [
    { id: '1192', input: 'edges = [[0,0],[0,1]]', expected_output: '1', is_hidden: false },
    { id: '1193', input: 'edges = []', expected_output: '0', is_hidden: true },
    { id: '1194', input: 'edges = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'longest-substring-no-repeat-hash': [
    { id: '1195', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '1196', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '1197', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'longest-substring-k-distinct-hash': [
    { id: '1198', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '1199', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '1200', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'count-distinct-window-hash': [
    { id: '1201', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1202', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1203', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'repeated-dna-hash': [
    { id: '1204', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1205', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1206', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'top-k-frequent-words': [
    { id: '1207', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '1208', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '1209', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'sort-chars-by-frequency': [
    { id: '1210', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1211', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1212', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'relative-sort-array': [
    { id: '1213', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1214', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1215', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'string-into-palindrome': [
    { id: '1216', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '1217', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '1218', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'min-deletions-unique-freq': [
    { id: '1219', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1220', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1221', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'count-good-pairs': [
    { id: '1222', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1223', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1224', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-bad-pairs': [
    { id: '1225', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1226', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1227', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'equivalent-domino-pairs': [
    { id: '1228', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1229', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1230', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'find-uncommon-words': [
    { id: '1231', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1232', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1233', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'count-pairs-divisible-k': [
    { id: '1234', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1235', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1236', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'count-nice-pairs': [
    { id: '1237', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1238', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1239', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'find-town-judge': [
    { id: '1240', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1241', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1242', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'substring-concat-words': [
    { id: '1243', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '1244', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '1245', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'sliding-window-median-hash': [
    { id: '1246', input: 'nums = [1,3,-1,-3,5], k = 3', expected_output: '[3,3,5,5,6]', is_hidden: false },
    { id: '1247', input: 'nums = [1], k = 1', expected_output: '[1]', is_hidden: true },
    { id: '1248', input: 'nums = [1,-1], k = 1', expected_output: '[1,-1]', is_hidden: true },
  ],
  'randomized-set': [
    { id: '1249', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1250', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1251', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'randomized-collection': [
    { id: '1252', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1253', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1254', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'max-points-on-line': [
    { id: '1255', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1256', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1257', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'longest-arithmetic-subsequence': [
    { id: '1258', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1259', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1260', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'longest-fibonacci-subsequence': [
    { id: '1261', input: 'n = 5', expected_output: '5', is_hidden: false },
    { id: '1262', input: 'n = 0', expected_output: '0', is_hidden: true },
    { id: '1263', input: 'n = 7', expected_output: '13', is_hidden: true },
  ],
  'count-triplets-xor': [
    { id: '1264', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1265', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1266', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'subarrays-xor-k': [
    { id: '1267', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1268', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1269', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'count-triplets-equal-xor': [
    { id: '1270', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1271', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1272', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'distinct-echo-substrings': [
    { id: '1273', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '1274', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '1275', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'longest-duplicate-substring-hash': [
    { id: '1276', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '1277', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '1278', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'rabin-karp-hash': [
    { id: '1279', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '1280', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '1281', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'rolling-hash': [
    { id: '1282', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '1283', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '1284', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'polynomial-hashing': [
    { id: '1285', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1286', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1287', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'double-hashing': [
    { id: '1288', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1289', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1290', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'consistent-hashing': [
    { id: '1291', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1292', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1293', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rehashing': [
    { id: '1294', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1295', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1296', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'hash-collision-handling': [
    { id: '1297', input: 'nums = [10,9,2,5,3,7,101,18]', expected_output: '4', is_hidden: false },
    { id: '1298', input: 'nums = [1,2,3]', expected_output: '3', is_hidden: true },
    { id: '1299', input: 'nums = [3,2,1]', expected_output: '1', is_hidden: true },
  ],
  'design-custom-hashmap': [
    { id: '1300', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1301', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1302', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'design-custom-hashset': [
    { id: '1303', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1304', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1305', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'design-url-shortener': [
    { id: '1306', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1307', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1308', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'tinyurl-encoder-decoder': [
    { id: '1309', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1310', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1311', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'detect-cycle-hashing': [
    { id: '1312', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1313', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1314', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'clone-graph-hashing': [
    { id: '1315', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '1316', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '1317', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'word-ladder': [
    { id: '1318', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1319', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1320', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'palindrome-pairs': [
    { id: '1321', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '1322', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '1323', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'count-distinct-subseq-hash': [
    { id: '1324', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1325', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1326', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'string-matching-hash': [
    { id: '1327', input: 'edges = [[0,0],[0,1]]', expected_output: '1', is_hidden: false },
    { id: '1328', input: 'edges = []', expected_output: '0', is_hidden: true },
    { id: '1329', input: 'edges = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'sparse-matrix-mult-hash': [
    { id: '1330', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '1331', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '1332', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'recursion-factorial-1': [
    { id: '1333', input: 'n = 5', expected_output: '120', is_hidden: false },
    { id: '1334', input: 'n = 0', expected_output: '1', is_hidden: true },
    { id: '1335', input: 'n = 7', expected_output: '5040', is_hidden: true },
  ],
  'recursion-fibonacci-number-2': [
    { id: '1336', input: 'n = 5', expected_output: '5', is_hidden: false },
    { id: '1337', input: 'n = 0', expected_output: '0', is_hidden: true },
    { id: '1338', input: 'n = 7', expected_output: '13', is_hidden: true },
  ],
  'recursion-power-function-3': [
    { id: '1339', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1340', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1341', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'recursion-sum-of-digits-4': [
    { id: '1342', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1343', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1344', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'recursion-reverse-a-string-recursively-5': [
    { id: '1345', input: 's = "abc"', expected_output: '"cba"', is_hidden: false },
    { id: '1346', input: 's = "a"', expected_output: '"a"', is_hidden: true },
    { id: '1347', input: 's = ""', expected_output: '""', is_hidden: true },
  ],
  'recursion-print-numbers-1-to-n-6': [
    { id: '1348', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1349', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1350', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'recursion-tower-of-hanoi-7': [
    { id: '1351', input: 'n = 2', expected_output: '3', is_hidden: false },
    { id: '1352', input: 'n = 3', expected_output: '7', is_hidden: true },
    { id: '1353', input: 'n = 1', expected_output: '1', is_hidden: true },
  ],
  'recursion-generate-all-subsets-8': [
    { id: '1354', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1355', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1356', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'recursion-permutations-of-string-9': [
    { id: '1357', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1358', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1359', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'recursion-josephus-problem-10': [
    { id: '1360', input: 'n = 5, k = 2', expected_output: '3', is_hidden: false },
    { id: '1361', input: 'n = 3, k = 1', expected_output: '3', is_hidden: true },
    { id: '1362', input: 'n = 1, k = 1', expected_output: '1', is_hidden: true },
  ],
  'recursion-word-break-recursive-11': [
    { id: '1363', input: 's = "leetcode", wordDict = ["leet","code"]', expected_output: 'true', is_hidden: false },
    { id: '1364', input: 's = "a", wordDict = ["b"]', expected_output: 'false', is_hidden: true },
    { id: '1365', input: 's = "", wordDict = []', expected_output: 'true', is_hidden: true },
  ],
  'recursion-sudoku-solver-12': [
    { id: '1366', input: 'n = 4', expected_output: '2', is_hidden: false },
    { id: '1367', input: 'n = 1', expected_output: '1', is_hidden: true },
    { id: '1368', input: 'n = 2', expected_output: '0', is_hidden: true },
  ],
  'recursion-n-queens-13': [
    { id: '1369', input: 'n = 4', expected_output: '2', is_hidden: false },
    { id: '1370', input: 'n = 1', expected_output: '1', is_hidden: true },
    { id: '1371', input: 'n = 2', expected_output: '0', is_hidden: true },
  ],
  'recursion-recursive-integer-to-english-14': [
    { id: '1372', input: 'nums = [10,9,2,5,3,7,101,18]', expected_output: '4', is_hidden: false },
    { id: '1373', input: 'nums = [1,2,3]', expected_output: '3', is_hidden: true },
    { id: '1374', input: 'nums = [3,2,1]', expected_output: '1', is_hidden: true },
  ],
  'recursion-expression-add-operators-15': [
    { id: '1375', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1376', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1377', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'deque-implement-deque-1': [
    { id: '1378', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1379', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1380', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'deque-sliding-window-maximum-deque-2': [
    { id: '1381', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1382', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1383', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'deque-design-circular-deque-3': [
    { id: '1384', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1385', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1386', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'deque-max-of-all-subarrays-4': [
    { id: '1387', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1388', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1389', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'deque-constrained-subset-sum-5': [
    { id: '1390', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1391', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1392', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'deque-shortest-subarray-with-sum-k-6': [
    { id: '1393', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1394', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1395', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'deque-jump-game-vi-7': [
    { id: '1396', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1397', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1398', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'deque-continuous-subarray-sum-deque-8': [
    { id: '1399', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1400', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1401', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'deque-deque-based-bfs-9': [
    { id: '1402', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '1403', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '1404', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'deque-min-max-riddle-10': [
    { id: '1405', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1406', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1407', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'deque-number-of-recent-calls-deque-11': [
    { id: '1408', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1409', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1410', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'deque-palindrome-checker-deque-12': [
    { id: '1411', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '1412', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '1413', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'deque-reverse-using-deque-13': [
    { id: '1414', input: 's = "abc"', expected_output: '"cba"', is_hidden: false },
    { id: '1415', input: 's = "a"', expected_output: '"a"', is_hidden: true },
    { id: '1416', input: 's = ""', expected_output: '""', is_hidden: true },
  ],
  'deque-browser-history-deque-14': [
    { id: '1417', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1418', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1419', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'deque-deque-sort-15': [
    { id: '1420', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1421', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1422', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'searching-linear-search-1': [
    { id: '1423', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1424', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1425', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-binary-search-2': [
    { id: '1426', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1427', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1428', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-search-insert-position-3': [
    { id: '1429', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1430', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1431', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-find-first-and-last-position-4': [
    { id: '1432', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1433', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1434', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-search-in-rotated-sorted-array-5': [
    { id: '1435', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1436', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1437', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'searching-find-minimum-in-rotated-array-6': [
    { id: '1438', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1439', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1440', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-search-2d-matrix-7': [
    { id: '1441', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1442', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1443', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-find-peak-element-8': [
    { id: '1444', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1445', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1446', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-count-negatives-in-sorted-matrix-9': [
    { id: '1447', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1448', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1449', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'searching-search-suggestions-system-10': [
    { id: '1450', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1451', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1452', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-find-k-closest-elements-11': [
    { id: '1453', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1454', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1455', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-find-first-bad-version-12': [
    { id: '1456', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1457', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1458', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-search-range-in-bst-13': [
    { id: '1459', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1460', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1461', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-sqrt-of-integer-14': [
    { id: '1462', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1463', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1464', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'searching-find-target-in-mountain-array-15': [
    { id: '1465', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1466', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1467', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'sorting-bubble-sort-1': [
    { id: '1468', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1469', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1470', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-selection-sort-2': [
    { id: '1471', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1472', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1473', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-insertion-sort-3': [
    { id: '1474', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1475', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1476', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-merge-sort-4': [
    { id: '1477', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1478', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1479', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-quick-sort-5': [
    { id: '1480', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1481', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1482', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-heap-sort-6': [
    { id: '1483', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1484', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1485', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-counting-sort-7': [
    { id: '1486', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1487', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1488', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-radix-sort-8': [
    { id: '1489', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1490', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1491', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-sort-an-array-9': [
    { id: '1492', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1493', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1494', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-sort-colors-10': [
    { id: '1495', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1496', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1497', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-wiggle-sort-11': [
    { id: '1498', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1499', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1500', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-largest-number-12': [
    { id: '1501', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1502', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1503', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'sorting-sort-array-by-parity-13': [
    { id: '1504', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1505', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1506', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'sorting-merge-overlapping-intervals-14': [
    { id: '1507', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1508', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1509', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sorting-kth-largest-element-sort-15': [
    { id: '1510', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1511', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1512', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'binary-search-standard-binary-search-1': [
    { id: '1513', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1514', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1515', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-first-occurrence-2': [
    { id: '1516', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1517', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1518', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-last-occurrence-3': [
    { id: '1519', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1520', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1521', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-search-insert-position-4': [
    { id: '1522', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1523', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1524', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-sqrt-using-binary-search-5': [
    { id: '1525', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1526', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1527', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-find-peak-element-6': [
    { id: '1528', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1529', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1530', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-search-in-rotated-array-7': [
    { id: '1531', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1532', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1533', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-minimum-in-rotated-array-8': [
    { id: '1534', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1535', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1536', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-search-2d-matrix-9': [
    { id: '1537', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1538', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1539', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-find-k-closest-elements-10': [
    { id: '1540', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1541', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1542', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-split-array-largest-sum-11': [
    { id: '1543', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1544', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1545', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-kth-smallest-in-matrix-12': [
    { id: '1546', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1547', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1548', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-find-minimum-days-to-bloom-13': [
    { id: '1549', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1550', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1551', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-aggressive-cows-14': [
    { id: '1552', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1553', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1554', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-allocate-books-15': [
    { id: '1555', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1556', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1557', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'two-pointers-two-sum-sorted-1': [
    { id: '1558', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1559', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1560', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'two-pointers-remove-duplicates-2': [
    { id: '1561', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1562', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1563', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'two-pointers-container-with-most-water-3': [
    { id: '1564', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1565', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1566', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'two-pointers-3sum-4': [
    { id: '1567', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1568', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1569', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'two-pointers-trapping-rain-water-5': [
    { id: '1570', input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', expected_output: '6', is_hidden: false },
    { id: '1571', input: 'height = [1]', expected_output: '0', is_hidden: true },
    { id: '1572', input: 'height = [3,0,3]', expected_output: '3', is_hidden: true },
  ],
  'two-pointers-sort-colors-6': [
    { id: '1573', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1574', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1575', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'two-pointers-reverse-string-7': [
    { id: '1576', input: 's = "abc"', expected_output: '"cba"', is_hidden: false },
    { id: '1577', input: 's = "a"', expected_output: '"a"', is_hidden: true },
    { id: '1578', input: 's = ""', expected_output: '""', is_hidden: true },
  ],
  'two-pointers-valid-palindrome-8': [
    { id: '1579', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '1580', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '1581', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'two-pointers-merge-sorted-arrays-9': [
    { id: '1582', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1583', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1584', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'two-pointers-squares-of-sorted-array-10': [
    { id: '1585', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1586', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1587', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'two-pointers-4sum-11': [
    { id: '1588', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1589', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1590', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'two-pointers-three-way-partition-12': [
    { id: '1591', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1592', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1593', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'two-pointers-subarray-product-less-k-13': [
    { id: '1594', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1595', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1596', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'two-pointers-longest-mountain-14': [
    { id: '1597', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1598', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1599', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'two-pointers-minimum-window-substring-2p-15': [
    { id: '1600', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1601', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1602', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'sliding-window-maximum-sum-subarray-k-1': [
    { id: '1603', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1604', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1605', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'sliding-window-longest-substring-no-repeat-2': [
    { id: '1606', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '1607', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '1608', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'sliding-window-minimum-window-substring-3': [
    { id: '1609', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1610', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1611', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'sliding-window-longest-repeating-character-replace-4': [
    { id: '1612', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1613', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1614', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sliding-window-permutation-in-string-5': [
    { id: '1615', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1616', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1617', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'sliding-window-find-all-anagrams-6': [
    { id: '1618', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1619', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1620', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sliding-window-subarrays-with-k-different-7': [
    { id: '1621', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1622', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1623', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sliding-window-fruit-into-baskets-8': [
    { id: '1624', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1625', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1626', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sliding-window-longest-subarray-sum-k-9': [
    { id: '1627', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1628', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1629', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'sliding-window-sliding-window-median-10': [
    { id: '1630', input: 'nums = [1,3,-1,-3,5], k = 3', expected_output: '[3,3,5,5,6]', is_hidden: false },
    { id: '1631', input: 'nums = [1], k = 1', expected_output: '[1]', is_hidden: true },
    { id: '1632', input: 'nums = [1,-1], k = 1', expected_output: '[1,-1]', is_hidden: true },
  ],
  'sliding-window-count-occurrences-anagram-11': [
    { id: '1633', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1634', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1635', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'sliding-window-max-consecutive-ones-iii-12': [
    { id: '1636', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1637', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1638', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'sliding-window-longest-nice-substring-13': [
    { id: '1639', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '1640', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '1641', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'sliding-window-minimum-size-subarray-sum-14': [
    { id: '1642', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1643', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1644', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'sliding-window-substring-with-concatenation-15': [
    { id: '1645', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '1646', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '1647', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'prefix-sum-range-sum-query-immutable-1': [
    { id: '1648', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1649', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1650', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-subarray-sum-equals-k-2': [
    { id: '1651', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1652', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1653', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-continuous-subarray-sum-3': [
    { id: '1654', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1655', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1656', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-product-of-array-except-self-4': [
    { id: '1657', input: 'nums = [1,2,3,4], q = [[0,2]]', expected_output: '6', is_hidden: false },
    { id: '1658', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '1659', input: 'nums = [5,5], q = [[0,1]]', expected_output: '10', is_hidden: true },
  ],
  'prefix-sum-running-sum-of-1d-array-5': [
    { id: '1660', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1661', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1662', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-pivot-index-6': [
    { id: '1663', input: 'nums = [1,2,3,4], q = [[0,2]]', expected_output: '6', is_hidden: false },
    { id: '1664', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '1665', input: 'nums = [5,5], q = [[0,1]]', expected_output: '10', is_hidden: true },
  ],
  'prefix-sum-subarray-sums-divisible-k-7': [
    { id: '1666', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1667', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1668', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-make-sum-divisible-by-p-8': [
    { id: '1669', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1670', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1671', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-maximum-size-subarray-sum-k-9': [
    { id: '1672', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1673', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1674', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-range-addition-10': [
    { id: '1675', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1676', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1677', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-corporate-flight-bookings-11': [
    { id: '1678', input: 'nums = [1,2,3,4], q = [[0,2]]', expected_output: '6', is_hidden: false },
    { id: '1679', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '1680', input: 'nums = [5,5], q = [[0,1]]', expected_output: '10', is_hidden: true },
  ],
  'prefix-sum-car-pooling-12': [
    { id: '1681', input: 'nums = [1,2,3,4], q = [[0,2]]', expected_output: '6', is_hidden: false },
    { id: '1682', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '1683', input: 'nums = [5,5], q = [[0,1]]', expected_output: '10', is_hidden: true },
  ],
  'prefix-sum-2d-prefix-sum-query-13': [
    { id: '1684', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1685', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1686', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-count-triangles-14': [
    { id: '1687', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1688', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1689', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'prefix-sum-largest-plus-sign-15': [
    { id: '1690', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1691', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1692', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'bit-manipulation-single-number-1': [
    { id: '1693', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1694', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1695', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'bit-manipulation-number-of-1-bits-2': [
    { id: '1696', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1697', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1698', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'bit-manipulation-counting-bits-3': [
    { id: '1699', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1700', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1701', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'bit-manipulation-reverse-bits-4': [
    { id: '1702', input: 's = "abc"', expected_output: '"cba"', is_hidden: false },
    { id: '1703', input: 's = "a"', expected_output: '"a"', is_hidden: true },
    { id: '1704', input: 's = ""', expected_output: '""', is_hidden: true },
  ],
  'bit-manipulation-missing-number-5': [
    { id: '1705', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1706', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1707', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'bit-manipulation-power-of-two-6': [
    { id: '1708', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1709', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1710', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'bit-manipulation-sum-of-two-integers-7': [
    { id: '1711', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1712', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1713', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'bit-manipulation-bitwise-and-of-range-8': [
    { id: '1714', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1715', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1716', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'bit-manipulation-single-number-iii-9': [
    { id: '1717', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1718', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1719', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'bit-manipulation-total-hamming-distance-10': [
    { id: '1720', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1721', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1722', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'bit-manipulation-maximum-xor-11': [
    { id: '1723', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1724', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1725', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'bit-manipulation-subsets-bitmask-12': [
    { id: '1726', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1727', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1728', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'bit-manipulation-xor-queries-subarray-13': [
    { id: '1729', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1730', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1731', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'bit-manipulation-count-triplets-equal-xor-14': [
    { id: '1732', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1733', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1734', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'bit-manipulation-min-xor-pair-15': [
    { id: '1735', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1736', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1737', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'mathematics-reverse-integer-1': [
    { id: '1738', input: 's = "abc"', expected_output: '"cba"', is_hidden: false },
    { id: '1739', input: 's = "a"', expected_output: '"a"', is_hidden: true },
    { id: '1740', input: 's = ""', expected_output: '""', is_hidden: true },
  ],
  'mathematics-palindrome-number-2': [
    { id: '1741', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '1742', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '1743', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'mathematics-fizz-buzz-3': [
    { id: '1744', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1745', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1746', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-power-of-three-4': [
    { id: '1747', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1748', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1749', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-happy-number-5': [
    { id: '1750', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1751', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1752', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-add-digits-6': [
    { id: '1753', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1754', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1755', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'mathematics-excel-sheet-column-number-7': [
    { id: '1756', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1757', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1758', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-roman-to-integer-8': [
    { id: '1759', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1760', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1761', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-integer-to-roman-9': [
    { id: '1762', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1763', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1764', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-pow-function-10': [
    { id: '1765', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1766', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1767', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-sqrt-using-math-11': [
    { id: '1768', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1769', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1770', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-factorial-trailing-zeroes-12': [
    { id: '1771', input: 'n = 5', expected_output: '120', is_hidden: false },
    { id: '1772', input: 'n = 0', expected_output: '1', is_hidden: true },
    { id: '1773', input: 'n = 7', expected_output: '5040', is_hidden: true },
  ],
  'mathematics-multiply-strings-13': [
    { id: '1774', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1775', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1776', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-fraction-to-recurring-decimal-14': [
    { id: '1777', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1778', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1779', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'mathematics-permutation-sequence-15': [
    { id: '1780', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1781', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1782', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'greedy-assign-cookies-1': [
    { id: '1783', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1784', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1785', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-lemonade-change-2': [
    { id: '1786', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1787', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1788', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'greedy-best-time-buy-sell-stock-3': [
    { id: '1789', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1790', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1791', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-buy-sell-stock-ii-4': [
    { id: '1792', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1793', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1794', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-jump-game-5': [
    { id: '1795', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1796', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1797', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-jump-game-ii-6': [
    { id: '1798', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1799', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1800', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-gas-station-7': [
    { id: '1801', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1802', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1803', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-candy-distribution-8': [
    { id: '1804', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1805', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1806', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-partition-labels-9': [
    { id: '1807', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1808', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1809', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-queue-reconstruction-10': [
    { id: '1810', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1811', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1812', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-min-arrows-burst-balloons-11': [
    { id: '1813', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1814', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1815', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'greedy-non-overlapping-intervals-12': [
    { id: '1816', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1817', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1818', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'greedy-min-platforms-13': [
    { id: '1819', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1820', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1821', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'greedy-maximum-swap-14': [
    { id: '1822', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1823', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1824', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'greedy-boats-to-save-people-15': [
    { id: '1825', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1826', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1827', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'backtracking-subsets-1': [
    { id: '1828', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1829', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1830', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'backtracking-permutations-2': [
    { id: '1831', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1832', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1833', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'backtracking-combinations-3': [
    { id: '1834', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1835', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1836', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'backtracking-combination-sum-4': [
    { id: '1837', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1838', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1839', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'backtracking-palindrome-partitioning-5': [
    { id: '1840', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '1841', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '1842', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'backtracking-letter-combinations-phone-6': [
    { id: '1843', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1844', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1845', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'backtracking-word-search-7': [
    { id: '1846', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1847', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1848', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'backtracking-generate-parentheses-8': [
    { id: '1849', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1850', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1851', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'backtracking-restore-ip-addresses-9': [
    { id: '1852', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1853', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1854', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'backtracking-sudoku-solver-10': [
    { id: '1855', input: 'n = 4', expected_output: '2', is_hidden: false },
    { id: '1856', input: 'n = 1', expected_output: '1', is_hidden: true },
    { id: '1857', input: 'n = 2', expected_output: '0', is_hidden: true },
  ],
  'backtracking-n-queens-11': [
    { id: '1858', input: 'n = 4', expected_output: '2', is_hidden: false },
    { id: '1859', input: 'n = 1', expected_output: '1', is_hidden: true },
    { id: '1860', input: 'n = 2', expected_output: '0', is_hidden: true },
  ],
  'backtracking-word-break-ii-12': [
    { id: '1861', input: 's = "leetcode", wordDict = ["leet","code"]', expected_output: 'true', is_hidden: false },
    { id: '1862', input: 's = "a", wordDict = ["b"]', expected_output: 'false', is_hidden: true },
    { id: '1863', input: 's = "", wordDict = []', expected_output: 'true', is_hidden: true },
  ],
  'backtracking-expression-add-operators-13': [
    { id: '1864', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1865', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1866', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'backtracking-permutation-ii-14': [
    { id: '1867', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '1868', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '1869', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'backtracking-beautiful-arrangement-15': [
    { id: '1870', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1871', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1872', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'divide-and-conquer-merge-sort-1': [
    { id: '1873', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1874', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1875', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'divide-and-conquer-quick-sort-2': [
    { id: '1876', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1877', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1878', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'divide-and-conquer-maximum-subarray-3': [
    { id: '1879', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1880', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1881', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'divide-and-conquer-count-inversions-4': [
    { id: '1882', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1883', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1884', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'divide-and-conquer-search-in-rotated-array-5': [
    { id: '1885', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1886', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1887', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'divide-and-conquer-closest-pair-points-6': [
    { id: '1888', input: 'points = [[0,0],[2,2],[3,10]]', expected_output: '15', is_hidden: false },
    { id: '1889', input: 'points = [[0,0]]', expected_output: '0', is_hidden: true },
    { id: '1890', input: 'points = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'divide-and-conquer-karatsuba-multiplication-7': [
    { id: '1891', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1892', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1893', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'divide-and-conquer-strassen-matrix-multiply-8': [
    { id: '1894', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1895', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1896', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'divide-and-conquer-kth-largest-element-9': [
    { id: '1897', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1898', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1899', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'divide-and-conquer-pow-function-10': [
    { id: '1900', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1901', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1902', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'divide-and-conquer-median-of-two-arrays-11': [
    { id: '1903', input: 'nums = [1,2,3]', expected_output: '2', is_hidden: false },
    { id: '1904', input: 'nums = [1]', expected_output: '1', is_hidden: true },
    { id: '1905', input: 'nums = [2,1]', expected_output: '1.5', is_hidden: true },
  ],
  'divide-and-conquer-skyline-problem-12': [
    { id: '1906', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1907', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1908', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'divide-and-conquer-majority-element-13': [
    { id: '1909', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '1910', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '1911', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'divide-and-conquer-maximum-subarray-d-c-14': [
    { id: '1912', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1913', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1914', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'divide-and-conquer-count-smaller-after-self-15': [
    { id: '1915', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '1916', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '1917', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'binary-tree-inorder-traversal-1': [
    { id: '1918', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1919', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1920', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-tree-preorder-traversal-2': [
    { id: '1921', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1922', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1923', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-tree-postorder-traversal-3': [
    { id: '1924', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1925', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1926', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-tree-level-order-traversal-4': [
    { id: '1927', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1928', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1929', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-tree-max-depth-5': [
    { id: '1930', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '1931', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '1932', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'binary-tree-min-depth-6': [
    { id: '1933', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '1934', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '1935', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'binary-tree-balanced-binary-tree-7': [
    { id: '1936', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1937', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1938', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-tree-diameter-of-tree-8': [
    { id: '1939', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1940', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1941', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-tree-same-tree-9': [
    { id: '1942', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1943', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1944', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-tree-symmetric-tree-10': [
    { id: '1945', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1946', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1947', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-tree-invert-binary-tree-11': [
    { id: '1948', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1949', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1950', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-tree-path-sum-12': [
    { id: '1951', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1952', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1953', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'binary-tree-path-sum-ii-13': [
    { id: '1954', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '1955', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '1956', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'binary-tree-lowest-common-ancestor-14': [
    { id: '1957', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '1958', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '1959', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'binary-tree-serialize-deserialize-tree-15': [
    { id: '1960', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '1961', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1962', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'binary-search-tree-search-in-bst-1': [
    { id: '1963', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1964', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1965', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-insert-into-bst-2': [
    { id: '1966', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1967', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1968', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-delete-node-bst-3': [
    { id: '1969', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1970', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1971', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-validate-bst-4': [
    { id: '1972', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1973', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1974', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-kth-smallest-bst-5': [
    { id: '1975', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1976', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1977', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-inorder-successor-6': [
    { id: '1978', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1979', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1980', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-lowest-common-ancestor-bst-7': [
    { id: '1981', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1982', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1983', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-bst-to-sorted-array-8': [
    { id: '1984', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1985', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1986', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'binary-search-tree-sorted-array-to-bst-9': [
    { id: '1987', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '1988', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '1989', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'binary-search-tree-two-sum-bst-10': [
    { id: '1990', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1991', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1992', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-range-sum-bst-11': [
    { id: '1993', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1994', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1995', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-predecessor-successor-bst-12': [
    { id: '1996', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '1997', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '1998', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-recover-bst-13': [
    { id: '1999', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2000', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2001', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-bst-iterator-14': [
    { id: '2002', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2003', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2004', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'binary-search-tree-largest-bst-subtree-15': [
    { id: '2005', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2006', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2007', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'heap-priority-queue-kth-largest-element-1': [
    { id: '2008', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2009', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2010', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'heap-priority-queue-top-k-frequent-2': [
    { id: '2011', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '2012', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '2013', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'heap-priority-queue-k-closest-points-origin-3': [
    { id: '2014', input: 'points = [[0,0],[2,2],[3,10]]', expected_output: '15', is_hidden: false },
    { id: '2015', input: 'points = [[0,0]]', expected_output: '0', is_hidden: true },
    { id: '2016', input: 'points = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'heap-priority-queue-min-heap-implementation-4': [
    { id: '2017', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2018', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2019', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'heap-priority-queue-last-stone-weight-5': [
    { id: '2020', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2021', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2022', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'heap-priority-queue-kth-smallest-in-matrix-6': [
    { id: '2023', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2024', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2025', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'heap-priority-queue-merge-k-sorted-lists-7': [
    { id: '2026', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '2027', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2028', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'heap-priority-queue-find-median-stream-8': [
    { id: '2029', input: 'nums = [1,2,3]', expected_output: '2', is_hidden: false },
    { id: '2030', input: 'nums = [1]', expected_output: '1', is_hidden: true },
    { id: '2031', input: 'nums = [2,1]', expected_output: '1.5', is_hidden: true },
  ],
  'heap-priority-queue-sliding-window-median-9': [
    { id: '2032', input: 'nums = [1,3,-1,-3,5], k = 3', expected_output: '[3,3,5,5,6]', is_hidden: false },
    { id: '2033', input: 'nums = [1], k = 1', expected_output: '[1]', is_hidden: true },
    { id: '2034', input: 'nums = [1,-1], k = 1', expected_output: '[1,-1]', is_hidden: true },
  ],
  'heap-priority-queue-task-scheduler-10': [
    { id: '2035', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2036', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2037', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'heap-priority-queue-reorganize-string-11': [
    { id: '2038', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2039', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2040', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'heap-priority-queue-smallest-range-k-lists-12': [
    { id: '2041', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2042', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2043', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'heap-priority-queue-max-performance-team-13': [
    { id: '2044', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2045', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2046', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'heap-priority-queue-ipo-problem-14': [
    { id: '2047', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2048', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2049', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'heap-priority-queue-furthest-building-15': [
    { id: '2050', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2051', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2052', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'trie-implement-trie-1': [
    { id: '2053', input: 'words = ["app","apple"], search = "app"', expected_output: 'true', is_hidden: false },
    { id: '2054', input: 'words = ["cat"], search = "car"', expected_output: 'false', is_hidden: true },
    { id: '2055', input: 'words = [], search = "a"', expected_output: 'false', is_hidden: true },
  ],
  'trie-word-search-ii-2': [
    { id: '2056', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2057', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2058', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'trie-longest-word-dictionary-3': [
    { id: '2059', input: 'words = ["app","apple"], search = "app"', expected_output: 'true', is_hidden: false },
    { id: '2060', input: 'words = ["cat"], search = "car"', expected_output: 'false', is_hidden: true },
    { id: '2061', input: 'words = [], search = "a"', expected_output: 'false', is_hidden: true },
  ],
  'trie-word-search-trie-4': [
    { id: '2062', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2063', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2064', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'trie-add-search-word-5': [
    { id: '2065', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2066', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2067', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'trie-replace-words-6': [
    { id: '2068', input: 'words = ["app","apple"], search = "app"', expected_output: 'true', is_hidden: false },
    { id: '2069', input: 'words = ["cat"], search = "car"', expected_output: 'false', is_hidden: true },
    { id: '2070', input: 'words = [], search = "a"', expected_output: 'false', is_hidden: true },
  ],
  'trie-prefix-tree-sort-7': [
    { id: '2071', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '2072', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2073', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'trie-maximum-xor-pair-8': [
    { id: '2074', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2075', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2076', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'trie-count-distinct-substrings-9': [
    { id: '2077', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2078', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2079', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'trie-camelcase-matching-10': [
    { id: '2080', input: 'words = ["app","apple"], search = "app"', expected_output: 'true', is_hidden: false },
    { id: '2081', input: 'words = ["cat"], search = "car"', expected_output: 'false', is_hidden: true },
    { id: '2082', input: 'words = [], search = "a"', expected_output: 'false', is_hidden: true },
  ],
  'trie-stream-of-characters-11': [
    { id: '2083', input: 'words = ["app","apple"], search = "app"', expected_output: 'true', is_hidden: false },
    { id: '2084', input: 'words = ["cat"], search = "car"', expected_output: 'false', is_hidden: true },
    { id: '2085', input: 'words = [], search = "a"', expected_output: 'false', is_hidden: true },
  ],
  'trie-word-squares-12': [
    { id: '2086', input: 'words = ["app","apple"], search = "app"', expected_output: 'true', is_hidden: false },
    { id: '2087', input: 'words = ["cat"], search = "car"', expected_output: 'false', is_hidden: true },
    { id: '2088', input: 'words = [], search = "a"', expected_output: 'false', is_hidden: true },
  ],
  'trie-shortest-unique-prefix-13': [
    { id: '2089', input: 'words = ["app","apple"], search = "app"', expected_output: 'true', is_hidden: false },
    { id: '2090', input: 'words = ["cat"], search = "car"', expected_output: 'false', is_hidden: true },
    { id: '2091', input: 'words = [], search = "a"', expected_output: 'false', is_hidden: true },
  ],
  'trie-phone-directory-14': [
    { id: '2092', input: 'words = ["app","apple"], search = "app"', expected_output: 'true', is_hidden: false },
    { id: '2093', input: 'words = ["cat"], search = "car"', expected_output: 'false', is_hidden: true },
    { id: '2094', input: 'words = [], search = "a"', expected_output: 'false', is_hidden: true },
  ],
  'trie-palindrome-pairs-trie-15': [
    { id: '2095', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '2096', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '2097', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'dsu-number-of-provinces-1': [
    { id: '2098', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2099', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2100', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'dsu-accounts-merge-2': [
    { id: '2101', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2102', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2103', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'dsu-redundant-connection-3': [
    { id: '2104', input: 'points = [[0,0],[2,2],[3,10]]', expected_output: '15', is_hidden: false },
    { id: '2105', input: 'points = [[0,0]]', expected_output: '0', is_hidden: true },
    { id: '2106', input: 'points = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'dsu-most-stones-removed-4': [
    { id: '2107', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '2108', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2109', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'dsu-satisfiability-equations-5': [
    { id: '2110', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2111', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2112', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'dsu-connecting-graph-6': [
    { id: '2113', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2114', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2115', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'dsu-friend-circles-7': [
    { id: '2116', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2117', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2118', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'dsu-longest-consecutive-dsu-8': [
    { id: '2119', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2120', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2121', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'dsu-swim-in-rising-water-9': [
    { id: '2122', input: 'height = [0,1,0,2,1,0,1,3,2,1,2,1]', expected_output: '6', is_hidden: false },
    { id: '2123', input: 'height = [1]', expected_output: '0', is_hidden: true },
    { id: '2124', input: 'height = [3,0,3]', expected_output: '3', is_hidden: true },
  ],
  'dsu-min-cost-connect-points-10': [
    { id: '2125', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2126', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2127', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'dsu-couples-holding-hands-11': [
    { id: '2128', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2129', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2130', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'dsu-similar-string-groups-12': [
    { id: '2131', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2132', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2133', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'dsu-bricks-falling-13': [
    { id: '2134', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2135', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2136', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'dsu-largest-component-size-14': [
    { id: '2137', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2138', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2139', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'dsu-making-wired-connections-15': [
    { id: '2140', input: 'points = [[0,0],[2,2],[3,10]]', expected_output: '15', is_hidden: false },
    { id: '2141', input: 'points = [[0,0]]', expected_output: '0', is_hidden: true },
    { id: '2142', input: 'points = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'dp-fibonacci-1': [
    { id: '2143', input: 'n = 5', expected_output: '5', is_hidden: false },
    { id: '2144', input: 'n = 0', expected_output: '0', is_hidden: true },
    { id: '2145', input: 'n = 7', expected_output: '13', is_hidden: true },
  ],
  'dp-climbing-stairs-2': [
    { id: '2146', input: 'n = 3', expected_output: '3', is_hidden: false },
    { id: '2147', input: 'n = 1', expected_output: '1', is_hidden: true },
    { id: '2148', input: 'n = 5', expected_output: '8', is_hidden: true },
  ],
  'dp-house-robber-3': [
    { id: '2149', input: 'nums = [2,7,9,3,1]', expected_output: '12', is_hidden: false },
    { id: '2150', input: 'nums = [1]', expected_output: '1', is_hidden: true },
    { id: '2151', input: 'nums = [2,1]', expected_output: '2', is_hidden: true },
  ],
  'dp-coin-change-4': [
    { id: '2152', input: 'coins = [1,2,5], amount = 11', expected_output: '3', is_hidden: false },
    { id: '2153', input: 'coins = [2], amount = 3', expected_output: '-1', is_hidden: true },
    { id: '2154', input: 'coins = [1], amount = 0', expected_output: '0', is_hidden: true },
  ],
  'dp-longest-increasing-subseq-5': [
    { id: '2155', input: 'nums = [10,9,2,5,3,7,101,18]', expected_output: '4', is_hidden: false },
    { id: '2156', input: 'nums = [1,2,3]', expected_output: '3', is_hidden: true },
    { id: '2157', input: 'nums = [3,2,1]', expected_output: '1', is_hidden: true },
  ],
  'dp-longest-common-subseq-6': [
    { id: '2158', input: 's1 = "abcde", s2 = "ace"', expected_output: '3', is_hidden: false },
    { id: '2159', input: 's1 = "abc", s2 = "def"', expected_output: '0', is_hidden: true },
    { id: '2160', input: 's1 = "", s2 = "abc"', expected_output: '0', is_hidden: true },
  ],
  'dp-edit-distance-7': [
    { id: '2161', input: 'word1 = "horse", word2 = "ros"', expected_output: '3', is_hidden: false },
    { id: '2162', input: 'word1 = "", word2 = "a"', expected_output: '1', is_hidden: true },
    { id: '2163', input: 'word1 = "a", word2 = "a"', expected_output: '0', is_hidden: true },
  ],
  'dp-0-1-knapsack-8': [
    { id: '2164', input: 'wt = [1,2,3], val = [6,10,12], W = 5', expected_output: '22', is_hidden: false },
    { id: '2165', input: 'wt = [1], val = [5], W = 0', expected_output: '0', is_hidden: true },
    { id: '2166', input: 'wt = [2,3], val = [3,4], W = 5', expected_output: '7', is_hidden: true },
  ],
  'dp-unbounded-knapsack-9': [
    { id: '2167', input: 'wt = [1,2,3], val = [6,10,12], W = 5', expected_output: '22', is_hidden: false },
    { id: '2168', input: 'wt = [1], val = [5], W = 0', expected_output: '0', is_hidden: true },
    { id: '2169', input: 'wt = [2,3], val = [3,4], W = 5', expected_output: '7', is_hidden: true },
  ],
  'dp-word-break-10': [
    { id: '2170', input: 's = "leetcode", wordDict = ["leet","code"]', expected_output: 'true', is_hidden: false },
    { id: '2171', input: 's = "a", wordDict = ["b"]', expected_output: 'false', is_hidden: true },
    { id: '2172', input: 's = "", wordDict = []', expected_output: 'true', is_hidden: true },
  ],
  'dp-decode-ways-11': [
    { id: '2173', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2174', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2175', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'dp-unique-paths-12': [
    { id: '2176', input: 'm = 3, n = 7', expected_output: '28', is_hidden: false },
    { id: '2177', input: 'm = 1, n = 1', expected_output: '1', is_hidden: true },
    { id: '2178', input: 'm = 3, n = 2', expected_output: '3', is_hidden: true },
  ],
  'dp-min-path-sum-13': [
    { id: '2179', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2180', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2181', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'dp-partition-equal-subset-14': [
    { id: '2182', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '2183', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '2184', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'dp-best-time-buy-sell-cooldown-15': [
    { id: '2185', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2186', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2187', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'segment-tree-range-sum-query-mutable-1': [
    { id: '2188', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2189', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2190', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'segment-tree-range-min-query-2': [
    { id: '2191', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2192', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2193', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'segment-tree-range-update-range-query-3': [
    { id: '2194', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2195', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2196', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'segment-tree-count-inversions-segtree-4': [
    { id: '2197', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2198', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2199', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'segment-tree-kth-order-statistic-5': [
    { id: '2200', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '2201', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '2202', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'segment-tree-merge-sort-tree-6': [
    { id: '2203', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '2204', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2205', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'segment-tree-persistent-segment-tree-7': [
    { id: '2206', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '2207', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2208', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'segment-tree-lazy-prop-add-update-8': [
    { id: '2209', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2210', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2211', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'segment-tree-lazy-prop-set-update-9': [
    { id: '2212', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2213', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2214', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'segment-tree-range-xor-queries-10': [
    { id: '2215', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2216', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2217', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'segment-tree-power-range-sum-11': [
    { id: '2218', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2219', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2220', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'segment-tree-histogram-with-updates-12': [
    { id: '2221', input: 'heights = [2,1,5,6,2,3]', expected_output: '10', is_hidden: false },
    { id: '2222', input: 'heights = [1]', expected_output: '1', is_hidden: true },
    { id: '2223', input: 'heights = [2,2]', expected_output: '4', is_hidden: true },
  ],
  'segment-tree-2d-segment-tree-13': [
    { id: '2224', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '2225', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2226', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'segment-tree-dynamic-kth-smallest-14': [
    { id: '2227', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2228', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2229', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'segment-tree-range-mode-query-15': [
    { id: '2230', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '2231', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2232', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'fenwick-tree-range-sum-query-bit-1': [
    { id: '2233', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2234', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2235', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'fenwick-tree-count-inversions-bit-2': [
    { id: '2236', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2237', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2238', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'fenwick-tree-range-update-point-query-3': [
    { id: '2239', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2240', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2241', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'fenwick-tree-frequency-counter-bit-4': [
    { id: '2242', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2243', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2244', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'fenwick-tree-kth-order-bit-5': [
    { id: '2245', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '2246', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '2247', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'fenwick-tree-2d-bit-6': [
    { id: '2248', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2249', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2250', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'fenwick-tree-range-add-range-sum-7': [
    { id: '2251', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2252', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2253', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'fenwick-tree-inversion-count-8': [
    { id: '2254', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2255', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2256', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'fenwick-tree-dynamic-prefix-sum-9': [
    { id: '2257', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2258', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2259', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'fenwick-tree-online-median-10': [
    { id: '2260', input: 'nums = [1,2,3]', expected_output: '2', is_hidden: false },
    { id: '2261', input: 'nums = [1]', expected_output: '1', is_hidden: true },
    { id: '2262', input: 'nums = [2,1]', expected_output: '1.5', is_hidden: true },
  ],
  'fenwick-tree-bit-construction-11': [
    { id: '2263', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2264', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2265', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'fenwick-tree-update-query-bit-12': [
    { id: '2266', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2267', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2268', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'fenwick-tree-offline-queries-bit-13': [
    { id: '2269', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2270', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2271', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'fenwick-tree-coordinate-compression-bit-14': [
    { id: '2272', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2273', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2274', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'fenwick-tree-count-smaller-after-self-15': [
    { id: '2275', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2276', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2277', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'sparse-table-range-min-query-1': [
    { id: '2278', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2279', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2280', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'sparse-table-range-gcd-query-2': [
    { id: '2281', input: 'a = 12, b = 8', expected_output: '4', is_hidden: false },
    { id: '2282', input: 'a = 17, b = 5', expected_output: '1', is_hidden: true },
    { id: '2283', input: 'a = 0, b = 5', expected_output: '5', is_hidden: true },
  ],
  'sparse-table-lca-sparse-table-3': [
    { id: '2284', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '2285', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '2286', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'sparse-table-sparse-table-build-4': [
    { id: '2287', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '2288', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '2289', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'sparse-table-range-sum-query-5': [
    { id: '2290', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2291', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2292', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'sparse-table-idempotent-queries-6': [
    { id: '2293', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2294', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2295', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sparse-table-sparse-2d-table-7': [
    { id: '2296', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '2297', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '2298', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'sparse-table-sparse-table-o-1-query-8': [
    { id: '2299', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '2300', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '2301', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'sparse-table-longest-repeated-subarray-9': [
    { id: '2302', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2303', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2304', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sparse-table-static-range-mode-10': [
    { id: '2305', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '2306', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2307', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'sparse-table-disjoint-sparse-tables-11': [
    { id: '2308', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '2309', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '2310', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'sparse-table-sparse-range-kth-12': [
    { id: '2311', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '2312', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '2313', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'sparse-table-sparse-table-hash-13': [
    { id: '2314', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '2315', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '2316', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'sparse-table-range-lcm-query-14': [
    { id: '2317', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2318', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2319', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sparse-table-sparse-xor-queries-15': [
    { id: '2320', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '2321', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '2322', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'monotonic-stack-next-greater-element-1': [
    { id: '2323', input: 'nums = [2,1,2,4,3]', expected_output: '[4,2,4,-1,-1]', is_hidden: false },
    { id: '2324', input: 'nums = [1]', expected_output: '[-1]', is_hidden: true },
    { id: '2325', input: 'nums = [5,4,3]', expected_output: '[-1,-1,-1]', is_hidden: true },
  ],
  'monotonic-stack-daily-temperatures-2': [
    { id: '2326', input: 'temps = [73,74,75,71,69,72,76,73]', expected_output: '[1,1,4,2,1,1,0,0]', is_hidden: false },
    { id: '2327', input: 'temps = [30]', expected_output: '[0]', is_hidden: true },
    { id: '2328', input: 'temps = [30,40]', expected_output: '[1,0]', is_hidden: true },
  ],
  'monotonic-stack-largest-rectangle-histogram-3': [
    { id: '2329', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2330', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2331', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'monotonic-stack-trapping-rain-water-mono-4': [
    { id: '2332', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '2333', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2334', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'monotonic-stack-stock-span-5': [
    { id: '2335', input: 'nums = [2,1,2,4,3]', expected_output: '[4,2,4,-1,-1]', is_hidden: false },
    { id: '2336', input: 'nums = [1]', expected_output: '[-1]', is_hidden: true },
    { id: '2337', input: 'nums = [5,4,3]', expected_output: '[-1,-1,-1]', is_hidden: true },
  ],
  'monotonic-stack-sum-of-subarray-minimums-6': [
    { id: '2338', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2339', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2340', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'monotonic-stack-remove-k-digits-7': [
    { id: '2341', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '2342', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2343', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'monotonic-stack-validate-stack-sequences-8': [
    { id: '2344', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2345', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2346', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'monotonic-stack-next-smaller-element-9': [
    { id: '2347', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2348', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2349', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'monotonic-stack-number-visible-people-10': [
    { id: '2350', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2351', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2352', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'monotonic-stack-car-fleet-ii-11': [
    { id: '2353', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2354', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2355', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'monotonic-stack-largest-submatrix-12': [
    { id: '2356', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2357', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2358', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'monotonic-stack-maximal-rectangle-13': [
    { id: '2359', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2360', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2361', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'monotonic-stack-online-stock-span-14': [
    { id: '2362', input: 'nums = [2,1,2,4,3]', expected_output: '[4,2,4,-1,-1]', is_hidden: false },
    { id: '2363', input: 'nums = [1]', expected_output: '[-1]', is_hidden: true },
    { id: '2364', input: 'nums = [5,4,3]', expected_output: '[-1,-1,-1]', is_hidden: true },
  ],
  'monotonic-stack-min-stack-monotonic-15': [
    { id: '2365', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2366', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2367', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'monotonic-queue-sliding-window-maximum-1': [
    { id: '2368', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2369', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2370', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'monotonic-queue-jump-game-vi-2': [
    { id: '2371', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2372', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2373', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'monotonic-queue-constrained-subset-sum-3': [
    { id: '2374', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2375', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2376', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'monotonic-queue-shortest-subarray-sum-k-4': [
    { id: '2377', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2378', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2379', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'monotonic-queue-min-max-riddle-5': [
    { id: '2380', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2381', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2382', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'monotonic-queue-max-of-all-subarrays-6': [
    { id: '2383', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2384', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2385', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'monotonic-queue-dequeue-max-query-7': [
    { id: '2386', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2387', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2388', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'monotonic-queue-longest-continuous-subarray-8': [
    { id: '2389', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2390', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2391', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'monotonic-queue-absolute-difference-limit-9': [
    { id: '2392', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2393', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2394', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'monotonic-queue-frequency-of-max-10': [
    { id: '2395', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2396', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2397', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'monotonic-queue-online-max-query-11': [
    { id: '2398', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2399', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2400', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'monotonic-queue-min-sliding-window-12': [
    { id: '2401', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2402', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2403', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'monotonic-queue-count-distinct-window-13': [
    { id: '2404', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2405', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2406', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'monotonic-queue-min-max-in-subarray-14': [
    { id: '2407', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2408', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2409', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'monotonic-queue-min-operations-reduce-x-15': [
    { id: '2410', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2411', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2412', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'topological-sort-course-schedule-1': [
    { id: '2413', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2414', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2415', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-course-schedule-ii-2': [
    { id: '2416', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2417', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2418', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-alien-dictionary-3': [
    { id: '2419', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2420', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2421', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-minimum-height-trees-4': [
    { id: '2422', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2423', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2424', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'topological-sort-sequence-reconstruction-5': [
    { id: '2425', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2426', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2427', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-find-all-possible-recipes-6': [
    { id: '2428', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2429', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2430', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-sort-items-groups-7': [
    { id: '2431', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '2432', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2433', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'topological-sort-build-matrix-lexicographically-8': [
    { id: '2434', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2435', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2436', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'topological-sort-parallel-courses-9': [
    { id: '2437', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2438', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2439', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-event-order-10': [
    { id: '2440', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2441', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2442', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-longest-path-dag-11': [
    { id: '2443', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2444', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2445', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-task-ordering-12': [
    { id: '2446', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2447', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2448', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-course-order-iii-13': [
    { id: '2449', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2450', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2451', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-project-dependencies-14': [
    { id: '2452', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2453', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2454', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'topological-sort-check-cycle-via-topo-15': [
    { id: '2455', input: 'edges = [[0,1],[1,2]]', expected_output: '[0,1,2]', is_hidden: false },
    { id: '2456', input: 'edges = [[0,1],[1,0]]', expected_output: '[]', is_hidden: true },
    { id: '2457', input: 'edges = []', expected_output: '[0]', is_hidden: true },
  ],
  'shortest-path-network-delay-time-1': [
    { id: '2458', input: 'edges = [[0,1,4],[1,2,3]], s = 0', expected_output: '[0,4,7]', is_hidden: false },
    { id: '2459', input: 'edges = [[0,1,1]], s = 0', expected_output: '[0,1]', is_hidden: true },
    { id: '2460', input: 'edges = [], s = 0', expected_output: '[0]', is_hidden: true },
  ],
  'shortest-path-cheapest-flights-k-stops-2': [
    { id: '2461', input: 'arr = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '2462', input: 'arr = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '2463', input: 'arr = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'shortest-path-path-with-min-effort-3': [
    { id: '2464', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2465', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2466', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'shortest-path-swim-in-rising-water-4': [
    { id: '2467', input: 'edges = [[0,1,4],[1,2,3]], s = 0', expected_output: '[0,4,7]', is_hidden: false },
    { id: '2468', input: 'edges = [[0,1,1]], s = 0', expected_output: '[0,1]', is_hidden: true },
    { id: '2469', input: 'edges = [], s = 0', expected_output: '[0]', is_hidden: true },
  ],
  'shortest-path-find-shortest-path-grid-5': [
    { id: '2470', input: 'edges = [[0,1,4],[1,2,3]], s = 0', expected_output: '[0,4,7]', is_hidden: false },
    { id: '2471', input: 'edges = [[0,1,1]], s = 0', expected_output: '[0,1]', is_hidden: true },
    { id: '2472', input: 'edges = [], s = 0', expected_output: '[0]', is_hidden: true },
  ],
  'shortest-path-shortest-path-binary-matrix-6': [
    { id: '2473', input: 'edges = [[0,1,4],[1,2,3]], s = 0', expected_output: '[0,4,7]', is_hidden: false },
    { id: '2474', input: 'edges = [[0,1,1]], s = 0', expected_output: '[0,1]', is_hidden: true },
    { id: '2475', input: 'edges = [], s = 0', expected_output: '[0]', is_hidden: true },
  ],
  'shortest-path-shortest-path-all-keys-7': [
    { id: '2476', input: 'edges = [[0,1,4],[1,2,3]], s = 0', expected_output: '[0,4,7]', is_hidden: false },
    { id: '2477', input: 'edges = [[0,1,1]], s = 0', expected_output: '[0,1]', is_hidden: true },
    { id: '2478', input: 'edges = [], s = 0', expected_output: '[0]', is_hidden: true },
  ],
  'shortest-path-word-ladder-8': [
    { id: '2479', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2480', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2481', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'shortest-path-min-cost-to-reach-destination-9': [
    { id: '2482', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2483', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2484', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'shortest-path-bellman-ford-algorithm-10': [
    { id: '2485', input: 'edges = [[0,1,4],[1,2,3]], s = 0', expected_output: '[0,4,7]', is_hidden: false },
    { id: '2486', input: 'edges = [[0,1,1]], s = 0', expected_output: '[0,1]', is_hidden: true },
    { id: '2487', input: 'edges = [], s = 0', expected_output: '[0]', is_hidden: true },
  ],
  'shortest-path-floyd-warshall-11': [
    { id: '2488', input: 'edges = [[0,1,4],[1,2,3]], s = 0', expected_output: '[0,4,7]', is_hidden: false },
    { id: '2489', input: 'edges = [[0,1,1]], s = 0', expected_output: '[0,1]', is_hidden: true },
    { id: '2490', input: 'edges = [], s = 0', expected_output: '[0]', is_hidden: true },
  ],
  'shortest-path-spfa-algorithm-12': [
    { id: '2491', input: 'edges = [[0,1,4],[1,2,3]], s = 0', expected_output: '[0,4,7]', is_hidden: false },
    { id: '2492', input: 'edges = [[0,1,1]], s = 0', expected_output: '[0,1]', is_hidden: true },
    { id: '2493', input: 'edges = [], s = 0', expected_output: '[0]', is_hidden: true },
  ],
  'shortest-path-a-search-13': [
    { id: '2494', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2495', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2496', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'shortest-path-min-obstacles-removal-14': [
    { id: '2497', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2498', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2499', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'shortest-path-trapping-rain-water-ii-15': [
    { id: '2500', input: 'edges = [[0,1,4],[1,2,3]], s = 0', expected_output: '[0,4,7]', is_hidden: false },
    { id: '2501', input: 'edges = [[0,1,1]], s = 0', expected_output: '[0,1]', is_hidden: true },
    { id: '2502', input: 'edges = [], s = 0', expected_output: '[0]', is_hidden: true },
  ],
  'mst-min-cost-connect-points-1': [
    { id: '2503', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2504', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2505', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'mst-connecting-cities-cheapest-2': [
    { id: '2506', input: 'arr = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '2507', input: 'arr = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '2508', input: 'arr = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'mst-redundant-edge-3': [
    { id: '2509', input: 'edges = [[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: false },
    { id: '2510', input: 'edges = [[0,1,5]]', expected_output: '5', is_hidden: true },
    { id: '2511', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'mst-optimize-water-distribution-4': [
    { id: '2512', input: 'edges = [[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: false },
    { id: '2513', input: 'edges = [[0,1,5]]', expected_output: '5', is_hidden: true },
    { id: '2514', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'mst-min-cost-to-add-edges-5': [
    { id: '2515', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '2516', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '2517', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'mst-kruskal-implementation-6': [
    { id: '2518', input: 'edges = [[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: false },
    { id: '2519', input: 'edges = [[0,1,5]]', expected_output: '5', is_hidden: true },
    { id: '2520', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'mst-prim-implementation-7': [
    { id: '2521', input: 'edges = [[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: false },
    { id: '2522', input: 'edges = [[0,1,5]]', expected_output: '5', is_hidden: true },
    { id: '2523', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'mst-number-of-msts-8': [
    { id: '2524', input: 'edges = [[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: false },
    { id: '2525', input: 'edges = [[0,1,5]]', expected_output: '5', is_hidden: true },
    { id: '2526', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'mst-maximum-spanning-tree-9': [
    { id: '2527', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2528', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2529', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'mst-second-best-mst-10': [
    { id: '2530', input: 'edges = [[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: false },
    { id: '2531', input: 'edges = [[0,1,5]]', expected_output: '5', is_hidden: true },
    { id: '2532', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'mst-mst-with-directed-edges-11': [
    { id: '2533', input: 'edges = [[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: false },
    { id: '2534', input: 'edges = [[0,1,5]]', expected_output: '5', is_hidden: true },
    { id: '2535', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'mst-min-cost-merge-stones-12': [
    { id: '2536', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2537', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2538', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'mst-kth-smallest-edge-mst-13': [
    { id: '2539', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2540', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2541', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'mst-network-mst-check-14': [
    { id: '2542', input: 'edges = [[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: false },
    { id: '2543', input: 'edges = [[0,1,5]]', expected_output: '5', is_hidden: true },
    { id: '2544', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'mst-mst-updates-15': [
    { id: '2545', input: 'edges = [[0,1,1],[1,2,2],[0,2,3]]', expected_output: '3', is_hidden: false },
    { id: '2546', input: 'edges = [[0,1,5]]', expected_output: '5', is_hidden: true },
    { id: '2547', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'scc-kosaraju-algorithm-1': [
    { id: '2548', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2549', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2550', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-tarjan-algorithm-2': [
    { id: '2551', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2552', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2553', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-strongly-connected-count-3': [
    { id: '2554', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2555', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2556', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'scc-check-strong-connectivity-4': [
    { id: '2557', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2558', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2559', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-2-sat-problem-5': [
    { id: '2560', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2561', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2562', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-scc-condensation-6': [
    { id: '2563', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2564', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2565', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-critical-connections-7': [
    { id: '2566', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2567', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2568', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-articulation-points-8': [
    { id: '2569', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2570', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2571', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-scc-topological-order-9': [
    { id: '2572', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2573', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2574', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-strongly-connected-comp-count-10': [
    { id: '2575', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2576', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2577', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'scc-check-biconnected-11': [
    { id: '2578', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2579', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2580', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-scc-by-floyd-12': [
    { id: '2581', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2582', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2583', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-iterative-tarjan-13': [
    { id: '2584', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2585', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2586', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-online-scc-14': [
    { id: '2587', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: '3', is_hidden: false },
    { id: '2588', input: 'edges = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '2589', input: 'edges = []', expected_output: '1', is_hidden: true },
  ],
  'scc-strong-connectivity-digraph-15': [
    { id: '2590', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2591', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2592', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'network-flow-max-flow-ford-fulkerson-1': [
    { id: '2593', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2594', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2595', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'network-flow-edmonds-karp-2': [
    { id: '2596', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '2597', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2598', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'network-flow-dinic-algorithm-3': [
    { id: '2599', input: 'graph = [[0,16,13],[0,0,10]], s = 0, t = 1', expected_output: '26', is_hidden: false },
    { id: '2600', input: 'graph = [[0,10],[0,0]], s = 0, t = 1', expected_output: '10', is_hidden: true },
    { id: '2601', input: 'graph = [[0]], s = 0, t = 0', expected_output: '0', is_hidden: true },
  ],
  'network-flow-min-cut-max-flow-4': [
    { id: '2602', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2603', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2604', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'network-flow-bipartite-matching-5': [
    { id: '2605', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2606', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: 'false', is_hidden: true },
    { id: '2607', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'network-flow-min-cost-max-flow-6': [
    { id: '2608', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2609', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2610', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'network-flow-max-flow-with-lower-bounds-7': [
    { id: '2611', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2612', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2613', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'network-flow-push-relabel-8': [
    { id: '2614', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2615', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2616', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'network-flow-circulation-with-demands-9': [
    { id: '2617', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2618', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2619', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'network-flow-max-independent-set-bipartite-10': [
    { id: '2620', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2621', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2622', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'network-flow-project-selection-11': [
    { id: '2623', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2624', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2625', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'network-flow-baseball-elimination-12': [
    { id: '2626', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2627', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2628', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'network-flow-image-segmentation-13': [
    { id: '2629', input: 'nums = [1,3,5], queries = [[0,2]]', expected_output: '9', is_hidden: false },
    { id: '2630', input: 'nums = [1], queries = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '2631', input: 'nums = [5,5], queries = [[0,1]]', expected_output: '10', is_hidden: true },
  ],
  'network-flow-network-flow-bipartite-14': [
    { id: '2632', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2633', input: 'edges = [[0,1],[1,2],[2,0]]', expected_output: 'false', is_hidden: true },
    { id: '2634', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'network-flow-maximum-bipartite-match-15': [
    { id: '2635', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2636', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2637', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'bipartite-graphs-is-graph-bipartite-1': [
    { id: '2638', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2639', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2640', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-possible-bipartition-2': [
    { id: '2641', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2642', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2643', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-max-bipartite-matching-3': [
    { id: '2644', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '2645', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '2646', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'bipartite-graphs-min-vertex-cover-bipartite-4': [
    { id: '2647', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2648', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2649', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'bipartite-graphs-course-schedule-bipartite-5': [
    { id: '2650', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2651', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2652', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-bipartite-coloring-6': [
    { id: '2653', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2654', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2655', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-bipartite-components-7': [
    { id: '2656', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2657', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2658', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-hungarian-algorithm-8': [
    { id: '2659', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2660', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2661', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-owl-fight-bipartite-9': [
    { id: '2662', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2663', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2664', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-two-color-graph-10': [
    { id: '2665', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2666', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2667', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-bipartite-check-dfs-11': [
    { id: '2668', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2669', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2670', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-bipartite-check-bfs-12': [
    { id: '2671', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2672', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2673', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-bipartite-graph-cycle-13': [
    { id: '2674', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2675', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2676', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-independent-set-bipartite-14': [
    { id: '2677', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2678', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2679', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'bipartite-graphs-edge-cover-bipartite-15': [
    { id: '2680', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '2681', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '2682', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'string-algorithms-longest-common-prefix-1': [
    { id: '2683', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '2684', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2685', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'string-algorithms-longest-palindromic-substr-2': [
    { id: '2686', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2687', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2688', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'string-algorithms-longest-substring-no-repeat-3': [
    { id: '2689', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2690', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2691', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'string-algorithms-string-matching-naive-4': [
    { id: '2692', input: 'edges = [[0,0],[0,1]]', expected_output: '1', is_hidden: false },
    { id: '2693', input: 'edges = []', expected_output: '0', is_hidden: true },
    { id: '2694', input: 'edges = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'string-algorithms-kmp-pattern-match-5': [
    { id: '2695', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2696', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2697', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'string-algorithms-rabin-karp-match-6': [
    { id: '2698', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '2699', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2700', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'string-algorithms-z-algorithm-7': [
    { id: '2701', input: 's = "aaaa"', expected_output: '[4,3,2,1]', is_hidden: false },
    { id: '2702', input: 's = "a"', expected_output: '[1]', is_hidden: true },
    { id: '2703', input: 's = "abc"', expected_output: '[3,0,0]', is_hidden: true },
  ],
  'string-algorithms-suffix-array-build-8': [
    { id: '2704', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2705', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2706', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'string-algorithms-longest-repeating-substring-9': [
    { id: '2707', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2708', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2709', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'string-algorithms-shortest-palindrome-10': [
    { id: '2710', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '2711', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '2712', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'string-algorithms-manacher-algorithm-11': [
    { id: '2713', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2714', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2715', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'string-algorithms-min-period-string-12': [
    { id: '2716', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2717', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2718', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'string-algorithms-word-wrap-13': [
    { id: '2719', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2720', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2721', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'string-algorithms-distinct-substrings-14': [
    { id: '2722', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2723', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2724', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'string-algorithms-longest-palindromic-subseq-15': [
    { id: '2725', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2726', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2727', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rolling-hash-implement-rolling-hash-1': [
    { id: '2728', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '2729', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2730', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'rolling-hash-string-match-rolling-hash-2': [
    { id: '2731', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '2732', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2733', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'rolling-hash-longest-duplicate-substring-3': [
    { id: '2734', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2735', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2736', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'rolling-hash-distinct-substrings-hash-4': [
    { id: '2737', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2738', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2739', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'rolling-hash-polynomial-rolling-hash-5': [
    { id: '2740', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '2741', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2742', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'rolling-hash-double-hash-match-6': [
    { id: '2743', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2744', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2745', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rolling-hash-rabin-karp-implementation-7': [
    { id: '2746', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '2747', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2748', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'rolling-hash-hash-for-substring-8': [
    { id: '2749', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2750', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2751', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'rolling-hash-hash-collisions-avoid-9': [
    { id: '2752', input: 'nums = [10,9,2,5,3,7,101,18]', expected_output: '4', is_hidden: false },
    { id: '2753', input: 'nums = [1,2,3]', expected_output: '3', is_hidden: true },
    { id: '2754', input: 'nums = [3,2,1]', expected_output: '1', is_hidden: true },
  ],
  'rolling-hash-longest-common-substring-10': [
    { id: '2755', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2756', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2757', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'rolling-hash-modular-inverse-hash-11': [
    { id: '2758', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '2759', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '2760', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'rolling-hash-rolling-hash-for-arrays-12': [
    { id: '2761', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '2762', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2763', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'rolling-hash-base-choice-for-hash-13': [
    { id: '2764', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2765', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2766', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rolling-hash-hash-of-long-strings-14': [
    { id: '2767', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2768', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2769', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rolling-hash-cyclic-string-match-15': [
    { id: '2770', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2771', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2772', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'kmp-algorithm-kmp-prefix-function-1': [
    { id: '2773', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2774', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2775', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'kmp-algorithm-kmp-pattern-search-2': [
    { id: '2776', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2777', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2778', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'kmp-algorithm-kmp-lps-array-3': [
    { id: '2779', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2780', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2781', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'kmp-algorithm-repeated-substring-pattern-4': [
    { id: '2782', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2783', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2784', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'kmp-algorithm-shortest-palindrome-kmp-5': [
    { id: '2785', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '2786', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '2787', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'kmp-algorithm-minimum-character-insert-6': [
    { id: '2788', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2789', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2790', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'kmp-algorithm-longest-happy-prefix-7': [
    { id: '2791', input: 'nums = [1,2,3,4], q = [[0,2]]', expected_output: '6', is_hidden: false },
    { id: '2792', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '2793', input: 'nums = [5,5], q = [[0,1]]', expected_output: '10', is_hidden: true },
  ],
  'kmp-algorithm-kmp-for-cycle-detection-8': [
    { id: '2794', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2795', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2796', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'kmp-algorithm-kmp-compare-two-strings-9': [
    { id: '2797', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2798', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2799', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'kmp-algorithm-kmp-longest-border-10': [
    { id: '2800', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2801', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2802', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'kmp-algorithm-kmp-string-period-11': [
    { id: '2803', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2804', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2805', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'kmp-algorithm-kmp-implementation-12': [
    { id: '2806', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2807', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2808', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'kmp-algorithm-kmp-with-wildcards-13': [
    { id: '2809', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2810', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2811', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'kmp-algorithm-kmp-streaming-match-14': [
    { id: '2812', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2813', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2814', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'kmp-algorithm-count-occurrences-kmp-15': [
    { id: '2815', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2816', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2817', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'rabin-karp-algorithm-rabin-karp-implementation-1': [
    { id: '2818', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '2819', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2820', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-multiple-patterns-2': [
    { id: '2821', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2822', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2823', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-longest-duplicate-3': [
    { id: '2824', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2825', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2826', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-with-rolling-hash-4': [
    { id: '2827', input: 'text = "abcabc", pattern = "abc"', expected_output: '[0,3]', is_hidden: false },
    { id: '2828', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2829', input: 'text = "aaa", pattern = "aa"', expected_output: '[0,1]', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-substring-search-5': [
    { id: '2830', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2831', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2832', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-multi-hash-6': [
    { id: '2833', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2834', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2835', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-plagiarism-check-7': [
    { id: '2836', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2837', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2838', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-distinct-substrings-8': [
    { id: '2839', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2840', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2841', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-subsequence-search-9': [
    { id: '2842', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2843', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2844', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-longest-common-substr-10': [
    { id: '2845', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2846', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2847', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-string-matching-11': [
    { id: '2848', input: 'edges = [[0,0],[0,1]]', expected_output: '1', is_hidden: false },
    { id: '2849', input: 'edges = []', expected_output: '0', is_hidden: true },
    { id: '2850', input: 'edges = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-for-2d-pattern-12': [
    { id: '2851', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2852', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2853', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-streaming-13': [
    { id: '2854', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2855', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2856', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-in-dna-strings-14': [
    { id: '2857', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2858', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2859', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'rabin-karp-algorithm-rk-hash-collision-15': [
    { id: '2860', input: 'nums = [10,9,2,5,3,7,101,18]', expected_output: '4', is_hidden: false },
    { id: '2861', input: 'nums = [1,2,3]', expected_output: '3', is_hidden: true },
    { id: '2862', input: 'nums = [3,2,1]', expected_output: '1', is_hidden: true },
  ],
  'z-algorithm-z-function-compute-1': [
    { id: '2863', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2864', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2865', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'z-algorithm-z-pattern-search-2': [
    { id: '2866', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2867', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2868', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'z-algorithm-z-for-string-match-3': [
    { id: '2869', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2870', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2871', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'z-algorithm-z-for-distinct-substrings-4': [
    { id: '2872', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2873', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2874', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'z-algorithm-z-for-period-check-5': [
    { id: '2875', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2876', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2877', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'z-algorithm-z-for-border-6': [
    { id: '2878', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2879', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2880', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'z-algorithm-z-vs-kmp-comparison-7': [
    { id: '2881', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2882', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2883', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'z-algorithm-z-for-substring-search-8': [
    { id: '2884', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2885', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2886', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'z-algorithm-z-algorithm-implementation-9': [
    { id: '2887', input: 's = "aaaa"', expected_output: '[4,3,2,1]', is_hidden: false },
    { id: '2888', input: 's = "a"', expected_output: '[1]', is_hidden: true },
    { id: '2889', input: 's = "abc"', expected_output: '[3,0,0]', is_hidden: true },
  ],
  'z-algorithm-z-for-palindromes-10': [
    { id: '2890', input: 's = "racecar"', expected_output: 'true', is_hidden: false },
    { id: '2891', input: 's = "hello"', expected_output: 'false', is_hidden: true },
    { id: '2892', input: 's = "a"', expected_output: 'true', is_hidden: true },
  ],
  'z-algorithm-z-for-word-boundaries-11': [
    { id: '2893', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2894', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2895', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'z-algorithm-z-for-repeated-patterns-12': [
    { id: '2896', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2897', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2898', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'z-algorithm-z-concatenation-search-13': [
    { id: '2899', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '2900', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '2901', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'z-algorithm-z-streaming-14': [
    { id: '2902', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2903', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2904', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'z-algorithm-z-for-min-period-15': [
    { id: '2905', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '2906', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '2907', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'suffix-array-build-suffix-array-naive-1': [
    { id: '2908', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2909', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2910', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'suffix-array-build-suffix-array-dc3-2': [
    { id: '2911', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2912', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2913', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'suffix-array-build-suffix-array-sa-is-3': [
    { id: '2914', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2915', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2916', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'suffix-array-kasai-lcp-array-4': [
    { id: '2917', input: 's = "banana"', expected_output: '[5,3,1,0,4,2]', is_hidden: false },
    { id: '2918', input: 's = "a"', expected_output: '[0]', is_hidden: true },
    { id: '2919', input: 's = "ababa"', expected_output: '[4,2,0,3,1]', is_hidden: true },
  ],
  'suffix-array-longest-common-substring-5': [
    { id: '2920', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2921', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2922', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'suffix-array-distinct-substrings-count-6': [
    { id: '2923', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '2924', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '2925', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'suffix-array-longest-repeated-substr-sa-7': [
    { id: '2926', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2927', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2928', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'suffix-array-number-of-occurrences-8': [
    { id: '2929', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2930', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2931', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-array-suffix-array-compare-9': [
    { id: '2932', input: 'text = "abcab", pattern = "ab"', expected_output: '[0,3]', is_hidden: false },
    { id: '2933', input: 'text = "abc", pattern = "d"', expected_output: '[]', is_hidden: true },
    { id: '2934', input: 'text = "aaa", pattern = "a"', expected_output: '[0,1,2]', is_hidden: true },
  ],
  'suffix-array-sa-for-dna-10': [
    { id: '2935', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2936', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2937', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-array-sa-for-string-distance-11': [
    { id: '2938', input: 'word1 = "horse", word2 = "ros"', expected_output: '3', is_hidden: false },
    { id: '2939', input: 'word1 = "", word2 = "a"', expected_output: '1', is_hidden: true },
    { id: '2940', input: 'word1 = "a", word2 = "a"', expected_output: '0', is_hidden: true },
  ],
  'suffix-array-sa-circular-string-12': [
    { id: '2941', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2942', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2943', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-array-sa-compression-13': [
    { id: '2944', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2945', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2946', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-array-sa-for-sorting-suffixes-14': [
    { id: '2947', input: 'arr = [4,2,7,1]', expected_output: '[1,2,4,7]', is_hidden: false },
    { id: '2948', input: 'arr = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2949', input: 'arr = [3,3,3]', expected_output: '[3,3,3]', is_hidden: true },
  ],
  'suffix-array-sa-for-burrows-wheeler-15': [
    { id: '2950', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2951', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2952', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-tree-ukkonen-algorithm-1': [
    { id: '2953', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2954', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2955', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-tree-suffix-tree-from-sa-2': [
    { id: '2956', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '2957', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2958', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'suffix-tree-longest-common-substring-st-3': [
    { id: '2959', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2960', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2961', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'suffix-tree-longest-repeated-substring-st-4': [
    { id: '2962', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2963', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2964', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'suffix-tree-longest-palindromic-substr-5': [
    { id: '2965', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2966', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2967', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'suffix-tree-suffix-tree-application-6': [
    { id: '2968', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '2969', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2970', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'suffix-tree-generalized-suffix-tree-7': [
    { id: '2971', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '2972', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2973', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'suffix-tree-suffix-tree-memory-8': [
    { id: '2974', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '2975', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '2976', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'suffix-tree-st-implementation-9': [
    { id: '2977', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2978', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2979', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-tree-st-substring-check-10': [
    { id: '2980', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2981', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2982', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'suffix-tree-st-distinct-substrings-11': [
    { id: '2983', input: 'root = [2,1,3]', expected_output: 'true', is_hidden: false },
    { id: '2984', input: 'root = [5,1,4,null,null,3,6]', expected_output: 'false', is_hidden: true },
    { id: '2985', input: 'root = [1]', expected_output: 'true', is_hidden: true },
  ],
  'suffix-tree-st-compression-12': [
    { id: '2986', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2987', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2988', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-tree-st-for-dna-13': [
    { id: '2989', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2990', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2991', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-tree-st-dynamic-build-14': [
    { id: '2992', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2993', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2994', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'suffix-tree-st-all-occurrences-15': [
    { id: '2995', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '2996', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '2997', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'computational-geometry-convex-hull-graham-scan-1': [
    { id: '2998', input: 'points = [[0,0],[1,1],[2,2]]', expected_output: '[[0,0],[2,2]]', is_hidden: false },
    { id: '2999', input: 'points = [[0,0]]', expected_output: '[[0,0]]', is_hidden: true },
    { id: '3000', input: 'points = [[0,0],[1,0],[0,1]]', expected_output: '[[0,0],[1,0],[0,1]]', is_hidden: true },
  ],
  'computational-geometry-convex-hull-jarvis-march-2': [
    { id: '3001', input: 'points = [[0,0],[1,1],[2,2]]', expected_output: '[[0,0],[2,2]]', is_hidden: false },
    { id: '3002', input: 'points = [[0,0]]', expected_output: '[[0,0]]', is_hidden: true },
    { id: '3003', input: 'points = [[0,0],[1,0],[0,1]]', expected_output: '[[0,0],[1,0],[0,1]]', is_hidden: true },
  ],
  'computational-geometry-closest-pair-points-3': [
    { id: '3004', input: 'points = [[0,0],[2,2],[3,10]]', expected_output: '15', is_hidden: false },
    { id: '3005', input: 'points = [[0,0]]', expected_output: '0', is_hidden: true },
    { id: '3006', input: 'points = [[0,0],[1,1]]', expected_output: '2', is_hidden: true },
  ],
  'computational-geometry-line-sweep-4': [
    { id: '3007', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3008', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3009', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'computational-geometry-area-of-polygon-5': [
    { id: '3010', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3011', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3012', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'computational-geometry-point-in-polygon-6': [
    { id: '3013', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3014', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3015', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'computational-geometry-convex-hull-check-7': [
    { id: '3016', input: 'points = [[0,0],[1,1],[2,2]]', expected_output: '[[0,0],[2,2]]', is_hidden: false },
    { id: '3017', input: 'points = [[0,0]]', expected_output: '[[0,0]]', is_hidden: true },
    { id: '3018', input: 'points = [[0,0],[1,0],[0,1]]', expected_output: '[[0,0],[1,0],[0,1]]', is_hidden: true },
  ],
  'computational-geometry-line-intersection-8': [
    { id: '3019', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3020', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3021', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'computational-geometry-segment-intersection-9': [
    { id: '3022', input: 'nums = [1,3,5], queries = [[0,2]]', expected_output: '9', is_hidden: false },
    { id: '3023', input: 'nums = [1], queries = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '3024', input: 'nums = [5,5], queries = [[0,1]]', expected_output: '10', is_hidden: true },
  ],
  'computational-geometry-polygon-intersection-10': [
    { id: '3025', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3026', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3027', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'computational-geometry-smallest-enclosing-circle-11': [
    { id: '3028', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '3029', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '3030', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'computational-geometry-rotating-calipers-12': [
    { id: '3031', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3032', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3033', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'computational-geometry-voronoi-diagram-13': [
    { id: '3034', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3035', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3036', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'computational-geometry-delaunay-triangulation-14': [
    { id: '3037', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3038', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3039', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'computational-geometry-half-plane-intersection-15': [
    { id: '3040', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3041', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3042', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'number-theory-gcd-euclidean-1': [
    { id: '3043', input: 'a = 12, b = 8', expected_output: '4', is_hidden: false },
    { id: '3044', input: 'a = 17, b = 5', expected_output: '1', is_hidden: true },
    { id: '3045', input: 'a = 0, b = 5', expected_output: '5', is_hidden: true },
  ],
  'number-theory-lcm-2': [
    { id: '3046', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3047', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3048', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'number-theory-modular-exponentiation-3': [
    { id: '3049', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '3050', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '3051', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'number-theory-modular-inverse-4': [
    { id: '3052', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '3053', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '3054', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'number-theory-sieve-of-eratosthenes-5': [
    { id: '3055', input: 'a = 12, b = 8', expected_output: '4', is_hidden: false },
    { id: '3056', input: 'a = 17, b = 5', expected_output: '1', is_hidden: true },
    { id: '3057', input: 'a = 0, b = 5', expected_output: '5', is_hidden: true },
  ],
  'number-theory-prime-check-6': [
    { id: '3058', input: 'a = 12, b = 8', expected_output: '4', is_hidden: false },
    { id: '3059', input: 'a = 17, b = 5', expected_output: '1', is_hidden: true },
    { id: '3060', input: 'a = 0, b = 5', expected_output: '5', is_hidden: true },
  ],
  'number-theory-prime-factorization-7': [
    { id: '3061', input: 'a = 12, b = 8', expected_output: '4', is_hidden: false },
    { id: '3062', input: 'a = 17, b = 5', expected_output: '1', is_hidden: true },
    { id: '3063', input: 'a = 0, b = 5', expected_output: '5', is_hidden: true },
  ],
  'number-theory-euler-totient-8': [
    { id: '3064', input: 'n = 6', expected_output: '2', is_hidden: false },
    { id: '3065', input: 'n = 7', expected_output: '6', is_hidden: true },
    { id: '3066', input: 'n = 1', expected_output: '1', is_hidden: true },
  ],
  'number-theory-chinese-remainder-theorem-9': [
    { id: '3067', input: 'rem = [2,3], mod = [3,5]', expected_output: '8', is_hidden: false },
    { id: '3068', input: 'rem = [1], mod = [2]', expected_output: '1', is_hidden: true },
    { id: '3069', input: 'rem = [1,2], mod = [3,5]', expected_output: '11', is_hidden: true },
  ],
  'number-theory-catalan-number-10': [
    { id: '3070', input: 'n = 3', expected_output: '5', is_hidden: false },
    { id: '3071', input: 'n = 0', expected_output: '1', is_hidden: true },
    { id: '3072', input: 'n = 1', expected_output: '1', is_hidden: true },
  ],
  'number-theory-stirling-numbers-11': [
    { id: '3073', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3074', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3075', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'number-theory-extended-euclidean-12': [
    { id: '3076', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3077', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3078', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'number-theory-matrix-exponentiation-13': [
    { id: '3079', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3080', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3081', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'number-theory-fermat-little-theorem-14': [
    { id: '3082', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3083', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3084', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'number-theory-miller-rabin-primality-15': [
    { id: '3085', input: 'n = 10', expected_output: '[2,3,5,7]', is_hidden: false },
    { id: '3086', input: 'n = 1', expected_output: '[]', is_hidden: true },
    { id: '3087', input: 'n = 2', expected_output: '[2]', is_hidden: true },
  ],
  'game-theory-nim-game-1': [
    { id: '3088', input: 'n = 4', expected_output: 'false', is_hidden: false },
    { id: '3089', input: 'n = 1', expected_output: 'true', is_hidden: true },
    { id: '3090', input: 'n = 5', expected_output: 'true', is_hidden: true },
  ],
  'game-theory-stone-game-2': [
    { id: '3091', input: 'n = 4', expected_output: 'false', is_hidden: false },
    { id: '3092', input: 'n = 1', expected_output: 'true', is_hidden: true },
    { id: '3093', input: 'n = 5', expected_output: 'true', is_hidden: true },
  ],
  'game-theory-stone-game-iv-3': [
    { id: '3094', input: 'n = 4', expected_output: 'false', is_hidden: false },
    { id: '3095', input: 'n = 1', expected_output: 'true', is_hidden: true },
    { id: '3096', input: 'n = 5', expected_output: 'true', is_hidden: true },
  ],
  'game-theory-coins-in-line-4': [
    { id: '3097', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3098', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3099', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'game-theory-can-win-all-coins-5': [
    { id: '3100', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3101', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3102', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'game-theory-optimal-strategy-game-6': [
    { id: '3103', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3104', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3105', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'game-theory-stone-game-ix-7': [
    { id: '3106', input: 'n = 4', expected_output: 'false', is_hidden: false },
    { id: '3107', input: 'n = 1', expected_output: 'true', is_hidden: true },
    { id: '3108', input: 'n = 5', expected_output: 'true', is_hidden: true },
  ],
  'game-theory-stone-game-v-8': [
    { id: '3109', input: 'n = 4', expected_output: 'false', is_hidden: false },
    { id: '3110', input: 'n = 1', expected_output: 'true', is_hidden: true },
    { id: '3111', input: 'n = 5', expected_output: 'true', is_hidden: true },
  ],
  'game-theory-cat-and-mouse-9': [
    { id: '3112', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '3113', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '3114', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'game-theory-chess-knight-moves-10': [
    { id: '3115', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '3116', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '3117', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'game-theory-tic-tac-toe-winner-11': [
    { id: '3118', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3119', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3120', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'game-theory-predict-winner-12': [
    { id: '3121', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3122', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3123', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'game-theory-minesweeper-click-13': [
    { id: '3124', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '3125', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '3126', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'game-theory-game-of-life-14': [
    { id: '3127', input: 'board = [[0,1,0],[0,0,1],[1,1,1]]', expected_output: '[[0,0,0],[1,0,1],[0,1,1]]', is_hidden: false },
    { id: '3128', input: 'board = [[1]]', expected_output: '[[0]]', is_hidden: true },
    { id: '3129', input: 'board = [[0,0],[0,0]]', expected_output: '[[0,0],[0,0]]', is_hidden: true },
  ],
  'game-theory-sprague-grundy-15': [
    { id: '3130', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3131', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3132', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'bitmasking-subsets-via-bitmask-1': [
    { id: '3133', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '3134', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '3135', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'bitmasking-bitmask-dp-tsp-2': [
    { id: '3136', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3137', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3138', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-assignment-3': [
    { id: '3139', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3140', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3141', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-shortest-hamiltonian-path-4': [
    { id: '3142', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3143', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3144', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-for-subsets-5': [
    { id: '3145', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '3146', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '3147', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'bitmasking-bitmask-dp-counting-6': [
    { id: '3148', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '3149', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '3150', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-backtracking-7': [
    { id: '3151', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3152', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3153', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-longest-path-8': [
    { id: '3154', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3155', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3156', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-for-all-pairs-9': [
    { id: '3157', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3158', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3159', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-and-dp-10': [
    { id: '3160', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3161', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3162', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-cycle-11': [
    { id: '3163', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3164', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3165', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-for-count-subset-12': [
    { id: '3166', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '3167', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '3168', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-with-memo-13': [
    { id: '3169', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '3170', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '3171', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'bitmasking-bitmask-for-coloring-14': [
    { id: '3172', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3173', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3174', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'bitmasking-bitmask-xor-max-15': [
    { id: '3175', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '3176', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '3177', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-subsets-sum-1': [
    { id: '3178', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '3179', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '3180', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-closest-subset-sum-2': [
    { id: '3181', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '3182', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '3183', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-for-4-sum-3': [
    { id: '3184', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '3185', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '3186', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-magic-numbers-4': [
    { id: '3187', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '3188', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '3189', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-partition-5': [
    { id: '3190', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '3191', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '3192', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-subset-count-6': [
    { id: '3193', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '3194', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '3195', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-two-arrays-7': [
    { id: '3196', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '3197', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '3198', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-subset-xor-8': [
    { id: '3199', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '3200', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '3201', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-for-pairs-9': [
    { id: '3202', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '3203', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '3204', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-balanced-split-10': [
    { id: '3205', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '3206', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '3207', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-linear-recurrence-11': [
    { id: '3208', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '3209', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '3210', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-for-lattice-paths-12': [
    { id: '3211', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '3212', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '3213', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-for-closest-pair-13': [
    { id: '3214', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '3215', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '3216', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-boolean-parity-14': [
    { id: '3217', input: 'arr = [1,2,3,4,5], target = 5', expected_output: 'true', is_hidden: false },
    { id: '3218', input: 'arr = [1], target = 2', expected_output: 'false', is_hidden: true },
    { id: '3219', input: 'arr = [5,5], target = 10', expected_output: 'true', is_hidden: true },
  ],
  'meet-in-the-middle-mitm-sum-constraints-15': [
    { id: '3220', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '3221', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '3222', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-range-sum-1': [
    { id: '3268', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '3269', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '3270', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-min-max-2': [
    { id: '3271', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '3272', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '3273', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-update-3': [
    { id: '3274', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3275', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3276', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-distinct-4': [
    { id: '3277', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3278', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3279', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-mode-5': [
    { id: '3280', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '3281', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '3282', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-kth-6': [
    { id: '3283', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '3284', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '3285', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-xor-7': [
    { id: '3286', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3287', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3288', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-lazy-8': [
    { id: '3289', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3290', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3291', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-persistent-9': [
    { id: '3292', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3293', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3294', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-frequency-10': [
    { id: '3295', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '3296', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '3297', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-2d-11': [
    { id: '3298', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3299', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3300', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-mo-optimization-12': [
    { id: '3301', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '3302', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '3303', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-online-13': [
    { id: '3304', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3305', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3306', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-predecessor-14': [
    { id: '3307', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3308', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3309', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'sqrt-decomposition-sqrt-block-3-queries-15': [
    { id: '3310', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3311', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3312', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'hld-hld-build-1': [
    { id: '3313', input: 'edges = [[0,1],[1,2]], q = [[0,2]]', expected_output: '3', is_hidden: false },
    { id: '3314', input: 'edges = [[0,1]], q = [[0,1]]', expected_output: '2', is_hidden: true },
    { id: '3315', input: 'edges = [], q = [[0,0]]', expected_output: '1', is_hidden: true },
  ],
  'hld-hld-path-query-2': [
    { id: '3316', input: 'edges = [[0,1],[1,2]], q = [[0,2]]', expected_output: '3', is_hidden: false },
    { id: '3317', input: 'edges = [[0,1]], q = [[0,1]]', expected_output: '2', is_hidden: true },
    { id: '3318', input: 'edges = [], q = [[0,0]]', expected_output: '1', is_hidden: true },
  ],
  'hld-hld-path-update-3': [
    { id: '3319', input: 'edges = [[0,1],[1,2]], q = [[0,2]]', expected_output: '3', is_hidden: false },
    { id: '3320', input: 'edges = [[0,1]], q = [[0,1]]', expected_output: '2', is_hidden: true },
    { id: '3321', input: 'edges = [], q = [[0,0]]', expected_output: '1', is_hidden: true },
  ],
  'hld-hld-subtree-query-4': [
    { id: '3322', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '3323', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '3324', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'hld-hld-subtree-update-5': [
    { id: '3325', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '3326', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '3327', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'hld-hld-with-segment-tree-6': [
    { id: '3328', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '3329', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '3330', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'hld-hld-lca-7': [
    { id: '3331', input: 'edges = [[0,1],[1,2]], q = [[0,2]]', expected_output: '3', is_hidden: false },
    { id: '3332', input: 'edges = [[0,1]], q = [[0,1]]', expected_output: '2', is_hidden: true },
    { id: '3333', input: 'edges = [], q = [[0,0]]', expected_output: '1', is_hidden: true },
  ],
  'hld-hld-distance-8': [
    { id: '3334', input: 'word1 = "horse", word2 = "ros"', expected_output: '3', is_hidden: false },
    { id: '3335', input: 'word1 = "", word2 = "a"', expected_output: '1', is_hidden: true },
    { id: '3336', input: 'word1 = "a", word2 = "a"', expected_output: '0', is_hidden: true },
  ],
  'hld-hld-kth-ancestor-9': [
    { id: '3337', input: 'nums = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '3338', input: 'nums = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '3339', input: 'nums = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'hld-hld-edge-queries-10': [
    { id: '3340', input: 'edges = [[0,1],[1,2]], q = [[0,2]]', expected_output: '3', is_hidden: false },
    { id: '3341', input: 'edges = [[0,1]], q = [[0,1]]', expected_output: '2', is_hidden: true },
    { id: '3342', input: 'edges = [], q = [[0,0]]', expected_output: '1', is_hidden: true },
  ],
  'hld-hld-for-trees-11': [
    { id: '3343', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '3344', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '3345', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'hld-hld-path-sum-12': [
    { id: '3346', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '3347', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '3348', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'hld-hld-for-color-updates-13': [
    { id: '3349', input: 'edges = [[0,1],[1,2]], q = [[0,2]]', expected_output: '3', is_hidden: false },
    { id: '3350', input: 'edges = [[0,1]], q = [[0,1]]', expected_output: '2', is_hidden: true },
    { id: '3351', input: 'edges = [], q = [[0,0]]', expected_output: '1', is_hidden: true },
  ],
  'hld-hld-persistent-14': [
    { id: '3352', input: 'edges = [[0,1],[1,2]], q = [[0,2]]', expected_output: '3', is_hidden: false },
    { id: '3353', input: 'edges = [[0,1]], q = [[0,1]]', expected_output: '2', is_hidden: true },
    { id: '3354', input: 'edges = [], q = [[0,0]]', expected_output: '1', is_hidden: true },
  ],
  'hld-hld-with-fenwick-15': [
    { id: '3355', input: 'nums = [1,3,5], queries = [[0,2]]', expected_output: '9', is_hidden: false },
    { id: '3356', input: 'nums = [1], queries = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '3357', input: 'nums = [5,5], queries = [[0,1]]', expected_output: '10', is_hidden: true },
  ],
  'centroid-decomposition-centroid-find-1': [
    { id: '3358', input: 'edges = [[0,1],[1,2]]', expected_output: '1', is_hidden: false },
    { id: '3359', input: 'edges = [[0,1]]', expected_output: '0', is_hidden: true },
    { id: '3360', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-tree-build-2': [
    { id: '3361', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '3362', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '3363', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'centroid-decomposition-centroid-path-queries-3': [
    { id: '3364', input: 'edges = [[0,1],[1,2]]', expected_output: '1', is_hidden: false },
    { id: '3365', input: 'edges = [[0,1]]', expected_output: '0', is_hidden: true },
    { id: '3366', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-subtree-queries-4': [
    { id: '3367', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '3368', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '3369', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'centroid-decomposition-centroid-distance-5': [
    { id: '3370', input: 'word1 = "horse", word2 = "ros"', expected_output: '3', is_hidden: false },
    { id: '3371', input: 'word1 = "", word2 = "a"', expected_output: '1', is_hidden: true },
    { id: '3372', input: 'word1 = "a", word2 = "a"', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-kth-sum-6': [
    { id: '3373', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '3374', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '3375', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-for-distinct-paths-7': [
    { id: '3376', input: 'edges = [[0,1],[1,2]]', expected_output: '1', is_hidden: false },
    { id: '3377', input: 'edges = [[0,1]]', expected_output: '0', is_hidden: true },
    { id: '3378', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-update-queries-8': [
    { id: '3379', input: 'edges = [[0,1],[1,2]]', expected_output: '1', is_hidden: false },
    { id: '3380', input: 'edges = [[0,1]]', expected_output: '0', is_hidden: true },
    { id: '3381', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-frequency-9': [
    { id: '3382', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '3383', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '3384', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-for-closest-pair-10': [
    { id: '3385', input: 'edges = [[0,1],[1,2]]', expected_output: '1', is_hidden: false },
    { id: '3386', input: 'edges = [[0,1]]', expected_output: '0', is_hidden: true },
    { id: '3387', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-online-queries-11': [
    { id: '3388', input: 'edges = [[0,1],[1,2]]', expected_output: '1', is_hidden: false },
    { id: '3389', input: 'edges = [[0,1]]', expected_output: '0', is_hidden: true },
    { id: '3390', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-for-sum-paths-12': [
    { id: '3391', input: 'a = 5, b = 3', expected_output: '8', is_hidden: false },
    { id: '3392', input: 'a = -2, b = 7', expected_output: '5', is_hidden: true },
    { id: '3393', input: 'a = 0, b = 0', expected_output: '0', is_hidden: true },
  ],
  'centroid-decomposition-centroid-max-path-13': [
    { id: '3394', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '3395', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '3396', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'centroid-decomposition-centroid-with-mo-14': [
    { id: '3397', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '3398', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '3399', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'centroid-decomposition-centroid-lca-15': [
    { id: '3400', input: 'edges = [[0,1],[1,2]]', expected_output: '1', is_hidden: false },
    { id: '3401', input: 'edges = [[0,1]]', expected_output: '0', is_hidden: true },
    { id: '3402', input: 'edges = []', expected_output: '0', is_hidden: true },
  ],
  'advanced-dp-dp-with-bitmask-1': [
    { id: '3403', input: 'dist = [[0,10,15],[10,0,20],[15,20,0]]', expected_output: '45', is_hidden: false },
    { id: '3404', input: 'dist = [[0,1],[1,0]]', expected_output: '2', is_hidden: true },
    { id: '3405', input: 'dist = [[0]]', expected_output: '0', is_hidden: true },
  ],
  'advanced-dp-digit-dp-2': [
    { id: '3406', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3407', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3408', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'advanced-dp-dp-on-trees-3': [
    { id: '3409', input: 'root = [1,2,3]', expected_output: '[1,2,3]', is_hidden: false },
    { id: '3410', input: 'root = [1]', expected_output: '[1]', is_hidden: true },
    { id: '3411', input: 'root = []', expected_output: '[]', is_hidden: true },
  ],
  'advanced-dp-dp-on-dag-4': [
    { id: '3412', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3413', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3414', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'advanced-dp-dp-with-divide-conquer-5': [
    { id: '3415', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3416', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3417', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'advanced-dp-dp-with-convex-hull-6': [
    { id: '3418', input: 'points = [[0,0],[1,1],[2,2]]', expected_output: '[[0,0],[2,2]]', is_hidden: false },
    { id: '3419', input: 'points = [[0,0]]', expected_output: '[[0,0]]', is_hidden: true },
    { id: '3420', input: 'points = [[0,0],[1,0],[0,1]]', expected_output: '[[0,0],[1,0],[0,1]]', is_hidden: true },
  ],
  'advanced-dp-dp-with-knuth-7': [
    { id: '3421', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3422', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3423', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'advanced-dp-profile-dp-8': [
    { id: '3424', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3425', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3426', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'advanced-dp-dp-with-state-compression-9': [
    { id: '3427', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3428', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3429', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'advanced-dp-dp-on-subset-10': [
    { id: '3430', input: 'nums = [1,2]', expected_output: '[[],[1],[2],[1,2]]', is_hidden: false },
    { id: '3431', input: 'nums = [1]', expected_output: '[[],[1]]', is_hidden: true },
    { id: '3432', input: 'nums = []', expected_output: '[[]]', is_hidden: true },
  ],
  'advanced-dp-dp-with-long-long-11': [
    { id: '3433', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3434', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3435', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'advanced-dp-dp-with-modular-12': [
    { id: '3436', input: 'arr = [1,2,1], q = [[0,2]]', expected_output: '[2]', is_hidden: false },
    { id: '3437', input: 'arr = [1], q = [[0,0]]', expected_output: '[1]', is_hidden: true },
    { id: '3438', input: 'arr = [1,1], q = [[0,1]]', expected_output: '[2]', is_hidden: true },
  ],
  'advanced-dp-dp-persistent-13': [
    { id: '3439', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3440', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3441', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'advanced-dp-dp-sparse-table-14': [
    { id: '3442', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '3443', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '3444', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'advanced-dp-dp-count-paths-15': [
    { id: '3445', input: 'arr = [1,2,2,3]', expected_output: '2', is_hidden: false },
    { id: '3446', input: 'arr = [1,1,1]', expected_output: '3', is_hidden: true },
    { id: '3447', input: 'arr = []', expected_output: '0', is_hidden: true },
  ],
  'advanced-graphs-bridges-in-graph-1': [
    { id: '3448', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3449', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3450', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-articulation-points-2': [
    { id: '3451', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3452', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3453', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-2-sat-3': [
    { id: '3454', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3455', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3456', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-maximum-flow-min-cut-4': [
    { id: '3457', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '3458', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '3459', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'advanced-graphs-eulerian-path-circuit-5': [
    { id: '3460', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3461', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3462', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-hamiltonian-path-6': [
    { id: '3463', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3464', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3465', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-bipartite-matching-7': [
    { id: '3466', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3467', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3468', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-stable-marriage-8': [
    { id: '3469', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3470', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3471', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-max-independent-set-9': [
    { id: '3472', input: 'arr = [1,5,3,9]', expected_output: '9', is_hidden: false },
    { id: '3473', input: 'arr = [-1,-5]', expected_output: '-1', is_hidden: true },
    { id: '3474', input: 'arr = [7]', expected_output: '7', is_hidden: true },
  ],
  'advanced-graphs-min-vertex-cover-10': [
    { id: '3475', input: 'arr = [4,2,8,1]', expected_output: '1', is_hidden: false },
    { id: '3476', input: 'arr = [-3,-1]', expected_output: '-3', is_hidden: true },
    { id: '3477', input: 'arr = [5]', expected_output: '5', is_hidden: true },
  ],
  'advanced-graphs-graph-coloring-11': [
    { id: '3478', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3479', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3480', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-strongly-connected-12': [
    { id: '3481', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3482', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3483', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-chinese-postman-13': [
    { id: '3484', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3485', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3486', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-traveling-salesman-14': [
    { id: '3487', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3488', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3489', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'advanced-graphs-multi-source-bfs-15': [
    { id: '3490', input: 'edges = [[0,1],[1,2]]', expected_output: 'true', is_hidden: false },
    { id: '3491', input: 'edges = [[0,1],[2,3]]', expected_output: 'false', is_hidden: true },
    { id: '3492', input: 'edges = []', expected_output: 'true', is_hidden: true },
  ],
  'cp-techniques-fast-i-o-1': [
    { id: '3493', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3494', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3495', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-bitset-optimization-2': [
    { id: '3496', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3497', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3498', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-coordinate-compression-3': [
    { id: '3499', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3500', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3501', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-randomized-algorithms-4': [
    { id: '3502', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3503', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3504', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-two-heaps-5': [
    { id: '3505', input: 'arr = [3,2,1,5,6], k = 2', expected_output: '5', is_hidden: false },
    { id: '3506', input: 'arr = [1], k = 1', expected_output: '1', is_hidden: true },
    { id: '3507', input: 'arr = [1,2,3], k = 3', expected_output: '1', is_hidden: true },
  ],
  'cp-techniques-lazy-propagation-6': [
    { id: '3508', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3509', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3510', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-binary-lifting-7': [
    { id: '3511', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3512', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3513', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-sparse-table-tricks-8': [
    { id: '3514', input: 'nums = [1,3,5,7], q = [[0,3]]', expected_output: '1', is_hidden: false },
    { id: '3515', input: 'nums = [1], q = [[0,0]]', expected_output: '1', is_hidden: true },
    { id: '3516', input: 'nums = [5,5], q = [[0,1]]', expected_output: '5', is_hidden: true },
  ],
  'cp-techniques-pbds-tricks-9': [
    { id: '3517', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3518', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3519', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-ternary-search-10': [
    { id: '3520', input: 'nums = [1,3,5,7], target = 5', expected_output: '2', is_hidden: false },
    { id: '3521', input: 'nums = [1,3,5,7], target = 4', expected_output: '-1', is_hidden: true },
    { id: '3522', input: 'nums = [1], target = 1', expected_output: '0', is_hidden: true },
  ],
  'cp-techniques-hill-climbing-11': [
    { id: '3523', input: 'n = 3', expected_output: '3', is_hidden: false },
    { id: '3524', input: 'n = 1', expected_output: '1', is_hidden: true },
    { id: '3525', input: 'n = 5', expected_output: '8', is_hidden: true },
  ],
  'cp-techniques-i-o-in-java-12': [
    { id: '3526', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3527', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3528', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-i-o-in-python-13': [
    { id: '3529', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3530', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3531', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-debugging-tips-14': [
    { id: '3532', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3533', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3534', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  'cp-techniques-time-complexity-tips-15': [
    { id: '3535', input: 'input1', expected_output: 'output1', is_hidden: false },
    { id: '3536', input: 'input2', expected_output: 'output2', is_hidden: true },
    { id: '3537', input: 'input3', expected_output: 'output3', is_hidden: true },
  ],
  // ====== NEW TEST CASES (30 per topic) ======
  'middle-of-the-linked-list': [
    { id: '1', input: `[1,2,3,4,5]`, expected_output: `[3,4,5]`, is_hidden: false },
    { id: '2', input: `[1,2,3,4,5,6]`, expected_output: `[4,5,6]`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `[1]`, is_hidden: true }
  ],
  'delete-node-in-a-linked-list': [
    { id: '1', input: `[4,5,1,9], node=5`, expected_output: `[4,1,9]`, is_hidden: false },
    { id: '2', input: `[4,5,1,9], node=1`, expected_output: `[4,5,9]`, is_hidden: true },
    { id: '3', input: `[1,2], node=1`, expected_output: `[2]`, is_hidden: true }
  ],
  'add-two-numbers': [
    { id: '1', input: `[2,4,3], [5,6,4]`, expected_output: `[7,0,8]`, is_hidden: false },
    { id: '2', input: `[0], [0]`, expected_output: `[0]`, is_hidden: true },
    { id: '3', input: `[9,9,9,9,9,9,9], [9,9,9,9]`, expected_output: `[8,9,9,9,0,0,0,1]`, is_hidden: true }
  ],
  'remove-nth-node-from-end-of-list': [
    { id: '1', input: `[1,2,3,4,5], n=2`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2', input: `[1], n=1`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `[1,2], n=1`, expected_output: `[1]`, is_hidden: true }
  ],
  'swap-nodes-in-pairs': [
    { id: '1', input: `[1,2,3,4]`, expected_output: `[2,1,4,3]`, is_hidden: false },
    { id: '2', input: `[]`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `[1]`, is_hidden: true }
  ],
  'rotate-list': [
    { id: '1', input: `[0,1,2], k=4`, expected_output: `[2,0,1]`, is_hidden: false },
    { id: '2', input: `[0,1,2], k=0`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '3', input: `[1,2], k=5`, expected_output: `[1,2]`, is_hidden: true }
  ],
  'partition-list': [
    { id: '1', input: `[1,4,3,2,5,2], x=3`, expected_output: `[1,2,2,4,3,5]`, is_hidden: false },
    { id: '2', input: `[2,1], x=2`, expected_output: `[1,2]`, is_hidden: true },
    { id: '3', input: `[1], x=0`, expected_output: `[1]`, is_hidden: true }
  ],
  'merge-k-sorted-lists': [
    { id: '1', input: `[[1,4,5],[1,3,4],[2,6]]`, expected_output: `[1,1,2,3,4,4,5,6]`, is_hidden: false },
    { id: '2', input: `[]`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `[[]]`, expected_output: `[]`, is_hidden: true }
  ],
  'reverse-nodes-in-k-group': [
    { id: '1', input: `[1,2,3,4,5], k=2`, expected_output: `[2,1,4,3,5]`, is_hidden: false },
    { id: '2', input: `[1,2,3,4,5], k=3`, expected_output: `[3,2,1,4,5]`, is_hidden: true },
    { id: '3', input: `[1], k=1`, expected_output: `[1]`, is_hidden: true }
  ],
  'lru-cache': [
    { id: '1', input: `[["LRUCache","put","get","put","get","get"],[[],[1,1],[1],[2,2],[1],[2]]]`, expected_output: `[null,null,1,null,-1,2]`, is_hidden: false },
    { id: '2', input: `[["LRUCache","put","put","get","put","get","get"],[[],[2,2],[1,1],[2],[3,3],[2],[3]]]`, expected_output: `[null,null,null,2,null,-1,3]`, is_hidden: true },
    { id: '3', input: `[["LRUCache","put","get"],[[],[1,1],[1]]]`, expected_output: `[null,null,1]`, is_hidden: true }
  ],
  'copy-list-with-random-pointer': [
    { id: '1', input: `[[7,null],[13,0],[11,4],[10,2],[1,0]]`, expected_output: `[[7,null],[13,0],[11,4],[10,2],[1,0]]`, is_hidden: false },
    { id: '2', input: `[[1,1],[2,1]]`, expected_output: `[[1,1],[2,1]]`, is_hidden: true },
    { id: '3', input: `[[3,null],[3,0],[3,null]]`, expected_output: `[[3,null],[3,0],[3,null]]`, is_hidden: true }
  ],
  'sort-list': [
    { id: '1', input: `[4,2,1,3]`, expected_output: `[1,2,3,4]`, is_hidden: false },
    { id: '2', input: `[-1,5,3,4,0]`, expected_output: `[-1,0,3,4,5]`, is_hidden: true },
    { id: '3', input: `[]`, expected_output: `[]`, is_hidden: true }
  ],
  'min-stack': [
    { id: '1', input: `[["MinStack","push","push","push","getMin","pop","top","getMin"],[[],[-2],[0],[-3],[],[],[],[]]]`, expected_output: `[null,null,null,null,-3,null,0,-2]`, is_hidden: false },
    { id: '2', input: `[["MinStack","push","getMin","push","getMin","pop","getMin"],[[],[5],[],[3],[],[],[]]]`, expected_output: `[null,null,5,null,3,null,5]`, is_hidden: true },
    { id: '3', input: `[["MinStack","push","push","getMin"],[[],[1],[2],[]]]`, expected_output: `[null,null,null,1]`, is_hidden: true }
  ],
  'implement-queue-using-stacks': [
    { id: '1', input: `[["MyQueue","push","push","peek","pop","empty"],[[],[1],[2],[],[],[]]]`, expected_output: `[null,null,null,1,1,false]`, is_hidden: false },
    { id: '2', input: `[["MyQueue","push","pop","push","peek"],[[],[1],[],[2],[]]]`, expected_output: `[null,null,1,null,2]`, is_hidden: true },
    { id: '3', input: `[["MyQueue","empty"],[[],[]]]`, expected_output: `[null,true]`, is_hidden: true }
  ],
  'asteroid-collision': [
    { id: '2445', input: `asteroids = [5,10,-5]`, expected_output: `[5,10]`, is_hidden: false },
    { id: '2445', input: `asteroids = [8,-8]`, expected_output: `[]`, is_hidden: true },
    { id: '2445', input: `asteroids = [10,2,-5]`, expected_output: `[10]`, is_hidden: true }
  ],
  'simplify-path': [
    { id: '1', input: `/home/`, expected_output: `/home`, is_hidden: false },
    { id: '2', input: `/../`, expected_output: `/`, is_hidden: true },
    { id: '3', input: `/home//foo/`, expected_output: `/home/foo`, is_hidden: true }
  ],
  'number-of-recent-calls': [
    { id: '1', input: `[["RecentCounter","ping","ping","ping","ping"],[[1],[1],[100],[3001],[3002]]]`, expected_output: `[null,1,2,3,3]`, is_hidden: false },
    { id: '2', input: `[["RecentCounter","ping","ping","ping"],[[1],[1],[2],[3]]]`, expected_output: `[null,1,2,3]`, is_hidden: true },
    { id: '3', input: `[["RecentCounter","ping"],[[1]]]`, expected_output: `[null,1]`, is_hidden: true }
  ],
  'largest-rectangle-in-histogram': [
    { id: '2438', input: `heights = [2,1,5,6,2,3]`, expected_output: `10`, is_hidden: false },
    { id: '2438', input: `heights = [2,4]`, expected_output: `4`, is_hidden: true },
    { id: '2438', input: `heights = [1,1,1,1]`, expected_output: `4`, is_hidden: true }
  ],
  'maximal-rectangle': [
    { id: '2442', input: `matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]`, expected_output: `6`, is_hidden: false },
    { id: '2442', input: `matrix = [["0"]]`, expected_output: `0`, is_hidden: true },
    { id: '2442', input: `matrix = [["1"]]`, expected_output: `1`, is_hidden: true }
  ],
  'trapping-rain-water-stack': [
    { id: '1', input: `[0,1,0,2,1,0,1,3,2,1,2,1]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `[4,2,0,3,2,5]`, expected_output: `9`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `0`, is_hidden: true }
  ],
  'car-fleet': [
    { id: '2450', input: `target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]`, expected_output: `3`, is_hidden: false },
    { id: '2450', input: `target = 10, position = [3], speed = [3]`, expected_output: `1`, is_hidden: true },
    { id: '2450', input: `target = 10, position = [6,8], speed = [3,2]`, expected_output: `2`, is_hidden: true }
  ],
  'implement-stack-using-queues': [
    { id: '1', input: `[["MyStack","push","push","top","pop","empty"],[[],[1],[2],[],[],[]]]`, expected_output: `[null,null,null,2,2,false]`, is_hidden: false },
    { id: '2', input: `[["MyStack","push","pop","empty"],[[],[1],[],[]]]`, expected_output: `[null,null,1,true]`, is_hidden: true },
    { id: '3', input: `[["MyStack","empty"],[[],[]]]`, expected_output: `[null,true]`, is_hidden: true }
  ],
  'number-of-students-unable-to-eat-lunch': [
    { id: '1', input: `[1,1,0,0], [0,1,0,1]`, expected_output: `0`, is_hidden: false },
    { id: '2', input: `[1,1,1,0,0,1], [1,0,0,0,1,1]`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `[1,1], [1,1]`, expected_output: `0`, is_hidden: true }
  ],
  'first-unique-character': [
    { id: '1', input: `"leetcode"`, expected_output: `0`, is_hidden: false },
    { id: '2', input: `"loveleetcode"`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `"aabb"`, expected_output: `-1`, is_hidden: true }
  ],
  'number-of-visible-people-in-a-queue': [
    { id: '2447', input: `heights = [10,6,8,5,11,9]`, expected_output: `[3,1,2,1,0,0]`, is_hidden: false },
    { id: '2447', input: `heights = [1,2,3]`, expected_output: `[2,1,0]`, is_hidden: true },
    { id: '2447', input: `heights = [3,1,2]`, expected_output: `[0,1,0]`, is_hidden: true }
  ],
  'crawler-log-flight': [
    { id: '1', input: `["d1/","d2/","../","d21/","./"]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `["d1/","d2/","./","d3/","../","d31/"]`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `["../"]`, expected_output: `0`, is_hidden: true }
  ],
  'rotting-oranges': [
    { id: '1', input: `[[2,1,1],[1,1,0],[0,1,1]]`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `[[2,1,1],[0,1,1],[1,0,1]]`, expected_output: `-1`, is_hidden: true },
    { id: '3', input: `[[0]]`, expected_output: `0`, is_hidden: true }
  ],
  'open-the-lock': [
    { id: '1', input: `deadends=["0201","0102","0103","2001","2002"], target="0002"`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `deadends=["8888"], target="0009"`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `deadends=[], target="0000"`, expected_output: `0`, is_hidden: true }
  ],
  'perfect-squares': [
    { id: '1', input: `12`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `13`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `1`, expected_output: `1`, is_hidden: true }
  ],
  'shortest-path-binary-matrix': [
    { id: '1', input: `[[0,1],[1,0]]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `[[0,0,0],[1,1,0],[1,1,0]]`, expected_output: `4`, is_hidden: true },
    { id: '3', input: `[[1]]`, expected_output: `1`, is_hidden: true }
  ],
  '01-matrix': [
    { id: '1', input: `[[0,0,0],[0,1,0],[0,0,0]]`, expected_output: `[[0,0,0],[0,1,0],[0,0,0]]`, is_hidden: false },
    { id: '2', input: `[[0,1,0],[0,1,0],[0,1,0]]`, expected_output: `[[0,1,0],[0,1,0],[0,1,0]]`, is_hidden: true },
    { id: '3', input: `[[1]]`, expected_output: `[[0]]`, is_hidden: true }
  ],
  'alien-dictionary-queue': [
    { id: '1', input: `["wrt","wrf","er","ett","rftt"]`, expected_output: `"wertf"`, is_hidden: false },
    { id: '2', input: `["z","x"]`, expected_output: `"zx"`, is_hidden: true },
    { id: '3', input: `["abc","def"]`, expected_output: `""`, is_hidden: true }
  ],
  'sequence-reconstruction': [
    { id: '1', input: `nums=[1,2,3], seqs=[[1,2],[1,3]]`, expected_output: `false`, is_hidden: false },
    { id: '2', input: `nums=[1,2,3], seqs=[[1,2]]`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `nums=[1,2], seqs=[[1,2]]`, expected_output: `true`, is_hidden: true }
  ],
  'critical-connections': [
    { id: '2515', input: `n=4, connections=[[0,1],[1,2],[2,0],[1,3]]`, expected_output: `[[1,3]]`, is_hidden: false },
    { id: '2515', input: `n=2, connections=[[0,1]]`, expected_output: `[[0,1]]`, is_hidden: true },
    { id: '2515', input: `n=4, connections=[[0,1],[1,2],[2,3],[3,0]]`, expected_output: `[]`, is_hidden: true }
  ],
  'longest-increasing-path-matrix': [
    { id: '1', input: `[[9,9,4],[6,6,8],[2,1,1]]`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `[[3,4,5],[3,2,6],[2,2,1]]`, expected_output: `4`, is_hidden: true },
    { id: '3', input: `[[1]]`, expected_output: `1`, is_hidden: true }
  ],
  'kth-largest-element-in-a-stream': [
    { id: '1', input: `[["KthLargest","add","add","add","add","add"],[[3,[4,5,8,2]],[3],[5],[10],[9],[4]]]`, expected_output: `[null,4,5,5,8,8]`, is_hidden: false },
    { id: '2', input: `[["KthLargest","add","add","add"],[[4,[7,7,7,7,8,3]],[2],[10],[9]]]`, expected_output: `[null,7,7,8]`, is_hidden: true },
    { id: '3', input: `[["KthLargest","add"],[[1,[]],[1]]]`, expected_output: `[null,1]`, is_hidden: true }
  ],
  'last-stone-weight': [
    { id: '1', input: `[2,7,4,1,8,1]`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `[1]`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `[2,2]`, expected_output: `0`, is_hidden: true }
  ],
  'relative-ranks': [
    { id: '1', input: `[5,4,3,2,1]`, expected_output: `["Gold Medal","Silver Medal","Bronze Medal","4","5"]`, is_hidden: false },
    { id: '2', input: `[10,3,8,9,4]`, expected_output: `["Gold Medal","5","Bronze Medal","Silver Medal","4"]`, is_hidden: true },
    { id: '3', input: `[1,2]`, expected_output: `["Gold Medal","2"]`, is_hidden: true }
  ],
  'max-product-three-numbers': [
    { id: '1', input: `[1,2,3]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `[-1,-2,-3]`, expected_output: `-6`, is_hidden: true },
    { id: '3', input: `[-10,1,3,5,7]`, expected_output: `105`, is_hidden: true }
  ],
  'min-cost-move-chips': [
    { id: '1', input: `[1,2,3]`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `[2,2,2,3,3]`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `[1,1000000]`, expected_output: `1`, is_hidden: true }
  ],
  'top-k-frequent-elements': [
    { id: '1', input: `nums=[1,1,1,2,2,3], k=2`, expected_output: `[1,2]`, is_hidden: false },
    { id: '2', input: `nums=[1], k=1`, expected_output: `[1]`, is_hidden: true },
    { id: '3', input: `nums=[4,4,4,4,4,4], k=1`, expected_output: `[4]`, is_hidden: true }
  ],
  'k-closest-points-origin': [
    { id: '1', input: `points=[[3,3],[5,-1],[-2,4]], k=2`, expected_output: `[[3,3],[-2,4]]`, is_hidden: false },
    { id: '2', input: `points=[[0,1],[1,0]], k=2`, expected_output: `[[0,1],[1,0]]`, is_hidden: true },
    { id: '3', input: `points=[[0,0]], k=1`, expected_output: `[[0,0]]`, is_hidden: true }
  ],
  'task-scheduler': [
    { id: '2472', input: `tasks = ["A","A","A","B","B","B"], n = 2`, expected_output: `8`, is_hidden: false },
    { id: '2472', input: `tasks = ["A","A","A","B","B","B"], n = 0`, expected_output: `6`, is_hidden: true },
    { id: '2472', input: `tasks = ["A","A","A","A","A","A"], n = 2`, expected_output: `16`, is_hidden: true }
  ],
  'reorganize-string': [
    { id: '1', input: `"aab"`, expected_output: `"aba"`, is_hidden: false },
    { id: '2', input: `"aaab"`, expected_output: `""`, is_hidden: true },
    { id: '3', input: `"a"`, expected_output: `"a"`, is_hidden: true }
  ],
  'furthest-building-reach': [
    { id: '1', input: `heights=[4,2,7,6,9,14,12], bricks=5, ladders=1`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `heights=[4,12,2,7,3,18,20,3,19], bricks=7, ladders=2`, expected_output: `7`, is_hidden: true },
    { id: '3', input: `heights=[1,2], bricks=0, ladders=0`, expected_output: `0`, is_hidden: true }
  ],
  'find-median-data-stream': [
    { id: '1', input: `[["MedianFinder","addNum","addNum","findMedian","addNum","findMedian"],[[],[1],[2],[],[3],[]]]`, expected_output: `[null,null,null,1.5,null,2.0]`, is_hidden: false },
    { id: '2', input: `[["MedianFinder","addNum","findMedian"],[[],[2],[]]]`, expected_output: `[null,null,2.0]`, is_hidden: true },
    { id: '3', input: `[["MedianFinder","addNum","addNum","findMedian"],[[],[1],[2],[]]]`, expected_output: `[null,null,null,1.5]`, is_hidden: true }
  ],
  'ipo': [
    { id: '1', input: `k=2, w=0, profits=[1,2,3], capital=[0,1,1]`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `k=4, w=0, profits=[1,2,3], capital=[0,1,1]`, expected_output: `6`, is_hidden: true },
    { id: '3', input: `k=1, w=0, profits=[1,2,3], capital=[1,1,1]`, expected_output: `0`, is_hidden: true }
  ],
  'min-refueling-stops': [
    { id: '1', input: `target=100, startFuel=10, stations=[[10,60],[20,30],[30,30],[40,40]]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `target=100, startFuel=1, stations=[[10,100]]`, expected_output: `-1`, is_hidden: true },
    { id: '3', input: `target=10, startFuel=10, stations=[]`, expected_output: `0`, is_hidden: true }
  ],
  'employee-free-time': [
    { id: '1', input: `schedules=[[[1,2],[5,6]],[[1,3]],[[4,10]]]`, expected_output: `[[3,4]]`, is_hidden: false },
    { id: '2', input: `schedules=[[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]`, expected_output: `[[5,6],[7,9]]`, is_hidden: true },
    { id: '3', input: `schedules=[[[1,10]]]`, expected_output: `[]`, is_hidden: true }
  ],
  'smallest-range-k-lists': [
    { id: '1', input: `lists=[[4,10,15,24,26],[0,9,12,20],[5,18,22,30]]`, expected_output: `[20,24]`, is_hidden: false },
    { id: '2', input: `lists=[[1,2,3],[1,2,3],[1,2,3]]`, expected_output: `[1,1]`, is_hidden: true },
    { id: '3', input: `lists=[[1],[2]]`, expected_output: `[1,2]`, is_hidden: true }
  ],
  'maximum-depth-binary-tree': [
    { id: '1', input: `[3,9,20,null,null,15,7]`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `[1,null,2]`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `[]`, expected_output: `0`, is_hidden: true }
  ],
  'subtree-of-another-tree': [
    { id: '1', input: `root=[3,4,5,1,2], subRoot=[4,1,2]`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `root=[3,4,5,1,2,null,null,null,null,0], subRoot=[4,1,2]`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `root=[1], subRoot=[1]`, expected_output: `true`, is_hidden: true }
  ],
  'diameter-of-binary-tree': [
    { id: '1', input: `[1,2,3,4,5]`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `[1,2]`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `0`, is_hidden: true }
  ],
  'binary-tree-level-order': [
    { id: '1', input: `[3,9,20,null,null,15,7]`, expected_output: `[[3],[9,20],[15,7]]`, is_hidden: false },
    { id: '2', input: `[1]`, expected_output: `[[1]]`, is_hidden: true },
    { id: '3', input: `[]`, expected_output: `[]`, is_hidden: true }
  ],
  'binary-tree-right-side-view': [
    { id: '1', input: `[1,2,3,null,5,null,4]`, expected_output: `[1,3,4]`, is_hidden: false },
    { id: '2', input: `[1,null,3]`, expected_output: `[1,3]`, is_hidden: true },
    { id: '3', input: `[]`, expected_output: `[]`, is_hidden: true }
  ],
  'path-sum-iii': [
    { id: '1', input: `root=[10,5,-3,3,2,null,11,3,-2,null,1], targetSum=8`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `root=[5], targetSum=5`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `root=[1,2,3], targetSum=3`, expected_output: `2`, is_hidden: true }
  ],
  'binary-tree-zigzag-level-order': [
    { id: '1', input: `[3,9,20,null,null,15,7]`, expected_output: `[[3],[20,9],[15,7]]`, is_hidden: false },
    { id: '2', input: `[1]`, expected_output: `[[1]]`, is_hidden: true },
    { id: '3', input: `[1,2,3,4]`, expected_output: `[[1],[4,3],[2]]`, is_hidden: true }
  ],
  'count-good-nodes': [
    { id: '1', input: `[3,1,4,3,null,1,5]`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `[3,3,null,4,2]`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'binary-tree-max-path-sum': [
    { id: '1', input: `[1,2,3]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `[-10,9,20,null,null,15,7]`, expected_output: `42`, is_hidden: true },
    { id: '3', input: `[-3]`, expected_output: `-3`, is_hidden: true }
  ],
  'serialize-deserialize-binary-tree': [
    { id: '1', input: `[1,2,3,null,null,4,5]`, expected_output: `[1,2,3,null,null,4,5]`, is_hidden: false },
    { id: '2', input: `[]`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `[1]`, is_hidden: true }
  ],
  'vertical-order-traversal': [
    { id: '1', input: `[3,9,20,null,null,15,7]`, expected_output: `[[9],[3,15],[20],[7]]`, is_hidden: false },
    { id: '2', input: `[1,2,3,4,5,6,7]`, expected_output: `[[4],[2],[1,5,6],[3],[7]]`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `[[1]]`, is_hidden: true }
  ],
  'bst-iterator': [
    { id: '1', input: `[["BSTIterator","next","next","hasNext","next","hasNext"],[[7,3,15,null,null,9,20],[],[],[],[],[]]]`, expected_output: `[null,3,7,true,9,true]`, is_hidden: false },
    { id: '2', input: `[["BSTIterator","next","hasNext"],[[1],[],[]]]`, expected_output: `[null,1,false]`, is_hidden: true },
    { id: '3', input: `[["BSTIterator","next","next","next","hasNext"],[[2,1,3],[],[],[],[],[]]]`, expected_output: `[null,1,2,3,false]`, is_hidden: true }
  ],
  'binary-tree-burn-time': [
    { id: '1', input: `root=[1,2,3,4,5,null,null,null,null,null,null,null,6], start=3`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `root=[1], start=1`, expected_output: `0`, is_hidden: true },
    { id: '3', input: `root=[1,2], start=1`, expected_output: `1`, is_hidden: true }
  ],
  'search-in-bst': [
    { id: '1', input: `root=[4,2,7,1,3], val=2`, expected_output: `[2,1,3]`, is_hidden: false },
    { id: '2', input: `root=[4,2,7,1,3], val=5`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `root=[1], val=1`, expected_output: `[1]`, is_hidden: true }
  ],
  'insert-into-bst': [
    { id: '1', input: `root=[4,2,7,1,3], val=5`, expected_output: `[4,2,7,1,3,5]`, is_hidden: false },
    { id: '2', input: `root=[], val=5`, expected_output: `[5]`, is_hidden: true },
    { id: '3', input: `root=[1], val=0`, expected_output: `[1,0]`, is_hidden: true }
  ],
  'min-absolute-diff-bst': [
    { id: '1', input: `[4,2,6,1,3]`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `[1,0,48,null,null,12,49]`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `[1,2,3,4,5]`, expected_output: `1`, is_hidden: true }
  ],
  'kth-smallest-bst': [
    { id: '1', input: `root=[3,1,4,null,2], k=1`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `root=[5,3,6,2,4,null,null,1], k=3`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `root=[2,1], k=2`, expected_output: `2`, is_hidden: true }
  ],
  'two-sum-iv-bst': [
    { id: '1', input: `root=[5,3,6,2,4,null,null,1], k=7`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `root=[5,3,6,2,4,null,null,1], k=28`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `root=[1], k=2`, expected_output: `false`, is_hidden: true }
  ],
  'validate-bst': [
    { id: '1', input: `[2,1,3]`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `[5,1,4,null,null,3,6]`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `true`, is_hidden: true }
  ],
  'kth-largest-bst': [
    { id: '1', input: `root=[3,1,4,null,2], k=1`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `root=[5,3,6,2,4,null,null,1], k=3`, expected_output: `4`, is_hidden: true },
    { id: '3', input: `root=[2,1], k=1`, expected_output: `2`, is_hidden: true }
  ],
  'inorder-successor-bst': [
    { id: '1', input: `root=[2,1,3], p=1`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `root=[5,3,6,2,4,null,null,1], p=6`, expected_output: `null`, is_hidden: true },
    { id: '3', input: `root=[1,2], p=1`, expected_output: `2`, is_hidden: true }
  ],
  'construct-bst-preorder': [
    { id: '1', input: `preorder=[8,5,1,7,10,12]`, expected_output: `[8,5,10,1,7,null,12]`, is_hidden: false },
    { id: '2', input: `preorder=[1,3]`, expected_output: `[1,null,3]`, is_hidden: true },
    { id: '3', input: `preorder=[4,2,1,3,7]`, expected_output: `[4,2,1,3,7]`, is_hidden: true }
  ],
  'lca-bst': [
    { id: '1', input: `root=[6,2,8,0,4,7,9,null,null,3,5], p=2, q=8`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `root=[6,2,8,0,4,7,9,null,null,3,5], p=2, q=4`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `root=[2,1], p=2, q=1`, expected_output: `2`, is_hidden: true }
  ],
  'recover-bst': [
    { id: '1', input: `[1,3,null,null,2]`, expected_output: `[3,1,null,null,2]`, is_hidden: false },
    { id: '2', input: `[3,1,4,null,null,2]`, expected_output: `[2,1,4,null,null,3]`, is_hidden: true },
    { id: '3', input: `[2,1,3]`, expected_output: `[2,1,3]`, is_hidden: true }
  ],
  'serialize-deserialize-bst': [
    { id: '1', input: `[2,1,3]`, expected_output: `[2,1,3]`, is_hidden: false },
    { id: '2', input: `[]`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `[1,null,2]`, expected_output: `[1,null,2]`, is_hidden: true }
  ],
  'count-range-sum': [
    { id: '1', input: `nums=[-2,5,-1], lower=-2, upper=2`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums=[0], lower=0, upper=0`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `nums=[-1,1], lower=0, upper=0`, expected_output: `1`, is_hidden: true }
  ],
  'max-sum-bst': [
    { id: '1', input: `[1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]`, expected_output: `20`, is_hidden: false },
    { id: '2', input: `[4,3,null,1,2]`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `[-4,-2,-1]`, expected_output: `-1`, is_hidden: true }
  ],
  'trim-bst': [
    { id: '1', input: `root=[1,0,2], low=1, high=2`, expected_output: `[1,null,2]`, is_hidden: false },
    { id: '2', input: `root=[3,0,4,null,2,null,null,1], low=1, high=3`, expected_output: `[3,2,null,1]`, is_hidden: true },
    { id: '3', input: `root=[1], low=2, high=4`, expected_output: `[]`, is_hidden: true }
  ],
  'number-of-provinces': [
    { id: '2522', input: `isConnected = [[1,1,0],[1,1,0],[0,0,1]]`, expected_output: `2`, is_hidden: false },
    { id: '2522', input: `isConnected = [[1,0,0],[0,1,0],[0,0,1]]`, expected_output: `3`, is_hidden: true },
    { id: '2522', input: `isConnected = [[1]]`, expected_output: `1`, is_hidden: true }
  ],
  'flood-fill': [
    { id: '1', input: `image=[[1,1,1],[1,1,0],[1,0,1]], sr=1, sc=1, color=2`, expected_output: `[[2,2,2],[2,2,0],[2,0,1]]`, is_hidden: false },
    { id: '2', input: `image=[[0,0,0],[0,0,0]], sr=0, sc=0, color=2`, expected_output: `[[2,2,2],[2,2,2]]`, is_hidden: true },
    { id: '3', input: `image=[[1]], sr=0, sc=0, color=2`, expected_output: `[[2]]`, is_hidden: true }
  ],
  'max-area-island': [
    { id: '1', input: `[[0,0,1,0,0,0,0,1,0,0,0,0,1],[0,0,0,0,0,0,0,1,1,1,0,0,0]]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `[[0,0,0],[0,1,1],[0,0,0]]`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `[[1,1,1],[1,1,1],[1,1,1]]`, expected_output: `9`, is_hidden: true }
  ],
  'find-path-exists': [
    { id: '1', input: `n=3, edges=[[0,1],[1,2],[2,0]], source=0, destination=2`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `n=6, edges=[[0,1],[0,2],[3,5],[5,4],[4,3]], source=0, destination=5`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `n=1, edges=[], source=0, destination=0`, expected_output: `true`, is_hidden: true }
  ],
  'pacific-atlantic-water-flow': [
    { id: '1', input: `heights=[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]`, expected_output: `[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]`, is_hidden: false },
    { id: '2', input: `heights=[[2,1],[1,2]]`, expected_output: `[[0,0],[0,1],[1,0],[1,1]]`, is_hidden: true },
    { id: '3', input: `heights=[[1]]`, expected_output: `[[0,0]]`, is_hidden: true }
  ],
  'redundant-connection': [
    { id: '2500', input: `edges = [[1,2],[1,3],[2,3]]`, expected_output: `[2,3]`, is_hidden: false },
    { id: '2500', input: `edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]`, expected_output: `[1,4]`, is_hidden: true },
    { id: '2500', input: `edges = [[1,2],[2,3],[3,1]]`, expected_output: `[3,1]`, is_hidden: true }
  ],
  'connected-components-count': [
    { id: '1', input: `n=5, edges=[[0,1],[1,2],[3,4]]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `n=5, edges=[[0,1],[1,2],[2,3],[3,4]]`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `n=1, edges=[]`, expected_output: `1`, is_hidden: true }
  ],
  'word-ladder-ii': [
    { id: '1', input: `beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]`, expected_output: `[["hit","hot","dot","dog","cog"],["hit","hot","lot","log","cog"]]`, is_hidden: false },
    { id: '2', input: `beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log"]`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `beginWord="a", endWord="c", wordList=["a","b","c"]`, expected_output: `[["a","c"]]`, is_hidden: true }
  ],
  'alien-dictionary-topological': [
    { id: '1', input: `["wrt","wrf","er","ett","rftt"]`, expected_output: `"wertf"`, is_hidden: false },
    { id: '2', input: `["z","x"]`, expected_output: `"zx"`, is_hidden: true },
    { id: '3', input: `["abc","def"]`, expected_output: `""`, is_hidden: true }
  ],
  'critical-connections-tarjan': [
    { id: '1', input: `n=4, connections=[[0,1],[1,2],[2,0],[1,3]]`, expected_output: `[[1,3]]`, is_hidden: false },
    { id: '2', input: `n=2, connections=[[0,1]]`, expected_output: `[[0,1]]`, is_hidden: true },
    { id: '3', input: `n=3, connections=[[0,1],[1,2],[2,0]]`, expected_output: `[]`, is_hidden: true }
  ],
  'longest-increasing-path-dfs': [
    { id: '1', input: `[[9,9,4],[6,6,8],[2,1,1]]`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `[[3,4,5],[3,2,6],[2,2,1]]`, expected_output: `4`, is_hidden: true },
    { id: '3', input: `[[1]]`, expected_output: `1`, is_hidden: true }
  ],
  'minimum-height-trees': [
    { id: '2473', input: `n = 4, edges = [[1,0],[1,2],[1,3]]`, expected_output: `[1]`, is_hidden: false },
    { id: '2473', input: `n = 6, edges = [[3,0],[3,1],[3,2],[3,4],[5,4]]`, expected_output: `[3,4]`, is_hidden: true },
    { id: '2473', input: `n = 1, edges = []`, expected_output: `[0]`, is_hidden: true }
  ],
  'fibonacci-number': [
    { id: '1', input: `2`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `4`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `0`, expected_output: `0`, is_hidden: true }
  ],
  'power-of-two': [
    { id: '1', input: `16`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `3`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `1`, expected_output: `true`, is_hidden: true }
  ],
  'power-of-three': [
    { id: '1', input: `27`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `0`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `9`, expected_output: `true`, is_hidden: true }
  ],
  'binary-tree-paths': [
    { id: '1', input: `[1,2,3,null,5]`, expected_output: `["1->2->5","1->3"]`, is_hidden: false },
    { id: '2', input: `[1]`, expected_output: `["1"]`, is_hidden: true },
    { id: '3', input: `[1,2,3]`, expected_output: `["1->2","1->3"]`, is_hidden: true }
  ],
  'min-depth-binary-tree': [
    { id: '1', input: `[3,9,20,null,null,15,7]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `[2,null,3,null,null,null,4]`, expected_output: `4`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'generate-parentheses': [
    { id: '1', input: `3`, expected_output: `["((()))","(()())","(())()","()(())","()()()"]`, is_hidden: false },
    { id: '2', input: `1`, expected_output: `["()"]`, is_hidden: true },
    { id: '3', input: `2`, expected_output: `["(())","()()"]`, is_hidden: true }
  ],
  'combination-sum': [
    { id: '1', input: `candidates=[2,3,6,7], target=7`, expected_output: `[[2,2,3],[7]]`, is_hidden: false },
    { id: '2', input: `candidates=[2,3,5], target=8`, expected_output: `[[2,2,2,2],[2,3,3],[3,5]]`, is_hidden: true },
    { id: '3', input: `candidates=[2], target=1`, expected_output: `[]`, is_hidden: true }
  ],
  'subsets': [
    { id: '1', input: `[1,2,3]`, expected_output: `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`, is_hidden: false },
    { id: '2', input: `[0]`, expected_output: `[[],[0]]`, is_hidden: true },
    { id: '3', input: `[1,2]`, expected_output: `[[],[1],[2],[1,2]]`, is_hidden: true }
  ],
  'permutations': [
    { id: '1', input: `[1,2,3]`, expected_output: `[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`, is_hidden: false },
    { id: '2', input: `[0,1]`, expected_output: `[[0,1],[1,0]]`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `[[1]]`, is_hidden: true }
  ],
  'letter-combinations-phone': [
    { id: '1', input: `"23"`, expected_output: `["ad","ae","af","bd","be","bf","cd","ce","cf"]`, is_hidden: false },
    { id: '2', input: `""`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `"7"`, expected_output: `["p","q","r","s"]`, is_hidden: true }
  ],
  'n-queens': [
    { id: '1', input: `4`, expected_output: `[[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]`, is_hidden: false },
    { id: '2', input: `1`, expected_output: `[["Q"]]`, is_hidden: true },
    { id: '3', input: `2`, expected_output: `[]`, is_hidden: true }
  ],
  'sudoku-solver': [
    { id: '1', input: `[["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]`, expected_output: `Solved board with no dots`, is_hidden: false },
    { id: '2', input: `[["."] * 9 for _ in range(9)]`, expected_output: `Solved empty board`, is_hidden: true },
    { id: '3', input: `[["5","3","4","6","7","8","9","1","2"],["6","7","2","1","9","5","3","4","8"],["1","9","8","3","4","2","5","6","7"],["8","5","9","7","6","1","4","2","3"],["4","2","6","8","5","3","7","9","1"],["7","1","3","9","2","4","8","5","6"],["9","6","1","5","3","7","2","8","4"],["2","8","7","4","1","9","6","3","5"],["3","4","5","2","8","6","1","7","9"]]`, expected_output: `Already solved board`, is_hidden: true }
  ],
  'expression-add-operators': [
    { id: '1', input: `"123", target=6`, expected_output: `["1+2+3","1*2*3"]`, is_hidden: false },
    { id: '2', input: `"232", target=8`, expected_output: `["2*3+2","2+3*2"]`, is_hidden: true },
    { id: '3', input: `"105", target=5`, expected_output: `["1*0+5","10-5"]`, is_hidden: true }
  ],
  'word-search': [
    { id: '1', input: `board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="ABCCED"`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="SEE"`, expected_output: `true`, is_hidden: true },
    { id: '3', input: `board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="ABCB"`, expected_output: `false`, is_hidden: true }
  ],
  'design-circular-deque': [
    { id: '1', input: `[["MyCircularDeque","insertLast","insertLast","insertFront","insertFront","getRear","isFull","deleteLast","insertFront","getFront"],[[3],[1],[2],[3],[4],[],[],[],[4],[]]]`, expected_output: `[null,true,true,true,true,2,true,true,true,4]`, is_hidden: false },
    { id: '2', input: `[["MyCircularDeque","insertFront","getFront","deleteFront","isEmpty"],[[1],[1],[],[],[]]]`, expected_output: `[null,true,1,true,true]`, is_hidden: true },
    { id: '3', input: `[["MyCircularDeque","isEmpty","isFull"],[[],[],[]]]`, expected_output: `[null,true,false]`, is_hidden: true }
  ],
  'design-front-middle-back-queue': [
    { id: '1', input: `[["FrontMiddleBackQueue","pushMiddle","pushFront","pushBack","popMiddle","popMiddle"],[[],[1],[2],[3],[],[]]]`, expected_output: `[null,null,null,null,2,3]`, is_hidden: false },
    { id: '2', input: `[["FrontMiddleBackQueue","pushFront","pushBack","popFront"],[[],[1],[2],[]]]`, expected_output: `[null,null,null,1]`, is_hidden: true },
    { id: '3', input: `[["FrontMiddleBackQueue","pushMiddle","popMiddle"],[[],[1],[]]]`, expected_output: `[null,null,1]`, is_hidden: true }
  ],
  'number-of-recent-calls-deque': [
    { id: '1', input: `[["RecentCounter","ping","ping","ping","ping"],[[1],[1],[100],[3001],[3002]]]`, expected_output: `[null,1,2,3,3]`, is_hidden: false },
    { id: '2', input: `[["RecentCounter","ping","ping","ping"],[[1],[1],[2],[3]]]`, expected_output: `[null,1,2,3]`, is_hidden: true },
    { id: '3', input: `[["RecentCounter","ping"],[[1]]]`, expected_output: `[null,1]`, is_hidden: true }
  ],
  'crawler-double-ended-queue': [
    { id: '1', input: `["d1/","d2/","../","d21/","./"]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `["d1/","d2/","./","d3/","../","d31/"]`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `["../"]`, expected_output: `0`, is_hidden: true }
  ],
  'sliding-window-maximum': [
    { id: '2828_1', input: `[1,3,-1,-3,5,3,6,7],3`, expected_output: `[3,3,5,5,6,7]`, is_hidden: false },
    { id: '2828_2', input: `[1],1`, expected_output: `[1]`, is_hidden: true },
    { id: '2828_3', input: `[9,11],2`, expected_output: `[11]`, is_hidden: true }
  ],
  'subarrays-k-different-integers': [
    { id: '1', input: `nums=[1,2,1,2,3], k=2`, expected_output: `7`, is_hidden: false },
    { id: '2', input: `nums=[1,2,1,3,4], k=3`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `nums=[1,1,1], k=1`, expected_output: `6`, is_hidden: true }
  ],
  'grumpy-bookstore-owner': [
    { id: '1', input: `customers=[1,0,1,2,1,1,7,5], grumpy=[0,1,0,1,0,1,0,1], minutes=3`, expected_output: `16`, is_hidden: false },
    { id: '2', input: `customers=[5], grumpy=[0], minutes=1`, expected_output: `5`, is_hidden: true },
    { id: '3', input: `customers=[3], grumpy=[1], minutes=1`, expected_output: `3`, is_hidden: true }
  ],
  'min-window-substring': [
    { id: '1', input: `s="ADOBECODEBANC", t="ABC"`, expected_output: `"BANC"`, is_hidden: false },
    { id: '2', input: `s="a", t="a"`, expected_output: `"a"`, is_hidden: true },
    { id: '3', input: `s="a", t="aa"`, expected_output: `""`, is_hidden: true }
  ],
  'find-all-anagrams-deque': [
    { id: '1', input: `s="cbaebabacd", p="abc"`, expected_output: `[0,6]`, is_hidden: false },
    { id: '2', input: `s="abab", p="ab"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '3', input: `s="a", p="a"`, expected_output: `[0]`, is_hidden: true }
  ],
  'substring-concat-all-words': [
    { id: '1', input: `s="barfoothefoobarman", words=["foo","bar"]`, expected_output: `[0,9]`, is_hidden: false },
    { id: '2', input: `s="wordgoodgoodgoodbestword", words=["word","good","best","word"]`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `s="barfoofoobarthefoobarman", words=["bar","foo","the"]`, expected_output: `[6,9,12]`, is_hidden: true }
  ],
  'longest-substring-two-distinct': [
    { id: '1', input: `s="eceba"`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `s="ccaabbb"`, expected_output: `5`, is_hidden: true },
    { id: '3', input: `s="a"`, expected_output: `1`, is_hidden: true }
  ],
  'first-bad-version': [
    { id: '1', input: `n = 5, bad = 4`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `n = 1, bad = 1`, expected_output: `1`, is_hidden: true },
  ],
  'guess-number': [
    { id: '1', input: `n = 10, pick = 6`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `n = 1, pick = 1`, expected_output: `1`, is_hidden: true },
  ],
  'search-insert-position': [
    { id: '1', input: `nums=[1,3,5,6], target=5`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `nums=[1,3,5,6], target=2`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `nums=[1,3,5,6], target=7`, expected_output: `4`, is_hidden: true }
  ],
  'sqrt-x': [
    { id: '1', input: `4`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `8`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `0`, expected_output: `0`, is_hidden: true }
  ],
  'find-min-rotated-array': [
    { id: '1', input: `[3,4,5,1,2]`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `[4,5,6,7,0,1,2]`, expected_output: `0`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'koko-eating-bananas': [
    { id: '1', input: `piles=[3,6,7,11], h=8`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `piles=[30,11,23,4,20], h=5`, expected_output: `30`, is_hidden: true },
    { id: '3', input: `piles=[1,1,1], h=3`, expected_output: `1`, is_hidden: true }
  ],
  'search-2d-matrix': [
    { id: '1', input: `matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=13`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `matrix=[[1]], target=1`, expected_output: `true`, is_hidden: true }
  ],
  'time-based-key-value': [
    { id: '1', input: `[["TimeMap","set","set","get","get","get"],[[],["foo","bar",1],["foo","bar2",4],["foo",1],["foo",3],["foo",4]]]`, expected_output: `[null,null,null,"bar","bar","bar2"]`, is_hidden: false },
    { id: '2', input: `[["TimeMap","set","get"],[[],["a","val",1],["a",1]]]`, expected_output: `[null,null,"val"]`, is_hidden: true },
    { id: '3', input: `[["TimeMap","set","get","get"],[[],["x","y",5],["x",10],["x",5]]]`, expected_output: `[null,null,"y","y"]`, is_hidden: true }
  ],
  'search-rotated-array-ii': [
    { id: '1', input: `nums=[2,5,6,0,0,1,2], target=0`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `nums=[2,5,6,0,0,1,2], target=3`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `nums=[1], target=1`, expected_output: `true`, is_hidden: true }
  ],
  'capacity-ship-packages': [
    { id: '1', input: `weights=[1,2,3,4,5,6,7,8,9,10], days=5`, expected_output: `15`, is_hidden: false },
    { id: '2', input: `weights=[3,2,2,4,1,4], days=3`, expected_output: `6`, is_hidden: true },
    { id: '3', input: `weights=[1,2,3], days=1`, expected_output: `6`, is_hidden: true }
  ],
  'magnetic-force-two-balls': [
    { id: '1', input: `position=[1,2,3,4,7], m=3`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `position=[5,4,3,2,1,1000000000], m=2`, expected_output: `999999999`, is_hidden: true },
    { id: '3', input: `position=[1,2], m=2`, expected_output: `1`, is_hidden: true }
  ],
  'merge-sorted-array': [
    { id: '1', input: `nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3`, expected_output: `[1,2,2,3,5,6]`, is_hidden: false },
    { id: '2', input: `nums1=[1], m=1, nums2=[], n=0`, expected_output: `[1]`, is_hidden: true },
    { id: '3', input: `nums1=[0], m=0, nums2=[1], n=1`, expected_output: `[1]`, is_hidden: true }
  ],
  'intersection-two-arrays': [
    { id: '1', input: `nums1=[1,2,2,1], nums2=[2,2]`, expected_output: `[2]`, is_hidden: false },
    { id: '2', input: `nums1=[4,9,5], nums2=[9,4,9,8,4]`, expected_output: `[4,9]`, is_hidden: true },
    { id: '3', input: `nums1=[1], nums2=[2]`, expected_output: `[]`, is_hidden: true }
  ],
  'max-product-three-sorted': [
    { id: '1', input: `[1,2,3]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `[-1,-2,-3]`, expected_output: `-6`, is_hidden: true },
    { id: '3', input: `[-10,1,3,5,7]`, expected_output: `105`, is_hidden: true }
  ],
  'height-checker': [
    { id: '1', input: `[1,1,4,2,1,3]`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `[1,2,3,4,5]`, expected_output: `0`, is_hidden: true },
    { id: '3', input: `[5,1,2,3,4]`, expected_output: `5`, is_hidden: true }
  ],
  'sort-colors': [
    { id: '1', input: `[2,0,2,1,1,0]`, expected_output: `[0,0,1,1,2,2]`, is_hidden: false },
    { id: '2', input: `[2,0,1]`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '3', input: `[0]`, expected_output: `[0]`, is_hidden: true }
  ],
  'meeting-rooms-ii': [
    { id: '1', input: `[[0,30],[5,10],[15,20]]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `[[7,10],[2,4]]`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `[[1,2],[3,4],[5,6]]`, expected_output: `1`, is_hidden: true }
  ],
  'reorganize-string-sort': [
    { id: '1', input: `"aab"`, expected_output: `"aba"`, is_hidden: false },
    { id: '2', input: `"aaab"`, expected_output: `""`, is_hidden: true },
    { id: '3', input: `"a"`, expected_output: `"a"`, is_hidden: true }
  ],
  'interval-list-intersections': [
    { id: '1', input: `firstList=[[0,2],[5,10],[13,23],[24,25]], secondList=[[1,5],[8,12],[15,24],[25,26]]`, expected_output: `[[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]`, is_hidden: false },
    { id: '2', input: `firstList=[[1,3],[5,9]], secondList=[]`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `firstList=[[1,5]], secondList=[[2,3]]`, expected_output: `[[2,3]]`, is_hidden: true }
  ],
  'non-overlapping-intervals': [
    { id: '1', input: `[[1,2],[2,3],[3,4],[1,3]]`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `[[1,2],[1,2],[1,2]]`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `[[1,2]]`, expected_output: `0`, is_hidden: true }
  ],
  'min-interval-include-query': [
    { id: '1', input: `intervals=[[2,3],[2,5],[1,8],[20,25]], queries=[2,19,5,22]`, expected_output: `[2,4,3,5]`, is_hidden: false },
    { id: '2', input: `intervals=[[1,5]], queries=[3]`, expected_output: `[5]`, is_hidden: true },
    { id: '3', input: `intervals=[[1,10]], queries=[5]`, expected_output: `[10]`, is_hidden: true }
  ],
  'meeting-rooms-iii': [
    { id: '1', input: `n=2, meetings=[[0,10],[1,5],[2,7],[3,4]]`, expected_output: `0`, is_hidden: false },
    { id: '2', input: `n=3, meetings=[[1,20],[2,10],[3,5],[4,9],[6,8]]`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `n=1, meetings=[[0,10]]`, expected_output: `0`, is_hidden: true }
  ],
  'count-smaller-after-self': [
    { id: '1', input: `[5,2,6,1]`, expected_output: `[2,1,1,0]`, is_hidden: false },
    { id: '2', input: `[-1]`, expected_output: `[0]`, is_hidden: true },
    { id: '3', input: `[-1,-1]`, expected_output: `[0,0]`, is_hidden: true }
  ],
  'reverse-pairs': [
    { id: '1', input: `[1,3,2,3,1]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `[2,4,3,5,1]`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `0`, is_hidden: true }
  ],
  'create-maximum-number': [
    { id: '1', input: `nums1=[3,4,6,5], nums2=[9,1,2,5,8,3], k=5`, expected_output: `[9,8,6,5,3]`, is_hidden: false },
    { id: '2', input: `nums1=[6,7], nums2=[6,0,4], k=5`, expected_output: `[6,7,6,0,4]`, is_hidden: true },
    { id: '3', input: `nums1=[3,9], nums2=[8,9], k=3`, expected_output: `[9,8,9]`, is_hidden: true }
  ],
  'valid-perfect-square': [
    { id: '1', input: `16`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `14`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `1`, expected_output: `true`, is_hidden: true }
  ],
  'arranging-coins': [
    { id: '1', input: `5`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `8`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `1`, expected_output: `1`, is_hidden: true }
  ],
  'power-of-four': [
    { id: '1', input: `16`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `5`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `1`, expected_output: `true`, is_hidden: true }
  ],
  'nth-digit': [
    { id: '1', input: `3`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `11`, expected_output: `0`, is_hidden: true },
    { id: '3', input: `1`, expected_output: `1`, is_hidden: true }
  ],
  'missing-number-binary': [
    { id: '1', input: `[3,0,1]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `[0,1]`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `[9,6,4,2,3,5,7,0,1,8]`, expected_output: `10`, is_hidden: true }
  ],
  'find-smallest-letter': [
    { id: '1', input: `letters=["c","f","j"], target="a"`, expected_output: `"c"`, is_hidden: false },
    { id: '2', input: `letters=["c","f","j"], target="c"`, expected_output: `"f"`, is_hidden: true },
    { id: '3', input: `letters=["x","x","y","y"], target="z"`, expected_output: `"x"`, is_hidden: true }
  ],
  'peak-index-mountain': [
    { id: '1', input: `[0,1,0]`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `[0,2,1,0]`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `[0,10,5,2]`, expected_output: `1`, is_hidden: true }
  ],
  'find-peak-element': [
    { id: '1', input: `[1,2,3,1]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `[1,2,1,3,5,6,4]`, expected_output: `5`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `0`, is_hidden: true }
  ],
  'next-greater-element-ii': [
    { id: '2439', input: `nums = [1,2,1]`, expected_output: `[2,-1,2]`, is_hidden: false },
    { id: '2439', input: `nums = [1,2,3,4,3]`, expected_output: `[2,3,4,-1,4]`, is_hidden: true },
    { id: '2439', input: `nums = [5,4,3]`, expected_output: `[-1,5,5]`, is_hidden: true }
  ],
  'find-first-last-position': [
    { id: '1', input: `nums=[5,7,7,8,8,10], target=8`, expected_output: `[3,4]`, is_hidden: false },
    { id: '2', input: `nums=[5,7,7,8,8,10], target=6`, expected_output: `[-1,-1]`, is_hidden: true },
    { id: '3', input: `nums=[], target=0`, expected_output: `[-1,-1]`, is_hidden: true }
  ],
  'count-complete-tree-nodes': [
    { id: '1', input: `[1,2,3,4,5,6]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `[]`, expected_output: `0`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'sum-two-integers': [
    { id: '1', input: `a=1, b=2`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `a=-2, b=3`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `a=0, b=0`, expected_output: `0`, is_hidden: true }
  ],
  'maximum-width-ramp': [
    { id: '1', input: `[6,0,8,2,1,5]`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `[9,8,1,0,1,9,4,0,4,1]`, expected_output: `7`, is_hidden: true },
    { id: '3', input: `[1,0]`, expected_output: `1`, is_hidden: true }
  ],
  'count-range-sum-binary': [
    { id: '1', input: `nums=[-2,5,-1], lower=-2, upper=2`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums=[0], lower=0, upper=0`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `nums=[-1,1], lower=0, upper=0`, expected_output: `1`, is_hidden: true }
  ],
  'kth-smallest-multiplication-table': [
    { id: '1', input: `m = 3, n = 3, k = 5`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `m = 2, n = 3, k = 6`, expected_output: `6`, is_hidden: true },
  ],
  'two-sum-ii': [
    { id: '1', input: `numbers=[2,7,11,15], target=9`, expected_output: `[1,2]`, is_hidden: false },
    { id: '2', input: `numbers=[2,3,4], target=6`, expected_output: `[1,3]`, is_hidden: true },
    { id: '3', input: `numbers=[-1,0], target=-1`, expected_output: `[1,2]`, is_hidden: true }
  ],
  'merge-sorted-array-two-pointers': [
    { id: '1', input: `nums1=[1,2,3,0,0,0], m=3, nums2=[2,5,6], n=3`, expected_output: `[1,2,2,3,5,6]`, is_hidden: false },
    { id: '2', input: `nums1=[1], m=1, nums2=[], n=0`, expected_output: `[1]`, is_hidden: true },
    { id: '3', input: `nums1=[0], m=0, nums2=[1], n=1`, expected_output: `[1]`, is_hidden: true }
  ],
  'move-zeroes': [
    { id: '1', input: `[0,1,0,3,12]`, expected_output: `[1,3,12,0,0]`, is_hidden: false },
    { id: '2', input: `[0]`, expected_output: `[0]`, is_hidden: true },
    { id: '3', input: `[1,2,3]`, expected_output: `[1,2,3]`, is_hidden: true }
  ],
  'remove-duplicates-sorted': [
    { id: '1', input: `[1,1,2]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `[0,0,1,1,1,2,3,3]`, expected_output: `5`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'container-most-water': [
    { id: '1', input: `[1,8,6,2,5,4,8,3,7]`, expected_output: `49`, is_hidden: false },
    { id: '2', input: `[1,1]`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `[4,3,2,1,4]`, expected_output: `16`, is_hidden: true }
  ],
  '3sum-closest': [
    { id: '1', input: `[-1,2,1,-4], target=1`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `[0,0,0], target=1`, expected_output: `0`, is_hidden: true },
    { id: '3', input: `[-2,0,1,3], target=3`, expected_output: `2`, is_hidden: true }
  ],
  'partition-labels': [
    { id: '1', input: `"ababcbacadefegdehijhklij"`, expected_output: `[9,7,8]`, is_hidden: false },
    { id: '2', input: `"eccbbbbdec"`, expected_output: `[10]`, is_hidden: true },
    { id: '3', input: `"a"`, expected_output: `[1]`, is_hidden: true }
  ],
  'sort-colors-two-pointers': [
    { id: '1', input: `[2,0,2,1,1,0]`, expected_output: `[0,0,1,1,2,2]`, is_hidden: false },
    { id: '2', input: `[2,0,1]`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '3', input: `[0]`, expected_output: `[0]`, is_hidden: true }
  ],
  'trapping-rain-water-two-pointers': [
    { id: '1', input: `[0,1,0,2,1,0,1,3,2,1,2,1]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `[4,2,0,3,2,5]`, expected_output: `9`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `0`, is_hidden: true }
  ],
  'shortest-unsorted-subarray': [
    { id: '2449', input: `nums = [2,6,4,8,10,9,15]`, expected_output: `5`, is_hidden: false },
    { id: '2449', input: `nums = [1,2,3,4]`, expected_output: `0`, is_hidden: true },
    { id: '2449', input: `nums = [1]`, expected_output: `0`, is_hidden: true }
  ],
  'longest-substring-no-repeat': [
    { id: '1', input: `"abcabcbb"`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `"bbbbb"`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `"pwwkew"`, expected_output: `4`, is_hidden: true }
  ],
  'subarrays-k-distinct-two-pointer': [
    { id: '1', input: `nums=[1,2,1,2,3], k=2`, expected_output: `7`, is_hidden: false },
    { id: '2', input: `nums=[1,2,1,3,4], k=3`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `nums=[1,1,1], k=1`, expected_output: `6`, is_hidden: true }
  ],
  'substrings-only-1s': [
    { id: '1', input: `"101101"`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `"111111"`, expected_output: `21`, is_hidden: true },
    { id: '3', input: `"0"`, expected_output: `0`, is_hidden: true }
  ],
  'max-average-subarray': [
    { id: '1', input: `nums=[1,12,-5,-6,50,3], k=4`, expected_output: `12.75`, is_hidden: false },
    { id: '2', input: `nums=[5], k=1`, expected_output: `5.0`, is_hidden: true },
    { id: '3', input: `nums=[0,4,0,3,2], k=2`, expected_output: `3.5`, is_hidden: true }
  ],
  'contains-duplicate-ii': [
    { id: '1', input: `[1,2,3,1], k=3`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `[1,2,3,1,2,3], k=2`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `[1,0,1,0,1], k=3`, expected_output: `true`, is_hidden: true }
  ],
  'max-consecutive-ones-iii': [
    { id: '1', input: `nums=[1,1,1,0,0,0,1,1,1,1,0], k=2`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `nums=[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k=3`, expected_output: `10`, is_hidden: true },
    { id: '3', input: `nums=[1], k=0`, expected_output: `1`, is_hidden: true }
  ],
  'min-size-subarray-sum': [
    { id: '1', input: `target=7, nums=[2,3,1,2,4,3]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `target=4, nums=[1,4,4]`, expected_output: `1`, is_hidden: true },
    { id: '3', input: `target=11, nums=[1,2,3,4,5]`, expected_output: `3`, is_hidden: true }
  ],
  'longest-substring-at-most-k': [
    { id: '1', input: `s="eceba", k=2`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `s="aa", k=1`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `s="abcabcabc", k=3`, expected_output: `9`, is_hidden: true }
  ],
  'longest-repeating-char-replacement': [
    { id: '1', input: `s="AABABBA", k=1`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `s="ABAB", k=2`, expected_output: `4`, is_hidden: true },
    { id: '3', input: `s="A", k=0`, expected_output: `1`, is_hidden: true }
  ],
  'max-erasure-value': [
    { id: '1', input: `[4,2,4,5,6]`, expected_output: `17`, is_hidden: false },
    { id: '2', input: `[5,2,1,2]`, expected_output: `8`, is_hidden: true },
    { id: '3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'substring-concat-all-words-sliding': [
    { id: '1', input: `s="barfoothefoobarman", words=["foo","bar"]`, expected_output: `[0,9]`, is_hidden: false },
    { id: '2', input: `s="wordgoodgoodgoodbestword", words=["word","good","best","word"]`, expected_output: `[]`, is_hidden: true },
    { id: '3', input: `s="barfoofoobarthefoobarman", words=["bar","foo","the"]`, expected_output: `[6,9,12]`, is_hidden: true }
  ],
  'min-window-substring-sliding': [
    { id: '1', input: `s="ADOBECODEBANC", t="ABC"`, expected_output: `"BANC"`, is_hidden: false },
    { id: '2', input: `s="a", t="a"`, expected_output: `"a"`, is_hidden: true },
    { id: '3', input: `s="a", t="aa"`, expected_output: `""`, is_hidden: true }
  ],
  'shortest-subarray-sum-k-sliding': [
    { id: '1', input: `nums=[1], k=1`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `nums=[1,2], k=4`, expected_output: `-1`, is_hidden: true },
    { id: '3', input: `nums=[-1,2], k=3`, expected_output: `2`, is_hidden: true }
  ],
  'grumpy-bookstore-sliding': [
    { id: '1', input: `customers=[1,0,1,2,1,1,7,5], grumpy=[0,1,0,1,0,1,0,1], minutes=3`, expected_output: `16`, is_hidden: false },
    { id: '2', input: `customers=[5], grumpy=[0], minutes=1`, expected_output: `5`, is_hidden: true },
    { id: '3', input: `customers=[3], grumpy=[1], minutes=1`, expected_output: `3`, is_hidden: true }
  ],
  'prefix-sum': [
    { id: '2211', input: `nums=[-2,0,3,-5,2,-1],left=0,right=2`, expected_output: `1`, is_hidden: false },
    { id: '2211', input: `nums=[0,0],left=0,right=0`, expected_output: `0`, is_hidden: true },
    { id: '2211', input: `nums=[1],left=0,right=0`, expected_output: `1`, is_hidden: true },
    { id: '2212', input: `nums=[1,7,3,6,5,6]`, expected_output: `3`, is_hidden: false },
    { id: '2212', input: `nums=[1,2,3]`, expected_output: `-1`, is_hidden: true },
    { id: '2212', input: `nums=[1]`, expected_output: `0`, is_hidden: true },
    { id: '2213', input: `nums=[1,1,1],k=2`, expected_output: `2`, is_hidden: false },
    { id: '2213', input: `nums=[1,2,3],k=3`, expected_output: `2`, is_hidden: true },
    { id: '2213', input: `nums=[1],k=0`, expected_output: `0`, is_hidden: true },
    { id: '2214', input: `nums=[1,-1,5,-2,3],k=3`, expected_output: `4`, is_hidden: false },
    { id: '2214', input: `nums=[-2,-1,2,1],k=1`, expected_output: `2`, is_hidden: true },
    { id: '2214', input: `nums=[1],k=1`, expected_output: `1`, is_hidden: true },
    { id: '2215', input: `nums=[23,2,4,6,7],k=6`, expected_output: `true`, is_hidden: false },
    { id: '2215', input: `nums=[23,2,6,4,7],k=6`, expected_output: `true`, is_hidden: true },
    { id: '2215', input: `nums=[1,2,3],k=5`, expected_output: `false`, is_hidden: true },
    { id: '2216', input: `matrix=[[3,0,1,4,2],[5,6,3,2,1],[1,2,0,1,5],[4,1,0,1,7],[1,0,3,0,5]],r1=2,c1=1,r2=4,c2=3`, expected_output: `8`, is_hidden: false },
    { id: '2216', input: `matrix=[[1]],r1=0,c1=0,r2=0,c2=0`, expected_output: `1`, is_hidden: true },
    { id: '2216', input: `matrix=[[1,2],[3,4]],r1=0,c1=0,r2=1,c2=1`, expected_output: `10`, is_hidden: true },
    { id: '2217', input: `target=7,nums=[2,3,1,2,4,3]`, expected_output: `2`, is_hidden: false },
    { id: '2217', input: `target=4,nums=[1,4,4]`, expected_output: `1`, is_hidden: true },
    { id: '2217', input: `target=11,nums=[1,1,1,1,1,1,1,1]`, expected_output: `0`, is_hidden: true },
    { id: '2218', input: `nums=[10,5,2,6],k=100`, expected_output: `8`, is_hidden: false },
    { id: '2218', input: `nums=[1,2,3],k=0`, expected_output: `0`, is_hidden: true },
    { id: '2218', input: `nums=[1],k=1`, expected_output: `0`, is_hidden: true },
    { id: '2219', input: `nums=[1,-1,5,-2,3],k=3`, expected_output: `4`, is_hidden: false },
    { id: '2219', input: `nums=[1],k=1`, expected_output: `1`, is_hidden: true },
    { id: '2219', input: `nums=[0,0],k=0`, expected_output: `2`, is_hidden: true },
    { id: '2220', input: `nums=[-2,5,-1],lower=-2,upper=2`, expected_output: `3`, is_hidden: false },
    { id: '2220', input: `nums=[0],lower=0,upper=0`, expected_output: `1`, is_hidden: true },
    { id: '2220', input: `nums=[-1,-1],lower=-1,upper=-1`, expected_output: `2`, is_hidden: true },
    { id: '2221', input: `nums=[1,3,5]`, expected_output: `9`, is_hidden: false },
    { id: '2221', input: `nums=[0,0]`, expected_output: `0`, is_hidden: true },
    { id: '2221', input: `nums=[100]`, expected_output: `100`, is_hidden: true },
    { id: '2222', input: `nums=[1,2,1,2,6,7,5,1],k=2`, expected_output: `[0,3,5]`, is_hidden: false },
    { id: '2222', input: `nums=[3,1,5,6,4,2],k=2`, expected_output: `[0,2,4]`, is_hidden: true },
    { id: '2222', input: `nums=[1,2,3],k=1`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2223', input: `nums=[2,1,4,3],left=2,right=3`, expected_output: `3`, is_hidden: false },
    { id: '2223', input: `nums=[2,2,2],left=1,right=2`, expected_output: `6`, is_hidden: true },
    { id: '2223', input: `nums=[1],left=1,right=1`, expected_output: `1`, is_hidden: true },
    { id: '2224', input: `hours=[9,9,6,0,6,6,9]`, expected_output: `3`, is_hidden: false },
    { id: '2224', input: `hours=[6,6,6]`, expected_output: `0`, is_hidden: true },
    { id: '2224', input: `hours=[9]`, expected_output: `1`, is_hidden: true },
    { id: '2225', input: `nums=[1,2,3,4,5],k=3`, expected_output: `12`, is_hidden: false },
    { id: '2225', input: `nums=[-1,-2,-3],k=2`, expected_output: `-1`, is_hidden: true },
    { id: '2225', input: `nums=[5],k=1`, expected_output: `5`, is_hidden: true }
  ],
  'bit-manipulation': [
    { id: '2226', input: `nums=[2,2,1]`, expected_output: `1`, is_hidden: false },
    { id: '2226', input: `nums=[4,1,2,1,2]`, expected_output: `4`, is_hidden: true },
    { id: '2226', input: `nums=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2227', input: `n=16`, expected_output: `true`, is_hidden: false },
    { id: '2227', input: `n=3`, expected_output: `false`, is_hidden: true },
    { id: '2227', input: `n=1`, expected_output: `true`, is_hidden: true },
    { id: '2228', input: `n=11`, expected_output: `3`, is_hidden: false },
    { id: '2228', input: `n=128`, expected_output: `1`, is_hidden: true },
    { id: '2228', input: `n=2147483647`, expected_output: `31`, is_hidden: true },
    { id: '2229', input: `n=43261596`, expected_output: `964176192`, is_hidden: false },
    { id: '2229', input: `n=0`, expected_output: `0`, is_hidden: true },
    { id: '2229', input: `n=1`, expected_output: `2147483648`, is_hidden: true },
    { id: '2230', input: `nums=[3,0,1]`, expected_output: `2`, is_hidden: false },
    { id: '2230', input: `nums=[0,1]`, expected_output: `2`, is_hidden: true },
    { id: '2230', input: `nums=[0]`, expected_output: `1`, is_hidden: true },
    { id: '2231', input: `n=5`, expected_output: `[0,1,1,2,1,2]`, is_hidden: false },
    { id: '2231', input: `n=0`, expected_output: `[0]`, is_hidden: true },
    { id: '2231', input: `n=2`, expected_output: `[0,1,1]`, is_hidden: true },
    { id: '2232', input: `left=5,right=7`, expected_output: `4`, is_hidden: false },
    { id: '2232', input: `left=0,right=1`, expected_output: `0`, is_hidden: true },
    { id: '2232', input: `left=1,right=1`, expected_output: `1`, is_hidden: true },
    { id: '2233', input: `arr=[1,3,4,8],queries=[[0,1],[1,2]]`, expected_output: `[2,7]`, is_hidden: false },
    { id: '2233', input: `arr=[4,2,2,8],queries=[[0,0]]`, expected_output: `[4]`, is_hidden: true },
    { id: '2233', input: `arr=[1],queries=[[0,0]]`, expected_output: `[1]`, is_hidden: true },
    { id: '2234', input: `data=[197,130,1]`, expected_output: `true`, is_hidden: false },
    { id: '2234', input: `data=[235,140,4]`, expected_output: `false`, is_hidden: true },
    { id: '2234', input: `data=[255]`, expected_output: `true`, is_hidden: true },
    { id: '2235', input: `s=0110,n=3`, expected_output: `true`, is_hidden: false },
    { id: '2235', input: `s=0110,n=4`, expected_output: `false`, is_hidden: true },
    { id: '2235', input: `s=1,n=1`, expected_output: `true`, is_hidden: true },
    { id: '2236', input: `nums=[3,10,5,25,2,8]`, expected_output: `28`, is_hidden: false },
    { id: '2236', input: `nums=[0]`, expected_output: `0`, is_hidden: true },
    { id: '2236', input: `nums=[1,2]`, expected_output: `3`, is_hidden: true },
    { id: '2237', input: `arr=[0,1,2,3,4,5,6,7,8]`, expected_output: `[0,1,2,4,8,3,5,6,7]`, is_hidden: false },
    { id: '2237', input: `arr=[1,2,4,8]`, expected_output: `[1,2,4,8]`, is_hidden: true },
    { id: '2237', input: `arr=[3,7]`, expected_output: `[3,7]`, is_hidden: true },
    { id: '2238', input: `num=8`, expected_output: `[3,3]`, is_hidden: false },
    { id: '2238', input: `num=123`, expected_output: `[5,25]`, is_hidden: true },
    { id: '2238', input: `num=1`, expected_output: `[1,2]`, is_hidden: true },
    { id: '2239', input: `nums=[1,2,4]`, expected_output: `7`, is_hidden: false },
    { id: '2239', input: `nums=[1,1,1]`, expected_output: `3`, is_hidden: true },
    { id: '2239', input: `nums=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2240', input: `s=abcd,t=abcde`, expected_output: `e`, is_hidden: false },
    { id: '2240', input: `s=,t=y`, expected_output: `y`, is_hidden: true },
    { id: '2240', input: `s=a,t=a`, expected_output: ``, is_hidden: true }
  ],
  'mathematics': [
    { id: '2241', input: `n=5`, expected_output: `["1","2","Fizz","4","Buzz"]`, is_hidden: false },
    { id: '2241', input: `n=1`, expected_output: `["1"]`, is_hidden: true },
    { id: '2241', input: `n=15`, expected_output: `["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]`, is_hidden: true },
    { id: '2242', input: `num=121`, expected_output: `2`, is_hidden: false },
    { id: '2242', input: `num=1248`, expected_output: `4`, is_hidden: true },
    { id: '2242', input: `num=1`, expected_output: `1`, is_hidden: true },
    { id: '2243', input: `num=38`, expected_output: `2`, is_hidden: false },
    { id: '2243', input: `num=0`, expected_output: `0`, is_hidden: true },
    { id: '2243', input: `num=9999`, expected_output: `9`, is_hidden: true },
    { id: '2244', input: `n=27`, expected_output: `true`, is_hidden: false },
    { id: '2244', input: `n=0`, expected_output: `false`, is_hidden: true },
    { id: '2244', input: `n=1`, expected_output: `true`, is_hidden: true },
    { id: '2245', input: `n=19`, expected_output: `true`, is_hidden: false },
    { id: '2245', input: `n=2`, expected_output: `false`, is_hidden: true },
    { id: '2245', input: `n=1`, expected_output: `true`, is_hidden: true },
    { id: '2246', input: `x=2.0,n=10`, expected_output: `1024.0`, is_hidden: false },
    { id: '2246', input: `x=2.1,n=3`, expected_output: `9.261`, is_hidden: true },
    { id: '2246', input: `x=1.0,n=0`, expected_output: `1.0`, is_hidden: true },
    { id: '2247', input: `a=2,b=[3]`, expected_output: `8`, is_hidden: false },
    { id: '2247', input: `a=2,b=[1,0]`, expected_output: `1024`, is_hidden: true },
    { id: '2247', input: `a=1,b=[1,0,0]`, expected_output: `1`, is_hidden: true },
    { id: '2248', input: `n=10`, expected_output: `12`, is_hidden: false },
    { id: '2248', input: `n=1`, expected_output: `1`, is_hidden: true },
    { id: '2248', input: `n=7`, expected_output: `8`, is_hidden: true },
    { id: '2249', input: `n=10`, expected_output: `4`, is_hidden: false },
    { id: '2249', input: `n=0`, expected_output: `0`, is_hidden: true },
    { id: '2249', input: `n=2`, expected_output: `0`, is_hidden: true },
    { id: '2250', input: `num=123`, expected_output: `One Hundred Twenty Three`, is_hidden: false },
    { id: '2250', input: `num=1234567`, expected_output: `One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven`, is_hidden: true },
    { id: '2250', input: `num=0`, expected_output: `Zero`, is_hidden: true },
    { id: '2251', input: `points=[[1,1],[2,2],[3,3]]`, expected_output: `3`, is_hidden: false },
    { id: '2251', input: `points=[[1,1]]`, expected_output: `1`, is_hidden: true },
    { id: '2251', input: `points=[[0,0],[1,1]]`, expected_output: `2`, is_hidden: true },
    { id: '2252', input: `n=3,k=3`, expected_output: `213`, is_hidden: false },
    { id: '2252', input: `n=4,k=9`, expected_output: `2314`, is_hidden: true },
    { id: '2252', input: `n=1,k=1`, expected_output: `1`, is_hidden: true },
    { id: '2253', input: `nums=[3,30,34,5,9]`, expected_output: `9534330`, is_hidden: false },
    { id: '2253', input: `nums=[10,2]`, expected_output: `210`, is_hidden: true },
    { id: '2253', input: `nums=[0]`, expected_output: `0`, is_hidden: true },
    { id: '2254', input: `s=3+2*2`, expected_output: `7`, is_hidden: false },
    { id: '2254', input: `s=3/2`, expected_output: `1`, is_hidden: true },
    { id: '2254', input: `s=1+1`, expected_output: `2`, is_hidden: true },
    { id: '2255', input: `nums=[1,3,-1,-3,5,3,6,7],k=3`, expected_output: `[1.0,-1.0,-1.0,3.0,5.0,6.0]`, is_hidden: false },
    { id: '2255', input: `nums=[1,2,3,4],k=2`, expected_output: `[1.5,2.5,3.5]`, is_hidden: true },
    { id: '2255', input: `nums=[1],k=1`, expected_output: `[1.0]`, is_hidden: true }
  ],
  'greedy': [
    { id: '2256', input: `nums=[-2,1,-3,4,-1,2,1,-5,4]`, expected_output: `6`, is_hidden: false },
    { id: '2256', input: `nums=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2256', input: `nums=[5,4,-1,7,8]`, expected_output: `23`, is_hidden: true },
    { id: '2257', input: `prices=[7,1,5,3,6,4]`, expected_output: `5`, is_hidden: false },
    { id: '2257', input: `prices=[7,6,4,3,1]`, expected_output: `0`, is_hidden: true },
    { id: '2257', input: `prices=[1,2]`, expected_output: `1`, is_hidden: true },
    { id: '2258', input: `boxes=[[1,3],[2,2],[3,1]],size=4`, expected_output: `8`, is_hidden: false },
    { id: '2258', input: `boxes=[[5,10],[2,5],[4,7],[3,9]],size=10`, expected_output: `91`, is_hidden: true },
    { id: '2258', input: `boxes=[[1,1]],size=1`, expected_output: `1`, is_hidden: true },
    { id: '2259', input: `bed=[1,0,0,0,1],n=1`, expected_output: `true`, is_hidden: false },
    { id: '2259', input: `bed=[1,0,0,0,1],n=2`, expected_output: `false`, is_hidden: true },
    { id: '2259', input: `bed=[0],n=1`, expected_output: `true`, is_hidden: true },
    { id: '2260', input: `bills=[5,5,5,10,20]`, expected_output: `true`, is_hidden: false },
    { id: '2260', input: `bills=[5,5,10,10,20]`, expected_output: `false`, is_hidden: true },
    { id: '2260', input: `bills=[5]`, expected_output: `true`, is_hidden: true },
    { id: '2261', input: `nums=[2,3,1,1,4]`, expected_output: `true`, is_hidden: false },
    { id: '2261', input: `nums=[3,2,1,0,4]`, expected_output: `false`, is_hidden: true },
    { id: '2261', input: `nums=[1,0,0]`, expected_output: `false`, is_hidden: true },
    { id: '2262', input: `tasks=[A,A,A,B,B,B],n=2`, expected_output: `8`, is_hidden: false },
    { id: '2262', input: `tasks=[A,A,A,B,B,B],n=0`, expected_output: `6`, is_hidden: true },
    { id: '2262', input: `tasks=[A,B],n=2`, expected_output: `4`, is_hidden: true },
    { id: '2263', input: `s=ababcbacadefegdehijhklij`, expected_output: `[9,7,8]`, is_hidden: false },
    { id: '2263', input: `s=eccbbbbdec`, expected_output: `[10]`, is_hidden: true },
    { id: '2263', input: `s=ab`, expected_output: `[1,1]`, is_hidden: true },
    { id: '2264', input: `intervals=[[1,2],[2,3],[3,4],[1,3]]`, expected_output: `1`, is_hidden: false },
    { id: '2264', input: `intervals=[[1,2],[1,2],[1,2]]`, expected_output: `2`, is_hidden: true },
    { id: '2264', input: `intervals=[[1,2]]`, expected_output: `0`, is_hidden: true },
    { id: '2265', input: `points=[[10,16],[2,8],[1,6],[7,12]]`, expected_output: `2`, is_hidden: false },
    { id: '2265', input: `points=[[1,2],[3,4],[5,6],[7,8]]`, expected_output: `4`, is_hidden: true },
    { id: '2265', input: `points=[[1,2]]`, expected_output: `1`, is_hidden: true },
    { id: '2266', input: `ratings=[1,0,2]`, expected_output: `5`, is_hidden: false },
    { id: '2266', input: `ratings=[1,2,2]`, expected_output: `4`, is_hidden: true },
    { id: '2266', input: `ratings=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2267', input: `s=aab`, expected_output: `aba`, is_hidden: false },
    { id: '2267', input: `s=aaab`, expected_output: ``, is_hidden: true },
    { id: '2267', input: `s=a`, expected_output: `a`, is_hidden: true },
    { id: '2268', input: `courses=[[100,200],[200,1300],[1000,1250],[2000,3200]]`, expected_output: `3`, is_hidden: false },
    { id: '2268', input: `courses=[[1,2]]`, expected_output: `1`, is_hidden: true },
    { id: '2268', input: `courses=[[3,2],[4,3]]`, expected_output: `1`, is_hidden: true },
    { id: '2269', input: `quality=[10,20,5],wage=[70,50,30],k=2`, expected_output: `105.0`, is_hidden: false },
    { id: '2269', input: `quality=[3,1,10,10,1],wage=[4,8,2,2,7],k=3`, expected_output: `30.66667`, is_hidden: true },
    { id: '2269', input: `quality=[1,1],wage=[1,2],k=2`, expected_output: `3.0`, is_hidden: true },
    { id: '2270', input: `nums=[7,2,5,10,8],k=2`, expected_output: `18`, is_hidden: false },
    { id: '2270', input: `nums=[1,2,3,4,5],k=2`, expected_output: `9`, is_hidden: true },
    { id: '2270', input: `nums=[1],k=1`, expected_output: `1`, is_hidden: true }
  ],
  'backtracking': [
    { id: '2271', input: `nums=[1,2,3]`, expected_output: `[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]`, is_hidden: false },
    { id: '2271', input: `nums=[0]`, expected_output: `[[],[0]]`, is_hidden: true },
    { id: '2271', input: `nums=[1,2]`, expected_output: `[[],[1],[2],[1,2]]`, is_hidden: true },
    { id: '2272', input: `digits=23`, expected_output: `["ad","ae","af","bd","be","bf","cd","ce","cf"]`, is_hidden: false },
    { id: '2272', input: `digits=`, expected_output: `[]`, is_hidden: true },
    { id: '2272', input: `digits=2`, expected_output: `["a","b","c"]`, is_hidden: true },
    { id: '2273', input: `n=3`, expected_output: `["((()))","(()())","(())()","()(())","()()()"]`, is_hidden: false },
    { id: '2273', input: `n=1`, expected_output: `["()"]`, is_hidden: true },
    { id: '2273', input: `n=2`, expected_output: `["(())","()()"]`, is_hidden: true },
    { id: '2274', input: `nums=[1,2,3]`, expected_output: `[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]`, is_hidden: false },
    { id: '2274', input: `nums=[0,1]`, expected_output: `[[0,1],[1,0]]`, is_hidden: true },
    { id: '2274', input: `nums=[1]`, expected_output: `[[1]]`, is_hidden: true },
    { id: '2275', input: `candidates=[2,3,6,7],target=7`, expected_output: `[[2,2,3],[7]]`, is_hidden: false },
    { id: '2275', input: `candidates=[2,3,5],target=8`, expected_output: `[[2,2,2,2],[2,3,3],[3,5]]`, is_hidden: true },
    { id: '2275', input: `candidates=[1],target=1`, expected_output: `[[1]]`, is_hidden: true },
    { id: '2276', input: `candidates=[10,1,2,7,6,1,5],target=8`, expected_output: `[[1,1,6],[1,2,5],[1,7],[2,6]]`, is_hidden: false },
    { id: '2276', input: `candidates=[2,5,2,1,2],target=5`, expected_output: `[[1,2,2],[5]]`, is_hidden: true },
    { id: '2276', input: `candidates=[1],target=1`, expected_output: `[[1]]`, is_hidden: true },
    { id: '2277', input: `s=aab`, expected_output: `[["a","a","b"],["aa","b"]]`, is_hidden: false },
    { id: '2277', input: `s=a`, expected_output: `[["a"]]`, is_hidden: true },
    { id: '2277', input: `s=aba`, expected_output: `[["a","b","a"],["aba"]]`, is_hidden: true },
    { id: '2278', input: `board=A|B|C|E|S|F|C|S|A|D|E|E,word=ABCCED`, expected_output: `true`, is_hidden: false },
    { id: '2278', input: `board=A|B|C|E|S|F|C|S|A|D|E|E,word=ABCB`, expected_output: `false`, is_hidden: true },
    { id: '2278', input: `board=A|B|C|E,word=ABCE`, expected_output: `true`, is_hidden: true },
    { id: '2279', input: `n=4`, expected_output: `2`, is_hidden: false },
    { id: '2279', input: `n=1`, expected_output: `1`, is_hidden: true },
    { id: '2279', input: `n=8`, expected_output: `92`, is_hidden: true },
    { id: '2280', input: `s=25525511135`, expected_output: `["255.255.11.135","255.255.111.35"]`, is_hidden: false },
    { id: '2280', input: `s=0000`, expected_output: `["0.0.0.0"]`, is_hidden: true },
    { id: '2280', input: `s=1111`, expected_output: `["1.1.1.1"]`, is_hidden: true },
    { id: '2281', input: `board=sudoku`, expected_output: `solved`, is_hidden: false },
    { id: '2281', input: `board=easy`, expected_output: `solved`, is_hidden: true },
    { id: '2281', input: `board=empty`, expected_output: `solved`, is_hidden: true },
    { id: '2282', input: `hit,cog,[hot,dot,dog,lot,log,cog]`, expected_output: `5`, is_hidden: false },
    { id: '2282', input: `hit,cog,[hot,dot,dog,lot,log]`, expected_output: `0`, is_hidden: true },
    { id: '2282', input: `a,c,[a,b,c]`, expected_output: `2`, is_hidden: true },
    { id: '2283', input: `num=123,target=6`, expected_output: `["1*2*3","1+2+3"]`, is_hidden: false },
    { id: '2283', input: `num=232,target=8`, expected_output: `["2*3+2","2+3*2"]`, is_hidden: true },
    { id: '2283', input: `num=10,target=10`, expected_output: `["10"]`, is_hidden: true },
    { id: '2284', input: `s=aabb`, expected_output: `["abba","baab"]`, is_hidden: false },
    { id: '2284', input: `s=abc`, expected_output: `[]`, is_hidden: true },
    { id: '2284', input: `s=aa`, expected_output: `["aa"]`, is_hidden: true },
    { id: '2285', input: `s=()())()`, expected_output: `["(())()","()()()"]`, is_hidden: false },
    { id: '2285', input: `s=(a)())()`, expected_output: `["(a())()","(a)()()"]`, is_hidden: true },
    { id: '2285', input: `s=()`, expected_output: `["()"]`, is_hidden: true }
  ],
  'divide-and-conquer': [
    { id: '2286', input: `nums=[-2,1,-3,4,-1,2,1,-5,4]`, expected_output: `6`, is_hidden: false },
    { id: '2286', input: `nums=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2286', input: `nums=[5,4,-1,7,8]`, expected_output: `23`, is_hidden: true },
    { id: '2287', input: `nums=[3,2,3]`, expected_output: `3`, is_hidden: false },
    { id: '2287', input: `nums=[2,2,1,1,1,2,2]`, expected_output: `2`, is_hidden: true },
    { id: '2287', input: `nums=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2288', input: `nums=[1,2,3]`, expected_output: `6`, is_hidden: false },
    { id: '2288', input: `nums=[-1,-2,-3]`, expected_output: `-6`, is_hidden: true },
    { id: '2288', input: `nums=[1,2,3,4]`, expected_output: `24`, is_hidden: true },
    { id: '2289', input: `nums1=[1,2,3],nums2=[2,5,6]`, expected_output: `[1,2,2,3,5,6]`, is_hidden: false },
    { id: '2289', input: `nums1=[],nums2=[1]`, expected_output: `[1]`, is_hidden: true },
    { id: '2289', input: `nums1=[1],nums2=[]`, expected_output: `[1]`, is_hidden: true },
    { id: '2290', input: `root=[3,1,4,3,null,1,5]`, expected_output: `4`, is_hidden: false },
    { id: '2290', input: `root=[3,3,null,4,2]`, expected_output: `3`, is_hidden: true },
    { id: '2290', input: `root=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2291', input: `nums=[5,2,3,1]`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2291', input: `nums=[5,1,1,2,0,0]`, expected_output: `[0,0,1,1,2,5]`, is_hidden: true },
    { id: '2291', input: `nums=[1]`, expected_output: `[1]`, is_hidden: true },
    { id: '2292', input: `matrix=[[1,4,7,11,15],[2,5,8,12,19]],target=5`, expected_output: `true`, is_hidden: false },
    { id: '2292', input: `matrix=[[1,4,7,11,15],[2,5,8,12,19]],target=20`, expected_output: `false`, is_hidden: true },
    { id: '2292', input: `matrix=[[1]],target=1`, expected_output: `true`, is_hidden: true },
    { id: '2293', input: `expression=2-1-1`, expected_output: `[0,2]`, is_hidden: false },
    { id: '2293', input: `expression=2*3-4*5`, expected_output: `[-34,-14,-10,-10,10]`, is_hidden: true },
    { id: '2293', input: `expression=1+1`, expected_output: `[2]`, is_hidden: true },
    { id: '2294', input: `root=[4,2,6,1,3],target=3.7`, expected_output: `4`, is_hidden: false },
    { id: '2294', input: `root=[1],target=4.428571`, expected_output: `1`, is_hidden: true },
    { id: '2294', input: `root=[2,1,3],target=2.5`, expected_output: `2`, is_hidden: true },
    { id: '2295', input: `nums=[3,2,1,5,6,4],k=2`, expected_output: `5`, is_hidden: false },
    { id: '2295', input: `nums=[3,2,3,1,2,4,5,5,6],k=4`, expected_output: `4`, is_hidden: true },
    { id: '2295', input: `nums=[1],k=1`, expected_output: `1`, is_hidden: true },
    { id: '2296', input: `nums1=[1,3],nums2=[2]`, expected_output: `2.0`, is_hidden: false },
    { id: '2296', input: `nums1=[1,2],nums2=[3,4]`, expected_output: `2.5`, is_hidden: true },
    { id: '2296', input: `nums1=[1],nums2=[2]`, expected_output: `1.5`, is_hidden: true },
    { id: '2297', input: `nums=[10,9,2,5,3,7,101,18]`, expected_output: `4`, is_hidden: false },
    { id: '2297', input: `nums=[0,1,0,3,2,3]`, expected_output: `4`, is_hidden: true },
    { id: '2297', input: `nums=[7,7,7,7,7,7,7]`, expected_output: `1`, is_hidden: true },
    { id: '2298', input: `matrix=[[1,0,1],[0,-2,3]],k=2`, expected_output: `2`, is_hidden: false },
    { id: '2298', input: `matrix=[[2,2,-1]],k=3`, expected_output: `2`, is_hidden: true },
    { id: '2298', input: `matrix=[[1]],k=1`, expected_output: `1`, is_hidden: true },
    { id: '2299', input: `stickers=[with,example,science],target=thehat`, expected_output: `3`, is_hidden: false },
    { id: '2299', input: `stickers=[notice,possible],target=basicbasic`, expected_output: `6`, is_hidden: true },
    { id: '2299', input: `stickers=[a],target=a`, expected_output: `1`, is_hidden: true },
    { id: '2300', input: `buildings=[[2,9,10],[3,7,15],[5,12,12]]`, expected_output: `[[2,10],[3,15],[7,12],[12,0]]`, is_hidden: false },
    { id: '2300', input: `buildings=[[0,2,3],[2,5,3]]`, expected_output: `[[0,3],[5,0]]`, is_hidden: true },
    { id: '2300', input: `buildings=[[1,3,2]]`, expected_output: `[[1,2],[3,0]]`, is_hidden: true }
  ],
  'binary-tree': [
    { id: '2301', input: `root=[4,2,7,1,3,6,9]`, expected_output: `[4,7,2,9,6,3,1]`, is_hidden: false },
    { id: '2301', input: `root=[]`, expected_output: `[]`, is_hidden: true },
    { id: '2301', input: `root=[1,2,3]`, expected_output: `[1,3,2]`, is_hidden: true },
    { id: '2302', input: `root=[3,9,20,null,null,15,7]`, expected_output: `3`, is_hidden: false },
    { id: '2302', input: `root=[1,null,2]`, expected_output: `2`, is_hidden: true },
    { id: '2302', input: `root=[]`, expected_output: `0`, is_hidden: true },
    { id: '2303', input: `p=[1,2,3],q=[1,2,3]`, expected_output: `true`, is_hidden: false },
    { id: '2303', input: `p=[1,2],q=[1,null,2]`, expected_output: `false`, is_hidden: true },
    { id: '2303', input: `p=[1],q=[1]`, expected_output: `true`, is_hidden: true },
    { id: '2304', input: `root=[1,2,2,3,4,4,3]`, expected_output: `true`, is_hidden: false },
    { id: '2304', input: `root=[1,2,2,null,3,null,3]`, expected_output: `false`, is_hidden: true },
    { id: '2304', input: `root=[1]`, expected_output: `true`, is_hidden: true },
    { id: '2305', input: `root=[5,4,8,11,null,13,4,7,2,null,null,null,1],targetSum=22`, expected_output: `true`, is_hidden: false },
    { id: '2305', input: `root=[1,2,3],targetSum=5`, expected_output: `false`, is_hidden: true },
    { id: '2305', input: `root=[1],targetSum=1`, expected_output: `true`, is_hidden: true },
    { id: '2306', input: `root=[3,9,20,null,null,15,7]`, expected_output: `[[3],[9,20],[15,7]]`, is_hidden: false },
    { id: '2306', input: `root=[1]`, expected_output: `[[1]]`, is_hidden: true },
    { id: '2306', input: `root=[]`, expected_output: `[]`, is_hidden: true },
    { id: '2307', input: `root=[2,1,3]`, expected_output: `true`, is_hidden: false },
    { id: '2307', input: `root=[5,1,4,null,null,3,6]`, expected_output: `false`, is_hidden: true },
    { id: '2307', input: `root=[1]`, expected_output: `true`, is_hidden: true },
    { id: '2308', input: `root=[3,5,1,6,2,0,8,null,null,7,4],p=5,q=1`, expected_output: `3`, is_hidden: false },
    { id: '2308', input: `root=[3,5,1,6,2,0,8,null,null,7,4],p=5,q=4`, expected_output: `5`, is_hidden: true },
    { id: '2308', input: `root=[2,1],p=2,q=1`, expected_output: `2`, is_hidden: true },
    { id: '2309', input: `root=[3,9,20,null,null,15,7]`, expected_output: `[[3],[20,9],[15,7]]`, is_hidden: false },
    { id: '2309', input: `root=[1]`, expected_output: `[[1]]`, is_hidden: true },
    { id: '2309', input: `root=[1,2]`, expected_output: `[[1],[2]]`, is_hidden: true },
    { id: '2310', input: `root=[1,2,5,3,4,null,6]`, expected_output: `[1,null,2,null,3,null,4,null,5,null,6]`, is_hidden: false },
    { id: '2310', input: `root=[]`, expected_output: `[]`, is_hidden: true },
    { id: '2310', input: `root=[1]`, expected_output: `[1]`, is_hidden: true },
    { id: '2311', input: `root=[1,2,3]`, expected_output: `6`, is_hidden: false },
    { id: '2311', input: `root=[-10,9,20,null,null,15,7]`, expected_output: `42`, is_hidden: true },
    { id: '2311', input: `root=[-3]`, expected_output: `-3`, is_hidden: true },
    { id: '2312', input: `root=[1,2,3,null,null,4,5]`, expected_output: `[1,2,3,null,null,4,5]`, is_hidden: false },
    { id: '2312', input: `root=[]`, expected_output: `[]`, is_hidden: true },
    { id: '2312', input: `root=[1]`, expected_output: `[1]`, is_hidden: true },
    { id: '2313', input: `root=[1,2,null,3,null,4,null,5]`, expected_output: `3`, is_hidden: false },
    { id: '2313', input: `root=[1,2,3]`, expected_output: `1`, is_hidden: true },
    { id: '2313', input: `root=[0]`, expected_output: `1`, is_hidden: true },
    { id: '2314', input: `root=[3,9,20,null,null,15,7]`, expected_output: `[[9],[3,15],[20],[7]]`, is_hidden: false },
    { id: '2314', input: `root=[1,2,3,4,5,6,7]`, expected_output: `[[4],[2],[1,5,6],[3],[7]]`, is_hidden: true },
    { id: '2314', input: `root=[1]`, expected_output: `[[1]]`, is_hidden: true },
    { id: '2315', input: `root=[1,3,null,null,2]`, expected_output: `[3,1,null,null,2]`, is_hidden: false },
    { id: '2315', input: `root=[3,1,4,null,null,2]`, expected_output: `[2,1,4,null,null,3]`, is_hidden: true },
    { id: '2315', input: `root=[1,2]`, expected_output: `[2,1]`, is_hidden: true }
  ],
  'binary-search-tree': [
    { id: '2316', input: `root=[4,2,7,1,3],val=2`, expected_output: `[2,1,3]`, is_hidden: false },
    { id: '2316', input: `root=[4,2,7,1,3],val=5`, expected_output: `[]`, is_hidden: true },
    { id: '2316', input: `root=[1],val=1`, expected_output: `[1]`, is_hidden: true },
    { id: '2317', input: `root=[4,2,7,1,3],val=5`, expected_output: `[4,2,7,1,3,5]`, is_hidden: false },
    { id: '2317', input: `root=[],val=5`, expected_output: `[5]`, is_hidden: true },
    { id: '2317', input: `root=[2,1,3],val=4`, expected_output: `[2,1,3,4]`, is_hidden: true },
    { id: '2318', input: `root=[5,3,6,2,4,null,7],key=3`, expected_output: `[5,4,6,2,null,null,7]`, is_hidden: false },
    { id: '2318', input: `root=[5,3,6,2,4,null,7],key=0`, expected_output: `[5,3,6,2,4,null,7]`, is_hidden: true },
    { id: '2318', input: `root=[1],key=1`, expected_output: `[]`, is_hidden: true },
    { id: '2319', input: `root=[3,1,4,null,2],k=1`, expected_output: `1`, is_hidden: false },
    { id: '2319', input: `root=[5,3,6,2,4,null,null,1],k=3`, expected_output: `3`, is_hidden: true },
    { id: '2319', input: `root=[1],k=1`, expected_output: `1`, is_hidden: true },
    { id: '2320', input: `root=[4,2,6,1,3]`, expected_output: `1`, is_hidden: false },
    { id: '2320', input: `root=[1,0,48,null,null,12,49]`, expected_output: `1`, is_hidden: true },
    { id: '2320', input: `root=[1,1]`, expected_output: `0`, is_hidden: true },
    { id: '2321', input: `root=[10,5,15,3,7,null,18],low=7,high=15`, expected_output: `32`, is_hidden: false },
    { id: '2321', input: `root=[10,5,15,3,7,13,18,1,null,6],low=6,high=10`, expected_output: `23`, is_hidden: true },
    { id: '2321', input: `root=[1],low=1,high=1`, expected_output: `1`, is_hidden: true },
    { id: '2322', input: `root=[4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]`, expected_output: `[30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]`, is_hidden: false },
    { id: '2322', input: `root=[0,null,1]`, expected_output: `[1,null,1]`, is_hidden: true },
    { id: '2322', input: `root=[1,0,2]`, expected_output: `[3,3,2]`, is_hidden: true },
    { id: '2323', input: `root=[6,2,8,0,4,7,9,null,null,3,5],p=2,q=8`, expected_output: `6`, is_hidden: false },
    { id: '2323', input: `root=[6,2,8,0,4,7,9,null,null,3,5],p=2,q=4`, expected_output: `2`, is_hidden: true },
    { id: '2323', input: `root=[2,1,3],p=1,q=3`, expected_output: `2`, is_hidden: true },
    { id: '2324', input: `root=[5,3,6,2,4,null,7],k=9`, expected_output: `true`, is_hidden: false },
    { id: '2324', input: `root=[5,3,6,2,4,null,7],k=28`, expected_output: `false`, is_hidden: true },
    { id: '2324', input: `root=[1],k=2`, expected_output: `false`, is_hidden: true },
    { id: '2325', input: `root=[2,1,3],node=1`, expected_output: `2`, is_hidden: false },
    { id: '2325', input: `root=[5,3,6,2,4,null,null,1],node=3`, expected_output: `4`, is_hidden: true },
    { id: '2325', input: `root=[2,1,3],node=3`, expected_output: ``, is_hidden: true },
    { id: '2326', input: `root=[2,1,3]`, expected_output: `[2,1,3]`, is_hidden: false },
    { id: '2326', input: `root=[]`, expected_output: `[]`, is_hidden: true },
    { id: '2326', input: `root=[5,3,7]`, expected_output: `[5,3,7]`, is_hidden: true },
    { id: '2327', input: `root=[1,3,null,null,2]`, expected_output: `[3,1,null,null,2]`, is_hidden: false },
    { id: '2327', input: `root=[3,1,4,null,null,2]`, expected_output: `[2,1,4,null,null,3]`, is_hidden: true },
    { id: '2327', input: `root=[2,1,3]`, expected_output: `[2,1,3]`, is_hidden: true },
    { id: '2328', input: `matrix=[[1,5,9],[10,11,13],[12,13,15]],k=8`, expected_output: `13`, is_hidden: false },
    { id: '2328', input: `matrix=[[-5]],k=1`, expected_output: `-5`, is_hidden: true },
    { id: '2328', input: `matrix=[[1,2],[3,4]],k=3`, expected_output: `3`, is_hidden: true },
    { id: '2329', input: `root=[4,2,6,1,3,5,7],target=3.714286,k=2`, expected_output: `[4,3]`, is_hidden: false },
    { id: '2329', input: `root=[1],target=0,k=1`, expected_output: `[1]`, is_hidden: true },
    { id: '2329', input: `root=[1,2],target=1.5,k=1`, expected_output: `[1]`, is_hidden: true },
    { id: '2330', input: `root=[1,3,2,2,3,null,null,null,null,4]`, expected_output: `7`, is_hidden: false },
    { id: '2330', input: `root=[4,3,null,1,2]`, expected_output: `2`, is_hidden: true },
    { id: '2330', input: `root=[1]`, expected_output: `1`, is_hidden: true }
  ],
  'heap-priority-queue': [
    { id: '2331', input: `k=3,nums=[4,5,8,2]`, expected_output: `[4,4,5,5,8,8]`, is_hidden: false },
    { id: '2331', input: `k=1,nums=[1]`, expected_output: `[1]`, is_hidden: true },
    { id: '2331', input: `k=2,nums=[1,2]`, expected_output: `[1,2]`, is_hidden: true },
    { id: '2332', input: `stones=[2,7,4,1,8,1]`, expected_output: `1`, is_hidden: false },
    { id: '2332', input: `stones=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2332', input: `stones=[1,1]`, expected_output: `0`, is_hidden: true },
    { id: '2333', input: `score=[5,4,3,2,1]`, expected_output: `["Gold Medal","Silver Medal","Bronze Medal","4","5"]`, is_hidden: false },
    { id: '2333', input: `score=[10,9,8,7,6,5]`, expected_output: `["Gold Medal","Silver Medal","Bronze Medal","4","5","6"]`, is_hidden: true },
    { id: '2333', input: `score=[1]`, expected_output: `["Gold Medal"]`, is_hidden: true },
    { id: '2334', input: `points=[[3,3],[5,-1],[-2,4]],k=2`, expected_output: `[[3,3],[-2,4]]`, is_hidden: false },
    { id: '2334', input: `points=[[1,3]],k=1`, expected_output: `[[1,3]]`, is_hidden: true },
    { id: '2334', input: `points=[[0,0]],k=1`, expected_output: `[[0,0]]`, is_hidden: true },
    { id: '2335', input: `arr=[4,2,1,3]`, expected_output: `1`, is_hidden: false },
    { id: '2335', input: `arr=[1,5,9,13]`, expected_output: `4`, is_hidden: true },
    { id: '2335', input: `arr=[1,1]`, expected_output: `0`, is_hidden: true },
    { id: '2336', input: `ops=[pop,pop,addBack,pop,pop]`, expected_output: `[1,2,null,2,3]`, is_hidden: false },
    { id: '2336', input: `ops=[pop,pop,pop]`, expected_output: `[1,2,3]`, is_hidden: true },
    { id: '2336', input: `ops=[pop,addBack,pop]`, expected_output: `[1,null,1]`, is_hidden: true },
    { id: '2337', input: `nums=[3,2,1,5,6,4],k=2`, expected_output: `5`, is_hidden: false },
    { id: '2337', input: `nums=[3,2,3,1,2,4,5,5,6],k=4`, expected_output: `4`, is_hidden: true },
    { id: '2337', input: `nums=[1],k=1`, expected_output: `1`, is_hidden: true },
    { id: '2338', input: `nums=[1,1,1,2,2,3],k=2`, expected_output: `[1,2]`, is_hidden: false },
    { id: '2338', input: `nums=[1],k=1`, expected_output: `[1]`, is_hidden: true },
    { id: '2338', input: `nums=[1,2],k=2`, expected_output: `[1,2]`, is_hidden: true },
    { id: '2339', input: `s=aab`, expected_output: `aba`, is_hidden: false },
    { id: '2339', input: `s=aaab`, expected_output: ``, is_hidden: true },
    { id: '2339', input: `s=a`, expected_output: `a`, is_hidden: true },
    { id: '2340', input: `tasks=[A,A,A,B,B,B],n=2`, expected_output: `8`, is_hidden: false },
    { id: '2340', input: `tasks=[A,A,A,B,B,B],n=0`, expected_output: `6`, is_hidden: true },
    { id: '2340', input: `tasks=[A,B],n=0`, expected_output: `2`, is_hidden: true },
    { id: '2341', input: `ops=[addNum(1),addNum(2),findMedian(),addNum(3),findMedian()]`, expected_output: `[null,null,1.5,null,2.0]`, is_hidden: false },
    { id: '2341', input: `ops=[addNum(0),findMedian()]`, expected_output: `[null,0.0]`, is_hidden: true },
    { id: '2341', input: `ops=[addNum(-1),addNum(1),findMedian()]`, expected_output: `[null,null,0.0]`, is_hidden: true },
    { id: '2342', input: `nums=[1,3,-1,-3,5,3,6,7],k=3`, expected_output: `[1.0,-1.0,-1.0,3.0,5.0,6.0]`, is_hidden: false },
    { id: '2342', input: `nums=[1,2,3,4],k=2`, expected_output: `[1.5,2.5,3.5]`, is_hidden: true },
    { id: '2342', input: `nums=[1],k=1`, expected_output: `[1.0]`, is_hidden: true },
    { id: '2343', input: `k=2,w=0,profits=[1,2,3],capital=[0,1,1]`, expected_output: `4`, is_hidden: false },
    { id: '2343', input: `k=4,w=0,profits=[1,2,3],capital=[0,1,2]`, expected_output: `6`, is_hidden: true },
    { id: '2343', input: `k=1,w=0,profits=[1],capital=[0]`, expected_output: `1`, is_hidden: true },
    { id: '2344', input: `intervals=[[0,30],[5,10],[15,20]]`, expected_output: `2`, is_hidden: false },
    { id: '2344', input: `intervals=[[7,10],[2,4]]`, expected_output: `1`, is_hidden: true },
    { id: '2344', input: `intervals=[[1,5]]`, expected_output: `1`, is_hidden: true },
    { id: '2345', input: `nums1=[1,7,11],nums2=[2,4,6],k=3`, expected_output: `[[1,2],[1,4],[1,6]]`, is_hidden: false },
    { id: '2345', input: `nums1=[1,1,2],nums2=[1,2,3],k=2`, expected_output: `[[1,1],[1,1]]`, is_hidden: true },
    { id: '2345', input: `nums1=[1],nums2=[1],k=1`, expected_output: `[[1,1]]`, is_hidden: true }
  ],
  'trie': [
    { id: '2346', input: `ops=[insert,search,search,startsWith]`, expected_output: `[null,true,false,true]`, is_hidden: false },
    { id: '2346', input: `ops=[insert,search]`, expected_output: `[null,true]`, is_hidden: true },
    { id: '2346', input: `ops=[search]`, expected_output: `[false]`, is_hidden: true },
    { id: '2347', input: `ops=[addWord,bad,search,bad,search,.ad,search,b..,search]`, expected_output: `[null,null,true,false,true,null,true,false,true]`, is_hidden: false },
    { id: '2347', input: `ops=[addWord,a,search,a]`, expected_output: `[null,null,true]`, is_hidden: true },
    { id: '2347', input: `ops=[addWord,a,search,b]`, expected_output: `[null,null,false]`, is_hidden: true },
    { id: '2348', input: `dictionary=[cat,bat,rat],sentence=the cattle was rattled by the battery`, expected_output: `the cat was rat by the bat`, is_hidden: false },
    { id: '2348', input: `dictionary=[a,b,c],sentence=aadsfasf abbbs`, expected_output: `a a b`, is_hidden: true },
    { id: '2348', input: `dictionary=[a],sentence=a`, expected_output: `a`, is_hidden: true },
    { id: '2349', input: `ops=[insert,apple,sum,insert,app,sum]`, expected_output: `[null,null,3,null,5]`, is_hidden: false },
    { id: '2349', input: `ops=[insert,a,sum]`, expected_output: `[null,null,1]`, is_hidden: true },
    { id: '2349', input: `ops=[insert,aa,sum,a]`, expected_output: `[null,null,2,1]`, is_hidden: true },
    { id: '2350', input: `words=[w,wo,wor,worl,world]`, expected_output: `world`, is_hidden: false },
    { id: '2350', input: `words=[a,banana,app,appl,ap,apply,apple]`, expected_output: `apple`, is_hidden: true },
    { id: '2350', input: `words=[ab,abc]`, expected_output: `abc`, is_hidden: true },
    { id: '2351', input: `ops=[buildDict,search,search]`, expected_output: `[null,true,false]`, is_hidden: false },
    { id: '2351', input: `ops=[buildDict,search]`, expected_output: `[null,false]`, is_hidden: true },
    { id: '2351', input: `ops=[buildDict,search]`, expected_output: `[null,true]`, is_hidden: true },
    { id: '2352', input: `words=[abcd,dcba,lls,s,sssll]`, expected_output: `[[0,1],[1,0],[3,2],[2,4]]`, is_hidden: false },
    { id: '2352', input: `words=[bat,tab,cat]`, expected_output: `[[0,1],[1,0]]`, is_hidden: true },
    { id: '2352', input: `words=[a,b]`, expected_output: `[[0,1],[1,0]]`, is_hidden: true },
    { id: '2353', input: `products=[mobile,mouse,moneypot,monitor,mousepad],searchWord=mouse`, expected_output: `[["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]`, is_hidden: false },
    { id: '2353', input: `products=[havana],searchWord=havana`, expected_output: `[["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]`, is_hidden: true },
    { id: '2353', input: `products=[a,b,c],searchWord=a`, expected_output: `[["a"],["a"],["a"]]`, is_hidden: true },
    { id: '2354', input: `s=abpcplea,dictionary=[ale,apple,monkey,plea]`, expected_output: `apple`, is_hidden: false },
    { id: '2354', input: `s=aaa,dictionary=[aa,aaa]`, expected_output: `aa`, is_hidden: true },
    { id: '2354', input: `s=a,dictionary=[a]`, expected_output: `a`, is_hidden: true },
    { id: '2355', input: `nums=[0,1,2,3,4],queries=[[3,1],[1,3],[5,6]]`, expected_output: `[3,3,7]`, is_hidden: false },
    { id: '2355', input: `nums=[5,2],queries=[[3,1]]`, expected_output: `[7]`, is_hidden: true },
    { id: '2355', input: `nums=[1],queries=[[0,1]]`, expected_output: `[1]`, is_hidden: true },
    { id: '2356', input: `words=[cd,f,kl]`, expected_output: `[false,false,true]`, is_hidden: false },
    { id: '2356', input: `words=[a,abc]`, expected_output: `[true,true,true]`, is_hidden: true },
    { id: '2356', input: `words=[a]`, expected_output: `[true]`, is_hidden: true },
    { id: '2357', input: `board=A|B|C|E|S|F|C|S|A|D|E|E,words=[oath,pea,eat,rain]`, expected_output: `["eat","oath"]`, is_hidden: false },
    { id: '2357', input: `board=A|B|C|E,words=[a]`, expected_output: `["a"]`, is_hidden: true },
    { id: '2357', input: `board=A,words=[A]`, expected_output: `["A"]`, is_hidden: true },
    { id: '2358', input: `words=[abcd,dcba,lls,s,sssll]`, expected_output: `[[0,1],[1,0],[3,2],[2,4]]`, is_hidden: false },
    { id: '2358', input: `words=[a,abc,aba,ba]`, expected_output: `[[0,3],[3,0],[1,2],[2,1]]`, is_hidden: true },
    { id: '2358', input: `words=[a,a]`, expected_output: `[[0,1]]`, is_hidden: true },
    { id: '2359', input: `words=[dog,dove,duck]`, expected_output: `["du","dov","duc"]`, is_hidden: false },
    { id: '2359', input: `words=[zebra,dog,dove]`, expected_output: `["z","dog","dov"]`, is_hidden: true },
    { id: '2359', input: `words=[a,ab]`, expected_output: `["a","ab"]`, is_hidden: true },
    { id: '2360', input: `s=leetcode,wordDict=[leet,code]`, expected_output: `true`, is_hidden: false },
    { id: '2360', input: `s=catsandog,wordDict=[cats,dog,sand,and,cat]`, expected_output: `false`, is_hidden: true },
    { id: '2360', input: `s=a,wordDict=[a]`, expected_output: `true`, is_hidden: true }
  ],
  'dsu': [
    { id: '2361', input: `grid=[[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]`, expected_output: `3`, is_hidden: false },
    { id: '2361', input: `grid=[[1,1,1],[1,1,1],[1,1,1]]`, expected_output: `1`, is_hidden: true },
    { id: '2361', input: `grid=[[1]]`, expected_output: `1`, is_hidden: true },
    { id: '2362', input: `isConnected=[[1,1,0],[1,1,0],[0,0,1]]`, expected_output: `2`, is_hidden: false },
    { id: '2362', input: `isConnected=[[1,0,0],[0,1,0],[0,0,1]]`, expected_output: `3`, is_hidden: true },
    { id: '2362', input: `isConnected=[[1]]`, expected_output: `1`, is_hidden: true },
    { id: '2363', input: `isConnected=[[1,1,0],[1,1,0],[0,0,1]]`, expected_output: `2`, is_hidden: false },
    { id: '2363', input: `isConnected=[[1,0,0],[0,1,0],[0,0,1]]`, expected_output: `3`, is_hidden: true },
    { id: '2363', input: `isConnected=[[1,1],[1,1]]`, expected_output: `1`, is_hidden: true },
    { id: '2364', input: `accounts=[[John,john@mail.com,john_work@mail.com],[John,john@mail.com,john_home@mail.com]]`, expected_output: `[John,john@mail.com,john_work@mail.com,john_home@mail.com]`, is_hidden: false },
    { id: '2364', input: `accounts=[[Bob,bob@mail.com]]`, expected_output: `[Bob,bob@mail.com]`, is_hidden: true },
    { id: '2364', input: `accounts=[[A,a@mail.com],[B,b@mail.com]]`, expected_output: `[[A,a@mail.com],[B,b@mail.com]]`, is_hidden: true },
    { id: '2365', input: `edges=[[1,2],[1,3],[2,3]]`, expected_output: `[2,3]`, is_hidden: false },
    { id: '2365', input: `edges=[[1,2],[2,3],[3,4],[1,4],[1,5]]`, expected_output: `[1,4]`, is_hidden: true },
    { id: '2365', input: `edges=[[1,2]]`, expected_output: `[]`, is_hidden: true },
    { id: '2366', input: `s=dcab,pairs=[[0,3],[1,2]]`, expected_output: `bacd`, is_hidden: false },
    { id: '2366', input: `s=cba,pairs=[[0,1],[1,2]]`, expected_output: `abc`, is_hidden: true },
    { id: '2366', input: `s=abc,pairs=[]`, expected_output: `abc`, is_hidden: true },
    { id: '2367', input: `vals=[1,3,2,1,3],edges=[[0,1],[0,2],[2,3],[2,4]]`, expected_output: `6`, is_hidden: false },
    { id: '2367', input: `vals=[1,1],edges=[[0,1]]`, expected_output: `3`, is_hidden: true },
    { id: '2367', input: `vals=[1,2,3],edges=[[0,1],[1,2]]`, expected_output: `3`, is_hidden: true },
    { id: '2368', input: `n=5,edges=[[0,1],[1,2],[3,4]]`, expected_output: `2`, is_hidden: false },
    { id: '2368', input: `n=3,edges=[]`, expected_output: `3`, is_hidden: true },
    { id: '2368', input: `n=1,edges=[]`, expected_output: `1`, is_hidden: true },
    { id: '2369', input: `nums=[100,4,200,1,3,2]`, expected_output: `4`, is_hidden: false },
    { id: '2369', input: `nums=[0,3,7,2,5,8,4,6,0,1]`, expected_output: `9`, is_hidden: true },
    { id: '2369', input: `nums=[0]`, expected_output: `1`, is_hidden: true },
    { id: '2370', input: `equations=[[a,b],[b,c]],values=[2,3],queries=[[a,c],[b,a]]`, expected_output: `[6.0,0.5]`, is_hidden: false },
    { id: '2370', input: `equations=[[a,b]],values=[2.0],queries=[[b,a]]`, expected_output: `[0.5]`, is_hidden: true },
    { id: '2370', input: `equations=[[a,b],[b,c]],values=[2,3],queries=[[a,a]]`, expected_output: `[1.0]`, is_hidden: true },
    { id: '2371', input: `edges=[[1,2],[1,3],[2,3]]`, expected_output: `[2,3]`, is_hidden: false },
    { id: '2371', input: `edges=[[1,2],[2,3],[3,4],[4,1],[1,5]]`, expected_output: `[4,1]`, is_hidden: true },
    { id: '2371', input: `edges=[[1,2],[2,1]]`, expected_output: `[2,1]`, is_hidden: true },
    { id: '2372', input: `m=3,n=3,positions=[[0,0],[0,1],[1,2],[2,1]]`, expected_output: `[1,1,2,3]`, is_hidden: false },
    { id: '2372', input: `m=1,n=1,positions=[[0,0]]`, expected_output: `[1]`, is_hidden: true },
    { id: '2372', input: `m=2,n=2,positions=[[0,0],[1,1]]`, expected_output: `[1,2]`, is_hidden: true },
    { id: '2373', input: `nums=[4,6,15,35]`, expected_output: `4`, is_hidden: false },
    { id: '2373', input: `nums=[20,50,9,63]`, expected_output: `2`, is_hidden: true },
    { id: '2373', input: `nums=[2,4,6]`, expected_output: `3`, is_hidden: true },
    { id: '2374', input: `strs=[tars,rats,arts,star]`, expected_output: `2`, is_hidden: false },
    { id: '2374', input: `strs=[omv,mov,vmo,tov]`, expected_output: `2`, is_hidden: true },
    { id: '2374', input: `strs=[abc]`, expected_output: `1`, is_hidden: true },
    { id: '2375', input: `graph=[[1,1,0],[1,1,1],[0,1,1]],initial=[0,1]`, expected_output: `1`, is_hidden: false },
    { id: '2375', input: `graph=[[1,0,0],[0,1,0],[0,0,1]],initial=[0,2]`, expected_output: `0`, is_hidden: true },
    { id: '2375', input: `graph=[[1,1],[1,1]],initial=[0,1]`, expected_output: `0`, is_hidden: true }
  ],
  'dp': [
    { id: '2376', input: `n = 2`, expected_output: `2`, is_hidden: false },
    { id: '2376b', input: `n = 3`, expected_output: `3`, is_hidden: true },
    { id: '2377', input: `cost = [10,15,20]`, expected_output: `15`, is_hidden: false },
    { id: '2378', input: `nums = [1,2,3,1]`, expected_output: `4`, is_hidden: false },
  ],
  'segment-tree': [
    { id: '2391', input: `nums=[-2,0,3,-5,2,-1],query=[0,2]`, expected_output: `1`, is_hidden: false },
    { id: '2391', input: `nums=[1,2,3],query=[0,2]`, expected_output: `6`, is_hidden: true },
    { id: '2391', input: `nums=[5],query=[0,0]`, expected_output: `5`, is_hidden: true },
    { id: '2392', input: `nums=[1,3,5,7,9,11],query=[1,3]`, expected_output: `3`, is_hidden: false },
    { id: '2392', input: `nums=[1,3,5,7,9,11],query=[0,5]`, expected_output: `1`, is_hidden: true },
    { id: '2392', input: `nums=[10],query=[0,0]`, expected_output: `10`, is_hidden: true },
    { id: '2393', input: `nums=[5,2,6,1]`, expected_output: `[2,1,1,0]`, is_hidden: false },
    { id: '2393', input: `nums=[-1]`, expected_output: `[0]`, is_hidden: true },
    { id: '2393', input: `nums=[1,1,1]`, expected_output: `[0,0,0]`, is_hidden: true },
    { id: '2394', input: `matrix=[[3,0,1,4,2],[5,6,3,2,1]],query=[0,0,1,1]`, expected_output: `14`, is_hidden: false },
    { id: '2394', input: `matrix=[[1]],query=[0,0,0,0]`, expected_output: `1`, is_hidden: true },
    { id: '2394', input: `matrix=[[1,2],[3,4]],query=[0,0,1,1]`, expected_output: `10`, is_hidden: true },
    { id: '2395', input: `nums=[1,1,1],k=2`, expected_output: `2`, is_hidden: false },
    { id: '2395', input: `nums=[1,2,3],k=3`, expected_output: `2`, is_hidden: true },
    { id: '2395', input: `nums=[1],k=1`, expected_output: `1`, is_hidden: true },
    { id: '2396', input: `nums=[1,3,5],update=[1,2,2],query=[0,2]`, expected_output: `13`, is_hidden: false },
    { id: '2396', input: `nums=[1,2,3],update=[0,1,1],query=[0,1]`, expected_output: `5`, is_hidden: true },
    { id: '2396', input: `nums=[10],update=[0,0,5],query=[0,0]`, expected_output: `15`, is_hidden: true },
    { id: '2397', input: `nums=[-2,5,-1],lower=-2,upper=2`, expected_output: `3`, is_hidden: false },
    { id: '2397', input: `nums=[0],lower=0,upper=0`, expected_output: `1`, is_hidden: true },
    { id: '2397', input: `nums=[0,0],lower=0,upper=0`, expected_output: `2`, is_hidden: true },
    { id: '2398', input: `nums=[1,2,3,4,5],query=[1,3]`, expected_output: `9`, is_hidden: false },
    { id: '2398', input: `nums=[1,2,3,4,5],query=[0,4]`, expected_output: `15`, is_hidden: true },
    { id: '2398', input: `nums=[5],query=[0,0]`, expected_output: `5`, is_hidden: true },
    { id: '2399', input: `ops=[book(10,20),book(15,25),book(20,30)]`, expected_output: `[true,true,false]`, is_hidden: false },
    { id: '2399', input: `ops=[book(1,5)]`, expected_output: `[true]`, is_hidden: true },
    { id: '2399', input: `ops=[book(1,10),book(2,5)]`, expected_output: `[true,false]`, is_hidden: true },
    { id: '2400', input: `ops=[book(10,20),book(15,25),book(20,30)]`, expected_output: `[true,true,true]`, is_hidden: false },
    { id: '2400', input: `ops=[book(1,5),book(2,6)]`, expected_output: `[true,true]`, is_hidden: true },
    { id: '2400', input: `ops=[book(1,10),book(1,5),book(5,10)]`, expected_output: `[true,true,true]`, is_hidden: true },
    { id: '2401', input: `intervals=[[2,3],[3,5],[7,7]]`, expected_output: `5`, is_hidden: false },
    { id: '2401', input: `intervals=[[1,3],[5,7]]`, expected_output: `6`, is_hidden: true },
    { id: '2401', input: `intervals=[[1,1]]`, expected_output: `1`, is_hidden: true },
    { id: '2402', input: `n=2,meetings=[[0,10],[1,5],[2,7],[3,4]]`, expected_output: `0`, is_hidden: false },
    { id: '2402', input: `n=3,meetings=[[1,20],[2,10],[3,5]]`, expected_output: `2`, is_hidden: true },
    { id: '2402', input: `n=1,meetings=[[0,10]]`, expected_output: `0`, is_hidden: true },
    { id: '2403', input: `arr=[1,1,1,2,2,3],query=[2,5,2]`, expected_output: `2`, is_hidden: false },
    { id: '2403', input: `arr=[1,1,1],query=[0,2,1]`, expected_output: `3`, is_hidden: true },
    { id: '2403', input: `arr=[5],query=[0,0,5]`, expected_output: `1`, is_hidden: true },
    { id: '2404', input: `nums=[5,2,6,1]`, expected_output: `[2,1,1,0]`, is_hidden: false },
    { id: '2404', input: `nums=[-1,-1]`, expected_output: `[0,0]`, is_hidden: true },
    { id: '2404', input: `nums=[1]`, expected_output: `[0]`, is_hidden: true },
    { id: '2405', input: `rectangles=[[0,0,2,2],[1,0,2,3],[1,0,3,1]]`, expected_output: `6`, is_hidden: false },
    { id: '2405', input: `rectangles=[[0,0,1,1]]`, expected_output: `1`, is_hidden: true },
    { id: '2405', input: `rectangles=[[0,0,3,3]]`, expected_output: `9`, is_hidden: true }
  ],
  'fenwick-tree': [
    { id: '2406', input: `nums=[1,3,5,7,9,11],query=[0,2]`, expected_output: `9`, is_hidden: false },
    { id: '2406', input: `nums=[1,2,3],query=[0,2]`, expected_output: `6`, is_hidden: true },
    { id: '2406', input: `nums=[10],query=[0,0]`, expected_output: `10`, is_hidden: true },
    { id: '2407', input: `nums=[-2,0,3,-5,2,-1],query=[0,2]`, expected_output: `1`, is_hidden: false },
    { id: '2407', input: `nums=[1,2,3],query=[1,2]`, expected_output: `5`, is_hidden: true },
    { id: '2407', input: `nums=[5],query=[0,0]`, expected_output: `5`, is_hidden: true },
    { id: '2408', input: `nums=[1,3,5],update=[1,2],query=[0,2]`, expected_output: `8`, is_hidden: false },
    { id: '2408', input: `nums=[1,2,3],update=[0,3],query=[0,0]`, expected_output: `3`, is_hidden: true },
    { id: '2408', input: `nums=[10],update=[0,5],query=[0,0]`, expected_output: `5`, is_hidden: true },
    { id: '2409', input: `nums=[2,4,3,5,1]`, expected_output: `5`, is_hidden: false },
    { id: '2409', input: `nums=[1]`, expected_output: `0`, is_hidden: true },
    { id: '2409', input: `nums=[1,2,3]`, expected_output: `0`, is_hidden: true },
    { id: '2410', input: `nums=[1,2,2,3,3,3],query=[1,2]`, expected_output: `3`, is_hidden: false },
    { id: '2410', input: `nums=[1,1,1],query=[1,1]`, expected_output: `3`, is_hidden: true },
    { id: '2410', input: `nums=[1],query=[1,1]`, expected_output: `1`, is_hidden: true },
    { id: '2411', input: `matrix=[[3,0,1,4,2],[5,6,3,2,1]],query=[0,0,1,1]`, expected_output: `14`, is_hidden: false },
    { id: '2411', input: `matrix=[[1]],query=[0,0,0,0]`, expected_output: `1`, is_hidden: true },
    { id: '2411', input: `matrix=[[1,2],[3,4]],query=[0,0,1,1]`, expected_output: `10`, is_hidden: true },
    { id: '2412', input: `nums=[1,2,3,4,5],update=[1,3,2],query=2`, expected_output: `5`, is_hidden: false },
    { id: '2412', input: `nums=[1,2,3],update=[0,2,1],query=1`, expected_output: `3`, is_hidden: true },
    { id: '2412', input: `nums=[10],update=[0,0,5],query=0`, expected_output: `15`, is_hidden: true },
    { id: '2413', input: `matrix=[[1,5,9],[10,11,13],[12,13,15]],k=8`, expected_output: `13`, is_hidden: false },
    { id: '2413', input: `matrix=[[1,2],[3,4]],k=2`, expected_output: `2`, is_hidden: true },
    { id: '2413', input: `matrix=[[1]],k=1`, expected_output: `1`, is_hidden: true },
    { id: '2414', input: `nums=[1,2,3,4]`, expected_output: `15`, is_hidden: false },
    { id: '2414', input: `nums=[3,2,1]`, expected_output: `3`, is_hidden: true },
    { id: '2414', input: `nums=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2415', input: `nums=[1,3,2,3,1]`, expected_output: `2`, is_hidden: false },
    { id: '2415', input: `nums=[2,4,3,5,1]`, expected_output: `3`, is_hidden: true },
    { id: '2415', input: `nums=[1]`, expected_output: `0`, is_hidden: true },
    { id: '2416', input: `n=6,edges=[[0,1],[0,2],[2,3],[2,4],[2,5]]`, expected_output: `[8,12,6,10,10,10]`, is_hidden: false },
    { id: '2416', input: `n=1,edges=[]`, expected_output: `[0]`, is_hidden: true },
    { id: '2416', input: `n=2,edges=[[0,1]]`, expected_output: `[1,1]`, is_hidden: true },
    { id: '2417', input: `nums=[1,3,5,4,7]`, expected_output: `2`, is_hidden: false },
    { id: '2417', input: `nums=[2,2,2,2,2]`, expected_output: `5`, is_hidden: true },
    { id: '2417', input: `nums=[1]`, expected_output: `1`, is_hidden: true },
    { id: '2418', input: `positions=[[1,2],[2,3],[6,1]]`, expected_output: `[2,5,5]`, is_hidden: false },
    { id: '2418', input: `positions=[[100,100]]`, expected_output: `[100]`, is_hidden: true },
    { id: '2418', input: `positions=[[1,1]]`, expected_output: `[1]`, is_hidden: true },
    { id: '2419', input: `nums=[4,5,2,1],queries=[3,10,21]`, expected_output: `[2,3,4]`, is_hidden: false },
    { id: '2419', input: `nums=[2,3,4,5],queries=[1]`, expected_output: `[0]`, is_hidden: true },
    { id: '2419', input: `nums=[1],queries=[1]`, expected_output: `[1]`, is_hidden: true },
    { id: '2420', input: `arr=[3,0,1,1,9,7],a=7,b=2,c=3`, expected_output: `4`, is_hidden: false },
    { id: '2420', input: `arr=[1,1,2,2,3],a=0,b=0,c=1`, expected_output: `0`, is_hidden: true },
    { id: '2420', input: `arr=[1],a=1,b=1,c=1`, expected_output: `0`, is_hidden: true }
  ],
  'range-minimum-query': [
    { id: '2421', input: `arr = [2,1,4,3,5,2], queries = [[1,3],[0,5],[2,4]]`, expected_output: `[1,1,4]`, is_hidden: false },
    { id: '2421', input: `arr = [5,3,1,4,2], queries = [[0,4],[1,2],[2,3]]`, expected_output: `[1,1,2]`, is_hidden: true },
    { id: '2421', input: `arr = [10], queries = [[0,0]]`, expected_output: `[10]`, is_hidden: true }
  ],
  'range-maximum-query': [
    { id: '2422', input: `arr = [1,5,3,2,8,4], queries = [[0,4],[2,5],[1,1]]`, expected_output: `[8,8,5]`, is_hidden: false },
    { id: '2422', input: `arr = [3,1,4,1,5,9], queries = [[0,5],[1,3]]`, expected_output: `[9,4]`, is_hidden: true },
    { id: '2422', input: `arr = [7], queries = [[0,0]]`, expected_output: `[7]`, is_hidden: true }
  ],
  'sparse-table-construction': [
    { id: '2423', input: `arr = [8,3,5,1,7], query = [1,3]`, expected_output: `1`, is_hidden: false },
    { id: '2423', input: `arr = [4,2,6,1,3], query = [0,2]`, expected_output: `2`, is_hidden: true },
    { id: '2423', input: `arr = [10], query = [0,0]`, expected_output: `10`, is_hidden: true }
  ],
  'range-gcd-query': [
    { id: '2741_1', input: `[4,6,8,12,16],[0,2]`, expected_output: `2`, is_hidden: false },
    { id: '2741_2', input: `[4,6,8,12,16],[1,4]`, expected_output: `2`, is_hidden: true },
    { id: '2741_3', input: `[3,6,9],[0,2]`, expected_output: `3`, is_hidden: true }
  ],
  '2d-range-minimum-query': [
    { id: '2425', input: `matrix = [[1,3,2],[4,0,5],[7,8,6]], query = (0,0) to (1,2)`, expected_output: `0`, is_hidden: false },
    { id: '2425', input: `matrix = [[5,1],[2,3]], query = (0,0) to (1,1)`, expected_output: `1`, is_hidden: true },
    { id: '2425', input: `matrix = [[9]], query = (0,0) to (0,0)`, expected_output: `9`, is_hidden: true }
  ],
  'range-bitwise-and-query': [
    { id: '2426', input: `arr = [7,5,3,6,4], queries = [[0,2],[1,4],[0,4]]`, expected_output: `[1,0,0]`, is_hidden: false },
    { id: '2426', input: `arr = [15,14,12], queries = [[0,1],[1,2]]`, expected_output: `[14,12]`, is_hidden: true },
    { id: '2426', input: `arr = [8], queries = [[0,0]]`, expected_output: `[8]`, is_hidden: true }
  ],
  'count-elements-in-range': [
    { id: '2427', input: `arr = [1,2,3,4,5,6,7,8,9,10], queries = [[3,7],[1,10],[6,6]]`, expected_output: `[5,10,1]`, is_hidden: false },
    { id: '2427', input: `arr = [2,4,6], queries = [[1,3],[5,7]]`, expected_output: `[1,1]`, is_hidden: true },
    { id: '2427', input: `arr = [1], queries = [[1,1]]`, expected_output: `[1]`, is_hidden: true }
  ],
  'range-and-query-updates': [
    { id: '2428', input: `arr = [7,7,7,7], update(1,3,3), query(0,3)`, expected_output: `3`, is_hidden: false },
    { id: '2428', input: `arr = [15], update(0,0,7), query(0,0)`, expected_output: `7`, is_hidden: true },
    { id: '2428', input: `arr = [3,3,3,3], update(0,3,3), query(0,3)`, expected_output: `3`, is_hidden: true }
  ],
  'offline-range-minimum-queries': [
    { id: '2429', input: `arr = [5,3,1,4,2,6], queries = [[0,2],[1,4],[3,5]]`, expected_output: `[1,1,2]`, is_hidden: false },
    { id: '2429', input: `arr = [10], queries = [[0,0]]`, expected_output: `[10]`, is_hidden: true },
    { id: '2429', input: `arr = [9,8,7,6,5], queries = [[0,4],[1,3]]`, expected_output: `[5,5]`, is_hidden: true }
  ],
  'kth-smallest-in-range': [
    { id: '2430', input: `arr = [3,1,4,1,5,9,2,6], queries = [[1,6,3],[0,7,5]]`, expected_output: `[3,4]`, is_hidden: false },
    { id: '2430', input: `arr = [1,2,3], queries = [[0,2,2]]`, expected_output: `[2]`, is_hidden: true },
    { id: '2430', input: `arr = [5,4,3,2,1], queries = [[0,4,1]]`, expected_output: `[1]`, is_hidden: true }
  ],
  'range-mode-query': [
    { id: '2747_1', input: `[1,2,2,3,2,1],[0,5]`, expected_output: `2`, is_hidden: false },
    { id: '2747_2', input: `[1,2,2,3,2,1],[2,4]`, expected_output: `2`, is_hidden: true },
    { id: '2747_3', input: `[1,2,3],[0,2]`, expected_output: `1`, is_hidden: true }
  ],
  'sparse-table-for-lca': [
    { id: '2432', input: `tree edges [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6]], queries = [[3,4],[3,6],[5,6]]`, expected_output: `[1,0,2]`, is_hidden: false },
    { id: '2432', input: `tree: 1->2->3, queries = [[1,3]]`, expected_output: `[1]`, is_hidden: true },
    { id: '2432', input: `tree: 0->1->2->3, queries = [[0,3]]`, expected_output: `[0]`, is_hidden: true }
  ],
  'disjoint-sparse-table': [
    { id: '2433', input: `arr = [3,1,4,1,5], operation = +, query = [1,3]`, expected_output: `6`, is_hidden: false },
    { id: '2433', input: `arr = [2,3], operation = *, query = [0,1]`, expected_output: `6`, is_hidden: true },
    { id: '2433', input: `arr = [10,20,30], operation = +, query = [0,2]`, expected_output: `60`, is_hidden: true }
  ],
  'merge-sort-tree': [
    { id: '2434', input: `arr = [4,2,5,1,3], queries = [[1,3,3],[0,4,2]]`, expected_output: `[2,2]`, is_hidden: false },
    { id: '2434', input: `arr = [1], queries = [[0,0,1]]`, expected_output: `[1]`, is_hidden: true },
    { id: '2434', input: `arr = [10,20,30], queries = [[0,2,25]]`, expected_output: `[2]`, is_hidden: true }
  ],
  'sparse-table-for-range-or': [
    { id: '2435', input: `arr = [1,0,1,1,0], queries = [[0,2],[1,4],[2,3]]`, expected_output: `[1,1,1]`, is_hidden: false },
    { id: '2435', input: `arr = [0,0,0], queries = [[0,2]]`, expected_output: `[0]`, is_hidden: true },
    { id: '2435', input: `arr = [1,1,1], queries = [[0,2]]`, expected_output: `[1]`, is_hidden: true }
  ],
  'next-greater-element': [
    { id: '2436', input: `arr = [2,1,2,4,3]`, expected_output: `[4,2,4,-1,-1]`, is_hidden: false },
    { id: '2436', input: `arr = [5,4,3,2,1]`, expected_output: `[-1,-1,-1,-1,-1]`, is_hidden: true },
    { id: '2436', input: `arr = [1,3,2,4]`, expected_output: `[3,4,4,-1]`, is_hidden: true }
  ],
  'previous-smaller-element': [
    { id: '2441', input: `arr = [4,5,2,10,8]`, expected_output: `[-1,4,-1,2,2]`, is_hidden: false },
    { id: '2441', input: `arr = [1,2,3,4]`, expected_output: `[-1,1,2,3]`, is_hidden: true },
    { id: '2441', input: `arr = [4,3,2,1]`, expected_output: `[-1,-1,-1,-1]`, is_hidden: true }
  ],
  'remove-k-digits': [
    { id: '2443', input: `num = "1432219", k = 3`, expected_output: `"1219"`, is_hidden: false },
    { id: '2443', input: `num = "10200", k = 1`, expected_output: `"200"`, is_hidden: true },
    { id: '2443', input: `num = "10", k = 2`, expected_output: `"0"`, is_hidden: true }
  ],
  'sum-of-subarray-minimums': [
    { id: '2444', input: `arr = [3,1,2,4]`, expected_output: `17`, is_hidden: false },
    { id: '2444', input: `arr = [11,81,94,43,48]`, expected_output: `444`, is_hidden: true },
    { id: '2444', input: `arr = [1]`, expected_output: `1`, is_hidden: true }
  ],
  '132-pattern': [
    { id: '2446', input: `nums = [3,1,4,2]`, expected_output: `true`, is_hidden: false },
    { id: '2446', input: `nums = [1,2,3,4]`, expected_output: `false`, is_hidden: true },
    { id: '2446', input: `nums = [-1,3,2,0]`, expected_output: `true`, is_hidden: true }
  ],
  'next-greater-node-in-linked-list': [
    { id: '2448', input: `head = [2,1,5]`, expected_output: `[5,5,0]`, is_hidden: false },
    { id: '2448', input: `head = [2,7,4,3,5]`, expected_output: `[7,0,5,5,0]`, is_hidden: true },
    { id: '2448', input: `head = [1]`, expected_output: `[0]`, is_hidden: true }
  ],
  'sliding-window-minimum': [
    { id: '2451', input: `nums = [1,3,-1,-3,5,3,6,7], k = 3`, expected_output: `[-1,-3,-3,-3,3,3]`, is_hidden: false },
    { id: '2451', input: `nums = [1], k = 1`, expected_output: `[1]`, is_hidden: true },
    { id: '2451', input: `nums = [4,2,1,3], k = 2`, expected_output: `[2,1,1]`, is_hidden: true }
  ],
  'jump-game-vi': [
    { id: '2452', input: `nums = [1,-1,-2,4,-7,3], k = 2`, expected_output: `7`, is_hidden: false },
    { id: '2452', input: `nums = [10,-5,-2,4,3], k = 3`, expected_output: `17`, is_hidden: true },
    { id: '2452', input: `nums = [5], k = 1`, expected_output: `5`, is_hidden: true }
  ],
  'longest-continuous-subarray-absolute-diff': [
    { id: '2453', input: `nums = [8,2,4,7], limit = 4`, expected_output: `2`, is_hidden: false },
    { id: '2453', input: `nums = [10,1,2,4,7,2], limit = 5`, expected_output: `4`, is_hidden: true },
    { id: '2453', input: `nums = [1,5], limit = 3`, expected_output: `1`, is_hidden: true }
  ],
  'max-value-of-equation': [
    { id: '2454', input: `points = [[1,3],[2,0],[5,-2],[6,-4]], k = 3`, expected_output: `5`, is_hidden: false },
    { id: '2454', input: `points = [[0,0],[3,1],[5,2]], k = 2`, expected_output: `3`, is_hidden: true },
    { id: '2454', input: `points = [[1,1],[2,2]], k = 1`, expected_output: `1`, is_hidden: true }
  ],
  'shortest-subarray-to-be-removed': [
    { id: '2455', input: `arr = [1,2,3,10,4,2,3,5]`, expected_output: `3`, is_hidden: false },
    { id: '2455', input: `arr = [5,4,3,2,1]`, expected_output: `4`, is_hidden: true },
    { id: '2455', input: `arr = [1,2,3]`, expected_output: `0`, is_hidden: true }
  ],
  'maximize-sum-after-k-negations': [
    { id: '2456', input: `nums = [4,2,3], k = 1`, expected_output: `5`, is_hidden: false },
    { id: '2456', input: `nums = [3,-1,0,2], k = 3`, expected_output: `6`, is_hidden: true },
    { id: '2456', input: `nums = [2,-3,-1,5,-4], k = 2`, expected_output: `12`, is_hidden: true }
  ],
  'longest-subarray-with-limit': [
    { id: '2457', input: `nums = [1,5,6,7,8], limit = 3`, expected_output: `3`, is_hidden: false },
    { id: '2457', input: `nums = [1,2,3], limit = 1`, expected_output: `2`, is_hidden: true },
    { id: '2457', input: `nums = [4,2,2,2,4], limit = 0`, expected_output: `3`, is_hidden: true }
  ],
  'maximum-performance-of-a-team': [
    { id: '2458', input: `n=6, speed=[2,10,3,1,5,8], eff=[5,4,3,9,7,2], k=2`, expected_output: `60`, is_hidden: false },
    { id: '2458', input: `n=3, speed=[10,5,1], eff=[7,7,7], k=2`, expected_output: `105`, is_hidden: true },
    { id: '2458', input: `n=1, speed=[5], eff=[10], k=1`, expected_output: `50`, is_hidden: true }
  ],
  'minimize-max-distance-to-gas-station': [
    { id: '2459', input: `stations = [1,2,3,4,5,6,7,8,9,10], k = 9`, expected_output: `0.5`, is_hidden: false },
    { id: '2459', input: `stations = [1,10], k = 1`, expected_output: `4.5`, is_hidden: true },
    { id: '2459', input: `stations = [1,5], k = 2`, expected_output: `1.0`, is_hidden: true }
  ],
  'find-max-value-in-sliding-window': [
    { id: '2460', input: `nums = [4,3,1,2,7,6], k = 3`, expected_output: `[4,3,7,7]`, is_hidden: false },
    { id: '2460', input: `nums = [1], k = 1`, expected_output: `[1]`, is_hidden: true },
    { id: '2460', input: `nums = [9,8,7,6,5], k = 2`, expected_output: `[9,8,7,6]`, is_hidden: true }
  ],
  'longest-subarray-with-majority-greater-than-k': [
    { id: '2461', input: `nums = [3,2,5,4,7,1,8], k = 4`, expected_output: `3`, is_hidden: false },
    { id: '2461', input: `nums = [1,2,3], k = 0`, expected_output: `3`, is_hidden: true },
    { id: '2461', input: `nums = [1,1,1], k = 5`, expected_output: `0`, is_hidden: true }
  ],
  'sliding-subarray-beauty': [
    { id: '2462', input: `nums = [-1,2,-3,4,-5], k = 3`, expected_output: `[-3,-3,-3]`, is_hidden: false },
    { id: '2462', input: `nums = [1,1,1], k = 3`, expected_output: `[1]`, is_hidden: true },
    { id: '2462', input: `nums = [-5,-3,-1], k = 2`, expected_output: `[-3,-3]`, is_hidden: true }
  ],
  'sum-of-k-subarray-maximums': [
    { id: '2463', input: `nums = [1,3,2,6,5], k = 3`, expected_output: `15`, is_hidden: false },
    { id: '2463', input: `nums = [5], k = 1`, expected_output: `5`, is_hidden: true },
    { id: '2463', input: `nums = [1,2,3,4,5], k = 2`, expected_output: `24`, is_hidden: true }
  ],
  'queue-reconstruction-by-height': [
    { id: '2464', input: `people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]`, expected_output: `[[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]`, is_hidden: false },
    { id: '2464', input: `people = [[6,0],[5,0],[4,0],[3,2],[2,2],[1,4]]`, expected_output: `[[4,0],[5,0],[2,2],[3,2],[1,4],[6,0]]`, is_hidden: true },
    { id: '2464', input: `people = [[2,0],[1,0]]`, expected_output: `[[2,0],[1,0]]`, is_hidden: true }
  ],
  'min-cost-to-hire-k-workers': [
    { id: '2465', input: `quality = [10,20,5], wage = [70,50,30], k = 2`, expected_output: `105.0`, is_hidden: false },
    { id: '2465', input: `quality = [3,1,10,10,1], wage = [4,8,2,2,7], k = 3`, expected_output: `30.66667`, is_hidden: true },
    { id: '2465', input: `quality = [1,1], wage = [1,2], k = 2`, expected_output: `4.0`, is_hidden: true }
  ],
  'course-schedule-ii': [
    { id: '2467', input: `numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]`, expected_output: `[0,1,2,3]`, is_hidden: false },
    { id: '2467', input: `numCourses = 1, prerequisites = []`, expected_output: `[0]`, is_hidden: true },
    { id: '2467', input: `numCourses = 2, prerequisites = [[1,0],[0,1]]`, expected_output: `[]`, is_hidden: true }
  ],
  'parallel-courses': [
    { id: '2469', input: `n = 3, prerequisites = [[1,2],[2,3]]`, expected_output: `3`, is_hidden: false },
    { id: '2469', input: `n = 3, prerequisites = [[1,2],[2,3],[3,1]]`, expected_output: `-1`, is_hidden: true },
    { id: '2469', input: `n = 1, prerequisites = []`, expected_output: `1`, is_hidden: true }
  ],
  'find-all-possible-recipes': [
    { id: '2470', input: `recipes = ["bread","sandwich"], ingredients = [["yeast","flour"],["bread","meat"]], supplies = ["yeast","flour","meat"]`, expected_output: `["bread","sandwich"]`, is_hidden: false },
    { id: '2470', input: `recipes = ["bread"], ingredients = [["yeast"]], supplies = ["flour"]`, expected_output: `[]`, is_hidden: true },
    { id: '2470', input: `recipes = ["a"], ingredients = [["b"]], supplies = ["b"]`, expected_output: `["a"]`, is_hidden: true }
  ],
  'longest-path-in-dag': [
    { id: '2471', input: `n = 5, edges = [[0,1,3],[1,2,4],[0,3,2],[3,4,1],[1,4,5]]`, expected_output: `7`, is_hidden: false },
    { id: '2471', input: `n = 1, edges = []`, expected_output: `0`, is_hidden: true },
    { id: '2471', input: `n = 3, edges = [[0,1,1],[1,2,1]]`, expected_output: `2`, is_hidden: true }
  ],
  'all-ancestors-of-node-in-dag': [
    { id: '2474', input: `n = 8, edges = [[0,3],[0,4],[1,3],[2,4],[2,7],[3,5],[3,6],[4,5],[4,6]]`, expected_output: `[[],[],[],[0,1],[0,2],[0,1,2,3,4],[0,1,2,3,4],[2]]`, is_hidden: false },
    { id: '2474', input: `n = 1, edges = []`, expected_output: `[[]]`, is_hidden: true },
    { id: '2474', input: `n = 3, edges = [[0,1],[0,2]]`, expected_output: `[[],[0],[0]]`, is_hidden: true }
  ],
  'longest-cycle-in-graph': [
    { id: '2475', input: `edges = [3,3,4,2,3]`, expected_output: `3`, is_hidden: false },
    { id: '2475', input: `edges = [2,-1,3,1]`, expected_output: `-1`, is_hidden: true },
    { id: '2475', input: `edges = [1,2,0]`, expected_output: `3`, is_hidden: true }
  ],
  'sort-items-by-groups-respecting-dependencies': [
    { id: '2476', input: `n=8, m=2, group=[-1,-1,1,0,0,1,0,-1], beforeItems=[[],[6],[5],[6],[3,6],[],[],[]]`, expected_output: `[6,3,4,1,2,5,0,7]`, is_hidden: false },
    { id: '2476', input: `n=2, m=1, group=[0,0], beforeItems=[[],[]]`, expected_output: `[0,1]`, is_hidden: true },
    { id: '2476', input: `n=3, m=1, group=[-1,-1,-1], beforeItems=[[],[],[]]`, expected_output: `[0,1,2]`, is_hidden: true }
  ],
  'check-if-prerequisite': [
    { id: '2477', input: `numCourses=2, prereqs=[[1,0]], queries=[[0,1],[1,0]]`, expected_output: `[false,true]`, is_hidden: false },
    { id: '2477', input: `numCourses=3, prereqs=[[1,2],[1,0],[2,0]], queries=[[1,2]]`, expected_output: `[true]`, is_hidden: true },
    { id: '2477', input: `numCourses=1, prereqs=[], queries=[[0,0]]`, expected_output: `[true]`, is_hidden: true }
  ],
  'find-eventual-safe-states': [
    { id: '2478', input: `graph = [[1,2],[2,3],[5],[0],[5],[],[]]`, expected_output: `[2,4,5,6]`, is_hidden: false },
    { id: '2478', input: `graph = [[1,2],[2,3],[3,0]]`, expected_output: `[]`, is_hidden: true },
    { id: '2478', input: `graph = [[],[]]`, expected_output: `[0,1]`, is_hidden: true }
  ],
  'alien-dictionary-ii': [
    { id: '2479', input: `words = ["ba","bc","ac","cab"]`, expected_output: `[["b","a","c"],["b","c","a"]]`, is_hidden: false },
    { id: '2479', input: `words = ["a","ab"]`, expected_output: `[["a","b"]]`, is_hidden: true },
    { id: '2479', input: `words = ["ab","bc","cd"]`, expected_output: `[["a","b","c","d"]]`, is_hidden: true }
  ],
  'reconstruct-itinerary': [
    { id: '2480', input: `tickets = [["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]]`, expected_output: `["JFK","MUC","LHR","SFO","SJC"]`, is_hidden: false },
    { id: '2480', input: `tickets = [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]`, expected_output: `["JFK","ATL","JFK","SFO","ATL","SFO"]`, is_hidden: true },
    { id: '2480', input: `tickets = [["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]`, expected_output: `["JFK","NRT","JFK","KUL"]`, is_hidden: true }
  ],
  'dijkstra-shortest-path': [
    { id: '2481', input: `n=5, edges=[[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]], source=0`, expected_output: `[0,3,1,4,Infinity]`, is_hidden: false },
    { id: '2481', input: `n=1, edges=[], source=0`, expected_output: `[0]`, is_hidden: true },
    { id: '2481', input: `n=3, edges=[[0,1,1],[1,2,1]], source=0`, expected_output: `[0,1,2]`, is_hidden: true }
  ],
  'network-delay-time': [
    { id: '2482', input: `times=[[2,1,1],[2,3,1],[3,4,1]], n=4, k=2`, expected_output: `2`, is_hidden: false },
    { id: '2482', input: `times=[[1,2,1]], n=2, k=1`, expected_output: `1`, is_hidden: true },
    { id: '2482', input: `times=[[1,2,1],[1,3,2]], n=3, k=1`, expected_output: `2`, is_hidden: true }
  ],
  'cheapest-flights-within-k-stops': [
    { id: '2483', input: `n=3, flights=[[0,1,100],[1,2,100],[0,2,500]], src=0, dst=2, k=1`, expected_output: `200`, is_hidden: false },
    { id: '2483', input: `n=3, flights=[[0,1,100],[1,2,100]], src=0, dst=2, k=0`, expected_output: `-1`, is_hidden: true },
    { id: '2483', input: `n=2, flights=[[0,1,100]], src=0, dst=1, k=0`, expected_output: `100`, is_hidden: true }
  ],
  'bellman-ford-algorithm': [
    { id: '2484', input: `n=5, edges=[[0,1,-1],[0,2,4],[1,2,3],[1,3,2],[3,4,1]], source=0`, expected_output: `[0,-1,2,-1,0]`, is_hidden: false },
    { id: '2484', input: `n=2, edges=[[0,1,5],[1,0,-10]], source=0`, expected_output: `Negative cycle`, is_hidden: true },
    { id: '2484', input: `n=3, edges=[[0,1,1],[1,2,1]], source=0`, expected_output: `[0,1,2]`, is_hidden: true }
  ],
  'floyd-warshall-all-pairs': [
    { id: '2485', input: `n=4, edges=[[0,1,3],[1,2,1],[2,3,1],[0,3,10]]`, expected_output: `Distance matrix`, is_hidden: false },
    { id: '2485', input: `n=1, edges=[]`, expected_output: `[[0]]`, is_hidden: true },
    { id: '2485', input: `n=3, edges=[[0,1,1],[1,2,1]]`, expected_output: `[[0,1,2],[Infinity,0,1],[Infinity,Infinity,0]]`, is_hidden: true }
  ],
  'shortest-path-in-binary-matrix': [
    { id: '2486', input: `grid = [[0,1],[1,0]]`, expected_output: `2`, is_hidden: false },
    { id: '2486', input: `grid = [[0,0,0],[1,1,0],[1,1,0]]`, expected_output: `4`, is_hidden: true },
    { id: '2486', input: `grid = [[0,1],[1,1]]`, expected_output: `-1`, is_hidden: true }
  ],
  'path-with-minimum-effort': [
    { id: '2487', input: `grid = [[1,2,2],[3,8,2],[5,3,5]]`, expected_output: `2`, is_hidden: false },
    { id: '2487', input: `grid = [[1,2,3],[3,8,4],[5,3,5]]`, expected_output: `1`, is_hidden: true },
    { id: '2487', input: `grid = [[1,2],[2,1]]`, expected_output: `1`, is_hidden: true }
  ],
  'swim-in-rising-water': [
    { id: '2488', input: `grid = [[0,2],[1,3]]`, expected_output: `2`, is_hidden: false },
    { id: '2488', input: `grid = [[0,1,2,3,4],[24,23,22,21,5],[12,13,14,15,16],[11,17,18,19,20],[10,9,8,7,6]]`, expected_output: `16`, is_hidden: true },
    { id: '2488', input: `grid = [[0]]`, expected_output: `0`, is_hidden: true }
  ],
  'shortest-path-visiting-all-nodes': [
    { id: '2489', input: `graph = [[1,2,3],[0],[0],[0]]`, expected_output: `4`, is_hidden: false },
    { id: '2489', input: `graph = [[1],[0]]`, expected_output: `1`, is_hidden: true },
    { id: '2489', input: `graph = [[1,2],[0,2],[0,1]]`, expected_output: `2`, is_hidden: true }
  ],
  'path-with-maximum-probability': [
    { id: '2490', input: `n=3, edges=[[0,1,0.5],[1,2,0.5],[0,2,0.2]], start=0, end=2`, expected_output: `0.25`, is_hidden: false },
    { id: '2490', input: `n=2, edges=[[0,1,1]], start=0, end=1`, expected_output: `1.0`, is_hidden: true },
    { id: '2490', input: `n=3, edges=[[0,1,0.9],[1,2,0.9]], start=0, end=2`, expected_output: `0.81`, is_hidden: true }
  ],
  'minimum-cost-to-make-array-equal': [
    { id: '2491', input: `arr = [1,3,5,2], weight = [2,3,1,5]`, expected_output: `8`, is_hidden: false },
    { id: '2491', input: `arr = [1,2], weight = [1,1]`, expected_output: `1`, is_hidden: true },
    { id: '2491', input: `arr = [10,10,10], weight = [1,1,1]`, expected_output: `0`, is_hidden: true }
  ],
  'find-city-with-smallest-number-of-neighbors': [
    { id: '2492', input: `n=4, edges=[[0,1,3],[1,2,1],[2,3,1],[0,3,5]], threshold=2`, expected_output: `3`, is_hidden: false },
    { id: '2492', input: `n=5, edges=[[0,1,2],[0,4,8],[1,2,3],[1,4,2],[2,3,1],[3,4,1]], threshold=2`, expected_output: `0`, is_hidden: true },
    { id: '2492', input: `n=2, edges=[[0,1,1]], threshold=1`, expected_output: `1`, is_hidden: true }
  ],
  'second-minimum-time-to-reach-destination': [
    { id: '2493', input: `n=5, edges=[[1,2,1],[1,3,1],[3,4,1],[4,5,1]], change=[1,2,1,1,1]`, expected_output: `6`, is_hidden: false },
    { id: '2493', input: `n=2, edges=[[1,2,1]], change=[1,1]`, expected_output: `3`, is_hidden: true },
    { id: '2493', input: `n=3, edges=[[1,2,1],[2,3,1]], change=[1,1,1]`, expected_output: `4`, is_hidden: true }
  ],
  'dijkstra-for-sparse-graph': [
    { id: '2494', input: `n=4, edges=[[0,1,1],[1,2,2],[0,2,5]], source=0`, expected_output: `[0,1,3,Infinity]`, is_hidden: false },
    { id: '2494', input: `n=1, edges=[], source=0`, expected_output: `[0]`, is_hidden: true },
    { id: '2494', input: `n=3, edges=[[0,1,5],[0,2,2]], source=0`, expected_output: `[0,5,2]`, is_hidden: true }
  ],
  'mst-verification': [
    { id: '2495', input: `n=4, edges=[[0,1,1],[1,2,2],[0,2,5],[2,3,3]], mst=[[0,1,1],[1,2,2],[2,3,3]]`, expected_output: `true`, is_hidden: false },
    { id: '2495', input: `n=4, edges=[[0,1,1],[1,2,2],[0,2,3],[2,3,1]], mst=[[0,1,1],[0,2,3],[2,3,1]]`, expected_output: `false`, is_hidden: true },
    { id: '2495', input: `n=2, edges=[[0,1,5]], mst=[[0,1,5]]`, expected_output: `true`, is_hidden: true }
  ],
  'kruskals-mst': [
    { id: '2496', input: `n=5, edges=[[0,1,4],[0,2,1],[2,1,2],[1,3,1],[2,3,5]]`, expected_output: `5`, is_hidden: false },
    { id: '2496', input: `n=1, edges=[]`, expected_output: `0`, is_hidden: true },
    { id: '2496', input: `n=3, edges=[[0,1,1],[1,2,2],[0,2,3]]`, expected_output: `3`, is_hidden: true }
  ],
  'prims-mst': [
    { id: '2497', input: `n=5, edges=[[0,1,2],[0,3,6],[1,2,3],[1,3,8],[2,4,7],[3,4,9]]`, expected_output: `18`, is_hidden: false },
    { id: '2497', input: `n=3, edges=[[0,1,1],[1,2,2],[0,2,3]]`, expected_output: `3`, is_hidden: true },
    { id: '2497', input: `n=2, edges=[[0,1,5]]`, expected_output: `5`, is_hidden: true }
  ],
  'min-cost-to-connect-all-points': [
    { id: '2498', input: `points = [[0,0],[2,2],[3,10],[5,2],[7,0]]`, expected_output: `20`, is_hidden: false },
    { id: '2498', input: `points = [[3,12],[-2,5],[-4,1]]`, expected_output: `18`, is_hidden: true },
    { id: '2498', input: `points = [[0,0],[1,1]]`, expected_output: `2`, is_hidden: true }
  ],
  'accounts-merge': [
    { id: '2499', input: `accounts = [["John","john@a.com","john2@a.com"],["John","john@b.com","john2@a.com"],["Bob","bob@c.com"]]`, expected_output: `[["John","john2@a.com","john@a.com","john@b.com"],["Bob","bob@c.com"]]`, is_hidden: false },
    { id: '2499', input: `accounts = [["John","a@a.com","b@b.com"],["John","c@c.com"]]`, expected_output: `No merge`, is_hidden: true },
    { id: '2499', input: `accounts = [["Alex","alex@m.com"],["Alex","alex@m.com"]]`, expected_output: `[["Alex","alex@m.com"]]`, is_hidden: true }
  ],
  'number-of-islands-ii': [
    { id: '2501', input: `m=3, n=3, positions=[[0,0],[0,1],[1,2],[2,1]]`, expected_output: `[1,1,2,3]`, is_hidden: false },
    { id: '2501', input: `m=1, n=1, positions=[[0,0]]`, expected_output: `[1]`, is_hidden: true },
    { id: '2501', input: `m=2, n=2, positions=[[0,0],[1,1],[0,1]]`, expected_output: `[1,2,1]`, is_hidden: true }
  ],
  'most-stones-removed-with-same-row-or-column': [
    { id: '2502', input: `stones = [[0,0],[0,1],[1,0],[2,2]]`, expected_output: `3`, is_hidden: false },
    { id: '2502', input: `stones = [[0,0],[1,1],[2,2],[3,3]]`, expected_output: `3`, is_hidden: true },
    { id: '2502', input: `stones = [[0,0]]`, expected_output: `0`, is_hidden: true }
  ],
  'surrounded-regions': [
    { id: '2503', input: `[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]`, expected_output: `[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]`, is_hidden: false },
    { id: '2503', input: `[["X"]]`, expected_output: `[["X"]]`, is_hidden: true },
    { id: '2503', input: `[["O","O"],["O","O"]]`, expected_output: `[["O","O"],["O","O"]]`, is_hidden: true }
  ],
  'satisfiability-of-equality-equations': [
    { id: '2504', input: `equations = ["a==b","b!=a"]`, expected_output: `false`, is_hidden: false },
    { id: '2504', input: `equations = ["b==a","a==b"]`, expected_output: `true`, is_hidden: true },
    { id: '2504', input: `equations = ["a==b","b==c","a==c"]`, expected_output: `true`, is_hidden: true }
  ],
  'smallest-string-with-swaps': [
    { id: '2505', input: `s = "dcab", pairs = [[0,3],[1,2]]`, expected_output: `"abdc"`, is_hidden: false },
    { id: '2505', input: `s = "dcab", pairs = [[0,3],[1,2],[0,2]]`, expected_output: `"abcd"`, is_hidden: true },
    { id: '2505', input: `s = "abcd", pairs = []`, expected_output: `"abcd"`, is_hidden: true }
  ],
  'union-find-with-path-compression': [
    { id: '2506', input: `n=5, operations=[[0,1],[2,3],[0,4]]`, expected_output: `2`, is_hidden: false },
    { id: '2506', input: `n=1, operations=[]`, expected_output: `1`, is_hidden: true },
    { id: '2506', input: `n=4, operations=[[0,1],[2,3]]`, expected_output: `2`, is_hidden: true }
  ],
  'kruskal-with-edge-weights': [
    { id: '2507', input: `n=4, edges=[[0,1,5],[1,2,3],[2,3,6],[0,3,2]]`, expected_output: `10`, is_hidden: false },
    { id: '2507', input: `n=2, edges=[[0,1,1]]`, expected_output: `1`, is_hidden: true },
    { id: '2507', input: `n=3, edges=[[0,1,1],[1,2,1],[0,2,1]]`, expected_output: `2`, is_hidden: true }
  ],
  'budget-allocation-with-mst': [
    { id: '2508', input: `n=4, budget=10, edges=[[0,1,3],[1,2,4],[2,3,5],[0,3,8]]`, expected_output: `12`, is_hidden: false },
    { id: '2508', input: `n=4, budget=5, edges=[[0,1,3],[1,2,4],[2,3,5],[0,3,8]]`, expected_output: `-1`, is_hidden: true },
    { id: '2508', input: `n=2, budget=5, edges=[[0,1,3]]`, expected_output: `3`, is_hidden: true }
  ],
  'connect-cities-with-minimum-cost': [
    { id: '2509', input: `n=3, connections=[[1,2,5],[1,3,6],[2,3,1]]`, expected_output: `6`, is_hidden: false },
    { id: '2509', input: `n=4, connections=[[1,2,3],[3,4,4]]`, expected_output: `-1`, is_hidden: true },
    { id: '2509', input: `n=2, connections=[[1,2,1]]`, expected_output: `1`, is_hidden: true }
  ],
  'optimize-water-distribution': [
    { id: '2510', input: `n=3, wells=[1,2,2], pipes=[[1,2,1],[2,3,1]]`, expected_output: `3`, is_hidden: false },
    { id: '2510', input: `n=2, wells=[1,1], pipes=[[1,2,10]]`, expected_output: `2`, is_hidden: true },
    { id: '2510', input: `n=1, wells=[5], pipes=[]`, expected_output: `5`, is_hidden: true }
  ],
  'number-of-strongly-connected-components': [
    { id: '2511', input: `n=5, edges=[[1,0],[2,1],[0,2],[0,3],[3,4]]`, expected_output: `3`, is_hidden: false },
    { id: '2511', input: `n=1, edges=[]`, expected_output: `1`, is_hidden: true },
    { id: '2511', input: `n=3, edges=[[0,1],[1,2]]`, expected_output: `3`, is_hidden: true }
  ],
  'tarjans-scc-algorithm': [
    { id: '2512', input: `n=8, edges=[[0,1],[1,2],[2,0],[2,3],[3,4],[4,5],[5,3],[5,6],[6,7],[7,6]]`, expected_output: `[[0,1,2],[3,4,5],[6,7]]`, is_hidden: false },
    { id: '2512', input: `n=3, edges=[[0,1],[1,2],[2,0]]`, expected_output: `[[0,1,2]]`, is_hidden: true },
    { id: '2512', input: `n=4, edges=[[0,1],[1,2],[2,3]]`, expected_output: `[[0],[1],[2],[3]]`, is_hidden: true }
  ],
  'kosarajus-algorithm': [
    { id: '2513', input: `n=4, edges=[[1,0],[2,1],[0,2],[3,2]]`, expected_output: `[[0,1,2],[3]]`, is_hidden: false },
    { id: '2513', input: `n=2, edges=[[0,1],[1,0]]`, expected_output: `[[0,1]]`, is_hidden: true },
    { id: '2513', input: `n=3, edges=[[0,1],[1,2]]`, expected_output: `[[0],[1],[2]]`, is_hidden: true }
  ],
  'course-schedule-iii': [
    { id: '2514', input: `courses = [[100,200],[200,1300],[1000,1250],[2000,3200]]`, expected_output: `3`, is_hidden: false },
    { id: '2514', input: `courses = [[1,2]]`, expected_output: `1`, is_hidden: true },
    { id: '2514', input: `courses = [[3,2],[4,3]]`, expected_output: `2`, is_hidden: true }
  ],
  'articulation-points': [
    { id: '2813_1', input: `1 AP`, expected_output: `1`, is_hidden: false },
    { id: '2813_2', input: `complete`, expected_output: `0`, is_hidden: true },
    { id: '2813_3', input: `chain`, expected_output: `2`, is_hidden: true }
  ],
  'scc-condensation-graph': [
    { id: '2517', input: `n=6, edges=[[0,1],[1,2],[2,0],[2,3],[3,4],[4,5],[5,3]]`, expected_output: `2`, is_hidden: false },
    { id: '2517', input: `n=3, edges=[[0,1],[1,2]]`, expected_output: `3`, is_hidden: true },
    { id: '2517', input: `n=2, edges=[[0,1],[1,0]]`, expected_output: `1`, is_hidden: true }
  ],
  'is-graph-bipartite': [
    { id: '2518', input: `graph = [[1,3],[0,2],[1,3],[0,2]]`, expected_output: `true`, is_hidden: false },
    { id: '2518', input: `graph = [[1,2,3],[0,2],[0,1,3],[0,2]]`, expected_output: `false`, is_hidden: true },
    { id: '2518', input: `graph = [[1],[0]]`, expected_output: `true`, is_hidden: true }
  ],
  'longest-cycle-in-directed-graph': [
    { id: '2519', input: `n=4, edges=[[1,2],[2,3],[3,1],[0,1]]`, expected_output: `3`, is_hidden: false },
    { id: '2519', input: `n=3, edges=[[0,1],[1,2]]`, expected_output: `-1`, is_hidden: true },
    { id: '2519', input: `n=2, edges=[[0,1],[1,0]]`, expected_output: `2`, is_hidden: true }
  ],
  'evaluate-division': [
    { id: '2523', input: `equations=[["a","b"],["b","c"]], values=[2.0,3.0], queries=[["a","c"],["b","a"],["a","e"],["a","a"]]`, expected_output: `[6.0,0.5,-1.0,1.0]`, is_hidden: false },
    { id: '2523', input: `equations=[["x","y"]], values=[2.0], queries=[["x","y"],["y","x"]]`, expected_output: `[2.0,0.5]`, is_hidden: true },
    { id: '2523', input: `equations=[["a","b"]], values=[0.5], queries=[["b","a"]]`, expected_output: `[2.0]`, is_hidden: true }
  ],
  'valid-sudoku': [
    { id: '2524', input: `Valid sudoku board`, expected_output: `true`, is_hidden: false },
    { id: '2524', input: `Board with duplicate in row`, expected_output: `false`, is_hidden: true },
    { id: '2524', input: `Board with duplicate in box`, expected_output: `false`, is_hidden: true }
  ],
  'valid-parentheses-scc': [
    { id: '2525', input: `s = "([])"`, expected_output: `true`, is_hidden: false },
    { id: '2525', input: `s = "(]"`, expected_output: `false`, is_hidden: true },
    { id: '2525', input: `s = "()[]{}"`, expected_output: `true`, is_hidden: true }
  ],
  'max-flow-ford-fulkerson': [
    { id: '2526', input: `n = 4, edges = [[0,1,1000000],[1,2,1000000],[2,3,1000000]], source = 0, sink = 3`, expected_output: `1000000`, is_hidden: false },
  ],
  'edmonds-karp-algorithm': [
    { id: '2527', input: `n=4, edges=[[0,1,10],[0,2,10],[1,2,2],[1,3,8],[2,3,10]], source=0, sink=3`, expected_output: `18`, is_hidden: false },
    { id: '2527', input: `n=2, edges=[[0,1,5]], source=0, sink=1`, expected_output: `5`, is_hidden: true },
    { id: '2527', input: `n=3, edges=[[0,1,3],[0,2,2],[1,2,5]], source=0, sink=2`, expected_output: `5`, is_hidden: true }
  ],
  'dinic-algorithm': [
    { id: '2528', input: `n = 4, edges = [[0,1,3],[0,2,2],[1,2,1],[1,3,3],[2,3,2]], source = 0, sink = 3`, expected_output: `5`, is_hidden: false },
  ],
  'min-cut': [
    { id: '2529', input: `n=5, edges=[[0,1,3],[0,2,2],[1,2,1],[1,3,3],[2,3,4],[3,4,2],[2,4,3]], source=0, sink=4`, expected_output: `5`, is_hidden: false },
    { id: '2529', input: `n=2, edges=[[0,1,10]], source=0, sink=1`, expected_output: `10`, is_hidden: true },
    { id: '2529', input: `n=3, edges=[[0,1,5],[1,2,5]], source=0, sink=2`, expected_output: `5`, is_hidden: true }
  ],
  'maximum-bipartite-matching': [
    { id: '2530', input: `edges = [[1,2],[1,3],[2,1],[3,2]]`, expected_output: `2`, is_hidden: false },
    { id: '2530', input: `edges = [[1,1]]`, expected_output: `1`, is_hidden: true },
    { id: '2530', input: `edges = [[1,2],[1,3],[1,4]]`, expected_output: `1`, is_hidden: true }
  ],
  'cable-management': [
    { id: '2531', input: `n=5, cables=[[0,1],[1,2],[2,3],[3,4],[0,4]]`, expected_output: `4`, is_hidden: false },
    { id: '2531', input: `n=3, cables=[[0,1],[1,2],[0,2]]`, expected_output: `2`, is_hidden: true },
    { id: '2531', input: `n=2, cables=[[0,1]]`, expected_output: `1`, is_hidden: true }
  ],
  'project-selection': [
    { id: '2532', input: `projects with profits`, expected_output: `Max profit`, is_hidden: false },
    { id: '2532', input: `Single project profit 10`, expected_output: `10`, is_hidden: true },
    { id: '2532', input: `No projects`, expected_output: `0`, is_hidden: true }
  ],
  'patching-array': [
    { id: '2533', input: `nums = [1,3], n = 6`, expected_output: `1`, is_hidden: false },
    { id: '2533', input: `nums = [1,2,2], n = 5`, expected_output: `0`, is_hidden: true },
    { id: '2533', input: `nums = [1], n = 5`, expected_output: `2`, is_hidden: true }
  ],
  'maximum-product-of-two-elements': [
    { id: '2534', input: `nums = [3,7,5,6,2]`, expected_output: `30`, is_hidden: false },
    { id: '2534', input: `nums = [1,2,3,4]`, expected_output: `6`, is_hidden: true },
    { id: '2534', input: `nums = [10,10]`, expected_output: `81`, is_hidden: true }
  ],
  'shortest-unsorted-continuous-subarray-nf': [
    { id: '2535', input: `nums = [2,6,4,8,10,9,15]`, expected_output: `5`, is_hidden: false },
    { id: '2535', input: `nums = [1,2,3,4]`, expected_output: `0`, is_hidden: true },
    { id: '2535', input: `nums = [1]`, expected_output: `0`, is_hidden: true }
  ],
  'max-flow-lower-bounds': [
    { id: '2536', input: `n = 3, edges = [[0,1,2,3],[1,2,1,2],[0,2,1,3]]`, expected_output: `3`, is_hidden: false },
  ],
  'minimum-cost-flow': [
    { id: '2537', input: `n = 3, edges = [[0,1,10,2],[1,2,8,3],[0,2,5,1]], flow = 5`, expected_output: `30`, is_hidden: false },
  ],
  'stable-marriage-problem': [
    { id: '2538', input: `Preferences as given`, expected_output: `Stable matching`, is_hidden: false },
    { id: '2538', input: `n=1`, expected_output: `[(0,0)]`, is_hidden: true },
    { id: '2538', input: `n=2, simple preferences`, expected_output: `Matching`, is_hidden: true }
  ],
  'maximum-independent-set-bipartite': [
    { id: '2539', input: `n=6, edges=[[1,4],[2,4],[2,5],[3,5]]`, expected_output: `4`, is_hidden: false },
    { id: '2539', input: `n=2, edges=[[1,2]]`, expected_output: `1`, is_hidden: true },
    { id: '2539', input: `n=4, edges=[[1,3],[2,4]]`, expected_output: `2`, is_hidden: true }
  ],
  'airplane-seat-assignment': [
    { id: '1', input: `n = 2`, expected_output: `0.5`, is_hidden: false },
    { id: '2', input: `n = 1`, expected_output: `1.0`, is_hidden: true },
  ],
  'is-graph-bipartite-bg': [
    { id: '2541', input: `graph = [[1,3],[0,2],[1,3],[0,2]]`, expected_output: `true`, is_hidden: false },
    { id: '2541', input: `graph = [[1,2,3],[0,2],[0,1,3],[0,2]]`, expected_output: `false`, is_hidden: true },
    { id: '2541', input: `graph = [[1],[0]]`, expected_output: `true`, is_hidden: true }
  ],
  'bipartite-matching': [
    { id: '2542', input: `edges = [[1,2],[1,3],[2,1],[3,2]]`, expected_output: `2`, is_hidden: false },
    { id: '2542', input: `edges = [[1,1]]`, expected_output: `1`, is_hidden: true },
    { id: '2542', input: `edges = [[1,2],[1,3]]`, expected_output: `1`, is_hidden: true }
  ],
  'bipartite-check': [
    { id: '2543', input: `n=4, edges=[[0,1],[0,3],[1,2],[2,3]]`, expected_output: `true`, is_hidden: false },
    { id: '2543', input: `n=3, edges=[[0,1],[1,2],[2,0]]`, expected_output: `false`, is_hidden: true },
    { id: '2543', input: `n=2, edges=[[0,1]]`, expected_output: `true`, is_hidden: true }
  ],
  'possible-bipartition': [
    { id: '2544', input: `n=4, dislikes=[[1,2],[1,3],[2,4]]`, expected_output: `true`, is_hidden: false },
    { id: '2544', input: `n=3, dislikes=[[1,2],[1,3],[2,3]]`, expected_output: `false`, is_hidden: true },
    { id: '2544', input: `n=1, dislikes=[]`, expected_output: `true`, is_hidden: true }
  ],
  'find-if-path-exists-in-graph': [
    { id: '2545', input: `n=3, edges=[[0,1],[1,2],[2,0]], source=0, dest=2`, expected_output: `true`, is_hidden: false },
    { id: '2545', input: `n=3, edges=[[0,1]], source=0, dest=2`, expected_output: `false`, is_hidden: true },
    { id: '2545', input: `n=1, edges=[], source=0, dest=0`, expected_output: `true`, is_hidden: true }
  ],
  'coloring-a-border': [
    { id: '2546', input: `grid=[[1,1],[1,2]], r0=0, c0=0, color=3`, expected_output: `[[3,3],[3,2]]`, is_hidden: false },
    { id: '2546', input: `grid=[[1,2],[2,3]], r0=0, c0=0, color=5`, expected_output: `[[5,2],[2,3]]`, is_hidden: true },
    { id: '2546', input: `grid=[[1]], r0=0, c0=0, color=2`, expected_output: `[[2]]`, is_hidden: true }
  ],
  'split-array-into-three-subarrays': [
    { id: '2547', input: `arr = [1,2,3,4,5,6,7,8]`, expected_output: `true`, is_hidden: false },
    { id: '2547', input: `arr = [1,2,3]`, expected_output: `true`, is_hidden: true },
    { id: '2547', input: `arr = [1,1,1,1,1,1]`, expected_output: `true`, is_hidden: true }
  ],
  'bipartite-graph-coloring': [
    { id: '2548', input: `n=4, edges=[[0,1],[0,3],[1,2],[2,3]]`, expected_output: `[0,1,0,1]`, is_hidden: false },
    { id: '2548', input: `n=2, edges=[[0,1]]`, expected_output: `[0,1]`, is_hidden: true },
    { id: '2548', input: `n=3, edges=[[0,1],[1,2]]`, expected_output: `[0,1,0]`, is_hidden: true }
  ],
  'divide-players-into-teams': [
    { id: '2549', input: `skill = [3,2,5,1,3,4]`, expected_output: `22`, is_hidden: false },
    { id: '2549', input: `skill = [1,1,2,3]`, expected_output: `-1`, is_hidden: true },
    { id: '2549', input: `skill = [1,2,3,4]`, expected_output: `10`, is_hidden: true }
  ],
  'find-center-of-star-graph': [
    { id: '2550', input: `edges = [[1,2],[2,3],[4,2]]`, expected_output: `2`, is_hidden: false },
    { id: '2550', input: `edges = [[1,2],[1,3]]`, expected_output: `1`, is_hidden: true },
    { id: '2550', input: `edges = [[1,3],[2,3],[3,4]]`, expected_output: `3`, is_hidden: true }
  ],
  'maximal-network-rank': [
    { id: '2551', input: `n=4, roads=[[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]`, expected_output: `6`, is_hidden: false },
    { id: '2551', input: `n=5, roads=[[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]`, expected_output: `6`, is_hidden: true },
    { id: '2551', input: `n=2, roads=[[0,1]]`, expected_output: `1`, is_hidden: true }
  ],
  'parallel-courses-iii': [
    { id: '2552', input: `n=3, relations=[[0,2],[1,2]], time=[3,2,5]`, expected_output: `8`, is_hidden: false },
    { id: '2552', input: `n=5, relations=[[0,1],[1,2],[2,3],[3,4]], time=[1,1,1,1,1]`, expected_output: `5`, is_hidden: true },
    { id: '2552', input: `n=1, relations=[], time=[5]`, expected_output: `5`, is_hidden: true }
  ],
  'check-if-graph-is-bipartite-matrix': [
    { id: '2553', input: `graph=[[0,1,0,1],[1,0,1,0],[0,1,0,1],[1,0,1,0]]`, expected_output: `true`, is_hidden: false },
    { id: '2553', input: `graph=[[0,1,1],[1,0,1],[1,1,0]]`, expected_output: `false`, is_hidden: true },
    { id: '2553', input: `graph=[[0,1],[1,0]]`, expected_output: `true`, is_hidden: true }
  ],
  'course-schedule-bipartite': [
    { id: '2554', input: `numCourses = 2, prerequisites = [[1,0]]`, expected_output: `true`, is_hidden: false },
    { id: '2554', input: `numCourses = 2, prerequisites = [[1,0],[0,1]]`, expected_output: `false`, is_hidden: true },
    { id: '2554', input: `numCourses = 1, prerequisites = []`, expected_output: `true`, is_hidden: true }
  ],
  'minimum-vertices-to-reach-all-nodes': [
    { id: '2555', input: `n=5, edges=[[0,1],[0,2],[2,3],[3,4]]`, expected_output: `[0]`, is_hidden: false },
    { id: '2555', input: `n=3, edges=[[1,2],[2,0]]`, expected_output: `[1]`, is_hidden: true },
    { id: '2555', input: `n=2, edges=[[0,1]]`, expected_output: `[0]`, is_hidden: true }
  ],
  'string-to-integer-atoi': [
    { id: '2559', input: `s = "42"`, expected_output: `42`, is_hidden: false },
    { id: '2559', input: `s = "   -42"`, expected_output: `-42`, is_hidden: true },
    { id: '2559', input: `s = "4193 with words"`, expected_output: `4193`, is_hidden: true }
  ],
  'count-number-of-homogenous-substrings': [
    { id: '2563', input: `s = "abbcccaa"`, expected_output: `13`, is_hidden: false },
    { id: '2563', input: `s = "zz"`, expected_output: `3`, is_hidden: true },
    { id: '2563', input: `s = "a"`, expected_output: `1`, is_hidden: true }
  ],
  'minimum-window-substring': [
    { id: '2564', input: `s = "ADOBECODEBANC", t = "ABC"`, expected_output: `"BANC"`, is_hidden: false },
    { id: '2564', input: `s = "a", t = "a"`, expected_output: `"a"`, is_hidden: true },
    { id: '2564', input: `s = "a", t = "aa"`, expected_output: `""`, is_hidden: true }
  ],
  'longest-palindrome': [
    { id: '2567', input: `s = "abccccdd"`, expected_output: `7`, is_hidden: false },
    { id: '2567', input: `s = "a"`, expected_output: `1`, is_hidden: true },
    { id: '2567', input: `s = "bb"`, expected_output: `2`, is_hidden: true }
  ],
  'count-and-say': [
    { id: '1', input: `n = 4`, expected_output: `"1211"`, is_hidden: false },
    { id: '2', input: `n = 1`, expected_output: `"1"`, is_hidden: true },
  ],
  'text-justification': [
    { id: '2569', input: `words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16`, expected_output: `Formatted lines`, is_hidden: false },
    { id: '2569', input: `words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16`, expected_output: `Formatted`, is_hidden: true },
    { id: '2569', input: `words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer."], maxWidth = 20`, expected_output: `Formatted`, is_hidden: true }
  ],
  'check-if-two-string-arrays-are-equivalent': [
    { id: '2570', input: `word1 = ["ab", "c"], word2 = ["a", "bc"]`, expected_output: `true`, is_hidden: false },
    { id: '2570', input: `word1 = ["a", "cb"], word2 = ["ab", "c"]`, expected_output: `false`, is_hidden: true },
    { id: '2570', input: `word1 = ["abc", "def"], word2 = ["abc", "def"]`, expected_output: `true`, is_hidden: true }
  ],
  'longest-substring-with-at-most-k-distinct-characters': [
    { id: '2571', input: `s = "eceba", k = 2`, expected_output: `3`, is_hidden: false },
    { id: '2571', input: `s = "aa", k = 1`, expected_output: `2`, is_hidden: true },
    { id: '2571', input: `s = "abcabcabc", k = 2`, expected_output: `4`, is_hidden: true }
  ],
  'rolling-hash-implementation': [
    { id: '2572', input: `s = "abcabc"`, expected_output: `Hash computed`, is_hidden: false },
    { id: '2572', input: `s = "hello"`, expected_output: `Hash computed`, is_hidden: true },
    { id: '2572', input: `s = "a"`, expected_output: `Hash computed`, is_hidden: true }
  ],
  'find-duplicate-file-in-system': [
    { id: '2573', input: `paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]`, expected_output: `[["root/a/2.txt","root/c/3.txt","root/4.txt"],["root/a/1.txt","root/c/d/4.txt"]]`, is_hidden: false },
    { id: '2573', input: `paths = ["root/a 1.txt(abcd)"]`, expected_output: `[]`, is_hidden: true },
    { id: '2573', input: `paths = ["root/x 1.txt(abc) 2.txt(abc)"]`, expected_output: `[["root/x/1.txt","root/x/2.txt"]]`, is_hidden: true }
  ],
  'substring-with-concatenation-of-all-words': [
    { id: '2574', input: `s = "barfoothefoobarman", words = ["foo","bar"]`, expected_output: `[0,9]`, is_hidden: false },
    { id: '2574', input: `s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]`, expected_output: `[]`, is_hidden: true },
    { id: '2574', input: `s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]`, expected_output: `[6,9,12]`, is_hidden: true }
  ],
  'repeated-string-match': [
    { id: '2575', input: `a = "abcd", b = "cdabcdab"`, expected_output: `3`, is_hidden: false },
    { id: '2575', input: `a = "a", b = "aa"`, expected_output: `2`, is_hidden: true },
    { id: '2575', input: `a = "abc", b = "cabcab"`, expected_output: `3`, is_hidden: true }
  ],
  'longest-repeating-character-replacement': [
    { id: '2576', input: `s = "AABABBA", k = 1`, expected_output: `4`, is_hidden: false },
    { id: '2576', input: `s = "ABAB", k = 2`, expected_output: `4`, is_hidden: true },
    { id: '2576', input: `s = "AAAA", k = 0`, expected_output: `4`, is_hidden: true }
  ],
  'distinct-subsequences': [
    { id: '2805_1', input: `"rabbbit","rabbit"`, expected_output: `3`, is_hidden: false },
    { id: '2805_2', input: `"babgbag","bag"`, expected_output: `5`, is_hidden: true },
    { id: '2805_3', input: `"a","a"`, expected_output: `1`, is_hidden: true }
  ],
  'rabin-karp-pattern-matching': [
    { id: '2578', input: `text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"`, expected_output: `[10]`, is_hidden: false },
    { id: '2578', input: `text = "hello", pattern = "ll"`, expected_output: `[2]`, is_hidden: true },
    { id: '2578', input: `text = "aaaa", pattern = "aa"`, expected_output: `[0,1,2]`, is_hidden: true }
  ],
  'longest-substring-with-at-most-two-distinct': [
    { id: '2579', input: `s = "eceba"`, expected_output: `3`, is_hidden: false },
    { id: '2579', input: `s = "aaa"`, expected_output: `3`, is_hidden: true },
    { id: '2579', input: `s = "abc"`, expected_output: `2`, is_hidden: true }
  ],
  'subarray-product-less-than-k': [
    { id: '2580', input: `nums = [10,5,2,6], k = 100`, expected_output: `8`, is_hidden: false },
    { id: '2580', input: `nums = [1,2,3], k = 0`, expected_output: `0`, is_hidden: true },
    { id: '2580', input: `nums = [100,2,3,4], k = 50`, expected_output: `4`, is_hidden: true }
  ],
  'number-of-substrings-containing-all-three-characters': [
    { id: '2582', input: `s = "abcabc"`, expected_output: `10`, is_hidden: false },
    { id: '2582', input: `s = "aaacb"`, expected_output: `3`, is_hidden: true },
    { id: '2582', input: `s = "abc"`, expected_output: `1`, is_hidden: true }
  ],
  'check-permutation': [
    { id: '2583', input: `s1 = "abc", s2 = "bca"`, expected_output: `true`, is_hidden: false },
    { id: '2583', input: `s1 = "abc", s2 = "bad"`, expected_output: `false`, is_hidden: true },
    { id: '2583', input: `s1 = "a", s2 = "a"`, expected_output: `true`, is_hidden: true }
  ],
  'maximum-erasure-value': [
    { id: '2584', input: `nums = [4,2,5,5,6,4,1,1]`, expected_output: `12`, is_hidden: false },
    { id: '2584', input: `nums = [5,2,1,2]`, expected_output: `8`, is_hidden: true },
    { id: '2584', input: `nums = [1]`, expected_output: `1`, is_hidden: true }
  ],
  'longest-substring-same-letters-after-replacement': [
    { id: '2585', input: `s = "AABABBA", k = 1`, expected_output: `4`, is_hidden: false },
    { id: '2585', input: `s = "ABAB", k = 2`, expected_output: `4`, is_hidden: true },
    { id: '2585', input: `s = "AAAA", k = 0`, expected_output: `4`, is_hidden: true }
  ],
  'kmp-pattern-search': [
    { id: '2586', input: `text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"`, expected_output: `[10]`, is_hidden: false },
    { id: '2586', input: `text = "AAAAAA", pattern = "AA"`, expected_output: `[0,1,2,3,4]`, is_hidden: true },
    { id: '2586', input: `text = "hello", pattern = "ll"`, expected_output: `[2]`, is_hidden: true }
  ],
  'build-lps-array': [
    { id: '2587', input: `pattern = "ABABCABAB"`, expected_output: `[0,0,1,2,0,1,2,3,4]`, is_hidden: false },
    { id: '2587', input: `pattern = "AAAA"`, expected_output: `[0,1,2,3]`, is_hidden: true },
    { id: '2587', input: `pattern = "ABAB"`, expected_output: `[0,0,2,0]`, is_hidden: true }
  ],
  'find-all-anagrams-in-a-string': [
    { id: '2588', input: `s = "cbaebabacd", p = "abc"`, expected_output: `[0,6]`, is_hidden: false },
    { id: '2588', input: `s = "abab", p = "ab"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2588', input: `s = "aa", p = "bb"`, expected_output: `[]`, is_hidden: true }
  ],
  'repeated-substring-pattern': [
    { id: '2589', input: `s = "abab"`, expected_output: `true`, is_hidden: false },
    { id: '2589', input: `s = "aba"`, expected_output: `false`, is_hidden: true },
    { id: '2589', input: `s = "abcabcabc"`, expected_output: `true`, is_hidden: true }
  ],
  'longest-happy-prefix': [
    { id: '2591', input: `s = "level"`, expected_output: `"l"`, is_hidden: false },
    { id: '2591', input: `s = "ababab"`, expected_output: `"abab"`, is_hidden: true },
    { id: '2591', input: `s = "aba"`, expected_output: `"a"`, is_hidden: true }
  ],
  'kmp-with-multiple-patterns': [
    { id: '2592', input: `text = "ababcabcab", patterns = ["abc","bab"]`, expected_output: `All occurrences`, is_hidden: false },
    { id: '2592', input: `text = "aaaa", patterns = ["aa"]`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2592', input: `text = "hello", patterns = ["ll","o"]`, expected_output: `All occurrences`, is_hidden: true }
  ],
  'periodic-string-check': [
    { id: '2593', input: `s = "abcabcabc"`, expected_output: `3`, is_hidden: false },
    { id: '2593', input: `s = "abc"`, expected_output: `3`, is_hidden: true },
    { id: '2593', input: `s = "aaaa"`, expected_output: `1`, is_hidden: true }
  ],
  'kmp-string-matching': [
    { id: '2594', input: `text = "hello world", pattern = "world"`, expected_output: `6`, is_hidden: false },
    { id: '2594', input: `text = "aaaaa", pattern = "bba"`, expected_output: `-1`, is_hidden: true },
    { id: '2594', input: `text = "abc", pattern = "b"`, expected_output: `1`, is_hidden: true }
  ],
  'kmp-with-wildcards': [
    { id: '2595', input: `text = "abcde", pattern = "a.c.e"`, expected_output: `0`, is_hidden: false },
    { id: '2595', input: `text = "abc", pattern = "a*"`, expected_output: `0`, is_hidden: true },
    { id: '2595', input: `text = "abc", pattern = "d"`, expected_output: `-1`, is_hidden: true }
  ],
  'longest-prefix-suffix': [
    { id: '2596', input: `s = "aabaabaaa"`, expected_output: `[0,0,1,0,1,2,3,1,1]`, is_hidden: false },
    { id: '2596', input: `s = "aaaa"`, expected_output: `[0,1,2,3]`, is_hidden: true },
    { id: '2596', input: `s = "abc"`, expected_output: `[0,0,0]`, is_hidden: true }
  ],
  'kmp-for-circular-string': [
    { id: '2597', input: `s = "abcabc", pattern = "cab"`, expected_output: `[2,5]`, is_hidden: false },
    { id: '2597', input: `s = "aaa", pattern = "aa"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2597', input: `s = "abc", pattern = "d"`, expected_output: `[]`, is_hidden: true }
  ],
  'kmp-automaton': [
    { id: '2598', input: `pattern = "ABABC"`, expected_output: `Automaton states`, is_hidden: false },
    { id: '2598', input: `pattern = "aaa"`, expected_output: `Automaton`, is_hidden: true },
    { id: '2598', input: `pattern = "AB"`, expected_output: `Automaton`, is_hidden: true }
  ],
  'kmp-for-dna-sequence': [
    { id: '2599', input: `dna = "ACGTACGTACGT", pattern = "ACGT"`, expected_output: `[0,4,8]`, is_hidden: false },
    { id: '2599', input: `dna = "AAAA", pattern = "AA"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2599', input: `dna = "ACGT", pattern = "ACGT"`, expected_output: `[0]`, is_hidden: true }
  ],
  'kmp-complete-implementation': [
    { id: '2600', input: `text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"`, expected_output: `[10]`, is_hidden: false },
    { id: '2600', input: `text = "AAAA", pattern = "AA"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2600', input: `text = "abc", pattern = "def"`, expected_output: `[]`, is_hidden: true }
  ],
  'rabin-karp-basic': [
    { id: '2601', input: `text = "GEEKS FOR GEEKS", pattern = "GEEK"`, expected_output: `[0,10]`, is_hidden: false },
    { id: '2601', input: `text = "AAAAAA", pattern = "AA"`, expected_output: `[0,1,2,3,4]`, is_hidden: true },
    { id: '2601', input: `text = "hello", pattern = "ll"`, expected_output: `[2]`, is_hidden: true }
  ],
  'rabin-karp-rolling-hash': [
    { id: '2602', input: `text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"`, expected_output: `[10]`, is_hidden: false },
    { id: '2602', input: `text = "aaaaa", pattern = "aaa"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2602', input: `text = "abc", pattern = "d"`, expected_output: `[]`, is_hidden: true }
  ],
  'substring-search-rk': [
    { id: '2603', input: `text = "abcabcabc", pattern = "abc"`, expected_output: `[0,3,6]`, is_hidden: false },
    { id: '2603', input: `text = "hello", pattern = "ll"`, expected_output: `[2]`, is_hidden: true },
    { id: '2603', input: `text = "aaaa", pattern = "aa"`, expected_output: `[0,1,2]`, is_hidden: true }
  ],
  'rabin-karp-2d-pattern-matching': [
    { id: '2604', input: `grid=[[1,2,3],[4,5,6],[7,8,9]], pattern=[[5,6],[8,9]]`, expected_output: `[[1,1]]`, is_hidden: false },
    { id: '2604', input: `grid=[[1]], pattern=[[1]]`, expected_output: `[[0,0]]`, is_hidden: true },
    { id: '2604', input: `grid=[[1,2],[3,4]], pattern=[[1,2]]`, expected_output: `[[0,0]]`, is_hidden: true }
  ],
  'rabin-karp-polynomial-hash': [
    { id: '2606', input: `text = "ACGTACGT", pattern = "ACGT"`, expected_output: `[0,4]`, is_hidden: false },
    { id: '2606', input: `text = "AAAA", pattern = "AA"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2606', input: `text = "ACGT", pattern = "ACGT"`, expected_output: `[0]`, is_hidden: true }
  ],
  'distinct-substrings-count': [
    { id: '2607', input: `s = "abc"`, expected_output: `6`, is_hidden: false },
    { id: '2607', input: `s = "aaa"`, expected_output: `3`, is_hidden: true },
    { id: '2607', input: `s = "ab"`, expected_output: `3`, is_hidden: true }
  ],
  'rabin-karp-fingerprint': [
    { id: '2608', input: `Two identical documents`, expected_output: `Same fingerprints`, is_hidden: false },
    { id: '2608', input: `Two different documents`, expected_output: `Different fingerprints`, is_hidden: true },
    { id: '2608', input: `Empty document`, expected_output: `Empty fingerprint`, is_hidden: true }
  ],
  'find-pattern-in-string': [
    { id: '2609', input: `s = "leetcode", pattern = "leet"`, expected_output: `0`, is_hidden: false },
    { id: '2609', input: `s = "abcde", pattern = "f"`, expected_output: `-1`, is_hidden: true },
    { id: '2609', input: `s = "aaa", pattern = "aa"`, expected_output: `0`, is_hidden: true }
  ],
  'rabin-karp-multiple-pattern': [
    { id: '2610', input: `text = "ababcabcab", patterns = ["abc","ab","cab"]`, expected_output: `All occurrences`, is_hidden: false },
    { id: '2610', input: `text = "aaaa", patterns = ["aa","aaa"]`, expected_output: `Multiple patterns`, is_hidden: true },
    { id: '2610', input: `text = "abc", patterns = ["d","e"]`, expected_output: `[]`, is_hidden: true }
  ],
  'check-if-string-contains-all-binary-codes': [
    { id: '2611', input: `s = "00110110", k = 2`, expected_output: `true`, is_hidden: false },
    { id: '2611', input: `s = "0110", k = 2`, expected_output: `true`, is_hidden: true },
    { id: '2611', input: `s = "0110", k = 1`, expected_output: `true`, is_hidden: true }
  ],
  'repeated-string-pattern-rk': [
    { id: '2611', input: `s = "abab"`, expected_output: `true`, is_hidden: false },
    { id: '2611', input: `s = "aba"`, expected_output: `false`, is_hidden: true },
    { id: '2611', input: `s = "abcabcabc"`, expected_output: `true`, is_hidden: true }
  ],
  'rabin-karp-different-base': [
    { id: '2612', input: `text = "ABRACADABRA", pattern = "ABRA"`, expected_output: `[0,7]`, is_hidden: false },
    { id: '2612', input: `text = "AAAA", pattern = "AA"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2612', input: `text = "abc", pattern = "d"`, expected_output: `[]`, is_hidden: true }
  ],
  'longest-common-substring-rk': [
    { id: '2613', input: `s1 = "abcde", s2 = "abfce"`, expected_output: `"ab"`, is_hidden: false },
    { id: '2613', input: `s1 = "abc", s2 = "def"`, expected_output: `""`, is_hidden: true },
    { id: '2613', input: `s1 = "abc", s2 = "abc"`, expected_output: `"abc"`, is_hidden: true }
  ],
  'minimum-window-substring-rk': [
    { id: '2614', input: `s = "ADOBECODEBANC", t = "ABC"`, expected_output: `"BANC"`, is_hidden: false },
    { id: '2614', input: `s = "a", t = "a"`, expected_output: `"a"`, is_hidden: true },
    { id: '2614', input: `s = "a", t = "aa"`, expected_output: `""`, is_hidden: true }
  ],
  'hash-set-implementation': [
    { id: '2615', input: `add("cat"), add("dog"), contains("cat")`, expected_output: `true`, is_hidden: false },
    { id: '2615', input: `remove("cat"), contains("cat")`, expected_output: `false`, is_hidden: true },
    { id: '2615', input: `contains("dog")`, expected_output: `true`, is_hidden: true }
  ],
  'z-algorithm-implementation': [
    { id: '2616', input: `s = "aabxcaabcaabxaa"`, expected_output: `Z-array values`, is_hidden: false },
    { id: '2616', input: `s = "aaaa"`, expected_output: `[0,3,2,1]`, is_hidden: true },
    { id: '2616', input: `s = "abc"`, expected_output: `[0,0,0]`, is_hidden: true }
  ],
  'pattern-matching-with-z': [
    { id: '2617', input: `text = "ABABDABACDABABCABAB", pattern = "ABABCABAB"`, expected_output: `[10]`, is_hidden: false },
    { id: '2617', input: `text = "AAAA", pattern = "AA"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2617', input: `text = "abc", pattern = "d"`, expected_output: `[]`, is_hidden: true }
  ],
  'longest-prefix-suffix-z': [
    { id: '2618', input: `s = "aabaabaaa"`, expected_output: `Z-array: [0,1,0,1,2,3,1,1,1]`, is_hidden: false },
    { id: '2618', input: `s = "abab"`, expected_output: `[0,0,2,0]`, is_hidden: true },
    { id: '2618', input: `s = "aaaa"`, expected_output: `[0,3,2,1]`, is_hidden: true }
  ],
  'z-algorithm-pattern-search': [
    { id: '2619', input: `text = "geeksforgeeks", pattern = "eks"`, expected_output: `[2,10]`, is_hidden: false },
    { id: '2619', input: `text = "abcde", pattern = "f"`, expected_output: `[]`, is_hidden: true },
    { id: '2619', input: `text = "aaaa", pattern = "aa"`, expected_output: `[0,1,2]`, is_hidden: true }
  ],
  'longest-repeating-prefix': [
    { id: '2620', input: `s = "abcabcabc"`, expected_output: `6`, is_hidden: false },
    { id: '2620', input: `s = "aaaa"`, expected_output: `3`, is_hidden: true },
    { id: '2620', input: `s = "abc"`, expected_output: `0`, is_hidden: true }
  ],
  'z-algorithm-palindrome-check': [
    { id: '2621', input: `s = "abacaba"`, expected_output: `"abacaba"`, is_hidden: false },
    { id: '2621', input: `s = "abc"`, expected_output: `"a"`, is_hidden: true },
    { id: '2621', input: `s = "aa"`, expected_output: `"aa"`, is_hidden: true }
  ],
  'z-function-values': [
    { id: '2622', input: `s = "aabxcaabcaabxaa"`, expected_output: `Z-array`, is_hidden: false },
    { id: '2622', input: `s = "abc"`, expected_output: `[0,0,0]`, is_hidden: true },
    { id: '2622', input: `s = "aaaa"`, expected_output: `[0,3,2,1]`, is_hidden: true }
  ],
  'count-distinct-substrings-z': [
    { id: '2623', input: `s = "abc"`, expected_output: `6`, is_hidden: false },
    { id: '2623', input: `s = "aaa"`, expected_output: `3`, is_hidden: true },
    { id: '2623', input: `s = "ab"`, expected_output: `3`, is_hidden: true }
  ],
  'z-algorithm-string-compression': [
    { id: '2624', input: `s = "abcabcabc"`, expected_output: `3*[abc]`, is_hidden: false },
    { id: '2624', input: `s = "abc"`, expected_output: `No compression`, is_hidden: true },
    { id: '2624', input: `s = "aaaa"`, expected_output: `4*[a]`, is_hidden: true }
  ],
  'z-algorithm-pattern-count': [
    { id: '2625', input: `text = "aaaaaa", pattern = "aa"`, expected_output: `5`, is_hidden: false },
    { id: '2625', input: `text = "abc", pattern = "ab"`, expected_output: `1`, is_hidden: true },
    { id: '2625', input: `text = "abcabc", pattern = "abc"`, expected_output: `2`, is_hidden: true }
  ],
  'z-algorithm-longest-prefix': [
    { id: '2626', input: `s = "abcabcabc"`, expected_output: `6`, is_hidden: false },
    { id: '2626', input: `s = "abc"`, expected_output: `0`, is_hidden: true },
    { id: '2626', input: `s = "aaaa"`, expected_output: `3`, is_hidden: true }
  ],
  'z-algorithm-period-detection': [
    { id: '2627', input: `s = "abcabcabc"`, expected_output: `3`, is_hidden: false },
    { id: '2627', input: `s = "abc"`, expected_output: `3`, is_hidden: true },
    { id: '2627', input: `s = "aaaa"`, expected_output: `1`, is_hidden: true }
  ],
  'z-algorithm-complete': [
    { id: '2628', input: `s = "aabxcaabcaabxaa"`, expected_output: `Z-array and positions`, is_hidden: false },
    { id: '2628', input: `s = "aaaa"`, expected_output: `[0,3,2,1]`, is_hidden: true },
    { id: '2628', input: `s = "abc"`, expected_output: `[0,0,0]`, is_hidden: true }
  ],
  'z-algorithm-for-rotations': [
    { id: '2629', input: `s1 = "abcde", s2 = "cdeab"`, expected_output: `true`, is_hidden: false },
    { id: '2629', input: `s1 = "abc", s2 = "abd"`, expected_output: `false`, is_hidden: true },
    { id: '2629', input: `s1 = "a", s2 = "a"`, expected_output: `true`, is_hidden: true }
  ],
  'z-algorithm-all-occurrences': [
    { id: '2630', input: `text = "ababcabcab", pattern = "abc"`, expected_output: `[2,6]`, is_hidden: false },
    { id: '2630', input: `text = "aaaa", pattern = "aa"`, expected_output: `[0,1,2]`, is_hidden: true },
    { id: '2630', input: `text = "abc", pattern = "d"`, expected_output: `[]`, is_hidden: true }
  ],
  'construct-suffix-array': [
    { id: '2631_1', input: `s = banana`, expected_output: `[5,3,1,0,4,2]`, is_hidden: false },
    { id: '2631_2', input: `s = aab`, expected_output: `[2,1,0]`, is_hidden: true },
    { id: '2631_3', input: `s = abcd`, expected_output: `[3,2,1,0]`, is_hidden: true }
  ],
  'suffix-array-search': [
    { id: '2632_1', input: `text = banana, pattern = nan`, expected_output: `true`, is_hidden: false },
    { id: '2632_2', input: `s = abc, pattern = b`, expected_output: `true`, is_hidden: true },
    { id: '2632_3', input: `s = abc, pattern = d`, expected_output: `false`, is_hidden: true }
  ],
  'count-distinct-substrings-sa': [
    { id: '2633_1', input: `s = abc`, expected_output: `6`, is_hidden: false },
    { id: '2633_2', input: `s = aab`, expected_output: `5`, is_hidden: true },
    { id: '2633_3', input: `s = a`, expected_output: `1`, is_hidden: true }
  ],
  'longest-repeated-substring-sa': [
    { id: '2634_1', input: `s = banana`, expected_output: `3`, is_hidden: false },
    { id: '2634_2', input: `s = ababa`, expected_output: `3`, is_hidden: true },
    { id: '2634_3', input: `s = ab`, expected_output: `1`, is_hidden: true }
  ],
  'build-lcp-array': [
    { id: '2635_1', input: `s = banana`, expected_output: `[1,3,0,0,2,0]`, is_hidden: false },
    { id: '2635_2', input: `s = abc`, expected_output: `[0,0,0]`, is_hidden: true },
    { id: '2635_3', input: `s = aaaa`, expected_output: `[3,2,1,0]`, is_hidden: true }
  ],
  'longest-common-substring-sa': [
    { id: '2636_1', input: `s1 = abcde, s2 = abxye`, expected_output: `2`, is_hidden: false },
    { id: '2636_2', input: `s1 = abc, s2 = abc`, expected_output: `3`, is_hidden: true },
    { id: '2636_3', input: `s1 = a, s2 = b`, expected_output: `0`, is_hidden: true }
  ],
  'pattern-matching-sa': [
    { id: '2637_1', input: `text = abcabcabc, pattern = abc`, expected_output: `[0,3,6]`, is_hidden: false },
    { id: '2637_2', input: `text = a, pattern = a`, expected_output: `[0]`, is_hidden: true },
    { id: '2637_3', input: `text = abc, pattern = d`, expected_output: `[]`, is_hidden: true }
  ],
  'smallest-cyclic-shift': [
    { id: '2638_1', input: `s = cabcab`, expected_output: `abccab`, is_hidden: false },
    { id: '2638_2', input: `s = bca`, expected_output: `abc`, is_hidden: true },
    { id: '2638_3', input: `s = aab`, expected_output: `aab`, is_hidden: true }
  ],
  'distinct-substrings-length-k': [
    { id: '2639_1', input: `s = abcabc, k = 3`, expected_output: `3`, is_hidden: false },
    { id: '2639_2', input: `s = abc, k = 1`, expected_output: `3`, is_hidden: true },
    { id: '2639_3', input: `s = aaa, k = 2`, expected_output: `1`, is_hidden: true }
  ],
  'longest-palindrome-sa': [
    { id: '2640_1', input: `s = babad`, expected_output: `bab`, is_hidden: false },
    { id: '2640_2', input: `s = cbbd`, expected_output: `bb`, is_hidden: true },
    { id: '2640_3', input: `s = abba`, expected_output: `abba`, is_hidden: true }
  ],
  'number-unique-substrings-sa': [
    { id: '2641_1', input: `s = abab`, expected_output: `7`, is_hidden: false },
    { id: '2641_2', input: `s = abc`, expected_output: `6`, is_hidden: true },
    { id: '2641_3', input: `s = a`, expected_output: `1`, is_hidden: true }
  ],
  'min-lexicographic-rotation': [
    { id: '2642_1', input: `s = bcabab`, expected_output: `3`, is_hidden: false },
    { id: '2642_2', input: `s = abca`, expected_output: `3`, is_hidden: true },
    { id: '2642_3', input: `s = baaa`, expected_output: `1`, is_hidden: true }
  ],
  'lcp-all-suffixes': [
    { id: '2643_1', input: `s = ababc`, expected_output: `0`, is_hidden: false },
    { id: '2643_2', input: `s = aaaa`, expected_output: `3`, is_hidden: true },
    { id: '2643_3', input: `s = abab`, expected_output: `1`, is_hidden: true }
  ],
  'kth-lexicographic-substring': [
    { id: '2644_1', input: `s = abc, k = 3`, expected_output: `abc`, is_hidden: false },
    { id: '2644_2', input: `s = aaa, k = 2`, expected_output: `aa`, is_hidden: true },
    { id: '2644_3', input: `s = ab, k = 2`, expected_output: `ab`, is_hidden: true }
  ],
  'longest-repeated-overlap': [
    { id: '2645_1', input: `s = aabaaba`, expected_output: `4`, is_hidden: false },
    { id: '2645_2', input: `s = abcabcabc`, expected_output: `6`, is_hidden: true },
    { id: '2645_3', input: `s = abab`, expected_output: `2`, is_hidden: true }
  ],
  'build-suffix-tree': [
    { id: '2646_1', input: `s = abc$`, expected_output: `4 leaves`, is_hidden: false },
    { id: '2646_2', input: `s = aab$`, expected_output: `Compressed`, is_hidden: true },
    { id: '2646_3', input: `s = a$`, expected_output: `1 leaf`, is_hidden: true }
  ],
  'pattern-match-suffix-tree': [
    { id: '2647_1', input: `s = banana$, pattern = nan`, expected_output: `true`, is_hidden: false },
    { id: '2647_2', input: `s = abc$, pattern = b`, expected_output: `true`, is_hidden: true },
    { id: '2647_3', input: `s = abc$, pattern = d`, expected_output: `false`, is_hidden: true }
  ],
  'count-leaf-nodes-st': [
    { id: '2648_1', input: `s = abc$`, expected_output: `4`, is_hidden: false },
    { id: '2648_2', input: `s = aaa$`, expected_output: `4`, is_hidden: true },
    { id: '2648_3', input: `s = a$`, expected_output: `1`, is_hidden: true }
  ],
  'longest-repeated-st': [
    { id: '2649_1', input: `s = banana$`, expected_output: `ana`, is_hidden: false },
    { id: '2649_2', input: `s = abcabc$`, expected_output: `abc`, is_hidden: true },
    { id: '2649_3', input: `s = aab$`, expected_output: `aa`, is_hidden: true }
  ],
  'build-st-from-array': [
    { id: '2650_1', input: `SA = [5,3,1,0,4,2]`, expected_output: `Tree`, is_hidden: false },
    { id: '2650_2', input: `SA = [2,1,0]`, expected_output: `Simple`, is_hidden: true },
    { id: '2650_3', input: `SA = [1,0]`, expected_output: `Basic`, is_hidden: true }
  ],
  'longest-common-substr-st': [
    { id: '2651_1', input: `s1 = abcde, s2 = abxye`, expected_output: `2`, is_hidden: false },
    { id: '2651_2', input: `s1 = abc, s2 = abc`, expected_output: `3`, is_hidden: true },
    { id: '2651_3', input: `s1 = a, s2 = b`, expected_output: `0`, is_hidden: true }
  ],
  'all-common-substrings-st': [
    { id: '2652_1', input: `s1 = abc, s2 = abd`, expected_output: `a, ab`, is_hidden: false },
    { id: '2652_2', input: `s1 = a, s2 = a`, expected_output: `a`, is_hidden: true },
    { id: '2652_3', input: `s1 = abc, s2 = def`, expected_output: `[]`, is_hidden: true }
  ],
  'shortest-unique-substring-st': [
    { id: '2653_1', input: `s = aababc`, expected_output: `bc`, is_hidden: false },
    { id: '2653_2', input: `s = aaaa`, expected_output: `aaaa`, is_hidden: true },
    { id: '2653_3', input: `s = abc`, expected_output: `a`, is_hidden: true }
  ],
  'count-distinct-st': [
    { id: '2654_1', input: `s = abc`, expected_output: `6`, is_hidden: false },
    { id: '2654_2', input: `s = aaa`, expected_output: `3`, is_hidden: true },
    { id: '2654_3', input: `s = a`, expected_output: `1`, is_hidden: true }
  ],
  'longest-palindrome-st': [
    { id: '2655_1', input: `s = babad`, expected_output: `bab`, is_hidden: false },
    { id: '2655_2', input: `s = cbbd`, expected_output: `bb`, is_hidden: true },
    { id: '2655_3', input: `s = abba`, expected_output: `abba`, is_hidden: true }
  ],
  'max-motif-search': [
    { id: '2656_1', input: `s = abcabcabc, k = 2`, expected_output: `4`, is_hidden: false },
    { id: '2656_2', input: `s = aaaaa, k = 3`, expected_output: `3`, is_hidden: true },
    { id: '2656_3', input: `s = abc, k = 1`, expected_output: `1`, is_hidden: true }
  ],
  'top-k-frequent-st': [
    { id: '2657_1', input: `s = aabb, k = 2`, expected_output: `a, b`, is_hidden: false },
    { id: '2657_2', input: `s = abc, k = 1`, expected_output: `a`, is_hidden: true },
    { id: '2657_3', input: `s = aab, k = 2`, expected_output: `a, b`, is_hidden: true }
  ],
  'lcs-k-strings-st': [
    { id: '2658_1', input: `abc, abd, abe`, expected_output: `ab`, is_hidden: false },
    { id: '2658_2', input: `abc, def, ghi`, expected_output: ``, is_hidden: true },
    { id: '2658_3', input: `a, b, c`, expected_output: ``, is_hidden: true }
  ],
  'compressed-st-nodes': [
    { id: '2659_1', input: `s = abc$`, expected_output: `3`, is_hidden: false },
    { id: '2659_2', input: `s = aaaa$`, expected_output: `1`, is_hidden: true },
    { id: '2659_3', input: `s = ab$`, expected_output: `1`, is_hidden: true }
  ],
  'wildcard-match-st': [
    { id: '2660_1', input: `pattern = a?c?e`, expected_output: `true`, is_hidden: false },
    { id: '2660_2', input: `pattern = a?x?e`, expected_output: `false`, is_hidden: true },
    { id: '2660_3', input: `pattern = ?bc?e`, expected_output: `true`, is_hidden: true }
  ],
  'point-inside-triangle': [
    { id: '2661_1', input: `point=(1,1) in [(0,0),(5,0),(0,5)]`, expected_output: `true`, is_hidden: false },
    { id: '2661_2', input: `point=(0,0) in [(0,0),(5,0),(0,5)]`, expected_output: `true`, is_hidden: true },
    { id: '2661_3', input: `point=(10,10) in [(0,0),(5,0),(0,5)]`, expected_output: `false`, is_hidden: true }
  ],
  'calculate-polygon-area': [
    { id: '2662_1', input: `[(0,0),(4,0),(4,3),(0,3)]`, expected_output: `12.0`, is_hidden: false },
    { id: '2662_2', input: `[(0,0),(4,0),(2,3)]`, expected_output: `6.0`, is_hidden: true },
    { id: '2662_3', input: `[(0,0),(1,0),(0,1)]`, expected_output: `0.5`, is_hidden: true }
  ],
  'distance-between-points': [
    { id: '2663_1', input: `p1=(0,0), p2=(3,4)`, expected_output: `5.0`, is_hidden: false },
    { id: '2663_2', input: `p1=(0,0), p2=(0,0)`, expected_output: `0.0`, is_hidden: true },
    { id: '2663_3', input: `p1=(1,1), p2=(4,5)`, expected_output: `5.0`, is_hidden: true }
  ],
  'check-collinear-points': [
    { id: '2664_1', input: `(1,1),(2,2),(3,3)`, expected_output: `true`, is_hidden: false },
    { id: '2664_2', input: `(0,0),(1,0),(2,0)`, expected_output: `true`, is_hidden: true },
    { id: '2664_3', input: `(0,0),(1,1),(1,2)`, expected_output: `false`, is_hidden: true }
  ],
  'check-convex-polygon': [
    { id: '2665_1', input: `[(0,0),(4,0),(4,4),(0,4)]`, expected_output: `true`, is_hidden: false },
    { id: '2665_2', input: `[(0,0),(2,0),(1,1),(2,2),(0,2)]`, expected_output: `false`, is_hidden: true },
    { id: '2665_3', input: `[(0,0),(1,0),(0.5,0.5)]`, expected_output: `true`, is_hidden: true }
  ],
  'line-segment-intersection': [
    { id: '2666_1', input: `[(0,0),(2,2)], [(0,2),(2,0)]`, expected_output: `true`, is_hidden: false },
    { id: '2666_2', input: `[(0,0),(1,1)], [(2,2),(3,3)]`, expected_output: `false`, is_hidden: true },
    { id: '2666_3', input: `[(0,0),(3,0)], [(1,-1),(1,1)]`, expected_output: `true`, is_hidden: true }
  ],
  'point-in-polygon-rc': [
    { id: '2667_1', input: `[(0,0),(5,0),(5,5),(0,5)], (2,2)`, expected_output: `true`, is_hidden: false },
    { id: '2667_2', input: `[(0,0),(5,0),(5,5),(0,5)], (6,6)`, expected_output: `false`, is_hidden: true },
    { id: '2667_3', input: `[(0,0),(5,0),(5,5),(0,5)], (5,5)`, expected_output: `true`, is_hidden: true }
  ],
  'convex-hull-graham': [
    { id: '2668_1', input: `[(0,0),(1,1),(2,0),(1,2),(0,2)]`, expected_output: `4 points`, is_hidden: false },
    { id: '2668_2', input: `[(0,0),(1,0),(1,1),(0,1)]`, expected_output: `4 points`, is_hidden: true },
    { id: '2668_3', input: `[(0,0),(2,0),(1,1)]`, expected_output: `3 points`, is_hidden: true }
  ],
  'closest-pair-points': [
    { id: '2669_1', input: `[(0,0),(1,1),(2,2)]`, expected_output: `1.414`, is_hidden: false },
    { id: '2669_2', input: `[(0,0),(10,10)]`, expected_output: `14.142`, is_hidden: true },
    { id: '2669_3', input: `[(0,0),(1,0),(0,1)]`, expected_output: `1.0`, is_hidden: true }
  ],
  'polygon-perimeter': [
    { id: '2670_1', input: `[(0,0),(3,0),(3,4),(0,4)]`, expected_output: `14.0`, is_hidden: false },
    { id: '2670_2', input: `[(0,0),(4,0),(0,3)]`, expected_output: `12.0`, is_hidden: true },
    { id: '2670_3', input: `[(0,0),(1,0),(1,1),(0,1)]`, expected_output: `4.0`, is_hidden: true }
  ],
  'intersection-convex-polygons': [
    { id: '2671_1', input: `[(0,0),(4,0),(4,4),(0,4)] and [(2,2),(6,2),(6,6),(2,6)]`, expected_output: `4.0`, is_hidden: false },
    { id: '2671_2', input: `[(0,0),(2,0),(2,2),(0,2)] and [(3,3),(5,3),(5,5),(3,5)]`, expected_output: `0.0`, is_hidden: true },
    { id: '2671_3', input: `[(0,0),(4,0),(4,4),(0,4)] and [(1,1),(3,1),(3,3),(1,3)]`, expected_output: `4.0`, is_hidden: true }
  ],
  'circle-line-intersection': [
    { id: '2672_1', input: `center=(0,0) r=5, y=x`, expected_output: `2`, is_hidden: false },
    { id: '2672_2', input: `center=(0,0) r=5, y=6`, expected_output: `0`, is_hidden: true },
    { id: '2672_3', input: `center=(0,0) r=5, y=5`, expected_output: `1`, is_hidden: true }
  ],
  'min-enclosing-rectangle': [
    { id: '2673_1', input: `[(0,0),(1,0),(1,1),(0,1)]`, expected_output: `1.0`, is_hidden: false },
    { id: '2673_2', input: `[(0,0),(2,0),(1,1)]`, expected_output: `2.0`, is_hidden: true },
    { id: '2673_3', input: `[(0,0),(3,0),(1.5,2)]`, expected_output: `6.0`, is_hidden: true }
  ],
  'halfplane-intersection': [
    { id: '2674_1', input: `x>=0, y>=0, x+y<=4`, expected_output: `Triangle`, is_hidden: false },
    { id: '2674_2', input: `x>=0, x<=-1`, expected_output: `Empty`, is_hidden: true },
    { id: '2674_3', input: `x>=0, y>=0, x+y>=2`, expected_output: `Unbounded`, is_hidden: true }
  ],
  'voronoi-diagram': [
    { id: '2675_1', input: `[(0,0),(4,0),(2,3)]`, expected_output: `3 regions`, is_hidden: false },
    { id: '2675_2', input: `[(0,0),(1,0),(0,1),(1,1)]`, expected_output: `4 regions`, is_hidden: true },
    { id: '2675_3', input: `[(0,0),(2,0),(1,2)]`, expected_output: `3 regions`, is_hidden: true }
  ],
  'check-prime-number': [
    { id: '2676_1', input: `n = 17`, expected_output: `true`, is_hidden: false },
    { id: '2676_2', input: `n = 1`, expected_output: `false`, is_hidden: true },
    { id: '2676_3', input: `n = 2`, expected_output: `true`, is_hidden: true }
  ],
  'gcd-two-numbers': [
    { id: '2677_1', input: `a = 12, b = 8`, expected_output: `4`, is_hidden: false },
    { id: '2677_2', input: `a = 7, b = 13`, expected_output: `1`, is_hidden: true },
    { id: '2677_3', input: `a = 100, b = 75`, expected_output: `25`, is_hidden: true }
  ],
  'lcm-two-numbers': [
    { id: '2678_1', input: `a = 4, b = 6`, expected_output: `12`, is_hidden: false },
    { id: '2678_2', input: `a = 3, b = 5`, expected_output: `15`, is_hidden: true },
    { id: '2678_3', input: `a = 10, b = 10`, expected_output: `10`, is_hidden: true }
  ],
  'count-divisors': [
    { id: '2679_1', input: `n = 12`, expected_output: `6`, is_hidden: false },
    { id: '2679_2', input: `n = 7`, expected_output: `2`, is_hidden: true },
    { id: '2679_3', input: `n = 1`, expected_output: `1`, is_hidden: true }
  ],
  'power-of-two-nt': [
    { id: '2680_1', input: `n = 16`, expected_output: `true`, is_hidden: false },
    { id: '2680_2', input: `n = 1`, expected_output: `true`, is_hidden: true },
    { id: '2680_3', input: `n = 0`, expected_output: `false`, is_hidden: true }
  ],
  'modular-exponentiation': [
    { id: '2681_1', input: `base=2, exp=10, mod=1000`, expected_output: `24`, is_hidden: false },
    { id: '2681_2', input: `base=3, exp=5, mod=7`, expected_output: `5`, is_hidden: true },
    { id: '2681_3', input: `base=2, exp=0, mod=5`, expected_output: `1`, is_hidden: true }
  ],
  'sieve-of-eratosthenes': [
    { id: '2682_1', input: `n = 20`, expected_output: `[2,3,5,7,11,13,17,19]`, is_hidden: false },
    { id: '2682_2', input: `n = 2`, expected_output: `[2]`, is_hidden: true },
    { id: '2682_3', input: `n = 10`, expected_output: `[2,3,5,7]`, is_hidden: true }
  ],
  'prime-factorization': [
    { id: '2683_1', input: `n = 360`, expected_output: `{2:3, 3:2, 5:1}`, is_hidden: false },
    { id: '2683_2', input: `n = 13`, expected_output: `{13:1}`, is_hidden: true },
    { id: '2683_3', input: `n = 100`, expected_output: `{2:2, 5:2}`, is_hidden: true }
  ],
  'extended-gcd': [
    { id: '2684_1', input: `a=35, b=15`, expected_output: `5`, is_hidden: false },
    { id: '2684_2', input: `a=30, b=20`, expected_output: `10`, is_hidden: true },
    { id: '2684_3', input: `a=7, b=13`, expected_output: `1`, is_hidden: true }
  ],
  'modular-inverse': [
    { id: '2685_1', input: `a=3, m=11`, expected_output: `4`, is_hidden: false },
    { id: '2685_2', input: `a=10, m=7`, expected_output: `5`, is_hidden: true },
    { id: '2685_3', input: `a=2, m=5`, expected_output: `3`, is_hidden: true }
  ],
  'chinese-remainder-theorem': [
    { id: '2686_1', input: `[2,3,2],[3,5,7]`, expected_output: `23`, is_hidden: false },
    { id: '2686_2', input: `[1,2],[3,5]`, expected_output: `7`, is_hidden: true },
    { id: '2686_3', input: `[2,3],[5,7]`, expected_output: `17`, is_hidden: true }
  ],
  'eulers-totient-function': [
    { id: '2687_1', input: `n = 12`, expected_output: `4`, is_hidden: false },
    { id: '2687_2', input: `n = 7`, expected_output: `6`, is_hidden: true },
    { id: '2687_3', input: `n = 1`, expected_output: `1`, is_hidden: true }
  ],
  'pollard-rho-factorization': [
    { id: '2688_1', input: `n = 8051`, expected_output: `[83,97]`, is_hidden: false },
    { id: '2688_2', input: `n = 10403`, expected_output: `[101,103]`, is_hidden: true },
    { id: '2688_3', input: `n = 15`, expected_output: `[3,5]`, is_hidden: true }
  ],
  'wilson-prime-check': [
    { id: '2689_1', input: `p = 5`, expected_output: `true`, is_hidden: false },
    { id: '2689_2', input: `p = 7`, expected_output: `false`, is_hidden: true },
    { id: '2689_3', input: `p = 563`, expected_output: `true`, is_hidden: true }
  ],
  'mobius-function': [
    { id: '2690_1', input: `n = 10`, expected_output: `[0,1,-1,-1,0,-1,1,-1,0,0,1]`, is_hidden: false },
    { id: '2690_2', input: `n = 5`, expected_output: `[0,1,-1,-1,0,-1]`, is_hidden: true },
    { id: '2690_3', input: `n = 1`, expected_output: `[0,1]`, is_hidden: true }
  ],
  'nim-game': [
    { id: '2691_1', input: `n = 4`, expected_output: `false`, is_hidden: false },
    { id: '2691_2', input: `n = 5`, expected_output: `true`, is_hidden: true },
    { id: '2691_3', input: `n = 1`, expected_output: `true`, is_hidden: true }
  ],
  'stone-game': [
    { id: '2692_1', input: `[5,3,4,5]`, expected_output: `true`, is_hidden: false },
    { id: '2692_2', input: `[3,7,2,3]`, expected_output: `true`, is_hidden: true },
    { id: '2692_3', input: `[1,1]`, expected_output: `false`, is_hidden: true }
  ],
  'can-win-game': [
    { id: '2693_1', input: `3, 4`, expected_output: `false`, is_hidden: false },
    { id: '2693_2', input: `3, 5`, expected_output: `true`, is_hidden: true },
    { id: '2693_3', input: `1, 1`, expected_output: `true`, is_hidden: true }
  ],
  'divisor-game': [
    { id: '2694_1', input: `n = 2`, expected_output: `true`, is_hidden: false },
    { id: '2694_2', input: `n = 3`, expected_output: `false`, is_hidden: true },
    { id: '2694_3', input: `n = 4`, expected_output: `true`, is_hidden: true }
  ],
  'predict-winner': [
    { id: '2695_1', input: `[1,5,2]`, expected_output: `false`, is_hidden: false },
    { id: '2695_2', input: `[1,5,33]`, expected_output: `true`, is_hidden: true },
    { id: '2695_3', input: `[1,1]`, expected_output: `true`, is_hidden: true }
  ],
  'nim-multiple-piles': [
    { id: '2696_1', input: `[3,4,5]`, expected_output: `true`, is_hidden: false },
    { id: '2696_2', input: `[1,2,3]`, expected_output: `false`, is_hidden: true },
    { id: '2696_3', input: `[1,1]`, expected_output: `false`, is_hidden: true }
  ],
  'sprague-grundy-theorem': [
    { id: '2697_1', input: `[2,3]`, expected_output: `true`, is_hidden: false },
    { id: '2697_2', input: `[1,1]`, expected_output: `false`, is_hidden: true },
    { id: '2697_3', input: `[1,2,3]`, expected_output: `true`, is_hidden: true }
  ],
  'optimal-strategy-game': [
    { id: '2698_1', input: `[5,3,7,10]`, expected_output: `15`, is_hidden: false },
    { id: '2698_2', input: `[8,15,3,7]`, expected_output: `22`, is_hidden: true },
    { id: '2698_3', input: `[1,1]`, expected_output: `1`, is_hidden: true }
  ],
  'game-nim-moves': [
    { id: '2699_1', input: `[3,4],[1,2]`, expected_output: `true`, is_hidden: false },
    { id: '2699_2', input: `[2,2],[1]`, expected_output: `false`, is_hidden: true },
    { id: '2699_3', input: `[1,1],[1]`, expected_output: `false`, is_hidden: true }
  ],
  'grundy-number-graph': [
    { id: '2700_1', input: `DAG 0->1,0->2,1->3,2->3`, expected_output: `2`, is_hidden: false },
    { id: '2700_2', input: `Chain 0->1->2`, expected_output: `2`, is_hidden: true },
    { id: '2700_3', input: `Single node`, expected_output: `0`, is_hidden: true }
  ],
  'misere-nim': [
    { id: '2701_1', input: `[1,1,1]`, expected_output: `true`, is_hidden: false },
    { id: '2701_2', input: `[1,2,3]`, expected_output: `false`, is_hidden: true },
    { id: '2701_3', input: `[1,1]`, expected_output: `false`, is_hidden: true }
  ],
  'wythoff-game': [
    { id: '2702_1', input: `3,5`, expected_output: `true`, is_hidden: false },
    { id: '2702_2', input: `1,2`, expected_output: `false`, is_hidden: true },
    { id: '2702_3', input: `0,0`, expected_output: `false`, is_hidden: true }
  ],
  'hackenbush': [
    { id: '2703_1', input: `2 blue edges`, expected_output: `2`, is_hidden: false },
    { id: '2703_2', input: `1 blue edge`, expected_output: `1`, is_hidden: true },
    { id: '2703_3', input: `1 red edge`, expected_output: `-1`, is_hidden: true }
  ],
  'chomp-game': [
    { id: '2704_1', input: `2,3`, expected_output: `true`, is_hidden: false },
    { id: '2704_2', input: `1,1`, expected_output: `false`, is_hidden: true },
    { id: '2704_3', input: `1,2`, expected_output: `true`, is_hidden: true }
  ],
  'green-hackenbush-tree': [
    { id: '2705_1', input: `Path 3 edges`, expected_output: `3`, is_hidden: false },
    { id: '2705_2', input: `Path 1 edge`, expected_output: `1`, is_hidden: true },
    { id: '2705_3', input: `Star 3 leaves`, expected_output: `1`, is_hidden: true }
  ],
  'single-number-bitmask': [
    { id: '2706_1', input: `[2,2,1]`, expected_output: `1`, is_hidden: false },
    { id: '2706_2', input: `[4,1,2,1,2]`, expected_output: `4`, is_hidden: true },
    { id: '2706_3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'power-set-bitmask': [
    { id: '2707_1', input: `[1,2,3]`, expected_output: `8`, is_hidden: false },
    { id: '2707_2', input: `[1]`, expected_output: `2`, is_hidden: true },
    { id: '2707_3', input: `[1,2]`, expected_output: `4`, is_hidden: true }
  ],
  'count-set-bits': [
    { id: '2708_1', input: `n = 11`, expected_output: `3`, is_hidden: false },
    { id: '2708_2', input: `n = 0`, expected_output: `0`, is_hidden: true },
    { id: '2708_3', input: `n = 7`, expected_output: `3`, is_hidden: true }
  ],
  'bitwise-and-range': [
    { id: '2709_1', input: `5,7`, expected_output: `4`, is_hidden: false },
    { id: '2709_2', input: `0,1`, expected_output: `0`, is_hidden: true },
    { id: '2709_3', input: `4,7`, expected_output: `4`, is_hidden: true }
  ],
  'power-of-two-bitmask': [
    { id: '2710_1', input: `16`, expected_output: `true`, is_hidden: false },
    { id: '2710_2', input: `1`, expected_output: `true`, is_hidden: true },
    { id: '2710_3', input: `0`, expected_output: `false`, is_hidden: true }
  ],
  'subset-sum-bitmask': [
    { id: '2711_1', input: `[3,34,4,12,5,2],9`, expected_output: `true`, is_hidden: false },
    { id: '2711_2', input: `[3,34,4,12,5,2],30`, expected_output: `false`, is_hidden: true },
    { id: '2711_3', input: `[1,2,3],6`, expected_output: `true`, is_hidden: true }
  ],
  'bitmask-dp-graph': [
    { id: '2712_1', input: `[[0,10,15],[10,0,20],[15,20,0]]`, expected_output: `45`, is_hidden: false },
    { id: '2712_2', input: `[[0,5],[5,0]]`, expected_output: `10`, is_hidden: true },
    { id: '2712_3', input: `[[0]]`, expected_output: `0`, is_hidden: true }
  ],
  'set-union-bitmask': [
    { id: '2713_1', input: `[5,3,7]`, expected_output: `7`, is_hidden: false },
    { id: '2713_2', input: `[1,2,4]`, expected_output: `3`, is_hidden: true },
    { id: '2713_3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'bitwise-operations-sim': [
    { id: '2714_1', input: `[1,2,3],AND`, expected_output: `0`, is_hidden: false },
    { id: '2714_2', input: `[5,3],XOR`, expected_output: `6`, is_hidden: true },
    { id: '2714_3', input: `[7,7],AND`, expected_output: `7`, is_hidden: true }
  ],
  'maximum-subset-xor': [
    { id: '2715_1', input: `[2,4,5]`, expected_output: `7`, is_hidden: false },
    { id: '2715_2', input: `[1,2,3]`, expected_output: `3`, is_hidden: true },
    { id: '2715_3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'shortest-path-bitmask': [
    { id: '2716_1', input: `simple grid`, expected_output: `8`, is_hidden: false },
    { id: '2716_2', input: `open grid`, expected_output: `3`, is_hidden: true },
    { id: '2716_3', input: `locked grid`, expected_output: `-1`, is_hidden: true }
  ],
  'tsp-bitmask-dp': [
    { id: '2717_1', input: `4 cities`, expected_output: `80`, is_hidden: false },
    { id: '2717_2', input: `3 cities`, expected_output: `10`, is_hidden: true },
    { id: '2717_3', input: `2 cities`, expected_output: `20`, is_hidden: true }
  ],
  'minimum-and-subset': [
    { id: '2718_1', input: `[3,5,7],2`, expected_output: `5`, is_hidden: false },
    { id: '2718_2', input: `[1,2,3,4],3`, expected_output: `0`, is_hidden: true },
    { id: '2718_3', input: `[7,7,7],2`, expected_output: `7`, is_hidden: true }
  ],
  'bitmask-trie-query': [
    { id: '2719_1', input: `[3,10,5,25,2,8],7`, expected_output: `30`, is_hidden: false },
    { id: '2719_2', input: `[1,2,3],7`, expected_output: `4`, is_hidden: true },
    { id: '2719_3', input: `[0],0`, expected_output: `0`, is_hidden: true }
  ],
  'state-compression-dp': [
    { id: '2720_1', input: `[[1,2,3],[4,5,6],[7,8,9]]`, expected_output: `15`, is_hidden: false },
    { id: '2720_2', input: `[[10,10],[10,10]]`, expected_output: `20`, is_hidden: true },
    { id: '2720_3', input: `[[1]]`, expected_output: `1`, is_hidden: true }
  ],
  'two-sum-sorted-mitm': [
    { id: '2721_1', input: `[1,2,3,4,5],9`, expected_output: `[4,5]`, is_hidden: false },
    { id: '2721_2', input: `[2,7,11,15],9`, expected_output: `[2,7]`, is_hidden: true },
    { id: '2721_3', input: `[1,2,3],4`, expected_output: `[1,3]`, is_hidden: true }
  ],
  '4sum-mitm': [
    { id: '2722_1', input: `[1,0,-1,0,-2,2],0`, expected_output: `3`, is_hidden: false },
    { id: '2722_2', input: `[2,2,2,2,2],8`, expected_output: `1`, is_hidden: true },
    { id: '2722_3', input: `[0,0,0,0],0`, expected_output: `1`, is_hidden: true }
  ],
  'split-array-equal-sum': [
    { id: '2723_1', input: `[1,2,3,4,5,5]`, expected_output: `true`, is_hidden: false },
    { id: '2723_2', input: `[1,2,3]`, expected_output: `false`, is_hidden: true },
    { id: '2723_3', input: `[1,1]`, expected_output: `true`, is_hidden: true }
  ],
  'count-pairs-sum-mitm': [
    { id: '2724_1', input: `[1,5,7,-1,5],6`, expected_output: `3`, is_hidden: false },
    { id: '2724_2', input: `[1,1,1,1],2`, expected_output: `6`, is_hidden: true },
    { id: '2724_3', input: `[1,2,3],4`, expected_output: `1`, is_hidden: true }
  ],
  'partition-equal-subsum': [
    { id: '2725_1', input: `[1,5,11,5]`, expected_output: `true`, is_hidden: false },
    { id: '2725_2', input: `[1,2,3,5]`, expected_output: `false`, is_hidden: true },
    { id: '2725_3', input: `[3,3,3,4,5]`, expected_output: `true`, is_hidden: true }
  ],
  'max-subset-sum-difference': [
    { id: '2726_1', input: `[1,6,11,5]`, expected_output: `1`, is_hidden: false },
    { id: '2726_2', input: `[1,2,3,4,5]`, expected_output: `1`, is_hidden: true },
    { id: '2726_3', input: `[1,1,1,1]`, expected_output: `0`, is_hidden: true }
  ],
  'count-subsets-sum-mitm': [
    { id: '2727_1', input: `[5,10,15,20,25],30`, expected_output: `2`, is_hidden: false },
    { id: '2727_2', input: `[1,1,1,1],2`, expected_output: `6`, is_hidden: true },
    { id: '2727_3', input: `[1,2,3],3`, expected_output: `2`, is_hidden: true }
  ],
  'two-sum-closest-mitm': [
    { id: '2728_1', input: `[1,3,5,7,9],12`, expected_output: `12`, is_hidden: false },
    { id: '2728_2', input: `[1,1,1,1],10`, expected_output: `2`, is_hidden: true },
    { id: '2728_3', input: `[1,2,3],3`, expected_output: `3`, is_hidden: true }
  ],
  '4sum-count-mitm': [
    { id: '2729_1', input: `[1,2],[-2,-1],[-1,2],[0,2]`, expected_output: `2`, is_hidden: false },
    { id: '2729_2', input: `[0],[0],[0],[0]`, expected_output: `1`, is_hidden: true },
    { id: '2729_3', input: `[1],[-1],[1],[-1]`, expected_output: `1`, is_hidden: true }
  ],
  'subset-product-mitm': [
    { id: '2730_1', input: `[2,4,5,3],12`, expected_output: `8`, is_hidden: false },
    { id: '2730_2', input: `[1,2,3],6`, expected_output: `7`, is_hidden: true },
    { id: '2730_3', input: `[2,3,4],6`, expected_output: `4`, is_hidden: true }
  ],
  'maximize-subset-xor-mitm': [
    { id: '2731_1', input: `[2,4,5]`, expected_output: `7`, is_hidden: false },
    { id: '2731_2', input: `[1,2,3,4,5,6,7]`, expected_output: `7`, is_hidden: true },
    { id: '2731_3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'count-zero-sum-subsets': [
    { id: '2732_1', input: `[2,-2,3,0,-3]`, expected_output: `5`, is_hidden: false },
    { id: '2732_2', input: `[0,0,0]`, expected_output: `7`, is_hidden: true },
    { id: '2732_3', input: `[1,-1]`, expected_output: `1`, is_hidden: true }
  ],
  'closest-subset-sum-mitm': [
    { id: '2733_1', input: `[3,7,8,2],15`, expected_output: `15`, is_hidden: false },
    { id: '2733_2', input: `[1,2,3],10`, expected_output: `6`, is_hidden: true },
    { id: '2733_3', input: `[5,5],10`, expected_output: `10`, is_hidden: true }
  ],
  'split-array-three-ways': [
    { id: '2734_1', input: `[0,2,1,-3,1,-1,2]`, expected_output: `true`, is_hidden: false },
    { id: '2734_2', input: `[1,2,3,4]`, expected_output: `false`, is_hidden: true },
    { id: '2734_3', input: `[0,0,0]`, expected_output: `true`, is_hidden: true }
  ],
  'max-sum-k-partitions': [
    { id: '2735_1', input: `[1,2,3,4,5],2`, expected_output: `9`, is_hidden: false },
    { id: '2735_2', input: `[3,3,3,3],4`, expected_output: `3`, is_hidden: true },
    { id: '2735_3', input: `[1,1,1,1],2`, expected_output: `2`, is_hidden: true }
  ],
  'range-frequency-query': [
    { id: '2736_1', input: `[2,2,1,1,2],[0,3,2]`, expected_output: `2`, is_hidden: false },
    { id: '2736_2', input: `[1,1,1,2,2],[0,4,1]`, expected_output: `3`, is_hidden: true },
    { id: '2736_3', input: `[1,2,3],[0,2,4]`, expected_output: `0`, is_hidden: true }
  ],
  'distinct-elements-range': [
    { id: '2737_1', input: `[1,2,1,3,4,2,1],[0,4]`, expected_output: `4`, is_hidden: false },
    { id: '2737_2', input: `[1,2,1,3,4,2,1],[2,6]`, expected_output: `4`, is_hidden: true },
    { id: '2737_3', input: `[1,1,1],[0,2]`, expected_output: `1`, is_hidden: true }
  ],
  'xor-of-range': [
    { id: '2738_1', input: `[1,2,3,4,5],[0,2]`, expected_output: `0`, is_hidden: false },
    { id: '2738_2', input: `[1,2,3,4,5],[1,3]`, expected_output: `4`, is_hidden: true },
    { id: '2738_3', input: `[5],[0,0]`, expected_output: `5`, is_hidden: true }
  ],
  'range-sum-query-offline': [
    { id: '2739_1', input: `[1,2,3,4,5],[0,2]`, expected_output: `6`, is_hidden: false },
    { id: '2739_2', input: `[1,2,3,4,5],[1,4]`, expected_output: `14`, is_hidden: true },
    { id: '2739_3', input: `[5,5,5],[0,2]`, expected_output: `15`, is_hidden: true }
  ],
  'most-frequent-element-range': [
    { id: '2740_1', input: `[1,1,2,2,1],[0,4]`, expected_output: `1`, is_hidden: false },
    { id: '2740_2', input: `[1,1,2,2,1],[1,3]`, expected_output: `2`, is_hidden: true },
    { id: '2740_3', input: `[1,2,3],[0,2]`, expected_output: `1`, is_hidden: true }
  ],
  'count-inversions-range': [
    { id: '2742_1', input: `[2,4,3,1,5],[0,4]`, expected_output: `5`, is_hidden: false },
    { id: '2742_2', input: `[2,4,3,1,5],[1,3]`, expected_output: `2`, is_hidden: true },
    { id: '2742_3', input: `[1,2,3],[0,2]`, expected_output: `0`, is_hidden: true }
  ],
  'different-values-range': [
    { id: '2743_1', input: `[1,2,1,3,2,1],[0,5]`, expected_output: `3`, is_hidden: false },
    { id: '2743_2', input: `[1,2,1,3,2,1],[2,4]`, expected_output: `3`, is_hidden: true },
    { id: '2743_3', input: `[1,1,1],[0,2]`, expected_output: `1`, is_hidden: true }
  ],
  'subarray-sum-k-queries': [
    { id: '2744_1', input: `[1,2,3,1,1],3,[0,4]`, expected_output: `3`, is_hidden: false },
    { id: '2744_2', input: `[1,2,3,1,1],3,[1,3]`, expected_output: `1`, is_hidden: true },
    { id: '2744_3', input: `[1,1,1],2,[0,2]`, expected_output: `2`, is_hidden: true }
  ],
  'kth-smallest-range': [
    { id: '2745_1', input: `[3,1,4,1,5,9],3,[0,5]`, expected_output: `3`, is_hidden: false },
    { id: '2745_2', input: `[1,2,3,4,5],2,[0,4]`, expected_output: `2`, is_hidden: true },
    { id: '2745_3', input: `[5,4,3,2,1],1,[0,4]`, expected_output: `1`, is_hidden: true }
  ],
  'majority-element-range': [
    { id: '2746_1', input: `[2,1,2,2,1,2],[0,5]`, expected_output: `2`, is_hidden: false },
    { id: '2746_2', input: `[2,1,2,2,1,2],[1,4]`, expected_output: `-1`, is_hidden: true },
    { id: '2746_3', input: `[1,1,2],[0,2]`, expected_output: `1`, is_hidden: true }
  ],
  'count-zero-elements-range': [
    { id: '2748_1', input: `[1,0,3,0,5,0],[0,5]`, expected_output: `3`, is_hidden: false },
    { id: '2748_2', input: `[1,0,3,0,5,0],[1,4]`, expected_output: `2`, is_hidden: true },
    { id: '2748_3', input: `[0,0,0],[0,2]`, expected_output: `3`, is_hidden: true }
  ],
  'range-max-frequency': [
    { id: '2749_1', input: `[1,1,2,2,2,3],[0,5]`, expected_output: `3`, is_hidden: false },
    { id: '2749_2', input: `[1,1,2,2,2,3],[1,4]`, expected_output: `3`, is_hidden: true },
    { id: '2749_3', input: `[1,2,3],[0,2]`, expected_output: `1`, is_hidden: true }
  ],
  'range-bitwise-and-queries': [
    { id: '2750_1', input: `[1,2,3,4,5],[0,4]`, expected_output: `0`, is_hidden: false },
    { id: '2750_2', input: `[1,2,3,4,5],[1,3]`, expected_output: `0`, is_hidden: true },
    { id: '2750_3', input: `[7,7,7],[0,2]`, expected_output: `7`, is_hidden: true }
  ],
  'range-sum-query-immutable-sqrt': [
    { id: '2751_1', input: `[-2,0,3,-5,2,-1],[0,2]`, expected_output: `1`, is_hidden: false },
    { id: '2751_2', input: `[-2,0,3,-5,2,-1],[2,5]`, expected_output: `-1`, is_hidden: true },
    { id: '2751_3', input: `[1,2,3],[0,2]`, expected_output: `6`, is_hidden: true }
  ],
  'range-minimum-query-sqrt': [
    { id: '2752_1', input: `[2,1,5,3,4,6],[0,3]`, expected_output: `1`, is_hidden: false },
    { id: '2752_2', input: `[2,1,5,3,4,6],[2,5]`, expected_output: `3`, is_hidden: true },
    { id: '2752_3', input: `[5,4,3,2,1],[0,4]`, expected_output: `1`, is_hidden: true }
  ],
  'range-xor-query-sqrt': [
    { id: '2753_1', input: `[1,2,3,4,5],[0,2]`, expected_output: `0`, is_hidden: false },
    { id: '2753_2', input: `[1,2,3,4,5],[1,4]`, expected_output: `4`, is_hidden: true },
    { id: '2753_3', input: `[5],[0,0]`, expected_output: `5`, is_hidden: true }
  ],
  'count-elements-range': [
    { id: '2754_1', input: `[2,3,1,4,2,5],[0,3,2]`, expected_output: `2`, is_hidden: false },
    { id: '2754_2', input: `[1,1,1,1],[0,3,1]`, expected_output: `4`, is_hidden: true },
    { id: '2754_3', input: `[1,2,3],[0,2,4]`, expected_output: `0`, is_hidden: true }
  ],
  'block-range-sum': [
    { id: '2755_1', input: `[1,2,3,4,5,6]`, expected_output: `[3,7,11]`, is_hidden: false },
    { id: '2755_2', input: `[5,5,5,5]`, expected_output: `[10,10]`, is_hidden: true },
    { id: '2755_3', input: `[1,2,3]`, expected_output: `[1,2,3]`, is_hidden: true }
  ],
  'range-update-point-query': [
    { id: '2756_1', input: `[0,0,0,0,0],[0,3,2],[2,4,3],query 3`, expected_output: `5`, is_hidden: false },
    { id: '2756_2', input: `[1,1,1,1,1],[0,4,1],query 2`, expected_output: `2`, is_hidden: true },
    { id: '2756_3', input: `[0,0,0],[0,2,5],query 1`, expected_output: `5`, is_hidden: true }
  ],
  'point-update-range-query': [
    { id: '2757_1', input: `[1,2,3,4,5],[2,10],[0,4]`, expected_output: `22`, is_hidden: false },
    { id: '2757_2', input: `[5,5,5,5],[0,0],[0,3]`, expected_output: `15`, is_hidden: true },
    { id: '2757_3', input: `[1,2,3],[1,10],[0,2]`, expected_output: `14`, is_hidden: true }
  ],
  'range-gcd-query-sqrt': [
    { id: '2758_1', input: `[4,6,8,12,16],[0,2]`, expected_output: `2`, is_hidden: false },
    { id: '2758_2', input: `[4,6,8,12,16],[1,4]`, expected_output: `2`, is_hidden: true },
    { id: '2758_3', input: `[3,6,9],[0,2]`, expected_output: `3`, is_hidden: true }
  ],
  'distribute-candies-sqrt': [
    { id: '2759_1', input: `[1,2,3,4,5],[0,2,4]`, expected_output: `6`, is_hidden: false },
    { id: '2759_2', input: `[5,5,5],[0,2,10]`, expected_output: `15`, is_hidden: true },
    { id: '2759_3', input: `[1,1,1],[0,2,3]`, expected_output: `3`, is_hidden: true }
  ],
  'range-majority-element': [
    { id: '2760_1', input: `[2,1,2,2,1,2],[0,5]`, expected_output: `2`, is_hidden: false },
    { id: '2760_2', input: `[2,1,2,2,1,2],[1,4]`, expected_output: `-1`, is_hidden: true },
    { id: '2760_3', input: `[1,1,2],[0,2]`, expected_output: `1`, is_hidden: true }
  ],
  'lazy-range-addition': [
    { id: '2761_1', input: `[0,0,0,0,0,0],[0,2,5],[3,5,3]`, expected_output: `[5,5,5,3,3,3]`, is_hidden: false },
    { id: '2761_2', input: `[0,0,0,0,0],[0,4,10]`, expected_output: `[10,10,10,10,10]`, is_hidden: true },
    { id: '2761_3', input: `[1,1,1],[0,2,5]`, expected_output: `[6,6,6]`, is_hidden: true }
  ],
  'range-mode-sqrt': [
    { id: '2762_1', input: `[1,2,1,3,1,2],[0,5]`, expected_output: `1`, is_hidden: false },
    { id: '2762_2', input: `[1,2,1,3,1,2],[2,4]`, expected_output: `1`, is_hidden: true },
    { id: '2762_3', input: `[1,2,3],[0,2]`, expected_output: `1`, is_hidden: true }
  ],
  'matrix-range-sum': [
    { id: '2763_1', input: `[[1,2,3],[4,5,6],[7,8,9]],[0,0,2,2]`, expected_output: `45`, is_hidden: false },
    { id: '2763_2', input: `[[1,2],[3,4]],[0,0,0,0]`, expected_output: `1`, is_hidden: true },
    { id: '2763_3', input: `[[5]],[0,0,0,0]`, expected_output: `5`, is_hidden: true }
  ],
  'range-product-query': [
    { id: '2764_1', input: `[2,3,4,5],[0,2]`, expected_output: `24`, is_hidden: false },
    { id: '2764_2', input: `[2,3,4,5],[1,3]`, expected_output: `60`, is_hidden: true },
    { id: '2764_3', input: `[1,2,3],[0,2]`, expected_output: `6`, is_hidden: true }
  ],
  'sqrt-rebuild': [
    { id: '2765_1', input: `insert 10 at 3 in [1-9]`, expected_output: `[1,2,3,10,4,5,6,7,8,9]`, is_hidden: false },
    { id: '2765_2', input: `delete 5 in [1,2,3,4,5]`, expected_output: `[1,2,3,4]`, is_hidden: true },
    { id: '2765_3', input: `insert 0 at 0 in [1,2,3]`, expected_output: `[0,1,2,3]`, is_hidden: true }
  ],
  'tree-path-sum-hld': [
    { id: '2766_1', input: `5 nodes path 1-4`, expected_output: `sum`, is_hidden: false },
    { id: '2766_2', input: `3 nodes path 0-2`, expected_output: `sum`, is_hidden: true },
    { id: '2766_3', input: `1 node`, expected_output: `value`, is_hidden: true }
  ],
  'tree-path-max-hld': [
    { id: '2767_1', input: `[3,1,4,1,5], path 0-4`, expected_output: `5`, is_hidden: false },
    { id: '2767_2', input: `[3,1,4,1,5], path 1-3`, expected_output: `4`, is_hidden: true },
    { id: '2767_3', input: `[1], path 0-0`, expected_output: `1`, is_hidden: true }
  ],
  'tree-path-min-hld': [
    { id: '2768_1', input: `[5,3,1,4,2], path 0-4`, expected_output: `1`, is_hidden: false },
    { id: '2768_2', input: `[5,3,1,4,2], path 2-4`, expected_output: `1`, is_hidden: true },
    { id: '2768_3', input: `[7], path 0-0`, expected_output: `7`, is_hidden: true }
  ],
  'tree-path-update-hld': [
    { id: '2769_1', input: `[1,1,1,1,1], update 0-3 by 2, query 2`, expected_output: `3`, is_hidden: false },
    { id: '2769_2', input: `[0,0,0], update 0-2 by 5, query 1`, expected_output: `5`, is_hidden: true },
    { id: '2769_3', input: `[1,1], update 0-1 by 1, query 0`, expected_output: `2`, is_hidden: true }
  ],
  'tree-path-xor-hld': [
    { id: '2770_1', input: `[1,2,3,4,5], path 0-4`, expected_output: `1`, is_hidden: false },
    { id: '2770_2', input: `[1,2,3,4,5], path 1-3`, expected_output: `4`, is_hidden: true },
    { id: '2770_3', input: `[5], path 0-0`, expected_output: `5`, is_hidden: true }
  ],
  'lca-via-hld': [
    { id: '2771_1', input: `binary tree LCA`, expected_output: `node`, is_hidden: false },
    { id: '2771_2', input: `chain LCA`, expected_output: `root`, is_hidden: true },
    { id: '2771_3', input: `star LCA`, expected_output: `root`, is_hidden: true }
  ],
  'kth-ancestor-path': [
    { id: '2772_1', input: `k=1 on path`, expected_output: `parent`, is_hidden: false },
    { id: '2772_2', input: `k=2 on path`, expected_output: `grandparent`, is_hidden: true },
    { id: '2772_3', input: `k=100 on short path`, expected_output: `root`, is_hidden: true }
  ],
  'tree-path-count-hld': [
    { id: '2773_1', input: `path between leaves`, expected_output: `count`, is_hidden: false },
    { id: '2773_2', input: `path to root`, expected_output: `depth`, is_hidden: true },
    { id: '2773_3', input: `same node`, expected_output: `1`, is_hidden: true }
  ],
  'path-product-query': [
    { id: '2774_1', input: `product path`, expected_output: `mod result`, is_hidden: false },
    { id: '2774_2', input: `single node product`, expected_output: `value`, is_hidden: true },
    { id: '2774_3', input: `empty product`, expected_output: `1`, is_hidden: true }
  ],
  'path-aggregate-query': [
    { id: '2775_1', input: `sum path`, expected_output: `sum`, is_hidden: false },
    { id: '2775_2', input: `max path`, expected_output: `max`, is_hidden: true },
    { id: '2775_3', input: `min path`, expected_output: `min`, is_hidden: true }
  ],
  'edge-weight-query': [
    { id: '2776_1', input: `sum edges`, expected_output: `sum`, is_hidden: false },
    { id: '2776_2', input: `max edges`, expected_output: `max`, is_hidden: true },
    { id: '2776_3', input: `min edges`, expected_output: `min`, is_hidden: true }
  ],
  'heavy-path-query': [
    { id: '2777_1', input: `longest heavy path`, expected_output: `length`, is_hidden: false },
    { id: '2777_2', input: `number of heavy paths`, expected_output: `count`, is_hidden: true },
    { id: '2777_3', input: `light edges on path`, expected_output: `count`, is_hidden: true }
  ],
  'dynamic-tree-path': [
    { id: '2778_1', input: `link`, expected_output: `merged`, is_hidden: false },
    { id: '2778_2', input: `cut`, expected_output: `split`, is_hidden: true },
    { id: '2778_3', input: `path query after`, expected_output: `result`, is_hidden: true }
  ],
  'path-distinct-count': [
    { id: '2779_1', input: `all distinct`, expected_output: `count`, is_hidden: false },
    { id: '2779_2', input: `all same`, expected_output: `1`, is_hidden: true },
    { id: '2779_3', input: `mixed`, expected_output: `count`, is_hidden: true }
  ],
  'path-frequency-query': [
    { id: '2780_1', input: `frequency query`, expected_output: `count`, is_hidden: false },
    { id: '2780_2', input: `absent value`, expected_output: `0`, is_hidden: true },
    { id: '2780_3', input: `all same value`, expected_output: `path length`, is_hidden: true }
  ],
  'centroid-of-tree': [
    { id: '2781_1', input: `star tree`, expected_output: `center`, is_hidden: false },
    { id: '2781_2', input: `chain 5`, expected_output: `middle`, is_hidden: true },
    { id: '2781_3', input: `balanced binary`, expected_output: `root`, is_hidden: true }
  ],
  'tree-diameter-centroid': [
    { id: '2782_1', input: `chain 5`, expected_output: `4`, is_hidden: false },
    { id: '2782_2', input: `star 4`, expected_output: `2`, is_hidden: true },
    { id: '2782_3', input: `balanced`, expected_output: `4`, is_hidden: true }
  ],
  'distance-query-centroid': [
    { id: '2783_1', input: `distance query`, expected_output: `5`, is_hidden: false },
    { id: '2783_2', input: `same node`, expected_output: `0`, is_hidden: true },
    { id: '2783_3', input: `adjacent nodes`, expected_output: `1`, is_hidden: true }
  ],
  'count-nodes-distance': [
    { id: '2784_1', input: `k=0`, expected_output: `1`, is_hidden: false },
    { id: '2784_2', input: `k=1`, expected_output: `degree`, is_hidden: true },
    { id: '2784_3', input: `k=large`, expected_output: `0`, is_hidden: true }
  ],
  'path-count-k-centroid': [
    { id: '2785_1', input: `k=1`, expected_output: `n-1`, is_hidden: false },
    { id: '2785_2', input: `k=diameter`, expected_output: `1`, is_hidden: true },
    { id: '2785_3', input: `k>n`, expected_output: `0`, is_hidden: true }
  ],
  'max-distance-pair': [
    { id: '2786_1', input: `chain`, expected_output: `max distance`, is_hidden: false },
    { id: '2786_2', input: `star`, expected_output: `max distance`, is_hidden: true },
    { id: '2786_3', input: `balanced`, expected_output: `diameter`, is_hidden: true }
  ],
  'color-count-paths': [
    { id: '2787_1', input: `all different`, expected_output: `max paths`, is_hidden: false },
    { id: '2787_2', input: `all same`, expected_output: `0`, is_hidden: true },
    { id: '2787_3', input: `mixed`, expected_output: `count`, is_hidden: true }
  ],
  'kth-ancestor-centroid': [
    { id: '2788_1', input: `k=1`, expected_output: `parent`, is_hidden: false },
    { id: '2788_2', input: `k=depth`, expected_output: `root`, is_hidden: true },
    { id: '2788_3', input: `k>depth`, expected_output: `root`, is_hidden: true }
  ],
  'min-edge-path': [
    { id: '2789_1', input: `min edge query`, expected_output: `weight`, is_hidden: false },
    { id: '2789_2', input: `single edge`, expected_output: `weight`, is_hidden: true },
    { id: '2789_3', input: `all same weight`, expected_output: `weight`, is_hidden: true }
  ],
  'path-sum-k-centroid': [
    { id: '2790_1', input: `sum paths`, expected_output: `count`, is_hidden: false },
    { id: '2790_2', input: `k=0`, expected_output: `count`, is_hidden: true },
    { id: '2790_3', input: `negative values`, expected_output: `count`, is_hidden: true }
  ],
  'closest-leaf-query': [
    { id: '2791_1', input: `closest leaf`, expected_output: `leaf`, is_hidden: false },
    { id: '2791_2', input: `from root`, expected_output: `nearest leaf`, is_hidden: true },
    { id: '2791_3', input: `from leaf`, expected_output: `itself`, is_hidden: true }
  ],
  'subtree-size-removal': [
    { id: '2792_1', input: `remove leaf`, expected_output: `sizes`, is_hidden: false },
    { id: '2792_2', input: `remove centroid`, expected_output: `sizes`, is_hidden: true },
    { id: '2792_3', input: `remove root`, expected_output: `sizes`, is_hidden: true }
  ],
  'colorful-path-count': [
    { id: '2793_1', input: `all different`, expected_output: `paths`, is_hidden: false },
    { id: '2793_2', input: `all same`, expected_output: `0`, is_hidden: true },
    { id: '2793_3', input: `mixed`, expected_output: `count`, is_hidden: true }
  ],
  'max-xor-path-centroid': [
    { id: '2794_1', input: `max XOR`, expected_output: `value`, is_hidden: false },
    { id: '2794_2', input: `single node`, expected_output: `0`, is_hidden: true },
    { id: '2794_3', input: `chain`, expected_output: `max XOR`, is_hidden: true }
  ],
  'path-median-query': [
    { id: '2795_1', input: `median query`, expected_output: `median`, is_hidden: false },
    { id: '2795_2', input: `single node`, expected_output: `value`, is_hidden: true },
    { id: '2795_3', input: `even length`, expected_output: `lower median`, is_hidden: true }
  ],
  'longest-increasing-subsequence-adv': [
    { id: '2796_1', input: `[10,9,2,5,3,7,101,18]`, expected_output: `4`, is_hidden: false },
    { id: '2796_2', input: `[0,1,0,3,2,3]`, expected_output: `4`, is_hidden: true },
    { id: '2796_3', input: `[7,7,7,7]`, expected_output: `1`, is_hidden: true }
  ],
  'edit-distance-adv': [
    { id: '2797_1', input: `horse, ros`, expected_output: `3`, is_hidden: false },
    { id: '2797_2', input: `intention, execution`, expected_output: `5`, is_hidden: true },
    { id: '2797_3', input: `abc, abc`, expected_output: `0`, is_hidden: true }
  ],
  'longest-common-subsequence-adv': [
    { id: '2798_1', input: `abcde, ace`, expected_output: `3`, is_hidden: false },
    { id: '2798_2', input: `abc, def`, expected_output: `0`, is_hidden: true },
    { id: '2798_3', input: `abc, abc`, expected_output: `3`, is_hidden: true }
  ],
  'coin-change-adv': [
    { id: '2799_1', input: `[1,5,10,25],30`, expected_output: `2`, is_hidden: false },
    { id: '2799_2', input: `[2],3`, expected_output: `-1`, is_hidden: true },
    { id: '2799_3', input: `[1],0`, expected_output: `0`, is_hidden: true }
  ],
  'knapsack-01-adv': [
    { id: '2800_1', input: `[1,2,3],[6,10,12],5`, expected_output: `22`, is_hidden: false },
    { id: '2800_2', input: `[1,2,3],[6,10,12],0`, expected_output: `0`, is_hidden: true },
    { id: '2800_3', input: `[5],[10],5`, expected_output: `10`, is_hidden: true }
  ],
  'digit-dp-count': [
    { id: '2801_1', input: `100,1`, expected_output: `19`, is_hidden: false },
    { id: '2801_2', input: `20,3`, expected_output: `2`, is_hidden: true },
    { id: '2801_3', input: `10,5`, expected_output: `1`, is_hidden: true }
  ],
  'bitmask-dp-tsp': [
    { id: '2802_1', input: `[[0,10,15],[10,0,20],[15,20,0]]`, expected_output: `45`, is_hidden: false },
    { id: '2802_2', input: `[[0,5],[5,0]]`, expected_output: `10`, is_hidden: true },
    { id: '2802_3', input: `[[0]]`, expected_output: `0`, is_hidden: true }
  ],
  'matrix-chain-mult': [
    { id: '2803_1', input: `[1,2,3,4]`, expected_output: `18`, is_hidden: false },
    { id: '2803_2', input: `[40,20,30,10,30]`, expected_output: `26000`, is_hidden: true },
    { id: '2803_3', input: `[10,20]`, expected_output: `0`, is_hidden: true }
  ],
  'longest-palindromic-subseq': [
    { id: '2804_1', input: `"bbbab"`, expected_output: `4`, is_hidden: false },
    { id: '2804_2', input: `"cbbd"`, expected_output: `2`, is_hidden: true },
    { id: '2804_3', input: `"a"`, expected_output: `1`, is_hidden: true }
  ],
  'burst-balloons': [
    { id: '2806_1', input: `[3,1,5,8]`, expected_output: `167`, is_hidden: false },
    { id: '2806_2', input: `[1,5]`, expected_output: `10`, is_hidden: true },
    { id: '2806_3', input: `[1]`, expected_output: `1`, is_hidden: true }
  ],
  'regex-matching-adv': [
    { id: '2807_1', input: `"aa","a*"`, expected_output: `true`, is_hidden: false },
    { id: '2807_2', input: `"ab",".*"`, expected_output: `true`, is_hidden: true },
    { id: '2807_3', input: `"","a*"`, expected_output: `true`, is_hidden: true }
  ],
  'wildcard-match-adv': [
    { id: '2808_1', input: `"adceb","*a*b"`, expected_output: `true`, is_hidden: false },
    { id: '2808_2', input: `"acdcb","a*c?b"`, expected_output: `false`, is_hidden: true },
    { id: '2808_3', input: `""`, expected_output: `true`, is_hidden: true }
  ],
  'stone-game-iii': [
    { id: '2809_1', input: `[1,2,3,7]`, expected_output: `Second`, is_hidden: false },
    { id: '2809_2', input: `[1,2,3,-9]`, expected_output: `First`, is_hidden: true },
    { id: '2809_3', input: `[1,1,1]`, expected_output: `Tie`, is_hidden: true }
  ],
  'number-of-digit-one': [
    { id: '2810_1', input: `n = 13`, expected_output: `6`, is_hidden: false },
    { id: '2810_2', input: `n = 0`, expected_output: `0`, is_hidden: true },
    { id: '2810_3', input: `n = 100`, expected_output: `21`, is_hidden: true }
  ],
  'scc-kosaraju': [
    { id: '2811_1', input: `3 SCCs`, expected_output: `3`, is_hidden: false },
    { id: '2811_2', input: `DAG 4 nodes`, expected_output: `4`, is_hidden: true },
    { id: '2811_3', input: `cycle`, expected_output: `1`, is_hidden: true }
  ],
  'bridges-graph': [
    { id: '2812_1', input: `2 bridges`, expected_output: `2`, is_hidden: false },
    { id: '2812_2', input: `complete`, expected_output: `0`, is_hidden: true },
    { id: '2812_3', input: `tree edges`, expected_output: `n-1`, is_hidden: true }
  ],
  'topological-sort-advanced': [
    { id: '2814_1', input: `DAG`, expected_output: `ordering`, is_hidden: false },
    { id: '2814_2', input: `cycle`, expected_output: `impossible`, is_hidden: true },
    { id: '2814_3', input: `single node`, expected_output: `[0]`, is_hidden: true }
  ],
  'shortest-path-dag': [
    { id: '2815_1', input: `weighted DAG`, expected_output: `distances`, is_hidden: false },
    { id: '2815_2', input: `unweighted`, expected_output: `distances`, is_hidden: true },
    { id: '2815_3', input: `single node`, expected_output: `0`, is_hidden: true }
  ],
  'tarjan-scc': [
    { id: '2816_1', input: `SCCs`, expected_output: `list`, is_hidden: false },
    { id: '2816_2', input: `DAG`, expected_output: `n`, is_hidden: true },
    { id: '2816_3', input: `cycle`, expected_output: `1`, is_hidden: true }
  ],
  'two-sat': [
    { id: '2817_1', input: `satisfiable`, expected_output: `true`, is_hidden: false },
    { id: '2817_2', input: `unsatisfiable`, expected_output: `false`, is_hidden: true },
    { id: '2817_3', input: `trivial`, expected_output: `true`, is_hidden: true }
  ],
  'mst-kruskal': [
    { id: '2818_1', input: `MST weight`, expected_output: `weight`, is_hidden: false },
    { id: '2818_2', input: `complete`, expected_output: `weight`, is_hidden: true },
    { id: '2818_3', input: `tree`, expected_output: `sum`, is_hidden: true }
  ],
  'mst-prim': [
    { id: '2819_1', input: `MST weight`, expected_output: `weight`, is_hidden: false },
    { id: '2819_2', input: `single`, expected_output: `0`, is_hidden: true },
    { id: '2819_3', input: `chain`, expected_output: `sum`, is_hidden: true }
  ],
  'bellman-ford': [
    { id: '2820_1', input: `no negative`, expected_output: `distances`, is_hidden: false },
    { id: '2820_2', input: `negative cycle`, expected_output: `detected`, is_hidden: true },
    { id: '2820_3', input: `single node`, expected_output: `0`, is_hidden: true }
  ],
  'floyd-warshall': [
    { id: '2821_1', input: `all pairs`, expected_output: `matrix`, is_hidden: false },
    { id: '2821_2', input: `negative edges`, expected_output: `matrix`, is_hidden: true },
    { id: '2821_3', input: `single node`, expected_output: `[[0]]`, is_hidden: true }
  ],
  'condensation-dag': [
    { id: '2822_1', input: `graph`, expected_output: `DAG`, is_hidden: false },
    { id: '2822_2', input: `DAG`, expected_output: `same`, is_hidden: true },
    { id: '2822_3', input: `cycle`, expected_output: `compressed`, is_hidden: true }
  ],
  'min-cost-max-flow': [
    { id: '2823_1', input: `flow network`, expected_output: `result`, is_hidden: false },
    { id: '2823_2', input: `no path`, expected_output: `0`, is_hidden: true },
    { id: '2823_3', input: `single edge`, expected_output: `min`, is_hidden: true }
  ],
  'edge-disconnect-min': [
    { id: '2824_1', input: `min cut`, expected_output: `value`, is_hidden: false },
    { id: '2824_2', input: `no path`, expected_output: `0`, is_hidden: true },
    { id: '2824_3', input: `single path`, expected_output: `1`, is_hidden: true }
  ],
  'negative-cycle-detect': [
    { id: '2825_1', input: `has cycle`, expected_output: `true`, is_hidden: false },
    { id: '2825_2', input: `no cycle`, expected_output: `false`, is_hidden: true },
    { id: '2825_3', input: `self loop negative`, expected_output: `true`, is_hidden: true }
  ],
  'binary-search-answer': [
    { id: '2826_1', input: `minimize max`, expected_output: `value`, is_hidden: false },
    { id: '2826_2', input: `feasibility`, expected_output: `boolean`, is_hidden: true },
    { id: '2826_3', input: `range`, expected_output: `optimal`, is_hidden: true }
  ],
  'two-pointers-technique': [
    { id: '2827_1', input: `two sum`, expected_output: `pair`, is_hidden: false },
    { id: '2827_2', input: `remove dups`, expected_output: `length`, is_hidden: true },
    { id: '2827_3', input: `merge sorted`, expected_output: `merged`, is_hidden: true }
  ],
  'prefix-sum-2d': [
    { id: '2829_1', input: `2D prefix`, expected_output: `matrix`, is_hidden: false },
    { id: '2829_2', input: `range sum`, expected_output: `value`, is_hidden: true },
    { id: '2829_3', input: `single cell`, expected_output: `value`, is_hidden: true }
  ],
  'cumulative-frequency': [
    { id: '2830_1', input: `freq query`, expected_output: `count`, is_hidden: false },
    { id: '2830_2', input: `range freq`, expected_output: `count`, is_hidden: true },
    { id: '2830_3', input: `unique freq`, expected_output: `count`, is_hidden: true }
  ],
  'fast-exponentiation': [
    { id: '2831_1', input: `2^10%1000`, expected_output: `24`, is_hidden: false },
    { id: '2831_2', input: `3^0%7`, expected_output: `1`, is_hidden: true },
    { id: '2831_3', input: `5^3%13`, expected_output: `8`, is_hidden: true }
  ],
  'bit-manipulation-tricks': [
    { id: '2832_1', input: `isolate`, expected_output: `result`, is_hidden: false },
    { id: '2832_2', input: `count`, expected_output: `bits`, is_hidden: true },
    { id: '2832_3', input: `check power`, expected_output: `boolean`, is_hidden: true }
  ],
  'coordinate-compression': [
    { id: '2833_1', input: `compress`, expected_output: `mapping`, is_hidden: false },
    { id: '2833_2', input: `query`, expected_output: `result`, is_hidden: true },
    { id: '2833_3', input: `large coords`, expected_output: `compressed`, is_hidden: true }
  ],
  'sweep-line': [
    { id: '2834_1', input: `max overlap`, expected_output: `count`, is_hidden: false },
    { id: '2834_2', input: `merge`, expected_output: `intervals`, is_hidden: true },
    { id: '2834_3', input: `point query`, expected_output: `count`, is_hidden: true }
  ],
  'union-find-pc': [
    { id: '2835_1', input: `union find`, expected_output: `result`, is_hidden: false },
    { id: '2835_2', input: `components`, expected_output: `count`, is_hidden: true },
    { id: '2835_3', input: `cycle detect`, expected_output: `boolean`, is_hidden: true }
  ],
  'trie-data-structure': [
    { id: '2836_1', input: `insert search`, expected_output: `true`, is_hidden: false },
    { id: '2836_2', input: `prefix`, expected_output: `true`, is_hidden: true },
    { id: '2836_3', input: `not found`, expected_output: `false`, is_hidden: true }
  ],
  'segment-tree-lazy': [
    { id: '2837_1', input: `lazy query`, expected_output: `result`, is_hidden: false },
    { id: '2837_2', input: `point update`, expected_output: `result`, is_hidden: true },
    { id: '2837_3', input: `range sum`, expected_output: `sum`, is_hidden: true }
  ],
  'persistent-segment-tree': [
    { id: '2838_1', input: `version query`, expected_output: `result`, is_hidden: false },
    { id: '2838_2', input: `k-th`, expected_output: `value`, is_hidden: true },
    { id: '2838_3', input: `range k-th`, expected_output: `value`, is_hidden: true }
  ],
  'convex-hull-trick': [
    { id: '2840_1', input: `optimization`, expected_output: `min`, is_hidden: false },
    { id: '2840_2', input: `Li Chao`, expected_output: `max`, is_hidden: true },
    { id: '2840_3', input: `offline`, expected_output: `result`, is_hidden: true }
  ],



  'first-missing-positive': [
    { id: '1', input: `nums = [1,2,0]`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums = [3,4,-1,1]`, expected_output: `2`, is_hidden: true },
    { id: '3', input: `nums = [7,8,9,11,12]`, expected_output: `1`, is_hidden: true }
  ],
  'trapping-rain-water': [
    { id: '1', input: `height = [0,1,0,2,1,0,1,3,2,1,2,1]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `height = [4,2,0,3,2,5]`, expected_output: `9`, is_hidden: true }
  ],
  'candy': [
    { id: '1', input: `ratings = [1,0,2]`, expected_output: `5`, is_hidden: false },
    { id: '2', input: `ratings = [1,2,2]`, expected_output: `4`, is_hidden: true }
  ],
  'maximum-rectangle': [
    { id: '1', input: `arr = [1,3,5,7,9]`, expected_output: `9`, is_hidden: false }
  ],
  'string-compression': [
    { id: '1', input: `chars = ["a","a","b","b","c","c","c"]`, expected_output: `["a","2","b","2","c","3"]`, is_hidden: false },
    { id: '2', input: `chars = ["a"]`, expected_output: `["a"]`, is_hidden: true }
  ],
  'regular-expression-matching': [
    { id: '1', input: `s = "aa", p = "a"`, expected_output: `false`, is_hidden: false },
    { id: '2', input: `s = "aa", p = "a*"`, expected_output: `true`, is_hidden: true }
  ],
  'edit-distance': [
    { id: '1', input: `word1 = "horse", word2 = "ros"`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `word1 = "intention", word2 = "execution"`, expected_output: `5`, is_hidden: true }
  ],
  'two-sum-hashing': [
    { id: '1', input: `nums = [2,7,11,15], target = 9`, expected_output: `[0,1]`, is_hidden: false },
    { id: '2', input: `nums = [3,2,4], target = 6`, expected_output: `[1,2]`, is_hidden: true }
  ],
  'contains-duplicate-hashing': [
    { id: '1', input: `nums = [1,2,3,1]`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `nums = [1,2,3,4]`, expected_output: `false`, is_hidden: true },
    { id: '3', input: `nums = [1,1,1,3,3,4,3,2,4,2]`, expected_output: `true`, is_hidden: true },
  ],
  'subarray-sum-equals-k': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'group-anagrams-hashing': [
    { id: '1', input: `s = "anagram", t = "nagaram"`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `s = "rat", t = "car"`, expected_output: `false`, is_hidden: true }
  ],
  'minimum-window-substring-hashing': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'word-pattern-ii': [
    { id: '1', input: `s = "leetcode", wordDict = ["leet","code"]`, expected_output: `true`, is_hidden: false }
  ],
  'lfu-cache': [
    { id: '1', input: `ops = ["LFUCache","put","get"], args = [[2],[1,1],[1]]`, expected_output: `[null,null,1]`, is_hidden: false }
  ],
  'all-o1-data-structure': [
    { id: '1', input: `["AllOne","inc","inc","getMaxKey","getMinKey","inc","getMaxKey","getMinKey"]\\n[[],[hello],[hello],[],[],[world],[],[]]`, expected_output: `[hello, world, world, hello]`, is_hidden: false },
    { id: '2', input: `["AllOne","inc","inc","inc","inc","getMaxKey"]\\n[[],[a],[b],[b],[c],[]]`, expected_output: `[b]`, is_hidden: true },
  ],
  'remove-duplicates': [
    { id: '1', input: `nums = [1,1,2]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `nums = [0,0,1,1,1,2,2,3,3,4]`, expected_output: `5`, is_hidden: true }
  ],
  'reorder-list': [
    { id: '1', input: `head = [1,2,3,4]`, expected_output: `[1,4,2,3]`, is_hidden: false },
    { id: '2', input: `head = [1,2,3,4,5]`, expected_output: `[1,5,2,4,3]`, is_hidden: true }
  ],
  'remove-nth-node-from-end': [
    { id: '1', input: `head = [1,2,3,4,5], n = 2`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2', input: `head = [1], n = 1`, expected_output: `[]`, is_hidden: true }
  ],
  'flatten-multilevel-dll': [
    { id: '1', input: `head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]`, expected_output: `[1,2,3,7,8,11,12,9,10,4,5,6]`, is_hidden: false },
    { id: '2', input: `head = [1,2,null,3]`, expected_output: `[1,3,2]`, is_hidden: true },
  ],
  'linked-list-cycle-ii': [
    { id: '1', input: `head = [3,2,0,-4], pos = 1`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `head = [1,2], pos = -1`, expected_output: `-1`, is_hidden: true }
  ],
  'remove-outermost-parentheses': [
    { id: '1', input: `s = "()[]{}"`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `s = "(]"`, expected_output: `false`, is_hidden: true }
  ],
  'evaluate-reverse-polish-notation': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `[5,4,3,2,1]`, is_hidden: false }
  ],
  'decode-string-stack': [
    { id: '1', input: `s = "3+2*2"`, expected_output: `7`, is_hidden: false }
  ],
  'parse-lisp-expression': [
    { id: '1', input: `expression = "(let x 2 (mult x (let x 3 y 4 (add x y))))"`, expected_output: `14`, is_hidden: false },
    { id: '2', input: `expression = "(let x 3 x 2 x)"`, expected_output: `2`, is_hidden: true },
  ],
  'moving-average-from-data-stream': [
    { id: '1', input: `size=3, stream=[1,10,3,5]`, expected_output: `[1.0,5.5,4.66667,6.0]`, is_hidden: false },
    { id: '2', input: `size=1, stream=[0,-1]`, expected_output: `[0.0,-1.0]`, is_hidden: true },
  ],
  'circular-queue': [
    { id: '1', input: `operations = ["push","push","pop","peek"]`, expected_output: `[null,null,null,1]`, is_hidden: false }
  ],
  'dota2-senate': [
    { id: '1', input: `senate = "RD"`, expected_output: `"Radiant"`, is_hidden: false },
    { id: '2', input: `senate = "RDD"`, expected_output: `"Dire"`, is_hidden: true },
  ],
  'design-hit-counter': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
  'sliding-window-maximum-queue': [
    { id: '1', input: `operations = ["push","push","pop","peek"]`, expected_output: `[null,null,null,1]`, is_hidden: false }
  ],
  'shortest-distance-from-all-buildings': [
    { id: '1', input: `grid = [[1,0,2,0,1],[0,0,0,0,0],[0,0,1,0,0]]`, expected_output: `7`, is_hidden: false },
    { id: '2', input: `grid = [[1,0]]`, expected_output: `1`, is_hidden: true },
  ],
  'bus-routes': [
    { id: '1', input: `routes = [[1,2,7],[3,6,7]], S = 1, T = 6`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `routes = [[7,12],[4,5,15],[6],[15,19],[9,12,13]], S = 15, T = 12`, expected_output: `-1`, is_hidden: true },
  ],
  'race-car': [
    { id: '1', input: `target = 3`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `target = 6`, expected_output: `5`, is_hidden: true },
  ],
  'minimum-cost-to-reach-destination': [
    { id: '1', input: `arr = [1,3,5,7,9]`, expected_output: `1`, is_hidden: false }
  ],
  'kth-largest-element-in-stream': [
    { id: '1', input: `arr = [3,1,4,1,5,9,2,6]`, expected_output: `9`, is_hidden: false },
    { id: '2', input: `arr = [10]`, expected_output: `10`, is_hidden: true }
  ],
  'sort-characters-by-frequency': [
    { id: '1', input: `nums = [5,2,3,1]`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2', input: `nums = [5,1,1,2,0,0]`, expected_output: `[0,0,1,1,2,5]`, is_hidden: true }
  ],
  'k-closest-points-to-origin': [
    { id: '1', input: `points = [[1,3],[-2,2]], k = 1`, expected_output: `[[-2,2]]`, is_hidden: false }
  ],
  'top-k-frequent-elements-heap': [
    { id: '1', input: `nums = [3,2,1,5,6,4], k = 2`, expected_output: `5`, is_hidden: false }
  ],
  'find-median-from-data-stream': [
    { id: '1', input: `stream = [1,2]`, expected_output: `1.5`, is_hidden: false },
    { id: '2', input: `stream = [6,10,2,6]`, expected_output: `5.0`, is_hidden: true },
  ],
  'task-scheduler-heap': [
    { id: '1', input: `nums = [3,2,1,5,6,4], k = 2`, expected_output: `5`, is_hidden: false }
  ],
  'merge-k-sorted-lists-heap': [
    { id: '1', input: `nums = [5,2,3,1]`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2', input: `nums = [5,1,1,2,0,0]`, expected_output: `[0,0,1,1,2,5]`, is_hidden: true }
  ],
  'minimum-refueling-stops': [
    { id: '1', input: `arr = [1,3,5,7,9]`, expected_output: `1`, is_hidden: false }
  ],
  'smallest-range-covering-elements': [
    { id: '1', input: `arr = [3,1,4,1,5,9,2,6]`, expected_output: `1`, is_hidden: false }
  ],
  'path-sum': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'balanced-binary-tree': [
    { id: '1', input: `root = [3,9,20,null,null,15,7]`, expected_output: `true`, is_hidden: false }
  ],
  'binary-tree-level-order-traversal': [
    { id: '1', input: `root = [1,2,3,null,4,null,5]`, expected_output: `true`, is_hidden: false }
  ],
  'construct-binary-tree': [
    { id: '1', input: `root = [1,2,3,null,4,null,5]`, expected_output: `true`, is_hidden: false }
  ],
  'lowest-common-ancestor': [
    { id: '1', input: `root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4`, expected_output: `5`, is_hidden: true },
  ],
  'right-side-view': [
    { id: '1', input: `root = [1,2,3,null,5,null,4]`, expected_output: `[1,3,4]`, is_hidden: false },
    { id: '2', input: `root = [1,null,3]`, expected_output: `[1,3]`, is_hidden: true },
  ],
  'validate-binary-tree': [
    { id: '1', input: `root = [1,2,3,null,4,null,5]`, expected_output: `true`, is_hidden: false }
  ],
  'serialize-and-deserialize-binary-tree': [
    { id: '1', input: `root = [1,2,3,null,4,null,5]`, expected_output: `true`, is_hidden: false }
  ],
  'binary-tree-maximum-path-sum': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'recover-binary-search-tree': [
    { id: '1', input: `nums = [1,3,5,7,9,11,13], target = 7`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums = [1,3,5,7,9,11,13], target = 8`, expected_output: `-1`, is_hidden: true }
  ],
  'house-robber-iii': [
    { id: '1', input: `root = [3,2,3,null,3,null,1]`, expected_output: `7`, is_hidden: false },
    { id: '2', input: `root = [3,4,5,1,3,null,1]`, expected_output: `9`, is_hidden: true },
  ],
  'minimum-distance-between-bst-nodes': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'range-sum-of-bst': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'increasing-order-search-tree': [
    { id: '1', input: `nums = [1,3,5,7,9,11,13], target = 7`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums = [1,3,5,7,9,11,13], target = 8`, expected_output: `-1`, is_hidden: true }
  ],
  'kth-smallest-element-in-bst': [
    { id: '1', input: `arr = [3,1,4,1,5,9,2,6]`, expected_output: `1`, is_hidden: false }
  ],
  'convert-bst-to-greater-tree': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'delete-node-in-bst': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'unique-binary-search-trees-ii': [
    { id: '1', input: `nums = [1,3,5,7,9,11,13], target = 7`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums = [1,3,5,7,9,11,13], target = 8`, expected_output: `-1`, is_hidden: true }
  ],
  'split-bst': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'balance-bst': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'number-of-connected-components': [
    { id: '1', input: `n = 5, edges = [[0,1],[1,2],[3,4]]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `n = 5, edges = [[0,1],[1,2],[2,3],[3,4]]`, expected_output: `1`, is_hidden: true },
  ],
  'alien-dictionary-graph': [
    { id: '1', input: `n = 4, edges = [[0,1],[1,2],[2,3]]`, expected_output: `true`, is_hidden: false }
  ],
  'critical-connections-in-network': [
    { id: '1', input: `n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]`, expected_output: `[[1,3]]`, is_hidden: false },
    { id: '2', input: `n = 2, connections = [[0,1]]`, expected_output: `[[0,1]]`, is_hidden: true },
  ],
  'minimum-cost-to-connect-points': [
    { id: '1', input: `arr = [1,3,5,7,9]`, expected_output: `1`, is_hidden: false }
  ],
  'range-sum-query-immutable': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'max-size-subarray-sum-k': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'continuous-subarray-sum': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'range-sum-query-2d-immutable': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'minimum-size-subarray-sum': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'subarray-sum-k-ii': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'count-of-range-sum': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
  'range-sum-query-mutable': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'max-sum-3-non-overlapping': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'num-subarrays-bounded-max': [
    { id: '1', input: `nums = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'longest-well-performing': [
    { id: '1', input: `intervals = [[1,3],[2,6],[8,10],[15,18]]`, expected_output: `[[1,6],[8,10],[15,18]]`, is_hidden: false }
  ],
  'max-sum-subarray-at-most-k': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'single-number': [
    { id: '1', input: `nums = [2,2,1]`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `nums = [4,1,2,1,2]`, expected_output: `4`, is_hidden: true },
  ],
  'number-of-1-bits': [
    { id: '1', input: `n = 11`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `n = 128`, expected_output: `1`, is_hidden: true },
  ],
  'reverse-bits': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `[5,4,3,2,1]`, is_hidden: false }
  ],
  'missing-number-xor': [
    { id: '1', input: `nums = [3,0,1]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `nums = [9,6,4,2,3,5,7,0,1]`, expected_output: `8`, is_hidden: true },
  ],
  'counting-bits': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
  'bitwise-and-numbers-range': [
    { id: '1', input: `nums = [1,3,5], low = 1, high = 5`, expected_output: `9`, is_hidden: false }
  ],
  'xor-queries-subarray': [
    { id: '1', input: `nums = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'utf-8-validation': [
    { id: '1', input: `data = [197,130,1]`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `data = [235,140,4]`, expected_output: `false`, is_hidden: true },
  ],
  'binary-substrings-1-to-n': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'max-xor-two-numbers': [
    { id: '1', input: `arr = [1,3,5,7,9]`, expected_output: `9`, is_hidden: false }
  ],
  'sort-integers-by-1-bits': [
    { id: '1', input: `nums = [5,2,3,1]`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2', input: `nums = [5,1,1,2,0,0]`, expected_output: `[0,0,1,1,2,5]`, is_hidden: true }
  ],
  'closest-divisors': [
    { id: '1', input: `points = [[1,3],[-2,2]], k = 1`, expected_output: `[[-2,2]]`, is_hidden: false }
  ],
  'bitwise-or-subsequence-sums': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'find-the-difference': [
    { id: '1', input: `arr = [1,5,3,9,2]`, expected_output: `8`, is_hidden: false }
  ],
  'fizz-buzz': [
    { id: '1', input: `n = 5`, expected_output: `["1","2","Fizz","4","Buzz"]`, is_hidden: false }
  ],
  'add-digits': [
    { id: '1', input: `num = 38`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `num = 0`, expected_output: `0`, is_hidden: true }
  ],
  'powx-n': [
    { id: '1', input: `x = 2.00000, n = 10`, expected_output: `1024.00000`, is_hidden: false },
    { id: '2', input: `x = 2.10000, n = 3`, expected_output: `9.26100`, is_hidden: true },
  ],
  'super-pow': [
    { id: '1', input: `a = 2, b = [3]`, expected_output: `8`, is_hidden: false }
  ],
  'ugly-number-ii': [
    { id: '1', input: `n = 10`, expected_output: `12`, is_hidden: false },
    { id: '2', input: `n = 1`, expected_output: `1`, is_hidden: true },
  ],
  'count-primes': [
    { id: '1', input: `n = 10`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `n = 0`, expected_output: `0`, is_hidden: true },
  ],
  'integer-to-english-words': [
    { id: '1', input: `num = 123`, expected_output: `"One Hundred Twenty Three"`, is_hidden: false }
  ],
  'permutation-sequence': [
    { id: '1', input: `n = 3, k = 3`, expected_output: `"213"`, is_hidden: false },
    { id: '2', input: `n = 4, k = 9`, expected_output: `"2314"`, is_hidden: true },
  ],
  'largest-number': [
    { id: '1', input: `nums = [10,2]`, expected_output: `"210"`, is_hidden: false },
    { id: '2', input: `nums = [3,30,34,5,9]`, expected_output: `"9534330"`, is_hidden: true }
  ],
  'basic-calculator-ii': [
    { id: '1', input: `s = "3+2*2"`, expected_output: `7`, is_hidden: false },
    { id: '2', input: `s = " 3/2 "`, expected_output: `1`, is_hidden: true },
  ],
  'best-time-buy-sell-stock': [
    { id: '1', input: `prices = [7,1,5,3,6,4]`, expected_output: `5`, is_hidden: false },
    { id: '2', input: `prices = [7,6,4,3,1]`, expected_output: `0`, is_hidden: true },
  ],
  'max-units-truck': [
    { id: '1', input: `arr = [1,3,5,7,9]`, expected_output: `9`, is_hidden: false }
  ],
  'can-place-flowers': [
    { id: '1', input: `flowerbed = [1,0,0,0,1], n = 1`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `flowerbed = [1,0,0,0,1], n = 2`, expected_output: `false`, is_hidden: true }
  ],
  'lemonade-change': [
    { id: '1', input: `bills = [5,5,5,10,20]`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `bills = [5,5,10,10,20]`, expected_output: `false`, is_hidden: true }
  ],
  'min-arrows-burst-balloons': [
    { id: '1', input: `points = [[10,16],[2,8],[1,6],[7,12]]`, expected_output: `2`, is_hidden: false }
  ],
  'min-cost-hire-k-workers': [
    { id: '1', input: `arr = [1,3,5,7,9]`, expected_output: `1`, is_hidden: false }
  ],
  'combination-sum-ii': [
    { id: '1', input: `candidates = [10,1,2,7,6,1,5], target = 8`, expected_output: `[[1,1,6],[1,2,5],[1,7],[2,6]]`, is_hidden: false }
  ],
  'n-queens-count': [
    { id: '1', input: `n = 4`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `n = 1`, expected_output: `1`, is_hidden: true },
  ],
  'restore-ip-addresses': [
    { id: '1', input: `s = "25525511135"`, expected_output: `["255.255.11.135","255.255.111.35"]`, is_hidden: false }
  ],
  'palindrome-permutation-ii': [
    { id: '1', input: `s = "aabb"`, expected_output: `["abba","baab"]`, is_hidden: false }
  ],
  'max-subarray-dc': [
    { id: '1', input: `nums = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'majority-element-dc': [
    { id: '1', input: `nums = [3,2,3]`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums = [2,2,1,1,1,2,2]`, expected_output: `2`, is_hidden: true },
  ],
  'max-product-three': [
    { id: '1', input: `nums = [1,2,3]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `nums = [1,2,3,4]`, expected_output: `24`, is_hidden: true }
  ],
  'merge-sorted-arrays-dc': [
    { id: '1', input: `nums = [5,2,3,1]`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2', input: `nums = [5,1,1,2,0,0]`, expected_output: `[0,0,1,1,2,5]`, is_hidden: true }
  ],
  'good-nodes-dc': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
  'sort-array-merge-sort': [
    { id: '1', input: `nums = [5,2,3,1]`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2', input: `nums = [5,1,1,2,0,0]`, expected_output: `[0,0,1,1,2,5]`, is_hidden: true }
  ],
  'search-2d-matrix-ii': [
    { id: '1', input: `nums = [1,3,5,7,9,11,13], target = 7`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums = [1,3,5,7,9,11,13], target = 8`, expected_output: `-1`, is_hidden: true }
  ],
  'diff-ways-add-parentheses': [
    { id: '1', input: `s = "()[]{}"`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `s = "(]"`, expected_output: `false`, is_hidden: true }
  ],
  'closest-bst-value': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'kth-largest-quickselect': [
    { id: '1', input: `arr = [3,1,4,1,5,9,2,6]`, expected_output: `9`, is_hidden: false },
    { id: '2', input: `arr = [10]`, expected_output: `10`, is_hidden: true }
  ],
  'lis-divide-conquer': [
    { id: '1', input: `nums = [10,9,2,5,3,7,101,18]`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `nums = [0,1,0,3,2,3]`, expected_output: `4`, is_hidden: true },
  ],
  'max-sum-rectangle-k': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'stickers-spell-word': [
    { id: '1', input: `s = "leetcode", wordDict = ["leet","code"]`, expected_output: `true`, is_hidden: false }
  ],
  'skyline-problem': [
    { id: '1', input: `buildings = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]`, expected_output: `[[2,10],[3,15],[7,12],[12,0],[15,10],[20,8],[24,0]]`, is_hidden: false },
    { id: '2', input: `buildings = [[0,2,3],[2,5,3]]`, expected_output: `[[0,3],[5,0]]`, is_hidden: true },
  ],
  'max-depth-binary-tree': [
    { id: '1', input: `root = [3,9,20,null,null,15,7]`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `root = [1,null,2]`, expected_output: `2`, is_hidden: true }
  ],
  'symmetric-tree': [
    { id: '1', input: `root = [1,2,2,3,4,4,3]`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `root = [1,2,2,null,3,null,3]`, expected_output: `false`, is_hidden: true }
  ],
  'level-order-traversal': [
    { id: '1', input: `root = [3,9,20,null,null,15,7]`, expected_output: `[[3],[9,20],[15,7]]`, is_hidden: false }
  ],
  'validate-bst-medium': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'lca-binary-tree': [
    { id: '1', input: `root = [1,2,3,null,4,null,5]`, expected_output: `true`, is_hidden: false }
  ],
  'zigzag-level-order': [
    { id: '1', input: `root = [3,9,20,null,null,15,7]`, expected_output: `[[3],[20,9],[15,7]]`, is_hidden: false }
  ],
  'flatten-binary-tree': [
    { id: '1', input: `root = [1,2,5,3,4,null,6]`, expected_output: `[1,null,2,null,3,null,4,null,5,null,6]`, is_hidden: false }
  ],
  'bt-max-path-sum': [
    { id: '1', input: `root = [1,2,3]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `root = [-10,9,20,null,null,15,7]`, expected_output: `42`, is_hidden: true }
  ],
  'serialize-deserialize-bt': [
    { id: '1', input: `root = [1,2,3,null,4,null,5]`, expected_output: `true`, is_hidden: false }
  ],
  'binary-tree-cameras': [
    { id: '1', input: `root = [0,0,null,0,0]`, expected_output: `1`, is_hidden: false }
  ],
  'delete-node-bst': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'range-sum-bst': [
    { id: '1', input: `root = [10,5,15,3,7,null,18], low = 7, high = 15`, expected_output: `32`, is_hidden: false }
  ],
  'convert-bst-greater': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'inorder-successor-bst-ii': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'recover-bst-hard': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'kth-smallest-matrix-bst': [
    { id: '1', input: `nums = [5,2,3,1]`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2', input: `nums = [5,1,1,2,0,0]`, expected_output: `[0,0,1,1,2,5]`, is_hidden: true }
  ],
  'closest-bst-value-ii': [
    { id: '1', input: `root = [2,1,3]`, expected_output: `true`, is_hidden: false }
  ],
  'kth-largest-stream': [
    { id: '1', input: `arr = [3,1,4,1,5,9,2,6]`, expected_output: `9`, is_hidden: false },
    { id: '2', input: `arr = [10]`, expected_output: `10`, is_hidden: true }
  ],
  'k-closest-points': [
    { id: '1', input: `points = [[1,3],[-2,2]], k = 1`, expected_output: `[[-2,2]]`, is_hidden: false }
  ],
  'min-absolute-diff': [
    { id: '1', input: `nums = [4,2,1,3]`, expected_output: `[[1,2],[2,3],[3,4]]`, is_hidden: false }
  ],
  'smallest-infinite-set': [
    { id: '1', input: `arr = [3,1,4,1,5,9,2,6]`, expected_output: `1`, is_hidden: false }
  ],
  'kth-largest-array': [
    { id: '1', input: `nums = [3,2,1,5,6,4], k = 2`, expected_output: `5`, is_hidden: false }
  ],
  'top-k-frequent': [
    { id: '1', input: `nums = [1,1,1,2,2,3], k = 2`, expected_output: `[1,2]`, is_hidden: false }
  ],
  'reorganize-string-heap': [
    { id: '1', input: `s = "aab"`, expected_output: `"aba"`, is_hidden: false }
  ],
  'sliding-window-median-heap': [
    { id: '1', input: `nums = [3,2,1,5,6,4], k = 2`, expected_output: `5`, is_hidden: false }
  ],
  'k-pairs-smallest-sums': [
    { id: '1', input: `arr = [3,1,4,1,5,9,2,6]`, expected_output: `1`, is_hidden: false }
  ],
  'implement-trie': [
    { id: '1', input: `ops = ["Trie","insert","search"], args = [[],["apple"],["apple"]]`, expected_output: `[null,null,true]`, is_hidden: false }
  ],
  'add-search-words': [
    { id: '1', input: `nums = [1,3,5,7,9,11,13], target = 7`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums = [1,3,5,7,9,11,13], target = 8`, expected_output: `-1`, is_hidden: true }
  ],
  'replace-words': [
    { id: '1', input: `s = "leetcode", wordDict = ["leet","code"]`, expected_output: `true`, is_hidden: false }
  ],
  'map-sum-pairs': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'longest-word-dictionary': [
    { id: '1', input: `s = "leetcode", wordDict = ["leet","code"]`, expected_output: `true`, is_hidden: false }
  ],
  'magic-dictionary': [
    { id: '1', input: `dict = [hello, leetcode], searchWord = hello`, expected_output: `false`, is_hidden: false },
    { id: '2', input: `dict = [hello, hella], searchWord = hello`, expected_output: `true`, is_hidden: true },
  ],
  'search-suggestions': [
    { id: '1', input: `nums = [1,3,5,7,9,11,13], target = 7`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums = [1,3,5,7,9,11,13], target = 8`, expected_output: `-1`, is_hidden: true }
  ],
  'longest-word-delete': [
    { id: '1', input: `s = "leetcode", wordDict = ["leet","code"]`, expected_output: `true`, is_hidden: false }
  ],
  'max-xor-with-element': [
    { id: '1', input: `arr = [1,3,5,7,9]`, expected_output: `9`, is_hidden: false }
  ],
  'word-search-ii': [
    { id: '1', input: `nums = [1,3,5,7,9,11,13], target = 7`, expected_output: `3`, is_hidden: false },
    { id: '2', input: `nums = [1,3,5,7,9,11,13], target = 8`, expected_output: `-1`, is_hidden: true }
  ],
  'palindrome-pairs-ii': [
    { id: '1', input: `s = "racecar"`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `s = "hello"`, expected_output: `false`, is_hidden: true }
  ],
  'shortest-unique-prefix': [
    { id: '1', input: `s = "leetcode", wordDict = ["leet","code"]`, expected_output: `true`, is_hidden: false }
  ],
  'word-break-trie': [
    { id: '1', input: `ops = ["Trie","insert","search"], args = [[],["apple"],["apple"]]`, expected_output: `[null,null,true]`, is_hidden: false }
  ],
  'number-of-islands-dsu': [
    { id: '1', input: `grid = [[1,1,1,1,0],[1,1,0,1,0],[1,1,0,0,0],[0,0,0,0,0]]`, expected_output: `1`, is_hidden: false },
    { id: '2', input: `grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,1,0,0],[0,0,0,1,1]]`, expected_output: `3`, is_hidden: true },
  ],
  'friend-circles': [
    { id: '1', input: `M = [[1,1,0],[1,1,0],[0,0,1]]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `M = [[1,1,0],[1,1,1],[0,1,1]]`, expected_output: `1`, is_hidden: true },
  ],
  'smallest-string-swaps': [
    { id: '1', input: `arr = [3,1,4,1,5,9,2,6]`, expected_output: `1`, is_hidden: false }
  ],
  'number-of-good-paths': [
    { id: '1', input: `vals = [1,3,2,1,3], edges = [[0,1],[0,2],[2,3],[2,4]]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `vals = [1,1,2,2,3], edges = [[0,1],[1,2],[2,3],[2,4]]`, expected_output: `7`, is_hidden: true },
  ],
  'connected-components': [
    { id: '1', input: `n = 4, edges = [[0,1],[1,2],[2,3]]`, expected_output: `true`, is_hidden: false }
  ],
  'longest-consecutive-dsu': [
    { id: '1', input: `nums = [100,4,200,1,3,2]`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `nums = [0,3,7,2,5,8,4,6,0,1]`, expected_output: `9`, is_hidden: true },
  ],
  'redundant-connection-ii': [
    { id: '1', input: `edges = [[1,2],[1,3],[2,3]]`, expected_output: `[2,3]`, is_hidden: false },
    { id: '2', input: `edges = [[1,2],[2,3],[3,4],[4,1],[1,5]]`, expected_output: `[4,1]`, is_hidden: true },
  ],
  'largest-component-common-factor': [
    { id: '1', input: `arr = [3,1,4,1,5,9,2,6]`, expected_output: `9`, is_hidden: false },
    { id: '2', input: `arr = [10]`, expected_output: `10`, is_hidden: true }
  ],
  'similar-string-groups': [
    { id: '1', input: `strs = [tars, rats, arts, star]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `strs = [omv, ovm]`, expected_output: `1`, is_hidden: true },
  ],
  'minimize-malware-spread-ii': [
    { id: '1', input: `graph = [[1,1,0],[1,1,0],[0,0,1]], initial = [0,1]`, expected_output: `0`, is_hidden: false },
    { id: '2', input: `graph = [[1,1,0,0],[1,1,1,0],[0,1,1,1],[0,0,1,1]], initial = [0,1,2]`, expected_output: `1`, is_hidden: true },
  ],
  'climbing-stairs': [
    { id: '1', input: `n = 2`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `n = 3`, expected_output: `3`, is_hidden: true },
    { id: '3', input: `n = 5`, expected_output: `8`, is_hidden: true },
  ],
  'min-cost-climbing-stairs': [
    { id: '1', input: `cost = [10,15,20]`, expected_output: `15`, is_hidden: false },
    { id: '2', input: `cost = [1,100,1,1,1,100,1,1,100,1]`, expected_output: `6`, is_hidden: true },
  ],
  'house-robber': [
    { id: '1', input: `nums = [1,2,3,1]`, expected_output: `4`, is_hidden: false },
    { id: '2', input: `nums = [2,7,9,3,1]`, expected_output: `12`, is_hidden: true }
  ],
  'max-subarray-dp': [
    { id: '1', input: `nums = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'is-subsequence': [
    { id: '1', input: `s = "abc", t = "ahbgdc"`, expected_output: `true`, is_hidden: false },
    { id: '2', input: `s = "axc", t = "ahbgdc"`, expected_output: `false`, is_hidden: true }
  ],
  'longest-increasing-subsequence': [
    { id: '1', input: `nums = [10,9,2,5,3,7,101,18]`, expected_output: `4`, is_hidden: false }
  ],
  'coin-change': [
    { id: '1', input: `coins = [1,5,10,25], amount = 30`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `coins = [2], amount = 3`, expected_output: `-1`, is_hidden: true }
  ],
  'unique-paths': [
    { id: '1', input: `m = 3, n = 7`, expected_output: `28`, is_hidden: false },
    { id: '2', input: `m = 3, n = 2`, expected_output: `3`, is_hidden: true },
  ],
  'minimum-path-sum': [
    { id: '1', input: `grid = [[1,3,1],[1,5,1],[4,2,1]]`, expected_output: `7`, is_hidden: false },
    { id: '2', input: `grid = [[1,2,3],[4,5,6]]`, expected_output: `12`, is_hidden: true }
  ],
  'longest-valid-parentheses': [
    { id: '1', input: `s = "(()"`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `s = ")()())"`, expected_output: `4`, is_hidden: true }
  ],
  'regex-matching': [
    { id: '1', input: `s = "aa", p = "a"`, expected_output: `false`, is_hidden: false },
    { id: '2', input: `s = "ab", p = ".*"`, expected_output: `true`, is_hidden: true },
  ],
  'range-sum-immutable-st': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'range-sum-2d-st': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'subarray-sum-k-st': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'range-update-range-query': [
    { id: '1', input: `nums = [1,3,5], low = 1, high = 5`, expected_output: `9`, is_hidden: false }
  ],
  'count-range-sum-st': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
  'maximum-sum-query': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'my-calendar-i': [
    { id: '1', input: `bookings = [[10,20],[15,25],[20,30]]`, expected_output: `[true,false,true]`, is_hidden: false },
    { id: '2', input: `bookings = [[47,50],[33,41],[39,45],[33,42],[25,32],[26,35],[19,25],[3,8],[8,13],[18,27]]`, expected_output: `[true,true,false,false,true,false,true,true,false,false]`, is_hidden: true },
  ],
  'my-calendar-ii': [
    { id: '1', input: `bookings = [[10,20],[15,25],[20,30]]`, expected_output: `[true,true,false]`, is_hidden: false },
    { id: '2', input: `bookings = [[1,4],[2,5],[6,9],[3,8]]`, expected_output: `[true,true,false,false]`, is_hidden: true },
  ],
  'count-integers-intervals': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
  'count-smaller-hard': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
  'rectangle-area-ii': [
    { id: '1', input: `rectangles = [[0,0,2,2],[1,0,2,3],[1,0,3,1]]`, expected_output: `6`, is_hidden: false },
    { id: '2', input: `rectangles = [[0,0,1000000000,1000000000]]`, expected_output: `49`, is_hidden: true },
  ],
  'bit-basics': [
    { id: '1', input: `n = 5`, expected_output: `[0,1,1,0,1]`, is_hidden: false },
    { id: '2', input: `n = 2`, expected_output: `[0,1]`, is_hidden: true },
  ],
  'range-sum-query-bit': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'point-update-range-sum': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'count-inversions-bit': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
  'frequency-count-bit': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
  '2d-bit-range-sum': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'range-update-point-query-bit': [
    { id: '1', input: `nums = [1,3,5], low = 1, high = 5`, expected_output: `9`, is_hidden: false }
  ],
  'kth-smallest-matrix-bit': [
    { id: '1', input: `nums = [5,2,3,1]`, expected_output: `[1,2,3,5]`, is_hidden: false },
    { id: '2', input: `nums = [5,1,1,2,0,0]`, expected_output: `[0,0,1,1,2,5]`, is_hidden: true }
  ],
  'increasing-subsequences-bit': [
    { id: '1', input: `nums = [1,2,3,4]`, expected_output: `15`, is_hidden: false },
    { id: '2', input: `nums = [4,6,7,7]`, expected_output: `8`, is_hidden: true },
  ],
  'reverse-pairs-bit': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `[5,4,3,2,1]`, is_hidden: false }
  ],
  'sum-distances-tree': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'number-longest-increasing-subseq': [
    { id: '1', input: `nums = [1,3,5,4,7]`, expected_output: `2`, is_hidden: false },
    { id: '2', input: `nums = [2,2,2,2,2]`, expected_output: `5`, is_hidden: true },
  ],
  'falling-squares': [
    { id: '1', input: `positions = [[1,2],[2,3],[6,1]]`, expected_output: `[2,5,5]`, is_hidden: false },
    { id: '2', input: `positions = [[100,100],[200,100]]`, expected_output: `[100,100]`, is_hidden: true },
  ],
  'longest-subseq-limited-sum': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `15`, is_hidden: false }
  ],
  'good-triplets-bit': [
    { id: '1', input: `arr = [1,2,3,4,5]`, expected_output: `5`, is_hidden: false }
  ],
};

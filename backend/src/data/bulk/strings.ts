import type { Question } from '../../types';
export const BULK_STRINGS: Question[] = [
  {
    "id": "30097",
    "title": "Reverse String",
    "slug": "reverse-string-strings-1",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse string in-place.",
    "input_format": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
    "output_format": "modified array",
    "constraints": "1 <= s.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        "explanation": ""
      }
    ],
    "sample_input": "s = [\"h\",\"e\",\"l\",\"l\",\"o\"]",
    "starter_code": {
      "javascript": "function reverseString(s: string[]): void {\n  // your code here\n}\n",
      "python": "def reverseString(s: string[]) -> void:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public void reverseString(string[] s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    void reverseString(string[] s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "expected_output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[\"a\"]",
        "expected_output": "[\"a\"]",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30098",
    "title": "Valid Anagram",
    "slug": "valid-anagram-strings-2",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Check if t is an anagram of s.",
    "input_format": "s = \"anagram\", t = \"nagaram\"",
    "output_format": "true or false",
    "constraints": "1 <= s.length, t.length <= 5*10^4\ncontains lowercase letters",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"anagram\", t = \"nagaram\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"anagram\", t = \"nagaram\"",
    "starter_code": {
      "javascript": "function isAnagram(s: string, t: string): boolean {\n  // your code here\n}\n",
      "python": "def isAnagram(s: string, t: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isAnagram(string s, string t) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isAnagram(string s, string t) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"anagram\",\"nagaram\"",
        "expected_output": "true",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "\"rat\",\"car\"",
        "expected_output": "false",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30099",
    "title": "Valid Palindrome",
    "slug": "valid-palindrome-strings-3",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if string is palindrome ignoring non-alphanumeric and case.",
    "input_format": "s = \"A man, a plan, a canal: Panama\"",
    "output_format": "true",
    "constraints": "1 <= s.length <= 2*10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"A man, a plan, a canal: Panama\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"A man, a plan, a canal: Panama\"",
    "starter_code": {
      "javascript": "function isPalindrome(s: string): boolean {\n  // your code here\n}\n",
      "python": "def isPalindrome(s: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isPalindrome(string s) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isPalindrome(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"A man, a plan, a canal: Panama\"",
        "expected_output": "true",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "\"race a car\"",
        "expected_output": "false",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30100",
    "title": "Longest Substring Without Repeating",
    "slug": "longest-substring-without-repeating-strings-4",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "slidingwindow",
    "enable_visualization": true,
    "problem_statement": "Length of longest substring without repeating characters.",
    "input_format": "s = \"abcabcbb\"",
    "output_format": "max length",
    "constraints": "0 <= s.length <= 5*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"abcabcbb\"",
        "output": "3",
        "explanation": "\"abc\""
      }
    ],
    "sample_input": "s = \"abcabcbb\"",
    "starter_code": {
      "javascript": "function lengthOfLongestSubstring(s: string): number {\n  // your code here\n}\n",
      "python": "def lengthOfLongestSubstring(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number lengthOfLongestSubstring(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number lengthOfLongestSubstring(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abcabcbb\"",
        "expected_output": "3",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "\"bbbbb\"",
        "expected_output": "1",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30101",
    "title": "Longest Repeating Character Replacement",
    "slug": "longest-repeating-character-replacement-strings-5",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "slidingwindow",
    "enable_visualization": true,
    "problem_statement": "Longest substring with same letter after at most k replacements.",
    "input_format": "s = \"ABAB\", k = 2",
    "output_format": "max length",
    "constraints": "1 <= s.length <= 10^5\n0 <= k <= s.length",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"ABAB\", k = 2",
        "output": "4",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"ABAB\", k = 2",
    "starter_code": {
      "javascript": "function characterReplacement(s: string, k: number): number {\n  // your code here\n}\n",
      "python": "def characterReplacement(s: string, k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number characterReplacement(string s, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number characterReplacement(string s, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"ABAB\", 2",
        "expected_output": "4",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "\"AABABBA\", 1",
        "expected_output": "4",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30102",
    "title": "String to Integer (atoi)",
    "slug": "string-to-integer-atoi-strings-6",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Parsing",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Convert string to 32-bit signed integer.",
    "input_format": "s = \"   -42\"",
    "output_format": "integer",
    "constraints": "0 <= s.length <= 200",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"   -42\"",
        "output": "-42",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"   -42\"",
    "starter_code": {
      "javascript": "function myAtoi(s: string): number {\n  // your code here\n}\n",
      "python": "def myAtoi(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number myAtoi(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number myAtoi(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"   -42\"",
        "expected_output": "-42",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "\"4193 with words\"",
        "expected_output": "4193",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30103",
    "title": "Longest Common Prefix",
    "slug": "longest-common-prefix-strings-7",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Trie/Compare",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Longest common prefix string amongst an array of strings.",
    "input_format": "strs = [\"flower\",\"flow\",\"flight\"]",
    "output_format": "prefix",
    "constraints": "1 <= strs.length <= 200\n0 <= strs[i].length <= 200",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "strs = [\"flower\",\"flow\",\"flight\"]",
        "output": "\"fl\"",
        "explanation": ""
      }
    ],
    "sample_input": "strs = [\"flower\",\"flow\",\"flight\"]",
    "starter_code": {
      "javascript": "function longestCommonPrefix(strs: string[]): string {\n  // your code here\n}\n",
      "python": "def longestCommonPrefix(strs: string[]) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string longestCommonPrefix(string[] strs) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string longestCommonPrefix(string[] strs) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"flower\",\"flow\",\"flight\"]",
        "expected_output": "\"fl\"",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[\"dog\",\"racecar\",\"car\"]",
        "expected_output": "\"\"",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30104",
    "title": "Valid Parentheses",
    "slug": "valid-parentheses-strings-8",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Stack",
    "algorithm_type": "O(n)",
    "visualization_type": "stack",
    "enable_visualization": true,
    "problem_statement": "Check if brackets string is valid.",
    "input_format": "s = \"()[]{}\"",
    "output_format": "true",
    "constraints": "1 <= s.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"()[]{}\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"()[]{}\"",
    "starter_code": {
      "javascript": "function isValid(s: string): boolean {\n  // your code here\n}\n",
      "python": "def isValid(s: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isValid(string s) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isValid(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"()[]{}\"",
        "expected_output": "true",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "\"(]\"",
        "expected_output": "false",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30105",
    "title": "Generate Parentheses",
    "slug": "generate-parentheses-strings-9",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Backtracking",
    "algorithm_type": "O(4^n/n^1.5)",
    "visualization_type": "stack",
    "enable_visualization": true,
    "problem_statement": "Generate all combinations of well-formed parentheses.",
    "input_format": "n = 3",
    "output_format": "all combinations",
    "constraints": "1 <= n <= 8",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "n = 3",
        "output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
        "explanation": ""
      }
    ],
    "sample_input": "n = 3",
    "starter_code": {
      "javascript": "function generateParenthesis(n: number): string[] {\n  // your code here\n}\n",
      "python": "def generateParenthesis(n: number) -> string[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string[] generateParenthesis(number n) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string[] generateParenthesis(number n) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "3",
        "expected_output": "[\"((()))\",\"(()())\",\"(())()\",\"()(())\",\"()()()\"]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30106",
    "title": "Group Anagrams",
    "slug": "group-anagrams-strings-10",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n*k log k)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Group anagrams together.",
    "input_format": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
    "output_format": "groups",
    "constraints": "1 <= strs.length <= 10^4\n0 <= strs[i].length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        "explanation": ""
      }
    ],
    "sample_input": "strs = [\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
    "starter_code": {
      "javascript": "function groupAnagrams(strs: string[]): string[] {\n  // your code here\n}\n",
      "python": "def groupAnagrams(strs: string[]) -> string[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string[] groupAnagrams(string[] strs) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string[] groupAnagrams(string[] strs) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"\"]",
        "expected_output": "[[\"\"]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30107",
    "title": "Count and Say",
    "slug": "count-and-say-strings-11",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n^2)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Generate the nth term of count-and-say sequence.",
    "input_format": "n = 4",
    "output_format": "nth term",
    "constraints": "1 <= n <= 30",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "n = 4",
        "output": "\"1211\"",
        "explanation": ""
      }
    ],
    "sample_input": "n = 4",
    "starter_code": {
      "javascript": "function countAndSay(n: number): string {\n  // your code here\n}\n",
      "python": "def countAndSay(n: number) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string countAndSay(number n) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string countAndSay(number n) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "1",
        "expected_output": "\"1\"",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "4",
        "expected_output": "\"1211\"",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30108",
    "title": "Longest Palindromic Substring",
    "slug": "longest-palindromic-substring-strings-12",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "DP",
    "algorithm_type": "O(n^2)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Longest palindromic substring.",
    "input_format": "s = \"babad\"",
    "output_format": "longest palindrome",
    "constraints": "1 <= s.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "explanation": "or \"aba\""
      }
    ],
    "sample_input": "s = \"babad\"",
    "starter_code": {
      "javascript": "function longestPalindrome(s: string): string {\n  // your code here\n}\n",
      "python": "def longestPalindrome(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string longestPalindrome(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"babad\"",
        "expected_output": "\"bab\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30109",
    "title": "String Compression",
    "slug": "string-compression-strings-13",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compress string in-place: [\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"] -> [\"a\",\"2\",\"b\",\"2\",\"c\",\"3\"].",
    "input_format": "chars = [\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]",
    "output_format": "new length",
    "constraints": "1 <= chars.length <= 2000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "chars = [\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]",
        "output": "6",
        "explanation": ""
      }
    ],
    "sample_input": "chars = [\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]",
    "starter_code": {
      "javascript": "function compress(chars: string[]): number {\n  // your code here\n}\n",
      "python": "def compress(chars: string[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number compress(string[] chars) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number compress(string[] chars) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"a\",\"a\",\"b\",\"b\",\"c\",\"c\",\"c\"]",
        "expected_output": "6",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30110",
    "title": "Multiply Strings",
    "slug": "multiply-strings-strings-14",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Math",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Multiply two non-negative integers as strings.",
    "input_format": "num1 = \"123\", num2 = \"456\"",
    "output_format": "product",
    "constraints": "1 <= num1.length, num2.length <= 200",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "num1 = \"123\", num2 = \"456\"",
        "output": "\"56088\"",
        "explanation": ""
      }
    ],
    "sample_input": "num1 = \"123\", num2 = \"456\"",
    "starter_code": {
      "javascript": "function multiply(num1: string, num2: string): string {\n  // your code here\n}\n",
      "python": "def multiply(num1: string, num2: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string multiply(string num1, string num2) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string multiply(string num1, string num2) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"123\",\"456\"",
        "expected_output": "\"56088\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30111",
    "title": "Compare Version Numbers",
    "slug": "compare-version-numbers-strings-15",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n+m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compare two version numbers. Return -1, 0, or 1.",
    "input_format": "v1 = \"1.01\", v2 = \"1.001\"",
    "output_format": "-1/0/1",
    "constraints": "1 <= v1.length, v2.length <= 500",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "v1 = \"1.01\", v2 = \"1.001\"",
        "output": "0",
        "explanation": ""
      }
    ],
    "sample_input": "v1 = \"1.01\", v2 = \"1.001\"",
    "starter_code": {
      "javascript": "function compareVersion(v1: string, v2: string): number {\n  // your code here\n}\n",
      "python": "def compareVersion(v1: string, v2: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number compareVersion(string v1, string v2) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number compareVersion(string v1, string v2) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"1.01\",\"1.001\"",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30112",
    "title": "Integer to Roman",
    "slug": "integer-to-roman-strings-16",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Math",
    "algorithm_type": "O(1)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Convert integer (1-3999) to Roman numeral.",
    "input_format": "num = 58",
    "output_format": "roman",
    "constraints": "1 <= num <= 3999",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "num = 58",
        "output": "\"LVIII\"",
        "explanation": ""
      }
    ],
    "sample_input": "num = 58",
    "starter_code": {
      "javascript": "function intToRoman(num: number): string {\n  // your code here\n}\n",
      "python": "def intToRoman(num: number) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string intToRoman(number num) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string intToRoman(number num) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "58",
        "expected_output": "\"LVIII\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30113",
    "title": "Roman to Integer",
    "slug": "roman-to-integer-strings-17",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Convert Roman numeral to integer.",
    "input_format": "s = \"LVIII\"",
    "output_format": "integer",
    "constraints": "1 <= s.length <= 15",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"LVIII\"",
        "output": "58",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"LVIII\"",
    "starter_code": {
      "javascript": "function romanToInt(s: string): number {\n  // your code here\n}\n",
      "python": "def romanToInt(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number romanToInt(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number romanToInt(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"LVIII\"",
        "expected_output": "58",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30114",
    "title": "Zigzag Conversion",
    "slug": "zigzag-conversion-strings-18",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Simulation",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Convert string to zigzag pattern with numRows rows.",
    "input_format": "s = \"PAYPALISHIRING\", numRows = 3",
    "output_format": "zigzag",
    "constraints": "1 <= s.length <= 1000\n1 <= numRows <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"PAYPALISHIRING\", numRows = 3",
        "output": "\"PAHNAPLSIIGYIR\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"PAYPALISHIRING\", numRows = 3",
    "starter_code": {
      "javascript": "function convert(s: string, numRows: number): string {\n  // your code here\n}\n",
      "python": "def convert(s: string, numRows: number) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string convert(string s, number numRows) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string convert(string s, number numRows) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"PAYPALISHIRING\", 3",
        "expected_output": "\"PAHNAPLSIIGYIR\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30115",
    "title": "Simplify Path",
    "slug": "simplify-path-strings-19",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Stack",
    "algorithm_type": "O(n)",
    "visualization_type": "stack",
    "enable_visualization": true,
    "problem_statement": "Simplify Unix-style absolute path.",
    "input_format": "path = \"/home//foo/\"",
    "output_format": "simplified",
    "constraints": "1 <= path.length <= 3000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "path = \"/home//foo/\"",
        "output": "\"/home/foo\"",
        "explanation": ""
      }
    ],
    "sample_input": "path = \"/home//foo/\"",
    "starter_code": {
      "javascript": "function simplifyPath(path: string): string {\n  // your code here\n}\n",
      "python": "def simplifyPath(path: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string simplifyPath(string path) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string simplifyPath(string path) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"/home//foo/\"",
        "expected_output": "\"/home/foo\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30116",
    "title": "Minimum Remove to Make Valid Parentheses",
    "slug": "minimum-remove-to-make-valid-parentheses-strings-20",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Stack",
    "algorithm_type": "O(n)",
    "visualization_type": "stack",
    "enable_visualization": true,
    "problem_statement": "Remove minimum number of parentheses to make it valid.",
    "input_format": "s = \"a)b(c)d\"",
    "output_format": "valid",
    "constraints": "1 <= s.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"lee(t(c)o)de)\"",
        "output": "\"lee(t(c)o)de\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"lee(t(c)o)de)\"",
    "starter_code": {
      "javascript": "function minRemoveToMakeValid(s: string): string {\n  // your code here\n}\n",
      "python": "def minRemoveToMakeValid(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string minRemoveToMakeValid(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string minRemoveToMakeValid(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"a)b(c)d\"",
        "expected_output": "\"ab(c)d\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30117",
    "title": "Longest Common Subsequence",
    "slug": "longest-common-subsequence-strings-21",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "DP",
    "algorithm_type": "O(n*m)",
    "visualization_type": "dp",
    "enable_visualization": true,
    "problem_statement": "Length of longest common subsequence.",
    "input_format": "a = \"abcde\", b = \"ace\"",
    "output_format": "length",
    "constraints": "1 <= text1.length, text2.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "text1 = \"abcde\", text2 = \"ace\"",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "text1 = \"abcde\", text2 = \"ace\"",
    "starter_code": {
      "javascript": "function longestCommonSubsequence(a: string, b: string): number {\n  // your code here\n}\n",
      "python": "def longestCommonSubsequence(a: string, b: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestCommonSubsequence(string a, string b) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestCommonSubsequence(string a, string b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abcde\",\"ace\"",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30118",
    "title": "Edit Distance",
    "slug": "edit-distance-strings-22",
    "difficulty": "Hard",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "DP",
    "algorithm_type": "O(n*m)",
    "visualization_type": "dp",
    "enable_visualization": true,
    "problem_statement": "Minimum operations to convert a to b.",
    "input_format": "a = \"horse\", b = \"ros\"",
    "output_format": "operations",
    "constraints": "0 <= word1.length, word2.length <= 500",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "word1 = \"horse\", word2 = \"ros\"",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "word1 = \"horse\", word2 = \"ros\"",
    "starter_code": {
      "javascript": "function minDistance(a: string, b: string): number {\n  // your code here\n}\n",
      "python": "def minDistance(a: string, b: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minDistance(string a, string b) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minDistance(string a, string b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"horse\",\"ros\"",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30119",
    "title": "Longest Palindromic Subsequence",
    "slug": "longest-palindromic-subsequence-strings-23",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "DP",
    "algorithm_type": "O(n^2)",
    "visualization_type": "dp",
    "enable_visualization": true,
    "problem_statement": "Length of longest palindromic subsequence.",
    "input_format": "s = \"bbbab\"",
    "output_format": "length",
    "constraints": "1 <= s.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"bbbab\"",
        "output": "4",
        "explanation": "\"bbbb\""
      }
    ],
    "sample_input": "s = \"bbbab\"",
    "starter_code": {
      "javascript": "function longestPalindromeSubseq(s: string): number {\n  // your code here\n}\n",
      "python": "def longestPalindromeSubseq(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestPalindromeSubseq(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestPalindromeSubseq(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"bbbab\"",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30120",
    "title": "Word Break",
    "slug": "word-break-strings-24",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "DP",
    "algorithm_type": "O(n^2)",
    "visualization_type": "dp",
    "enable_visualization": true,
    "problem_statement": "Check if s can be segmented into words in dict.",
    "input_format": "s = \"leetcode\", dict = [\"leet\",\"code\"]",
    "output_format": "true",
    "constraints": "1 <= s.length <= 300\n1 <= wordDict.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"leetcode\", wordDict = [\"leet\",\"code\"]",
    "starter_code": {
      "javascript": "function wordBreak(s: string, dict: string[]): boolean {\n  // your code here\n}\n",
      "python": "def wordBreak(s: string, dict: string[]) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean wordBreak(string s, string[] dict) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean wordBreak(string s, string[] dict) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"leetcode\",[\"leet\",\"code\"]",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30121",
    "title": "Word Break II",
    "slug": "word-break-ii-strings-25",
    "difficulty": "Hard",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "DP + Backtracking",
    "algorithm_type": "O(2^n)",
    "visualization_type": "dp",
    "enable_visualization": true,
    "problem_statement": "Return all sentences from word break.",
    "input_format": "s = \"catsanddog\", dict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]",
    "output_format": "sentences",
    "constraints": "1 <= s.length <= 20",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"catsanddog\", wordDict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]",
        "output": "[\"cats and dog\",\"cat sand dog\"]",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"catsanddog\", wordDict = [\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]",
    "starter_code": {
      "javascript": "function wordBreakII(s: string, dict: string[]): string[] {\n  // your code here\n}\n",
      "python": "def wordBreakII(s: string, dict: string[]) -> string[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string[] wordBreakII(string s, string[] dict) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string[] wordBreakII(string s, string[] dict) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"catsanddog\",[\"cat\",\"cats\",\"and\",\"sand\",\"dog\"]",
        "expected_output": "[\"cats and dog\",\"cat sand dog\"]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30122",
    "title": "Decode Ways",
    "slug": "decode-ways-strings-26",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "dp",
    "enable_visualization": true,
    "problem_statement": "Count ways to decode a digit string (A=1, ..., Z=26).",
    "input_format": "s = \"12\"",
    "output_format": "ways",
    "constraints": "1 <= s.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"12\"",
        "output": "2",
        "explanation": "AB or L"
      }
    ],
    "sample_input": "s = \"12\"",
    "starter_code": {
      "javascript": "function numDecodings(s: string): number {\n  // your code here\n}\n",
      "python": "def numDecodings(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number numDecodings(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number numDecodings(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"12\"",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30123",
    "title": "Distinct Subsequences",
    "slug": "distinct-subsequences-strings-27",
    "difficulty": "Hard",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "DP",
    "algorithm_type": "O(n*m)",
    "visualization_type": "dp",
    "enable_visualization": true,
    "problem_statement": "Count distinct subsequences of s equal to t.",
    "input_format": "s = \"rabbbit\", t = \"rabbit\"",
    "output_format": "count",
    "constraints": "1 <= s.length, t.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"rabbbit\", t = \"rabbit\"",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"rabbbit\", t = \"rabbit\"",
    "starter_code": {
      "javascript": "function numDistinct(s: string, t: string): number {\n  // your code here\n}\n",
      "python": "def numDistinct(s: string, t: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number numDistinct(string s, string t) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number numDistinct(string s, string t) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"rabbbit\",\"rabbit\"",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30124",
    "title": "Reverse Words in String",
    "slug": "reverse-words-in-string-strings-28",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse words in a string (handles multiple spaces).",
    "input_format": "s = \"  hello world  \"",
    "output_format": "reversed",
    "constraints": "1 <= s.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"  hello world  \"",
        "output": "\"world hello\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"  hello world  \"",
    "starter_code": {
      "javascript": "function reverseWords(s: string): string {\n  // your code here\n}\n",
      "python": "def reverseWords(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string reverseWords(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string reverseWords(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"  hello world  \"",
        "expected_output": "\"world hello\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30125",
    "title": "Longest Substring With At Most K Distinct",
    "slug": "longest-substring-with-at-most-k-distinct-strings-29",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "slidingwindow",
    "enable_visualization": true,
    "problem_statement": "Longest substring with at most k distinct characters.",
    "input_format": "s = \"eceba\", k = 2",
    "output_format": "max length",
    "constraints": "1 <= s.length <= 5*10^4\n1 <= k <= 26",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"eceba\", k = 2",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"eceba\", k = 2",
    "starter_code": {
      "javascript": "function lengthOfLongestKDistinct(s: string, k: number): number {\n  // your code here\n}\n",
      "python": "def lengthOfLongestKDistinct(s: string, k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number lengthOfLongestKDistinct(string s, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number lengthOfLongestKDistinct(string s, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"eceba\", 2",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30126",
    "title": "Substring With Concatenation All Words",
    "slug": "substring-with-concatenation-all-words-strings-30",
    "difficulty": "Hard",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Starting indices of substrings that are concatenation of all words.",
    "input_format": "s = \"barfoothefoobarman\", words = [\"foo\",\"bar\"]",
    "output_format": "indices",
    "constraints": "1 <= s.length <= 10^4\n1 <= words.length <= 5000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"barfoothefoobarman\", words = [\"foo\",\"bar\"]",
        "output": "[0,9]",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"barfoothefoobarman\", words = [\"foo\",\"bar\"]",
    "starter_code": {
      "javascript": "function findSubstring(s: string, words: string[]): number[] {\n  // your code here\n}\n",
      "python": "def findSubstring(s: string, words: string[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] findSubstring(string s, string[] words) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] findSubstring(string s, string[] words) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"barfoothefoobarman\",[\"foo\",\"bar\"]",
        "expected_output": "[0,9]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30127",
    "title": "Valid Palindrome II",
    "slug": "valid-palindrome-ii-strings-31",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if s can be palindrome after deleting at most one char.",
    "input_format": "s = \"abca\"",
    "output_format": "true or false",
    "constraints": "1 <= s.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"abca\"",
        "output": "true",
        "explanation": "delete b or c"
      }
    ],
    "sample_input": "s = \"abca\"",
    "starter_code": {
      "javascript": "function validPalindromeII(s: string): boolean {\n  // your code here\n}\n",
      "python": "def validPalindromeII(s: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean validPalindromeII(string s) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean validPalindromeII(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abca\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30128",
    "title": "Longest Valid Parentheses",
    "slug": "longest-valid-parentheses-strings-32",
    "difficulty": "Hard",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Stack",
    "algorithm_type": "O(n)",
    "visualization_type": "stack",
    "enable_visualization": true,
    "problem_statement": "Length of longest valid parentheses substring.",
    "input_format": "s = \"(()\"",
    "output_format": "length",
    "constraints": "0 <= s.length <= 3*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"(()\"",
        "output": "2",
        "explanation": "substr ()"
      }
    ],
    "sample_input": "s = \"(()\"",
    "starter_code": {
      "javascript": "function longestValidParentheses(s: string): number {\n  // your code here\n}\n",
      "python": "def longestValidParentheses(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestValidParentheses(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestValidParentheses(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"(()\"",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30129",
    "title": "Minimum Window Substring",
    "slug": "minimum-window-substring-strings-33",
    "difficulty": "Hard",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "slidingwindow",
    "enable_visualization": true,
    "problem_statement": "Minimum window substring of s containing all chars of t.",
    "input_format": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "output_format": "minimum window",
    "constraints": "1 <= s.length, t.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
        "output": "\"BANC\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"ADOBECODEBANC\", t = \"ABC\"",
    "starter_code": {
      "javascript": "function minWindow(s: string, t: string): string {\n  // your code here\n}\n",
      "python": "def minWindow(s: string, t: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string minWindow(string s, string t) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"ADOBECODEBANC\",\"ABC\"",
        "expected_output": "\"BANC\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30130",
    "title": "Permutation in String",
    "slug": "permutation-in-string-strings-34",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "slidingwindow",
    "enable_visualization": true,
    "problem_statement": "Check if s2 contains a permutation of s1.",
    "input_format": "s1 = \"ab\", s2 = \"eidbaooo\"",
    "output_format": "true",
    "constraints": "1 <= s1.length, s2.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s1 = \"ab\", s2 = \"eidbaooo\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s1 = \"ab\", s2 = \"eidbaooo\"",
    "starter_code": {
      "javascript": "function checkInclusion(s1: string, s2: string): boolean {\n  // your code here\n}\n",
      "python": "def checkInclusion(s1: string, s2: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean checkInclusion(string s1, string s2) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean checkInclusion(string s1, string s2) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"ab\",\"eidbaooo\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30131",
    "title": "Find All Anagrams in String",
    "slug": "find-all-anagrams-in-string-strings-35",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "slidingwindow",
    "enable_visualization": true,
    "problem_statement": "Starting indices of p anagrams in s.",
    "input_format": "s = \"cbaebabacd\", p = \"abc\"",
    "output_format": "indices",
    "constraints": "1 <= s.length, p.length <= 3*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"cbaebabacd\", p = \"abc\"",
        "output": "[0,6]",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"cbaebabacd\", p = \"abc\"",
    "starter_code": {
      "javascript": "function findAnagrams(s: string, p: string): number[] {\n  // your code here\n}\n",
      "python": "def findAnagrams(s: string, p: string) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] findAnagrams(string s, string p) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] findAnagrams(string s, string p) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"cbaebabacd\",\"abc\"",
        "expected_output": "[0,6]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30132",
    "title": "String to Integer Manual",
    "slug": "string-to-integer-manual-strings-36",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Parsing",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Implement string to integer conversion manually.",
    "input_format": "s = \"   +42  \"",
    "output_format": "integer",
    "constraints": "1 <= s.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"   +42  \"",
        "output": "42",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"   +42  \"",
    "starter_code": {
      "javascript": "function strToInt(s: string): number {\n  // your code here\n}\n",
      "python": "def strToInt(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number strToInt(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number strToInt(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"42\"",
        "expected_output": "42",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30133",
    "title": "First Unique Character in String",
    "slug": "first-unique-character-in-string-strings-37",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Index of first non-repeating character.",
    "input_format": "s = \"leetcode\"",
    "output_format": "index",
    "constraints": "1 <= s.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"leetcode\"",
        "output": "0",
        "explanation": "l"
      }
    ],
    "sample_input": "s = \"leetcode\"",
    "starter_code": {
      "javascript": "function firstUniqChar(s: string): number {\n  // your code here\n}\n",
      "python": "def firstUniqChar(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number firstUniqChar(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number firstUniqChar(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"leetcode\"",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30134",
    "title": "Ransom Note",
    "slug": "ransom-note-strings-38",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Check if ransom can be built from magazine.",
    "input_format": "ransom = \"aa\", mag = \"aab\"",
    "output_format": "true",
    "constraints": "1 <= ransomNote.length, magazine.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "ransomNote = \"aa\", magazine = \"aab\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "ransomNote = \"aa\", magazine = \"aab\"",
    "starter_code": {
      "javascript": "function canConstruct(ransom: string, mag: string): boolean {\n  // your code here\n}\n",
      "python": "def canConstruct(ransom: string, mag: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean canConstruct(string ransom, string mag) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean canConstruct(string ransom, string mag) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"aa\",\"aab\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30135",
    "title": "Jewels and Stones",
    "slug": "jewels-and-stones-strings-39",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Hash Set",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Count how many stones are jewels.",
    "input_format": "j = \"aA\", s = \"aAAbbbb\"",
    "output_format": "count",
    "constraints": "1 <= jewels.length, stones.length <= 50",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "jewels = \"aA\", stones = \"aAAbbbb\"",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "jewels = \"aA\", stones = \"aAAbbbb\"",
    "starter_code": {
      "javascript": "function numJewelsInStones(j: string, s: string): number {\n  // your code here\n}\n",
      "python": "def numJewelsInStones(j: string, s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number numJewelsInStones(string j, string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number numJewelsInStones(string j, string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"aA\",\"aAAbbbb\"",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30136",
    "title": "Is Subsequence",
    "slug": "is-subsequence-strings-40",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if s is a subsequence of t.",
    "input_format": "s = \"abc\", t = \"ahbgdc\"",
    "output_format": "true",
    "constraints": "0 <= s.length <= 100\n0 <= t.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"abc\", t = \"ahbgdc\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"abc\", t = \"ahbgdc\"",
    "starter_code": {
      "javascript": "function isSubsequence(s: string, t: string): boolean {\n  // your code here\n}\n",
      "python": "def isSubsequence(s: string, t: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isSubsequence(string s, string t) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isSubsequence(string s, string t) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abc\",\"ahbgdc\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30137",
    "title": "Reverse Vowels of String",
    "slug": "reverse-vowels-of-string-strings-41",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse only the vowels in a string.",
    "input_format": "s = \"leetcode\"",
    "output_format": "reversed",
    "constraints": "1 <= s.length <= 3*10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"leetcode\"",
        "output": "\"leotcede\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"leetcode\"",
    "starter_code": {
      "javascript": "function reverseVowels(s: string): string {\n  // your code here\n}\n",
      "python": "def reverseVowels(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string reverseVowels(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string reverseVowels(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"leetcode\"",
        "expected_output": "\"leotcede\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30138",
    "title": "Valid Number",
    "slug": "valid-number-strings-42",
    "difficulty": "Hard",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Parsing",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if string is a valid number.",
    "input_format": "s = \"0\"",
    "output_format": "true or false",
    "constraints": "0 <= s.length <= 200",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"0\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"0\"",
    "starter_code": {
      "javascript": "function isNumber(s: string): boolean {\n  // your code here\n}\n",
      "python": "def isNumber(s: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isNumber(string s) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isNumber(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"0\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30139",
    "title": "Integer Break",
    "slug": "integer-break-strings-43",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "dp",
    "enable_visualization": true,
    "problem_statement": "Break n into sum of k >= 2 positive integers to maximize product.",
    "input_format": "n = 10",
    "output_format": "max product",
    "constraints": "2 <= n <= 58",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "n = 10",
        "output": "36",
        "explanation": "3+3+4 = 10, 3*3*4 = 36"
      }
    ],
    "sample_input": "n = 10",
    "starter_code": {
      "javascript": "function integerBreak(n: number): number {\n  // your code here\n}\n",
      "python": "def integerBreak(n: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number integerBreak(number n) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number integerBreak(number n) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "10",
        "expected_output": "36",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30140",
    "title": "Rotate String",
    "slug": "rotate-string-strings-44",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if b is a rotation of a.",
    "input_format": "a = \"abcde\", b = \"cdeab\"",
    "output_format": "true",
    "constraints": "1 <= s.length, goal.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"abcde\", goal = \"cdeab\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"abcde\", goal = \"cdeab\"",
    "starter_code": {
      "javascript": "function rotateString(a: string, b: string): boolean {\n  // your code here\n}\n",
      "python": "def rotateString(a: string, b: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean rotateString(string a, string b) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean rotateString(string a, string b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abcde\",\"cdeab\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30141",
    "title": "Repeated String Match",
    "slug": "repeated-string-match-strings-45",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String Search",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min times to repeat a so b is a substring.",
    "input_format": "a = \"abcd\", b = \"cdabcdab\"",
    "output_format": "min repeats",
    "constraints": "1 <= a.length, b.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "a = \"abcd\", b = \"cdabcdab\"",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "a = \"abcd\", b = \"cdabcdab\"",
    "starter_code": {
      "javascript": "function repeatedStringMatch(a: string, b: string): number {\n  // your code here\n}\n",
      "python": "def repeatedStringMatch(a: string, b: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number repeatedStringMatch(string a, string b) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number repeatedStringMatch(string a, string b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abcd\",\"cdabcdab\"",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30142",
    "title": "Custom Sort String",
    "slug": "custom-sort-string-strings-46",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Counting Sort",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort s such that chars in order come first, then the rest.",
    "input_format": "order = \"cba\", s = \"abcd\"",
    "output_format": "sorted",
    "constraints": "1 <= order.length, s.length <= 200",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "order = \"cba\", s = \"abcd\"",
        "output": "\"cbad\"",
        "explanation": ""
      }
    ],
    "sample_input": "order = \"cba\", s = \"abcd\"",
    "starter_code": {
      "javascript": "function customSortString(order: string, s: string): string {\n  // your code here\n}\n",
      "python": "def customSortString(order: string, s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string customSortString(string order, string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string customSortString(string order, string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"cba\",\"abcd\"",
        "expected_output": "\"cbad\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30143",
    "title": "Reorganize String",
    "slug": "reorganize-string-strings-47",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Counting Sort",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reorganize so no two adjacent are the same.",
    "input_format": "s = \"aab\"",
    "output_format": "reorganized",
    "constraints": "1 <= s.length <= 500",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"aab\"",
        "output": "\"aba\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"aab\"",
    "starter_code": {
      "javascript": "function reorganizeString(s: string): string {\n  // your code here\n}\n",
      "python": "def reorganizeString(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string reorganizeString(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string reorganizeString(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"aab\"",
        "expected_output": "\"aba\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30144",
    "title": "Minimum Number of Steps to Make Two Strings Anagram",
    "slug": "minimum-number-of-steps-to-make-two-strings-anagram-strings-48",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Min char changes in t to make it anagram of s.",
    "input_format": "s = \"bab\", t = \"aba\"",
    "output_format": "steps",
    "constraints": "1 <= s.length <= 5*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"bab\", t = \"aba\"",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"bab\", t = \"aba\"",
    "starter_code": {
      "javascript": "function minSteps(s: string, t: string): number {\n  // your code here\n}\n",
      "python": "def minSteps(s: string, t: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minSteps(string s, string t) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minSteps(string s, string t) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"bab\",\"aba\"",
        "expected_output": "1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30145",
    "title": "Length of Last Word",
    "slug": "length-of-last-word-strings-49",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Length of last word in a string.",
    "input_format": "s = \"Hello World\"",
    "output_format": "length",
    "constraints": "1 <= s.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"Hello World\"",
        "output": "5",
        "explanation": "World"
      }
    ],
    "sample_input": "s = \"Hello World\"",
    "starter_code": {
      "javascript": "function lengthOfLastWord(s: string): number {\n  // your code here\n}\n",
      "python": "def lengthOfLastWord(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number lengthOfLastWord(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number lengthOfLastWord(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"Hello World\"",
        "expected_output": "5",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30146",
    "title": "Detect Capital",
    "slug": "detect-capital-strings-50",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if capital usage is correct.",
    "input_format": "word = \"USA\"",
    "output_format": "true or false",
    "constraints": "1 <= word.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "word = \"USA\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "word = \"USA\"",
    "starter_code": {
      "javascript": "function detectCapitalUse(word: string): boolean {\n  // your code here\n}\n",
      "python": "def detectCapitalUse(word: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean detectCapitalUse(string word) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean detectCapitalUse(string word) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"USA\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30147",
    "title": "Excel Sheet Column Number",
    "slug": "excel-sheet-column-number-strings-51",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Convert Excel column title to number.",
    "input_format": "col = \"A\"",
    "output_format": "number",
    "constraints": "1 <= columnTitle.length <= 7",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "columnTitle = \"A\"",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "columnTitle = \"A\"",
    "starter_code": {
      "javascript": "function titleToNumber(col: string): number {\n  // your code here\n}\n",
      "python": "def titleToNumber(col: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number titleToNumber(string col) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number titleToNumber(string col) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"AB\"",
        "expected_output": "28",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30148",
    "title": "Excel Sheet Column Title",
    "slug": "excel-sheet-column-title-strings-52",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Math",
    "algorithm_type": "O(log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Convert column number to title.",
    "input_format": "n = 1",
    "output_format": "title",
    "constraints": "1 <= columnNumber <= 2^31 - 1",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "columnNumber = 1",
        "output": "\"A\"",
        "explanation": ""
      }
    ],
    "sample_input": "columnNumber = 1",
    "starter_code": {
      "javascript": "function convertToTitle(n: number): string {\n  // your code here\n}\n",
      "python": "def convertToTitle(n: number) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string convertToTitle(number n) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string convertToTitle(number n) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "28",
        "expected_output": "\"AB\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30149",
    "title": "Word Pattern",
    "slug": "word-pattern-strings-53",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if string follows pattern.",
    "input_format": "p = \"abba\", s = \"dog cat cat dog\"",
    "output_format": "true",
    "constraints": "1 <= pattern.length <= 300\n1 <= s.length <= 3000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "pattern = \"abba\", s = \"dog cat cat dog\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "pattern = \"abba\", s = \"dog cat cat dog\"",
    "starter_code": {
      "javascript": "function wordPattern(p: string, s: string): boolean {\n  // your code here\n}\n",
      "python": "def wordPattern(p: string, s: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean wordPattern(string p, string s) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean wordPattern(string p, string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abba\",\"dog cat cat dog\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30150",
    "title": "Number of Segments in String",
    "slug": "number-of-segments-in-string-strings-54",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count segments in a string (split by spaces).",
    "input_format": "s = \"Hello, my name is John\"",
    "output_format": "count",
    "constraints": "0 <= s.length <= 300",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"Hello, my name is John\"",
        "output": "5",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"Hello, my name is John\"",
    "starter_code": {
      "javascript": "function countSegments(s: string): number {\n  // your code here\n}\n",
      "python": "def countSegments(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number countSegments(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number countSegments(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"Hello, my name is John\"",
        "expected_output": "5",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30151",
    "title": "Valid Word Abbreviation",
    "slug": "valid-word-abbreviation-strings-55",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if abbr is valid for word.",
    "input_format": "word = \"substitution\", abbr = \"s10n\"",
    "output_format": "true",
    "constraints": "1 <= word.length <= 20\n1 <= abbr.length <= 10",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "word = \"substitution\", abbr = \"s10n\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "word = \"substitution\", abbr = \"s10n\"",
    "starter_code": {
      "javascript": "function validWordAbbreviation(word: string, abbr: string): boolean {\n  // your code here\n}\n",
      "python": "def validWordAbbreviation(word: string, abbr: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean validWordAbbreviation(string word, string abbr) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean validWordAbbreviation(string word, string abbr) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"substitution\",\"s10n\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30152",
    "title": "Minimum Length of String After Deleting Similar Ends",
    "slug": "minimum-length-of-string-after-deleting-similar-ends-strings-56",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min length after removing similar characters from both ends.",
    "input_format": "s = \"ca\"",
    "output_format": "min length",
    "constraints": "1 <= s.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"ca\"",
        "output": "2",
        "explanation": "c and a are different, no removal"
      }
    ],
    "sample_input": "s = \"ca\"",
    "starter_code": {
      "javascript": "function minimumLength(s: string): number {\n  // your code here\n}\n",
      "python": "def minimumLength(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minimumLength(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minimumLength(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"cabaabac\"",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30153",
    "title": "Remove All Adjacent Duplicates",
    "slug": "remove-all-adjacent-duplicates-strings-57",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Stack",
    "algorithm_type": "O(n)",
    "visualization_type": "stack",
    "enable_visualization": true,
    "problem_statement": "Remove all adjacent duplicate pairs.",
    "input_format": "s = \"abbaca\"",
    "output_format": "result",
    "constraints": "1 <= s.length <= 2*10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"abbaca\"",
        "output": "\"ca\"",
        "explanation": "bb removed, then aa removed"
      }
    ],
    "sample_input": "s = \"abbaca\"",
    "starter_code": {
      "javascript": "function removeDuplicates(s: string): string {\n  // your code here\n}\n",
      "python": "def removeDuplicates(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string removeDuplicates(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string removeDuplicates(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abbaca\"",
        "expected_output": "\"ca\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30154",
    "title": "Remove All Adjacent Duplicates II",
    "slug": "remove-all-adjacent-duplicates-ii-strings-58",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Stack",
    "algorithm_type": "O(n)",
    "visualization_type": "stack",
    "enable_visualization": true,
    "problem_statement": "Remove groups of k consecutive duplicates.",
    "input_format": "s = \"deeedbbcccbdaa\", k = 3",
    "output_format": "result",
    "constraints": "1 <= s.length <= 10^5\n2 <= k <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"deeedbbcccbdaa\", k = 3",
        "output": "\"aa\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"deeedbbcccbdaa\", k = 3",
    "starter_code": {
      "javascript": "function removeDuplicatesK(s: string, k: number): string {\n  // your code here\n}\n",
      "python": "def removeDuplicatesK(s: string, k: number) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string removeDuplicatesK(string s, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string removeDuplicatesK(string s, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"pbbcggttciiippooaais\", 2",
        "expected_output": "\"ps\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30155",
    "title": "Check if Two Strings Are Equivalent",
    "slug": "check-if-two-strings-are-equivalent-strings-59",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if concatenated arrays form equal strings.",
    "input_format": "a = [\"ab\",\"c\"], b = [\"a\",\"bc\"]",
    "output_format": "true",
    "constraints": "1 <= word1.length, word2.length <= 10^3",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "word1 = [\"ab\", \"c\"], word2 = [\"a\", \"bc\"]",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "word1 = [\"ab\", \"c\"], word2 = [\"a\", \"bc\"]",
    "starter_code": {
      "javascript": "function arrayStringsAreEqual(a: string[], b: string[]): boolean {\n  // your code here\n}\n",
      "python": "def arrayStringsAreEqual(a: string[], b: string[]) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean arrayStringsAreEqual(string[] a, string[] b) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean arrayStringsAreEqual(string[] a, string[] b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"ab\",\"c\"],[\"a\",\"bc\"]",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30156",
    "title": "Reverse Prefix of Word",
    "slug": "reverse-prefix-of-word-strings-60",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse prefix up to and including first occurrence of ch.",
    "input_format": "word = \"abcdefd\", ch = \"d\"",
    "output_format": "reversed",
    "constraints": "1 <= word.length <= 250\nch is a lowercase English letter",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "word = \"abcdefd\", ch = \"d\"",
        "output": "\"dcbaefd\"",
        "explanation": ""
      }
    ],
    "sample_input": "word = \"abcdefd\", ch = \"d\"",
    "starter_code": {
      "javascript": "function reversePrefix(word: string, ch: string): string {\n  // your code here\n}\n",
      "python": "def reversePrefix(word: string, ch: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string reversePrefix(string word, string ch) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string reversePrefix(string word, string ch) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abcdefd\",\"d\"",
        "expected_output": "\"dcbaefd\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30157",
    "title": "Truncate Sentence",
    "slug": "truncate-sentence-strings-61",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Truncate sentence to first k words.",
    "input_format": "s = \"Hello how are you\", k = 3",
    "output_format": "truncated",
    "constraints": "1 <= s.length <= 500\n1 <= k <= number of words",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"Hello how are you Contestant\", k = 4",
        "output": "\"Hello how are you\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"Hello how are you Contestant\", k = 4",
    "starter_code": {
      "javascript": "function truncateSentence(s: string, k: number): string {\n  // your code here\n}\n",
      "python": "def truncateSentence(s: string, k: number) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string truncateSentence(string s, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string truncateSentence(string s, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"Hello how are you\", 3",
        "expected_output": "\"Hello how are\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30158",
    "title": "Sort the People",
    "slug": "sort-the-people-strings-62",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort names by corresponding heights in decreasing order.",
    "input_format": "names = [\"Mary\",\"John\",\"Emma\"], heights = [180,165,170]",
    "output_format": "sorted",
    "constraints": "n == names.length == heights.length\n1 <= n <= 10^3",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "names = [\"Mary\",\"John\",\"Emma\"], heights = [180,165,170]",
        "output": "[\"Mary\",\"Emma\",\"John\"]",
        "explanation": ""
      }
    ],
    "sample_input": "names = [\"Mary\",\"John\",\"Emma\"], heights = [180,165,170]",
    "starter_code": {
      "javascript": "function sortPeople(names: string[], heights: number[]): string[] {\n  // your code here\n}\n",
      "python": "def sortPeople(names: string[], heights: number[]) -> string[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string[] sortPeople(string[] names, number[] heights) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string[] sortPeople(string[] names, number[] heights) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"Mary\",\"John\",\"Emma\"],[180,165,170]",
        "expected_output": "[\"Mary\",\"Emma\",\"John\"]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30159",
    "title": "Capitalize the Title",
    "slug": "capitalize-the-title-strings-63",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Capitalize title properly.",
    "input_format": "t = \"i lOve leetcode\"",
    "output_format": "capitalized",
    "constraints": "1 <= title.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "title = \"i lOve leetcode\"",
        "output": "\"i Love Leetcode\"",
        "explanation": ""
      }
    ],
    "sample_input": "title = \"i lOve leetcode\"",
    "starter_code": {
      "javascript": "function capitalizeTitle(t: string): string {\n  // your code here\n}\n",
      "python": "def capitalizeTitle(t: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string capitalizeTitle(string t) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string capitalizeTitle(string t) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"i lOve leetcode\"",
        "expected_output": "\"i Love Leetcode\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30160",
    "title": "Sort Vowels in String",
    "slug": "sort-vowels-in-string-strings-64",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort vowels in a string by their ASCII values.",
    "input_format": "s = \"lEetcOde\"",
    "output_format": "sorted",
    "constraints": "1 <= s.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"lEetcOde\"",
        "output": "\"lEOtcede\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"lEetcOde\"",
    "starter_code": {
      "javascript": "function sortVowels(s: string): string {\n  // your code here\n}\n",
      "python": "def sortVowels(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string sortVowels(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string sortVowels(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"lEetcOde\"",
        "expected_output": "\"lEOtcede\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30161",
    "title": "Check if One String Swap Makes Equal",
    "slug": "check-if-one-string-swap-makes-equal-strings-65",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Check if one swap of two chars in s1 makes it s2.",
    "input_format": "a = \"bank\", b = \"kanb\"",
    "output_format": "true",
    "constraints": "1 <= s1.length, s2.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s1 = \"bank\", s2 = \"kanb\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s1 = \"bank\", s2 = \"kanb\"",
    "starter_code": {
      "javascript": "function areAlmostEqual(a: string, b: string): boolean {\n  // your code here\n}\n",
      "python": "def areAlmostEqual(a: string, b: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean areAlmostEqual(string a, string b) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean areAlmostEqual(string a, string b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"bank\",\"kanb\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30162",
    "title": "Number of Strings That Appear as Substrings",
    "slug": "number-of-strings-that-appear-as-substrings-strings-66",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count how many patterns appear as substrings in word.",
    "input_format": "patterns = [\"a\",\"abc\",\"bc\",\"d\"], word = \"abc\"",
    "output_format": "count",
    "constraints": "1 <= patterns.length <= 100\n1 <= word.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "patterns = [\"a\",\"abc\",\"bc\",\"d\"], word = \"abc\"",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "patterns = [\"a\",\"abc\",\"bc\",\"d\"], word = \"abc\"",
    "starter_code": {
      "javascript": "function numOfStrings(patterns: string[], word: string): number {\n  // your code here\n}\n",
      "python": "def numOfStrings(patterns: string[], word: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number numOfStrings(string[] patterns, string word) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number numOfStrings(string[] patterns, string word) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"a\",\"abc\",\"bc\",\"d\"],\"abc\"",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30163",
    "title": "Largest Odd Number in String",
    "slug": "largest-odd-number-in-string-strings-67",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Greedy",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Largest odd number from leading digits of num.",
    "input_format": "num = \"52\"",
    "output_format": "largest odd",
    "constraints": "1 <= num.length <= 10^5\nonly digits, no leading zero",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "num = \"52\"",
        "output": "\"5\"",
        "explanation": ""
      }
    ],
    "sample_input": "num = \"52\"",
    "starter_code": {
      "javascript": "function largestOddNumber(num: string): string {\n  // your code here\n}\n",
      "python": "def largestOddNumber(num: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string largestOddNumber(string num) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string largestOddNumber(string num) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"4206\"",
        "expected_output": "\"\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30164",
    "title": "Largest 3-Same-Digit Number in String",
    "slug": "largest-3-same-digit-number-in-string-strings-68",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Largest good integer (3 same consecutive digits).",
    "input_format": "num = \"6777133339\"",
    "output_format": "largest",
    "constraints": "3 <= num.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "num = \"6777133339\"",
        "output": "\"777\"",
        "explanation": ""
      }
    ],
    "sample_input": "num = \"6777133339\"",
    "starter_code": {
      "javascript": "function largestGoodInteger(num: string): string {\n  // your code here\n}\n",
      "python": "def largestGoodInteger(num: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string largestGoodInteger(string num) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string largestGoodInteger(string num) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"2300019\"",
        "expected_output": "\"000\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30165",
    "title": "Maximum Value of a String",
    "slug": "maximum-value-of-a-string-strings-69",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Value of a string is its length if no digit, else the number.",
    "input_format": "strs = [\"alic3\",\"bob\",\"3\",\"4\",\"00000\"]",
    "output_format": "max value",
    "constraints": "1 <= strs.length <= 100\n1 <= strs[i].length <= 9",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "strs = [\"alic3\",\"bob\",\"3\",\"4\",\"00000\"]",
        "output": "5",
        "explanation": "\"alic3\" or \"00000\""
      }
    ],
    "sample_input": "strs = [\"alic3\",\"bob\",\"3\",\"4\",\"00000\"]",
    "starter_code": {
      "javascript": "function maximumValue(strs: string[]): number {\n  // your code here\n}\n",
      "python": "def maximumValue(strs: string[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maximumValue(string[] strs) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maximumValue(string[] strs) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"alic3\",\"bob\",\"3\",\"4\",\"00000\"]",
        "expected_output": "5",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30166",
    "title": "Sort Characters by Frequency",
    "slug": "sort-characters-by-frequency-strings-70",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n log n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Sort chars in s by decreasing frequency.",
    "input_format": "s = \"tree\"",
    "output_format": "sorted",
    "constraints": "1 <= s.length <= 5*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"tree\"",
        "output": "\"eert\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"tree\"",
    "starter_code": {
      "javascript": "function frequencySort(s: string): string {\n  // your code here\n}\n",
      "python": "def frequencySort(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string frequencySort(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string frequencySort(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"tree\"",
        "expected_output": "\"eert\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30167",
    "title": "Check if Two String Arrays are Equivalent",
    "slug": "check-if-two-string-arrays-are-equivalent-strings-71",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if concatenation of two string arrays are equal.",
    "input_format": "a = [\"ab\",\"c\"], b = [\"a\",\"bc\"]",
    "output_format": "true",
    "constraints": "1 <= word1.length, word2.length <= 10^3",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "word1 = [\"ab\", \"c\"], word2 = [\"a\", \"bc\"]",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "word1 = [\"ab\", \"c\"], word2 = [\"a\", \"bc\"]",
    "starter_code": {
      "javascript": "function arrayStringsAreEqual2(a: string[], b: string[]): boolean {\n  // your code here\n}\n",
      "python": "def arrayStringsAreEqual2(a: string[], b: string[]) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean arrayStringsAreEqual2(string[] a, string[] b) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean arrayStringsAreEqual2(string[] a, string[] b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"ab\",\"c\"],[\"a\",\"bc\"]",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30168",
    "title": "Largest Number At Least Twice of Others",
    "slug": "largest-number-at-least-twice-of-others-strings-72",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Greedy",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Largest is at least twice every other number. Return its index.",
    "input_format": "nums = [3, 6, 1, 0]",
    "output_format": "index or -1",
    "constraints": "1 <= nums.length <= 50\n0 <= nums[i] <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,6,1,0]",
        "output": "1",
        "explanation": "6 >= 2*3"
      }
    ],
    "sample_input": "nums = [3,6,1,0]",
    "starter_code": {
      "javascript": "function dominantIndex(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def dominantIndex(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number dominantIndex(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number dominantIndex(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4]",
        "expected_output": "-1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30169",
    "title": "Number of Good Pairs",
    "slug": "number-of-good-pairs-strings-73",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Number of pairs (i,j) where i<j and nums[i]==nums[j].",
    "input_format": "nums = [1,2,3,1,1,3]",
    "output_format": "good pairs",
    "constraints": "1 <= nums.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,1,1,3]",
        "output": "4",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3,1,1,3]",
    "starter_code": {
      "javascript": "function numIdenticalPairs(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def numIdenticalPairs(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number numIdenticalPairs(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number numIdenticalPairs(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,1,1,1]",
        "expected_output": "6",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30170",
    "title": "Check if Sentence Is Pangram",
    "slug": "check-if-sentence-is-pangram-strings-74",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Hash Set",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Check if sentence contains every letter.",
    "input_format": "s = \"thequickbrownfoxjumpsoverthelazydog\"",
    "output_format": "true",
    "constraints": "1 <= sentence.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "sentence = \"thequickbrownfoxjumpsoverthelazydog\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "sentence = \"thequickbrownfoxjumpsoverthelazydog\"",
    "starter_code": {
      "javascript": "function checkIfPangram(s: string): boolean {\n  // your code here\n}\n",
      "python": "def checkIfPangram(s: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean checkIfPangram(string s) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean checkIfPangram(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"leetcode\"",
        "expected_output": "false",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30171",
    "title": "Check if All A Appears Before All B",
    "slug": "check-if-all-a-appears-before-all-b-strings-75",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if all a appears before any b.",
    "input_format": "s = \"aaabbb\"",
    "output_format": "true",
    "constraints": "1 <= s.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"aaabbb\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"aaabbb\"",
    "starter_code": {
      "javascript": "function checkString(s: string): boolean {\n  // your code here\n}\n",
      "python": "def checkString(s: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean checkString(string s) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean checkString(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abab\"",
        "expected_output": "false",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30172",
    "title": "Count the Number of Vowel Strings in Range",
    "slug": "count-the-number-of-vowel-strings-in-range-strings-76",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count words in range [l, r] that start and end with vowel.",
    "input_format": "words = [\"are\",\"amy\",\"u\"], l=0, r=2",
    "output_format": "count",
    "constraints": "1 <= words.length <= 1000\n0 <= left <= right < words.length",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "words = [\"are\",\"amy\",\"u\"], left = 0, right = 2",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "words = [\"are\",\"amy\",\"u\"], left = 0, right = 2",
    "starter_code": {
      "javascript": "function vowelStrings(words: string[], l: number, r: number): number {\n  // your code here\n}\n",
      "python": "def vowelStrings(words: string[], l: number, r: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number vowelStrings(string[] words, number l, number r) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number vowelStrings(string[] words, number l, number r) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"hey\",\"aeo\",\"mu\",\"ooo\",\"artro\"], 1, 4",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30173",
    "title": "Maximum Number of Words in Sentence",
    "slug": "maximum-number-of-words-in-sentence-strings-77",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max number of words in any sentence.",
    "input_format": "sents = [\"alice and bob love leetcode\"]",
    "output_format": "max words",
    "constraints": "1 <= sentences.length <= 100\n1 <= sentences[i].length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "sentences = [\"alice and bob love leetcode\",\"i think so too\"]",
        "output": "6",
        "explanation": ""
      }
    ],
    "sample_input": "sentences = [\"alice and bob love leetcode\",\"i think so too\"]",
    "starter_code": {
      "javascript": "function mostWordsFound(sents: string[]): number {\n  // your code here\n}\n",
      "python": "def mostWordsFound(sents: string[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number mostWordsFound(string[] sents) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number mostWordsFound(string[] sents) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"please wait\",\"continue to fight\",\"continue to win\"]",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30174",
    "title": "Reverse Odd Levels of Binary Tree",
    "slug": "reverse-odd-levels-of-binary-tree-strings-78",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "BFS",
    "algorithm_type": "O(n)",
    "visualization_type": "binarysearch",
    "enable_visualization": true,
    "problem_statement": "Reverse values at odd levels of binary tree.",
    "input_format": "root = [2,3,5,8,13,21,34]",
    "output_format": "modified",
    "constraints": "number of nodes >= 1\nnode values unique",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "root = [2,3,5,8,13,21,34]",
        "output": "[2,5,3,8,13,21,34]",
        "explanation": ""
      }
    ],
    "sample_input": "root = [2,3,5,8,13,21,34]",
    "starter_code": {
      "javascript": "function reverseOddLevels(root: TreeNode | null): TreeNode | null {\n  // your code here\n}\n",
      "python": "def reverseOddLevels(root: TreeNode | null) -> TreeNode | null:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public TreeNode | null reverseOddLevels(TreeNode | null root) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    TreeNode | null reverseOddLevels(TreeNode | null root) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[7,13,11]",
        "expected_output": "[7,11,13]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30175",
    "title": "String Matching in Array",
    "slug": "string-matching-in-array-strings-79",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "KMP",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find all strings that are substrings of another string in array.",
    "input_format": "words = [\"mass\",\"as\",\"hero\",\"superhero\"]",
    "output_format": "matching",
    "constraints": "1 <= words.length <= 100\n1 <= words[i].length <= 30",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "words = [\"mass\",\"as\",\"hero\",\"superhero\"]",
        "output": "[\"as\",\"hero\"]",
        "explanation": ""
      }
    ],
    "sample_input": "words = [\"mass\",\"as\",\"hero\",\"superhero\"]",
    "starter_code": {
      "javascript": "function stringMatching(words: string[]): string[] {\n  // your code here\n}\n",
      "python": "def stringMatching(words: string[]) -> string[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string[] stringMatching(string[] words) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string[] stringMatching(string[] words) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"leetcoder\",\"leetcode\",\"od\",\"hamlet\",\"am\"]",
        "expected_output": "[\"leetcode\",\"od\"]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30176",
    "title": "String Compression III",
    "slug": "string-compression-iii-strings-80",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Counting",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "New compression: use [count][ch] pairs, max count 9.",
    "input_format": "word = \"abcde\"",
    "output_format": "compressed",
    "constraints": "1 <= word.length <= 2*10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "word = \"abcde\"",
        "output": "\"1a1b1c1d1e\"",
        "explanation": ""
      }
    ],
    "sample_input": "word = \"abcde\"",
    "starter_code": {
      "javascript": "function compressedString(word: string): string {\n  // your code here\n}\n",
      "python": "def compressedString(word: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string compressedString(string word) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string compressedString(string word) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"aaaaaaaaaaaaaabb\"",
        "expected_output": "\"9a5a2b\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30177",
    "title": "Longest Common Suffix",
    "slug": "longest-common-suffix-strings-81",
    "difficulty": "Hard",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Longest common suffix for pairs.",
    "input_format": "a = [\"abc\",\"def\"], b = [\"xbc\",\"yde\"]",
    "output_format": "suffix",
    "constraints": "1 <= a.length == b.length <= 10^3",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "a = [\"abc\",\"def\"], b = [\"xbc\",\"yde\"]",
        "output": "[\"bc\",\"de\"]",
        "explanation": ""
      }
    ],
    "sample_input": "a = [\"abc\",\"def\"], b = [\"xbc\",\"yde\"]",
    "starter_code": {
      "javascript": "function longestCommonSuffix(a: string[], b: string[]): string {\n  // your code here\n}\n",
      "python": "def longestCommonSuffix(a: string[], b: string[]) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string longestCommonSuffix(string[] a, string[] b) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string longestCommonSuffix(string[] a, string[] b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"a\"],[\"b\"]",
        "expected_output": "[\"\"]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30178",
    "title": "Sentence Similarity III",
    "slug": "sentence-similarity-iii-strings-82",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if one sentence is a prefix or suffix of the other.",
    "input_format": "a = \"My name is Haley\", b = \"My Haley\"",
    "output_format": "true",
    "constraints": "0 <= sentence1.length, sentence2.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "sentence1 = \"My name is Haley\", sentence2 = \"My Haley\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "sentence1 = \"My name is Haley\", sentence2 = \"My Haley\"",
    "starter_code": {
      "javascript": "function areSentencesSimilar(a: string, b: string): boolean {\n  // your code here\n}\n",
      "python": "def areSentencesSimilar(a: string, b: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean areSentencesSimilar(string a, string b) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean areSentencesSimilar(string a, string b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"of\",\"A great way\"",
        "expected_output": "false",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30179",
    "title": "Largest Substring Between Two Equal Characters",
    "slug": "largest-substring-between-two-equal-characters-strings-83",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Length of longest substring between two equal characters.",
    "input_format": "s = \"abca\"",
    "output_format": "max length",
    "constraints": "1 <= s.length <= 300",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"abca\"",
        "output": "2",
        "explanation": "\"bc\" between a and a"
      }
    ],
    "sample_input": "s = \"abca\"",
    "starter_code": {
      "javascript": "function maxLengthBetweenEqualCharacters(s: string): number {\n  // your code here\n}\n",
      "python": "def maxLengthBetweenEqualCharacters(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxLengthBetweenEqualCharacters(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxLengthBetweenEqualCharacters(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"aa\"",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30180",
    "title": "Count Common Words With One Occurrence",
    "slug": "count-common-words-with-one-occurrence-strings-84",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n+m)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Count words that appear exactly once in each.",
    "input_format": "a = [\"leetcode\",\"is\",\"amazing\",\"as\",\"is\"], b = [\"amazing\",\"leetcode\",\"is\"]",
    "output_format": "count",
    "constraints": "1 <= words1.length, words2.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "words1 = [\"leetcode\",\"is\",\"amazing\",\"as\",\"is\"], words2 = [\"amazing\",\"leetcode\",\"is\"]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "words1 = [\"leetcode\",\"is\",\"amazing\",\"as\",\"is\"], words2 = [\"amazing\",\"leetcode\",\"is\"]",
    "starter_code": {
      "javascript": "function countWords(a: string[], b: string[]): number {\n  // your code here\n}\n",
      "python": "def countWords(a: string[], b: string[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number countWords(string[] a, string[] b) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number countWords(string[] a, string[] b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"a\",\"ab\"],[\"a\",\"a\",\"ab\"]",
        "expected_output": "1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30181",
    "title": "Sort the String",
    "slug": "sort-the-string-strings-85",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Counting",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort: 1) increasing by count, 2) remove used, 3) decreasing, 4) repeat.",
    "input_format": "s = \"aaaabbbbcccc\"",
    "output_format": "sorted",
    "constraints": "1 <= s.length <= 200",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"aaaabbbbcccc\"",
        "output": "\"abccbaabccba\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"aaaabbbbcccc\"",
    "starter_code": {
      "javascript": "function sortString(s: string): string {\n  // your code here\n}\n",
      "python": "def sortString(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string sortString(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string sortString(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"rat\"",
        "expected_output": "\"art\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30182",
    "title": "Valid Parenthesis String",
    "slug": "valid-parenthesis-string-strings-86",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Stack",
    "algorithm_type": "O(n)",
    "visualization_type": "stack",
    "enable_visualization": true,
    "problem_statement": "Check if string with * is a valid parens.",
    "input_format": "s = \"(*)\"",
    "output_format": "true",
    "constraints": "1 <= s.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"(*)\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"(*)\"",
    "starter_code": {
      "javascript": "function checkValidString(s: string): boolean {\n  // your code here\n}\n",
      "python": "def checkValidString(s: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean checkValidString(string s) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean checkValidString(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"(*))\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30183",
    "title": "Check if Word Equals Summation of Two Words",
    "slug": "check-if-word-equals-summation-of-two-words-strings-87",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if a + b == c numerically (first letter = digit).",
    "input_format": "a = \"acb\", b = \"cba\", c = \"cdb\"",
    "output_format": "true",
    "constraints": "2 <= firstWord.length, secondWord.length, targetWord.length <= 10",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "firstWord = \"acb\", secondWord = \"cba\", targetWord = \"cdb\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "firstWord = \"acb\", secondWord = \"cba\", targetWord = \"cdb\"",
    "starter_code": {
      "javascript": "function isSumEqual(a: string, b: string, c: string): boolean {\n  // your code here\n}\n",
      "python": "def isSumEqual(a: string, b: string, c: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isSumEqual(string a, string b, string c) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isSumEqual(string a, string b, string c) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"aaa\",\"a\",\"aab\"",
        "expected_output": "false",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30184",
    "title": "Remove Palindromic Subsequences",
    "slug": "remove-palindromic-subsequences-strings-88",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min removals to make s empty (subsequence of same letter = palindrome).",
    "input_format": "s = \"ababa\"",
    "output_format": "min removals",
    "constraints": "1 <= s.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"ababa\"",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"ababa\"",
    "starter_code": {
      "javascript": "function removePalindromeSub(s: string): number {\n  // your code here\n}\n",
      "python": "def removePalindromeSub(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number removePalindromeSub(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number removePalindromeSub(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abb\"",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30185",
    "title": "Maximize the Confusion of an Exam",
    "slug": "maximize-the-confusion-of-an-exam-strings-89",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "slidingwindow",
    "enable_visualization": true,
    "problem_statement": "Maximize the same answers after flipping at most k.",
    "input_format": "k = 1, a = \"TTFF\"",
    "output_format": "max",
    "constraints": "1 <= answerKey.length <= 5*10^4\n1 <= k <= answerKey.length",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "answerKey = \"TTFF\", k = 2",
        "output": "4",
        "explanation": ""
      }
    ],
    "sample_input": "answerKey = \"TTFF\", k = 2",
    "starter_code": {
      "javascript": "function maxConsecutiveAnswers(k: number, a: string): number {\n  // your code here\n}\n",
      "python": "def maxConsecutiveAnswers(k: number, a: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxConsecutiveAnswers(number k, string a) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxConsecutiveAnswers(number k, string a) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"TFFT\", 1",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30186",
    "title": "Maximum Repeating Substring",
    "slug": "maximum-repeating-substring-strings-90",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max k such that b repeated k times is in a.",
    "input_format": "a = \"ababc\", b = \"ab\"",
    "output_format": "k",
    "constraints": "1 <= sequence.length <= 100\n1 <= word.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "sequence = \"ababc\", word = \"ab\"",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "sequence = \"ababc\", word = \"ab\"",
    "starter_code": {
      "javascript": "function maxRepeating(a: string, b: string): number {\n  // your code here\n}\n",
      "python": "def maxRepeating(a: string, b: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxRepeating(string a, string b) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxRepeating(string a, string b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"ababc\",\"ba\"",
        "expected_output": "-1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30187",
    "title": "String Without AAA or BBB",
    "slug": "string-without-aaa-or-bbb-strings-91",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Greedy",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "String with a As and b Bs, no three consecutive same.",
    "input_format": "a = 1, b = 2",
    "output_format": "string",
    "constraints": "0 <= a, b <= 100\na + b > 0",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "a = 1, b = 2",
        "output": "\"abb\"",
        "explanation": ""
      }
    ],
    "sample_input": "a = 1, b = 2",
    "starter_code": {
      "javascript": "function strWithout3a3b(a: number, b: number): string {\n  // your code here\n}\n",
      "python": "def strWithout3a3b(a: number, b: number) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string strWithout3a3b(number a, number b) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string strWithout3a3b(number a, number b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "4,1",
        "expected_output": "\"aabaa\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30188",
    "title": "Longest Uncommon Subsequence I",
    "slug": "longest-uncommon-subsequence-i-strings-92",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Length of longest uncommon subsequence.",
    "input_format": "a = \"aba\", b = \"cdc\"",
    "output_format": "length",
    "constraints": "0 <= a.length, b.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "a = \"aba\", b = \"cdc\"",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "a = \"aba\", b = \"cdc\"",
    "starter_code": {
      "javascript": "function findLUSlength(a: string, b: string): number {\n  // your code here\n}\n",
      "python": "def findLUSlength(a: string, b: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findLUSlength(string a, string b) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findLUSlength(string a, string b) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"aaa\",\"bbb\"",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30189",
    "title": "Longest Uncommon Subsequence II",
    "slug": "longest-uncommon-subsequence-ii-strings-93",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n^2 * m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Length of longest uncommon subsequence.",
    "input_format": "strs = [\"aba\",\"cdc\",\"eae\"]",
    "output_format": "length",
    "constraints": "1 <= strs.length <= 50\n1 <= strs[i].length <= 10",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "strs = [\"aba\",\"cdc\",\"eae\"]",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "strs = [\"aba\",\"cdc\",\"eae\"]",
    "starter_code": {
      "javascript": "function findLUSlengthII(strs: string[]): number {\n  // your code here\n}\n",
      "python": "def findLUSlengthII(strs: string[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findLUSlengthII(string[] strs) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findLUSlengthII(string[] strs) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"aaa\",\"aaa\",\"aa\"]",
        "expected_output": "-1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30190",
    "title": "Camelcase Matching",
    "slug": "camelcase-matching-strings-94",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Trie",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Match camelCase where pattern letters are upper-cased.",
    "input_format": "queries = [\"FooBar\",\"FooBarTest\",\"FootBall\"]",
    "output_format": "matches",
    "constraints": "1 <= queries.length <= 100\n1 <= pattern.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "queries = [\"FooBar\",\"FooBarTest\",\"FootBall\",\"FrameBuffer\",\"ForceFeedBack\"], pattern = \"FB\"",
        "output": "[true,false,true,false,false]",
        "explanation": ""
      }
    ],
    "sample_input": "queries = [\"FooBar\",\"FooBarTest\",\"FootBall\",\"FrameBuffer\",\"ForceFeedBack\"], pattern = \"FB\"",
    "starter_code": {
      "javascript": "function camelMatch(queries: string[], p: string): boolean[] {\n  // your code here\n}\n",
      "python": "def camelMatch(queries: string[], p: string) -> boolean[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean[] camelMatch(string[] queries, string p) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean[] camelMatch(string[] queries, string p) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"FooBar\",\"FooBarTest\",\"FootBall\",\"FrameBuffer\",\"ForceFeedBack\"], \"FB\"",
        "expected_output": "[true,false,true,false,false]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30191",
    "title": "Shortest Distance to Target String in Circular Array",
    "slug": "shortest-distance-to-target-string-in-circular-array-strings-95",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Linear Scan",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Shortest distance from start to target in circular array.",
    "input_format": "words = [\"hello\",\"i\",\"am\",\"leetcode\",\"hello\"], target = \"hello\", start = 1",
    "output_format": "distance",
    "constraints": "1 <= words.length <= 100\nstartIndex is valid",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "words = [\"hello\",\"i\",\"am\",\"leetcode\",\"hello\"], target = \"hello\", startIndex = 1",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "words = [\"hello\",\"i\",\"am\",\"leetcode\",\"hello\"], target = \"hello\", startIndex = 1",
    "starter_code": {
      "javascript": "function shortestDistance(words: string[], target: string, start: number): number {\n  // your code here\n}\n",
      "python": "def shortestDistance(words: string[], target: string, start: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number shortestDistance(string[] words, string target, number start) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number shortestDistance(string[] words, string target, number start) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"a\",\"b\",\"leetc\",\"ets\",\"le\"], \"leets\", 0",
        "expected_output": "-1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30192",
    "title": "Longest Common Prefix After at Most One Removal",
    "slug": "longest-common-prefix-after-at-most-one-removal-strings-96",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n*m)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Longest common prefix after removing at most one string.",
    "input_format": "a = [\"ab\",\"a\"]",
    "output_format": "prefix",
    "constraints": "2 <= arr.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "arr = [\"ab\",\"a\"]",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [\"ab\",\"a\"]",
    "starter_code": {
      "javascript": "function longestCommonPrefix2(a: string[]): number {\n  // your code here\n}\n",
      "python": "def longestCommonPrefix2(a: string[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestCommonPrefix2(string[] a) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestCommonPrefix2(string[] a) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"ab\",\"abc\"]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30193",
    "title": "Most Common Word",
    "slug": "most-common-word-strings-97",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Most common non-banned word in paragraph.",
    "input_format": "p = \"Bob hit a ball, the hit BALL flew far after it was hit.\", b = [\"hit\"]",
    "output_format": "most common",
    "constraints": "1 <= paragraph.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "paragraph = \"Bob hit a ball, the hit BALL flew far after it was hit.\", banned = [\"hit\"]",
        "output": "\"ball\"",
        "explanation": ""
      }
    ],
    "sample_input": "paragraph = \"Bob hit a ball, the hit BALL flew far after it was hit.\", banned = [\"hit\"]",
    "starter_code": {
      "javascript": "function mostCommonWord(p: string, banned: string[]): string {\n  // your code here\n}\n",
      "python": "def mostCommonWord(p: string, banned: string[]) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string mostCommonWord(string p, string[] banned) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string mostCommonWord(string p, string[] banned) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"a.\",[]",
        "expected_output": "\"a\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30194",
    "title": "Reverse String II",
    "slug": "reverse-string-ii-strings-98",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "String",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse first k chars for every 2k chars.",
    "input_format": "s = \"abcdefg\", k = 2",
    "output_format": "reversed",
    "constraints": "1 <= s.length <= 10^4\n1 <= k <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"abcdefg\", k = 2",
        "output": "\"bacdfeg\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"abcdefg\", k = 2",
    "starter_code": {
      "javascript": "function reverseStr(s: string, k: number): string {\n  // your code here\n}\n",
      "python": "def reverseStr(s: string, k: number) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string reverseStr(string s, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string reverseStr(string s, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abcdefg\", 2",
        "expected_output": "\"bacdfeg\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30195",
    "title": "Most Frequent Vowel and Consonant",
    "slug": "most-frequent-vowel-and-consonant-strings-99",
    "difficulty": "Easy",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Sum of most frequent vowel and most frequent consonant.",
    "input_format": "s = \"successes\"",
    "output_format": "sum",
    "constraints": "1 <= s.length <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"successes\"",
        "output": "6",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"successes\"",
    "starter_code": {
      "javascript": "function maxFreqSum(s: string): number {\n  // your code here\n}\n",
      "python": "def maxFreqSum(s: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxFreqSum(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxFreqSum(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"aeiaeia\"",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30196",
    "title": "Custom Sort String II",
    "slug": "custom-sort-string-ii-strings-100",
    "difficulty": "Medium",
    "topic_id": "2",
    "topic_name": "Strings",
    "pattern": "Counting Sort",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort s by order, then any order for the rest.",
    "input_format": "order = \"cba\", s = \"abcd\"",
    "output_format": "sorted",
    "constraints": "1 <= order.length, s.length <= 200",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "order = \"cba\", s = \"abcd\"",
        "output": "\"cbad\"",
        "explanation": ""
      }
    ],
    "sample_input": "order = \"cba\", s = \"abcd\"",
    "starter_code": {
      "javascript": "function customSortString2(order: string, s: string): string {\n  // your code here\n}\n",
      "python": "def customSortString2(order: string, s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string customSortString2(string order, string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string customSortString2(string order, string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"bcafg\",\"abcd\"",
        "expected_output": "\"bcad\"",
        "is_hidden": false
      }
    ]
  }
];

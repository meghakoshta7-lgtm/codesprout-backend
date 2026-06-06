import type { Question } from '../../types';
export const BULK_STRING_ALGORITHMS: Question[] = [
  {
    "id": "43801",
    "title": "Find Element in String Algorithms",
    "slug": "find-element-in-string-algorithms-string-algorithms-1",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Linear Search",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the index of target in String Algorithms array. Return -1 if not found.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,2,3,4,5], target = 3",
        "output": "2",
        "explanation": "Standard linear search."
      }
    ],
    "sample_input": "arr = [1,2,3,4,5], target = 3",
    "starter_code": {
      "javascript": "function findElement(arr: any[], target: any): number {\n  // your code here\n}\n",
      "python": "def findElement(arr: any[], target: any) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findElement(any[] arr, any target) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findElement(any[] arr, any target) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5], 3",
        "expected_output": "2",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[1,2,3,4,5], 6",
        "expected_output": "-1",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43802",
    "title": "Binary Search in String Algorithms",
    "slug": "binary-search-in-string-algorithms-string-algorithms-2",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Binary Search",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Binary search in sorted String Algorithms array for target.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5\nsorted",
    "examples": [
      {
        "input": "arr = [1,2,3,4,5], target = 3",
        "output": "2",
        "explanation": "Binary search."
      }
    ],
    "sample_input": "arr = [1,2,3,4,5], target = 3",
    "starter_code": {
      "javascript": "function binarySearch(arr: any[], target: any): number {\n  // your code here\n}\n",
      "python": "def binarySearch(arr: any[], target: any) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number binarySearch(any[] arr, any target) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number binarySearch(any[] arr, any target) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5], 3",
        "expected_output": "2",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[1,2,3,4,5], 1",
        "expected_output": "0",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43803",
    "title": "First Occurrence in String Algorithms",
    "slug": "first-occurrence-in-string-algorithms-string-algorithms-3",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Binary Search",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the first index where target appears.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5\nsorted",
    "examples": [
      {
        "input": "arr = [1,2,2,2,3,4], target = 2",
        "output": "1",
        "explanation": "Binary search for lower bound."
      }
    ],
    "sample_input": "arr = [1,2,2,2,3,4], target = 2",
    "starter_code": {
      "javascript": "function firstOccurrence(arr: any[], target: any): number {\n  // your code here\n}\n",
      "python": "def firstOccurrence(arr: any[], target: any) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number firstOccurrence(any[] arr, any target) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number firstOccurrence(any[] arr, any target) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2,2,3,4], 2",
        "expected_output": "1",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[1,1,1,1], 1",
        "expected_output": "0",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43804",
    "title": "Last Occurrence in String Algorithms",
    "slug": "last-occurrence-in-string-algorithms-string-algorithms-4",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Binary Search",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the last index where target appears.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5\nsorted",
    "examples": [
      {
        "input": "arr = [1,2,2,2,3,4], target = 2",
        "output": "3",
        "explanation": "Binary search for upper bound."
      }
    ],
    "sample_input": "arr = [1,2,2,2,3,4], target = 2",
    "starter_code": {
      "javascript": "function lastOccurrence(arr: any[], target: any): number {\n  // your code here\n}\n",
      "python": "def lastOccurrence(arr: any[], target: any) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number lastOccurrence(any[] arr, any target) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number lastOccurrence(any[] arr, any target) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2,2,3,4], 2",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43805",
    "title": "Count Occurrences in String Algorithms",
    "slug": "count-occurrences-in-string-algorithms-string-algorithms-5",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count how many times target appears.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,2,2,2,3,4], target = 2",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,2,2,2,3,4], target = 2",
    "starter_code": {
      "javascript": "function countOccurrences(arr: any[], target: any): number {\n  // your code here\n}\n",
      "python": "def countOccurrences(arr: any[], target: any) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number countOccurrences(any[] arr, any target) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number countOccurrences(any[] arr, any target) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2,2,3,4], 2",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43806",
    "title": "Find Maximum in String Algorithms",
    "slug": "find-maximum-in-string-algorithms-string-algorithms-6",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the maximum element.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [3,1,4,1,5,9,2,6]",
        "output": "9",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,1,4,1,5,9,2,6]",
    "starter_code": {
      "javascript": "function findMax(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def findMax(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findMax(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findMax(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,1,4,1,5,9,2,6]",
        "expected_output": "9",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[-1,-2,-3]",
        "expected_output": "-1",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43807",
    "title": "Find Minimum in String Algorithms",
    "slug": "find-minimum-in-string-algorithms-string-algorithms-7",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the minimum element.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [3,1,4,1,5,9,2,6]",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,1,4,1,5,9,2,6]",
    "starter_code": {
      "javascript": "function findMin(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def findMin(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findMin(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findMin(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,1,4,1,5,9,2,6]",
        "expected_output": "1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43808",
    "title": "Sum of String Algorithms",
    "slug": "sum-of-string-algorithms-string-algorithms-8",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute the sum of all elements.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,2,3,4,5]",
        "output": "15",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,2,3,4,5]",
    "starter_code": {
      "javascript": "function sumElements(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def sumElements(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number sumElements(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number sumElements(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5]",
        "expected_output": "15",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43809",
    "title": "Product of String Algorithms",
    "slug": "product-of-string-algorithms-string-algorithms-9",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute the product of all elements.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [2,3,4]",
        "output": "24",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [2,3,4]",
    "starter_code": {
      "javascript": "function productElements(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def productElements(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number productElements(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number productElements(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,3,4]",
        "expected_output": "24",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43810",
    "title": "Contains Duplicate in String Algorithms",
    "slug": "contains-duplicate-in-string-algorithms-string-algorithms-10",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashSet",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if any value appears twice.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,2,3,1]",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,2,3,1]",
    "starter_code": {
      "javascript": "function containsDuplicate(arr: any[]): boolean {\n  // your code here\n}\n",
      "python": "def containsDuplicate(arr: any[]) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean containsDuplicate(any[] arr) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean containsDuplicate(any[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,1]",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43811",
    "title": "Reverse String Algorithms",
    "slug": "reverse-string-algorithms-string-algorithms-11",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse the order.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,2,3,4,5]",
    "starter_code": {
      "javascript": "function reverseElements(arr: any[]): any[] {\n  // your code here\n}\n",
      "python": "def reverseElements(arr: any[]) -> any[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public any[] reverseElements(any[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    any[] reverseElements(any[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5]",
        "expected_output": "[5,4,3,2,1]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43812",
    "title": "Sort String Algorithms",
    "slug": "sort-string-algorithms-string-algorithms-12",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Sorting",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort in ascending order.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [3,1,4,1,5,9,2,6]",
        "output": "[1,1,2,3,4,5,6,9]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,1,4,1,5,9,2,6]",
    "starter_code": {
      "javascript": "function sortElements(arr: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortElements(arr: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortElements(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortElements(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,1,4,1,5,9,2,6]",
        "expected_output": "[1,1,2,3,4,5,6,9]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43813",
    "title": "Sort String Algorithms Descending",
    "slug": "sort-string-algorithms-descending-string-algorithms-13",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Sorting",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort in descending order.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [3,1,4,1,5,9,2,6]",
        "output": "[9,6,5,4,3,2,1,1]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,1,4,1,5,9,2,6]",
    "starter_code": {
      "javascript": "function sortDescElements(arr: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortDescElements(arr: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortDescElements(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortDescElements(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,1,4,1,5,9,2,6]",
        "expected_output": "[9,6,5,4,3,2,1,1]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43814",
    "title": "Rotate String Algorithms Right by K",
    "slug": "rotate-string-algorithms-right-by-k-string-algorithms-14",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Reversal",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Rotate right by k steps.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,2,3,4,5,6,7], k = 3",
        "output": "[5,6,7,1,2,3,4]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,2,3,4,5,6,7], k = 3",
    "starter_code": {
      "javascript": "function rotateRight(arr: any[], k: number): any[] {\n  // your code here\n}\n",
      "python": "def rotateRight(arr: any[], k: number) -> any[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public any[] rotateRight(any[] arr, number k) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    any[] rotateRight(any[] arr, number k) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5,6,7], 3",
        "expected_output": "[5,6,7,1,2,3,4]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43815",
    "title": "Rotate String Algorithms Left by K",
    "slug": "rotate-string-algorithms-left-by-k-string-algorithms-15",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Reversal",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Rotate left by k steps.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,2,3,4,5,6,7], k = 2",
        "output": "[3,4,5,6,7,1,2]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,2,3,4,5,6,7], k = 2",
    "starter_code": {
      "javascript": "function rotateLeft(arr: any[], k: number): any[] {\n  // your code here\n}\n",
      "python": "def rotateLeft(arr: any[], k: number) -> any[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public any[] rotateLeft(any[] arr, number k) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    any[] rotateLeft(any[] arr, number k) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5,6,7], 2",
        "expected_output": "[3,4,5,6,7,1,2]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43816",
    "title": "Move Zeros in String Algorithms",
    "slug": "move-zeros-in-string-algorithms-string-algorithms-16",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Move all zeros to end, preserving order.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^4",
    "examples": [
      {
        "input": "arr = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [0,1,0,3,12]",
    "starter_code": {
      "javascript": "function moveZeros(arr: number[]): number[] {\n  // your code here\n}\n",
      "python": "def moveZeros(arr: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] moveZeros(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] moveZeros(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,1,0,3,12]",
        "expected_output": "[1,3,12,0,0]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43817",
    "title": "Rearrange Even Odd in String Algorithms",
    "slug": "rearrange-even-odd-in-string-algorithms-string-algorithms-17",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Rearrange so evens come first.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,2,3,4,5,6]",
        "output": "[2,4,6,1,3,5]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,2,3,4,5,6]",
    "starter_code": {
      "javascript": "function rearrangeEvenOdd(arr: number[]): number[] {\n  // your code here\n}\n",
      "python": "def rearrangeEvenOdd(arr: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] rearrangeEvenOdd(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] rearrangeEvenOdd(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5,6]",
        "expected_output": "[2,4,6,1,3,5]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43818",
    "title": "Sort Array by Parity in String Algorithms",
    "slug": "sort-array-by-parity-in-string-algorithms-string-algorithms-18",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort array by parity (evens first).",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 5*10^4",
    "examples": [
      {
        "input": "arr = [3,1,2,4]",
        "output": "[2,4,3,1]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,1,2,4]",
    "starter_code": {
      "javascript": "function sortByParity(arr: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortByParity(arr: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortByParity(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortByParity(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,1,2,4]",
        "expected_output": "[2,4,3,1]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43819",
    "title": "Sort Colors in String Algorithms",
    "slug": "sort-colors-in-string-algorithms-string-algorithms-19",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Dutch Flag",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort an array of 0s, 1s, and 2s in-place.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 300\nnums[i] is 0, 1, or 2",
    "examples": [
      {
        "input": "arr = [2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [2,0,2,1,1,0]",
    "starter_code": {
      "javascript": "function sortColors(arr: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortColors(arr: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortColors(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortColors(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,0,2,1,1,0]",
        "expected_output": "[0,0,1,1,2,2]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43820",
    "title": "Sort Array Squared",
    "slug": "sort-array-squared-string-algorithms-20",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return squares of sorted array, also sorted.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^4\nsorted",
    "examples": [
      {
        "input": "arr = [-4,-1,0,3,10]",
        "output": "[0,1,9,16,100]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [-4,-1,0,3,10]",
    "starter_code": {
      "javascript": "function sortedSquares(arr: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortedSquares(arr: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortedSquares(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortedSquares(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[-4,-1,0,3,10]",
        "expected_output": "[0,1,9,16,100]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43821",
    "title": "Count Frequency in String Algorithms",
    "slug": "count-frequency-in-string-algorithms-string-algorithms-21",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count frequency of each element.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,2,2,3,3,3]",
        "output": "{1:1,2:2,3:3}",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,2,2,3,3,3]",
    "starter_code": {
      "javascript": "function countFrequency(arr: any[]): Map<any,number> {\n  // your code here\n}\n",
      "python": "def countFrequency(arr: any[]) -> Map<any,number>:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public Map<any,number> countFrequency(any[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    Map<any,number> countFrequency(any[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2,3,3,3]",
        "expected_output": "{1:1,2:2,3:3}",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43822",
    "title": "Find Duplicate in String Algorithms",
    "slug": "find-duplicate-in-string-algorithms-string-algorithms-22",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Floyd",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find duplicate number.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,3,4,2,2]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,3,4,2,2]",
    "starter_code": {
      "javascript": "function findDuplicate(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def findDuplicate(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findDuplicate(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findDuplicate(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,3,4,2,2]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43823",
    "title": "Single Number in String Algorithms",
    "slug": "single-number-in-string-algorithms-string-algorithms-23",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "XOR",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find unique element.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 3*10^4",
    "examples": [
      {
        "input": "arr = [4,1,2,1,2]",
        "output": "4",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [4,1,2,1,2]",
    "starter_code": {
      "javascript": "function singleNumber(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def singleNumber(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number singleNumber(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number singleNumber(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[4,1,2,1,2]",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43824",
    "title": "Missing Number in String Algorithms",
    "slug": "missing-number-in-string-algorithms-string-algorithms-24",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "XOR",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find missing number in [0, n].",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^4",
    "examples": [
      {
        "input": "arr = [3,0,1]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,0,1]",
    "starter_code": {
      "javascript": "function missingNumber(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def missingNumber(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number missingNumber(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number missingNumber(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,0,1]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43825",
    "title": "Majority Element in String Algorithms",
    "slug": "majority-element-in-string-algorithms-string-algorithms-25",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Boyer-Moore",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find element appearing more than n/2 times.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 5*10^4",
    "examples": [
      {
        "input": "arr = [3,2,3]",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,2,3]",
    "starter_code": {
      "javascript": "function majorityElement(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def majorityElement(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number majorityElement(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number majorityElement(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,2,3]",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43826",
    "title": "Two Sum in String Algorithms",
    "slug": "two-sum-in-string-algorithms-string-algorithms-26",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find two numbers summing to target.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "2 <= arr.length <= 10^4",
    "examples": [
      {
        "input": "arr = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [2,7,11,15], target = 9",
    "starter_code": {
      "javascript": "function twoSum(arr: number[], target: number): number[] {\n  // your code here\n}\n",
      "python": "def twoSum(arr: number[], target: number) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] twoSum(number[] arr, number target) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] twoSum(number[] arr, number target) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,7,11,15], 9",
        "expected_output": "[0,1]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43827",
    "title": "Three Sum in String Algorithms",
    "slug": "three-sum-in-string-algorithms-string-algorithms-27",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find triplets summing to 0.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= arr.length <= 3000",
    "examples": [
      {
        "input": "arr = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [-1,0,1,2,-1,-4]",
    "starter_code": {
      "javascript": "function threeSum(arr: number[]): number[][] {\n  // your code here\n}\n",
      "python": "def threeSum(arr: number[]) -> number[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[][] threeSum(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[][] threeSum(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[-1,0,1,2,-1,-4]",
        "expected_output": "[[-1,-1,2],[-1,0,1]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43828",
    "title": "Kth Largest in String Algorithms",
    "slug": "kth-largest-in-string-algorithms-string-algorithms-28",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Quick Select",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find kth largest.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= k <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [3,2,1,5,6,4], k = 2",
        "output": "5",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,2,1,5,6,4], k = 2",
    "starter_code": {
      "javascript": "function findKthLargest(arr: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def findKthLargest(arr: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findKthLargest(number[] arr, number k) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findKthLargest(number[] arr, number k) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,2,1,5,6,4], 2",
        "expected_output": "5",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43829",
    "title": "Kth Smallest in String Algorithms",
    "slug": "kth-smallest-in-string-algorithms-string-algorithms-29",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Quick Select",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find kth smallest.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= k <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [3,2,1,5,6,4], k = 2",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,2,1,5,6,4], k = 2",
    "starter_code": {
      "javascript": "function findKthSmallest(arr: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def findKthSmallest(arr: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findKthSmallest(number[] arr, number k) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findKthSmallest(number[] arr, number k) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,2,1,5,6,4], 2",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43830",
    "title": "Top K Frequent in String Algorithms",
    "slug": "top-k-frequent-in-string-algorithms-string-algorithms-30",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Bucket Sort",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "K most frequent elements.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,1,1,2,2,3], k = 2",
    "starter_code": {
      "javascript": "function topKFrequent(arr: number[], k: number): number[] {\n  // your code here\n}\n",
      "python": "def topKFrequent(arr: number[], k: number) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] topKFrequent(number[] arr, number k) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] topKFrequent(number[] arr, number k) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,1,1,2,2,3], 2",
        "expected_output": "[1,2]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43831",
    "title": "Max Subarray Sum (Kadane)",
    "slug": "max-subarray-sum-kadane-string-algorithms-31",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Kadane",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find max sum of contiguous subarray.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "[4,-1,2,1]"
      }
    ],
    "sample_input": "arr = [-2,1,-3,4,-1,2,1,-5,4]",
    "starter_code": {
      "javascript": "function maxSubArray(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def maxSubArray(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxSubArray(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxSubArray(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[-2,1,-3,4,-1,2,1,-5,4]",
        "expected_output": "6",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43832",
    "title": "Min Subarray Sum",
    "slug": "min-subarray-sum-string-algorithms-32",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Kadane",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find min sum of contiguous subarray.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [3,-2,5,-1]",
        "output": "-3",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [3,-2,5,-1]",
    "starter_code": {
      "javascript": "function minSubArray(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def minSubArray(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minSubArray(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minSubArray(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,-2,5,-1]",
        "expected_output": "-3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43833",
    "title": "Max Product Subarray",
    "slug": "max-product-subarray-string-algorithms-33",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find max product of contiguous subarray.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 2*10^4",
    "examples": [
      {
        "input": "arr = [2,3,-2,4]",
        "output": "6",
        "explanation": "[2,3]"
      }
    ],
    "sample_input": "arr = [2,3,-2,4]",
    "starter_code": {
      "javascript": "function maxProduct(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def maxProduct(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxProduct(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxProduct(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,3,-2,4]",
        "expected_output": "6",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43834",
    "title": "Subarray Sum Equals K",
    "slug": "subarray-sum-equals-k-string-algorithms-34",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Prefix+Map",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count subarrays summing to k.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 2*10^4",
    "examples": [
      {
        "input": "arr = [1,1,1], k = 2",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,1,1], k = 2",
    "starter_code": {
      "javascript": "function subarraySum(arr: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def subarraySum(arr: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number subarraySum(number[] arr, number k) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number subarraySum(number[] arr, number k) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,1,1], 2",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43835",
    "title": "Longest Subarray Sum K",
    "slug": "longest-subarray-sum-k-string-algorithms-35",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Prefix+Map",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Longest subarray with sum k.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,-1,5,-2,3], k = 3",
        "output": "4",
        "explanation": "[1,-1,5,-2]"
      }
    ],
    "sample_input": "arr = [1,-1,5,-2,3], k = 3",
    "starter_code": {
      "javascript": "function longestSubarraySumK(arr: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def longestSubarraySumK(arr: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestSubarraySumK(number[] arr, number k) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestSubarraySumK(number[] arr, number k) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,-1,5,-2,3], 3",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43836",
    "title": "Min Size Subarray Sum",
    "slug": "min-size-subarray-sum-string-algorithms-36",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min length subarray with sum >= target.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "target = 7, arr = [2,3,1,2,4,3]",
        "output": "2",
        "explanation": "[4,3]"
      }
    ],
    "sample_input": "target = 7, arr = [2,3,1,2,4,3]",
    "starter_code": {
      "javascript": "function minSubArrayLen(target: number, arr: number[]): number {\n  // your code here\n}\n",
      "python": "def minSubArrayLen(target: number, arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minSubArrayLen(number target, number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minSubArrayLen(number target, number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "7, [2,3,1,2,4,3]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43837",
    "title": "Max Consecutive Ones with K Flips",
    "slug": "max-consecutive-ones-with-k-flips-string-algorithms-37",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max 1s with k flips.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^5",
    "examples": [
      {
        "input": "arr = [1,1,0,0,1,1,1,0,1], k = 1",
        "output": "6",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,1,0,0,1,1,1,0,1], k = 1",
    "starter_code": {
      "javascript": "function longestOnes(arr: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def longestOnes(arr: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestOnes(number[] arr, number k) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestOnes(number[] arr, number k) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,1,0,0,1,1,1,0,1], 1",
        "expected_output": "6",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43838",
    "title": "Longest Substring Without Repeating",
    "slug": "longest-substring-without-repeating-string-algorithms-38",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Longest substring without repeating characters.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= s.length <= 5*10^4",
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
      "java": "class Solution {\n    public number lengthOfLongestSubstring(string s) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number lengthOfLongestSubstring(string s) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abcabcbb\"",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43839",
    "title": "Max Vowels in Substring",
    "slug": "max-vowels-in-substring-string-algorithms-39",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max vowels in any k-substring.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= s.length <= 10^5",
    "examples": [
      {
        "input": "s = \"abciiidef\", k = 3",
        "output": "3",
        "explanation": "\"iii\""
      }
    ],
    "sample_input": "s = \"abciiidef\", k = 3",
    "starter_code": {
      "javascript": "function maxVowels(s: string, k: number): number {\n  // your code here\n}\n",
      "python": "def maxVowels(s: string, k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxVowels(string s, number k) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxVowels(string s, number k) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"abciiidef\", 3",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43840",
    "title": "Minimum Window Substring",
    "slug": "minimum-window-substring-string-algorithms-40",
    "difficulty": "Hard",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Minimum window containing all chars of t.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= s.length, t.length <= 10^5",
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
      "java": "class Solution {\n    public string minWindow(string s, string t) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string minWindow(string s, string t) {\n        return ;\n    }\n};\n"
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
    "id": "43841",
    "title": "Fibonacci Number",
    "slug": "fibonacci-number-string-algorithms-41",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute the nth Fibonacci number.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 30",
    "examples": [
      {
        "input": "n = 4",
        "output": "3",
        "explanation": "0,1,1,2,3"
      }
    ],
    "sample_input": "n = 4",
    "starter_code": {
      "javascript": "function fib(n: number): number {\n  // your code here\n}\n",
      "python": "def fib(n: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number fib(number n) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number fib(number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "4",
        "expected_output": "3",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "2",
        "expected_output": "1",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43842",
    "title": "Climbing Stairs",
    "slug": "climbing-stairs-string-algorithms-42",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Ways to climb n stairs (1 or 2 at a time).",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= n <= 45",
    "examples": [
      {
        "input": "n = 3",
        "output": "3",
        "explanation": "111, 12, 21"
      }
    ],
    "sample_input": "n = 3",
    "starter_code": {
      "javascript": "function climbStairs(n: number): number {\n  // your code here\n}\n",
      "python": "def climbStairs(n: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number climbStairs(number n) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number climbStairs(number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "3",
        "expected_output": "3",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "2",
        "expected_output": "2",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43843",
    "title": "House Robber",
    "slug": "house-robber-string-algorithms-43",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max money without robbing adjacent houses.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 100",
    "examples": [
      {
        "input": "arr = [1,2,3,1]",
        "output": "4",
        "explanation": "rob house 1 and 3"
      }
    ],
    "sample_input": "arr = [1,2,3,1]",
    "starter_code": {
      "javascript": "function rob(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def rob(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number rob(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number rob(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,1]",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43844",
    "title": "House Robber II",
    "slug": "house-robber-ii-string-algorithms-44",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "House Robber with circular constraint.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 100",
    "examples": [
      {
        "input": "arr = [2,3,2]",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [2,3,2]",
    "starter_code": {
      "javascript": "function rob2(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def rob2(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number rob2(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number rob2(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,3,2]",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43845",
    "title": "Longest Increasing Subsequence",
    "slug": "longest-increasing-subsequence-string-algorithms-45",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Length of longest increasing subsequence.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 2500",
    "examples": [
      {
        "input": "arr = [10,9,2,5,3,7,101,18]",
        "output": "4",
        "explanation": "[2,3,7,101]"
      }
    ],
    "sample_input": "arr = [10,9,2,5,3,7,101,18]",
    "starter_code": {
      "javascript": "function lengthOfLIS(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def lengthOfLIS(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number lengthOfLIS(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number lengthOfLIS(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[10,9,2,5,3,7,101,18]",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43846",
    "title": "Longest Common Subsequence",
    "slug": "longest-common-subsequence-string-algorithms-46",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Length of LCS.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= a.length, b.length <= 1000",
    "examples": [
      {
        "input": "a = \"abcde\", b = \"ace\"",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "a = \"abcde\", b = \"ace\"",
    "starter_code": {
      "javascript": "function longestCommonSubsequence(a: string, b: string): number {\n  // your code here\n}\n",
      "python": "def longestCommonSubsequence(a: string, b: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestCommonSubsequence(string a, string b) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestCommonSubsequence(string a, string b) {\n        return ;\n    }\n};\n"
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
    "id": "43847",
    "title": "Edit Distance",
    "slug": "edit-distance-string-algorithms-47",
    "difficulty": "Hard",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min operations to convert a to b.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= a.length, b.length <= 500",
    "examples": [
      {
        "input": "a = \"horse\", b = \"ros\"",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "a = \"horse\", b = \"ros\"",
    "starter_code": {
      "javascript": "function minDistance(a: string, b: string): number {\n  // your code here\n}\n",
      "python": "def minDistance(a: string, b: string) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minDistance(string a, string b) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minDistance(string a, string b) {\n        return ;\n    }\n};\n"
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
    "id": "43848",
    "title": "Coin Change",
    "slug": "coin-change-string-algorithms-48",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min coins to make amount.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= coins.length <= 12",
    "examples": [
      {
        "input": "coins = [1,5,10,25], amount = 30",
        "output": "2",
        "explanation": "25+5"
      }
    ],
    "sample_input": "coins = [1,5,10,25], amount = 30",
    "starter_code": {
      "javascript": "function coinChange(coins: number[], amount: number): number {\n  // your code here\n}\n",
      "python": "def coinChange(coins: number[], amount: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number coinChange(number[] coins, number amount) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number coinChange(number[] coins, number amount) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,5,10,25], 30",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43849",
    "title": "Coin Change II",
    "slug": "coin-change-ii-string-algorithms-49",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count combinations to make amount.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= amount <= 5000",
    "examples": [
      {
        "input": "amount = 5, coins = [1,2,5]",
        "output": "4",
        "explanation": ""
      }
    ],
    "sample_input": "amount = 5, coins = [1,2,5]",
    "starter_code": {
      "javascript": "function change(amount: number, coins: number[]): number {\n  // your code here\n}\n",
      "python": "def change(amount: number, coins: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number change(number amount, number[] coins) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number change(number amount, number[] coins) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "5, [1,2,5]",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43850",
    "title": "0-1 Knapsack",
    "slug": "0-1-knapsack-string-algorithms-50",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max value within capacity.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= n <= 100",
    "examples": [
      {
        "input": "weights = [1,2,3], values = [10,15,40], capacity = 6",
        "output": "55",
        "explanation": ""
      }
    ],
    "sample_input": "weights = [1,2,3], values = [10,15,40], capacity = 6",
    "starter_code": {
      "javascript": "function knapsack(weights: number[], values: number[], capacity: number): number {\n  // your code here\n}\n",
      "python": "def knapsack(weights: number[], values: number[], capacity: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number knapsack(number[] weights, number[] values, number capacity) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number knapsack(number[] weights, number[] values, number capacity) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3], [10,15,40], 6",
        "expected_output": "55",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43851",
    "title": "BFS Traversal of String Algorithms",
    "slug": "bfs-traversal-of-string-algorithms-string-algorithms-51",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "BFS",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "BFS traversal order.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= nodes.length <= 100",
    "examples": [
      {
        "input": "nodes = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[1,2,3,4]",
        "explanation": ""
      }
    ],
    "sample_input": "nodes = [[2,4],[1,3],[2,4],[1,3]]",
    "starter_code": {
      "javascript": "function bfs(nodes: number[][]): number[] {\n  // your code here\n}\n",
      "python": "def bfs(nodes: number[][]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] bfs(number[][] nodes) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] bfs(number[][] nodes) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[2,4],[1,3],[2,4],[1,3]]",
        "expected_output": "[1,2,3,4]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43852",
    "title": "DFS Traversal of String Algorithms",
    "slug": "dfs-traversal-of-string-algorithms-string-algorithms-52",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "DFS traversal order.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= nodes.length <= 100",
    "examples": [
      {
        "input": "nodes = [[2,4],[1,3],[2,4],[1,3]]",
        "output": "[1,2,4,3]",
        "explanation": ""
      }
    ],
    "sample_input": "nodes = [[2,4],[1,3],[2,4],[1,3]]",
    "starter_code": {
      "javascript": "function dfs(nodes: number[][]): number[] {\n  // your code here\n}\n",
      "python": "def dfs(nodes: number[][]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] dfs(number[][] nodes) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] dfs(number[][] nodes) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[2,4],[1,3],[2,4],[1,3]]",
        "expected_output": "[1,2,4,3]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43853",
    "title": "Count Connected Components",
    "slug": "count-connected-components-string-algorithms-53",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "Count connected components.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 100",
    "examples": [
      {
        "input": "n = 5, edges = [[0,1],[1,2],[3,4]]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "n = 5, edges = [[0,1],[1,2],[3,4]]",
    "starter_code": {
      "javascript": "function countComponents(n: number, edges: number[][]): number {\n  // your code here\n}\n",
      "python": "def countComponents(n: number, edges: number[][]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number countComponents(number n, number[][] edges) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number countComponents(number n, number[][] edges) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "5, [[0,1],[1,2],[3,4]]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43854",
    "title": "Shortest Path in String Algorithms",
    "slug": "shortest-path-in-string-algorithms-string-algorithms-54",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "BFS",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "Shortest path between two nodes.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= graph.length <= 100",
    "examples": [
      {
        "input": "graph = [[1,3],[0,2],[1,3],[0,2]], src = 0, dst = 3",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "graph = [[1,3],[0,2],[1,3],[0,2]], src = 0, dst = 3",
    "starter_code": {
      "javascript": "function shortestPath(graph: number[][], src: number, dst: number): number {\n  // your code here\n}\n",
      "python": "def shortestPath(graph: number[][], src: number, dst: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number shortestPath(number[][] graph, number src, number dst) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number shortestPath(number[][] graph, number src, number dst) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,3],[0,2],[1,3],[0,2]], 0, 3",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43855",
    "title": "Detect Cycle in String Algorithms",
    "slug": "detect-cycle-in-string-algorithms-string-algorithms-55",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "Detect if graph has cycle.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 100",
    "examples": [
      {
        "input": "n = 4, edges = [[0,1],[1,2],[2,3],[3,0]]",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "n = 4, edges = [[0,1],[1,2],[2,3],[3,0]]",
    "starter_code": {
      "javascript": "function hasCycle(n: number, edges: number[][]): boolean {\n  // your code here\n}\n",
      "python": "def hasCycle(n: number, edges: number[][]) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean hasCycle(number n, number[][] edges) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean hasCycle(number n, number[][] edges) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "4, [[0,1],[1,2],[2,3],[3,0]]",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43856",
    "title": "Topological Sort of String Algorithms",
    "slug": "topological-sort-of-string-algorithms-string-algorithms-56",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Topo Sort",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "Topological ordering.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 100",
    "examples": [
      {
        "input": "n = 4, edges = [[1,0],[2,0],[3,1],[3,2]]",
        "output": "[0,1,2,3]",
        "explanation": ""
      }
    ],
    "sample_input": "n = 4, edges = [[1,0],[2,0],[3,1],[3,2]]",
    "starter_code": {
      "javascript": "function topologicalSort(n: number, edges: number[][]): number[] {\n  // your code here\n}\n",
      "python": "def topologicalSort(n: number, edges: number[][]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] topologicalSort(number n, number[][] edges) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] topologicalSort(number n, number[][] edges) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "4, [[1,0],[2,0],[3,1],[3,2]]",
        "expected_output": "[0,1,2,3]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43857",
    "title": "Number of Islands",
    "slug": "number-of-islands-string-algorithms-57",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "BFS/DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "Count islands in grid.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= m, n <= 300",
    "examples": [
      {
        "input": "grid = [[\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "grid = [[\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "starter_code": {
      "javascript": "function numIslands(grid: string[][]): number {\n  // your code here\n}\n",
      "python": "def numIslands(grid: string[][]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number numIslands(string[][] grid) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number numIslands(string[][] grid) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43858",
    "title": "Pacific Atlantic Water Flow",
    "slug": "pacific-atlantic-water-flow-string-algorithms-58",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "Cells reaching both oceans.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= m, n <= 150",
    "examples": [
      {
        "input": "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        "output": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
        "explanation": ""
      }
    ],
    "sample_input": "heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
    "starter_code": {
      "javascript": "function pacificAtlantic(heights: number[][]): number[][] {\n  // your code here\n}\n",
      "python": "def pacificAtlantic(heights: number[][]) -> number[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[][] pacificAtlantic(number[][] heights) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[][] pacificAtlantic(number[][] heights) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]",
        "expected_output": "[[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43859",
    "title": "Word Search",
    "slug": "word-search-string-algorithms-59",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "Check if word exists in board.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= m, n <= 6",
    "examples": [
      {
        "input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "board = [[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], word = \"ABCCED\"",
    "starter_code": {
      "javascript": "function exist(board: string[][], word: string): boolean {\n  // your code here\n}\n",
      "python": "def exist(board: string[][], word: string) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean exist(string[][] board, string word) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean exist(string[][] board, string word) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[\"A\",\"B\",\"C\",\"E\"],[\"S\",\"F\",\"C\",\"S\"],[\"A\",\"D\",\"E\",\"E\"]], \"ABCCED\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43860",
    "title": "Clone Graph",
    "slug": "clone-graph-string-algorithms-60",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS+Map",
    "algorithm_type": "O(n)",
    "visualization_type": "graph",
    "enable_visualization": true,
    "problem_statement": "Deep copy a graph.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 100",
    "examples": [
      {
        "input": "node = 1",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "node = 1",
    "starter_code": {
      "javascript": "function cloneGraph(node: number): number {\n  // your code here\n}\n",
      "python": "def cloneGraph(node: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number cloneGraph(number node) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number cloneGraph(number node) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "1",
        "expected_output": "1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43861",
    "title": "Reverse String",
    "slug": "reverse-string-string-algorithms-61",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Reverse string in-place.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= s.length <= 10^5",
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
      "java": "class Solution {\n    public void reverseString(string[] s) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    void reverseString(string[] s) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"h\",\"e\",\"l\",\"l\",\"o\"]",
        "expected_output": "[\"o\",\"l\",\"l\",\"e\",\"h\"]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43862",
    "title": "Valid Anagram",
    "slug": "valid-anagram-string-algorithms-62",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Check if t is an anagram of s.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= s.length, t.length <= 5*10^4",
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
      "java": "class Solution {\n    public boolean isAnagram(string s, string t) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isAnagram(string s, string t) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"anagram\",\"nagaram\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43863",
    "title": "Valid Palindrome",
    "slug": "valid-palindrome-string-algorithms-63",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Check if palindrome ignoring non-alphanumeric.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= s.length <= 2*10^5",
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
      "java": "class Solution {\n    public boolean isPalindrome(string s) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isPalindrome(string s) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"A man, a plan, a canal: Panama\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43864",
    "title": "Longest Common Prefix",
    "slug": "longest-common-prefix-string-algorithms-64",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Trie",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Longest common prefix.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= strs.length <= 200",
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
      "java": "class Solution {\n    public string longestCommonPrefix(string[] strs) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string longestCommonPrefix(string[] strs) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"flower\",\"flow\",\"flight\"]",
        "expected_output": "\"fl\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43865",
    "title": "Valid Parentheses",
    "slug": "valid-parentheses-string-algorithms-65",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Stack",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Check if brackets are valid.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= s.length <= 10^4",
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
      "java": "class Solution {\n    public boolean isValid(string s) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isValid(string s) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"()[]{}\"",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43866",
    "title": "First Unique Character",
    "slug": "first-unique-character-string-algorithms-66",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Index of first non-repeating character.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= s.length <= 10^5",
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
      "java": "class Solution {\n    public number firstUniqChar(string s) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number firstUniqChar(string s) {\n        return ;\n    }\n};\n"
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
    "id": "43867",
    "title": "Group Anagrams",
    "slug": "group-anagrams-string-algorithms-67",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Group anagrams.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= strs.length <= 10^4",
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
      "java": "class Solution {\n    public string[] groupAnagrams(string[] strs) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string[] groupAnagrams(string[] strs) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"eat\",\"tea\",\"tan\",\"ate\",\"nat\",\"bat\"]",
        "expected_output": "[[\"bat\"],[\"nat\",\"tan\"],[\"ate\",\"eat\",\"tea\"]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43868",
    "title": "Longest Palindromic Substring",
    "slug": "longest-palindromic-substring-string-algorithms-68",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Longest palindromic substring.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= s.length <= 1000",
    "examples": [
      {
        "input": "s = \"babad\"",
        "output": "\"bab\"",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"babad\"",
    "starter_code": {
      "javascript": "function longestPalindrome(s: string): string {\n  // your code here\n}\n",
      "python": "def longestPalindrome(s: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string longestPalindrome(string s) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string longestPalindrome(string s) {\n        return ;\n    }\n};\n"
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
    "id": "43869",
    "title": "String to Integer (atoi)",
    "slug": "string-to-integer-atoi-string-algorithms-69",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Parsing",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Convert string to 32-bit integer.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= s.length <= 200",
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
      "java": "class Solution {\n    public number myAtoi(string s) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number myAtoi(string s) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"   -42\"",
        "expected_output": "-42",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43870",
    "title": "Roman to Integer",
    "slug": "roman-to-integer-string-algorithms-70",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Convert Roman to integer.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= s.length <= 15",
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
      "java": "class Solution {\n    public number romanToInt(string s) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number romanToInt(string s) {\n        return ;\n    }\n};\n"
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
    "id": "43871",
    "title": "Max Depth of String Algorithms",
    "slug": "max-depth-of-string-algorithms-string-algorithms-71",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "Max depth of tree.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 10^4",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "root = [3,9,20,null,null,15,7]",
    "starter_code": {
      "javascript": "function maxDepth(root: any): number {\n  // your code here\n}\n",
      "python": "def maxDepth(root: any) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxDepth(any root) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxDepth(any root) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,9,20,null,null,15,7]",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43872",
    "title": "Min Depth of String Algorithms",
    "slug": "min-depth-of-string-algorithms-string-algorithms-72",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "Min depth of tree.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 10^4",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "root = [3,9,20,null,null,15,7]",
    "starter_code": {
      "javascript": "function minDepth(root: any): number {\n  // your code here\n}\n",
      "python": "def minDepth(root: any) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minDepth(any root) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minDepth(any root) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,9,20,null,null,15,7]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43873",
    "title": "Invert String Algorithms",
    "slug": "invert-string-algorithms-string-algorithms-73",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "Invert a binary tree.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 100",
    "examples": [
      {
        "input": "root = [4,2,7,1,3,6,9]",
        "output": "[4,7,2,9,6,3,1]",
        "explanation": ""
      }
    ],
    "sample_input": "root = [4,2,7,1,3,6,9]",
    "starter_code": {
      "javascript": "function invertTree(root: any): any {\n  // your code here\n}\n",
      "python": "def invertTree(root: any) -> any:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public any invertTree(any root) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    any invertTree(any root) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[4,2,7,1,3,6,9]",
        "expected_output": "[4,7,2,9,6,3,1]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43874",
    "title": "Validate String Algorithms",
    "slug": "validate-string-algorithms-string-algorithms-74",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "Validate the structure.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= n <= 10^4",
    "examples": [
      {
        "input": "root = [2,1,3]",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "root = [2,1,3]",
    "starter_code": {
      "javascript": "function isValid(root: any): boolean {\n  // your code here\n}\n",
      "python": "def isValid(root: any) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isValid(any root) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isValid(any root) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,1,3]",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43875",
    "title": "Symmetric String Algorithms",
    "slug": "symmetric-string-algorithms-string-algorithms-75",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "Check if tree is symmetric.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= n <= 1000",
    "examples": [
      {
        "input": "root = [1,2,2,3,4,4,3]",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "root = [1,2,2,3,4,4,3]",
    "starter_code": {
      "javascript": "function isSymmetric(root: any): boolean {\n  // your code here\n}\n",
      "python": "def isSymmetric(root: any) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isSymmetric(any root) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isSymmetric(any root) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2,3,4,4,3]",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43876",
    "title": "Level Order of String Algorithms",
    "slug": "level-order-of-string-algorithms-string-algorithms-76",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "BFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "Level order traversal.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 2000",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[9,20],[15,7]]",
        "explanation": ""
      }
    ],
    "sample_input": "root = [3,9,20,null,null,15,7]",
    "starter_code": {
      "javascript": "function levelOrder(root: any): any[][] {\n  // your code here\n}\n",
      "python": "def levelOrder(root: any) -> any[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public any[][] levelOrder(any root) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    any[][] levelOrder(any root) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,9,20,null,null,15,7]",
        "expected_output": "[[3],[9,20],[15,7]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43877",
    "title": "Zigzag Level Order",
    "slug": "zigzag-level-order-string-algorithms-77",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "BFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "Zigzag level order traversal.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 2000",
    "examples": [
      {
        "input": "root = [3,9,20,null,null,15,7]",
        "output": "[[3],[20,9],[15,7]]",
        "explanation": ""
      }
    ],
    "sample_input": "root = [3,9,20,null,null,15,7]",
    "starter_code": {
      "javascript": "function zigzagLevelOrder(root: any): any[][] {\n  // your code here\n}\n",
      "python": "def zigzagLevelOrder(root: any) -> any[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public any[][] zigzagLevelOrder(any root) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    any[][] zigzagLevelOrder(any root) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,9,20,null,null,15,7]",
        "expected_output": "[[3],[20,9],[15,7]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43878",
    "title": "Right Side View",
    "slug": "right-side-view-string-algorithms-78",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "BFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "Right side view of tree.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 100",
    "examples": [
      {
        "input": "root = [1,2,3,null,5,null,4]",
        "output": "[1,3,4]",
        "explanation": ""
      }
    ],
    "sample_input": "root = [1,2,3,null,5,null,4]",
    "starter_code": {
      "javascript": "function rightSideView(root: any): any[] {\n  // your code here\n}\n",
      "python": "def rightSideView(root: any) -> any[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public any[] rightSideView(any root) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    any[] rightSideView(any root) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,null,5,null,4]",
        "expected_output": "[1,3,4]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43879",
    "title": "Diameter of String Algorithms",
    "slug": "diameter-of-string-algorithms-string-algorithms-79",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "Diameter of binary tree.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 10^4",
    "examples": [
      {
        "input": "root = [1,2,3,4,5]",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "root = [1,2,3,4,5]",
    "starter_code": {
      "javascript": "function diameter(root: any): number {\n  // your code here\n}\n",
      "python": "def diameter(root: any) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number diameter(any root) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number diameter(any root) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5]",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43880",
    "title": "Lowest Common Ancestor",
    "slug": "lowest-common-ancestor-string-algorithms-80",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "tree",
    "enable_visualization": true,
    "problem_statement": "LCA of two nodes.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "2 <= n <= 10^5",
    "examples": [
      {
        "input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1",
    "starter_code": {
      "javascript": "function lowestCommonAncestor(root: any, p: any, q: any): any {\n  // your code here\n}\n",
      "python": "def lowestCommonAncestor(root: any, p: any, q: any) -> any:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public any lowestCommonAncestor(any root, any p, any q) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    any lowestCommonAncestor(any root, any p, any q) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,5,1,6,2,0,8,null,null,7,4], 5, 1",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43881",
    "title": "Factorial of String Algorithms",
    "slug": "factorial-of-string-algorithms-string-algorithms-81",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute n!",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 12",
    "examples": [
      {
        "input": "n = 5",
        "output": "120",
        "explanation": "5*4*3*2*1"
      }
    ],
    "sample_input": "n = 5",
    "starter_code": {
      "javascript": "function factorial(n: number): number {\n  // your code here\n}\n",
      "python": "def factorial(n: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number factorial(number n) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number factorial(number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "5",
        "expected_output": "120",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "0",
        "expected_output": "1",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43882",
    "title": "Power of Two",
    "slug": "power-of-two-string-algorithms-82",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Bit",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if n is a power of two.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "-2^31 <= n <= 2^31 - 1",
    "examples": [
      {
        "input": "n = 16",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "n = 16",
    "starter_code": {
      "javascript": "function isPowerOfTwo(n: number): boolean {\n  // your code here\n}\n",
      "python": "def isPowerOfTwo(n: number) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isPowerOfTwo(number n) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isPowerOfTwo(number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "16",
        "expected_output": "true",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "3",
        "expected_output": "false",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43883",
    "title": "Power of Three",
    "slug": "power-of-three-string-algorithms-83",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if n is a power of three.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "-2^31 <= n <= 2^31 - 1",
    "examples": [
      {
        "input": "n = 27",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "n = 27",
    "starter_code": {
      "javascript": "function isPowerOfThree(n: number): boolean {\n  // your code here\n}\n",
      "python": "def isPowerOfThree(n: number) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isPowerOfThree(number n) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isPowerOfThree(number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "27",
        "expected_output": "true",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "0",
        "expected_output": "false",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43884",
    "title": "Sqrt(x)",
    "slug": "sqrt-x-string-algorithms-84",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Binary Search",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute floor(sqrt(x)).",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= x <= 2^31 - 1",
    "examples": [
      {
        "input": "x = 4",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "x = 4",
    "starter_code": {
      "javascript": "function mySqrt(x: number): number {\n  // your code here\n}\n",
      "python": "def mySqrt(x: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number mySqrt(number x) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number mySqrt(number x) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "4",
        "expected_output": "2",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "8",
        "expected_output": "2",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43885",
    "title": "Count Primes",
    "slug": "count-primes-string-algorithms-85",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Sieve",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count primes less than n.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 5*10^6",
    "examples": [
      {
        "input": "n = 10",
        "output": "4",
        "explanation": "2,3,5,7"
      }
    ],
    "sample_input": "n = 10",
    "starter_code": {
      "javascript": "function countPrimes(n: number): number {\n  // your code here\n}\n",
      "python": "def countPrimes(n: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number countPrimes(number n) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number countPrimes(number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "10",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43886",
    "title": "Reverse Integer",
    "slug": "reverse-integer-string-algorithms-86",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse digits of integer.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "-2^31 <= x <= 2^31 - 1",
    "examples": [
      {
        "input": "x = 123",
        "output": "321",
        "explanation": ""
      }
    ],
    "sample_input": "x = 123",
    "starter_code": {
      "javascript": "function reverse(x: number): number {\n  // your code here\n}\n",
      "python": "def reverse(x: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number reverse(number x) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number reverse(number x) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "123",
        "expected_output": "321",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "-123",
        "expected_output": "-321",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "43887",
    "title": "Palindrome Number",
    "slug": "palindrome-number-string-algorithms-87",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if integer is palindrome.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "-2^31 <= x <= 2^31 - 1",
    "examples": [
      {
        "input": "x = 121",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "x = 121",
    "starter_code": {
      "javascript": "function isPalindrome(x: number): boolean {\n  // your code here\n}\n",
      "python": "def isPalindrome(x: number) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean isPalindrome(number x) {\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean isPalindrome(number x) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "121",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43888",
    "title": "GCD of Two Numbers",
    "slug": "gcd-of-two-numbers-string-algorithms-88",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute greatest common divisor.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= a, b <= 10^9",
    "examples": [
      {
        "input": "a = 12, b = 8",
        "output": "4",
        "explanation": ""
      }
    ],
    "sample_input": "a = 12, b = 8",
    "starter_code": {
      "javascript": "function gcd(a: number, b: number): number {\n  // your code here\n}\n",
      "python": "def gcd(a: number, b: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number gcd(number a, number b) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number gcd(number a, number b) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "12, 8",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43889",
    "title": "LCM of Two Numbers",
    "slug": "lcm-of-two-numbers-string-algorithms-89",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute least common multiple.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= a, b <= 10^9",
    "examples": [
      {
        "input": "a = 4, b = 6",
        "output": "12",
        "explanation": ""
      }
    ],
    "sample_input": "a = 4, b = 6",
    "starter_code": {
      "javascript": "function lcm(a: number, b: number): number {\n  // your code here\n}\n",
      "python": "def lcm(a: number, b: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number lcm(number a, number b) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number lcm(number a, number b) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "4, 6",
        "expected_output": "12",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43890",
    "title": "Number of Digits",
    "slug": "number-of-digits-string-algorithms-90",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count the digits in n.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 2^31 - 1",
    "examples": [
      {
        "input": "n = 12345",
        "output": "5",
        "explanation": ""
      }
    ],
    "sample_input": "n = 12345",
    "starter_code": {
      "javascript": "function countDigits(n: number): number {\n  // your code here\n}\n",
      "python": "def countDigits(n: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number countDigits(number n) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number countDigits(number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "12345",
        "expected_output": "5",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43891",
    "title": "XOR of All Numbers",
    "slug": "xor-of-all-numbers-string-algorithms-91",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Bit",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "XOR of all elements.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 3*10^4",
    "examples": [
      {
        "input": "arr = [1,2,3]",
        "output": "0",
        "explanation": "1^2^3=0"
      }
    ],
    "sample_input": "arr = [1,2,3]",
    "starter_code": {
      "javascript": "function xorAll(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def xorAll(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number xorAll(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number xorAll(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3]",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43892",
    "title": "Count Set Bits",
    "slug": "count-set-bits-string-algorithms-92",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Bit",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count number of 1 bits.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 2^31 - 1",
    "examples": [
      {
        "input": "n = 11",
        "output": "3",
        "explanation": "1011 has three 1s"
      }
    ],
    "sample_input": "n = 11",
    "starter_code": {
      "javascript": "function hammingWeight(n: number): number {\n  // your code here\n}\n",
      "python": "def hammingWeight(n: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number hammingWeight(number n) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number hammingWeight(number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "11",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43893",
    "title": "Power Function",
    "slug": "power-function-string-algorithms-93",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute x^n.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "-100.0 < x < 100.0\n-2^31 <= n <= 2^31-1",
    "examples": [
      {
        "input": "x = 2.0, n = 10",
        "output": "1024.0",
        "explanation": ""
      }
    ],
    "sample_input": "x = 2.0, n = 10",
    "starter_code": {
      "javascript": "function myPow(x: number, n: number): number {\n  // your code here\n}\n",
      "python": "def myPow(x: number, n: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number myPow(number x, number n) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number myPow(number x, number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "2.0, 10",
        "expected_output": "1024.0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43894",
    "title": "Reverse Bits",
    "slug": "reverse-bits-string-algorithms-94",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Bit",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse bits of 32-bit integer.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "0 <= n <= 2^32 - 1",
    "examples": [
      {
        "input": "n = 43261596",
        "output": "964176192",
        "explanation": ""
      }
    ],
    "sample_input": "n = 43261596",
    "starter_code": {
      "javascript": "function reverseBits(n: number): number {\n  // your code here\n}\n",
      "python": "def reverseBits(n: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number reverseBits(number n) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number reverseBits(number n) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "43261596",
        "expected_output": "964176192",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43895",
    "title": "Missing Number in Range",
    "slug": "missing-number-in-range-string-algorithms-95",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find missing in range [0, n].",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 10^4",
    "examples": [
      {
        "input": "arr = [0,1,3]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [0,1,3]",
    "starter_code": {
      "javascript": "function missingNumber(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def missingNumber(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number missingNumber(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number missingNumber(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,1,3]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43896",
    "title": "Plus One",
    "slug": "plus-one-string-algorithms-96",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Add 1 to number represented as array.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= arr.length <= 100",
    "examples": [
      {
        "input": "arr = [1,2,3]",
        "output": "[1,2,4]",
        "explanation": ""
      }
    ],
    "sample_input": "arr = [1,2,3]",
    "starter_code": {
      "javascript": "function plusOne(arr: number[]): number[] {\n  // your code here\n}\n",
      "python": "def plusOne(arr: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] plusOne(number[] arr) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] plusOne(number[] arr) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3]",
        "expected_output": "[1,2,4]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43897",
    "title": "Add Binary",
    "slug": "add-binary-string-algorithms-97",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Bit",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Add two binary strings.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= a.length, b.length <= 10^4",
    "examples": [
      {
        "input": "a = \"11\", b = \"1\"",
        "output": "\"100\"",
        "explanation": ""
      }
    ],
    "sample_input": "a = \"11\", b = \"1\"",
    "starter_code": {
      "javascript": "function addBinary(a: string, b: string): string {\n  // your code here\n}\n",
      "python": "def addBinary(a: string, b: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string addBinary(string a, string b) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string addBinary(string a, string b) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"11\",\"1\"",
        "expected_output": "\"100\"",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43898",
    "title": "Multiply Strings",
    "slug": "multiply-strings-string-algorithms-98",
    "difficulty": "Medium",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "Math",
    "algorithm_type": "O(n)",
    "visualization_type": "none",
    "enable_visualization": true,
    "problem_statement": "Multiply two non-negative integers.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= a.length, b.length <= 200",
    "examples": [
      {
        "input": "a = \"123\", b = \"456\"",
        "output": "\"56088\"",
        "explanation": ""
      }
    ],
    "sample_input": "a = \"123\", b = \"456\"",
    "starter_code": {
      "javascript": "function multiply(a: string, b: string): string {\n  // your code here\n}\n",
      "python": "def multiply(a: string, b: string) -> string:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string multiply(string a, string b) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string multiply(string a, string b) {\n        return ;\n    }\n};\n"
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
    "id": "43899",
    "title": "Intersection of Arrays",
    "slug": "intersection-of-arrays-string-algorithms-99",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashSet",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find intersection.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= a.length, b.length <= 10^5",
    "examples": [
      {
        "input": "a = [1,2,2,1], b = [2,2]",
        "output": "[2]",
        "explanation": ""
      }
    ],
    "sample_input": "a = [1,2,2,1], b = [2,2]",
    "starter_code": {
      "javascript": "function intersection(a: number[], b: number[]): number[] {\n  // your code here\n}\n",
      "python": "def intersection(a: number[], b: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] intersection(number[] a, number[] b) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] intersection(number[] a, number[] b) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2,1], [2,2]",
        "expected_output": "[2]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "43900",
    "title": "Union of Arrays",
    "slug": "union-of-arrays-string-algorithms-100",
    "difficulty": "Easy",
    "topic_id": "41",
    "topic_name": "String Algorithms",
    "pattern": "HashSet",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find union.",
    "input_format": "See function signature",
    "output_format": "See function signature",
    "constraints": "1 <= a.length, b.length <= 10^5",
    "examples": [
      {
        "input": "a = [1,2,3], b = [2,3,4]",
        "output": "[1,2,3,4]",
        "explanation": ""
      }
    ],
    "sample_input": "a = [1,2,3], b = [2,3,4]",
    "starter_code": {
      "javascript": "function union(a: number[], b: number[]): number[] {\n  // your code here\n}\n",
      "python": "def union(a: number[], b: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] union(number[] a, number[] b) {\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] union(number[] a, number[] b) {\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3], [2,3,4]",
        "expected_output": "[1,2,3,4]",
        "is_hidden": false
      }
    ]
  }
];

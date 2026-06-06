import type { Question } from '../../types';
export const BULK_ARRAYS: Question[] = [
  {
    "id": "30001",
    "title": "Sum of Array",
    "slug": "sum-of-array-arrays-1",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Given an array of integers, return the sum of all elements.",
    "input_format": "nums = [1, 2, 3, 4, 5]",
    "output_format": "integer sum",
    "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "10",
        "explanation": "1+2+3+4 = 10"
      }
    ],
    "sample_input": "nums = [1,2,3,4]",
    "starter_code": {
      "javascript": "function sumArray(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def sumArray(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number sumArray(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number sumArray(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3]",
        "expected_output": "6",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[-1,1,0]",
        "expected_output": "0",
        "is_hidden": true
      },
      {
        "id": "3",
        "input": "[100]",
        "expected_output": "100",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30002",
    "title": "Product of Array",
    "slug": "product-of-array-arrays-2",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the product of all elements in the array.",
    "input_format": "nums = [2, 3, 4]",
    "output_format": "integer product",
    "constraints": "1 <= nums.length <= 10^5\n0 <= nums[i] <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [2,3,4]",
        "output": "24",
        "explanation": "2*3*4 = 24"
      }
    ],
    "sample_input": "nums = [2,3,4]",
    "starter_code": {
      "javascript": "function productArray(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def productArray(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number productArray(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number productArray(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,3,4]",
        "expected_output": "24",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[1,1,1]",
        "expected_output": "1",
        "is_hidden": true
      },
      {
        "id": "3",
        "input": "[0,5,6]",
        "expected_output": "0",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30003",
    "title": "Average of Array",
    "slug": "average-of-array-arrays-3",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute the average of all elements rounded to 2 decimal places.",
    "input_format": "nums = [1, 2, 3, 4]",
    "output_format": "mean rounded",
    "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "2.5",
        "explanation": "(1+2+3+4)/4 = 2.5"
      }
    ],
    "sample_input": "nums = [1,2,3,4]",
    "starter_code": {
      "javascript": "function averageArray(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def averageArray(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number averageArray(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number averageArray(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4]",
        "expected_output": "2.5",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[5,5]",
        "expected_output": "5.00",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30004",
    "title": "Maximum Element",
    "slug": "maximum-element-arrays-4",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the maximum element in the array.",
    "input_format": "nums = [3, 1, 4, 1, 5, 9]",
    "output_format": "largest element",
    "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,1,4,1,5,9,2,6]",
        "output": "9",
        "explanation": "9 is largest"
      }
    ],
    "sample_input": "nums = [3,1,4,1,5,9,2,6]",
    "starter_code": {
      "javascript": "function findMax(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def findMax(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findMax(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findMax(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,1,4,1,5]",
        "expected_output": "5",
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
    "id": "30005",
    "title": "Minimum Element",
    "slug": "minimum-element-arrays-5",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the minimum element.",
    "input_format": "nums = [3, 1, 4, 1, 5, 9]",
    "output_format": "smallest element",
    "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,1,4,1,5,9,2,6]",
        "output": "1",
        "explanation": "1 is smallest"
      }
    ],
    "sample_input": "nums = [3,1,4,1,5,9,2,6]",
    "starter_code": {
      "javascript": "function findMin(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def findMin(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findMin(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findMin(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,1,4,1,5]",
        "expected_output": "1",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[5,5,5]",
        "expected_output": "5",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30006",
    "title": "Second Maximum",
    "slug": "second-maximum-arrays-6",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the second largest distinct element.",
    "input_format": "nums = [3, 1, 4, 1, 5, 9]",
    "output_format": "second largest element",
    "constraints": "2 <= nums.length <= 10^5\nelements are distinct",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,1,4,1,5,9,2,6]",
        "output": "6",
        "explanation": "sorted: 1,1,2,3,4,5,6,9 -> 6"
      }
    ],
    "sample_input": "nums = [3,1,4,1,5,9,2,6]",
    "starter_code": {
      "javascript": "function secondMax(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def secondMax(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number secondMax(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number secondMax(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[10,20,30]",
        "expected_output": "20",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[5,5,5,5]",
        "expected_output": "-1",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30007",
    "title": "Second Minimum",
    "slug": "second-minimum-arrays-7",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Iteration",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the second smallest distinct element.",
    "input_format": "nums = [3, 1, 4, 1, 5]",
    "output_format": "second smallest element",
    "constraints": "2 <= nums.length <= 10^5\nelements are distinct",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,1,4,1,5]",
        "output": "3",
        "explanation": "sorted: 1,1,3,4,5 -> 3"
      }
    ],
    "sample_input": "nums = [3,1,4,1,5]",
    "starter_code": {
      "javascript": "function secondMin(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def secondMin(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number secondMin(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number secondMin(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[10,20,30]",
        "expected_output": "20",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[1,1,1]",
        "expected_output": "-1",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30008",
    "title": "Count Frequency",
    "slug": "count-frequency-arrays-8",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Return the count of each unique element as a flat array.",
    "input_format": "nums = [1, 2, 2, 3, 3, 3]",
    "output_format": "array of [element, count] pairs",
    "constraints": "1 <= nums.length <= 10^5\n-10^9 <= nums[i] <= 10^9",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,2,3,3,3]",
        "output": "[[1,1],[2,2],[3,3]]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,2,3,3,3]",
    "starter_code": {
      "javascript": "function countFrequency(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def countFrequency(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] countFrequency(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] countFrequency(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,1,2]",
        "expected_output": "[[1,2],[2,1]]",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[5]",
        "expected_output": "[[5,1]]",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30009",
    "title": "Running Sum",
    "slug": "running-sum-arrays-9",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Prefix Sum",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return array where runningSum[i] = sum of nums[0..i].",
    "input_format": "nums = [1, 2, 3, 4]",
    "output_format": "array of running sums",
    "constraints": "1 <= nums.length <= 10^5\n-10^3 <= nums[i] <= 10^3",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[1,3,6,10]",
        "explanation": "cumulative sum"
      }
    ],
    "sample_input": "nums = [1,2,3,4]",
    "starter_code": {
      "javascript": "function runningSum(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def runningSum(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] runningSum(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] runningSum(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4]",
        "expected_output": "[1,3,6,10]",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[3,1,2,10,1]",
        "expected_output": "[3,4,6,16,17]",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30010",
    "title": "Cumulative Product",
    "slug": "cumulative-product-arrays-10",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Prefix Product",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return array where each element is the product of all previous elements.",
    "input_format": "nums = [1, 2, 3, 4]",
    "output_format": "cumulative products",
    "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[1,2,6,24]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3,4]",
    "starter_code": {
      "javascript": "function cumulativeProduct(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def cumulativeProduct(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] cumulativeProduct(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] cumulativeProduct(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4]",
        "expected_output": "[1,2,6,24]",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[2,2,2]",
        "expected_output": "[2,4,8]",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30011",
    "title": "Reverse Array",
    "slug": "reverse-array-arrays-11",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse the array and return it.",
    "input_format": "nums = [1, 2, 3, 4]",
    "output_format": "reversed array",
    "constraints": "1 <= nums.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4,5]",
        "output": "[5,4,3,2,1]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3,4,5]",
    "starter_code": {
      "javascript": "function reverseArray(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def reverseArray(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] reverseArray(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] reverseArray(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3]",
        "expected_output": "[3,2,1]",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[1]",
        "expected_output": "[1]",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30012",
    "title": "Rotate Array Right",
    "slug": "rotate-array-right-arrays-12",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Reversal",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Rotate array to the right by k steps.",
    "input_format": "nums = [1,2,3,4,5,6,7], k = 3",
    "output_format": "rotated array",
    "constraints": "1 <= nums.length <= 10^5\n0 <= k <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4,5,6,7], k = 3",
        "output": "[5,6,7,1,2,3,4]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3,4,5,6,7], k = 3",
    "starter_code": {
      "javascript": "function rotateRight(nums: number[], k: number): number[] {\n  // your code here\n}\n",
      "python": "def rotateRight(nums: number[], k: number) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] rotateRight(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] rotateRight(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5], k=2",
        "expected_output": "[4,5,1,2,3]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30013",
    "title": "Rotate Array Left",
    "slug": "rotate-array-left-arrays-13",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Reversal",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Rotate array to the left by k steps.",
    "input_format": "nums = [1,2,3,4,5,6,7], k = 2",
    "output_format": "rotated array",
    "constraints": "1 <= nums.length <= 10^5\n0 <= k <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4,5,6,7], k = 2",
        "output": "[3,4,5,6,7,1,2]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3,4,5,6,7], k = 2",
    "starter_code": {
      "javascript": "function rotateLeft(nums: number[], k: number): number[] {\n  // your code here\n}\n",
      "python": "def rotateLeft(nums: number[], k: number) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] rotateLeft(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] rotateLeft(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5], k=2",
        "expected_output": "[3,4,5,1,2]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30014",
    "title": "Move Zeros to End",
    "slug": "move-zeros-to-end-arrays-14",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Move all zeros to the end, maintaining order of non-zeros.",
    "input_format": "nums = [0, 1, 0, 3, 12]",
    "output_format": "array with zeros at end",
    "constraints": "1 <= nums.length <= 10^4\n-2^31 <= nums[i] <= 2^31 - 1",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0,3,12]",
        "output": "[1,3,12,0,0]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [0,1,0,3,12]",
    "starter_code": {
      "javascript": "function moveZeros(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def moveZeros(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] moveZeros(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] moveZeros(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,1,0,3,12]",
        "expected_output": "[1,3,12,0,0]",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[0,0,1]",
        "expected_output": "[1,0,0]",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30015",
    "title": "Rearrange Even Odd",
    "slug": "rearrange-even-odd-arrays-15",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Rearrange so all even numbers come before all odd numbers.",
    "input_format": "nums = [1, 2, 3, 4, 5]",
    "output_format": "evens then odds",
    "constraints": "1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^9",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4,5,6]",
        "output": "[2,4,6,1,3,5]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3,4,5,6]",
    "starter_code": {
      "javascript": "function rearrangeEvenOdd(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def rearrangeEvenOdd(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] rearrangeEvenOdd(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] rearrangeEvenOdd(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4]",
        "expected_output": "[2,4,1,3]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30016",
    "title": "Reverse K Groups",
    "slug": "reverse-k-groups-arrays-16",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Reversal",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Reverse array in groups of k. If remaining < k, keep as is.",
    "input_format": "nums = [1,2,3,4,5,6], k = 3",
    "output_format": "k-group reversed",
    "constraints": "1 <= nums.length <= 10^5\n1 <= k <= nums.length",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4,5,6,7,8], k = 3",
        "output": "[3,2,1,6,5,4,8,7]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3,4,5,6,7,8], k = 3",
    "starter_code": {
      "javascript": "function reverseKGroup(nums: number[], k: number): number[] {\n  // your code here\n}\n",
      "python": "def reverseKGroup(nums: number[], k: number) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] reverseKGroup(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] reverseKGroup(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5,6,7,8], k=3",
        "expected_output": "[3,2,1,6,5,4,8,7]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30017",
    "title": "Rotate 90 Clockwise (Matrix)",
    "slug": "rotate-90-clockwise-matrix-arrays-17",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Matrix",
    "algorithm_type": "O(n^2)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Rotate an n x n matrix 90 degrees clockwise.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "rotated matrix",
    "constraints": "1 <= n <= 200\n-1000 <= matrix[i][j] <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[[7,4,1],[8,5,2],[9,6,3]]",
        "explanation": ""
      }
    ],
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "starter_code": {
      "javascript": "function rotateMatrix(matrix: number[][]): number[][] {\n  // your code here\n}\n",
      "python": "def rotateMatrix(matrix: number[][]) -> number[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[][] rotateMatrix(number[][] matrix) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[][] rotateMatrix(number[][] matrix) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,2],[3,4]]",
        "expected_output": "[[3,1],[4,2]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30018",
    "title": "Linear Search",
    "slug": "linear-search-arrays-18",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Linear Search",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the index of target, or -1 if not found.",
    "input_format": "nums = [4, 2, 7, 1, 9], target = 7",
    "output_format": "index or -1",
    "constraints": "1 <= nums.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [4,2,7,1,9], target = 7",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [4,2,7,1,9], target = 7",
    "starter_code": {
      "javascript": "function linearSearch(nums: number[], target: number): number {\n  // your code here\n}\n",
      "python": "def linearSearch(nums: number[], target: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number linearSearch(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number linearSearch(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[4,2,7,1,9], 7",
        "expected_output": "2",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[1,2,3], 4",
        "expected_output": "-1",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30019",
    "title": "Binary Search",
    "slug": "binary-search-arrays-19",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Binary Search",
    "algorithm_type": "O(log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Search a sorted array for target. Return index or -1.",
    "input_format": "nums = [1, 3, 5, 7, 9], target = 5",
    "output_format": "index or -1",
    "constraints": "1 <= nums.length <= 10^4\nnums is sorted",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,3,5,7,9,11], target = 7",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,3,5,7,9,11], target = 7",
    "starter_code": {
      "javascript": "function binarySearch(nums: number[], target: number): number {\n  // your code here\n}\n",
      "python": "def binarySearch(nums: number[], target: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number binarySearch(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number binarySearch(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,3,5,7,9], 5",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30020",
    "title": "First Occurrence",
    "slug": "first-occurrence-arrays-20",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Binary Search",
    "algorithm_type": "O(log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the first index where target appears (sorted, with duplicates).",
    "input_format": "nums = [1, 2, 2, 2, 3], target = 2",
    "output_format": "first index",
    "constraints": "1 <= nums.length <= 10^5\nnums is sorted non-decreasing",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,2,2,3,4], target = 2",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,2,2,3,4], target = 2",
    "starter_code": {
      "javascript": "function firstOccurrence(nums: number[], target: number): number {\n  // your code here\n}\n",
      "python": "def firstOccurrence(nums: number[], target: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number firstOccurrence(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number firstOccurrence(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2,2,3], 2",
        "expected_output": "1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30021",
    "title": "Last Occurrence",
    "slug": "last-occurrence-arrays-21",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Binary Search",
    "algorithm_type": "O(log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the last index where target appears.",
    "input_format": "nums = [1, 2, 2, 2, 3], target = 2",
    "output_format": "last index",
    "constraints": "1 <= nums.length <= 10^5\nnums is sorted non-decreasing",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,2,2,3,4], target = 2",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,2,2,3,4], target = 2",
    "starter_code": {
      "javascript": "function lastOccurrence(nums: number[], target: number): number {\n  // your code here\n}\n",
      "python": "def lastOccurrence(nums: number[], target: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number lastOccurrence(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number lastOccurrence(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2,2,3], 2",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30022",
    "title": "Count Occurrences",
    "slug": "count-occurrences-arrays-22",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Binary Search",
    "algorithm_type": "O(log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count how many times target appears in a sorted array.",
    "input_format": "nums = [1, 2, 2, 2, 3], target = 2",
    "output_format": "count",
    "constraints": "1 <= nums.length <= 10^5\nnums is sorted non-decreasing",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,2,2,3,4], target = 2",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,2,2,3,4], target = 2",
    "starter_code": {
      "javascript": "function countOccurrences(nums: number[], target: number): number {\n  // your code here\n}\n",
      "python": "def countOccurrences(nums: number[], target: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number countOccurrences(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number countOccurrences(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2,2,3], 2",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30023",
    "title": "Find Missing Number",
    "slug": "find-missing-number-arrays-23",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "XOR",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Array contains n distinct numbers from 0 to n with one missing. Find it.",
    "input_format": "nums = [3, 0, 1]",
    "output_format": "missing number",
    "constraints": "1 <= n <= 10^4\nnums has n distinct numbers from 0..n",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,0,1]",
        "output": "2",
        "explanation": "range [0,3] -> 2 missing"
      }
    ],
    "sample_input": "nums = [3,0,1]",
    "starter_code": {
      "javascript": "function findMissing(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def findMissing(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findMissing(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findMissing(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,1,3]",
        "expected_output": "2",
        "is_hidden": false
      },
      {
        "id": "2",
        "input": "[0]",
        "expected_output": "1",
        "is_hidden": true
      }
    ]
  },
  {
    "id": "30024",
    "title": "Find Duplicate",
    "slug": "find-duplicate-arrays-24",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Floyd",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Array has n+1 integers in [1, n] with one duplicate. Find it.",
    "input_format": "nums = [1, 3, 4, 2, 2]",
    "output_format": "duplicate",
    "constraints": "1 <= n <= 10^5\nnums.length = n+1",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,3,4,2,2]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,3,4,2,2]",
    "starter_code": {
      "javascript": "function findDuplicate(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def findDuplicate(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findDuplicate(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findDuplicate(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,1,3,4,2]",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30025",
    "title": "All Duplicates",
    "slug": "all-duplicates-arrays-25",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find all elements that appear twice.",
    "input_format": "nums = [4, 3, 2, 7, 8, 2, 3, 1]",
    "output_format": "duplicates",
    "constraints": "1 <= n <= 10^5\nelements in [1,n]\n1 or 2 occurrences",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [4,3,2,7,8,2,3,1]",
        "output": "[2,3]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [4,3,2,7,8,2,3,1]",
    "starter_code": {
      "javascript": "function findAllDuplicates(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def findAllDuplicates(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] findAllDuplicates(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] findAllDuplicates(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[4,3,2,7,8,2,3,1]",
        "expected_output": "[2,3]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30026",
    "title": "Contains Duplicate",
    "slug": "contains-duplicate-arrays-26",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Hash Set",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return true if any value appears at least twice.",
    "input_format": "nums = [1, 2, 3, 1]",
    "output_format": "true or false",
    "constraints": "1 <= nums.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,1]",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3,1]",
    "starter_code": {
      "javascript": "function containsDuplicate(nums: number[]): boolean {\n  // your code here\n}\n",
      "python": "def containsDuplicate(nums: number[]) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean containsDuplicate(number[] nums) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean containsDuplicate(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
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
    "id": "30027",
    "title": "Single Number",
    "slug": "single-number-arrays-27",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "XOR",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Every element appears twice except one. Find the unique one.",
    "input_format": "nums = [2, 2, 1]",
    "output_format": "unique",
    "constraints": "1 <= nums.length <= 3*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [4,1,2,1,2]",
        "output": "4",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [4,1,2,1,2]",
    "starter_code": {
      "javascript": "function singleNumber(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def singleNumber(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number singleNumber(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number singleNumber(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,2,1]",
        "expected_output": "1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30028",
    "title": "Two Sum",
    "slug": "two-sum-arrays-28",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "hashmap",
    "enable_visualization": true,
    "problem_statement": "Return indices of two numbers that add to target.",
    "input_format": "nums = [2, 7, 11, 15], target = 9",
    "output_format": "indices",
    "constraints": "2 <= nums.length <= 10^4\nexactly one solution",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[0,1]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [2,7,11,15], target = 9",
    "starter_code": {
      "javascript": "function twoSum(nums: number[], target: number): number[] {\n  // your code here\n}\n",
      "python": "def twoSum(nums: number[], target: number) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] twoSum(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] twoSum(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
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
    "id": "30029",
    "title": "Two Sum Sorted",
    "slug": "two-sum-sorted-arrays-29",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return 1-indexed positions of two numbers in sorted array that sum to target.",
    "input_format": "nums = [2, 7, 11, 15], target = 9",
    "output_format": "1-indexed positions",
    "constraints": "2 <= nums.length <= 3*10^4\nnums is sorted\nexactly one solution",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [2,7,11,15], target = 9",
        "output": "[1,2]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [2,7,11,15], target = 9",
    "starter_code": {
      "javascript": "function twoSumSorted(nums: number[], target: number): number[] {\n  // your code here\n}\n",
      "python": "def twoSumSorted(nums: number[], target: number) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] twoSumSorted(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] twoSumSorted(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,3,4], 6",
        "expected_output": "[1,3]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30030",
    "title": "Three Sum",
    "slug": "three-sum-arrays-30",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n^2)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find all unique triplets that sum to zero.",
    "input_format": "nums = [-1, 0, 1, 2, -1, -4]",
    "output_format": "all unique triplets",
    "constraints": "0 <= nums.length <= 3000\n-10^5 <= nums[i] <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [-1,0,1,2,-1,-4]",
        "output": "[[-1,-1,2],[-1,0,1]]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [-1,0,1,2,-1,-4]",
    "starter_code": {
      "javascript": "function threeSum(nums: number[]): number[][] {\n  // your code here\n}\n",
      "python": "def threeSum(nums: number[]) -> number[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[][] threeSum(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[][] threeSum(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,1,1]",
        "expected_output": "[]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30031",
    "title": "Three Sum Closest",
    "slug": "three-sum-closest-arrays-31",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n^2)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the sum of three integers closest to target.",
    "input_format": "nums = [-1, 2, 1, -4], target = 1",
    "output_format": "closest sum",
    "constraints": "3 <= nums.length <= 500\n-10^3 <= nums[i] <= 10^3",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [-1,2,1,-4], target = 1",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [-1,2,1,-4], target = 1",
    "starter_code": {
      "javascript": "function threeSumClosest(nums: number[], target: number): number {\n  // your code here\n}\n",
      "python": "def threeSumClosest(nums: number[], target: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number threeSumClosest(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number threeSumClosest(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,0,0], 1",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30032",
    "title": "Four Sum",
    "slug": "four-sum-arrays-32",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n^3)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find all unique quadruplets that sum to target.",
    "input_format": "nums = [1, 0, -1, 0, -2, 2], target = 0",
    "output_format": "all unique quadruplets",
    "constraints": "1 <= nums.length <= 200",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,0,-1,0,-2,2], target = 0",
        "output": "[[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,0,-1,0,-2,2], target = 0",
    "starter_code": {
      "javascript": "function fourSum(nums: number[], target: number): number[][] {\n  // your code here\n}\n",
      "python": "def fourSum(nums: number[], target: number) -> number[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[][] fourSum(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[][] fourSum(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,2,2,2,2], 8",
        "expected_output": "[[2,2,2,2]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30033",
    "title": "Max Subarray Sum (Kadane)",
    "slug": "max-subarray-sum-kadane-arrays-33",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Kadane",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the contiguous subarray with the largest sum.",
    "input_format": "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
    "output_format": "max sum",
    "constraints": "1 <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        "output": "6",
        "explanation": "[4,-1,2,1] = 6"
      }
    ],
    "sample_input": "nums = [-2,1,-3,4,-1,2,1,-5,4]",
    "starter_code": {
      "javascript": "function maxSubArray(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def maxSubArray(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxSubArray(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxSubArray(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
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
    "id": "30034",
    "title": "Min Subarray Sum",
    "slug": "min-subarray-sum-arrays-34",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Kadane variant",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the contiguous subarray with the smallest sum.",
    "input_format": "nums = [3, -2, 5, -1]",
    "output_format": "min sum",
    "constraints": "1 <= nums.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,-2,5,-1]",
        "output": "-3",
        "explanation": "whole array: 3-2+5-1=5, or [3,-2,-1] = 0. minimum is -3 for [3,-2,5,-1]: try [-2,5,-1]=2, single -2=-2. actually min=5 with whole array; but -2 is the smallest single element. min subarray is just -2 = -2"
      }
    ],
    "sample_input": "nums = [3,-2,5,-1]",
    "starter_code": {
      "javascript": "function minSubArray(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def minSubArray(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minSubArray(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minSubArray(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,-2,5,-1]",
        "expected_output": "-2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30035",
    "title": "Max Product Subarray",
    "slug": "max-product-subarray-arrays-35",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the contiguous subarray with the largest product.",
    "input_format": "nums = [2, 3, -2, 4]",
    "output_format": "max product",
    "constraints": "1 <= nums.length <= 2*10^4\n-10 <= nums[i] <= 10",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [2,3,-2,4]",
        "output": "6",
        "explanation": "[2,3] = 6"
      }
    ],
    "sample_input": "nums = [2,3,-2,4]",
    "starter_code": {
      "javascript": "function maxProduct(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def maxProduct(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxProduct(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxProduct(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[-2,0,-1]",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30036",
    "title": "Min Size Subarray Sum",
    "slug": "min-size-subarray-sum-arrays-36",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find minimal length of a contiguous subarray with sum >= target.",
    "input_format": "target = 7, nums = [2, 3, 1, 2, 4, 3]",
    "output_format": "min length",
    "constraints": "1 <= target <= 10^9\n1 <= nums.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "target = 7, nums = [2,3,1,2,4,3]",
        "output": "2",
        "explanation": "[4,3] sum 7"
      }
    ],
    "sample_input": "target = 7, nums = [2,3,1,2,4,3]",
    "starter_code": {
      "javascript": "function minSubArrayLen(target: number, nums: number[]): number {\n  // your code here\n}\n",
      "python": "def minSubArrayLen(target: number, nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minSubArrayLen(number target, number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minSubArrayLen(number target, number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "4, [1,4,4]",
        "expected_output": "1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30037",
    "title": "Subarray Sum Equals K",
    "slug": "subarray-sum-equals-k-arrays-37",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Prefix + HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count contiguous subarrays that sum to k.",
    "input_format": "nums = [1, 1, 1], k = 2",
    "output_format": "count",
    "constraints": "1 <= nums.length <= 2*10^4\n-1000 <= nums[i] <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,1,1], k = 2",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,1,1], k = 2",
    "starter_code": {
      "javascript": "function subarraySum(nums: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def subarraySum(nums: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number subarraySum(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number subarraySum(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3], 3",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30038",
    "title": "Longest Subarray Sum K",
    "slug": "longest-subarray-sum-k-arrays-38",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Prefix + HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Length of the longest subarray with sum k.",
    "input_format": "nums = [1, -1, 5, -2, 3], k = 3",
    "output_format": "longest length",
    "constraints": "1 <= nums.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,-1,5,-2,3], k = 3",
        "output": "4",
        "explanation": "[1,-1,5,-2] sums to 3"
      }
    ],
    "sample_input": "nums = [1,-1,5,-2,3], k = 3",
    "starter_code": {
      "javascript": "function longestSubarraySumK(nums: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def longestSubarraySumK(nums: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestSubarraySumK(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestSubarraySumK(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[-1,1,2,3], 3",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30039",
    "title": "Subarray With Given Sum (Positives)",
    "slug": "subarray-with-given-sum-positives-arrays-39",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find a contiguous subarray (1-indexed) of positive numbers that sums to target.",
    "input_format": "nums = [1, 4, 20, 3, 10, 5], target = 33",
    "output_format": "subarray indices",
    "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,7,5], target = 12",
        "output": "[2,4]",
        "explanation": "2+3+7=12"
      }
    ],
    "sample_input": "nums = [1,2,3,7,5], target = 12",
    "starter_code": {
      "javascript": "function subarraySumPositive(nums: number[], target: number): number[] {\n  // your code here\n}\n",
      "python": "def subarraySumPositive(nums: number[], target: number) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] subarraySumPositive(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] subarraySumPositive(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,10,3], 10",
        "expected_output": "[1,1]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30040",
    "title": "Largest Subarray Length With Sum <= K",
    "slug": "largest-subarray-length-with-sum-k-arrays-40",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the longest subarray of positive numbers with sum <= k.",
    "input_format": "nums = [3, 1, 2, 1, 1], k = 4",
    "output_format": "longest length",
    "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,1,2,1,1], k = 4",
        "output": "3",
        "explanation": "[1,2,1] sum 4"
      }
    ],
    "sample_input": "nums = [3,1,2,1,1], k = 4",
    "starter_code": {
      "javascript": "function longestSubarrayAtMostK(nums: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def longestSubarrayAtMostK(nums: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestSubarrayAtMostK(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestSubarrayAtMostK(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
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
    "id": "30041",
    "title": "Maximum Average Subarray I",
    "slug": "maximum-average-subarray-i-arrays-41",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the contiguous subarray of size k with maximum average.",
    "input_format": "nums = [1, 12, -5, -6, 50, 3], k = 4",
    "output_format": "max avg",
    "constraints": "1 <= k <= nums.length <= 10^5\n-10^4 <= nums[i] <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,12,-5,-6,50,3], k = 4",
        "output": "12.75",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,12,-5,-6,50,3], k = 4",
    "starter_code": {
      "javascript": "function findMaxAverage(nums: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def findMaxAverage(nums: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findMaxAverage(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findMaxAverage(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[5], 1",
        "expected_output": "5",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30042",
    "title": "Contiguous Array (Equal 0 and 1)",
    "slug": "contiguous-array-equal-0-and-1-arrays-42",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Prefix + HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find max length of contiguous subarray with equal 0s and 1s.",
    "input_format": "nums = [0, 1, 0]",
    "output_format": "max length",
    "constraints": "1 <= nums.length <= 10^5\nnums[i] is 0 or 1",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [0,1,0]",
        "output": "2",
        "explanation": "[0,1] or [1,0]"
      }
    ],
    "sample_input": "nums = [0,1,0]",
    "starter_code": {
      "javascript": "function findMaxLength(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def findMaxLength(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findMaxLength(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findMaxLength(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,1,0,1]",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30043",
    "title": "Continuous Subarray Sum",
    "slug": "continuous-subarray-sum-arrays-43",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Prefix + HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if array has continuous subarray of size >= 2 with sum divisible by k.",
    "input_format": "nums = [23, 2, 4, 6, 7], k = 6",
    "output_format": "true or false",
    "constraints": "1 <= nums.length <= 10^5\n0 <= nums[i] <= 10^9\n1 <= k <= 2^31 - 1",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [23,2,4,6,7], k = 6",
        "output": "true",
        "explanation": "[2,4] = 6"
      }
    ],
    "sample_input": "nums = [23,2,4,6,7], k = 6",
    "starter_code": {
      "javascript": "function checkSubarraySum(nums: number[], k: number): boolean {\n  // your code here\n}\n",
      "python": "def checkSubarraySum(nums: number[], k: number) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean checkSubarraySum(number[] nums, number k) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean checkSubarraySum(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[23,2,6,4,7], 6",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30044",
    "title": "Maximum Subarray Sum Circular",
    "slug": "maximum-subarray-sum-circular-arrays-44",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Kadane",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find max subarray sum in a circular array.",
    "input_format": "nums = [1, -2, 3, -2]",
    "output_format": "max sum",
    "constraints": "1 <= nums.length <= 3*10^4\n-3*10^4 <= nums[i] <= 3*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [5,-3,5]",
        "output": "10",
        "explanation": "[5] + [5] wrap = 10"
      }
    ],
    "sample_input": "nums = [5,-3,5]",
    "starter_code": {
      "javascript": "function maxSubarraySumCircular(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def maxSubarraySumCircular(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxSubarraySumCircular(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxSubarraySumCircular(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,-1,2,-1]",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30045",
    "title": "Longest Subarray of 1s After Deleting One",
    "slug": "longest-subarray-of-1s-after-deleting-one-arrays-45",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return length of longest subarray of 1s if you can flip at most k zeros.",
    "input_format": "nums = [1, 1, 0, 0, 1, 1, 1, 0, 1], k = 1",
    "output_format": "longest length",
    "constraints": "1 <= nums.length <= 10^5\nnums[i] is 0 or 1\n0 <= k <= nums.length",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,1,0,0,1,1,1,0,1], k = 1",
        "output": "6",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,1,0,0,1,1,1,0,1], k = 1",
    "starter_code": {
      "javascript": "function longestOnes(nums: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def longestOnes(nums: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestOnes(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestOnes(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,0,1,1], 0",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30046",
    "title": "Maximum Number of Vowels in Substring",
    "slug": "maximum-number-of-vowels-in-substring-arrays-46",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max number of vowels in any substring of length k.",
    "input_format": "s = \"abciiidef\", k = 3",
    "output_format": "max vowel count",
    "constraints": "1 <= s.length <= 10^5\ns consists of lowercase English letters\n1 <= k <= s.length",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
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
      "java": "class Solution {\n    public number maxVowels(string s, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxVowels(string s, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"aeiou\", 2",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30047",
    "title": "Max Consecutive Ones III",
    "slug": "max-consecutive-ones-iii-arrays-47",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max consecutive 1s if you can flip at most k zeros.",
    "input_format": "nums = [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], k = 2",
    "output_format": "max length",
    "constraints": "1 <= nums.length <= 10^5\nnums[i] is 0 or 1\n0 <= k <= nums.length",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
        "output": "6",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2",
    "starter_code": {
      "javascript": "function longestOnes2(nums: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def longestOnes2(nums: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number longestOnes2(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number longestOnes2(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3",
        "expected_output": "10",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30048",
    "title": "Fruit Into Baskets",
    "slug": "fruit-into-baskets-arrays-48",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sliding Window",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Longest subarray with at most 2 distinct values.",
    "input_format": "fruits = [1, 2, 1]",
    "output_format": "max fruits",
    "constraints": "1 <= fruits.length <= 10^5\n0 <= fruits[i] < fruits.length",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "fruits = [1,2,1,2,3]",
        "output": "4",
        "explanation": "[1,2,1,2]"
      }
    ],
    "sample_input": "fruits = [1,2,1,2,3]",
    "starter_code": {
      "javascript": "function totalFruit(fruits: number[]): number {\n  // your code here\n}\n",
      "python": "def totalFruit(fruits: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number totalFruit(number[] fruits) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number totalFruit(number[] fruits) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,1,2,2]",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30049",
    "title": "Kth Largest Element",
    "slug": "kth-largest-element-arrays-49",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Quick Select",
    "algorithm_type": "O(n) avg",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the kth largest element in unsorted array.",
    "input_format": "nums = [3, 2, 1, 5, 6, 4], k = 2",
    "output_format": "kth largest",
    "constraints": "1 <= k <= nums.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "5",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "starter_code": {
      "javascript": "function findKthLargest(nums: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def findKthLargest(nums: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findKthLargest(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findKthLargest(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,2,3,1,2,4,5,5,6], 4",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30050",
    "title": "Kth Smallest Element",
    "slug": "kth-smallest-element-arrays-50",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Quick Select",
    "algorithm_type": "O(n) avg",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find the kth smallest element.",
    "input_format": "nums = [3, 2, 1, 5, 6, 4], k = 2",
    "output_format": "kth smallest",
    "constraints": "1 <= k <= nums.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,2,1,5,6,4], k = 2",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [3,2,1,5,6,4], k = 2",
    "starter_code": {
      "javascript": "function findKthSmallest(nums: number[], k: number): number {\n  // your code here\n}\n",
      "python": "def findKthSmallest(nums: number[], k: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findKthSmallest(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findKthSmallest(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
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
    "id": "30051",
    "title": "Top K Frequent Elements",
    "slug": "top-k-frequent-elements-arrays-51",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Bucket Sort",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the k most frequent elements.",
    "input_format": "nums = [1, 1, 1, 2, 2, 3], k = 2",
    "output_format": "top k",
    "constraints": "1 <= nums.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,1,1,2,2,3], k = 2",
        "output": "[1,2]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,1,1,2,2,3], k = 2",
    "starter_code": {
      "javascript": "function topKFrequent(nums: number[], k: number): number[] {\n  // your code here\n}\n",
      "python": "def topKFrequent(nums: number[], k: number) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] topKFrequent(number[] nums, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] topKFrequent(number[] nums, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1], 1",
        "expected_output": "[1]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30052",
    "title": "Top K Frequent Words",
    "slug": "top-k-frequent-words-arrays-52",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "HashMap + Heap",
    "algorithm_type": "O(n log k)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the k most frequent words, sorted by frequency desc, lex asc.",
    "input_format": "words = [\"i\",\"love\",\"leetcode\",\"i\",\"love\",\"coding\"], k = 2",
    "output_format": "top k words",
    "constraints": "1 <= words.length <= 500",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "words = [\"i\",\"love\",\"leetcode\",\"i\",\"love\",\"coding\"], k = 2",
        "output": "[\"i\",\"love\"]",
        "explanation": ""
      }
    ],
    "sample_input": "words = [\"i\",\"love\",\"leetcode\",\"i\",\"love\",\"coding\"], k = 2",
    "starter_code": {
      "javascript": "function topKFrequentWords(words: string[], k: number): string[] {\n  // your code here\n}\n",
      "python": "def topKFrequentWords(words: string[], k: number) -> string[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string[] topKFrequentWords(string[] words, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string[] topKFrequentWords(string[] words, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[\"a\",\"b\"], 2",
        "expected_output": "[\"a\",\"b\"]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30053",
    "title": "K Closest Points to Origin",
    "slug": "k-closest-points-to-origin-arrays-53",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Heap",
    "algorithm_type": "O(n log k)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the k closest points to origin (0,0).",
    "input_format": "points = [[1,3],[-2,2]], k = 1",
    "output_format": "k closest",
    "constraints": "1 <= k <= points.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "points = [[1,3],[-2,2],[2,-2]], k = 2",
        "output": "[[-2,2],[2,-2]]",
        "explanation": ""
      }
    ],
    "sample_input": "points = [[1,3],[-2,2],[2,-2]], k = 2",
    "starter_code": {
      "javascript": "function kClosest(points: number[][], k: number): number[][] {\n  // your code here\n}\n",
      "python": "def kClosest(points: number[][], k: number) -> number[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[][] kClosest(number[][] points, number k) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[][] kClosest(number[][] points, number k) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[3,3],[5,-1],[-2,4]], 2",
        "expected_output": "[[3,3],[-2,4]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30054",
    "title": "Sort Array by Parity",
    "slug": "sort-array-by-parity-arrays-54",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return array with all evens first, then odds.",
    "input_format": "nums = [3, 1, 2, 4]",
    "output_format": "parity sorted",
    "constraints": "1 <= nums.length <= 5*10^4\n0 <= nums[i] <= 5000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,1,2,4]",
        "output": "[2,4,3,1]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [3,1,2,4]",
    "starter_code": {
      "javascript": "function sortArrayByParity(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortArrayByParity(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortArrayByParity(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortArrayByParity(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,1]",
        "expected_output": "[0,1]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30055",
    "title": "Sort Array by Parity II",
    "slug": "sort-array-by-parity-ii-arrays-55",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Half are even at even indices, half are odd at odd indices.",
    "input_format": "nums = [4, 2, 5, 7]",
    "output_format": "parity-correct",
    "constraints": "2 <= nums.length <= 2*10^4\nnums.length is even\nhalf even half odd",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [4,2,5,7]",
        "output": "[4,5,2,7]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [4,2,5,7]",
    "starter_code": {
      "javascript": "function sortArrayByParityII(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortArrayByParityII(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortArrayByParityII(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortArrayByParityII(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,3]",
        "expected_output": "[2,3]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30056",
    "title": "Sort Colors (0,1,2)",
    "slug": "sort-colors-0-1-2-arrays-56",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Dutch Flag",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort an array of 0s, 1s, and 2s in-place.",
    "input_format": "nums = [2, 0, 2, 1, 1, 0]",
    "output_format": "sorted",
    "constraints": "1 <= nums.length <= 300\nnums[i] is 0, 1, or 2",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [2,0,2,1,1,0]",
        "output": "[0,0,1,1,2,2]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [2,0,2,1,1,0]",
    "starter_code": {
      "javascript": "function sortColors(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortColors(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortColors(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortColors(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0]",
        "expected_output": "[0]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30057",
    "title": "Wiggle Sort",
    "slug": "wiggle-sort-arrays-57",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Greedy + Sort",
    "algorithm_type": "O(n log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Rearrange so nums[0] <= nums[1] >= nums[2] <= nums[3]...",
    "input_format": "nums = [3, 5, 2, 1, 6, 4]",
    "output_format": "wiggle-sorted",
    "constraints": "1 <= nums.length <= 5*10^3\n0 <= nums[i] <= 3*10^3",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,5,2,1,6,4]",
        "output": "[3,5,1,6,2,4]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [3,5,2,1,6,4]",
    "starter_code": {
      "javascript": "function wiggleSort(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def wiggleSort(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] wiggleSort(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] wiggleSort(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3]",
        "expected_output": "[1,3,2]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30058",
    "title": "Sort Array Squared",
    "slug": "sort-array-squared-arrays-58",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return squares of sorted array, also sorted.",
    "input_format": "nums = [-4, -1, 0, 3, 10]",
    "output_format": "sorted squares",
    "constraints": "1 <= nums.length <= 10^4\nnums is sorted",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [-4,-1,0,3,10]",
        "output": "[0,1,9,16,100]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [-4,-1,0,3,10]",
    "starter_code": {
      "javascript": "function sortedSquares(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortedSquares(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortedSquares(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortedSquares(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[-7,-3,2,3,11]",
        "expected_output": "[4,9,9,49,121]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30059",
    "title": "Merge Intervals",
    "slug": "merge-intervals-arrays-59",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sorting",
    "algorithm_type": "O(n log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Merge all overlapping intervals.",
    "input_format": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "output_format": "merged",
    "constraints": "1 <= intervals.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        "output": "[[1,6],[8,10],[15,18]]",
        "explanation": ""
      }
    ],
    "sample_input": "intervals = [[1,3],[2,6],[8,10],[15,18]]",
    "starter_code": {
      "javascript": "function mergeIntervals(intervals: number[][]): number[][] {\n  // your code here\n}\n",
      "python": "def mergeIntervals(intervals: number[][]) -> number[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[][] mergeIntervals(number[][] intervals) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[][] mergeIntervals(number[][] intervals) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,4],[4,5]]",
        "expected_output": "[[1,5]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30060",
    "title": "Insert Interval",
    "slug": "insert-interval-arrays-60",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Linear Scan",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Insert a new interval into sorted non-overlapping intervals.",
    "input_format": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "output_format": "merged",
    "constraints": "0 <= intervals.length <= 10^4\nintervals sorted by start",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
        "output": "[[1,5],[6,9]]",
        "explanation": ""
      }
    ],
    "sample_input": "intervals = [[1,3],[6,9]], newInterval = [2,5]",
    "starter_code": {
      "javascript": "function insertInterval(intervals: number[][], newInterval: number[]): number[][] {\n  // your code here\n}\n",
      "python": "def insertInterval(intervals: number[][], newInterval: number[]) -> number[][]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[][] insertInterval(number[][] intervals, number[] newInterval) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[][] insertInterval(number[][] intervals, number[] newInterval) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]",
        "expected_output": "[[1,2],[3,10],[12,16]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30061",
    "title": "Non-Overlapping Intervals",
    "slug": "non-overlapping-intervals-arrays-61",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Greedy",
    "algorithm_type": "O(n log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min intervals to remove so rest are non-overlapping.",
    "input_format": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
    "output_format": "min removals",
    "constraints": "1 <= intervals.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "intervals = [[1,2],[2,3],[3,4],[1,3]]",
    "starter_code": {
      "javascript": "function eraseOverlapIntervals(intervals: number[][]): number {\n  // your code here\n}\n",
      "python": "def eraseOverlapIntervals(intervals: number[][]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number eraseOverlapIntervals(number[][] intervals) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number eraseOverlapIntervals(number[][] intervals) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,2],[2,3]]",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30062",
    "title": "Meeting Rooms",
    "slug": "meeting-rooms-arrays-62",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sort",
    "algorithm_type": "O(n log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Check if a person can attend all meetings.",
    "input_format": "intervals = [[0,30],[5,10],[15,20]]",
    "output_format": "true or false",
    "constraints": "0 <= intervals.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "intervals = [[0,30],[5,10],[15,20]]",
        "output": "false",
        "explanation": ""
      }
    ],
    "sample_input": "intervals = [[0,30],[5,10],[15,20]]",
    "starter_code": {
      "javascript": "function canAttendMeetings(intervals: number[][]): boolean {\n  // your code here\n}\n",
      "python": "def canAttendMeetings(intervals: number[][]) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean canAttendMeetings(number[][] intervals) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean canAttendMeetings(number[][] intervals) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[7,10],[2,4]]",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30063",
    "title": "Meeting Rooms II",
    "slug": "meeting-rooms-ii-arrays-63",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Min Heap",
    "algorithm_type": "O(n log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min number of conference rooms required.",
    "input_format": "intervals = [[0,30],[5,10],[15,20]]",
    "output_format": "min rooms",
    "constraints": "1 <= intervals.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "intervals = [[0,30],[5,10],[15,20]]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "intervals = [[0,30],[5,10],[15,20]]",
    "starter_code": {
      "javascript": "function minMeetingRooms(intervals: number[][]): number {\n  // your code here\n}\n",
      "python": "def minMeetingRooms(intervals: number[][]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number minMeetingRooms(number[][] intervals) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number minMeetingRooms(number[][] intervals) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[7,10],[2,4]]",
        "expected_output": "1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30064",
    "title": "Min Arrows to Burst Balloons",
    "slug": "min-arrows-to-burst-balloons-arrays-64",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Greedy",
    "algorithm_type": "O(n log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min arrows to burst all balloons.",
    "input_format": "points = [[10,16],[2,8],[1,6],[7,12]]",
    "output_format": "min arrows",
    "constraints": "1 <= points.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "points = [[10,16],[2,8],[1,6],[7,12]]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "points = [[10,16],[2,8],[1,6],[7,12]]",
    "starter_code": {
      "javascript": "function findMinArrowShots(points: number[][]): number {\n  // your code here\n}\n",
      "python": "def findMinArrowShots(points: number[][]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findMinArrowShots(number[][] points) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findMinArrowShots(number[][] points) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,2],[3,4],[5,6]]",
        "expected_output": "3",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30065",
    "title": "Summary Ranges",
    "slug": "summary-ranges-arrays-65",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Linear Scan",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return the smallest sorted list of ranges that cover all numbers.",
    "input_format": "nums = [0, 1, 2, 4, 5, 7]",
    "output_format": "ranges",
    "constraints": "0 <= nums.length <= 20\nsorted, unique",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [0,1,2,4,5,7]",
        "output": "[\"0->2\",\"4->5\",\"7\"]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [0,1,2,4,5,7]",
    "starter_code": {
      "javascript": "function summaryRanges(nums: number[]): string[] {\n  // your code here\n}\n",
      "python": "def summaryRanges(nums: number[]) -> string[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public string[] summaryRanges(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    string[] summaryRanges(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0,2,3,4,6,8,9]",
        "expected_output": "[\"0\",\"2->4\",\"6\",\"8->9\"]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30066",
    "title": "Partition Labels",
    "slug": "partition-labels-arrays-66",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Greedy + Last Index",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Partition string so each letter appears in at most one part.",
    "input_format": "s = \"ababcbacadefegdehijhklij\"",
    "output_format": "partition sizes",
    "constraints": "1 <= s.length <= 500\ns contains lowercase English letters",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "s = \"ababcbacadefegdehijhklij\"",
        "output": "[9,7,8]",
        "explanation": ""
      }
    ],
    "sample_input": "s = \"ababcbacadefegdehijhklij\"",
    "starter_code": {
      "javascript": "function partitionLabels(s: string): number[] {\n  // your code here\n}\n",
      "python": "def partitionLabels(s: string) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] partitionLabels(string s) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] partitionLabels(string s) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "\"eccbbbbdec\"",
        "expected_output": "[10]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30067",
    "title": "Best Time Buy Sell Stock",
    "slug": "best-time-buy-sell-stock-arrays-67",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Greedy",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max profit from one buy and one sell.",
    "input_format": "prices = [7, 1, 5, 3, 6, 4]",
    "output_format": "max profit",
    "constraints": "1 <= prices.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "5",
        "explanation": ""
      }
    ],
    "sample_input": "prices = [7,1,5,3,6,4]",
    "starter_code": {
      "javascript": "function maxProfit(prices: number[]): number {\n  // your code here\n}\n",
      "python": "def maxProfit(prices: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxProfit(number[] prices) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxProfit(number[] prices) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[7,6,4,3,1]",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30068",
    "title": "Best Time Buy Sell Stock II",
    "slug": "best-time-buy-sell-stock-ii-arrays-68",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Greedy",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max profit from unlimited transactions.",
    "input_format": "prices = [7, 1, 5, 3, 6, 4]",
    "output_format": "max profit",
    "constraints": "1 <= prices.length <= 3*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "prices = [7,1,5,3,6,4]",
        "output": "7",
        "explanation": ""
      }
    ],
    "sample_input": "prices = [7,1,5,3,6,4]",
    "starter_code": {
      "javascript": "function maxProfitII(prices: number[]): number {\n  // your code here\n}\n",
      "python": "def maxProfitII(prices: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxProfitII(number[] prices) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxProfitII(number[] prices) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4,5]",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30069",
    "title": "Best Time Buy Sell Stock With Cooldown",
    "slug": "best-time-buy-sell-stock-with-cooldown-arrays-69",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max profit with cooldown of 1 day after each sell.",
    "input_format": "prices = [1, 2, 3, 0, 2]",
    "output_format": "max profit",
    "constraints": "1 <= prices.length <= 5000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "prices = [1,2,3,0,2]",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "prices = [1,2,3,0,2]",
    "starter_code": {
      "javascript": "function maxProfitCooldown(prices: number[]): number {\n  // your code here\n}\n",
      "python": "def maxProfitCooldown(prices: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxProfitCooldown(number[] prices) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxProfitCooldown(number[] prices) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1]",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30070",
    "title": "Best Time Buy Sell Stock With Fee",
    "slug": "best-time-buy-sell-stock-with-fee-arrays-70",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "DP",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max profit with transaction fee.",
    "input_format": "prices = [1, 3, 2, 8, 4, 9], fee = 2",
    "output_format": "max profit",
    "constraints": "1 <= prices.length <= 5*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "prices = [1,3,2,8,4,9], fee = 2",
        "output": "8",
        "explanation": ""
      }
    ],
    "sample_input": "prices = [1,3,2,8,4,9], fee = 2",
    "starter_code": {
      "javascript": "function maxProfitFee(prices: number[], fee: number): number {\n  // your code here\n}\n",
      "python": "def maxProfitFee(prices: number[], fee: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxProfitFee(number[] prices, number fee) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxProfitFee(number[] prices, number fee) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,3,7,5,10,3], 3",
        "expected_output": "6",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30071",
    "title": "Jump Game",
    "slug": "jump-game-arrays-71",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Greedy",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Can you reach the last index?",
    "input_format": "nums = [2, 3, 1, 1, 4]",
    "output_format": "true or false",
    "constraints": "1 <= nums.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [2,3,1,1,4]",
    "starter_code": {
      "javascript": "function canJump(nums: number[]): boolean {\n  // your code here\n}\n",
      "python": "def canJump(nums: number[]) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean canJump(number[] nums) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean canJump(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,2,1,0,4]",
        "expected_output": "false",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30072",
    "title": "Jump Game II",
    "slug": "jump-game-ii-arrays-72",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Greedy BFS",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Min number of jumps to reach last index.",
    "input_format": "nums = [2, 3, 1, 1, 4]",
    "output_format": "min jumps",
    "constraints": "1 <= nums.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [2,3,1,1,4]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [2,3,1,1,4]",
    "starter_code": {
      "javascript": "function jump(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def jump(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number jump(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number jump(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,3,0,1,4]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30073",
    "title": "Gas Station",
    "slug": "gas-station-arrays-73",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Greedy",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Starting gas station index to complete circuit, or -1.",
    "input_format": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
    "output_format": "start index",
    "constraints": "1 <= gas.length == cost.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "gas = [1,2,3,4,5], cost = [3,4,5,1,2]",
    "starter_code": {
      "javascript": "function canCompleteCircuit(gas: number[], cost: number[]): number {\n  // your code here\n}\n",
      "python": "def canCompleteCircuit(gas: number[], cost: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number canCompleteCircuit(number[] gas, number[] cost) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number canCompleteCircuit(number[] gas, number[] cost) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,3,4], [3,4,3]",
        "expected_output": "-1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30074",
    "title": "Candy Distribution",
    "slug": "candy-distribution-arrays-74",
    "difficulty": "Hard",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two-Pass",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Distribute candies so a child with higher rating has more candies.",
    "input_format": "ratings = [1, 0, 2]",
    "output_format": "min candies",
    "constraints": "1 <= ratings.length <= 2*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "ratings = [1,0,2]",
        "output": "5",
        "explanation": ""
      }
    ],
    "sample_input": "ratings = [1,0,2]",
    "starter_code": {
      "javascript": "function candy(ratings: number[]): number {\n  // your code here\n}\n",
      "python": "def candy(ratings: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number candy(number[] ratings) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number candy(number[] ratings) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,2]",
        "expected_output": "4",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30075",
    "title": "Trapping Rain Water",
    "slug": "trapping-rain-water-arrays-75",
    "difficulty": "Hard",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Compute water trapped between bars after raining.",
    "input_format": "height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]",
    "output_format": "trapped water",
    "constraints": "1 <= height.length <= 2*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        "output": "6",
        "explanation": ""
      }
    ],
    "sample_input": "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
    "starter_code": {
      "javascript": "function trap(height: number[]): number {\n  // your code here\n}\n",
      "python": "def trap(height: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number trap(number[] height) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number trap(number[] height) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[4,2,0,3,2,5]",
        "expected_output": "9",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30076",
    "title": "Spiral Matrix",
    "slug": "spiral-matrix-arrays-76",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Boundaries",
    "algorithm_type": "O(m*n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return elements in spiral order.",
    "input_format": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "spiral order",
    "constraints": "1 <= m, n <= 10",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,2,3,6,9,8,7,4,5]",
        "explanation": ""
      }
    ],
    "sample_input": "matrix = [[1,2,3],[4,5,6],[7,8,9]]",
    "starter_code": {
      "javascript": "function spiralOrder(matrix: number[][]): number[] {\n  // your code here\n}\n",
      "python": "def spiralOrder(matrix: number[][]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] spiralOrder(number[][] matrix) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] spiralOrder(number[][] matrix) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1],[2],[3]]",
        "expected_output": "[1,2,3]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30077",
    "title": "Set Matrix Zeroes",
    "slug": "set-matrix-zeroes-arrays-77",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "In-Place Marking",
    "algorithm_type": "O(m*n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "If an element is 0, set its entire row and column to 0s. In-place.",
    "input_format": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
    "output_format": "modified matrix",
    "constraints": "1 <= m, n <= 200",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
        "output": "[[1,0,1],[0,0,0],[1,0,1]]",
        "explanation": ""
      }
    ],
    "sample_input": "matrix = [[1,1,1],[1,0,1],[1,1,1]]",
    "starter_code": {
      "javascript": "function setZeroes(matrix: number[][]): void {\n  // your code here\n}\n",
      "python": "def setZeroes(matrix: number[][]) -> void:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public void setZeroes(number[][] matrix) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    void setZeroes(number[][] matrix) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[0,1,2,0]]",
        "expected_output": "[[0,0,0,0]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30078",
    "title": "Diagonal Traverse",
    "slug": "diagonal-traverse-arrays-78",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Simulation",
    "algorithm_type": "O(m*n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Diagonal traversal alternating direction.",
    "input_format": "mat = [[1,2,3],[4,5,6],[7,8,9]]",
    "output_format": "diagonal order",
    "constraints": "1 <= m, n <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "mat = [[1,2,3],[4,5,6],[7,8,9]]",
        "output": "[1,2,4,7,5,3,6,8,9]",
        "explanation": ""
      }
    ],
    "sample_input": "mat = [[1,2,3],[4,5,6],[7,8,9]]",
    "starter_code": {
      "javascript": "function findDiagonalOrder(mat: number[][]): number[] {\n  // your code here\n}\n",
      "python": "def findDiagonalOrder(mat: number[][]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] findDiagonalOrder(number[][] mat) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] findDiagonalOrder(number[][] mat) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,2],[3,4]]",
        "expected_output": "[1,2,3,4]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30079",
    "title": "Search a 2D Matrix",
    "slug": "search-a-2d-matrix-arrays-79",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Binary Search",
    "algorithm_type": "O(log mn)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Each row sorted, first of each row > last of previous.",
    "input_format": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
    "output_format": "true",
    "constraints": "1 <= m, n <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
        "output": "true",
        "explanation": ""
      }
    ],
    "sample_input": "matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3",
    "starter_code": {
      "javascript": "function searchMatrix(matrix: number[][], target: number): boolean {\n  // your code here\n}\n",
      "python": "def searchMatrix(matrix: number[][], target: number) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean searchMatrix(number[][] matrix, number target) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean searchMatrix(number[][] matrix, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13",
        "expected_output": "false",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30080",
    "title": "Search a 2D Matrix II",
    "slug": "search-a-2d-matrix-ii-arrays-80",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Search Space Reduction",
    "algorithm_type": "O(m+n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Each row and column sorted. Search target.",
    "input_format": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5",
    "output_format": "true",
    "constraints": "1 <= m, n <= 300",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20",
        "output": "false",
        "explanation": ""
      }
    ],
    "sample_input": "matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20",
    "starter_code": {
      "javascript": "function searchMatrixII(matrix: number[][], target: number): boolean {\n  // your code here\n}\n",
      "python": "def searchMatrixII(matrix: number[][], target: number) -> boolean:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public boolean searchMatrixII(number[][] matrix, number target) {\n        // your code here\n        return false;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    boolean searchMatrixII(number[][] matrix, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[-5]], -5",
        "expected_output": "true",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30081",
    "title": "Game of Life",
    "slug": "game-of-life-arrays-81",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "In-Place",
    "algorithm_type": "O(m*n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Conway's Game of Life next state, in-place using encoding.",
    "input_format": "board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
    "output_format": "next state",
    "constraints": "1 <= m, n <= 25\ncells are 0 or 1",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
        "output": "[[0,0,0],[1,0,1],[0,1,1],[0,1,0]]",
        "explanation": ""
      }
    ],
    "sample_input": "board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]",
    "starter_code": {
      "javascript": "function gameOfLife(board: number[][]): void {\n  // your code here\n}\n",
      "python": "def gameOfLife(board: number[][]) -> void:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public void gameOfLife(number[][] board) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    void gameOfLife(number[][] board) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[1,1],[1,0]]",
        "expected_output": "[[1,1],[1,1]]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30082",
    "title": "Number of Islands",
    "slug": "number-of-islands-arrays-82",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "BFS/DFS",
    "algorithm_type": "O(m*n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Count number of islands (connected 1s in 4 directions).",
    "input_format": "grid = [[\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\"],[\"0\",\"0\",\"1\"]]",
    "output_format": "count",
    "constraints": "1 <= m, n <= 300\ngrid[i][j] is 0 or 1",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
        "output": "1",
        "explanation": ""
      }
    ],
    "sample_input": "grid = [[\"1\",\"1\",\"1\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"1\",\"0\"],[\"1\",\"1\",\"0\",\"0\",\"0\"],[\"0\",\"0\",\"0\",\"0\",\"0\"]]",
    "starter_code": {
      "javascript": "function numIslands(grid: string[][]): number {\n  // your code here\n}\n",
      "python": "def numIslands(grid: string[][]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number numIslands(string[][] grid) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number numIslands(string[][] grid) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[[\"1\",\"0\"],[\"0\",\"1\"]]",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30083",
    "title": "Majority Element",
    "slug": "majority-element-arrays-83",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Boyer-Moore",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Element appearing more than n/2 times (always exists).",
    "input_format": "nums = [3, 2, 3]",
    "output_format": "majority",
    "constraints": "1 <= nums.length <= 5*10^4\nmajority exists",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [2,2,1,1,1,2,2]",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [2,2,1,1,1,2,2]",
    "starter_code": {
      "javascript": "function majorityElement(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def majorityElement(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number majorityElement(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number majorityElement(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
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
    "id": "30084",
    "title": "Majority Element II",
    "slug": "majority-element-ii-arrays-84",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Boyer-Moore variant",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Elements appearing more than n/3 times.",
    "input_format": "nums = [3, 2, 3]",
    "output_format": "majorities",
    "constraints": "1 <= nums.length <= 5*10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,1,1,3,3,2,2,2]",
        "output": "[1,2]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,1,1,3,3,2,2,2]",
    "starter_code": {
      "javascript": "function majorityElementII(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def majorityElementII(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] majorityElementII(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] majorityElementII(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3,4]",
        "expected_output": "[]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30085",
    "title": "Find Pivot Index",
    "slug": "find-pivot-index-arrays-85",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Prefix Sum",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Index where sum of left equals sum of right. Return leftmost.",
    "input_format": "nums = [1, 7, 3, 6, 5, 6]",
    "output_format": "pivot",
    "constraints": "1 <= nums.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,7,3,6,5,6]",
        "output": "3",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,7,3,6,5,6]",
    "starter_code": {
      "javascript": "function pivotIndex(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def pivotIndex(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number pivotIndex(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number pivotIndex(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,2,3]",
        "expected_output": "-1",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30086",
    "title": "Product of Array Except Self",
    "slug": "product-of-array-except-self-arrays-86",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Prefix + Suffix",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return array where ans[i] = product of all except nums[i]. No division.",
    "input_format": "nums = [1, 2, 3, 4]",
    "output_format": "product except self",
    "constraints": "2 <= nums.length <= 10^5\n-30 <= nums[i] <= 30",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,4]",
        "output": "[24,12,8,6]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3,4]",
    "starter_code": {
      "javascript": "function productExceptSelf(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def productExceptSelf(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] productExceptSelf(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] productExceptSelf(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[-1,1,0,-3,3]",
        "expected_output": "[0,0,9,0,0]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30087",
    "title": "Next Permutation",
    "slug": "next-permutation-arrays-87",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Modify nums in-place to next lexicographic permutation.",
    "input_format": "nums = [1, 2, 3]",
    "output_format": "next perm",
    "constraints": "1 <= nums.length <= 100\n0 <= nums[i] <= 100",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3]",
        "output": "[1,3,2]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,2,3]",
    "starter_code": {
      "javascript": "function nextPermutation(nums: number[]): void {\n  // your code here\n}\n",
      "python": "def nextPermutation(nums: number[]) -> void:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public void nextPermutation(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    void nextPermutation(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[3,2,1]",
        "expected_output": "[1,2,3]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30088",
    "title": "Maximum Difference",
    "slug": "maximum-difference-arrays-88",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Scan",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max value of arr[j] - arr[i] where j > i.",
    "input_format": "arr = [2, 3, 10, 6, 4, 8, 1]",
    "output_format": "max difference",
    "constraints": "1 <= arr.length <= 10^5",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "arr = [2,3,10,6,4,8,1]",
        "output": "8",
        "explanation": "10-2=8"
      }
    ],
    "sample_input": "arr = [2,3,10,6,4,8,1]",
    "starter_code": {
      "javascript": "function maximumDifference(arr: number[]): number {\n  // your code here\n}\n",
      "python": "def maximumDifference(arr: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maximumDifference(number[] arr) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maximumDifference(number[] arr) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[7,1,5,3,6,4]",
        "expected_output": "5",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30089",
    "title": "Maximum Subarray Min-Product",
    "slug": "maximum-subarray-min-product-arrays-89",
    "difficulty": "Hard",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Monotonic Stack",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max of (sum of subarray) * (min of subarray) over all subarrays.",
    "input_format": "nums = [1,2,3,2]",
    "output_format": "max min-product",
    "constraints": "1 <= nums.length <= 10^5\n1 <= nums[i] <= 10^7",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,2,3,2]",
        "output": "14",
        "explanation": "subarray [2,3,2], sum=7, min=2, product=14"
      }
    ],
    "sample_input": "nums = [1,2,3,2]",
    "starter_code": {
      "javascript": "function maxMinProduct(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def maxMinProduct(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxMinProduct(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxMinProduct(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[2,3,3,1,2]",
        "expected_output": "18",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30090",
    "title": "Sort Array by Squaring and Sorting",
    "slug": "sort-array-by-squaring-and-sorting-arrays-90",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Sort",
    "algorithm_type": "O(n log n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sort array by squaring, then sort.",
    "input_format": "nums = [-4, -1, 0, 3, 10]",
    "output_format": "sorted squares (sort method)",
    "constraints": "1 <= nums.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [-4,-1,0,3,10]",
        "output": "[0,1,9,16,100]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [-4,-1,0,3,10]",
    "starter_code": {
      "javascript": "function sortedSquares2(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortedSquares2(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortedSquares2(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortedSquares2(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[-7,-3,2,3,11]",
        "expected_output": "[4,9,9,49,121]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30091",
    "title": "Maximum XOR of Two Numbers",
    "slug": "maximum-xor-of-two-numbers-arrays-91",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Trie",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find max XOR of any two numbers in the array.",
    "input_format": "nums = [3, 10, 5, 25, 2, 8]",
    "output_format": "max xor",
    "constraints": "1 <= nums.length <= 2*10^5\n0 <= nums[i] <= 2^31 - 1",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [3,10,5,25,2,8]",
        "output": "28",
        "explanation": "5 XOR 25 = 28"
      }
    ],
    "sample_input": "nums = [3,10,5,25,2,8]",
    "starter_code": {
      "javascript": "function findMaximumXOR(nums: number[]): number {\n  // your code here\n}\n",
      "python": "def findMaximumXOR(nums: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number findMaximumXOR(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number findMaximumXOR(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[0]",
        "expected_output": "0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30092",
    "title": "Triplet Sum Close to Target",
    "slug": "triplet-sum-close-to-target-arrays-92",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n^2)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Sum of three integers closest to target.",
    "input_format": "nums = [-1, 2, 1, -4], target = 1",
    "output_format": "closest sum",
    "constraints": "3 <= nums.length <= 500",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [1,1,1,0], target = -100",
        "output": "2",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [1,1,1,0], target = -100",
    "starter_code": {
      "javascript": "function threeSumClosest2(nums: number[], target: number): number {\n  // your code here\n}\n",
      "python": "def threeSumClosest2(nums: number[], target: number) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number threeSumClosest2(number[] nums, number target) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number threeSumClosest2(number[] nums, number target) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,1,1,0], -100",
        "expected_output": "2",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30093",
    "title": "Squares of Sorted Array (alt)",
    "slug": "squares-of-sorted-array-alt-arrays-93",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "Two Pointers",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return squares sorted without using sort.",
    "input_format": "nums = [-4, -1, 0, 3, 10]",
    "output_format": "sorted squares",
    "constraints": "1 <= nums.length <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [-7,-3,2,3,11]",
        "output": "[4,9,9,49,121]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [-7,-3,2,3,11]",
    "starter_code": {
      "javascript": "function sortedSquares3(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def sortedSquares3(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] sortedSquares3(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] sortedSquares3(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
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
    "id": "30094",
    "title": "Find All Duplicates In Array",
    "slug": "find-all-duplicates-in-array-arrays-94",
    "difficulty": "Medium",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "HashMap",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Find all elements that appear twice using O(1) extra space.",
    "input_format": "nums = [4, 3, 2, 7, 8, 2, 3, 1]",
    "output_format": "duplicates",
    "constraints": "1 <= n <= 10^5\n1 <= nums[i] <= n",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "nums = [4,3,2,7,8,2,3,1]",
        "output": "[2,3]",
        "explanation": ""
      }
    ],
    "sample_input": "nums = [4,3,2,7,8,2,3,1]",
    "starter_code": {
      "javascript": "function findDuplicates(nums: number[]): number[] {\n  // your code here\n}\n",
      "python": "def findDuplicates(nums: number[]) -> number[]:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number[] findDuplicates(number[] nums) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number[] findDuplicates(number[] nums) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1,1,2]",
        "expected_output": "[1]",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30095",
    "title": "Maximum Average Subtree",
    "slug": "maximum-average-subtree-arrays-95",
    "difficulty": "Easy",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "DFS",
    "algorithm_type": "O(n)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Return max average value of any subtree (as a list/array representation).",
    "input_format": "root = [5,6,1]",
    "output_format": "max average",
    "constraints": "1 <= tree nodes <= 10^4",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "root = [5,6,1]",
        "output": "6.0",
        "explanation": "[6] avg = 6.0"
      }
    ],
    "sample_input": "root = [5,6,1]",
    "starter_code": {
      "javascript": "function maximumAverageSubtree(root: TreeNode | null): number {\n  // your code here\n}\n",
      "python": "def maximumAverageSubtree(root: TreeNode | null) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maximumAverageSubtree(TreeNode | null root) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maximumAverageSubtree(TreeNode | null root) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "[1], 1",
        "expected_output": "1.0",
        "is_hidden": false
      }
    ]
  },
  {
    "id": "30096",
    "title": "Maximum Profit With K Transactions",
    "slug": "maximum-profit-with-k-transactions-arrays-96",
    "difficulty": "Hard",
    "topic_id": "1",
    "topic_name": "Arrays",
    "pattern": "DP",
    "algorithm_type": "O(nk)",
    "visualization_type": "array",
    "enable_visualization": true,
    "problem_statement": "Max profit with at most k transactions.",
    "input_format": "k = 2, prices = [3,2,6,5,0,3]",
    "output_format": "max profit",
    "constraints": "0 <= k <= 100\n1 <= prices.length <= 1000",
    "companies": [
      "Google",
      "Amazon",
      "Microsoft",
      "Meta"
    ],
    "examples": [
      {
        "input": "k = 2, prices = [3,2,6,5,0,3]",
        "output": "7",
        "explanation": ""
      }
    ],
    "sample_input": "k = 2, prices = [3,2,6,5,0,3]",
    "starter_code": {
      "javascript": "function maxProfitK(k: number, prices: number[]): number {\n  // your code here\n}\n",
      "python": "def maxProfitK(k: number, prices: number[]) -> number:\n    # your code here\n    pass\n",
      "java": "class Solution {\n    public number maxProfitK(number k, number[] prices) {\n        // your code here\n        return null;\n    }\n}\n",
      "cpp": "class Solution {\npublic:\n    number maxProfitK(number k, number[] prices) {\n        // your code here\n        return ;\n    }\n};\n"
    },
    "test_cases": [
      {
        "id": "1",
        "input": "2, [3,2,6,5,0,3]",
        "expected_output": "7",
        "is_hidden": false
      }
    ]
  }
];

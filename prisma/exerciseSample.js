const exercises = [
    // {
    // name: "Validate Subsequence",
    // difficulty: 1,
    // category: "Easy",
    // isFree: false,
    // bigO: "O(n) time | O(1) space where n is the length of the array.",
    // description: "Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.  A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4]. Note that a single number in an array and the array itself are both valid subsequences of the array.",
    // hints: [
    // "You can solve this by iterating through the main input array once.",
    // "Iterate through the main array, and look for the first integer in the potential subsequence. If you find that integer, keep on iterating through the main array, but now look for a second integer in the potential subsequence. Continue this process until you either find every integer in the potential subsequence or you reach the end of the main array.",
    // "To actually implement what the Hint 2 describes, you’ll have to declare a variable holding your position in the potential subsequence. At first, this position will be the 0th in the sequence; as you find the sequence’s integers in the main array, you’ll increment the position variable until you reach the end of the sequence."
    // ],
    // functionName: "isValidateSubsequence",
    // paramNames: [
    // "array",
    // "sequence"
    // ],
    // input: "array  =  [5, 1, 22, 25, 6, -1, 8, 10]    sequence = [1, 6, -1, 10]",
    // output: null
    // },
    // {
    // name: "add",
    // difficulty: 1,
    // category: "algorithm",
    // isFree: true,
    // bigO: "linear",
    // description: "Add two numbers",
    // hints: [
    // "you need to add two numbers",
    // "numbers can be negative or positive"
    // ],
    // functionName: "add",
    // paramNames: [
    // "num1, num2"
    // ],
    // input: "[2,2]",
    // output: "4"
    // },
    {
    name: "divide",
    difficulty: 3,
    category: "algorithm",
    isFree: true,
    bigO: "linear",
    description: "divide two numbers",
    hints: [
    "you need to divide two numbers",
    "numbers can be negative or positive"
    ],
    functionName: "divide",
    paramNames: [
    "num1, num2"
    ],
    input: "[4,2]",
    output: "2"
    }
    ]

 module.exports = {exercises}
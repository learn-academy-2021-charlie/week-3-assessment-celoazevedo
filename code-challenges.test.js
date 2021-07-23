// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// // Jest Syntax
// // a describe method that lists the name of the function OR naming of the particular test.
// describe("hello", () => {

//     // a test method, nested within the describe block, that in plain words, describes that the function does.
//     test("returns a string that says hi", () => {
  
//       //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
//       expect(hello()).toEqual("hi")
//     })
//   })

// --------------------1) Create a function that takes in a number (greater than 2) and returns an array of that length containing the numbers of the Fibonacci.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("fibonacciSequence", () => {
    let num1 = 6
    let num2 = 10
    // a test method, nested within the describe block, that in plain words, describes what the function does.
    test("returns an array that has the with the length property value equals to the argument value passed in. The array contanis the value of the Fibonacce Sequence", () => {

      //an expect method, nested within the test block, calling on the fibonacciSequence() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(fibonacciSequence(num1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibonacciSequence(num2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]



// b) Create the function that makes the test pass.



// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]


// b) Create the function that makes the test pass.



// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []



// b) Create the function that makes the test pass.

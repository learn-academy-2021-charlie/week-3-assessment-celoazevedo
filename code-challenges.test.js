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
      console.log(fibonacciSequence(num1))
      expect(fibonacciSequence(num1)).toEqual([1, 1, 2, 3, 5, 8])
      expect(fibonacciSequence(num2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
  })

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// b) Create the function that makes the test pass.
// Okay! This is a complex one! At least it was for me... But I definetly saw the value of testing here! It is nice to have the expected result right in front of you so you can 'tweak' your code to get the expected result. I looked up the function online and refactored it to match our expected result. It was a practical process to refactor the function using the test workflow.
// here created a function called fibonacciSequence that takes in one argument (number). We declared two variable within the scope of the local scope of the function, fib that will be an array with the 2 starting values 0 and 1. finalArr is also an array where we have stored the starting (first) value of the fibonacci sequence which is always one. We used a forloop to perform some iteration starting on the second index (3rd element) of the fib[] array (which we at the moment do not have a value stored). Inside the loop we assigned to the 3rd element of the fib array fib[2] the value of the previous element fib[1] plus the value of the element at index 0 fib[0]. We than pushed the result of the addition to the finalArr. The iteration continued until the length of the finalArray was equal to the number passed in to the function. 

const fibonacciSequence = (num) => {
    let fib = [0, 1]
    let finalArr = [1]

    for(let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; 
        finalArr.push(fib[i]);
      }
    return finalArr
}

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("onlyOdds", () => {

    // a test method, nested within the describe block, that in plain words, describes that the function does.
    test("returns an array with only odd numbers as its elements", () => {
    let fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    let fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
      //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
      expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
    })
  })

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]


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

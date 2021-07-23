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
    //   console.log(fibonacciSequence(num1))
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
    test("returns an sorted array with only odd numbers as its elements", () => {
    let fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
    let fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
    //   console.log(onlyOdds(fullArr1))
      expect(onlyOdds(fullArr1)).toEqual([-9, 7, 9, 199])
      expect(onlyOdds(fullArr2)).toEqual([-823, 7, 23])
    })
  })

// var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// // Expected output: [-9, 7, 9, 199]

// var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// // Expected output: [-823, 7, 23]

// b) Create the function that makes the test pass.
// function will take in one argument as an array. 
// use the filter method to filter out the elements of type 'number' and that are not divisible by 2 (num % 2 !== 0).
// use the sort method -- we need to pass in a function as an argument to the .sort() method so that the method wont treat the elements as a string and end up sorting the numbers in a 'strange' order. We passed in the compare function function (a, b) {return a - b}. This will allow us to treat and compare all of the elements as numbers and to sort it properly.

const onlyOdds = (arr) => {
    return arr.filter(item => typeof item === 'number' && item % 2 !== 0).sort((a, b) => a - b)
}

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.
// a) Create a test with expect statements for each of the variables provided.

describe("accumSum", () => {
    test("returns an array with the acummulating sum adding each element to the previous", () => {
    let numbersToAdd1 = [2, 4, 45, 9]
    let numbersToAdd2 = [0, 7, -8, 12]
    let numbersToAdd3 = []
    // console.log(accumSum(numbersToAdd1))
    // console.log(accumSum(numbersToAdd2))
    // console.log(accumSum(numbersToAdd3))
      expect(accumSum(numbersToAdd1)).toEqual([2, 6, 51, 60])
      expect(accumSum(numbersToAdd2)).toEqual([0, 7, -1, 11])
      expect(onlyOdds(numbersToAdd3)).toEqual([])
    })
  })

// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []
// // Expected output: []

// b) Create the function that makes the test pass.
// this one was a doozie but with the help of Google we got the test to pass. We created a function that takes in one argument as an array. We declared an variable inside the function local scope (hope to be using this term the right way here...) and assigned it to an empty array. We used the reduce built in array method to iterated through the array. Reduce gives access to the current element value, the sum of the current element with the next element in the array, and the index position of the current element. What is cool here is that before moving to the next element, we are storing the sum of each consecutive element in the newArr variable. (... this is a bit of magic to me...) But we go out test working!
const accumSum = (arr) => {
    let newArr = []
    if (arr.length === 0) {
        return arr
    } else {
    arr.reduce((accum, current, index) => {return newArr[index] = accum + current}, 0)
     // console.log(newArr)
    return newArr
    }
}

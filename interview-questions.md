# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: this is a keyword in js that refers to the properties and methods that are part of the instance of the class (the object itself). Part of the specific object that is being created.

  Researched answer: the this keyword in javascript refers to the object that is executing the current bit of code. When executing a function in javascript, the function has a reference to the current execution context, using the this keyword.



2. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: yarn is a package manager much like npm is. When you run yarn in your application it will install all of the dependencies that you might need to develop. It will create a node modules folder where it will store all of the dependencies and it will also create a package.json file that will have all of the srcipts for the dependencies that are being listed for the app to use.

  Researched answer: in addition... yarn is able to guarantee that an install that worked on one system will work exactly the same on any other system -- just run the yarn command.



3. What are props in React?

  Your answer: Oh boy... props allow parent components to pass information to the child components. I am almost inclined to say that props allow the child components to access the properties available in the state object and the methods that are part of the parent component. EVERYTHING IS A PROP!

  Researched answer: props is a keyword in React! It allows you to pass information from one component to another. It gives us the ability to pass data down to 'pipe/stream' to nested components. Remember to declare a variable withing your component call and assign it the desired value. Now you can pass that information to the child component as props. 



4. What is JSX?

  Your answer: JSX is a templating language much like HTML but unlike HTML, it allows us to write javascript withing the elemement's tag. We use the curly braces to escape JSX and enter JS land.

  Researched answer: JSX is a syntax extension to JS. It is like a template language but it allow us to write javascript in it. In addition, JSX produces React 'elements' that are called components and it reanders them to the DOM.



5. What is a DOM event?

  Your answer: a DOM event is all of the information that we get upon some type of interation with the DOM. It could be from a click of the mouse, a click of a button or hoovering over an element. The event object gives us access to a (rediculous) number of objects with properties and methods, giving the developer the power to interact with the DOM and send and receive data.

  Researched answer: after researching I kind of like my answer. 



6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: an anonymous function is a function without a name (hehe!). In javascript we tipically use anonymous functions as callback functions.

  () => {}

  function (e) {
    console.log(e)
  }

  Researched answer: we can also assign an anonymous function to a variable so we can call it later. 
  let myFunction = function () {
    console.log('this is an anonymous function that is assigned to the variable myFunction')
  }
  myFunction();


## Looking Ahead: Terms for Next Week

1. Conditional rendering: in React we can use the conditional operators (if elseif or the ternatry operators) to decide what kind of state a specific element will be in (what values it's properties will have at a specific time) and React will render it if meets the condition.

2. Ruby: is a dynamic programing language. I think that by dinamic they mean that you can declare varibales and reassign them values as you please. Apparently Ruby has an elegant syntax and it is easy to read. I wonder if when they say easy they are just comparing it to JS.

3. Object oriented programming: OOP is a programing paradigm. It is a set of rules that programers agreed upon to keep the code clean, readable (you can easily find what you want in the code), scalable, and prevents major headaches if people need to make changes to the code.

4. Ruby hash: a collection of key value pairs. Hash is a lot like arrays but without the indexing to refer to each element. Instead, you refer to each element by its key. 

5. Ruby blocks: I think that this is like a code block. It envelops a chunck of code.

//Arrow functions were introduced in ES6.
//! Arrow functions in JavaScript have become popular due to their concise syntax and lexical scoping behavior.
//Arrow functions allow us to write shorter function syntax:


//anonymous functions
const x = function (a, b) {return a * b};

console.log(x);

let res = x(3, 3);
console.log(res);



// refactor the above code using arrow function. 
const y = (a, b) => {return a * b;}

console.log(y(10, 2));


// A function that does not require parameters will even get shorter.
hello = function() {
    return "Hello World!";
  }


hello = () => {return "Hello World!"}


// With one argument

const p = function addOne(a) {
  return a += 1;
  }


//with arrow function
const p1 = (a) => a +=1;
console.log(p1(1));

// we can remove the ONLY argument with arrow functions.

const p2 = a => a +=1;
console.log(p2(1));
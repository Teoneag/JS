//*! WHY FUNCTIONS?

// ** As we saw previously, functions are a great way to reuse an existing code as often as we want. 


//*? Let's define our own functions:
// Let's try to write a function that calculates the area of a circle based on the radius. 
function area(radius) {
    return Math.PI * Math.pow(radius, 2);
  }

console.log( area(7) );


// we can also use function in an expression:
let res = 10 + area (7);
console.log(res);

// TIME TO PRACTICE

//*! Write a function that adds two numbers and returns the result
function add (a, b) {
   // write here
}

console.log (add(10, 10))

//*! write a function that returns if the number is even or odd. 

function even_or_odd(number) {
  //write here
}
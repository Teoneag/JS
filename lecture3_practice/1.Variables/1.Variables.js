
// ** Install the "Code Runner" extension to run the Javascript code directly in the Output Window.
//** After you install the "Code Runner" extension, select any statement, right click and hit "Run code" */  


// What are Variables?
// Variables are containers for storing data (storing data values).

/* JavaScript Variables can be declared in 4 ways:

1. Automatically
2. Using var
3. Using let
4. Using const

### IMPORTANT TIP ###

In modern JavaScript, it is generally recommended to use `let` and `const` over `var` due to their more 
predictable scoping behavior and the ability to catch certain types of errors at compile time. 
Use `let` for variables that may be reassigned, and use `const` for variables that should remain constant throughout their lifecycle.

*/

// The var keyword is used in all JavaScript code from 1995 to 2015.
var x; // variable has been declared but has not yet been assigned a value.
console.log(x);

x = 5;
console.log(x);
var y = 6;

// The let and const keywords were added to JavaScript in 2015.
let x = 5;
let y = 6;

// Variables defined with let cannot be redeclared.
let x = "John Doe";
console.log(x);
let x = 0;
console.log(x);

// SyntaxError: 'x' has already been declared

// using const, we can define constant variables in javascript
const price1 = 5;
const price2 = 6;

// Variables defined with const cannot be Redeclared and Reassigned.
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error
console.log(PI);

// Some rules for defining variable names:
// 1. Names are case sensitive (y and Y are different variables).
// 2. Names must begin with a letter.
// 3. Names can contain letters, digits, underscores, and dollar signs.

// let 1name1; //invalid variable name


let v = null; // null is an assignment value. It can be assigned to a variable as a representation of no value
// -------------------------------------
// DATA TYPES
//--------------------------------------

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// can be written with single quotes.
let car_name = 'Volvo XC60';

// Booleans
let x = true;
let y = false;

// JavaScript evaluates expressions from left to right. 
let x = 16 + 4 + "Volvo";
console.log(x); // check the value of x. 
console.log(typeof x); // check the type of x as a result of the expression on Ln 66.

// Example 2:
let x = "Volvo" + 16;
console.log(x); 
console.log(typeof x); // check the type of x as a result of the expression on Ln 71.


//JavaScript Types are Dynamic
let x;       // x is undefined
x = 5;       // Now x is a Number
console.log(typeof x);
x = "John";  // Now x is a String
console.log(typeof x);




 
//Defining arrays

let empty = []; // An array with no elements
let primes = [2, 3, 5, 7, 11]; // An array with 5 numeric elements
let misc = [1.1, true, "a"]; // 3 elements of various types + trailing comma

//for/of loop
for (let num of primes) {
  console.log(num);
}

//*!The spread operator
let a = [1, 2, 3];
let b1 = [...a];
let b2 = [0, ...a, 4]; // b == [0, 1, 2, 3, 4]

// The following two statements will not affect array a.
b1.push(10);
b2.push(20);

//spread operator turns any string into an array of single-character strings
let digits = [..."0123456789ABCDEF"];

// Adding and Deleting Array Elements
let letters = [];
//add the values at the end of existing array elements.
letters.push("one", "two", "three", "four");
letters.pop(); //removes the last element.
letters.unshift("zero"); //inserts a new element at the start.
letters.shift(); //removes the first element.

//deleting elements
let a1 = [1, 2, 3];
delete a1[2]; // a now has no element at index 2

//Array Iterator Methods
//*! forEach
//using arrow notation
let text2 = "";
const fruits2 = ["apple", "orange", "cherry"];
fruits2.forEach((item, index) => {
  text2 += index + ": " + item;
});

console.log(text);

//map() => creates a new array from calling a function for every array element.
let p = [1, 2, 3];
p.map(x => x*x);   // => [1, 4, 9]

//reduce() => executes a reducer function for array element.
//summing up all
const numbers = [175, 50, 25];

numbers.reduce((accumulator, currentValue) => accumulator + currentValue);


//filter() => creates a new array filled with elements 
//that pass a test provided by a function.
const ages = [32, 33, 16, 40];
const result = ages.filter(age => age >= 18);




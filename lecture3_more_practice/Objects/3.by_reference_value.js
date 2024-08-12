
/*
When passing them to functions or modifying them, a new copy
is made of the data, which occupies a different location in memory.
*/

let a = 10;
let b = a;

// assigning a value to another variable just creates a new variable.

let s = "hello";   // Start with some lowercase text
s.toUpperCase();   // Returns "HELLO", but doesn't alter s


let point1 = { x: 0, y: 0 }; 

let point2 = point1;

point2.x = 10;

console.log(point1);
console.log(point2);






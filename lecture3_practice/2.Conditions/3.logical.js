// Logical operators are used to determine the logic between variables or values.

let x = 6;
let y = 3;

// AND operator
console.log( (x < 10 && y > 1) ); //true


//OR operator
console.log( (x == 5 || y == 5) ); //false

//NOT operator
console.log( !(x == y) ); //true


// Ternary Operator: JavaScript also contains a conditional 
// operator that assigns a value to a variable based on some condition.

// variablename = (condition) ? value1:value2 

const age=20; 
const voteable = (age < 18) ? "Too young":"Old enough";
console.log(voteable); // Old enough





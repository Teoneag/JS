// Number()	Returns a number, converted from its argument
// parseFloat()	Parses a string and returns a floating point number
// parseInt()	Parses a string and returns an integer

let result;

// string to number
result = Number('324');
console.log(result); // 324
console.log(typeof result);

result = Number('324e-1')  
console.log(result); // 32.4

// boolean to number
result = Number(true);
console.log(result); // 1

result = Number(false);
console.log(result); // 0


//In JavaScript, empty strings and null values return 0. For example,


result = Number(null);
console.log(result);  // 0

result = Number(' ')
console.log(result);  // 0

// If a string is an invalid number, the result will be NaN. For example,


result = Number('hello');
console.log(result); // NaN

result = Number(undefined);
console.log(result); // NaN

result = Number(NaN);
console.log(result); // NaN

// You can also generate numbers from strings using parseInt(), parseFloat()

result = parseInt('20.01');
console.log(result); // 20

result = parseFloat('20.01');
console.log(result); // 20.01


// For more examples, visit this link: https://www.programiz.com/javascript/type-conversion

// Comparison operators are used in logical statements to determine 
//equality or difference between variables or values.

let x = 5;

x == 8; // false
console.log(x);

x == 5 // true

x == "5"; // true. why?

// Double equals (==) will perform a type conversion when comparing two things

// Triple equals (===) will do the same comparison as double equals
// but without type conversion; if the types differ, false is returned.

x === "5"; // false
x === 5; // true


x != 8 //not equal => true

//*!in === a condition can be true based "not equal value" OR "not equal type"
x !== 5 // false (becuase NOT EQUAL VALUE is true)
x !== 8 // true (becuase NOT EQUAL VALUE is true)
x !== "5" // true (because NOT EQUAL TYPE is true)

x > 8 //false
x < 8	//true

x >= 8 // false
x <= 8 // true


/////// Comparing Different Types////////////
// 1. String will be converted to a number
// 2. An empty string will convert to 0.
// 3. A non-numeric string converts to NaN

console.log(2 < "12"); //true.
console.log(2 == "John"); //false.
console.log("2" > "12");
console.log("90" > "100");
console.log("90" > "");
console.log("90" > "ujwal");











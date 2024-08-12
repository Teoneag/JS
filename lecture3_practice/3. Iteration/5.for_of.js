// The JavaScript for of statement loops through the values of an iterable object.
// Objects are variables too. But objects can contain many values.


const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x;
}

console.log(text);


//We can also loop over a string
let language = "JavaScript";

let text1 = "";
for (let x of language) {
text1 += x;
console.log("x: "+ x + " text1: " + text1);
}

console.log(text1);
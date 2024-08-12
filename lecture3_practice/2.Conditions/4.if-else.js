// Conditional Statements

// Very often when you write code, you want to perform different actions for different decisions.
// See the flowchart in Readme file.

let score = 80;

if (score == 80) {
   console.log("You have been promoted!");
}

//----------------------------------------------
// Using else
//See the flowchart in Readme file.

let age = 16;
let message;

if (age < 18) {
    message = "Too young to vote";
  }
else {
    message = "Old enough to vote";
}
console.log(message);
//-----------------------------------------------

// The if-else Statement
//See the flowchart in Readme file.
const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "Good morning";
} else if (time < 20) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

//-----------------------------------------------





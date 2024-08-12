//Use the switch statement to select one of many code blocks to be executed.

// switch(expression) {
//     case n:
//       code block
//       break;
//     case n:
//       code block
//       break;
//     default:
//       default code block
//   }

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";

  default:
    day = "Looking forward to the Weekend";
}

console.log("Today is " + day);
console.log(new Date().getDay()); 

//new Date().getDay()
// An integer number, between 0 and 6, corresponding to the day of the week for the given date,
// according to local time: 0 for Sunday, 1 for Monday, 2 for Tuesday, and so on.


/// ----------- ACTIVITY --------------////
// Try to write a program that inputs a number from a user from 0-5 and then 
// print the number in English (if the user enters 2, it should print two).
// Use the switch command.




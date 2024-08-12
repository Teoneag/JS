// ** TIP: Install "Better Comments" extension to see different colors in the comments. 
// Before creating our own functions, let's use some built-in functions.

// *? Do you remember the STRING data type in JavaScript?
let my_name  = "Ujwal Gadiraju";


// ** slice() extracts a part of a string and returns the extracted part in a new string.
my_sliced_name = my_name.slice(0,5);

console.log(my_sliced_name.slice(0,5));


//** The replace() method replaces a specified value with another value in a string
text = "Please visit the Microsoft office in Hyderabad!";
let newtext = text.replace("Microsoft", "Google");
console.log(text , "\n"+ newtext);

//Other useful string functions

//Get the first character in a string:
//--------------------------
text = "HELLO WORLD";
let letter = text.charAt(0);
//---------------------------

//joins two or more strings.
//--------------------------
let text1 = "sea";
let text2 = "food";
let result = text1.concat(text2);
//---------------------------

//It returns the index (position) of the first match.
//--------------------------
text = "Mr. Blue has a blue house"
let position = text.search("Blue");
//---------------------------

//The split() method splits a string into an array of substrings.
//--------------------------
text = "How are you doing today?";
const myArray = text.split(" ");
//---------------------------

//The Trim() method splits a string into an array of substrings.
//--------------------------
let text = "       Hello World!        ";
result = text.trim();
//---------------------------


// Another hndy function when it comes to numbers is the pow()
//** The Math.pow() method returns the value of x to the power of y.

let f = Math.pow(2, 4);
console.log(f);



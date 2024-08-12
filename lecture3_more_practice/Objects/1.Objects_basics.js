
//Create an object.

let empty = {};                          // An object with no properties

let point = { x: 0, y: 0 };              // Two numeric properties

let p2 = { x: point.x, y: point.y+1 };   // More complex values

let book = {
    "main title": "JavaScript",          // These property names include spaces,
    "sub-title": "The Definitive Guide", // and hyphens, so use string literals.
    for: "all audiences",                // for is reserved, but no quotes.
    author: {                            // The value of this property is
        firstname: "David",              // itself an object.
        surname: "Flanagan"
    }
}


// Querying and Setting Properties
let author = book.author;       // Get the "author" property of the book.
let name = author.surname;      // Get the "surname" property of the author.
let title = book["main title"]; // Get the "main title" property of the book.


book.edition = 7;                   // Create an "edition" property of book.
book["main title"] = "ECMAScript";  // Change the "main title" property.

console.table(book);


//Objects as associative arrays
//They can be indexed by strings
book['title'];
book.title;

book.for;
book['for']

//Objects can have methods
const person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      console.log(this);
      console.log(this.firstName + " " + this.lastName);
    }
  };

  person.fullName();











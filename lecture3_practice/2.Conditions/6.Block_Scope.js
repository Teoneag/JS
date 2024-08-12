/* 
Variables declared with `let` and `const` are block-scoped in JavaScript.
This means they are only accessible within the block (e.g., within curly braces {}) in which they are defined. 
This is more intuitive and helps prevent certain types of bugs related to variable scope.
Variables declared inside a { } block cannot be accessed from outside the block:
*/

var x = 15;
var y = 25;
if (10 < 11) {
    let x = 10;
    const y = 20;
    console.log("Inside the scope (x,y) are:" + x,y); 
}
console.log("Outside the scope (x,y) are:" + x,y); 


//variables defined with `var` can be accessed outside the function. 
if (10 < 11) {
    var x = 10;
    var y = 20;
}

console.log("x is "+x+ " and y is "+ y); 

/*
Variables declared with `var` and `let` can be reassigned to new values.
Variables declared with const cannot be reassigned. They are constants. 
However, it's important to note that for objects and arrays declared with const, 
the binding (reference) to the object or array is constant, 
but the properties or elements of the object or array can still be modified.
*/
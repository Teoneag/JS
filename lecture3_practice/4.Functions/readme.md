# Functions

Functions are the basic building blocks when it comes to writing JavaScript programs. A function is one or more statements that can optionally receive data input and provide data output. The statements in a function are not used until the function is invoked. Invoking a function is also known as calling the function.


```js
function name(optional parameter list) 
{
   //Statements
   //Optional return statement
}
```

We can declare the function as follows:

```js
function getDiceRollValue(){

  return Math.floor(Math.random() * 6) + 1;

}
```

This function can be called as:

```js
var rollValue = getDiceRollValue()
```



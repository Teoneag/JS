# What is JSX?
- JSX stands for JavaScript XML.
- JSX allows us to write HTML in React.
- JSX makes it easier to write and add HTML in React.

Here is an example of JSX (check it out in the `index.js` file):

```
const myElement = <h1>I've enjoyed CSE1500!</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);
```

As you can see in the example above, JSX allows us to write HTML directly within the JavaScript code. JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

## Expressions in JSX
- With JSX you can write expressions inside curly braces { }.
- The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

```
const myElement = <h1>React is {1 + 1} times better with JSX!</h1>;
```
## Conditions - `if` statements

- React supports if statements, but not inside JSX.
- To be able to use conditional statements in JSX, you should put the `if` statements outside of the JSX, or you could use a ternary expression instead. 

Example 1: Writng `if` statements outside of the JSX code.
```
const x = 5;
let text = "Hello to the DB segment of CSE1500!";
if (x < 10) {
  text = "Hello to the Web segment of CSE1500!";
}

const myElement = <h1>{text}</h1>;
```
Example 2: Using ternary expressions instead.
```
const x = 5;

const myElement = <h1>{(x) < 10 ? "Hello to the DB segment of CSE1500!" : "Hello to the Web segment of CSE1500!"}</h1>;
```

---

> This tutorial is based on w3schools.com and react.dev. Happy learning! :) 
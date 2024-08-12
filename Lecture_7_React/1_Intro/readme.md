# Getting Started with React

- `Create React App` is an environment for learning React, and is the best way to start building a new single-page application in React. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production.

- If you have `npx` and `Node.js` installed, you can create a React application by using `create-react-app`.

- Run this command to create a React application named my-react-app: ```npx create-react-app my-react-app```

- The `create-react-app` will set up everything you need to run a React application.

- Inside the `my-react-app` directory, you can run several commands:

  `npm start`: Starts the development server.

  `npm run build`: Bundles the app into static files for production.

  `npm test`: Starts the test runner.

  `npm run eject`: Removes this tool and copies build dependencies, configuration files and scripts into the app directory. If you do this, you can’t go back!

You can begin by typing:

  - `cd my-react-app`
  - `npm start`

A new browser window will pop up with your newly created React App (else, fire away `localhost:3000` in your browser)!

---
The LIVE Classroom Lecture will begin here!
---

> If this still does not work, in `package.json` change ```"start": "react-scripts start"``` to ```"start": "NODE_ENV=production node_modules/react-scripts/bin/react-scripts.js start"```.
---
## Exercise 1

1. Try changing the HTML content and save the file. Notice that the changes are visible immediately after you save the file, you do not have to reload the browser!

2. Replace all the content inside the `<div className="App">` with a `<h1>` element. See the changes in the browser when you Save. Use the example below: 

```
function App() {
  return (
    <div className="App">
      <h1>Hello CSE1500; Class of 2024!</h1>
    </div>
  );
}
export default App;
```

3. To follow along from here, let's go back to the drawing board and strip the code in the `index.js` file. 

# Rendering HTML using React

React renders HTML to the web page by using a function called `createRoot()` and its method `render()`.

## `createRoot()`

- The `createRoot()` function takes one argument (an HTML element).

- The purpose of the `createRoot()` function is to define the HTML element where a React component should be displayed.

## `render()`

- The `render()` method is then called to define the React component that should be rendered.

---

## Exercise 2

1. Create a variable that contains HTML code and display it in the `"root"` node.

---

> This tutorial is based on w3schools.com and react.dev. Happy learning! :) 

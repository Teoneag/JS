# Styling React with CSS

There are three common ways to style React with CSS:

1. Inline styling
2. CSS stylesheets
3. CSS Modules

## Inline Styling

To style an element with the inline style attribute, the value must be a JavaScript object:

```
const Header = () => {
  return (
    <>
      <h1 style={{color: "blue"}}>Hello Style!</h1>
      <p>Add a little style!</p>
    </>
  );
}
```
> Note: In JSX, JavaScript expressions are written inside curly braces, and since JavaScript objects also use curly braces, the styling in the example above is written inside two sets of curly braces {{}}.

## CSS Stylesheets

You can write your CSS styling in a separate file, just save the file with the `.css` file extension, and **import** it in your application. 

For example, examine the `App.css` file and the `App.js` files inside the `src` directory of the `lecture_7_react/my-react-app` folder.

## CSS Modules

CSS Modules are convenient for components that are placed in separate files.

The CSS inside a module is available only for the component that imported it, and we do not have to worry about name conflicts.
# React Components

- Components are like functions that return HTML elements.
- Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Here is an example of a function component called Cricket:
```
function Cricket() {
  return <h2>I am a soon-to-be Olympic sport!</h2>;
}
```

Now your React application has a component called Cricket, which returns an `<h2>` element. To use this component in your application, use similar syntax as normal HTML: `<Cricket />`
```
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cricket />);
```
## Nested Components

Here is an example of using nested components in React: 

```
function Cricket() {
  return <h2>I am a soon-to-be Olympic sport!</h2>;
}

function UpcomingOlympicSports() {
  return (
    <>
      <h1>Will the real new Olympic sports please stand up?</h1>
      <Cricket />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UpcomingOlympicSports />);
```
---
React is all about re-using code, and it is recommended to split your components into separate files. 

To do that, create new files with a `.js` file extension and put the code related to each component you may want to reuse inside them respectively. Note that the filename must start with an uppercase character. 

Remember to export the components in the `.js` files where you created them and import them into the `.js` files where you would like to use them. For example,
- ```export default Cricket;``` to export the component created
- ```import ./Cricket.js``` to import the component and use it


# React Lists

In React, we will render lists with some type of loop. The JavaScript `map()` array method is generally the preferred method.
- The `.map()` method allows you to run a function on each item in the array, returning a new array as the result.
- In React, `map()` can be used to generate lists.

See the example below: 
```
import React from 'react';
import ReactDOM from 'react-dom/client';

const myArray = ['apple', 'banana', 'orange'];

const myList = myArray.map((item) => <p>{item}</p>)

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(myList);
```

## Keys

Keys allow React to keep track of elements. This way, if an item is updated or removed, only that item will be re-rendered instead of the entire list.

- Keys need to be unique to each sibling. But they can be duplicated globally.
- Generally, the key should be a unique ID assigned to each item.

See example in the `index.js` file.
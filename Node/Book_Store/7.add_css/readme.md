In an Express.js application, you can serve static CSS files using the built-in middleware function express.static(). You would typically use this function in the application's main file (e.g. app.js) to specify a directory that contains your CSS files. For example:

```js
const express = require('express');
const app = express();

app.use(express.static('public'));
```


In this example, the express.static() function is used to serve files from a directory named public. So you should put your css files in the `public directory`, and then you can include those CSS files in your HTML templates like this:

```js
<link rel="stylesheet" type="text/css" href="/styles.css">
```


<b>Note that the path of the css file is relative to the "public" directory. </b>




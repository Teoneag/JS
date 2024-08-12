# serving static files

res.sendFile is a method in the Express.js framework that allows you to send a file as the response to an HTTP request. To use it, you will need to first import the path module, which is a built-in Node.js module that provides functionality for working with file and directory paths.

Here is an example of how to use res.sendFile in an Express.js application:

```js
const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

```

In this example, when a GET request is made to the root route ('/'), the server will send the 'index.html' file located in the same directory as the server file. The path.join(__dirname, 'index.html') is used to construct the file path.

You can also send an error as a callback function in the second argument of res.sendFile for handling the error when the file is not found.


```js
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'),(err)=>{
        if (err) {
          res.status(404).send(err);
        }
    });
});
```

Make sure the file exists and the path provided is correct.




# Express Router
1. The `Express.js router` is a middleware component that helps to handle routing in a Node.js Express.js application. 

2. It allows you to define routes and map them to specific functions that will handle incoming HTTP requests. 

3. The router can be used to handle different HTTP methods (GET, POST, PUT, DELETE, etc.) and URL patterns, and it can also be used to handle multiple routes for the same URL pattern but with different HTTP methods. 

4. This helps to keep your code organized and makes it easy to add, modify, or remove routes as needed.


Example: 

```js
const express = require('express');
const router = express.Router();

// define a route for the home page
router.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// define a route for a contact page
router.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});

// define a route for handling form submissions
router.post('/submit-form', (req, res) => {
  // process form data here
  res.send('Thank you for your submission!');
});

// use the router in the Express.js app
const app = express();
app.use('/', router);

// start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});

```


## Mapping steps:
1. Add a new folder and name it `routes` (this is a common name, but you can name it however you want).
2. Add .js files to handle routes to serve different types of users. For now, we can create `admin.js` and `user.js`. 
3. At the start of both files, add the following two imports:

```js
const express = require('express');
const router = express.Router();
```
4. Now move all the routers from `express_app.js` file (or main file) to router files (admin and user files). Replace the word `app` with `router`. Also, export this file using `module.exports = router;`
5. In the `express_app.js,` import these two router files.

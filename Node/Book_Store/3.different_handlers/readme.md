# get and post methods
`app.get()` and `app.post()` are methods provided by the Express.js framework to handle HTTP GET and POST requests, respectively.

`app.get()` is used to handle GET requests. The first argument to the method is the URL path that the route should handle, and the second argument is the callback function that will be executed when a GET request is made to that path. 

The callback function takes two arguments: a request object (req) and a response object (res). Here's an example of how to use app.get() to handle a GET request to the root URL of a server:

```js
app.get('/', function(req, res) {
  res.send('Hello, world!');
});
```

`app.post()` is used to handle POST requests. The method accept similar arguments as app.get(). Here's an example of how to use app.post() to handle a POST request to the root URL of a server:

```js
app.post('/', function(req, res) {
  res.send('POST request received!');
});
```

# Body-parser

body-parser is used to parse incoming request bodies, making them available on the req.body property of the request object. It can parse the request body in various formats, such as JSON, URL-encoded data, or raw data.


```app.use(bodyParser.urlencoded({extended: false}))``` is adding middleware to an Express.js application that parses the body of incoming requests with the Content-Type of "application/x-www-form-urlencoded". This is the format in which data is sent in a HTTP request when a HTML form is submitted using the "post" method.

The bodyParser.urlencoded() method returns a middleware function that can parse this format of request body. The object passed as an argument to the method configures the behavior of the middleware. In this case, it sets the extended option to false.

When extended is set to false, the middleware uses the querystring library to parse the request body. This means that it will only support simple data structures.

When extended is set to true, the middleware uses the qs library to parse the request body. This allows for more complex data structures, such as arrays and nested objects.







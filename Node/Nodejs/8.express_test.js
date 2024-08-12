//Basic Express App

const express = require('express')

const app = express()

const port = process.env.PORT || 3000

// Express application uses a callback function whose parameters are request and response objects.
//? Request Object − The request object represents the HTTP request and has properties for the request query string, parameters, body, HTTP headers, and so on.
//? Response Object − The response object represents the HTTP response that an Express app sends when it gets an HTTP request.

app.get('/', (req, res) => {
  res.type('text/plain')        // replace res.writeHead
  res.send('Meadowlark Travel') // replace res.end()
})

app.get('/about', (req, res) => {
  res.type('text/plain')
  res.send('About Meadowlark Travel')
})

// custom 404 page
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})

//alternative way of writing app.use
// app.use((req, res) => {
//     res.status(404).send("The page you are looking for could not be found.");
// });

// app.use((req, res, next) => {
//     const error = new Error('Not found');
//     error.status = 404;
//     next(error);
// });


// custom 500 page
app.use((err, req, res, next) => {
  console.error(err.message)
  res.type('text/plain')
  res.status(500)
  res.send('500 - Server Error')
})

//alternative way of using app.use
// app.use((error, req, res, next) => {
//     res.status(error.status || 500);
//     res.json({
//         error: {
//             message: error.message
//         }
//     });
// });


app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` + '\n' +
  `Press Ctrl-C to terminate ...`))
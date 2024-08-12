// Middleware in Express is a function that is executed between the client's request 
//and the server's response. It can be used to perform various tasks, such as logging, 
//authentication, or data validation.

const express = require('express');

const app = express();

//! Here's a simple example

app.use(function(req, res, next) {
  console.log("I am the first middleware!");
  next();
});

app.use(function(req, res, next) {
  console.log("I am the second middleware!");
  //next();
});

app.get('/', function(req, res) {
  res.send('Hello, world!');
});


//! Here's a more complex example:

// app.use((req, res, next) => { 
// 	console.log('\n\nALWAYS')
// 	next() 
// })

// app.get('/a', (req, res) => { 
// 	console.log('/a: route terminated')
// 	res.send('a')
// })
// app.get('/a', (req, res) => { 
// 	console.log('/a: never called');
// })
// app.get('/b', (req, res, next) => { 
// 	console.log('/b: route not terminated')
// 	next()
// })
// app.use((req, res, next) => {
// 	console.log('SOMETIMES')
// 	next()
// })
// app.get('/b', (req, res, next) => {
// 	console.log('/b (part 2): error thrown' )
// 	throw new Error('b failed')
// })
// app.use('/b', (err, req, res, next) => {
// 	console.log('/b error detected and passed on')
// 	next(err)
// })
// app.get('/c', (err, req) => {
// 	console.log('/c: error thrown')
// 	throw new Error('c failed')
// })
// app.use('/c', (err, req, res, next) => {
// 	console.log('/c: error detected but not passed on')
// 	next()
// })

// app.use((err, req, res, next) => {
// 	console.log('unhandled error detected: ' + err.message)
// 	res.send('500 - server error')
// })

// app.use((req, res) => {
// 	console.log('route not handled')
// 	res.send('404 - not found')
// })


app.listen(8080);

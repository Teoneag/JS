// === A Node.js application consists of the following three important components −
//! 1. Import required modules − We use the `require` directive to load Node.js modules.
//! 2. Create server − A server which will listen to client's requests.
//! 3. Read request and return response − The server created in an earlier step will read the HTTP request 
//! made by the client which can be a browser or a console and return the response. 
// ===

//? Step 1: Import required module

// We use the `require` directive to load the http module and store the returned HTTP instance into an http variable as follows
const http = require('http');
const port = process.env.PORT || 3000;

//? Step 2: Create server

// We use the created http instance and call http.createServer() method to create a server instance. 
// Next we bind it at port 3000 using the listen method associated with the server instance. 
// Pass it a function with parameters request and response. 
// Write the sample implementation to always return "Hello World".


const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' }) //Send the HTTP header; HTTP Status: 200 : OK; Content Type: text/plain
  res.end('Hello world!') //Send the response body as "Hello World" 
});

server.listen(port, () => console.log(`Server started on http://127.0.0.1:${port};` +'\n'+
  'Press Ctrl-C to terminate....'));

//? Step 3: Execute the file to start the server  

// Make a Request to the Node.js Server in a browser => http://127.0.0.1:3000

//! See https://github.com/nodejs/examples for a list of Node.js examples that go beyond hello world.


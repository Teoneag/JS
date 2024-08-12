// So far in this lecture, we have seen a basic `Node.js` application which serves HTTP request for the homepage. 
// Routing refers to determining how an application responds to a client request to a particular endpoint, 
// which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

const http = require('http')
const port = process.env.PORT || 3000

const server = http.createServer((req,res) => {

const path = req.url;
console.log(path);
  switch(path) {
    case '/':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('Homepage')
      break
    case '/about':
      res.writeHead(200, { 'Content-Type': 'text/plain' })
      res.end('About')
      break
    default:
      res.writeHead(404, { 'Content-Type': 'text/plain' })
      res.end('Not Found')
      break
  } })

server.listen(port, () => console.log(`Server started on port http://127.0.0.1:${port}; ` +'\n'+
  'Press Ctrl-C to terminate....'))
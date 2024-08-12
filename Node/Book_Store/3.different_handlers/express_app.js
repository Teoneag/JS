const express = require('express');
//first install 'body-parser'
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/add-book', (req, res, next) => {
  res.send('<form action="/book" method="POST"><input type="text" name="title"><button type="submit">Add Book</button></form>');
});

app.post('/book', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Your book was added to the store!</h1>');
});

app.listen(8080);

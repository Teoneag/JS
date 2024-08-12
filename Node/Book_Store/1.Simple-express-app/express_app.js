const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('<h1>Homepag</h1>');
});

app.get('/about', (req, res, next) => {
  res.send('<h1>About</h1>');
});

app.use('/', (req, res, next) => {
  res.send('<h1>Not found</h1>');
});


app.listen(8080);

const express = require('express');
const router = express.Router();
const path = require('path');

const book = [];


router.get('/add-book', (req, res, next) => {
  res.render('add-book');
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-book.html'));
});
  
  router.post('/add-book', (req, res, next) => {
    book.push({ title: req.body.title });
    // console.log(book);
    // res.render('add-book', {data: book});
    // res.render('home', {data: book});
    // console.log(book);
    res.redirect('/');
  });


  exports.routes = router;
  exports.book = book;
  // module.exports = book;
  // module.exports = book;
const express = require('express');

const router = express.Router();

const adminData = require('./admin');
// console.log(book);


router.get('/', (req, res, next) => {
  // const book_data = adminData.book;
  console.log(adminData.book);
  // console.log(book_data);
  res.render('home', {data: adminData.book})
  // res.send('<h1>Hello there!</h1> <p>Here you will see list of books! </p>');
});

module.exports = router;
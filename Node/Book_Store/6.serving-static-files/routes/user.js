const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
  res.send('<h1>Hello there!</h1> <p>Here you will see list of books! </p>');
});

module.exports = router;
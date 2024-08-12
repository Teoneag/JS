const express = require('express');
//first install 'body-parser'
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin'); // we can omit the .js extension
const userRoutes = require('./routes/user');

app.use(adminRoutes);

app.use(userRoutes);  

app.listen(8080);

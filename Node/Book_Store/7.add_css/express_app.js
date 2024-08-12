const express = require('express');
//first install 'body-parser'
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

const adminRoutes = require('./routes/admin'); // we can omit the .js extension
const userRoutes = require('./routes/user');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);

app.use(userRoutes);  

app.listen(8080);

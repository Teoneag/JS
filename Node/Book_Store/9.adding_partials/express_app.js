const express = require('express');
//first install 'body-parser'
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));



const adminRoutes = require('./routes/admin'); // we can omit the .js extension
const userRoutes = require('./routes/user');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);

app.use(userRoutes);  

// app.get('/users/:id/:name', (req, res) => {
//   const userId = req.params.id;
//   const name = req.params.name;
//   console.log('userId: '+ userId, 'name: ' + name)
//   res.redirect('/');
// });


app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' });
  });

app.listen(8080);

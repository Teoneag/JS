const http = require('http');
const path = require('path');

const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.post('/register', (req, res) => {
    res.sendFile(path.join(__dirname, "success.html"));
});



app.listen(3000);

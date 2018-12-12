const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/api');
// mongoose.Promise = global.Promise;
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/api', routes);

// create middleware.
app.use(function(err, req, res, next) {
    console.log(err.message);
    res.status(400).send({error: err.message});
});

// listen server.
app.listen(process.env.port || 4000, function () {
    console.log('host server 127.0.0.1:4000');
});
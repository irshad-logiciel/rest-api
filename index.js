const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use('/api', routes);


// listen server.
app.listen(process.env.port || 4000, function () {
    console.log('host server 127.0.0.1:4000');
});
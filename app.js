const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const producstRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/'+process.env.dbName, { useNewUrlParser: true });

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Headers', 
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    if(req.method === 'OPTIONS') {
        res.header(
            'Access-Contol-Allow-Methods',
            'GET, PUT, PATCH, POST, DELETE'
        );
        return res.status(200).json({});
    }
    next();
});


// routes
app.use('/products', producstRoutes);
app.use('/orders', ordersRoutes);

// errors handles
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
            status_code: error.status,
        }
    })
});

module.exports = app;
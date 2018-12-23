const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const producstRoutes = require('./api/routes/products');
const ordersRoutes = require('./api/routes/orders');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
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
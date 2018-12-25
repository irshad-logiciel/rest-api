const express = require('express');
const route = express.Router();

//get method
route.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'GET Oders',
    });
});

route.post('/', (req, res, next) => {
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    };
    res.status(201).json({
        message: 'POST Oders',
        create_order: order,
    });
});

route.get('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'GET Oder By ID',
        id: req.params.orderId,
    });
});

route.patch('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'PATCH Oders',
        id: req.params.orderId,
    });
});

route.put('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'PUT Oders',
        id: req.params.orderId,
    });
});

route.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'DELETE Oders',
        id: req.params.orderId,
    });
});

module.exports = route;
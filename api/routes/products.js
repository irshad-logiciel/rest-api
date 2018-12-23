const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get response',
        status_code: 200
    })
});

route.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Post Methods',
    });
});


route.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            messsage: 'You got special Id',
            id: id,
            status_code: 200,
        });
    } else {
        res.status(200).json({
            message: 'You got another Id',
            id: id,
            status_code: 200,
        });
    }
});

route.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Update route working',
        id: id,
    });
});

route.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Delete route working fine',
        id: id,
    });
});

route.put('/:productId', (req, res, next) => {
    const id = req.params.productId;
    res.status(200).json({
        message: 'Put route working fine',
        id: id,
    });
});

module.exports = route;
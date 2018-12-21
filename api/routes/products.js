const express = require('express');
const route = express.Router();

route.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Get response',
        status_code: 200
    })
});

route.post('/', (req, res, next) => {
    res.status(200).json({
        message: 'Post Methods',
    });
});

module.exports = route;
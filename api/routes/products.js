const express = require('express');
const route = express.Router();

const Product = require('../models/products');
const mongoose = require('mongoose');

route.get('/', (req, res, next) => {
    Product.find()
    .exec()
    .then(doc => {
        res.status(200).json({
            data: doc,
            status_code: 200,
        });
    })
    .catch(err => {
        res.status(404).json({
            error: err,
            status_code:404,
        })
    });
});

route.post('/', (req, res, next) => {
    const ProductData = {
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    }
    const product = new Product(ProductData);
    product
    .save()
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Post Methods',
            data: result,
        });
    })
    .catch(err => {
        console.log(err);
        res.status(404).json({
            message: 'Product not save',
            status_code: 404
        });
    });
});


route.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.findById(id)
    .exec()
    .then(doc => {
        console.log(doc);
        if (doc) {
            res.status(200).json({
                data: doc,
                status_code: 200,
            })
        } else {
            res.status(404).json({
                message: 'Not found record in DB',
                status_code: 404,
            })
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            message: err.message,
            status_code: 500
        })
    });
});

route.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.proName] = ops.value;
    }
    Product.update({_id: id}, { $set: updateOps })
    .exec()
    .then(result => {
        res.status(200).json({
            data: result,
            status_code: 200,
        });
    })
    .catch(err => {
        res.status(404).json({
            error: err,
        });
    });
});

route.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({_id: id})
    .exec()
    .then(result => {
        res.status(200).json({
            data: result,
            status_code:200,
        });
    })
    .catch(err => {
        res.status(500).json({
            error: err,
        });
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
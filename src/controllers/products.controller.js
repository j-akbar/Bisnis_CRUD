'use strict';

const Product = require('../models/products.model');

exports.findAll = function(req, res) {
    let code = '01';
    Product.findAll(function(err, product) {
        console.log('controller');
        if (err) {
            //res.send(err);
            res.json({
                ResponseCode: code,
                Message:err,
                ResponseDesc: product
            });
        } else {
            console.log('res', product);
            code = '00';
            res.send({
                ResponseCode: code,
                ResponseDesc: product
            });
        }
    });
};

exports.create = function(req, res) {
    const new_product = new Product(req.body);
    let code = '01';
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Product.create(new_product, function(err, product) {
            if (err) {
                res.send(err);
            } else {
                code = '00';
                res.json({
                    ResponseCode: code,
                    Message:"Product added successfully!",
                    ResponseDesc: new_product
                });
            }
        });
    }
};

exports.findById = function(req, res) {
    let code = '01';
    Product.findById(req.params.id, function(err, product) {
        if (err) {
            res.send(err);
        } else {
            code = '00';
            res.json({
                ResponseCode: code,
                ResponseDesc: product[0]
            });
        }
    });
};

exports.update = function(req, res) {
    const new_product = new Product(req.body);
    let code = '01';
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Product.update(req.params.id, new Product(req.body), function(err, product) {
            if (err) {
                res.send(err);
            } else {
                code = '00';
                res.json({
                    ResponseCode: code,
                    Message:"Product successfully updated!",
                    ResponseDesc: new_product
                });
            }
        });
    }
  
};

exports.delete = function(req, res) {
    let code = '01';
    Product.delete( req.params.id, function(err, product) {
        if (err) {
            res.send(err);
        } else {
            code = '00';
            res.json({
                ResponseCode: code,
                Message:"Product successfully deleted!",
                ResponseDesc: product
            });
        }
    });
};
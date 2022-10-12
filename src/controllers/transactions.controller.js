'use strict';

const Transaction = require('../models/transactions.model');

exports.findAll = function(req, res) {
    let code = '01';
    Transaction.findAll(function(err, transaction) {
        console.log('controller');
        if (err) {
            res.send(err);
        } else {
            console.log('res', transaction);
            code = '00';
            res.send({
                ResponseCode: code,
                ResponseDesc: transaction
            });
        }
    });
};

exports.create = function(req, res) {
    const new_transaction = new Transaction(req.body);
    let total_order = 0;
    let code = '01';
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Transaction.create(new_transaction, function(err, transaction) {
            if (err) {
                //res.send(err);
                res.json({
                    ResponseCode: code,
                    Message:err,
                    ResponseDesc: new_transaction
                });
            } else {
                code = '00';
                res.json({
                    ResponseCode: code,
                    Message:"Transaction added successfully!",
                    ResponseDesc: new_transaction
                });
            }
        });
    }
};

exports.findById = function(req, res) {
    let code = '01';
    Transaction.findById(req.params.id, function(err, transaction) {
        if (err) {
            res.send(err);
        } else {
            code = '00';
            res.json({
                ResponseCode: code,
                ResponseDesc: transaction[0]
            });
        }
    });
};

exports.update = function(req, res) {
    const new_transaction = new Transaction(req.body);
    let code = '01';
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Transaction.update(req.params.id, new Transaction(req.body), function(err, transaction) {
            if (err) {
                res.send(err);
            } else {
                code = '00';
                res.json({
                    ResponseCode: code,
                    Message:"Transaction successfully updated!",
                    ResponseDesc: new_transaction
                });
            }
        });
    }
};

exports.delete = function(req, res) {
    let code = '01';
    Transaction.delete( req.params.id, function(err, transaction) {
        if (err) {
            res.send(err);
        } else {
            code = '00';
            res.json({
                ResponseCode: code,
                Message:"Transaction successfully deleted!",
                ResponseDesc: transaction
            });
        }
    });
};
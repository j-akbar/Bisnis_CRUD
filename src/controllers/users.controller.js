'use strict';

const User = require('../models/users.model');

exports.findAll = function(req, res) {
    let code = '01';
    User.findAll(function(err, user) {
        console.log('controller');
        if (err) {
            res.send(err);
        } else {
            console.log('res', user);
            code = '00';
            res.send({
                ResponseCode: code,
                ResponseDesc: user
            });
        }
    });
};


exports.create = function(req, res) {
    const new_user = new User(req.body);
    let code = '01';
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.create(new_user, function(err, user) {
            if (err) {
                //res.send(err);
                res.json({
                    ResponseCode: code,
                    Message:err,
                    ResponseDesc: new_user
                });
            } else {
                code = '00';
                res.json({
                    ResponseCode: code,
                    Message:"User added successfully!",
                    ResponseDesc: new_user
                });
            }
        });
    }
};


exports.findById = function(req, res) {
    let code = '01';
    User.findById(req.params.id, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            code = '00';
            res.json({
                ResponseCode: code,
                ResponseDesc: user[0]
            });
        }
    });
};


exports.update = function(req, res) {
    const new_user = new User(req.body);
    let code = '01';
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        User.update(req.params.id, new User(req.body), function(err, user) {
            if (err) {
                res.send(err);
            } else {
                code = '00';
                res.json({
                    ResponseCode: code,
                    Message:"User successfully updated!",
                    ResponseDesc: new_user
                });
            }
        });
    }
  
};


exports.delete = function(req, res) {
    let code = '01';
    User.delete( req.params.id, function(err, user) {
        if (err) {
            res.send(err);
        } else {
            code = '00';
            res.json({
                ResponseCode: code,
                Message:"User successfully deleted!",
                ResponseDesc: user
            });
        }
    });
};
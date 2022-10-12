'user strict';
var dbConn = require('../../config/db.config');

//Product object create
var Product = function(product){
    this.product_id         = product.product_id;
    this.product_name       = product.product_name;
    this.premium            = product.premium;
};

Product.create = function (newProd, result) {    
    dbConn.query("INSERT INTO data_product set ?", newProd, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};

Product.findById = function (id, result) {
    dbConn.query("Select * from data_product where product_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Product.findAll = function (result) {
    dbConn.query("Select * from data_product", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('products : ', res);  
            result(null, res);
        }
    });   
};

Product.update = function(id, product, result){
  dbConn.query("UPDATE data_product SET product_name=?,premium=? WHERE product_id = ?", [product.product_name,product.premium, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

Product.delete = function(id, result){
     dbConn.query("DELETE FROM data_product WHERE product_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Product;
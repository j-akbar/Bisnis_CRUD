'user strict';
var dbConn = require('../../config/db.config');

//Transaction object create
var Transaction = function(transaction){
    this.trans_id               = transaction.trans_id;
    this.trans_date             = transaction.trans_date;
    this.user_id                = transaction.user_id;
    this.product_id             = transaction.product_id;
    this.qty_order              = transaction.qty_order;
    this.total_order            = transaction.total_order;
};

Transaction.create = function (newTrx, result) {  
    const {trans_id, trans_date, user_id, product_id, qty_order} = newTrx; 
    let total_order = 0;

    dbConn.query("Select premium from data_product where product_id = ? ", product_id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            total_order = qty_order * res[0].premium;
            dbConn.query("INSERT INTO data_transaction set trans_date=?, user_id=?, product_id=?, qty_order=?, total_order=?", [trans_date, user_id, product_id, qty_order, total_order], function (err2, res2) {
                if(err2) {
                    console.log("error: ", err2);
                    result(err2, null);
                }
                else{
                    console.log(res2.insertId);
                    result(null, res2.insertId);
                }
            });
            //result(null, res);
        }
    });   
};

Transaction.findById = function (id, result) {
    dbConn.query("SELECT t.trans_id, t.trans_date, u.username, p.product_name, t.qty_order, " +
                " t.total_order FROM data_transaction t " +
                " INNER JOIN data_user u ON t.user_id = u.user_id " +
                " INNER JOIN data_product p ON t.product_id = p.product_id WHERE t.trans_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Transaction.findAll = function (result) {
    dbConn.query("SELECT t.trans_id, t.trans_date, u.username, p.product_name, t.qty_order, " +
                " t.total_order FROM data_transaction t " +
                " INNER JOIN data_user u ON t.user_id = u.user_id " +
                " INNER JOIN data_product p ON t.product_id = p.product_id", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('transactions : ', res);  
            result(null, res);
        }
    });   
};

Transaction.update = function(id, transaction, result){
    let total_order = 0;
    dbConn.query("Select premium from data_product where product_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            total_order = transaction.qty_order * res[0].premium;
            dbConn.query("UPDATE data_transaction SET trans_date=?,user_id=?,product_id=?,qty_order=?,total_order=? WHERE trans_id = ?", [transaction.trans_date,transaction.user_id,transaction.product_id,transaction.qty_order,total_order, id], function (err2, res2) {
                if(err2) {
                    console.log("error: ", err2);
                    result(null, err2);
                }else{   
                    result(null, res2);
                }
            });
            //result(null, res);
        }
    });
};

Transaction.delete = function(id, result){
     dbConn.query("DELETE FROM data_transaction WHERE trans_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Transaction;
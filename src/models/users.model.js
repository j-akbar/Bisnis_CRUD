'user strict';
var dbConn = require('../../config/db.config');

//User object create
var User = function(user){
    this.user_id        = user.user_id;
    this.username       = user.username;
    this.active         = user.active;
};

User.create = function (newUser, result) {    
    dbConn.query("INSERT INTO data_user set ?", newUser, function (err, res) {
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

User.findById = function (id, result) {
    dbConn.query("Select * from data_user where user_id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

User.findAll = function (result) {
    dbConn.query("Select * from data_user", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('users : ', res);  
            result(null, res);
        }
    });   
};

User.update = function(id, user, result){
  dbConn.query("UPDATE data_user SET username=?,active=? WHERE user_id = ?", [user.username,user.active, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};

User.delete = function(id, result){
     dbConn.query("DELETE FROM data_user WHERE user_id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= User;
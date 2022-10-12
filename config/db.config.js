'user strict';

const mysql = require('mysql');
const conn_db = process.env;

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : conn_db.HOST,
  user     : conn_db.DB_USERNAME,
  password : conn_db.DB_PASSWORD,
  database : conn_db.DATABASE
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;
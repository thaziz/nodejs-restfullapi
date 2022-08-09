//import mysql from "mysql2";
const mysql = require("mysql2");


var db ;
db = mysql.createConnection ({
  host : 'localhost',
  user : 'root' ,
  password : '',
  database : 'todo_list'
});


//exports.db = db;

 module.exports=db;


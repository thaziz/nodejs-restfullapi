// import connection

const connection = require("../config/database.js");
var dateTime = require('node-datetime');

module.exports.getTodos = (result) => {
    connection.query("SELECT * FROM Todo", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });      
}
 
// Get Single Todo
module.exports.getTodoById = (id, result) => {
    connection.query("SELECT * FROM Todo WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Todo to Database
module.exports.insertTodo = (data, result) => {
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    data.created_at=formatted;
    data.updated_at=formatted;
    connection.query("INSERT INTO Todo SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Todo to Database
module.exports.updateTodoById = (data, id, result) => {
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    data.updated_at=formatted;
    connection.query("UPDATE Todo SET ? WHERE id = ?", [data, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Todo to Database
module.exports.deleteTodoById = (id, result) => {
    connection.query("DELETE FROM Todo WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
// import connection
const connection = require("../config/database.js");
var dateTime = require('node-datetime');

module.exports.getActivitys = (result) => {
    connection.query("SELECT * FROM activity", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });      
}
 
// Get Single Activity
module.exports.getActivityById = (id, result) => {
    connection.query("SELECT * FROM Activity WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
 
// Insert Activity to Database
module.exports.insertActivity = (data, result) => {
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    data.created_at=formatted;
    data.updated_at=formatted;
    connection.query("INSERT INTO Activity SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Update Activity to Database
module.exports.updateActivityById = (data, id, result) => {
    var dt = dateTime.create();
    var formatted = dt.format('Y-m-d H:M:S');
    data.updated_at=formatted;
    console.log(formatted)
    connection.query("UPDATE Activity SET ? WHERE id = ?", [data, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
 
// Delete Activity to Database
module.exports.deleteActivityById = (id, result) => {
    connection.query("DELETE FROM Activity WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
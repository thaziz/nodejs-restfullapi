// Import function from Todo Model
//import { getTodos, getTodoById, insertTodo, updateTodoById, deleteTodoById } from "";
 
const model = require("../models/TodoModel.js");
// Get All Todos
module.exports.showTodos = (req, res) => {

    model.getTodos((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json({"status":"Success","message":"Success","data":results});
        }
    });
}
 
// Get Single Todo 
module.exports.showTodoById = (req, res) => {
    model.getTodoById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            if(results===undefined){                
                    res.json({"status":"Not Found","message":`Todo with ID ${req.params.id} Not Found`,"data":{}})
            }else{                    
                    res.json({"status":"Success","message":"Success","data":results});
            }
        }
    });
}
 
// Create New Todo
module.exports.createTodo = (req, res) => {
    const data = req.body;
    model.insertTodo(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Todo
module.exports.updateTodo = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    model.updateTodoById(data, id, (err, results) => {
        if(results.affectedRows==0){
                res.json({"status":"Not Found","message":`Activity with ID ${id} Not Found`,"data":{}});
            }else{
                model.getTodoById(id, (err, results) => {
                    if (err){
                        res.send(err);
                    }else{
                        if(results===undefined){                
                                res.json({"status":"Not Found","message":`Todo with ID ${req.params.id} Not Found`,"data":{}})
                        }else{                    
                                res.json({"status":"Success","message":"Success","data":results});
                        }
                    }
                }); 
            }
    });
}
 
// Delete Todo
module.exports.deleteTodo = (req, res) => {
    const id = req.params.id;

    model.deleteTodoById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            if(results.affectedRows==0){
                res.json({"status":"Not Found","message":`Todo with ID ${id} Not Found`,"data":{}});
            }else{
                res.json({"status":"Success","message":"Success","data":{}});   
            }
        }
    });
}
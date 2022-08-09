// import express
const express = require('express');

 
const activity = require("../controllers/activity.js");
const todo = require("../controllers/todo.js");
// init express router
const router = express.Router();

//route activity 
// Get All Activity
router.get('/activity-groups', activity.showActivitys);
 
// Get Single Activity
router.get('/activity-groups/:id', activity.showActivityById);
 
// Create New Activity
router.post('/activity-groups', activity.createActivity);
 
// Update Activity
router.patch('/activity-groups/:id', activity.updateActivity);
 
// Delete Activity
router.delete('/activity-groups/:id', activity.deleteActivity);

console.log(1111);
//route todo
router.get('/todo-items', todo.showTodos);
 
// Get Single todo
router.get('/todo-items/:id', todo.showTodoById);
 
// Create New todo
router.post('/todo-items', todo.createTodo);
 
// Update todo
router.patch('/todo-items/:id', todo.updateTodo);
 
// Delete todo
router.delete('/todo-items/:id', todo.deleteTodo);
 
module.exports = router;
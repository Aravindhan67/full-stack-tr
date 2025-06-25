const express=require('express');
const { getTodo, getTodoById, postTodo, putTodo, deleteTodo } = require('../controllers/todoControllers');
const todoRoute=express.Router();
todoRoute.get('/', getTodo);
todoRoute.get('/:id', getTodoById);
todoRoute.post('/create', postTodo);
todoRoute.put('/edit/:id', putTodo);
todoRoute.delete('/delete/:id', deleteTodo);
module.exports=todoRoute
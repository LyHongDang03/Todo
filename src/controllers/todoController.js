const Todo = require('../models/todo.js');

class TodoController {
  async createTodo(req, res) {
    try {
      const todo = await Todo.create(req.body);
      res.status(201).json(todo);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async getTodos(req, res){
    try {
        const todo = await Todo.find()
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
  async getTodoById(req, res){
    try {
        const id = req.params.todoId
        let todo = await Todo.findById(id)
        if(!todo){
            res.status(404).json({ 
                message: 'Todo not found!',
            });
        }else{
            res.status(200).json(todo)
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
   async updateTodo(req, res){
    try {
        const id = req.params.todoId
        const updateData = req.body
        let todo = await Todo.findByIdAndUpdate(id, updateData, {new: true})
        if(!todo){
            res.status(404).json({ 
                message: 'Todo not found!',
            });
        }else{
            res.status(200).json(todo)
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
   async deleteTodo(req, res){
    try {
        const id = req.params.todoId
        let todo = await Todo.findByIdAndDelete(id)
        if(!todo){
            res.status(404).json({ 
                message: 'Todo not found!',
            });
        }else{
            res.status(200).json({
                message: 'Delete todo'
            })
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  }
}

module.exports = new TodoController();

const express = require('express');
const router = express.Router();

const Todo = require('../models/Todo');

// Get all todos
router.get('/', async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// Create a new todo
router.post('/add', async (req, res) => {
  const { title, completed } = req.body;
  const newTodo = new Todo({
      title,
      completed
  });
  await newTodo.save();
  res.json(newTodo);
});

// Update a todo
router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(id, { title, completed }, { new: true });
  res.json(updatedTodo);
});

// Delete a todo
router.delete('/delete/:id', async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.json({ message: 'Todo deleted' });
});

module.exports = router;
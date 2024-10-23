
const express = require('express');
const Task = require('../models/Task'); 

const router = express.Router();


router.get('/', async (req, res) => {
   try {
      const tasks = await Task.find();
      res.json(tasks);
   } catch (error) {
      res.status(500).send('Error fetching tasks');
   }
});


router.post('/', async (req, res) => {
   const { title, description } = req.body;
   if (!title) return res.status(400).send('Title is required');
   try {
      const newTask = new Task({ title, description });
      await newTask.save();
      res.status(201).json(newTask);
   } catch (error) {
      res.status(500).send('Error adding task');
   }
});

// DELETE /tasks/:id - Delete a task by its ID
router.delete('/:id', async (req, res) => {
   try {
      await Task.findByIdAndDelete(req.params.id);
      res.send('Task deleted');
   } catch (error) {
      res.status(500).send('Error deleting task');
   }
});

module.exports = router;

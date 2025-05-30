const Task = require('./task');
const express = require('express');
const router = express.Router();

// const app = express();
//create a new task
//async--wait for the operation to be completed to do something
router.post('/tasks', async (req, res) => {
// app.post('/tasks', async (req, res) => {
    try {
        const task = new Task(req.body) //take everything and add to new task
        await task.save(),
        res.status(201).send(task);
    } catch (error) {
        res.status(400).send(error);
    }
})

//view
router.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.send(tasks);
    } catch (error) {
        res.status(500).send(error)
    }
})

//fetch one
router.get('/tasks/:id', async(req,res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) return res.status(404).send();
        res.send(task)
    } catch (error) {
        res.status(500).send(error)
    }
})

//update task
router.put('/tasks/:id', async(req,res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id, 
            req.body,
            {new: true, runValidators:true} //adds new line called validators
        );
        if (!task) return res.status(404).send();
        res.send(task);
    } catch (error) {
        res.status(500).send(error)
    }
})

//DELETE
router.delete('/tasks/:id', async(req,res) => {
    try {
        const task = await Task.findByIdAndDelete((req.params.id));
        if (!task) return res.status(404).send();
        res.send(task);
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router;

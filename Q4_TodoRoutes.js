
const express = require('express');

const app = express();

// Middleware to read JSON data
app.use(express.json());

// Temporary task storage
let tasks = [
    { id: 1, task: "Complete assignment", completed: false },
    { id: 2, task: "Study Node.js", completed: false }
];

// GET: Display all tasks
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

// POST: Add a new task
app.post('/tasks', (req, res) => {
    const newTask = {
        id: Date.now(),
        task: req.body.task,
        completed: false
    };

    if (!newTask.task) {
        return res.status(400).json({
            message: "Task name is required"
        });
    }

    tasks.push(newTask);

    res.status(201).json({
        message: "Task added successfully",
        task: newTask
    });
});

// PUT: Mark a task as completed
app.put('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const task = tasks.find(t => t.id === id);

    if (!task) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    task.completed = true;

    res.json({
        message: "Task completed successfully",
        task: task
    });
});

// DELETE: Remove a task
app.delete('/tasks/:id', (req, res) => {
    const id = Number(req.params.id);

    const oldLength = tasks.length;

    tasks = tasks.filter(t => t.id !== id);

    if (tasks.length === oldLength) {
        return res.status(404).json({
            message: "Task not found"
        });
    }

    res.json({
        message: "Task deleted successfully"
    });
});

// Start server
app.listen(3001, () => {
    console.log("To-Do App running at http://localhost:3001");
});
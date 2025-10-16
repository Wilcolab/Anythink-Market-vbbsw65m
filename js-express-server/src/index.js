const express = require('express');

const app = express();
const PORT = 8001;

// Middleware to parse JSON bodies
app.use(express.json());

// In-memory tasks array
const tasks = [
    "Write a diary entry from the future",
    "Create a time machine from a cardboard box",
    "Plan a trip to the dinosaurs",
    "Draw a futuristic city",
    "List items to bring on a time-travel adventure"
];

// Root route for health check
app.get('/', (req, res) => {
    res.send('Hello World');
});

// GET /tasks route
app.get('/tasks', (req, res) => {
    res.json({ tasks });
});

// POST /tasks route
app.post('/tasks', (req, res) => {
    const { text } = req.body;
    if (typeof text !== 'string') {
        return res.status(400).json({ message: 'Invalid task format' });
    }
    tasks.push(text);
    res.json({ tasks });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://lascanorussell:T9qjgGZhZgpNKit5@cluster0.ajs5wkw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').
then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('Error connecting to MongoDB', err);
});

// Routes
app.use('/api/todos', require('./routes/api'));

// Start the server
const PORT = process.env.PORT || 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
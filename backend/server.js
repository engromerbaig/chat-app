const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Import the authentication routes
const authRoutes = require('./routes/auth'); // Ensure the path is correct based on your project structure

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/chat-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Use the authentication routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});

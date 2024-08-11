const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost/chat-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.listen(5000, () => {
    console.log('Server running on port 5000');
});

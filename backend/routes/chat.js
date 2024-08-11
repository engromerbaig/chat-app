const express = require('express');
const auth = require('../middleware/auth');
const Chat = require('../models/Chat');
const User = require('../models/User'); // Adjust the path if your User model is in a different directory




const router = express.Router();

router.post('/', auth, async (req, res) => {
    const { receiverId, message } = req.body;

    try {
        const receiver = await User.findById(receiverId);
        if (!receiver) return res.status(400).json({ msg: 'Receiver does not exist' });

        // Add hierarchical role-based chat initiation checks here

        const chat = new Chat({
            sender: req.user.id,
            receiver: receiverId,
            message
        });

        await chat.save();
        res.json(chat);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

router.get('/:userId', auth, async (req, res) => {
    try {
        const chats = await Chat.find({
            $or: [{ sender: req.user.id, receiver: req.params.userId }, { sender: req.params.userId, receiver: req.user.id }]
        }).sort({ timestamp: 1 });

        res.json(chats);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;

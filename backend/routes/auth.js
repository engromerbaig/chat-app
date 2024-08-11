const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Adjust the path if your User model is in a different directory

const router = express.Router();

module.exports = router;

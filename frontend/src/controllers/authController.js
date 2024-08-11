// src/controllers/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Example user data (replace with actual database checks)
const users = [
  { username: 'testuser', password: bcrypt.hashSync('password123', 10) }
];

exports.loginUser = (req, res) => {
  const { username, password } = req.body;
  const user = users.find(user => user.username === username);
  
  if (!user) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = bcrypt.compareSync(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username: user.username }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token });
};

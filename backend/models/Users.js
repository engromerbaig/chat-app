const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['Super Admin', 'Manager', 'Agent', 'R&D Role', 'R&D Admin Role', 'FE Role', 'Staff Access Control Role', 'Closer Role', 'Team Lead Role', 'RNA Specialist Role', 'CB Specialist Role', 'Decline Specialist Role'], required: true }
});

UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

module.exports = mongoose.model('User', UserSchema);

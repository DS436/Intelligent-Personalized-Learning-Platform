const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/contact', (req, res) => {
    const newUser = new User(req.body);
    newUser.save().then(user => res.json(user)).catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

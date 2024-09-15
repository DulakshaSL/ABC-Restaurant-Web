const express = require('express');
const Staff = require('../models/Staff');
const router = express.Router();

// Signup route
router.post('/signupstaff', async (req, res) => {
  const { username, email, password, usertype } = req.body;

  try {
    // Check if the email already exists
    const existingUser = await Staff.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create new staff member
    const newStaff = new Staff({
      username,
      email,
      password,
      usertype,
    });

    await newStaff.save();
    res.status(201).json({ success: true, message: 'Staff registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

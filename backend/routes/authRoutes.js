// backend/routes/authRoutes.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'mySuperSecretKey'; 


// Signup Route
router.post('/signup', async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  // Basic validation
  if (!username || !email || !password || !confirmPassword) {
    return res.status(400).json({ errors: { general: 'All fields are required.' } });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ errors: { confirmPassword: 'Passwords do not match.' } });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      let errorMessage = 'Email or Username is already registered.';
      if (existingUser.email === email && existingUser.username === username) {
        errorMessage = 'Email and Username are both already registered.';
      } else if (existingUser.email === email) {
        errorMessage = 'Email is already registered.';
      } else if (existingUser.username === username) {
        errorMessage = 'Username is already taken.';
      }
      return res.status(400).json({ errors: { general: errorMessage } });
    }

    // Create a new user
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json({ success: true, message: 'Signup successful!' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ errors: { general: 'Server error. Please try again.' } });
  }
});

// Staff/Admin Signup Route
router.post('/staff-signup', async (req, res) => {
  const { username, email, password, confirmPassword, usertype } = req.body;

  // Basic validation
  if (!username || !email || !password || !confirmPassword || !usertype) {
    return res.status(400).json({ errors: { general: 'All fields are required.' } });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ errors: { confirmPassword: 'Passwords do not match.' } });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      let errorMessage = 'Email or Username is already registered.';
      if (existingUser.email === email && existingUser.username === username) {
        errorMessage = 'Email and Username are both already registered.';
      } else if (existingUser.email === email) {
        errorMessage = 'Email is already registered.';
      } else if (existingUser.username === username) {
        errorMessage = 'Username is already taken.';
      }
      return res.status(400).json({ errors: { general: errorMessage } });
    }

    // Create a new staff/admin user
    const newUser = new User({ username, email, password, type: usertype });
    await newUser.save();

    res.status(201).json({ success: true, message: 'Signup successful!' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ errors: { general: 'Server error. Please try again.' } });
  }
});


// Login Route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Basic validation
  if (!email || !password) {
    return res.status(400).json({ errors: { general: 'Email and password are required.' } });
  }

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ errors: { general: 'Invalid email or password.' } });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: { general: 'Invalid email or password.' } });
    }

    // Create a JWT token with role included
    const token = jwt.sign(
      { id: user._id, email: user.email, userId: user.userId, type: user.type }, // Include user type in token payload
      JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send the token, userId, and user type to the client
    res.status(200).json({
      success: true,
      token,
      userId: user.userId, // Include userId in the response
      type: user.type,     // Include user type (e.g., customer, staff, admin) in the response
      message: 'Login successful!'
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ errors: { general: 'Server error. Please try again.' } });
  }
});





router.get('/user/:userId', async (req, res) => {
  try {
    
    const user = await User.findOne({ userId: req.params.userId }).select('-password'); // Exclude password from response
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Server error. Please try again.' });
  }
});

// Logout Route
router.post('/logout', (req, res) => {
  
  res.status(200).json({ message: 'Logout successful!' });
});


module.exports = router;

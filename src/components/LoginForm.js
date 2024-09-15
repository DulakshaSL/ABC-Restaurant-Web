import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css'; // Ensure this CSS file has the correct styles or adapt as needed.
import companyLogo from '../assets/images/companylogo.png';
import loginImage from '../assets/images/loging.png';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage('');
  
    try {
      // Sending form data to the backend API
      const response = await axios.post('http://localhost:5000/api/login', formData);
  
      if (response.data.success) {
        const { token, userId, type } = response.data; // Extract user type from the response
  
        // Store the JWT token, userId, and type (user role) in localStorage
        localStorage.setItem('authToken', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('userType', type); // Save user type (role) in localStorage
  
        // Store user data in localStorage (optional)
        localStorage.setItem('user', JSON.stringify({ email: formData.email, userId, type }));
  
        setSuccessMessage('Login successful! Redirecting...');
  
        // Redirect to the appropriate page based on the user's role
        setTimeout(() => {
          if (type === 'admin') {
            navigate('/dashboard'); // Redirect to admin dashboard
          } else if (type === 'staff') {
            navigate('/staff/dashboard'); // Redirect to staff dashboard
          } else {
            navigate('/'); // Redirect to the homepage for customers
          }
        }, 2000);
      } else {
        // Handle validation errors from the backend
        setErrors(response.data.errors || { general: 'An unexpected error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || { general: 'An unexpected error occurred. Please try again.' });
      } else {
        setErrors({ general: 'An unexpected error occurred. Please try again.' });
      }
    }
  };
  

  return (
    <>
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <img src={companyLogo} alt="Company Logo" className="logo" />
          <h1>Welcome To The ABC Restaurant</h1>
        </div>
      </div>

      {/* Login Form */}
      <div className="login-container">
        <img src={loginImage} alt="Login Illustration" className="left-image" />
        

        <div className="auth-section">
          <h2>Login Portal</h2>
          <form id="login-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="login-email">Email</label>
              <input
                type="email"
                id="login-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            {/* Display general errors */}
            {errors.general && <div className="error">{errors.general}</div>}

            {/* Display success message */}
            {successMessage && <div className="success">{successMessage}</div>}

            <div className="btn-container">
              <button type="submit" className="auth-btn">Login</button>
            </div>
          </form>
          <p>Don't have an account? <a href="/signup">Sign Up</a></p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

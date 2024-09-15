import React, { useState } from 'react';
import axios from 'axios';
import companyLogo from '../assets/images/companylogo.png';
import signupImage from '../assets/images/signup(2).png';



const StaffSignupForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    usertype: 'staff', 
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

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

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match.' });
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/staff-signup', formData);

      if (response.data.success) {
        setSuccessMessage('Signup successful! Redirecting to login page...');
        setTimeout(() => {
          window.location.href = '/login'; 
        }, 2000);
      } else {
        setErrors(response.data.errors || { general: 'An unexpected error occurred. Please try again.' });
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors(error.response.data.errors || { general: 'An unexpected error occurred. Please try again.' });
      } else {
        setErrors({ general: 'An unexpected error occurred. Please try again.' });
      }
    }
  };

  return (
    <>
      <div className="header">
        <div className="header-content">
          <img src={companyLogo} alt="ABC Restaurant Logo" className="logo" />
          <h1>ABC Restaurant - Staff</h1>
        </div>
      </div>

      <div className="login-container">
        <div className="auth-section">
          <h2>Signup Portal</h2>
          <form id="signup-form" onSubmit={handleSubmit}>
            <div className="auth-field">
              <label htmlFor="signup-username">Username</label>
              <input
                type="text"
                id="signup-username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {errors.username && <span className="error">{errors.username}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="signup-confirm-password">Confirm Password</label>
              <input
                type="password"
                id="signup-confirm-password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
            </div>

            <div className="auth-field">
              <label htmlFor="usertype">User Type</label>
              <select name="usertype" value={formData.usertype} onChange={handleChange}>
                <option value="staff">Staff</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {errors.general && <div className="error">{errors.general}</div>}
            {successMessage && <div className="success">{successMessage}</div>}

            <div className="btn-container">
              <button type="submit" className="auth-btn">Signup</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default StaffSignupForm;

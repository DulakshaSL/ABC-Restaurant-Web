import React, { useState } from 'react';
import axios from 'axios';
import './staff.css';
import companyLogo from '../assets/images/companylogo.png';
import loginImage from '../assets/images/loging.png';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
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

    try {
      const response = await axios.post('http://localhost:5000/api/loginstaff', formData);

      if (response.data.success) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('staffId', response.data.staffId); // Use staffId here
        localStorage.setItem('userType', response.data.usertype);

        setSuccessMessage('Login successful! Redirecting to dashboard...');
        setTimeout(() => {
          window.location.href = '/dashboard';
        }, 2000);
      } else {
        setErrors(response.data.errors || { general: 'An unexpected error occurred. Please try again.' });
      }
    } catch (error) {
      console.error('Error in login route:', error);
      setErrors(error.response?.data?.errors || { general: 'An unexpected error occurred. Please try again.' });
    }
  };

  return (
    <>
      <div className="header">
        <div className="header-cont">
          <img src={companyLogo} alt="Signature Cuisine Logo" className="logo" />
          <h1>ABC Restaurant - Staff</h1>
        </div>
      </div>

      <div className="login-container">
        <img src={loginImage} alt="Login Image" className="left-image" />

        <div className="auth-sec">
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

            {errors.general && <span className="error">{errors.general}</span>}
            {successMessage && <span className="success">{successMessage}</span>}

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginForm;

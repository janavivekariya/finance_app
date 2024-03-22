// src/components/LoginSignupPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import CSS file for styling

function LoginSignupPage() {
  return (
    <div className="login-signup-page">
      <header className="header">
        <div className="container">
          <div className="header-left">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
          </div>
          <div className="header-right">
            {/* <img src={logo} alt="Logo" className="logo" /> */}
          </div>
        </div>
      </header>
      <section className="main-content">
        <div className="container">
          <h2>Login or Sign Up</h2>
          {/* Login Form */}
          <form className="login-form">
            {/* Login Form Fields */}
            {/* Username Field */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            {/* Password Field */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            {/* Submit Button */}
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          {/* Signup Link */}
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          {/* Footer Content */}
        </div>
      </footer>
    </div>
  );
}

export default LoginSignupPage;

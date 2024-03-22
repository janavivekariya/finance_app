// src/components/HomePage.js

import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import CSS file for styling
//import logo from '../assets/logo.png'; // Import your logo image

function HomePage() {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header-left">
          <p>Logo</p>{/* <img src={logo} alt="Logo" className="logo" /> */}
        </div>
        <div className="header-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
        </div>
      </header>
      <section className="main-content">
        <div className="container">
          <h1>Your daily dose of financial news.</h1>
          <p>Stay informed, make smarter decisions. Join for weekly finance readings tailored to you.</p>
          <Link to="/login" className="btn btn-primary">Let's Start</Link>
        </div>
      </section>
      {/* <footer className="footer">
        <div className="container">
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
          <div className="social-icons">
            <a href="https://www.facebook.com"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
            <a href="https://www.linkedin.com"><i className="fab fa-linkedin"></i></a>
            <a href="https://www.instagram.com"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}

export default HomePage;

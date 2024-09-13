
import React, { useState } from 'react';
import './nav.css';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="unique-nav">
      <div className="unique-nav-container">
        <div className="unique-nav-logo">Kandy Tours</div>
        <div className={`unique-nav-links ${isOpen ? 'unique-nav-active' : ''}`}>
          <a href="#home" className="unique-nav-item">Home</a>
          <a href="/About" className="unique-nav-item">About</a>
          <a href="/services" className="unique-nav-item">Services</a>
          <a href="/contact" className="unique-nav-item">Contact</a>
          <a href="/SignUpForm" className="knd-nav-item">
            <i className="fas fa-user-plus"></i> Signup
          </a>
          <a href="/SignUpForm" className="knd-nav-item">
            <i className="fas fa-sign-in-alt"></i> Login
          </a>
        </div>
        <div className="unique-nav-toggle" onClick={toggleNav}>
          <span className="unique-nav-bar"></span>
          <span className="unique-nav-bar"></span>
          <span className="unique-nav-bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
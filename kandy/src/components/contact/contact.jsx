import React from 'react';
import Nav from '../navigationbar/nav';
import Footer from '../navigationbar/footer/footer';
import './contact.css'
const Contact = () => {
  return (
    <>
    <Nav />
    <div className="contact-container">
      <div className="cover-image">
        <h1 className="title">Contact Us</h1>
      </div>
      <div className="contact-content">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="input-field" />
          <input type="email" placeholder="Your Email" className="input-field" />
          <textarea placeholder="Your Message" className="input-field textarea"></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>We'd love to hear from you. Feel free to reach out!</p>
          <div className="info-item">
            <span className="icon">📞</span>
            <span>+ (94) 76-4165833</span>
          </div>
          <div className="info-item">
            <span className="icon">✉️</span>
            <span>lahiruheshan454@gmail.com</span>
          </div>
          <div className="info-item">
            <span className="icon">📍</span>
            <span>158/1, Gampaha, Sri Lanka</span>
          </div>
        </div>
      </div>
      
    </div>
    <Footer />
    </>
  );
};

export default Contact;
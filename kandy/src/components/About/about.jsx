import React from 'react';
import './about.css'
import Nav from '../navigationbar/nav';
import Footer from '../navigationbar/footer/footer';
const AboutUs = () => {


  return (
    <>
    <Nav />
    <div className="about-us-container">
      <header className="header">
        <h1>About Us</h1>
        <p>Capturing Moments, Creating Memories</p>
      </header>

      <div className="info-section">
        <div className="info-card">
          <h2>Our Story</h2>
          <p>
            Founded in 2010, we've been passionate about photography for over a decade. Our team of skilled photographers and creative minds work tirelessly to capture the essence of every moment, turning fleeting instances into timeless memories.
          </p>
        </div>
        <div className="info-card">
          <h2>Our Mission</h2>
          <p>
            We strive to tell unique stories through our lenses, creating visual narratives that resonate with hearts and minds. Our mission is to preserve the beauty of life's precious moments, one click at a time.
          </p>
        </div>
      </div>
 
      <Footer />
    </div>
   
    </>
  );
};

export default AboutUs;
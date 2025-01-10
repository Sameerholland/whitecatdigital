import React from 'react';
import '../Css/Fotter.css';

export default function FooterPage() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <a href="/about-us">About Us</a>
        <a href="/service">Services</a>
        <a href="/policy">Policy</a>

        <a href="/contact-us">Contact Us</a>
        
      </div>
      <hr style={{ borderColor: '#fff', borderWidth: '1px', margin: '15px 0' }} />

      <div className="footer-copyright">
        <p>&copy; 2024 WhiteCatDigital. All rights reserved.</p>
      </div>
    </footer>
  );
}

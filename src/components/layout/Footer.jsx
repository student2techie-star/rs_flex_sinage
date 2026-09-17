import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <h2>RS <span>FLEX & SIGNAGE</span></h2>
            <p>Premium flex printing, LED signage, and custom branding solutions in Tiruppur.</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h3>Services</h3>
              <ul>
                <li>Flex Banner Printing</li>
                <li>3D LED Sign Boards</li>
                <li>ACP Elevation</li>
                <li>UV Printing</li>
                <li>UV Lighting Boards</li>
                <li>Trimcap Letters</li>
                <li>Custom Logo Branding</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h3>Contact</h3>
              <ul>
                <li>+91 95003 90998</li>
                <li><a href="https://www.instagram.com/rs_flex_signage_/" target="_blank" rel="noopener noreferrer">@rs_flex_signage_</a></li>
                <li>Palladam Main Road, <br/>Thennampalayam, <br/>Tiruppur, Tamil Nadu 641604</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} RS Flex & Signage. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

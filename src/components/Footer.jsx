import React from 'react';
import '../assets/styles/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <h3>Virtual Market</h3>
          <p>Your one-stop shop for all digital products</p>
          <div className="footer-divider"></div>
        </div>
        
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link to="/return-policy">Return Policy</Link></li>
            <li><Link to="/refund-policy">Refund Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <p>info@virtualmarket.com</p>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <p>+91 99999 88888</p>
          </div>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Virtual Market. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

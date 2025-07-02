import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="footer-content">
    <div className="footer-links">
      <Link to="/" className="footer-link">Home</Link>
      <Link to="/about" className="footer-link">About Me</Link>
      <Link to="/portfolio" className="footer-link">Projects</Link>
      <Link to="/contact" className="footer-link">Contact</Link>
    </div>
    <div className="footer-contact">
      <div><FaEnvelope /> <a href="mailto:brian.o.iraru@gmail.com">brian.o.iraru@gmail.com</a></div>
      <div><FaPhone /> <a href="tel:+254743435490">+254 743435490</a></div>
    </div>
    <div className="footer-social">
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
      <a href="https://linkedin.com/in/brianiraru" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
      <a href="https://instagram.com/brianiraru" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    </div>
    <div className="footer-copy">&copy; {new Date().getFullYear()} Brian Iraru. All rights reserved.</div>
  </div>
);

export default Footer;

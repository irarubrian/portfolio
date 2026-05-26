import React from 'react';
import { 
  FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, 
  FaPhone, FaMapMarkerAlt, FaHeart, FaRocket, FaCode,
  FaArrowUp, FaLaptopCode, FaUsers, FaAward
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      {/* Animated gradient background */}
      <div className="footer-bg"></div>
      
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <motion.div 
              className="footer-logo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <FaLaptopCode className="footer-logo-icon" />
              <h3 className="footer-logo-text">Brian<span>Iraru</span></h3>
            </motion.div>
            <p className="footer-description">
              Crafting innovative digital solutions with passion and precision. 
              Let's build something extraordinary together.
            </p>
            <div className="footer-stats">
              <div className="footer-stat">
                <FaCode className="stat-icon" />
                <span>10+ Projects</span>
              </div>
              <div className="footer-stat">
                <FaUsers className="stat-icon" />
                <span>Happy Clients</span>
              </div>
              <div className="footer-stat">
                <FaAward className="stat-icon" />
                <span>Excellence</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Me</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/portfolio" className="footer-link">Projects</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="footer-section-title">Contact Info</h4>
            <ul className="footer-contact-list">
              <li>
                <FaEnvelope className="contact-icon" />
                <a href="mailto:brian.o.iraru@gmail.com">brian.o.iraru@gmail.com</a>
              </li>
              <li>
                <FaPhone className="contact-icon" />
                <a href="tel:+254743435490">+254 743 435 490</a>
              </li>
              <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </motion.div>

          {/* Newsletter / Social Section */}
          <motion.div 
            className="footer-section"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="footer-section-title">Stay Connected</h4>
            <p className="footer-newsletter-text">
              Follow me on social media for updates and insights.
            </p>
            <div className="footer-social">
              <motion.a 
                href="https://github.com/brianiraru" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-link github"
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://linkedin.com/in/brianiraru" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-link linkedin"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://instagram.com/brianiraru" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-link instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://twitter.com/brianiraru" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="social-link twitter"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            &copy; {new Date().getFullYear()} Brian Iraru. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy" className="bottom-link">Privacy Policy</Link>
            <Link to="/terms" className="bottom-link">Terms of Service</Link>
            <button onClick={scrollToTop} className="scroll-top-btn">
              <FaArrowUp />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="footer-root">
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
    <style jsx>{`
      .footer-root {
        width: 100%;
        background: #111827;
        color: #e5e7eb;
        padding: 2.5rem 1.5rem 1.2rem 1.5rem;
        border-top: 1.5px solid #2563eb33;
        margin-top: 3rem;
      }
      .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 2rem;
        align-items: flex-start;
      }
      .footer-links {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
      }
      .footer-link {
        color: #e5e7eb;
        text-decoration: none;
        font-size: 1.08rem;
        font-weight: 500;
        transition: color 0.2s, transform 0.2s;
        padding: 0.2rem 0;
      }
      .footer-link:hover {
        color: #3b82f6;
        transform: translateX(6px);
      }
      .footer-contact {
        display: flex;
        flex-direction: column;
        gap: 0.7rem;
        font-size: 1.05rem;
      }
      .footer-contact a {
        color: #e5e7eb;
        text-decoration: none;
        transition: color 0.2s;
      }
      .footer-contact a:hover {
        color: #3b82f6;
        text-decoration: underline;
      }
      .footer-social {
        display: flex;
        gap: 1.1rem;
        align-items: center;
        font-size: 1.5rem;
        margin-top: 0.5rem;
      }
      .footer-social a {
        color: #e5e7eb;
        transition: color 0.2s, transform 0.2s;
        border-radius: 50%;
        padding: 0.3rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .footer-social a:hover {
        color: #3b82f6;
        background: #1e293b;
        transform: scale(1.15);
      }
      .footer-copy {
        grid-column: 1 / -1;
        text-align: center;
        color: #9ca3af;
        font-size: 0.95rem;
        margin-top: 1.5rem;
        padding-top: 1.2rem;
        border-top: 1px solid #2563eb22;
      }
      @media (max-width: 700px) {
        .footer-content {
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }
        .footer-social {
          justify-content: flex-start;
        }
      }
    `}</style>
  </footer>
);

export default Footer;

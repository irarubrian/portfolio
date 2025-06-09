import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      if (window.innerWidth >= 900) setIsOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen && isMobile ? 'hidden' : '';
  }, [isOpen, isMobile]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      {/* SVG Logo/Brand - always top right, responsive */}
      {/* Logo removed as requested */}

      {/* Hamburger Button - Mobile Only */}
      {isMobile && (
        <button 
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      )}

      {/* Navigation Menu */}
      <div className={`nav-links ${isOpen ? 'active' : ''}`}>
        <NavLink to="/" end activeclassname="active" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" activeclassname="active" onClick={closeMenu}>About</NavLink>
        <NavLink to="/services" activeclassname="active" onClick={closeMenu}>Services</NavLink>
        <NavLink to="/portfolio" activeclassname="active" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/contact" activeclassname="active" onClick={closeMenu}>Contact</NavLink>
        {/* Quick Links (for About page or global use) */}
        <div className="quick-links" style={{display: isMobile ? 'block' : 'none', marginTop: '2rem'}}>
          <span style={{fontWeight: 600, fontSize: '1rem', marginBottom: 8, display: 'block'}}>Quick Links</span>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" onClick={closeMenu}>About</NavLink>
          <NavLink to="/portfolio" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
        </div>
      </div>

      {/* Dark Mode Toggle - works everywhere */}
      <button 
        className="dark-mode-toggle"
        onClick={toggleDarkMode}
        aria-label="Toggle dark mode"
      >
        {darkMode ? '☀️ Light' : '🌙 Dark'}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && isMobile && (
        <div className="mobile-overlay" onClick={closeMenu} />
      )}
    </nav>
  );
};

export default Navbar;
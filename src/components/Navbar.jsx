import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
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
    <>
      <nav className="navbar">
        {/* Remove Brian Iraru logo from navbar */}

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
        <div className={`nav-links ${isOpen ? 'active' : ''}`}
          style={{ background: darkMode ? '#222' : '#fff', color: darkMode ? '#f4f4f4' : '#222' }}
        >
          <NavLink to="/" end activeclassname="active" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/about" activeclassname="active" onClick={closeMenu}>About</NavLink>
          <NavLink to="/services" activeclassname="active" onClick={closeMenu}>Services</NavLink>
          <NavLink to="/portfolio" activeclassname="active" onClick={closeMenu}>Projects</NavLink>
          <NavLink to="/contact" activeclassname="active" onClick={closeMenu}>Contact</NavLink>
        </div>

        {/* Dark Mode Toggle - works everywhere */}
        <button 
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
          style={{ color: darkMode ? '#f4f4f4' : '#222' }}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>

        {/* Mobile Menu Overlay */}
        {isOpen && isMobile && (
          <div className="mobile-overlay" onClick={closeMenu} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
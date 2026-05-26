// Navbar.jsx (updated version with CSS classes)
import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useDarkMode } from "./DarkModeContext";
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen && isMobile) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [isOpen, isMobile]);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: 'Home', path: '/', end: true },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/portfolio' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-content">
            {/* Logo / Brand */}
            <div className="logo-container"></div>

            {/* Desktop Navigation */}
            <div className="desktop-nav">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.end}
                  onClick={closeMenu}
                  className={({ isActive }) => 
                    `nav-link ${darkMode ? 'nav-link-dark' : 'nav-link-light'} ${
                      isActive 
                        ? (darkMode ? 'nav-link-active-dark' : 'nav-link-active-light') 
                        : ''
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Right side actions */}
            <div className="navbar-actions">
              {/* Dark Mode Toggle Button */}
              <button
                onClick={toggleDarkMode}
                aria-label="Toggle dark mode"
                className={`theme-toggle ${darkMode ? 'theme-toggle-dark' : 'theme-toggle-light'}`}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>

              {/* Mobile menu button */}
              {isMobile && (
                <button
                  onClick={toggleMenu}
                  aria-label="Toggle menu"
                  className={`mobile-menu-btn ${darkMode ? 'mobile-menu-btn-dark' : 'mobile-menu-btn-light'}`}
                >
                  {isOpen ? <FaTimes /> : <FaBars />}
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay & Drawer */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mobile-backdrop"
              onClick={closeMenu}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className={`mobile-drawer ${darkMode ? 'mobile-drawer-dark' : 'mobile-drawer-light'}`}
            >
              <div className="mobile-nav-links">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    end={link.end}
                    onClick={closeMenu}
                    className={({ isActive }) => 
                      `mobile-nav-link ${darkMode ? 'mobile-nav-link-dark' : 'mobile-nav-link-light'} ${
                        isActive 
                          ? (darkMode ? 'mobile-nav-link-active-dark' : 'mobile-nav-link-active-light') 
                          : ''
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer */}
      <div className="navbar-spacer" />
    </>
  );
};

export default Navbar;
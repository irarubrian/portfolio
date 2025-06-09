import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 900);
    };

    checkIfMobile(); // Initial check
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen, isMobile]);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Hamburger menu button - only on mobile */}
      {isMobile && (
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      )}

      {/* Overlay - only when mobile menu is open */}
      {isMobile && menuOpen && (
        <div className="nav-overlay" onClick={handleMenuToggle} />
      )}

      {/* Navigation menu - always visible on desktop, conditionally on mobile */}
      <ul className={`nav-menu ${menuOpen && isMobile ? 'open' : ''}`}>
        <li><NavLink to="/" exact="true" activeclassname="active" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active" onClick={handleLinkClick}>About Me</NavLink></li>
        <li><NavLink to="/services" activeclassname="active" onClick={handleLinkClick}>Services</NavLink></li>
        <li><NavLink to="/portfolio" activeclassname="active" onClick={handleLinkClick}>Project</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active" onClick={handleLinkClick}>Contact</NavLink></li>
        
        {/* Dark mode toggle in mobile menu */}
        {isMobile && (
          <li className="nav-mobile-toggle">
            <button
              className="dark-mode-toggle"
              onClick={() => {
                toggleDarkMode();
                handleLinkClick();
              }}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? '☀️ Light' : '🌙 Dark'}
            </button>
          </li>
        )}
      </ul>

      {/* Dark mode toggle - desktop only */}
      {!isMobile && (
        <button
          className="dark-mode-toggle"
          onClick={toggleDarkMode}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
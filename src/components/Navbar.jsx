import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  // Handle window resize and menu open/close effects
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
      // Close menu when switching to desktop view
      if (window.innerWidth >= 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Hamburger icon - only visible on mobile */}
      {isMobile && (
        <button
          className="nav-hamburger"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={handleMenuToggle}
          type="button"
          style={{ zIndex: 106 }}
        >
          {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
        </button>
      )}

      {/* Hamburger menu overlay for mobile */}
      {menuOpen && isMobile && (
        <div className="nav-overlay" onClick={handleMenuToggle} />
      )}

      {/* Navigation menu - always visible on desktop, conditionally on mobile */}
      <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
        <li><NavLink to="/" exact="true" activeclassname="active" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active" onClick={handleLinkClick}>About Me</NavLink></li>
        <li><NavLink to="/services" activeclassname="active" onClick={handleLinkClick}>Services</NavLink></li>
        <li><NavLink to="/portfolio" activeclassname="active" onClick={handleLinkClick}>Project</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active" onClick={handleLinkClick}>Contact</NavLink></li>
        
        {/* Dark mode toggle - only shown in mobile menu */}
        {isMobile && (
          <li className='nav-mobile-toggle'>
            <button
              className='dark-mode-toggle'
              onClick={() => { toggleDarkMode(); setMenuOpen(false); }}
              title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {darkMode ? '\u2600\ufe0f Light' : '\ud83c\udf19 Dark'}
            </button>
          </li>
        )}
      </ul>

      {/* Dark mode toggle - only shown on desktop */}
      {!isMobile && (
        <button
          className='dark-mode-toggle'
          onClick={toggleDarkMode}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? '\u2600\ufe0f Light' : '\ud83c\udf19 Dark'}
        </button>
      )}
    </nav>
  );
};

export default Navbar;
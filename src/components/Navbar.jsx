import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom'; 
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleMenuToggle = () => setMenuOpen((prev) => !prev);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      {/* Hamburger icon always visible on mobile */}
      <button
        className="nav-hamburger"
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={handleMenuToggle}
        type="button"
        style={{ zIndex: 106, display: 'block' }}
      >
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Hamburger menu overlay for mobile */}
      {menuOpen && <div className="nav-overlay" onClick={handleMenuToggle} />}

      {/* Hamburger menu navigation for mobile */}
      <ul className={`nav-menu${menuOpen ? ' open' : ''}`} style={{ display: menuOpen ? 'flex' : 'none' }}>
        <li><NavLink to="/" exact="true" activeclassname="active" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active" onClick={handleLinkClick}>About Me</NavLink></li>
        <li><NavLink to="/services" activeclassname="active" onClick={handleLinkClick}>Services</NavLink></li>
        <li><NavLink to="/portfolio" activeclassname="active" onClick={handleLinkClick}>Project</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active" onClick={handleLinkClick}>Contact</NavLink></li>
        <li className='nav-mobile-toggle'>
          <button
            className='dark-mode-toggle'
            onClick={() => { toggleDarkMode(); setMenuOpen(false); }}
            title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {darkMode ? '\u2600\ufe0f Light' : '\ud83c\udf19 Dark'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

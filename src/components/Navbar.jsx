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
    <nav className={`navbar${darkMode ? ' dark' : ''}`}> 
      <div className='nav-left'>
        {/* Logo removed as requested */}
      </div>

      {/* Hamburger icon for mobile */}
      <button
        className='nav-hamburger'
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        onClick={handleMenuToggle}
        type="button"
        style={{ zIndex: 103 }}
      >
        {menuOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
      </button>

      {/* Overlay for mobile menu */}
      {menuOpen && <div className="nav-overlay" onClick={handleMenuToggle} />}

      <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
        <li><NavLink to="/" exact="true" activeclassname="active" onClick={handleLinkClick}>Home</NavLink></li>
        <li><NavLink to="/about" activeclassname="active" onClick={handleLinkClick}>About Me</NavLink></li>
        <li><NavLink to="/services" activeclassname="active" onClick={handleLinkClick}>Services</NavLink></li>
        <li><NavLink to="/portfolio" activeclassname="active" onClick={handleLinkClick}>Project</NavLink></li>
        <li><NavLink to="/contact" activeclassname="active" onClick={handleLinkClick}>Contact</NavLink></li>
        {/* Move dark mode toggle into menu for mobile */}
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

      {/* Desktop only dark mode toggle */}
      <div className='nav-right'>
        <button
          className='dark-mode-toggle'
          onClick={toggleDarkMode}
          title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {darkMode ? '\u2600\ufe0f Light' : '\ud83c\udf19 Dark'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

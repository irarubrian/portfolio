
import logo from '../assets/logo.svg';

import React from 'react';
import { Link, NavLink } from 'react-router-dom'; 


const Navbar = ({ toggleDarkMode, darkMode }) => {
    return (
        <nav className={`navbar ${darkMode ? 'dark' : ''}`}>
            <div className='nav-left'>
                <img src={logo} alt="Logo" className='nav-logo' />
            </div>

            <ul className='nav-menu'>
                <li><NavLink to="/" exact="true" activeclassname="active">Home</NavLink></li>
                <li><NavLink to="/about" activeclassname="active">About Me</NavLink></li>
                <li><NavLink to="/services" activeclassname="active">Services</NavLink></li>
                <li><NavLink to="/portfolio" activeclassname="active">Portfolio</NavLink></li>
                <li><NavLink to="/contact" activeclassname="active">Contact</NavLink></li>
            </ul>

            <div className='nav-right'>
                <button
                    className='dark-mode-toggle'
                    onClick={toggleDarkMode}
                    title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                >
                    {darkMode ? '☀️ Light' : '🌙 Dark'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;

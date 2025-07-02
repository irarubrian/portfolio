import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer.jsx';
import './App.css';
import './components/Navbar.css';

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Use prefers-color-scheme for initial dark mode on mobile/desktop
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  // Prevent horizontal scroll and force 100vw on mobile
  React.useEffect(() => {
    document.documentElement.style.maxWidth = '100vw';
    document.body.style.maxWidth = '100vw';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  }, []);

  // Sync dark mode class on <html> for mobile/desktop
  React.useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </Router>
    </div>
  );
};

export default App;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer'; // ← ADD THIS IMPORT

import { DarkModeProvider, useDarkMode } from './components/DarkModeContext.jsx';

import './App.css';
import './components/Navbar.css';

const AppContent = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  // Prevent horizontal scroll
  useEffect(() => {
    document.documentElement.style.maxWidth = '100vw';
    document.body.style.maxWidth = '100vw';
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
  }, []);

  return (
    <div className={darkMode ? 'app dark-mode' : 'app'}>
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        
        <Footer /> {/* ← ADD THIS - Footer will appear on all pages */}
      </Router>
    </div>
  );
};

const App = () => {
  return (
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
};

export default App;
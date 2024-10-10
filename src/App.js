import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import FAQPage from './FAQPage';
import HomePage from './HomePage';
import GalleryPage from './Gallery';
import ContactPage from './ContactPage';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="navigation">
      {/* Hamburger menu icon visible only on mobile */}
      <div className="hamburger-menu" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <div className="hamburger-icon">
          {/* Three lines representing the hamburger icon */}
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Existing navigation for desktop/tablet */}
      <div className="left-nav">
        <hr className="left-hr" />
        <div className="nav-links-left">
          <Link to="/">Home</Link>
          <Link to="/gallery">Gallery</Link>
        </div>
      </div>
      <div className="center-nav">
        <div className="logo">
          <Link to="/">
            <img src={require("./Images/TheDukeGold.png")} alt="theDuke Logo" />
          </Link>
        </div>
      </div>
      <div className="right-nav">
        <hr className="right-hr" />
        <div className="nav-links-right">
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
          <Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
          <Link to="/faq" onClick={() => setIsMobileMenuOpen(false)}>FAQ</Link>
        </div>
      )}
    </div>
  );
}


function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== '/contact' && <Navbar />}

      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;


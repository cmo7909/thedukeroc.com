import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import FAQPage from './FAQPage';
import HomePage from './HomePage';
import GalleryPage from './Gallery';
import ContactPage from './ContactPage';

function Navbar() {
  return (
    <div className="navigation">
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
    </div>
  );
}

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Conditionally render the navbar, excluding it on specific pages (e.g., '/contact') */}
      {location.pathname !== '/contact' && <Navbar />}

      {/* Wrap the Routes inside a .main-content div */}
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


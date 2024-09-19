import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FAQPage from './FAQPage';
// import GalleryPage from './GalleryPage';  
// import ContactPage from './ContactPage';


function App() {
  return (
    <Router>
    <div className="App">
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
    

    <Routes>
      {/* <Route path="/" element={<HomePage/>} />
      <Route path="/gallery" element={<GalleryPage/>} />
      <Route path="/contact" element={<ContactPage/>} /> */}
      <Route path="/faq" element={<FAQPage/>} />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
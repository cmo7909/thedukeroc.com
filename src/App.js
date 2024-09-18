import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


function App() {
  return (
    <div className="App">
      <div className="navigation">
        <div className="left-nav">
          <hr className="left-hr" />
          <div className="nav-links-left">
            <a href="#home">Home</a>
            <a href="#gallery">Gallery</a>
          </div>
        </div>
        <div className="center-nav">
          <div className="logo">
            <img src={require("./Images/TheDukeGold.png")} alt="theDuke Logo" />
          </div>
        </div>
        <div className="right-nav">
          <hr className="right-hr" />
          <div className="nav-links-right">
            <a href="#contact">Contact</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
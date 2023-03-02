import React from 'react';
import '../styles/Navbar.css';


function Navbar() {
  return (
    
    <nav className="navbar">
    <div className="navbar-logo">Safwan</div>
    <ul className="navbar-nav">
      <li className="nav-item"><a href="#home">Home</a></li>
      <li className="nav-item"><a href="#skills">Skills</a></li>
      <li className="nav-item"><a href="#projects">Projects</a></li>
      <li className="nav-item"><a href="#contact">Contact</a></li>
    </ul>
  </nav>
    
    
  )
}

export default Navbar
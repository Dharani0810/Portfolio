import React from 'react'
import { useState } from 'react';
import icon from '../Assests/Dlogo.png'


 function Navbars() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='Navbars'>
      <div className="Navbar1">
        <img src={icon} alt="image is not found" />
        <h2>Dharani</h2>
      </div>
      <div className="Navbar2">
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/skills">Skills</a>
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
          <a href="/contact"><button>Let's Talk</button></a>
        </div>
      </div>
    </div>
  )
}
export default Navbars

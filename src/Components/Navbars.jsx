import React from 'react'
import image from '../Assests/D logo.png'


 function Navbars() {
  return (
    <div className='Navbars'>
      <div className="Navbar1">
        <img src={image} alt="image is not found" />
        <h2>Dharani</h2>
      </div>
      <div className="Navbar2">
      <a href="/">Home</a>
        <a href="/#about" >About</a>
        <a href="/skills">Skills</a>
        <a href="/projects" >Projects</a>
        <a href="/contact">Contact</a>
        <a href="/contact"><button>Let's Talk</button></a>
      </div>
    </div>
  )
}
export default Navbars

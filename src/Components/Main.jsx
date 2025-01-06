import React from 'react'
import '../Styles/Main.css';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

function Main() {
  return (
    
    <div className='Main'>        
        <Navbar />
        <Home/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>

    </div>
  
  )
}
export default Main;
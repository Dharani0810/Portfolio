import React from 'react'
import '../Styles/Main.css';
import funtastic from '../Assests/funtastic.png';
import thancos from '../Assests/thancos.png';
import Tomato from '../Assests/Tomato.png';
function Projects() {
  return (
    <div className='Projects'>
       <h1>Projects</h1>
       <div className="Projects-content">
          <div className="p1">
              <div className="sec1">
                <img src={Tomato} alt="" />
               </div>
                       <h1>Tomato</h1>
                       <p>Designed and Implemented web application for an Food Delivery web application</p>
                       <a href="https://food-delivery-14-frontend.onrender.com"><button>Learn more</button></a> 
          </div>
          <div className="p2">
              <div className="sec2">
                <img src={thancos} alt="" />
              </div>
                      <h1>Thancos</h1>
                      <p>Designed and Implemented a clone web page on Thancos Ice Cream web application</p>
                      <button>Learn more</button>
        </div>
        <div className="p3">
                <div className="sec3">
                <img src={funtastic} alt="" />
                </div>
                      <h1>Funtastic</h1>
                      <p>Designed and Implemented web application for an entertainment purpose</p>
                      <button>Learn more</button>
        </div>
       </div>

    </div>
  )
}

export default Projects

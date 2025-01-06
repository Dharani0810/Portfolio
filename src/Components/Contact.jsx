import React from 'react';
import '../Styles/Main.css';
import { CiFacebook } from "react-icons/ci";
import { VscGithub } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { GoMail } from "react-icons/go";
import { SiInstagram } from "react-icons/si";
import { FaPhoneVolume } from "react-icons/fa6";
import contact from '../Assests/contact.jpg';

function Contact() {
  return (
    <div className='Contact'>
      <h1>Contact</h1>
      <div className="Contact-content">
      
        <div className="por1">
           <div className="photosec">
              <img src={contact} alt="" />
           </div>
           <div className="icons1">
              <GoMail/><p>sdharani102002gmail.com</p>
              <FaPhoneVolume/><p>9843563558</p>
           </div>
           <div className="icons2">
              <CiFacebook/><VscGithub/><CiLinkedin/><SiInstagram/>
            </div>
        </div>

        <div className="por2">
          <form action="">
            <h1>Drop Me a Line</h1>
            <input type="text" placeholder="Your name" required/>
            <input type="email" placeholder="Your Email" required/>
            <input type="text" placeholder="Subject" required/>
            <textarea placeholder="Message" rows={5} cols={32} required />
            <br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

import React from 'react'
import '../Styles/Main.css';
import html from '../Assests/html.png';
import css from '../Assests/css.png';
import javascript from '../Assests/javascript.png';
import mongodb from '../Assests/mongodb.png';
import express from '../Assests/express.png';
import react from '../Assests/react.png';
import node from '../Assests/node.png';

function Skills() {
  return (
    <div className='Skills'>
      <h1>Skills</h1>
      <div className="Skills-content">

          <div className="HTML">
            <img src={html} alt="" />
            <h2>HTML</h2>
          </div>

          <div className="CSS">
            <img src={css} alt="" />
            <h2>CSS</h2>
          </div>

          <div className="JavaScript">
            <img src={javascript} alt="" />
            <h2>JavaScript</h2>
          </div>

          <div className="MongoDB">
            <img src={mongodb} alt="" />
            <h2>MongoDB</h2>
          </div>

          <div className="ExpressJS">
            <img src={express} alt="" />
            <h2>ExpressJS</h2>
          </div>

          <div className="ReactJS">
            <img src={react} alt="" />
            <h2>ReactJS</h2>
          </div>

          <div className="NodeJS">
            <img src={node} alt="" />
            <h2>NodeJS</h2>
          </div>

      </div>
      {/* <marquee behavior="scroll" direction="left" >Portfolio   Portfolio Portfolio Portfolio</marquee> */}
    </div>
  )
}

export default Skills

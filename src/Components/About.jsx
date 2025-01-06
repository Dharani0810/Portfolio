import React from 'react'
import '../Styles/Main.css'

function About() {
  return (
    <div className='About'>
       <div className="About-content">
        <h1>About</h1>
        <p> An ambitious and self-motivated web developer with a considerable technical skill who
            possesses self-discipline and ability to work with minimum of supervision. Able to play a key 
            role in website development to ensure maximum accessibility, user experience and usability. 
             A quick learner who can absorb new ideas and can communicate clearly and effectively. </p>
    </div>
    <div className="vertical_line"></div>
    <div className="Education">
        <h1>Education</h1>
        <div class="education-box">
      <h3>Undergraduate</h3>
      <p>K S R Institute for Engineering and Technology , 2020-2024</p>
      <p>Percentage:83%</p>
      <p>B.E Computer Science and Technology</p>
    </div>
    <div class="education-box">
      <h3>Higher Secondary</h3>
      <p>Sri Vidya Mandir Matric.Hr.Sec.School,2019-2020</p>
      <p>Percentage:67%</p>
      <p>Mathematics-Biology</p>
    </div>
    <div class="education-box">
      <h3>Senior Secondary</h3>
      <p>Paavai Matric.Hr.Sec.School,2017-2018</p>
      <p>Percentage:72%</p>
      <p>StateBoard</p>
    </div>
      </div>
     </div>
  )
}

export default About

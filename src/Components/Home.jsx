import React from 'react';
import myresume from '../Assests/CV_Dharani.pdf';

function Home() {
  return (
    <div className='Home'>
      <div className='Main-content'>
        <h4>Hi..! I am</h4>
        <h1>Dharani</h1>
        <h1>MERN Stack Developer</h1>

  
        <a href="#contact">
          <button>Get in touch</button>
        </a>

        {/* Resume download */}
        <a href={myresume} download="Dharani_CV.pdf">
          <button>CV / RESUME</button>
        </a>
      </div>

      <div className="photo">
        {/* add image here if needed */}
      </div>
    </div>
  );
}

export default Home;

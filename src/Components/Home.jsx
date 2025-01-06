import React from 'react'
import myresume from '../Assests/Dharani S RESUME5.pdf';
function Home() {
  return (
    <div className='Home'>
        <div className='Main-content'>
            <h4>Hi..! I am</h4>
            <h1>Dharani</h1>
            <h1>MERN Stack developer </h1>
            <a href=''><button>get in touch</button></a>
            <a href={myresume} download={myresume}><button>CV/RESUME</button></a>
        </div> 
        <div className="photo">

        </div>
    </div>
  )
}

export default Home

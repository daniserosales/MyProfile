import React from 'react';
import "./index.css"
import {Navbar, Lines} from '../../components'

const Homepage = () => {
  return (
    <>
  <Navbar />
  {/* <TextMorph /> */}
  <Lines />
  <div className='homepageBody'>
  
    <img className='danimg' src="../../dan@3x.png" alt="daniseimage" width="500" />
    <div className='mobile-container'>
      
    </div>
    <div class="text-zone-container">
    <h2 className='h2'>I'm</h2>
    <div className='name'>
      <h1 className='danise'>Danise Rosales</h1>
    </div>
    <div className='p'>
      <p className='introduction'> architect of the digital wonderland, fashioning enchanting user interfaces and conjuring powerful code incantations in both frontend and backend realms.</p>
    </div>
    </div>
    <div className="shape">
    <img className='daniseALT' src="../../DaniseALT.png" alt="alternateImage" />
      <div className='circle1'>
        <div className='circleALT'></div>
        <div className='circle2'>
        </div>
      </div>
    </div>
  </div>
</>

  );
};

export default Homepage;

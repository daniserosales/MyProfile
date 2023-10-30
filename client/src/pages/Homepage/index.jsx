import React from 'react';
import "./index.css"

const Homepage = () => {
  return (
    <>
    <div className='homepageBody'>
    <img className='danimg' src="../src/assets/dan@3x.png" alt="daniseimage" width="500"/>
    <h2 className='h2' >I'm</h2>
    <h1 className='danise'>Danise Rosales</h1>
    <p className='introduction'>I'm the architect of the digital wonderland, fashioning enchanting user interfaces and conjuring powerful code incantations in both frontend and backend realms.</p>
    
    < div className='circle1'></div>
    <div className='circle2'></div>
    </div>
    </>
  );
};

export default Homepage;

import React from 'react';
import "./index.css"
import {Navbar, Lines, Buttons} from '../../components'

const Homepage = () => {
  return (
    <>
  {/* <Navbar /> */}
  
  <div className="area" >
              <ul className="circles">
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
              <ul className="triangle">
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
              <ul className="cross">
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
              <ul className="square">
                      <li></li>
                      <li></li>
                      <li></li>
              </ul>
      </div >
  <Lines></Lines>
  
  <div className='homepageBody'>
  <div className='welcome'>Welcome</div>
    {/* < div className='image-container'>
  {/* <img className='danimg' src="../../dan@3x.png" alt="daniseimage" width="500" /> */}
  {/* </div>
  <div className='mobile-container'></div> */} */
  <div class="text-zone-container">
    
    <div className='name'>
      <h1 className='danise'>Danise Rosales</h1>
      </div>
    <div className='p'>
      <p className='introduction'> 
        <div><span> Code </span></div>
        <div><span>Build </span></div>
        <div><span>Deploy</span> </div>   
      </p>
    </div>
    
  </div>
  
   <Buttons />
</div>

</>

  );
};

export default Homepage;

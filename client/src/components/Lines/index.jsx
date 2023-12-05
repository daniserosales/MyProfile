import './index.css'
import React from 'react'


const Lines = () => {
    return (
        <>
            <div class="light" contenteditable>
                <div class='line1'></div>
                <div class='line2'></div>
                <div class='line3'></div>
                <div className='line4-container'>
            <div className='line4'></div>
        </div>
                <svg class="svg" viewBox="0 39 100 28">
  <path d="
    M 0, 40
    L 70, 40
    
    L 90, 45
   
    L 100, 45
  "></path>
</svg>

<svg class="svg2" viewBox="0 39 100 60">
  <path d="
    M 0, 40
    L 70, 40
    
    L 80, 40
   
    L 100, 45
  "></path>
</svg>

        
</div>
        
        </>
    )
}

export default Lines;

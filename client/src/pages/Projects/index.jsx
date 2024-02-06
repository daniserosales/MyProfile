import React, {useState} from 'react';
import "./index.css"
import { PopUpYear } from '../../components';

function ProjectSpelling() {
      
    const [popupVisible, setpopupVisible] = useState(false);

    const togglePopup = () => {
        
        setTimeout(() => {
            setPopupVisible(!popupVisible);
        }, 900); // Adjust the delay time (in milliseconds) as needed
    }
    return (
        <>
        <div className='spelling-proj-container'>
       
            <h2 className='spelling-word'>Spellscape</h2>
            
            <PopUpYear togglePopup={togglePopup}/>
            
        </div>
       
        
        </>
    )
}

export default ProjectSpelling; 

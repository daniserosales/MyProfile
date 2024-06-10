  import React, {useState} from 'react';
  import "./index.css";


  // const year = ['1', '2', '3','4','5','6'];
  // const term = ['Autumn', 'Summer', 'Spring', 'Random'];

  function PopUpYear({onSelectYear}) {
  const [windowVisible, setWindowVisible] = useState(false);
    const [checkboxStates, setCheckboxStates] = useState({
      year1: false,
      year2: false,
      year3: false,
      year4: false,
      year5: false,
      year6: false,
    });

    const [clicked, setClicked] = useState(false);

    const openWindow = () => {
    setWindowVisible(true);
        setTimeout(() => document.querySelector('.window-overlay').classList.add('visible'), 50);
        setTimeout(() => document.querySelector('.blurred-background').classList.add('visible'), 50);
        
    }
    const isAnyCheckboxChecked = () => {
      return Object.values(checkboxStates).some((checked) => checked);
    };
    const startButtonClick = () => {
      // Handle the start button click event
    };
  const closeWindow = () => {
    // Add this line to remove the visible class when the pop-up closes
    document.querySelector('.window-overlay').classList.remove('visible');
    // Set the windowVisible state after the transition duration
    setTimeout(() => setWindowVisible(false), 500);
  }

    const handleCheckboxChange = (year) => {
      setCheckboxStates((prevStates) => ({
        ...prevStates,
        [year]: !prevStates[year],
      }));
      onSelectYear(year);
    }

    return (
      <>
      <button className='enter-spelling' onClick={openWindow}>Enter</button>
      {windowVisible && (
          <div className='blurred-background'>
        <div className='window-overlay'>
          <div className='window'>
          <p>Choose Your Level</p> 
                
                  <div className='spelling-difficulty'>
                  {Array.from({ length: 6 }, (_, index) => index + 1).map((year) => (
                    <p key={year} className={`year-${year}-checkbox`}>
                      Year {year} <br />
                      <img
                        className={`year-logo ${checkboxStates[`year${year}`] ? 'box-clicked' : ''}`}
                        src={`../../../year-${year}-logo.png`}
                        alt={`Year ${year} Logo`}
                        onClick={() => handleCheckboxChange(`year${year}`)}
                      />
                      <input className="hidden-checkbox" type="checkbox" checked={checkboxStates[`year${year}`]} onChange={() => handleCheckboxChange(`year${year}`)} />
                    </p>
                  ))}
                </div>

              <div className='spelling-rule-container'>
                <div className='start-button-container'>
                  <button className={`start-button ${isAnyCheckboxChecked() ? '' : 'start-button-disabled'}`} onClick={startButtonClick} disabled={!isAnyCheckboxChecked()}>Start</button> </div> 
            <div className='close-button-container'>
            <button className="close-level-button"onClick={closeWindow}>Cancel</button>
            </div>
            </div>
          </div>
        </div>
        </div>
      )}

      </>
    )
  }
  export default PopUpYear;

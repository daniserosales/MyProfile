import "./index.css"
import React from "react"
import { NavLink, useNavigate } from "react-router-dom"

function Buttons() {

    return (
        <>
            <div className="buttons">
                <div className="project-container">
                    <NavLink to="/project" className="project" >
                        <img className="project-icon" src="./../rocket.png" alt="project"></img>
                    </NavLink>  
                </div>
                <div className="cv-container">
                <NavLink to="/resume" className="resume" >
                        <img className="resume-icon" src="./../resume.png" alt="resume"></img>
                    </NavLink>  
                </div>
                <div className="contact-container">
                <NavLink to="/contact" className="contact" >
                        <img className="mail-icon" src="./../mail.png" alt="mail"></img>
                    </NavLink>  
                </div>
            </div>
        </>
    )
}

export default Buttons

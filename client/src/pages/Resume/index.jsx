import React from 'react'
import { NavLink, useNavigate, Link } from 'react-router-dom'
import "./index.css"
const Resume = () => {

    return(
        <>
            <div className='resume-container'>
                <div className='resume-1'>
               
                    <div className='heading'>
                        Danise Rosales
                    </div>
                
                    <div className='resume-line-container'>
                    <div className='resume-line'></div>
                    </div>
                    <div className='body-resume'>
                        <div className='connect-me'>
                            
                           <Link to="https://www.linkedin.com/in/danise-rosales-0253b6254/" >LinkedIn - Danise Rosales</Link>
                           <br />
                        </div>
                        <div className='experience-container'>
                           <span className='experience'> Experience </span> <br />
                             <p className='exp-title-1'><b>Tech Trainee </b> <br />
                            May 2023 - August 2023 <br />
                            La Fosse Academy London, The U.K. <br /> <span className='description'>Participated in a comprehensive 12-week intensive training program that encompassed vital subjects in the tech industry, such as web development, architectural thinking, and infrastructure. This training included collaborative team projects, aligning with Agile principles for effective project management. </span>
                                <ul className='unordered-list'>
                                    <li className='list-1'>	Learned JavaScript, HTML, CSS, SQL, Python, Node Express, React and Redux</li>
                                    <li className='list-2'>	Made end-to-end projects with teams of 4-5 using Agile approach</li>
                                </ul>
                                <br />
                                
                                </p>
                            <p className='exp-title-2'><b>Course Coordinator </b>
                            <br />
                            September 2017 - October 2022 
                           
                            <br />
                            JPREP A+ Tokyo, Japan
                            <br />
                            <span className='description'>
                            A private education institution that offers a high-quality education for Japanese students whose parents wish them to be bilingual. It teaches English, and also offers other academic and extra-curricular subjects in English.</span>
                            <ul className='unordered-list'>
                                <li>	Supervised weekly meetings with teachers to better understand how to support them. </li>
                                <li>	Drew up effective teaching schedules which enabled new teachers to orientate themselves quickly. </li>
                            </ul>
                            </p>
                            <br />
                            <p className='exp-title-3'>
                                <b>Language Teacher </b>
                                <br />
                                March 2017 - March 2020 
                                <br />
                                Interac Kanto South Yokohama, Japan
                                <br />
                                <span className='description'>
                                A private company which contracts to provide language teachers to education authorities and state schools throughout Japan. </span>
                                <ul className='unordered-list'>
                                    <li>Planned, prepared and delivered English lessons, motivating children to engage with the early stages of language learning</li>
                                </ul>

                            </p>
                            <br />
                            <span className='education'>Education/ Training</span>
                            <br /> 
                            <p className='education-description'>
                                <b>Tertiary</b><br />
                                De LaSalle University, Philippines - Secondary Education Major in English <br /><br />
                                <b>Training</b> <br />
                                November 2023 - TigerLily Paediatric First Aid Training <br />
                                October 2023 - AWS Cloud Essentials <br />
                                August 2023 - La Fosse Tech Trainee 

                            </p>
                            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        </div>
                        <div className='project'>

                        </div>
                        <div className='skills-container'>
                        <span className='soft-skills'>Soft Skills </span><br />
                        <p>
                            <ul className='ul-skills'>
                                <li>Decision Making</li>
                                <li>Delegation</li>
                                <li>Team Planning</li>
                                <li>Problem Solving</li>
                                <li>Effective Communicator</li>
                                <li>Presentations</li>
                                <li>Collaboration</li>
                                <li>Facilitation</li>
                            </ul>
                        </p><br />
                        <span className='soft-skills'>Hard Skills </span><br />
                        <ul className='ul-skills'>
                                <li>HTML/CSS</li>
                                <li>JavaScript</li>
                                <li>React</li>
                                <li>SQL</li>
                                <li>Database Management</li>
                                <li>NodeExpress</li>
                                <li>RestAPI</li>
                                <li>Vite</li>
                                <li>Firebase</li>
                                <li>AWS Cloud Essentials</li>
                                <li>Version Control</li>
                                <li>FrontEnd</li>
                                <li>BackEnd</li>
                                
                            </ul>
                        </div>
                       

                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume

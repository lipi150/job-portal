import React from 'react'
import './Jobcard.css'
import {IoMdArrowDropdown} from 'react-icons/io'
import { useState } from 'react'
const Jobcard = ({job_title,location,company_name,stipend_salary,experience,qualification,job_description,closing_date, comapny_desc, company_logo}) => {
  
    const [infoVisible, setInfoVisible] = useState(false);
    const toggleInfo = ()=>{
        setInfoVisible(!infoVisible);
    }

    return (
    <>
    <div className='card' onClick={toggleInfo}>
        <div className='card-top'>
             <div className='card-img'><img src={company_logo} alt=''/></div>
               <div className='job-title'>
                   <div className='job-title-1'>{job_title}</div>
                   <div className='job-title-2'>{company_name}</div>
                   <div className='job-title-3'>{location}</div>
             </div>
             <div className='dropdown-i'><i><IoMdArrowDropdown/></i></div>

        </div>
        <div className='card-bottom'>
              <div className='experience-out'><div className='experience'><label>{experience}</label> Experience</div></div>
              <div className='salary-out'><div className='salary'>{stipend_salary}</div></div>
        </div>
        {infoVisible && (
               <div className='info'>
               <div>
                   <h3>DESCRIPTION OF JOB</h3>
                   <p>{job_description}</p>
               </div>
               <div>
                   <h3>APPLICATION CLOSE</h3>
                   <p>{closing_date}</p>
               </div>
               <div>
                   <h3>QUALIFICATION REQUIRED</h3>
                   <p>{qualification}</p>
               </div>
               <div>
                   <h3>ABOUT THE ORGANISATION</h3>
                   <p>{comapny_desc}</p>
               </div>
               <div className='btn'>
                    <button className='apply'>APPLY NOW</button>
               </div>
    
        </div>
        )}
        
    </div>

    
    </>
  )
}

export default Jobcard
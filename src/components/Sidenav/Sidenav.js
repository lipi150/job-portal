import React from 'react'
import './Sidenav.css'
import { useState } from 'react';
const Sidenav = () => {

    const [infoVisible, setInfoVisible] = useState(false);
    const toggleInfo = (infoType) => {
        setInfoVisible((prevState)=>({
            ...prevState,
            [infoType]: !prevState[infoType],
        }));
    }

    return (
        <div className='side-nav'>
            <div className='side-nav-comp'>
                <div><h2>Listing Categories</h2></div>
                <div className='inp'>
                    <div className='inp-val'><input type='radio' className='custom-radio' /><label>Design</label></div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>ML</label></div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Marketing</label></div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Finance</label></div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Technology</label></div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Engineering</label></div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Business</label></div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Human Resources</label></div>

                </div>
            </div>
            <div className='border'></div>
            <div>
                <div><h2>Listing Type</h2></div>
                <div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Project</label></div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Internship</label></div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Startup</label></div>
                </div>
            </div>
            <div className='border'></div>
            <div className='pay-type'>
                <div><h2>Pay Type</h2></div>
                <div>
                    <div className='inp-val'> <input type='radio' className='custom-radio' /><label>Partnership/Collab</label></div>
                    <div className='inp-val'>
                        <input type='radio' className='custom-radio' onClick={()=>toggleInfo('equity')} /><label>Equity</label>

                    </div>
                </div>
                {infoVisible.equity && (
                    <div>
                        <div><input type='range' min='0' max='100' className='custom-range' /></div>
                        <div className='inp-range'>
                            <div><p>0%</p></div>
                            <div><p>100%</p></div>
                        </div>
                    </div>
                )}

                <div className='inp-val'>
                    <input type='radio' className='custom-radio' onClick={()=>toggleInfo('stipend')} /><label>Stipend</label>

                </div>

                {infoVisible.stipend && (
                    <div>
                        <div><input type='range' min='0' max='100' className='custom-range' /></div>
                        <div className='inp-range'>
                            <div><p>0%</p></div>
                            <div><p>100%</p></div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Sidenav
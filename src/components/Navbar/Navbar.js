import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='nav-left'>
             <div className='nav-left-1'>Seek Job</div>
        </div>
        <div className='nav-right'>
            <div className='nav-right-1'>Login/Sign Up</div>
        </div>
    </div>
    <div className='nav-bg'>
        <div className='search'>
             <input type='search' placeholder='Type to search.......'/>
             <button>Search</button>
        </div>
    </div>
    </>
  )
}

export default Navbar
import React from 'react'
import Logo from '../logo/Logo'
import Navbar from '../Navbar/Navbar'

const links = [
    {
        link:"Home",
        
    },
    {
        link:"Departments",
    },
    {
        link:"Doctors ",
    },
    {
        link:"About",
    },
    {
        link:"Contact",
    },
]
const Header = () => {
  return (
    <header id='header' className='fixed-top'>
            <div className="container d-flex align-items-center justify-center">
                 <Logo/>
                 <Navbar links={links}/>
                 <a href="#" class="appointment-btn text-decoration-none">
                  <span>Make an Appointment</span></a>
                   <a href="#" class="appointment-btn  text-decoration-none"  >
                   <span class="d-none d-md-inline " >Login/ Signup</span></a>

            </div>
    </header>
  )
}

export default Header
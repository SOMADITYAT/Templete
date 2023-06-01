import React from 'react'

const Navbar = ({links}) => {
   
    
  return (
    <nav className='navbar navbar-expand-lg '>
        <ul className="navbar-nav ">
            {links.map((link) => (
              <li className="nav-item" >
                  <a  className="nav-link cursor-pointer" >{link.link}</a>
              </li>
            ))}
          </ul>


    </nav>
  )
}

export default Navbar
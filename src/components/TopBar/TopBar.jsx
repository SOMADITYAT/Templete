import React from 'react'
import { AiFillMail, AiFillMobile } from "react-icons/ai"
import SocialIcons from '../SocialIcons/SocialIcons'

const TopBar = () => {
  return (
    <div id='topbar' className='d-flex align-items-center fixed-top ' >
      <div className='container d-flex justify-content-between align-item-center '>
        <div className='contact  '>
          <AiFillMail className='icon' />
          <a href="#">cityhospital@example.com </a>
          <AiFillMobile className='icon' />
          <a href="#">+91 9988776655 </a>
        </div>

        <SocialIcons />

      </div>
    </div>
  )
}

export default TopBar
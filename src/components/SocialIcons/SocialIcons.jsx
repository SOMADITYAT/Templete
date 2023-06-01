import React from 'react'
import {FaTwitter ,FaFacebook , FaInstagram , FaLinkedin} from "react-icons/fa"

const SocialIcons = () => {
  return (
    <div className='sociallink d-flex gap-3 align-items-center'>
        <a href="#" className='Twitter'><FaTwitter/></a>
        <a href="#" className='Facebook'><FaFacebook/></a>
        <a href="#" className='Instagram'><FaInstagram/></a>
        <a href="#" className='Linkedin'><FaLinkedin/></a>
    </div>
  )
}

export default SocialIcons
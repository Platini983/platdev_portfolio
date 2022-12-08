import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";
import './header.css'


const SocialHandler = () => {
  return (
    <div className='header_social'>
        <a href="https://www.linkedin.com/in/michael-amponsah-27237a108" target="_blank" rel="noreferrer" > <BsLinkedin/> </a>
        <a href="https://github.com/Platini983/" target="_blank" rel="noreferrer"> <FaGithub /> </a>
        <a href="https://dribble.com"  target="_blank" rel="noreferrer"> <FiDribbble /> </a>
    </div>
  )
}

export default SocialHandler

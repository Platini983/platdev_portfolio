/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {FaToolbox} from 'react-icons/fa'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Navbar = () => {
  
  const [activeNav, setActiveNav] = useState('#')
  return (
    
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className = {activeNav === '#' ? 'active' : ''}> <AiOutlineHome/> </a>
      <a href='#about' onClick={() => setActiveNav('#about')} className = {activeNav === '#about' ? 'active' : ''}> <AiOutlineUser/> </a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className = {activeNav === '#experience' ? 'active' : ''}> <BiBook/> </a>
      <a href='#service' onClick={() => setActiveNav('#service')} className = {activeNav === '#service' ? 'active' : ''}> <RiServiceLine/> </a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className = {activeNav === '#portfolio' ? 'active' : ''}> <FaToolbox/> </a>
      <a href='#contact' onClick={() => setActiveNav('#contac')} className = {activeNav === '#contac' ? 'active' : ''}> <BiMessageSquareDetail/> </a>
    </nav>
  )
}

export default Navbar

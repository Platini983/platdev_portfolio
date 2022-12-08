import React from 'react'
import Resume from '../../assets/Amponsah_Michael_SCV.pdf'
import './header.css'

const BTA = () => {
  return (
    <div className='bta'>
        <a href={Resume} download className='btn'> Download CV </a>
        <a href="#contact" className='btn btn-primary'>let's talk</a>
    </div>
  )
}

export default BTA

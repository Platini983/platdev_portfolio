import React from 'react'
import './header.css'
import BTA from './BTA'
import PROFILE from '../../assets/platini-profile.png'
import SOCIAL from './SocialHandler'
import { Typewriter } from 'react-simple-typewriter'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello, I'm</h5>
        <h1>MICHAEL AMPONSAH</h1>
        <h5 className="text-light">
          <span style={{ fontWeight: 'bold' }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={['FrontEnd Developer 👨‍💻', 'UI / UX Designer 👨‍💻']}
              loop='infinitely'
              cursor
              cursorStyle='|'
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </h5>
        <BTA />

        <div className="profile">
          <img src={PROFILE} alt='profile' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        <SOCIAL />
      </div>
    </header>
  )
}

export default Header

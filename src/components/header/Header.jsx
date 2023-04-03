import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  var ReactRotatingText = require('react-rotating-text');
  return (
    <header>
      <div className="container header__container">
        <h5>HELLO I'M</h5>
        <h2>RASHID HUSSAIN</h2>
        <h2 className='text-light'>
          <ReactRotatingText items={['FullStack Developer', 'Freelancer', 'Career Guide']} /> 
        </h2>
        <CTA />
        <HeaderSocials/>
        <div className='me'>
          <img src={me} alt="me" />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
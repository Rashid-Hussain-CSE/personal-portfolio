import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {SiLeetcode} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/rashid-hussain-cse/' target='_blank'><BsLinkedin size={28}/> LinkedIn</a>
        <a href='https://github.com/Rashid-Hussain-CSE' target='_blank'><BsGithub  size={28}/> Github</a>
        <a href='https://leetcode.com/rashid_hussain_cse/' target='_blank'><SiLeetcode  size={28}/> LeetCode</a>
    </div>
  )
}

export default HeaderSocials
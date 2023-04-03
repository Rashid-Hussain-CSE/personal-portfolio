import React from 'react'
import './about.css'
import me from '../../assets/me2.jpg'
import {MdWorkOutline} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt='About image'/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'> 
              <MdWorkOutline className='about__icon'/>
              <h5>Experience</h5>
              <small>2.5+ years of Working</small>
            </article>

            <article className='about__card'> 
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <small>Btech in Computer Science</small>
            </article>

            <article className='about__card'> 
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>Completed 15+ projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni fugiat reprehenderit, 
            quod, aut inventore ullam dolor delectus iusto, dignissimos modi architecto tenetur porro 
            nostrum ipsum nam hic blanditiis eaque cupiditate!
          </p>
          <a href='#contact' className='btn btn-primary'>Let's Connect</a>
        </div>
      </div>
    </section>
  )
}

export default About
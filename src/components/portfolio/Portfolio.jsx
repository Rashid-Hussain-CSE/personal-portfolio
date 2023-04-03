import React from 'react'
import './portfolio.css'
import img1 from '../../assets/img1.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'

const portfolio_items = [
  {
    id: 1,
    image: img1,
    title: "Lorem ipsum dolor sit amet",
    github: "https://github.com", 
    demo: "https://linkedin.com",
  },
  {
    id: 2,
    image: img2,
    title: "Lorem ipsum dolor sit amet",
    github: "https://github.com", 
    demo: "https://linkedin.com",
  },
  {
    id: 3,
    image: img3,
    title: "Lorem ipsum dolor sit amet",
    github: "https://github.com", 
    demo: "https://linkedin.com",
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">

      {
        portfolio_items.map(({id, image, title, github, demo}) => {
          return(
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
          )
        })
      }

      </div>
    </section>
  )
}

export default Portfolio
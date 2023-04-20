import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets2/portfolio01.png'
import IMG2 from '../../assets2/portfolio02.png'
import IMG3 from '../../assets2/Portfolio03.png'


const data = [
  {
    id: 1,
    image: IMG1,
    title: 'A calculator landing page website built with HTML, CSS and JS',
    github: 'https://github.com/Jamal-Lawal/JS-Calculator',
    demo: 'https://calculatorjstest.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'A Laundry Services landing page website built with HTML and CSS',
    github: 'https://github.com/Jamal-Lawal/clean-cruiz',
    demo: 'https://cleancruiz.netlify.app/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'A Fashion Company landing page website built with HTML and CSS',
    github: 'https://github.com/Jamal-Lawal/Abela',
    demo: 'https://abelang.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className="btn btn-primary" target='_blank' rel="noreferrer">Live Demo</a>
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
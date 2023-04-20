import React from 'react'
import './about.css'
import ME from '../../assets2/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-img"/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon"/>
              <h5>Experience</h5>
              <small>1 Year Working </small>
            </article>
            
            <article className="about__card">
              <VscFolderLibrary className="about__icon"/>
              <h5>Projects</h5>
              <small>4+ Projects</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam nisi corrupti consequuntur earum praesentium, voluptates voluptatibus ut sed quam? Enim, laboriosam quis? Sed tenetur aut deleniti aperiam totam possimus beatae?</p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default about
import React from 'react'
import ME from "../../assets/me-about.jpg"
import {FaAward, FaUser} from "react-icons/fa"
import {VscFolderLibrary} from "react-icons/vsc"
import "./about.css"
export const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className='about__card'>
              <FaUser className='about__icon' />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>80+ Completed </small>
            </article>
          </div>
          <p>
          Hello, <br /> I'm <b>Abu Hosain</b> , <br /> A frontend developer with 3 years of expertise in the MERN stack—MongoDB, Express.js, React, and Node.js. I excel in crafting dynamic, user-centric web applications, combining my design sensibilities with strong coding skills. Let's build captivating digital experiences together!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

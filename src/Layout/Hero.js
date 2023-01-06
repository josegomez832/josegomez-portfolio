import React from 'react'
import resume from './../assets/Jose_Gomez_Front_End_Developer.pdf'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import backgroundImage from './../assets/portfolio-hero.jpg'
export default function Hero() {
  return (
    <div className="hero" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="hero-inner">
            <div className='intro'>Hey, I'm Jose.</div>
            <h2>A modern developer based in Houston, Texas.</h2>
            <ul className='social-icon-list'>
              <li><a href="https://www.linkedin.com/in/josegomez1/"><FaLinkedinIn /></a></li>
              <li><a href="https://github.com/josegomez832"><FaGithub /></a></li>
            </ul>
            <p><a href={resume} className="btn btn-outline">Download CV</a></p>
      </div>
    </div>
  )
}

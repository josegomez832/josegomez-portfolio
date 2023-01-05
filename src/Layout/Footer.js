import React from 'react'
import './../Layout/Footer.scss'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

export default function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer">
      <div className='container'>
        <div className='social-icons-center'>
            <ul className='icon-list'>
              <li><a href="mailto:gomez.jose853@gmail.com"><FaRegEnvelope /></a></li>
              <li><a href="https://www.linkedin.com/in/josegomez1/"><FaLinkedinIn /></a></li>
              <li><a href="https://github.com/josegomez832"><FaGithub /></a></li>
            </ul>
        </div>
        <div className="copyright">
          <p>Jose Gomez &copy; {year}</p>
        </div>
      </div>
    </div>
  )
}

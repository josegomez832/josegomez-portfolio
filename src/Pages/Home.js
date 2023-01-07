import React from 'react'
import Hero from './../Layout/Hero'
import AboutMe from '../Layout/AboutMe'
import Projects from '../Layout/Projects'
import Experience from '../Layout/Experience'
import Footer from '../Layout/Footer'
//https://stackoverflow.com/questions/64468843/netlify-deployment-failed-during-stage-building-site-build-script-returned-n
export default function Home() {
  return (
    <div className="home-page">
        <Hero />
        <AboutMe />
        <Projects />
        <Experience />
        <Footer />
    </div>
  )
}

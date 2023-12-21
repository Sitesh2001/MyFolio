import React from 'react'
import Nav from './Nav'
import { Profile } from './Profile'
import About from './About'
import Skills from './Skills'
import { Certificates } from './Certificates'
import Projects from './Projects'
import Contact from './Contact'

export default function MainContainer() {
  return (
    <div>
        <Nav/>
        <Profile/>
        <About/>
        <Skills/>
        <Certificates/>
        <Projects/>
        <Contact/>
    </div>
  )
}

import React from 'react'
import Nav from './Nav'
import { Profile } from './Profile'
import About from './About'
import Skills from './Skills'

export default function MainContainer() {
  return (
    <div>
        <Nav/>
        <Profile/>
        <About/>
        <Skills/>
    </div>
  )
}

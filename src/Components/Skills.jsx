import React from 'react'
import { SubHeading } from './SubHeading'
import SkillContainer from './SkillContainer'

const Skills = () => {
  return (
    <div className='w-full flex flex-col text-center mt-20'>
        <SubHeading p = "Explore My" h1= "Skills"/>
        <div className='w-full h-full flex justify-center items-center gap-5'>
           <SkillContainer/> 
           <SkillContainer/> 
        </div>
    </div>
  )
}

export default Skills
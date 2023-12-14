import React from 'react'
import { SubHeading } from './SubHeading'
import SkillContainer from './SkillContainer'
import { SiHtml5 } from "react-icons/si";

const Skills = () => {
  let skillData = ["HTML5","CSS","JavaScript","React.js"]
  return (
    <div className='w-full flex flex-col text-center mt-20'>
        <SubHeading p = "Explore My" h1= "Skills"/>
        <div className='w-full h-full flex justify-center items-center gap-5'>
           <SkillContainer icon = {<SiHtml5 />} skill = {skillData[0]}/>
           <SkillContainer/> 
        </div>
    </div>
  )
}

export default Skills
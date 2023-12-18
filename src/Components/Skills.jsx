import React from 'react'
import { SubHeading } from './SubHeading'
import SkillContainer from './SkillContainer'
// import { SiHtml5 } from "react-icons/si";
import data from "../Data/Data.json"

const Skills = () => {
  return (
    <div className='w-full flex flex-col text-center mt-20'>
      <SubHeading p='Explore My' h1='Skills' />
      <div className='w-full h-full flex justify-center items-center gap-5 flex-wrap'>
        <SkillContainer title = "Frontend" data = {data.Frontend}/>
        <SkillContainer title = "Backend" data = {data.Backend}/>
      </div>
    </div>
  );
}

export default Skills
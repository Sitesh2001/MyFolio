import React from 'react'
import { SubHeading } from './SubHeading'
import ProjectBox from './ProjectBox'
import data from '../Data/Data.json'
import Navigation from './Navigation'

function Projects() {
  return (
    <>
    <Navigation/>
    <div id='projects' className='flex h-auto w-full flex-col mt-14 md:mt-20'>
        <div className='w-full'>
            <SubHeading p = "Browse My Recent" h1 = "Projects"/>
        </div>
        <div className='w-full h-auto p-4 flex gap-y-4 flex-wrap justify-around items-center'>
        {
          data.Projects.map((data,i)=>{
            return <ProjectBox key = {i} name = {data.name} subname = {data.type} git = {data.git} detail = {data.detail} />
          })
        }
        </div>
    </div>
    </>
  )
}

export default Projects
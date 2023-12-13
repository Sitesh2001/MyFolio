import React from 'react';
import profile from "../Assets/img1.png"
import { TextContainer } from './TextContainer';
import { SubHeading } from './SubHeading';

const About = () => {
  return (
    <div className='w-full h-auto md:mt-32 text-center'>
        <SubHeading p = "Get To Know More" h1 = "About Me"/>
        <div className='flex w-full flex-wrap h-auto justify-center items-center gap-5'>
          <section>
            <img className='w-[350px]' src={profile} alt="" />
          </section>
          <section className='flex flex-col w-[500px]'>
            <div className=' flex gap-5'> <TextContainer name = "Freshor" year = "0 year" designation = "Web Dev"/> <TextContainer name = "Freshor" year = "0 year" designation = "Frontend"/> </div>
            <div className='pt-4 text-left'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus hic molestiae incidunt tempora blanditiis amet, repudiandae tenetur cum sed repellendus, adipisci commodi reiciendis doloribus dolorum! Porro iusto voluptatibus soluta.</p>
            </div>
          </section>
        </div>
    </div>
  )
}

export default About
import React from 'react';
import profile from "../Assets/img1.png"
import { TextContainer } from './TextContainer';
import { SubHeading } from './SubHeading';
import Navigation from './Navigation';

const About = () => {
  return (
    <>
    <Navigation/>
    <div id='about' className='w-full h-auto text-center mt-20'>
        <SubHeading p = "Get To Know More" h1 = "About Me"/>
        <div className='flex w-full flex-wrap h-auto justify-center items-center gap-5'>
          <section>
            <img className='w-[350px]' src={profile} alt="Profile" />
          </section>
          <section className='flex flex-col m-5 w-[500px]'>
            <div className=' flex flex-col md:flex-row gap-5 items-center'> <TextContainer name = "Fresher" year = "0 year" designation = "Web Dev"/> <TextContainer name = "Fresher" year = "0 year" designation = "Frontend"/> </div>
            <div className='pt-4 text-left'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ducimus hic molestiae incidunt tempora blanditiis amet, repudiandae tenetur cum sed repellendus, adipisci commodi reiciendis doloribus dolorum! Porro iusto voluptatibus soluta.</p>
            </div>
          </section>
        </div>
    </div>
    </>
  )
}

export default About
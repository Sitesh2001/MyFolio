import React from 'react';
import profile from "../Assets/dp.jpg"
import { TextContainer } from './TextContainer';
import { SubHeading } from './SubHeading';
import Navigation from './Navigation';

const About = () => {
  return (
    <>
    <Navigation/>
    <div id='about' className='w-full h-auto text-center mt-14 md:mt-20'>
        <SubHeading p = "Get To Know More" h1 = "About Me"/>
        <div className='flex w-full flex-wrap h-auto justify-center items-center gap-5'>
          <section>
            <img className='w-[250px] h-[300px]' src={profile} alt="Profile" />
          </section>
          <section className='flex flex-col m-5 w-[500px]'>
            <div className=' flex flex-col md:flex-row gap-5 items-center'> <TextContainer name = "INTERMEDIATE" year = "2018 - 2019" designation = "SCIENCE"/> <TextContainer name = "B-TECH" year = "2019 - 2023" designation = "CSE"/> </div>
            <div className='pt-4 text-center md:text-left '>
              <p>Hello! I'm Sitest Kumar Tandan, a recent graduate in Computer Science & Engineering from RITEE College. I am passionate about technology and software development, constantly seeking opportunities to learn and grow in the field.</p>
            </div>
          </section>
        </div>
    </div>
    </>
  )
}

export default About
import React from 'react'
import TextLoader from './TextLoader';
import Btn from "./Btn.jsx"
import { FaGithub } from "react-icons/fa";
import { BiLogoLinkedin } from "react-icons/bi";

export const Profile = () => {
  const hoverStyle = 'hover:bg-slate-700 hover:text-white border-black'
  return (
    <section className='flex flex-col md:flex-row item-center gap-10 mt-8 md:mt-16'>
        <div className=' h-auto flex-1 self-center'><img className='h-full w-[350px] md:w-[400px] md:float-right' src="/profile.png" alt="profile" /></div>
        <div className='flex-1 self-center'>
          <div className='flex flex-col gap-4 h-full justify-center items-center w-[300px]'>
          <article className='md:text-xl'>Hello i'm</article>
          <article className='text-3xl md:text-[2.5rem] md:font-medium'>Sitesh Tandan</article>
          <section>
          <TextLoader/>
          </section>
          <section>
            <Btn name = "Download CV" link = "Resume.pdf" styles = 'bg-transparent border text-black' hover = {hoverStyle}/>
            <Btn name = "Contact Me" link = "#contact" sty = 'bg-slate-700 text-white hover:bg-slate-600'/>
          </section>
          <section className='flex gap-4 text-3xl'>
           <a href='https://github.com/sitesh2001' rel="noreferrer" target='_blank' className=' cursor-pointer hover:text-slate-600'><FaGithub /></a> <a rel="noreferrer" href='https://in.linkedin.com/in/sitesh2001' target='_blank' className='cursor-pointer hover:text-[#0e76a8]'><BiLogoLinkedin /></a>
          </section>
          </div>
        </div>
    </section>
  )
}

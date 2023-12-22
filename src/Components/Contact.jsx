import React from 'react'
import { SubHeading } from './SubHeading'
import ContactBox from './ContactBox'
import data from '../Data/Data.json'
import Navigation from './Navigation'

const Contact = () => {
  return (
    <>
     <Navigation/>
    <div id='contact' className=' flex flex-col items-center gap-y-10 mt-14 md:mt-20'>
        <SubHeading h1 = "Contact Me" p = "Get in Touch" />
            <div className='border mx-3 p-4 gap-3 border-slate-500 rounded-2xl flex flex-wrap justify-center' >
                {
                  data.Contact.map((d,i)=>{
                    return <ContactBox key = {i} url = {d.url} name = {d.name} logo = {d.logo} />
                  })
                }
            </div>
        <p className='text-lg text-center text-slate-600 mb-10'>Copyright © 2023 Sitesh tandan. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Contact
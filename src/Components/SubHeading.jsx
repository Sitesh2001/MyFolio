import React from 'react'

export const SubHeading = (prop) => {
  return (
    < div className='flex flex-col justify-center items-center p-5 m-5 gap-1'>
    <p className=' text-lg text-gray-400'>{prop.p}</p>
    <h1 className='md:text-5xl text-3xl text-black font-bold'>{prop.h1}</h1>
    </div>
  )
}

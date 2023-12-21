import React from 'react'

export const SubHeading = (prop) => {
  return (
    < div className='flex flex-col text-center py-4 my-4 gap-1'>
    <p className=' text-lg text-gray-600'>{prop.p}</p>
    <h1 className='md:text-5xl text-2xl text-black font-bold'>{prop.h1}</h1>
    </div>
  )
}

import React from 'react'

export const SubHeading = (prop) => {
  return (
    <>
    <p className=' text-lg text-gray-400'>{prop.p}</p>
    <h1 className='text-5xl text-black font-bold mb-20'>{prop.h1}</h1>
    </>
  )
}

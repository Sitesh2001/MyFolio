import React from 'react'
import Navigation from './Navigation'

const Navitems = (props) => {
  return (
    <>
    <Navigation/>
    <li className='hover:text-slate-700 navitem py-1 cursor-pointer hover:after:scale-100 after:scale-x-0 after:scale-y-[1] after:transform after:transition-transform relative after:bg-blue-500'><a href={props.id}>{props.name}</a></li>
    </>
  )
}

export default Navitems
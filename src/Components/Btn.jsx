import React from 'react'
import Navigation from './Navigation'

const Btn = (props) => {
  return (
    <>
    <Navigation/>
    <a href={props.link} download={props.link !== '#contact' ? 'resume.pdf' : undefined}>
    <button className={`${props.styles} ${props.hover} ${props.sty} transition m-2 font-semibold py-2 px-4 hover:border-transparent rounded-full`}>{props.name}</button>
    </a>
    </>
  )
}

export default Btn
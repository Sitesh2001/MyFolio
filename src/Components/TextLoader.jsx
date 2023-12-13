import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TextLoader() {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Web Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Frontend Developer',
        1000,
        'Full Stack Developer',
        1000,
      ]}
      wrapper="span"
      speed={40}
      className='text-xl text-gray-500 md:text-3xl inline-block md:font-medium'
      repeat={Infinity}
    />
  );
}

export default TextLoader
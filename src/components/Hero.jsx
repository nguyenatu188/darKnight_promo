import React from 'react'
import { name } from '../assets'
import NameCanvas from './canvas/Name'

const Hero = () => {
  return (
    <section className='relative w-full h-screen flex flex-col items-center justify-center'>
      <p 
        className={'absolute top-[300px] text-4xl text-white tracking-widest'}
         >Game indie 2D căng nhất 2024</p>
      <NameCanvas />
    </section>
  );
}

export default Hero

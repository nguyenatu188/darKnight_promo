import React from 'react'
import { name } from '../assets'
import NameCanvas from './canvas/Name'

const Hero = () => {
  return (
    <section className='relative w-full h-screen flex flex-col items-center justify-center'>
      <p 
        className={'absolute top-[320px] text-[25px] font-bold text-whites tracking-widest'}
        style = {{
          fontFamily: 'enchantedLand'}}
         >Game indie 2D căng nhất 2024</p>
      <NameCanvas />
    </section>
  );
}

export default Hero

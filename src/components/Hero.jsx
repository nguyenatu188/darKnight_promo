import React from 'react'
import { name } from '../assets'
import NameCanvas from './canvas/Name'
import { motion } from 'framer-motion'
import { TbHandFinger } from 'react-icons/tb'

const Hero = () => {
  return (
    <section className='relative w-full h-screen flex flex-col items-center justify-center'>
      <p 
        className={'absolute top-[250px] md:top-[200px] md:top-[300px] text-3xl md:text-4xl text-white tracking-widest'}
         >Game indie 2D căng nhất 2024</p>
      <NameCanvas />
      <div className='absolute bottom-24 md:bottom-10 w-full flex justify-center items-center z=30'>
        <a href='#about'>
          <div className='w-[25] md:w-[40px] h-[50px] md:h-[65px] rounded-3xl border-4 border-secondary flex justify-center items-start'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
            >
              <TbHandFinger className='text-secondary text-3xl md:text-5xl mt-2' />
            </motion.div>
          </div>
        </a>
      </div>
    </section>
  );
}

export default Hero

import React from 'react'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { top_fire, bottom_fire, tf, bf } from '../assets'
import { keyFeatures } from '../constants'
import { fadeIn } from '../utils/motion'

const KeyFeatures = () => {
  return (
    <div className="bg-[#851818] flex flex-col justify-center items-center">
      <img src={tf} alt="top_fire" className="w-full relative" />
      <p
        className="absolute top-[40px] md:top-[140px] text-5xl md:text-7xl text-[#a68426] tracking-widest"
        style={{ fontFamily: 'beyondWonderland' }}
      >
        Key Features
      </p>
      <div className="w-full max-w-screen-xl">
        {keyFeatures.map((keyFeature, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? fadeIn("right", "spring", index * 2, 3) : fadeIn("left", "spring", index * 2, 3)}
            initial="hidden"
            animate="show"
            className={`flex ${index % 2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col'}
              justify-between items-center gap-16 mb-10
              ${index % 2 === 0 ? 'mr-auto ml-3 md:text-right text-left' : 'ml-auto mr-3 md:text-left text-right'}
              w-[80%]`}
          >
            <video
              autoPlay
              src={keyFeature.gif}
              alt={keyFeature.title}
              className="w-80 h-52 md:w-[30rem] md:h-80 torn-border hover:scale-110"
            />
            <div className="flex flex-col">
              <p className="text-2xl md:text-5xl text-[#a68426]">{keyFeature.title}</p>
              <p className="text-xl md:text-3xl text-secondary mt-5">{keyFeature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <img src={bf} alt="bottom_fire" className="w-full relativeS" />
      <p
        className="absolute bottom-[20px] md:bottom-[100px] text-5xl md:text-7xl text-[#a68426] tracking-widest"
        style={{ fontFamily: 'beyondWonderland' }}
      >
        Characters
      </p>
    </div>
  );
};

export default SectionWrapper(KeyFeatures, 'keyFeature');

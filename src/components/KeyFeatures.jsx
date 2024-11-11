import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { top_fire, bottom_fire, tf, bf } from '../assets';
import { keyFeatures } from '../constants';
import { fadeIn } from '../utils/motion';

const KeyFeatures = () => {
  return (
    <div className="bg-[#851818] flex flex-col justify-center items-center">
      <img src={tf} alt="top_fire" className="w-full relative" />
      <p
        className="absolute top-[140px] text-[70px] text-[#a68426] tracking-widest"
        style={{ fontFamily: 'beyondWonderland' }}
      >
        Key Features
      </p>
      <div className="max-w-screen-xl">
        {keyFeatures.map((keyFeature, index) => (
          <motion.div
            key={index}
            variants={index % 2 === 0 ? fadeIn("right", "spring", index * 2, 3) : fadeIn("left", "spring", index * 2, 3)}
            initial="hidden"
            animate="show"
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
              justify-between items-center gap-16 mb-10
              ${index % 2 === 0 ? 'mr-auto ml-0' : 'ml-auto mr-0'}
              w-[80%]`}
          >
            <img
              src={keyFeature.gif}
              alt={keyFeature.title}
              className="w-96 h-96 torn-border hover:scale-110"
            />
            <div className="flex flex-col items-start">
              <p className="text-5xl text-[#a68426]">{keyFeature.title}</p>
              <p className="text-3xl text-secondary mt-5">{keyFeature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <img src={bf} alt="bottom_fire" className="w-full relativeS" />
      <p
        className="absolute bottom-[100px] text-[70px] text-[#a68426] tracking-widest"
        style={{ fontFamily: 'beyondWonderland' }}
      >
        Characters
      </p>
    </div>
  );
};

export default SectionWrapper(KeyFeatures, 'keyFeature');

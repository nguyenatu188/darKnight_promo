import React from 'react';
import { SectionWrapper } from '../hoc';
import { top_fire, bottom_fire } from '../assets';
import { keyFeatures } from '../constants';

const KeyFeatures = () => {
  return (
    <div className='bg-[#851818] flex flex-col justify-center items-center'>
      <img src={top_fire} alt="top_fire" className="w-full relative"/>
      <p className='absolute top-[200px] text-[70px] text-[#a68426] tracking-widest' style={{ fontFamily: 'beyondWonderland' }}>
        Key Features
      </p>
      <div className="w-full max-w-screen-xl">
        {keyFeatures.map((keyFeature, index) => (
          <div
            key={index}
            className={`
              flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} 
              justify-between items-center gap-16 py-10
              ${index % 2 === 0 ? 'mr-auto ml-0' : 'ml-auto mr-0'} 
              w-[90%] md:w-[85%] lg:w-[80%]
            `}
          >
            <img src={keyFeature.gif} alt={keyFeature.title} className="w-96 h-96 torn-border"/>
            
            <div className="flex flex-col items-start">
              <p className='text-4xl text-[#a68426] tracking-widest' style={{ fontFamily: 'enchantedLand' }}>
                {keyFeature.title}
              </p>
              <p className='text-2xl text-secondary tracking-wider' style={{ fontFamily: 'enchantedLand' }}>
                {keyFeature.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
      <img src={bottom_fire} alt="bottom_fire" className="w-full relativeS"/>
      <p className='absolute bottom-[100px] text-[70px] text-[#a68426] tracking-widest' style={{ fontFamily: 'beyondWonderland' }}>
        Characters
      </p>
    </div>
  );
}

export default SectionWrapper(KeyFeatures, 'keyFeature');

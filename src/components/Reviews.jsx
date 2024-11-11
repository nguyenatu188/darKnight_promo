import React from 'react'
import { Tilt as ReactTilt } from 'react-tilt'
import { reviews } from '../constants'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { text } from 'framer-motion/client'

const Reviews = () => {
  return (
    <div>
      {/* Section Titles */}
      <motion.div variants={textVariant()}>
        <div className="flex flex-col justify-center items-center">
          <p className="text-5xl md:text-7xl text-[#a68426]" style={{ fontFamily: 'beyondWonderland' }}>Reviews</p>
        </div>
        <p className="text-5xl md:text-6xl text-white ml-10 md:ml-32" style={{ fontFamily: 'billHead' }}>Người chơi nghĩ gì về game</p>
        <p className="text-3xl md:text-4xl text-secondary ml-10 md:ml-32 mt-3" style={{ fontFamily: 'billHead' }}>Nhiều người có tiếng trong giới gaming đã chơi và có những ý kiên tích cực về Dar Knight</p>
      </motion.div>
      {/* Testimonials */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-24 mt-10">
        {reviews.map((review, index) => (
          <ReactTilt
            key={index}
            className="w-80 bg-[#222222] p-6 rounded-lg shadow-lg"
            options={{ max: 45, scale: 1, speed: 600 }}
          >
            <motion.div variants={fadeIn("right", "spring", index * 0.5, 0.75)}>
              <div className="text-center">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-3xl md:text-4xl text-secondary mb-4">{review.content}</p>
                <h3 className="text-4xl md:text-5xl font-semibold text-white">{review.name}</h3>
                <p className="text-xl md:text-2xl text-white">{review.occupation}</p>
              </div>
            </motion.div>
          </ReactTilt>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Reviews, 'review')

import React, { useRef } from 'react'
import { SectionWrapper } from '../hoc'
import { monsters } from '../constants'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Side = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const sliderRef = useRef(null); // Create a ref for the slider

  const settings = {
    centerMode: true,
    centerPadding: '150px',
    slidesToShow: 3,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: '50px',
        }
      }
    ]
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-5xl md:text-7xl text-[#a68426]' style={{ fontFamily: 'beyondWonderland' }}>Monsters</p>
      <div className='relative w-full mt-5 md:mt-10 overflow-hidden'>
        <Slider ref={sliderRef} {...settings}>
          {monsters.map((monster, index) => (
            <div key={index} className="p-4">
              <div
                className={`flex flex-col justify-center items-center bg-[#222] text-white rounded-lg transition-all transform ${currentSlide === index ? 'scale-110' : ''}`}
              >
                <img src={monster.image} alt={monster.name} className="h-48 w-48 md:h-64 md:w-64 object-cover mb-3" />
                <h3 className="text-4xl md:text-6xl" style={{ fontFamily: 'beyondWonderland' }}>{monster.name}</h3>
                <p className="text-xl md:text-3xl mx-3 my-3 md:mx-10 md:my-10">{monster.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Navigation Arrows Below the Slider */}
      <div className="flex mt-4 space-x-4">
        <button
          className="text-white bg-[#222] p-2 rounded-full"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <FaArrowLeft className='text-xl md:text-3xl' />
        </button>
        <button
          className="text-white bg-[#222] p-2 rounded-full"
          onClick={() => sliderRef.current.slickNext()}
        >
          <FaArrowRight className='text-xl md:text-3xl' />
        </button>
      </div>
    </div>
  );
};

export default SectionWrapper(Side, 'character')

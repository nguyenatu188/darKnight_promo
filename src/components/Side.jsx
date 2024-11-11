import React from 'react';
import { SectionWrapper } from '../hoc';
import { monsters } from '../constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Side = () => {
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

  const [currentSlide, setCurrentSlide] = React.useState(0);

  return (
    <div className='flex flex-col justify-center items-center'>
      <p className='text-7xl text-[#a68426]' style={{ fontFamily: 'beyondWonderland' }}>Monsters</p>
      <div className='w-full mt-10 overflow-hidden'>
        <Slider {...settings}>
          {monsters.map((monster, index) => (
            <div key={index} className="p-4">
              <div
                className={`flex flex-col justify-center items-center bg-[#222] text-white rounded-lg transition-all transform ${currentSlide === index ? 'scale-110' : ''}`}
              >
                <img src={monster.image} alt={monster.name} className="h-64 w-64 object-cover mb-3" />
                <h3 className="text-6xl" style={{ fontFamily: 'beyondWonderland' }}>{monster.name}</h3>
                <p className="text-3xl mx-10 my-10">{monster.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Side, 'character');

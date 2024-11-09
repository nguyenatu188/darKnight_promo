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
      <p className='text-7xl text-[#a68426]' style={{ fontFamily: 'beyondWonderland' }}>Monsters</p>
      <div className='w-full mt-10 overflow-hidden'>
        <Slider {...settings}>
          {monsters.map((monster, index) => (
            <div key={index} className="p-4">
              <div className="character-card bg-[#222] text-white text-center rounded-lg transition transform duration-300">
                <img src={monster.image} alt={monster.name} className="character-image w-full" />
                <h3 className="text-4xl font-bold">{monster.name}</h3>
                <p className="text-2xl">{monster.description}</p>
              </div>
              
            </div>
            
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SectionWrapper(Side, 'character');

import React from 'react';
import { SectionWrapper } from '../hoc';
import { monsters } from '../constants';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Side = () => {
  const settings = {
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
              <div className="flex flex-col justify-center items-center bg-[#222] text-white rounded-lg transition-transform duration-300 transform">
                <img src={monster.image} alt={monster.name} className="h-64 w-64 object-cover rounded-lg mb-2" />
                <h3 className="text-6xl" style={{ fontFamily: 'beyondWonderland' }}>{monster.name}</h3>
                <p className="text-3xl mx-5 my-5">{monster.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SectionWrapper(Side, 'character');

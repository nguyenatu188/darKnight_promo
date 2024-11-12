import React from 'react';
import { FaFacebookSquare, FaInstagram, FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='fixed flex flex-col justify-center items-center bottom-7 right-7 md:bottom-10 md:right-10 gap-10'>
      <a 
        href="https://www.facebook.com/profile.php?id=61568280970190"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaFacebookSquare 
          className='text-2xl md:text-4xl hover:text-blue-600 hover:scale-125 transition-all duration-200'
        />
      </a>
      <a 
        href="https://www.instagram.com/esercitolhaki/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram 
          className='text-2xl md:text-4xl hover:text-pink-500 hover:scale-125 transition-all duration-200'
        />
      </a>
      <a 
        href="https://discord.gg/hWH5v6XY3M" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaDiscord
          className='text-2xl md:text-4xl hover:text-blue-600 hover:scale-125 transition-all duration-200'
        />
      </a>
    </div>
  );
}

export default Contact;

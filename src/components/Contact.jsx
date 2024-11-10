import React from 'react';
import { FaFacebookSquare, FaInstagram, FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='fixed flex flex-col justify-center items-center bottom-10 right-10 gap-10'>
      <a 
        href="https://www.facebook.com/share/g/onovommG1sPtbLVJ/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaFacebookSquare 
          size={40} 
          className='hover:text-blue-600 hover:scale-125 transition-all duration-200'
        />
      </a>
      <a 
        href="https://www.instagram.com/eldenring/" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaInstagram 
          size={40} 
          className='hover:text-pink-500 hover:scale-125 transition-all duration-200'
        />
      </a>
      <a 
        href="https://discord.gg/hWH5v6XY3M" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaDiscord 
          size={40} 
          className='hover:text-blue-600 hover:scale-125 transition-all duration-200'
        />
      </a>
    </div>
  );
}

export default Contact;

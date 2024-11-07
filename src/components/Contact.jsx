import React from 'react';
import { FaFacebookSquare, FaInstagram, FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <div className='fixed flex flex-col justify-center items-center bottom-10 right-10 gap-10'>
      <FaFacebookSquare 
        size={40} 
        className='hover:text-blue-600 hover:scale-125 transition-all duration-200'
      />
      <FaInstagram 
        size={40} 
        className='hover:text-pink-500 hover:scale-125 transition-all duration-200'
      />
      <FaDiscord 
        size={40} 
        className='hover:text-blue-600 hover:scale-125 transition-all duration-200'
      />
    </div>
  );
}

export default Contact;

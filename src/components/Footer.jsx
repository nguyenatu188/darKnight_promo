import React from 'react'
import { SectionWrapper } from '../hoc'
import { nsx, sixteen, publisher, top_tornEdge } from '../assets'
import { FaSteam } from "react-icons/fa"
import { SiEpicgames } from "react-icons/si"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center relative gap-5 md:gap-10'>
      <img src={top_tornEdge} alt='top_tornEdge' className='w-full absolute -top-[70px] md:-top-24'/>
      <div className='flex flex-row justify-center items-center gap-5 md:gap-10'>
        <img src={nsx} alt='nsx' className='w-20 md:w-36 h-auto'/>
        <img src={publisher} alt='publisher' className='w-auto h-24 md:h-36'/>
        <img src={sixteen} alt='sixteen' className='w-10 md:w-16 h-auto'/>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center gap-y-5 md:gap-y-10'>
        <div className='flex flex-row justify-center items-center'>
          <FaSteam className='text-xl md:text-3xl'/>
          <p className='text-white text-sm md:text-xl mr-10 md:mr-0' style={{ fontFamily: 'poppins, sans-serif' }}>Steam</p>
          <SiEpicgames className='ml-5 md:ml-10 text-xl md:text-3xl'/>
          <p className='text-white text-sm md:text-xl' style={{ fontFamily: 'poppins, sans-serif' }}>Epic Games</p>
        </div>
          <div className='flex flex-row justify-center items-center'>
          <FontAwesomeIcon icon={faPlaystation} className='ml-5 md:ml-10 text-xl md:text-3xl'/>
          <p className='text-white text-sm md:text-xl mr-10 md:mr-0' style={{ fontFamily: 'poppins, sans-serif' }}>Playstation 5</p>
          <FontAwesomeIcon icon={faPlaystation} className='ml-5 md:ml-10 text-xl md:text-3xl'/>
          <p className='text-white text-sm md:text-xl' style={{ fontFamily: 'poppins, sans-serif' }}>Playstation 4</p>
        </div>
      </div>
      <p className='text-white text-xs mx-5 md:mx-0 md:text-sm' style={{ fontFamily: 'poppins, sans-serif' }}>DarKnight. Được phát triển bởi Qth (Quân Thanh Hóa). © 2024. DarKnight là thương hiệu hoặc thương hiệu đã đăng ký của Qth. Phát hành bởi THG (Thanh Hóa Game). © 2024. THG là thương hiệu đã đăng ký của Thanh Hóa Game.</p>
    </div>
  )
}

export default SectionWrapper(Footer, 'footer')

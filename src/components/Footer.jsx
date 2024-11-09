import React from 'react'
import { SectionWrapper } from '../hoc'
import { nsx, sixteen, publisher, top_tornEdge } from '../assets'
import { FaSteam } from "react-icons/fa"
import { SiEpicgames } from "react-icons/si"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlaystation } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center relative gap-10'>
      <img src={top_tornEdge} alt='top_tornEdge' className='w-full absolute -top-24'/>
      <div className='flex flex-row justify-center items-center gap-10'>
        <img src={nsx} alt='nsx' className='w-36 h-auto'/>
        <img src={publisher} alt='publisher' className='w-auto h-36'/>
        <img src={sixteen} alt='sixteen' className='w-16 h-auto'/>
      </div>
      <div className='flex flex-row justify-center items-center gap-y-10'>
        <FaSteam size={32}/>
        <p className='text-white text-xl' style={{ fontFamily: 'poppins, sans-serif' }}>Steam</p>
        <SiEpicgames size={32} className='ml-10'/>
        <p className='text-white text-xl' style={{ fontFamily: 'poppins, sans-serif' }}>Epic Games</p>
        <FontAwesomeIcon icon={faPlaystation} size='2x' className='ml-10'/>
        <p className='text-white text-xl' style={{ fontFamily: 'poppins, sans-serif' }}>Playstation 5</p>
        <FontAwesomeIcon icon={faPlaystation} size='2x' className='ml-10'/>
        <p className='text-white text-xl' style={{ fontFamily: 'poppins, sans-serif' }}>Playstation 4</p>
      </div>
      <p className='text-white text-sm' style={{ fontFamily: 'poppins, sans-serif' }}>DarKnight. Được phát triển bởi Qth (Quân Thanh Hóa). © 2024. DarKnight là thương hiệu hoặc thương hiệu đã đăng ký của Qth. Phát hành bởi THG (Thanh Hóa Game). © 2024. THG là thương hiệu đã đăng ký của Thanh Hóa Game.</p>
    </div>
  )
}

export default SectionWrapper(Footer, 'footer')

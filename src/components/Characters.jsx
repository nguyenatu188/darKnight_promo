import React from 'react'
import { SectionWrapper } from '../hoc'
import { tb } from '../assets'
import { GiBouncingSword } from "react-icons/gi"
import { GiAssassinPocket } from "react-icons/gi"
import { GiBoneGnawer } from "react-icons/gi"

const Characters = () => {
  return (
    <div className='w-full h-screen flex items-center justify-start'>
      {/* Text with Rounded Gradient Background */}
      <div className='relative max-w-xl h-screen flex items-center'>
        {/* Rounded Gradient Background */}
        <div
          className='absolute inset-y-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none'
          style={{ borderTopRightRadius: '50%', borderBottomRightRadius: '50%' }}
        />

        {/* Character Info */}
        <div className='relative z-10 p-6 flex flex-col justify-center'>
          <h2 className='text-[#a68426] text-5xl mb-5' style={{ fontFamily: 'beyondWonderland' }}>Dar knight</h2>
          <img src={tb} alt='tb' className='mb-5'/>
          <p className='text-white text-2xl tracking-wide' style={{ fontFamily: 'enchantedLand' }}>Dar Knight, một thực thể sinh ra từ bóng tối, trỗi dậy để khôi phục lại sự cân bằng cho vùng đất tan vỡ Caladrias. Sở hữu sức mạnh từ bóng đêm, anh ta truy tìm những Mảnh Vỡ của Tấm Màn thiêng để gia tăng sức mạnh và đối đầu với các sinh vật méo mó bảo vệ ánh sáng lụi tàn. Ôm trọn bóng tối, anh là hy vọng cuối cùng của một thế giới đang chìm vào đêm tối vĩnh hằng.</p>
          <p className='text-4xl text-[#a68426] mt-10' style={{ fontFamily: 'beyondWonderland' }}>Skills</p>
          <div className='flex flex-row justify-center items-center gap-20 mt-5 -ml-20'>
            <GiBouncingSword size={70}/>
            <GiAssassinPocket size={70}/>
            <GiBoneGnawer size={70}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionWrapper(Characters, 'character')

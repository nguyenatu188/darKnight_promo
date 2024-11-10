import { useState } from 'react'
import { SectionWrapper } from '../hoc'
import { tb, skill1, skill2, skill3, top_tornEdge, bottom_tornEdge } from '../assets'
import { GiBouncingSword, GiAssassinPocket, GiBoneGnawer } from "react-icons/gi"
import { LuMousePointer } from "react-icons/lu"
import { motion } from 'framer-motion'
import { pointerAnimation } from '../utils/motion'

const Main = () => {
  const [selectedSkill, setSelectedSkill] = useState(null)

  const handleIconClick = (skill) => {
    setSelectedSkill(prevSkill => (prevSkill === skill ? null : skill))
  }

  return (
    <div className='w-full h-screen items-center justify-center relative'>
      <img src={top_tornEdge} alt='top_tornEdge' className='w-full absolute -top-24'/>
      <div className='w-full h-screen flex items-center justify-start relative gap-40'>
        
        <div className='relative max-w-2xl h-screen flex items-center'>
          <div
            className='absolute inset-y-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/50 to-transparent pointer-events-none'
            style={{ borderTopRightRadius: '50%', borderBottomRightRadius: '50%' }}
          />
          <div className='relative z-10 p-6 flex flex-col justify-center'>
            <h2 className='text-[#a68426] text-5xl mb-5' style={{ fontFamily: 'beyondWonderland' }}>Dar Knight</h2>
            <img src={tb} alt='tb' className='mb-5'/>
            <p className='text-white text-3xl'>
              Dar Knight, một thực thể sinh ra từ bóng tối, trỗi dậy để khôi phục lại sự cân bằng cho vùng đất tan vỡ Caladrias. 
              Sở hữu sức mạnh từ bóng đêm, anh ta truy tìm những Mảnh Vỡ của Tấm Màn thiêng để gia tăng sức mạnh và đối đầu với 
              các sinh vật méo mó bảo vệ ánh sáng lụi tàn. Ôm trọn bóng tối, anh là hy vọng cuối cùng của một thế giới đang chìm 
              vào đêm tối vĩnh hằng.
            </p>
            <p className='text-4xl text-[#a68426] mt-10' style={{ fontFamily: 'beyondWonderland' }}>Skills</p>
            <div className='flex flex-row justify-center items-center gap-20 mt-5 -ml-20'>
              <GiBouncingSword 
                size={70} 
                onClick={() => handleIconClick(skill1)} 
                className={`cursor-pointer transition-transform duration-200 ${
                  selectedSkill === skill1 ? 'scale-125' : 'hover:scale-125'
                }`}
              />
              <GiAssassinPocket 
                size={70} 
                onClick={() => handleIconClick(skill2)} 
                className={`cursor-pointer transition-transform duration-200 ${
                  selectedSkill === skill2 ? 'scale-125' : 'hover:scale-125'
                }`}
              />
              <GiBoneGnawer 
                size={70} 
                onClick={() => handleIconClick(skill3)} 
                className={`cursor-pointer transition-transform duration-200 ${
                  selectedSkill === skill3 ? 'scale-125' : 'hover:scale-125'
                }`}
              />
            </div>
            <div className='flex flex-row justify-center items-center gap-10 mt-5 -ml-20'>
              <p className='text-white text-3xl'>Bouncing sword</p>
              <p className='text-white text-3xl'>Assassin pocket</p>
              <p className='text-white text-3xl'>Bone Gnawer</p>
            </div>
            <div className='flex flex-row justify-center items-center gap-5 mt-10 -ml-20'>
              <motion.div
                {...pointerAnimation}
              >
                <LuMousePointer size={50} />
              </motion.div>
              <p className='text-white text-5xl'>nhấn vào skill</p>
            </div>
          </div>
        </div>

        {selectedSkill && (
          <img src={selectedSkill} alt='skill' className='w-auto h-96'/>
        )}
      </div>
      <img src={bottom_tornEdge} alt='bottom_tornEdge' className='w-full absolute -bottom-16'/>
    </div>
  );
}

export default SectionWrapper(Main, 'character')

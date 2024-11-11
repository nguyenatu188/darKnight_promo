import React from 'react'
import { SectionWrapper } from '../hoc'
import { maiLinh, left_vines, right_vines, bottom_vines, top_vines } from '../assets'
import { textVariant } from '../utils/motion'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center'>
      <motion.div
        variants={textVariant()}
      >
        <div className='flex justify-center items-center flex-col'>
          <p className='text-5xl md:text-7xl text-[#a68426]' style={{ fontFamily: 'beyondWonderland' }}>Dar Knight</p>
          <div className='flex justify-center items-center flex-row gap-8 mb-10 mt-3 mx-5'>
            <p className='text-xl md:text-3xl text-secondary'>Ngày ra mắt : 31/2/2024</p>
            <p className='text-xl md:text-3xl text-secondary'>Thể loại : nhập vai, phiêu lưu, chiến đấu, 2D</p>
            <p className='text-xl md:text-3xl text-secondary'>Nhà sản xuất : Quân Thanh Hóa</p>
          </div>
          <div className='flex flex-col md:flex-row justify-center items-center gap-10'>
            {/* Conditional rendering of vines based on screen size */}
            <img src={left_vines} alt='left-vines' className='block max-md:hidden w-96 h-96 ml-5'/>
            <img src={top_vines} alt='top-vines' className='block md:hidden w-80'/>
            
            <div className='flex justify-center items-center flex-col gap-2 mx-5 md:mx-0'>
              <p className='text-2xl md:text-3xl text-secondary'>Tại vùng đất bị nguyền rủa Caladrias, nơi ánh sáng đã rời bỏ và bóng tối lên ngôi, Dar knight trỗi dậy — một thực thể sinh ra từ bóng đêm, định mệnh của nó là tái sinh một thế giới đã tan vỡ. Từng là nơi yên bình, Caladrias giờ đây chỉ còn là mảnh vỡ, với tàn tích của Tấm Màn, cổ vật ánh sáng, vương vãi khắp nơi.</p>
              <p className='text-2xl md:text-3xl text-secondary'>Trong vai Dar knight, bạn nắm giữ sức mạnh bí ẩn của bóng tối, khai thác quyền năng từ sâu thẳm vực thẳm. Nhiệm vụ của bạn là thu thập những Mảnh Vỡ Tấm Màn đã thất lạc, từng mảnh là một chìa khóa để mở ra tiềm năng thực sự của mình. Mỗi mảnh vỡ được thu về, sức mạnh của bạn càng lớn, chuẩn bị cho trận chiến chống lại những sinh vật méo mó bảo vệ ánh sáng lụi tàn.</p>
              <p className='text-2xl md:text-3xl text-secondary'>Hành trình này không chỉ là chinh phục; nó là sự phán xét. Hãy ôm lấy bóng tối, vì chỉ có Dar knight mới có thể mang lại sự cân bằng cho thế giới đắm chìm trong tuyệt vọng và bóng đêm. Hãy tiến bước, và để triều đại của bạn bắt đầu !</p>
            </div>

            <img src={bottom_vines} alt='bottom-vines' className='block md:hidden w-80'/>

            <video src={maiLinh} controls autoPlay />

            <img src={right_vines} alt='right-vines' className='block max-md:hidden w-96 h-96 mr-5'/>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(About, 'about')

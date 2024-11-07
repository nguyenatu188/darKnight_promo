import React from 'react'
import { SectionWrapper } from '../hoc'
import { maiLinh, left_vines, right_vines } from '../assets'

const About = () => {
  return (
    <div className='flex flex-row justify-center items-center'>
      <img src={left_vines} alt='left-vines' className='w-80 h-80 ml-5'/>
      <div className='flex justify-center items-center flex-col gap-5 mx-10'>
        <p className='text-7xl text-[#a68426]' style={{ fontFamily: 'beyondWonderland' }}>Dar Knight</p>
        <div className='flex justify-center items-center flex-row gap-8'>
          <p className='text-2xl tracking-wider text-secondary' style={{ fontFamily: 'enchantedLand' }}>Ngày ra mắt: 31/2/2024</p>
          <p className='text-2xl tracking-wider text-secondary' style={{ fontFamily: 'enchantedLand' }}>Thể loại: nhập vai, phiêu lưu, chiến đấu, 2D</p>
          <p className='text-2xl tracking-wider text-secondary' style={{ fontFamily: 'enchantedLand' }}>Nhà sản xuất: Quân Thanh Hóa</p>
        </div>
        <div className='flex justify-center items-center flex-row gap-10'>
          <div className='flex justify-center items-center flex-col gap-2'>
            <p className='text-5xl text-[#a68426]' style={{ fontFamily: 'beyondWonderland' }}>Dar knight</p>
            <p className='text-2xl tracking-wider text-secondary' style={{ fontFamily: 'enchantedLand' }}>Tại vùng đất bị nguyền rủa Caladrias, nơi ánh sáng đã rời bỏ và bóng tối lên ngôi, Darknight trỗi dậy—một thực thể sinh ra từ bóng đêm, định mệnh của nó là tái sinh một thế giới đã tan vỡ. Từng là nơi yên bình, Caladrias giờ đây chỉ còn là mảnh vỡ, với tàn tích của Tấm Màn, cổ vật ánh sáng, vương vãi khắp nơi.</p>
            <p className='text-2xl tracking-wider text-secondary' style={{ fontFamily: 'enchantedLand' }}>Trong vai Dar knight, bạn nắm giữ sức mạnh bí ẩn của bóng tối, khai thác quyền năng từ sâu thẳm vực thẳm. Nhiệm vụ của bạn là thu thập những Mảnh Vỡ Tấm Màn đã thất lạc, từng mảnh là một chìa khóa để mở ra tiềm năng thực sự của mình. Mỗi mảnh vỡ được thu về, sức mạnh của bạn càng lớn, chuẩn bị cho trận chiến chống lại những sinh vật méo mó bảo vệ ánh sáng lụi tàn.</p>
            <p className='text-2xl tracking-wider text-secondary' style={{ fontFamily: 'enchantedLand' }}>Hành trình này không chỉ là chinh phục; nó là sự phán xét. Hãy ôm lấy bóng tối, vì chỉ có Dar knight mới có thể mang lại sự cân bằng cho thế giới đắm chìm trong tuyệt vọng và bóng đêm. Hãy tiến bước, và để triều đại của bạn bắt đầu!</p>
          </div>
          <video src={maiLinh} controls autoPlay />
        </div>
      </div>
      <img src={right_vines} alt='right-vines' className='w-80 h-80 mr-5'/>
    </div>
  )
}

export default SectionWrapper(About, 'about')

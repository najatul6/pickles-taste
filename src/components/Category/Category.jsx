// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';

import banner1 from '../../assets/banner/01.png'

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={banner1} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  )
}

export default Category
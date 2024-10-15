// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../../assets/banner/01.png";
import banner2 from "../../assets/banner/1.jfif"

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={banner1} alt="category banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="category banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="category banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="category banner" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner1} alt="category banner" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Category;

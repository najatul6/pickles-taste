import { useEffect, useState } from "react";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section className="w-11/12 mx-auto pb-10">
      <SectionHeading subTitle="What Our Clients Say" title="TESTIMONIALS" />
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {reviews?.map((review) => (
            <SwiperSlide key={review?._id}>
              <div className="flex justify-center items-center flex-col space-y-6 w-3/4 mx-auto">
                <Rating
                  style={{ maxWidth: 250 }}
                  readOnly
                  value={review?.rating}
                />
                <FaQuoteLeft size={50}/>
                <p className="text-center text-xl text-white">{review?.details}</p>
                <h2 className="text-2xl font-bold text-brand-color">{review?.name}</h2>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;

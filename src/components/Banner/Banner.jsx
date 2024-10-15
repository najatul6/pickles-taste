import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/banner/01.png";
const Banner = () => {
  return (
    <Carousel autoPlay={1000} infiniteLoop={true} stopOnHover={false}>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner1} />
      </div>
    </Carousel>
  );
};

export default Banner;

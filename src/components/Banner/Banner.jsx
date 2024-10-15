import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banner1 from "../../assets/banner/1.jfif";
import banner2 from "../../assets/banner/2.jfif";
import banner3 from "../../assets/banner/3.jfif";
import banner4 from "../../assets/banner/4.jfif";
import banner5 from "../../assets/banner/5.jfif";
import banner6 from "../../assets/banner/6.jfif";
import banner7 from "../../assets/banner/7.jfif";
import banner8 from "../../assets/banner/8.jfif";
import banner9 from "../../assets/banner/9.jfif";
const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={banner1} />
      </div>
      <div>
        <img src={banner2} />
      </div>
      <div>
        <img src={banner3} />
      </div>
      <div>
        <img src={banner4} />
      </div>
      <div>
        <img src={banner5} />
      </div>
      <div>
        <img src={banner6} />
      </div>
      <div>
        <img src={banner7} />
      </div>
      <div>
        <img src={banner8} />
      </div>
      <div>
        <img src={banner9} />
      </div>
    </Carousel>
  );
};

export default Banner;

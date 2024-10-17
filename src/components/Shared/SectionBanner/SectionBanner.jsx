import { Parallax } from "react-parallax";
import PropTypes from "prop-types";
const SectionBanner = ({ bgImg, title ,description}) => {
  return (
    <Parallax
      blur={{ min: -2, max: 5 }}
      bgImage={bgImg}
      bgImageAlt={title}
      strength={-300}
    >
      <div className="md:w-3/4 py-5 my-5 md:my-24 bg-black/70 mx-auto h-40 lg:h-60 text-center text-white flex flex-col items-center justify-center">
        <h1 className="text-xl font-bold lg:text-4xl uppercase mb-5">{title}</h1>
        <p className="font-thin md:text-xl">{description}</p>
      </div>
    </Parallax>
  );
};

SectionBanner.propTypes = {
    bgImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default SectionBanner;

import { Parallax } from "react-parallax";
import PropTypes from "prop-types";
const SectionBanner = ({ bgImg, title ,description}) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={bgImg}
      bgImageAlt={title}
      strength={-300}
    >
      <div className="border w-3/4 my-24 bg-black/40 mx-auto h-60 text-white flex flex-col items-center justify-center">
        <h1 className="text-2xl lg:text-4xl uppercase">{title}</h1>
        <p>{description}</p>
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

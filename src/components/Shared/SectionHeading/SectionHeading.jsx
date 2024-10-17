import PropTypes from "prop-types";

const SectionHeading = ({title,subTitle}) => {
  return (
    <section className="text-white text-center flex flex-col justify-center items-center gap-4 my-10">
        <p className="text-brand-color font-bold">--- {subTitle} ---</p>
        <hr className="w-1/4" />
        <h2 className="text-2xl md:text-4xl uppercase">{title}</h2>
        <hr className="w-1/4" />
    </section>
  )
}

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default SectionHeading
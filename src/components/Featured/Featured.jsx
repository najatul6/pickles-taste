import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import featuredImg from "../../assets/banner/1.jfif";

const Featured = () => {
  return (
    <div
      style={{ backgroundImage: `url(${featuredImg})` }}
      className="relative bg-no-repeat bg-cover bg-fixed bg-center text-white py-10"
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur"></div>
      <div className="relative">
        <SectionHeading subTitle="Check it out" title="Featured Items" />
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 w-3/4 mx-auto">
          <img
            src={featuredImg}
            alt="Featured product"
            className="md:w-[600px] rounded-xl"
          />
          <div className=" text-justify">
            <h4 className="text-xl">March 20, 2023</h4>
            <h5 className="text-xl">WHERE CAN I GET SOME?</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="text-white mt-10 py-5 px-8 rounded-xl border-b-4 uppercase text-xl font-medium hover:bg-brand-color bg-black/50 hover:border-white transition-colors duration-300 border-brand-color">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;

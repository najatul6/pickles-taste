import SimpleParallax from "simple-parallax-js";
import bgImage from "../../assets/banner/01.png";
const BgParallax = () => {
  return (
    <div className="relative w-11/12 mx-auto my-10 overflow-hidden ">
      <SimpleParallax delay={0.4} transition="cubic-bezier(0,0,0,1)">
        <img src={bgImage} alt={"image"} className="blur-[2px]"/>
      </SimpleParallax>
      <div className="absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center px-3">
      <div className=" text-white text-center md:px-20 md:py-20 bg-black/70 flex flex-col h-1/2 my-auto justify-center items-center gap-4 py-4  lg:w-2/3 mx-auto">
        <h1 className="lg:text-4xl font-bold uppercase">Pickles Taste</h1>
        <hr className="w-full"/>
        <p className="text-xs lg:text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium!
        </p>
      </div>
      </div>
    </div>
  );
};

export default BgParallax;

{
  /* <div className="text-white text-center px-20 py-20 bg-red-200 my-40 w-2/3 mx-auto">
        <h1 className="text-4xl font-bold uppercase ">Pickles Taste</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
          nihil iusto ducimus incidunt quibusdam nemo.
        </p>
      </div> */
}

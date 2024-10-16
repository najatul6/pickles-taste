import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import BgParallax from "../../components/BgParallax/BgParallax";
import CallUs from "../../components/CallUs/CallUs";
import Category from "../../components/Category/Category";
import Featured from "../../components/Featured/Featured";
import PopularPickles from "../../components/PopularPickles/PopularPickles";
import Recommended from "../../components/Recommended/Recommended";
import Testimonial from "../../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      {/* React Helmet  */}
      <Helmet>
        <title>Home | Pickles Taste</title>
        <meta
          name="description"
          content="Welcome to Asar Market, a unique and delectable pickled fruit farm."
        />
        <meta property="og:title" content="Asar Market - Home" />
        <meta
          property="og:description"
          content="Welcome to Asar Market, a unique and delectable pickled fruit farm."
        />
        <meta property="og:image" content="https://example.com/image.jpg" />
      </Helmet>

      {/* Body start here  */}
      <Banner />
      <Category />
      <BgParallax />
      <PopularPickles />
      <CallUs />
      <Recommended />
      <Featured />
      <Testimonial />
    </div>
  );
};

export default Home;

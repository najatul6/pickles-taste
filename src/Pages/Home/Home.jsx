import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner/Banner";
import CallUs from "../../components/CallUs/CallUs";
import Category from "../../components/Category/Category";
import Featured from "../../components/Featured/Featured";
import PopularPickles from "../../components/PopularPickles/PopularPickles";
import Recommended from "../../components/Recommended/Recommended";
import Testimonial from "../../components/Testimonial/Testimonial";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import bgImage from "../../assets/banner/8.jfif";
const Home = () => {
  return (
    <div className="flex flex-col gap-10 ">
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
      {/* Category  */}
      <Category />
      {/* Section Banner  */}
      <SectionBanner
        bgImg={bgImage}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, libero accusamus laborum deserunt ratione dolor
          officiis praesentium!"
        title="Pickles Taste"
      />
      {/* Popular Pickles  */}
      <PopularPickles />
      {/* Call Us  */}
      <CallUs />
      {/* Recommended  */}
      <Recommended />
      {/* Featured  */}
      <Featured />
      {/* Testimonial  */}
      <Testimonial />
    </div>
  );
};

export default Home;

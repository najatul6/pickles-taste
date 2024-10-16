import Banner from "../../components/Banner/Banner"
import BgParallax from "../../components/BgParallax/BgParallax"
import CallUs from "../../components/CallUs/CallUs"
import Category from "../../components/Category/Category"
import Featured from "../../components/Featured/Featured"
import PopularPickles from "../../components/PopularPickles/PopularPickles"
import Recommended from "../../components/Recommended/Recommended"
import Testimonial from "../../components/Testimonial/Testimonial"

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner/>
      <Category/>
      <BgParallax/>
      <PopularPickles/>
      <CallUs/>
      <Recommended/>
      <Featured/>
      <Testimonial/>
    </div>
  )
}

export default Home
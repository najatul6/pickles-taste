import Banner from "../../components/Banner/Banner"
import BgParallax from "../../components/BgParallax/BgParallax"
import CallUs from "../../components/CallUs/CallUs"
import Category from "../../components/Category/Category"
import PopularPickles from "../../components/PopularPickles/PopularPickles"

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Banner/>
      <Category/>
      <BgParallax/>
      <PopularPickles/>
      <CallUs/>
    </div>
  )
}

export default Home
import Banner from "../../components/Banner/Banner"
import BgParallax from "../../components/BgParallax/BgParallax"
import Category from "../../components/Category/Category"
import PopularPickles from "../../components/PopularPickles/PopularPickles"

const Home = () => {
  return (
    <div className="">
      <Banner/>
      <Category/>
      <BgParallax/>
      <PopularPickles/>
    </div>
  )
}

export default Home
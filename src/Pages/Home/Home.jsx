import Banner from "../../components/Banner/Banner"
import BgParallax from "../../components/BgParallax/BgParallax"
import Category from "../../components/Category/Category"
import PopularMenu from "../../components/PopularMenu/PopularMenu"

const Home = () => {
  return (
    <div className="">
      <Banner/>
      <Category/>
      <BgParallax/>
      <PopularMenu/>
    </div>
  )
}

export default Home
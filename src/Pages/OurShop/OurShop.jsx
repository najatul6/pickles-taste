import { Helmet } from "react-helmet-async"
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner"
import bgImage from "../../assets/banner/8.jfif"

const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>Our Shop | Pickles Taste</title>
        <meta name="description" content="Our Shop Page" />
      </Helmet>
      
      {/* Shop Banner  */}
      <SectionBanner bgImg={bgImage} title="our shop" description="Would you like to try a dish?"/>
      </div>
  )
}

export default OurShop
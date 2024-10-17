import { Helmet } from "react-helmet-async"
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner"
import menuBack from "../../assets/banner/3.jfif"
import PopularPickles from "../../components/PopularPickles/PopularPickles"

const OurMenu = () => {
  return (
    <div className="min-h-screen">
      {/* React Helmet  */}
      <Helmet>
        <title>Our Menu | Pickles Taste</title>
        <meta name="description" content="Our menu page" />
      </Helmet>
      <SectionBanner bgImg={menuBack} title={"Our menu"} description="Would you like to try a dish?"/>
      {/* Page content */}
      <section className="space-y-14 my-10">
        {/* Popular Items  */}
        <PopularPickles/>
        {/* Other menu items */}
      <SectionBanner bgImg={menuBack} title={"Our menu"} description="Would you like to try a dish?"/>
        <PopularPickles/>
        {/* Other menu items */}
      <SectionBanner bgImg={menuBack} title={"Our menu"} description="Would you like to try a dish?"/>
        <PopularPickles/>
        {/* Other menu items */}
      <SectionBanner bgImg={menuBack} title={"Our menu"} description="Would you like to try a dish?"/>
        <PopularPickles/>
        {/* Other menu items */}
      <SectionBanner bgImg={menuBack} title={"Our menu"} description="Would you like to try a dish?"/>
        <PopularPickles/>

      </section>

    </div>
  )
}

export default OurMenu
import { Helmet } from "react-helmet-async"
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner"
import menuBack from "../../assets/banner/3.jfif"

const OurMenu = () => {
  return (
    <div className="min-h-screen">
      {/* React Helmet  */}
      <Helmet>
        <title>Our Menu | Pickles Taste</title>
        <meta name="description" content="Our menu page" />
      </Helmet>
      <SectionBanner bgImg={menuBack} title={"menu"}/>
      {/* Page content */}
      <section>

      </section>

    </div>
  )
}

export default OurMenu
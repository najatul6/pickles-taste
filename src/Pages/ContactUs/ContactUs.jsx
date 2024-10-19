import { Helmet } from "react-helmet-async"
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner"
import bannerImg from "../../assets/banner/6.jfif"
import SectionHeading from "../../components/Shared/SectionHeading/SectionHeading"

const ContactUs = () => {
  return (
    <section>
      <Helmet>
        <title>Contact Us | Pickles Taste</title>
        <meta name="description" content="Contact Us Page of Asar Market" />
      </Helmet>
      <SectionBanner bgImg={bannerImg} title="Contact Us" description="Would you like to try a dish?"/>
      <div>
        <SectionHeading title="OUR LOCATION" subTitle="Visit Us"/>
      </div>
      </section>
  )
}

export default ContactUs
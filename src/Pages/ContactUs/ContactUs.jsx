import { Helmet } from "react-helmet-async";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import bannerImg from "../../assets/banner/6.jfif";
import SectionHeading from "../../components/Shared/SectionHeading/SectionHeading";
import { FaClock, FaPhone } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const ContactUs = () => {
  return (
    <section>
      <Helmet>
        <title>Contact Us | Pickles Taste</title>
        <meta name="description" content="Contact Us Page of Asar Market" />
      </Helmet>
      <SectionBanner
        bgImg={bannerImg}
        title="Contact Us"
        description="Would you like to try a dish?"
      />
      <div>
        {/* Location section  */}
        <section>
          <SectionHeading title="OUR LOCATION" subTitle="Visit Us" />
          <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 gap-6 place-items-center mx-auto mb-10">
            <div className="flex flex-col justify-center items-center text-white w-full">
              <div className="bg-brand-color/90 w-full flex justify-center items-center py-5">
                <FaPhone size={"32px"} />
              </div>
              <div className="flex flex-col justify-center items-center w-3/4 bg-white/5 gap-4 py-10  h-[200px]">
                <h2 className="text-2xl font-bold">Phone</h2>
                <p>+88 01773 827-414</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-white w-full">
              <div className="bg-brand-color/90 w-full flex justify-center items-center py-5">
                <FaMapLocation size={"32px"} />
              </div>
              <div className="flex flex-col justify-center items-center w-3/4 bg-white/5 gap-4 py-10  h-[200px]">
                <h2 className="text-2xl font-bold">Address</h2>
                <p>Rangpur City, Rangpur</p>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center text-white w-full">
              <div className="bg-brand-color/90 w-full flex justify-center items-center py-5">
                <FaClock size={"32px"} />
              </div>
              <div className="flex flex-col justify-center items-center w-3/4 bg-white/5 gap-4 py-10  h-[200px]">
                <h2 className="text-2xl font-bold">WORKING HOURS</h2>
                <p>Mon - Fri: 08:00 - 22:00</p>
                <p>Sat - Sun: 10:00 - 23:00</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ContactUs;

import { Helmet } from "react-helmet-async";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import menuBack from "../../assets/banner/3.jfif";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../components/Shared/SectionHeading/SectionHeading";

const OurMenu = () => {
  const [menu, loading] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");
  return (
    <div className="min-h-screen">
      {/* React Helmet  */}
      <Helmet>
        <title>Our Menu | Pickles Taste</title>
        <meta name="description" content="Our menu page" />
      </Helmet>
      <SectionBanner
        bgImg={menuBack}
        title={"Our menu"}
        description="Would you like to try a dish?"
      />
      {/* Page content */}
      <section>
      {/* Todays Offer */}
      <div>
        <SectionHeading subTitle="Don't miss" title="TODAY'S OFFER"/>
        {/* TODAY'S OFFER Items */}
        <div>
          
        </div>
      </div>

      </section>
    </div>
  );
};

export default OurMenu;

import { Helmet } from "react-helmet-async";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import menuBack from "../../assets/banner/9.jfif";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../components/Shared/SectionHeading/SectionHeading";
import ItemsLoading from "../../components/Shared/ItemsLoading/ItemsLoading";
import MenuCategory from "../../components/Shared/MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu, loading] = useMenu();
  const offered = menu?.filter((item) => item.category === "offered");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");
  const drinks = menu?.filter((item) => item.category === "drinks");

  return (
    <div className="min-h-screen">
      {/* React Helmet  */}
      <Helmet>
        <title>Our Menu | Pickles Taste</title>
        <meta name="description" content="Our menu page" />
      </Helmet>

      {/* Menu Banner  */}
      <SectionBanner
        bgImg={menuBack}
        title={"Our menu"}
        description="Would you like to try a dish?"
      />
      {/* Page content */}
      <section className="space-y-10 mb-10">
        {/* TODAYS OFFERS */}
        <div className="w-11/12 mx-auto">
          <SectionHeading subTitle="Don't miss" title="TODAY'S OFFER" />
          {/* TODAY'S OFFER ITEMS */}
          {loading ? <ItemsLoading /> : <MenuCategory items={offered} title={offered} />}
        </div>

        {/* DESSERTS CATEGORY */}
        <SectionBanner
          bgImg={menuBack}
          description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="DESSERTS"
        />
        {/* DESSERTS ITEMS */}
        <div className="w-11/12 mx-auto">
          {loading ? <ItemsLoading /> : <MenuCategory items={dessert} title={dessert} />}
        </div>

        {/* PIZZA CATEGORY */}
        <SectionBanner
          bgImg={menuBack}
          description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="PIZZA"
        />
        {/* PIZZA  ITEMS */}
        <div className="w-11/12 mx-auto">
          {loading ? <ItemsLoading /> : <MenuCategory items={pizza} title={pizza} />}
        </div>

        {/* SALAD CATEGORY */}
        <SectionBanner
          bgImg={menuBack}
          description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="SALAD"
        />
        {/* SALAD  ITEMS */}
        <div className="w-11/12 mx-auto">
          {loading ? <ItemsLoading /> : <MenuCategory items={salad} title={salad} />}
        </div>

        {/* SOUP CATEGORY */}
        <SectionBanner
          bgImg={menuBack}
          description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="SOUP"
        />
        {/* SOUP  ITEMS */}
        <div className="w-11/12 mx-auto">
          {loading ? <ItemsLoading /> : <MenuCategory items={soup} title={soup} />}
        </div>

        {/* DRINKS CATEGORY */}
        <SectionBanner
          bgImg={menuBack}
          description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="Drinks"
        />
        {/* DRINKS  ITEMS */}
        <div className="w-11/12 mx-auto">
          {loading ? <ItemsLoading /> : <MenuCategory items={drinks} title={drinks} />}
        </div>
      </section>
    </div>
  );
};

export default OurMenu;

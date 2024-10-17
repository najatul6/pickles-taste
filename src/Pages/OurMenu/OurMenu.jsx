import { Helmet } from "react-helmet-async";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import menuBack from "../../assets/banner/9.jfif";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../components/Shared/SectionHeading/SectionHeading";
import ItemsLoading from "../../components/Shared/ItemsLoading/ItemsLoading";
import MenuItemCard from "../../components/Shared/MenuItemCard/MenuItemCard";
import MenuBtn from "../../components/Shared/MenuBtn/MenuBtn";
import MenuCategory from "../../components/Shared/MenuCategory/MenuCategory";

const OurMenu = () => {
  const [menu, loading] = useMenu();
  const offered = menu?.filter((item) => item.category === "offered");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const soup = menu?.filter((item) => item.category === "soup");

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
          {/* TODAY'S OFFER Items */}
          <div>
            {/* Show loading and menu item list  */}
            {loading ? <ItemsLoading /> : <MenuCategory items={offered} />}
          </div>
        </div>

        {/* DESSERTS ITEMS */}
        <SectionBanner
          bgImg={menuBack}
          description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="DESSERTS"
        />
        {/* DESSERTS ITEMS */}
        <div className="w-11/12 mx-auto">
          <div>
            {/* Show loading and menu item list  */}
            {loading ? (
              <ItemsLoading />
            ) : (
              <MenuCategory items={dessert}/>
            )}
            
          </div>
        </div>

        {/* PIZZA ITEMS */}
        <SectionBanner
          bgImg={menuBack}
          description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="PIZZA"
        />
        {/* PIZZA  ITEMS */}
        <div className="w-11/12 mx-auto">
          <div>
            {/* Show loading and menu item list  */}
            {loading ? (
              <ItemsLoading />
            ) : (
              <MenuCategory items={pizza}/>
            )}
          </div>
        </div>

        {/* SALAD ITEMS */}
        <SectionBanner
          bgImg={menuBack}
          description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="SALAD"
        />
        {/* SALAD  ITEMS */}
        <div className="w-11/12 mx-auto">
          <div>
            {/* Show loading and menu item list  */}
            {loading ? (
              <ItemsLoading />
            ) : (
              <MenuCategory items={salad}/>
            )}
          </div>
        </div>

        {/* SOUP ITEMS */}
        <SectionBanner
          bgImg={menuBack}
          description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          title="SOUP"
        />
        {/* SOUP  ITEMS */}
        <div className="w-11/12 mx-auto">
          <div>
            {/* Show loading and menu item list  */}
            {loading ? (
              <ItemsLoading />
            ) : (
              <MenuCategory items={soup}/>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMenu;

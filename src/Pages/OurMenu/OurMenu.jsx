import { Helmet } from "react-helmet-async";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import menuBack from "../../assets/banner/3.jfif";
import useMenu from "../../hooks/useMenu";
import SectionHeading from "../../components/Shared/SectionHeading/SectionHeading";
import ItemsLoading from "../../components/Shared/ItemsLoading/ItemsLoading";
import MenuItemCard from "../../components/Shared/MenuItemCard/MenuItemCard";
import MenuBtn from "../../components/Shared/MenuBtn/MenuBtn";

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
            {loading ? (
              <ItemsLoading />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {offered?.map((item) => (
                  <MenuItemCard loading={loading} key={item?._id} item={item} />
                ))}
              </div>
            )}
            {/* Menu button */}
            <MenuBtn text="ORDER YOUR favourite FOOD" />
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {dessert?.map((item) => (
                  <MenuItemCard loading={loading} key={item?._id} item={item} />
                ))}
              </div>
            )}
            {/* Menu button */}
            <MenuBtn text="ORDER YOUR favourite FOOD" />
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {pizza?.map((item) => (
                  <MenuItemCard loading={loading} key={item?._id} item={item} />
                ))}
              </div>
            )}
            {/* Menu button */}
            <MenuBtn text="ORDER YOUR favourite FOOD" />
          </div>
        </div>
        
        {/* SALAD ITEMS */}
          <SectionBanner
            bgImg={menuBack}
            description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            title="SALAD"
          />
        <div className="w-11/12 mx-auto">
          {/* SALAD  ITEMS */}
          <div>
            {/* Show loading and menu item list  */}
            {loading ? (
              <ItemsLoading />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {dessert?.map((item) => (
                  <MenuItemCard loading={loading} key={item?._id} item={item} />
                ))}
              </div>
            )}
            {/* Menu button */}
            <MenuBtn text="ORDER YOUR favourite FOOD" />
          </div>
        </div>
        
        {/* SOUP ITEMS */}
          <SectionBanner
            bgImg={menuBack}
            description="Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            title="SOUP"
          />
        <div className="w-11/12 mx-auto">
          {/* SOUP  ITEMS */}
          <div>
            {/* Show loading and menu item list  */}
            {loading ? (
              <ItemsLoading />
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {dessert?.map((item) => (
                  <MenuItemCard loading={loading} key={item?._id} item={item} />
                ))}
              </div>
            )}
            {/* Menu button */}
            <MenuBtn text="ORDER YOUR favourite FOOD" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMenu;

import { Helmet } from "react-helmet-async";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import bgImage from "../../assets/banner/8.jfif";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabsStyle.css";
import useMenu from "../../hooks/useMenu";
import ShopCategroy from "../../components/Shared/ShopCategroy/ShopCategroy";
const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [menu] = useMenu();
  const offered = menu?.filter((item) => item.category === "offered");
  const popular = menu?.filter((item) => item.category === "popular");
  const salad = menu?.filter((item) => item.category === "salad");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const pizza = menu?.filter((item) => item.category === "pizza");

  return (
    <div className="">
      <Helmet>
        <title>Our Shop | Pickles Taste</title>
        <meta name="description" content="Our Shop Page" />
      </Helmet>

      {/* Shop Banner  */}
      <SectionBanner
        bgImg={bgImage}
        title="our shop"
        description="Would you like to try a dish?"
      />

      {/* Product section  */}

      <div className="my-20 text-[#BB8506] font-bold overflow-hidden">
        <div className="text-center">
          <Tabs
            defaultIndex={tabIndex}
            onSelect={(index) => setTabIndex(index)}
          >
            <TabList>
              <Tab>Offered</Tab>
              <Tab>Popular</Tab>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Desserts</Tab>
              <Tab>Soups</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>
              <ShopCategroy items={offered} />
            </TabPanel>
            <TabPanel>
              <ShopCategroy items={popular}/>
            </TabPanel>
            <TabPanel>
              <ShopCategroy items={salad}/>
            </TabPanel>
            <TabPanel>
              <ShopCategroy items={pizza}/>
            </TabPanel>
            <TabPanel>
              <ShopCategroy items={dessert}/>
            </TabPanel>
            <TabPanel>
              <ShopCategroy items={soup}/>
            </TabPanel>
            <TabPanel>
              <ShopCategroy items={drinks}/>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OurShop;

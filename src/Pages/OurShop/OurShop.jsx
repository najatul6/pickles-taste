import { Helmet } from "react-helmet-async";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import bgImage from "../../assets/banner/8.jfif";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabsStyle.css";
const OurShop = () => {
  const [tabIndex, setTabIndex] = useState(0);
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
              <Tab>Popular</Tab>
              <Tab>Offer</Tab>
              <Tab>Salad</Tab>
              <Tab>Pizza</Tab>
              <Tab>Desserts</Tab>
              <Tab>Soups</Tab>
              <Tab>Drinks</Tab>
            </TabList>
            <TabPanel>Popular Items</TabPanel>
            <TabPanel>Offered Items</TabPanel>
            <TabPanel>Salad Items</TabPanel>
            <TabPanel>Pizza Items</TabPanel>
            <TabPanel>Desserts Items</TabPanel>
            <TabPanel>Soups Items</TabPanel>
            <TabPanel>Drinks Items</TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OurShop;

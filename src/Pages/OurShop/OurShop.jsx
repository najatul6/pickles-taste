import { Helmet } from "react-helmet-async";
import SectionBanner from "../../components/Shared/SectionBanner/SectionBanner";
import bgImage from "../../assets/banner/8.jfif";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./tabsStyle.css";
import useMenu from "../../hooks/useMenu";
import ShopCategory from "../../components/Shared/ShopCategory/ShopCategory";
import { useParams } from "react-router-dom";
import CardLoading from "../../components/Shared/cardLoading/CardLoading";
const OurShop = () => {
  const categories = [
    "offered",
    "popular",
    "salad",
    "pizza",
    "dessert",
    "soups",
    "drinks",
  ];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu, loading] = useMenu();
  const offered = menu?.filter((item) => item.category === "offered");
  const popular = menu?.filter((item) => item.category === "popular");
  const salad = menu?.filter((item) => item.category === "salad");
  const dessert = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const drinks = menu?.filter((item) => item.category === "drinks");
  const pizza = menu?.filter((item) => item.category === "pizza");
  console.log(initialIndex);

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
            <div className="w-11/12 my-5 mx-auto">
              <TabPanel>
                {loading ? <CardLoading /> : <ShopCategory items={offered} />}
              </TabPanel>
              <TabPanel>
              {loading ? <CardLoading /> : <ShopCategory items={offered} />}
                <ShopCategory items={popular} />
              </TabPanel>
              <TabPanel>
              {loading ? <CardLoading /> :                <ShopCategory items={salad} />
            }
              </TabPanel>
              <TabPanel>
              {loading ? <CardLoading /> :                 <ShopCategory items={pizza} />
}
              </TabPanel>
              <TabPanel>
              {loading ? <CardLoading /> :                 <ShopCategory items={dessert} />
            }
              </TabPanel>
              <TabPanel>
              {loading ? <CardLoading /> :                <ShopCategory items={soup} />
            }
              </TabPanel>
              <TabPanel>
              {loading ? <CardLoading /> : <ShopCategory items={drinks} />}
                
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default OurShop;

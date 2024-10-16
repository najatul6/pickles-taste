import { useEffect, useState } from "react";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";

const PopularPickles = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((response) => response.json())
      .then((data) => {
        const popularMenu = data.filter((item) => item.category === "popular");
        setMenu(popularMenu);
      });
  }, []);
  return (
    <section>
      <SectionHeading title="Popular Items" subTitle="Check it out" />
      <div>
        {menu?.map((item) => (
         <MenuItemCard key={item?._id} item={item}/>
        ))}
      </div>
    </section>
  );
};

export default PopularPickles;

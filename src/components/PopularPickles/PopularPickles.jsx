import { useEffect, useState } from "react";
import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";
import MenuBtn from "../Shared/MenuBtn/MenuBtn";

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
    <section className="w-11/12 mx-auto">
      <SectionHeading title="Popular Items" subTitle="Check it out" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {menu?.map((item) => (
         <MenuItemCard key={item?._id} item={item}/>
        ))}
      </div>
      <MenuBtn text="View full Menu"/>
    </section>
  );
};

export default PopularPickles;

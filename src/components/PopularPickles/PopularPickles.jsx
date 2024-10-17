import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";
import MenuBtn from "../Shared/MenuBtn/MenuBtn";
import useMenu from "../../hooks/useMenu";
import ItemsLoading from "../Shared/ItemsLoading/ItemsLoading";

const PopularPickles = () => {
  const [menu, loading] = useMenu();
  const popular = menu?.filter((item) => item.category === "popular");

  return (
    <section className="w-11/12 mx-auto">
      <SectionHeading title="Popular Items" subTitle="Check it out" />
      {/* Show loading and menu item list  */}
      {loading ? (
        <ItemsLoading />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {popular?.map((item) => (
            <MenuItemCard key={item?._id} item={item} />
          ))}
        </div>
      )}
      {/* Menu button */}
      <MenuBtn text="View full Menu" />
    </section>
  );
};

export default PopularPickles;

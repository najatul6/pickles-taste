import SectionHeading from "../Shared/SectionHeading/SectionHeading";
import MenuItemCard from "../Shared/MenuItemCard/MenuItemCard";
import MenuBtn from "../Shared/MenuBtn/MenuBtn";
import useMenu from "../../hooks/useMenu";

const PopularPickles = () => {
  const [menu,loading] = useMenu();
  const popular=menu?.filter((item) => item.category === "popular")
  
  // Loading State 
  if (loading) {
    return (
      <section className="w-11/12 mx-auto">
        <SectionHeading title="Popular Items" subTitle="Check it out" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Display a loading skeleton for the list */}
          {[...Array(4)].map((_, index) => (
            <div key={index} className="flex w-52 flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="skeleton h-16 w-16 shrink-0 rounded-full"></div>
                <div className="flex flex-col gap-4">
                  <div className="skeleton h-4 w-20"></div>
                  <div className="skeleton h-4 w-28"></div>
                </div>
              </div>
              <div className="skeleton h-32 w-full"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="w-11/12 mx-auto">
      <SectionHeading title="Popular Items" subTitle="Check it out" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {popular?.map((item) => (
          <MenuItemCard loading={loading} key={item?._id} item={item} />
        ))}
      </div>
      <MenuBtn text="View full Menu" />
    </section>
  );
};

export default PopularPickles;

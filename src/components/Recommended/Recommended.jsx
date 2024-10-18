import SectionHeading from "../Shared/SectionHeading/SectionHeading"
import useMenu from "../../hooks/useMenu"
import ShopCategroy from "../Shared/ShopCategroy/ShopCategroy"

const Recommended = () => {
    const [menu] = useMenu()
    const offeredItem = menu?.filter(item=> item.category === 'offered')
   
  return (
    <section className="w-11/12 mx-auto">
        <SectionHeading subTitle="Should Try" title="Our Recommends"/>
        <ShopCategroy items={offeredItem}/>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                offeredItem?.map(items=><ItemCard key={items?._id} item={items}/>)
            }
        </div> */}
    </section>
  )
}

export default Recommended
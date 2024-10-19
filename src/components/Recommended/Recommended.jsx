import SectionHeading from "../Shared/SectionHeading/SectionHeading"
import useMenu from "../../hooks/useMenu"
import ShopCategroy from "../Shared/ShopCategory/ShopCategory"
import CardLoading from "../Shared/cardLoading/CardLoading"

const Recommended = () => {
    const [menu] = useMenu()
    const offeredItem = menu?.filter(item=> item.category === 'offered')
   
  return (
    <section className="w-11/12 mx-auto">
        <SectionHeading subTitle="Should Try" title="Our Recommends"/>
        <ShopCategroy items={offeredItem}/>
       <CardLoading/>
    </section>
  )
}

export default Recommended
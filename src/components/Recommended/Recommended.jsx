import SectionHeading from "../Shared/SectionHeading/SectionHeading"
import useMenu from "../../hooks/useMenu"
import ShopCategory from "../Shared/ShopCategory/ShopCategory"
import CardsLoading from "../Shared/CardsLoading/CardsLoading"

const Recommended = () => {
    const [menu,loading] = useMenu()
    const offeredItem = menu?.filter(item=> item.category === 'offered')
   
  return (
    <section className="w-11/12 mx-auto">
        <SectionHeading subTitle="Should Try" title="Our Recommends"/>
        {loading?<CardsLoading/>:
        <ShopCategory items={offeredItem}/>
        }
    </section>
  )
}

export default Recommended
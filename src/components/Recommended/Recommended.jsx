import { useState } from "react"
import SectionHeading from "../Shared/SectionHeading/SectionHeading"
import { useEffect } from "react"
import ItemCard from "../Shared/ItemCard/ItemCard"

const Recommended = () => {
    const [offered,setOffered] =useState([])
    useEffect(()=>{
        fetch('/menu.json')
        .then(res=>res.json())
        .then(data=>{
            const offeredItem = data.filter(item=> item.category === 'offered')
            setOffered(offeredItem)
        })
    },[])
  return (
    <section className="w-11/12 mx-auto">
        <SectionHeading subTitle="Should Try" title="Our Recommends"/>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                offered?.map(items=><ItemCard key={items?._id} item={items}/>)
            }
        </div>
    </section>
  )
}

export default Recommended
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
    <div>
        <SectionHeading subTitle="Should Try" title="Our Recommends"/>
        <div>
            {
                offered?.map(items=><ItemCard key={items?._id} item={items}/>)
            }
        </div>
    </div>
  )
}

export default Recommended
import { useState } from "react"
import SectionHeading from "../Shared/SectionHeading/SectionHeading"
import { useEffect } from "react"

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

    </div>
  )
}

export default Recommended
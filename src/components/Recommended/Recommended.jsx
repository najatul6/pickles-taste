import { useState } from "react"
import SectionHeading from "../Shared/SectionHeading/SectionHeading"
import { useEffect } from "react"

const Recommended = () => {
    const [offered,setOffered] =useState([])
    useEffect(()=>{
        fetch('/menu.json')
    },[])
  return (
    <div>
        <SectionHeading subTitle="Should Try" title="Our Recommends"/>

    </div>
  )
}

export default Recommended
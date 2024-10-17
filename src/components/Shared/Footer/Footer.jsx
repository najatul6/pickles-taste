import { Link } from "react-router-dom"
import logo from "../../../assets/logo.svg"

const Footer = () => {
  return (
    <footer className="shadow-2xl bg-white/5 text-white tracking-wide">
    <div className="py-12 px-12">
      <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
        <div>
          <Link to="/"><img src={logo} alt="logo" className='w-44 ' /></Link>
        </div>

        <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
          <li><Link to="/" className=" hover:underline text-base">Home</Link></li>
          <li><Link to="/our-menu" className=" hover:underline text-base">Our Menu</Link></li>
          <li><Link to="/our-shop" className=" hover:underline text-base">Our Shop</Link></li>
          <li><Link to="/contact-us" className=" hover:underline text-base">Contact Us</Link></li>
        </ul>
      </div>

      <hr className="my-6" />

      <p className='text-center  text-base'>&copy; <Link className="font-bold underline" to="https://najatul-islam.vercel.app/" target="_blank">Najatul Islam</Link>. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
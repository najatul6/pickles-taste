import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="shadow-inner tracking-wide">
    <div className="py-12 px-12">
      <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
        <div>
          <a href='javascript:void(0)'><img src="https://readymadeui.com/readymadeui-light.svg" alt="logo" className='w-44 ' /></a>
        </div>

        <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
          <li><a href="javascript:void(0)" className=" hover:underline text-base">Home</a></li>
          <li><a href="javascript:void(0)" className=" hover:underline text-base">About</a></li>
          <li><a href="javascript:void(0)" className=" hover:underline text-base">Services</a></li>
          <li><a href="javascript:void(0)" className=" hover:underline text-base">Contact</a></li>
        </ul>
      </div>

      <hr className="my-6 " />

      <p className='text-center  text-base'>&copy; <Link className="font-bold underline" to="htttps://najatul-islam.vercel.app">Najatul Islam</Link>. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
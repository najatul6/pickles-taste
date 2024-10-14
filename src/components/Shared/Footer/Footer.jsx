
const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 font-sans tracking-wide">
    <div className="py-12 px-12">
      <div className="flex flex-wrap items-center sm:justify-between max-sm:flex-col gap-6">
        <div>
          <a href='javascript:void(0)'><img src="https://readymadeui.com/readymadeui-light.svg" alt="logo" className='w-44 ' /></a>
        </div>

        <ul className="flex items-center justify-center flex-wrap gap-y-2 md:justify-end space-x-6">
          <li><a href="javascript:void(0)" className="text-gray-300 hover:underline text-base">Home</a></li>
          <li><a href="javascript:void(0)" className="text-gray-300 hover:underline text-base">About</a></li>
          <li><a href="javascript:void(0)" className="text-gray-300 hover:underline text-base">Services</a></li>
          <li><a href="javascript:void(0)" className="text-gray-300 hover:underline text-base">Contact</a></li>
        </ul>
      </div>

      <hr className="my-6 border-gray-500" />

      <p className='text-center text-gray-300 text-base'>© ReadymadeUI. All rights reserved.</p>
    </div>
  </footer>
  )
}

export default Footer
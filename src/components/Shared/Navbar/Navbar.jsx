
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container relative flex justify-between items-center py-8 bg-gradient-back backdrop-blur-[50px]">
          {/* Logo Section  */}
          <div className="text-2xl font-bold uppercase flex items-center gap-2">
            <AiFillAndroid className="text-white" />
            <p>Android</p>
            <p className="text-white">Hub</p>
          </div>
          {/* Menu Section  */}
          <div className="hidden md:block">
            <ul className="flex justify-center items-center gap-6 text-white">
              {NavMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <a
                      href={item.link}
                      className="inline-block py-1 px-3 font-semibold hover:text-primary"
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* Icons Section  */}
          <div className="flex items-center gap-4">
            <button className="text-2xl text-white hover:text-primary hover:bg-white p-2 rounded-full duration-200">
              <CiSearch />
            </button>
            <button className="text-2xl text-white hover:text-primary hover:bg-white p-2 rounded-full duration-200">
              <PiShoppingCartThin />
            </button>
            <button className="hidden md:block font-semibold text-white border-2 rounded-md border-white px-6 py-2 duration-200 hover:bg-white hover:text-primary">
              Login
            </button>
          </div>
          {/* Mobile hamburger Menu Section  */}
          <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <MdClose className="text-4xl" />
            ) : (
              <MdMenu className="text-4xl" />
            )}
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar section  */}
      <ResponsiveMenu open={isOpen} absolute={absolute} />
    </>
  )
}

export default Navbar
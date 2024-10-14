import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
        <h1 className="text-red-500">
        header
        </h1>
        <Outlet/>
    </div>
  )
}

export default MainLayout
import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import Navber from "../Navber/Navber"
const Root = () => {
  return (
    <div className="bg-color">
      <Navber/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root

import Nav from "./Nav"
import Home from "./Home"
import { Outlet } from "react-router-dom"

import "./layout.css"

function Layout() {
  return (
    <div className='layout'>
      <Nav />
      <Outlet />
    </div>
  )
}

export default Layout

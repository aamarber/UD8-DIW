import React from 'react'
import NavbarItem from './NavbarItem'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Navbar.scss'

function Navbar(props) {
  const { navItems } = props;
  
    const navItemElements = navItems.map((item, index) => <NavbarItem key={index} displayText={item.displayText} link={item.link}/> );

  return (
    <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {navItemElements}
        </ul>
      </div>
    </div>
</nav>
  )
}

export default Navbar

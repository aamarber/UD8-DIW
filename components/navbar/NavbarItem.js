import React from 'react'
import './NavbarItem.scss'

function NavbarItem(props) {
    const { link, displayText } = props;

    return (
        <li className="nav-item">
          <a className="nav-link" href={link}>{displayText}</a>
        </li>
    );
}  

export default NavbarItem
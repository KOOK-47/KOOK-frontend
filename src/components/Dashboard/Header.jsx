/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faGear, faCircleUser, faBars, faXmark} from '@fortawesome/free-solid-svg-icons'
import "../../assets/styles/Header.css"
import searchbar from "../../assets/images/headerbar.png"

function Header({ mobileNav, toggleNav}) {
  return (
    <header className='header'>

    {/* Mobile Hamburger toggler */}
   <a className='mobile-menu' onClick={toggleNav}>
      { mobileNav ? 
        <FontAwesomeIcon className='mobile-icon' icon={faXmark} size='xl' /> : 
        <FontAwesomeIcon className='mobile-icon' icon={faBars} size='xl'/>}
    </a>

    <div className='header-logo'>
        <FontAwesomeIcon className='header-item user' icon={faCircleUser} size='6x' />
    </div>

    <div className='header-items'>
        <img src={searchbar} alt="search"/>
    </div>

  </header>
  )
}

export default Header
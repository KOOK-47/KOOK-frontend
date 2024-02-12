/* eslint-disable react/prop-types */
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCreditCard, faDollar, faWallet, faGears, faExchangeAlt} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import "../../assets/styles/Nav.css"




function Nav({ mobileNav, toggleNav }) {

    
  return (
    <nav id="dashboard-nav" className={ mobileNav ? 'navigation' : ''}>
      <NavLink to="." 
        className="nav-dashboard"
        onClick={toggleNav}
        end>
      
          <h3>Home</h3>
      </NavLink>

      <NavLink to="unavailable" 
        className="nav-dashboard" 
        onClick={toggleNav}>
          
          <h3>Messages</h3>
      </NavLink>

      <NavLink to="notification" 
        className="nav-dashboard" 
        onClick={toggleNav}>
          
          <h3>Notifications</h3>
      </NavLink>

      <NavLink to="create" 
        className="nav-dashboard" 
        onClick={toggleNav}>
         
          <h3>Create</h3>
      </NavLink>

      <NavLink to="unavailable" 
        className="nav-dashboard" 
        onClick={toggleNav}>
       
          <h3>Settings</h3>
      </NavLink>

      <NavLink to="unavailable" 
        className="nav-dashboard" 
        onClick={toggleNav}>
       
          <h3>Profile</h3>
      </NavLink>

      <NavLink to="unavailable" 
        className="nav-dashboard" 
        onClick={toggleNav}>
      
          <h3>History</h3>
      </NavLink>

      <NavLink to="unavailable" 
        className="nav-dashboard" 
        onClick={toggleNav}>
    
          <h3>Explore</h3>
      </NavLink>
    </nav>
  )
}

export default Nav
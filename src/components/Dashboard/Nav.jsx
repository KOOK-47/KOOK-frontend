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
      
          <h3>Balance</h3>
      </NavLink>

      <NavLink to="transactions" 
        className="nav-dashboard" 
        onClick={toggleNav}>
          
          <h3>Transactions</h3>
      </NavLink>

      <NavLink to="transactions" 
        className="nav-dashboard" 
        onClick={toggleNav}>
          
          <h3>Transactions</h3>
      </NavLink>

      <NavLink to="transactions" 
        className="nav-dashboard" 
        onClick={toggleNav}>
         
          <h3>Transactions</h3>
      </NavLink>

      <NavLink to="transactions" 
        className="nav-dashboard" 
        onClick={toggleNav}>
       
          <h3>Transactions</h3>
      </NavLink>

      <NavLink to="wallet" 
        className="nav-dashboard" 
        onClick={toggleNav}>
       
          <h3>Wallet</h3>
      </NavLink>

      <NavLink to="rates" 
        className="nav-dashboard" 
        onClick={toggleNav}>
      
          <h3>Exchange Rates</h3>
      </NavLink>

      <NavLink to="settings" 
        className="nav-dashboard" 
        onClick={toggleNav}>
    
          <h3>Settings</h3>
      </NavLink>
    </nav>
  )
}

export default Nav
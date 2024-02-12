import React, {useState} from 'react';
import { userAuth } from '../context/AuthContext';
import Header from './Dashboard/Header';
import Nav from './Dashboard/Nav';
import { Outlet } from 'react-router-dom'
import "../assets/styles/Dashboard.css"




function Dashboard() {

  const { user } = userAuth()
  console.log(user)


    // State to handle Hamburger Menu on Mobile View
    const [mobileNav, setMobileNav] = useState(() => false);

    function toggleNav(){
      setMobileNav(prevState => !prevState)
    }
  return (
    <section className='dashboard'>    
        <Header 
        mobileNav={mobileNav}
        toggleNav={toggleNav}
        />
  
      
        <section className='main'>
          <Nav 
            mobileNav={mobileNav}
            toggleNav={toggleNav}
          />
          <div className='main-content'>
            <Outlet />
          </div>
        </section> 
         
    </section>
  )
}

export default Dashboard
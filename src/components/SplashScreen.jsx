import React from 'react'
import '../assets/styles/SplashScreen.css'
import { Link } from 'react-router-dom'

const SplashScreen = () => {
  return (
    <div className='splash'>
        <Link to='/signup'> <button>Kook</button></Link>
        <Link to='/signup'> <button>Klient</button></Link>
    </div>
  )
}

export default SplashScreen
import React from 'react'
import '../Styles/Navbar.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div class="topnav">
        <header><b>PortFolio.com</b></header>
 
 <NavLink to='/'> <a>Home</a></NavLink>
 <NavLink to='/myresume'> <a>My Resume </a></NavLink>
 <NavLink to='/about'> <a>About us</a></NavLink>
</div>
    </div>
  )
}

export default Navbar

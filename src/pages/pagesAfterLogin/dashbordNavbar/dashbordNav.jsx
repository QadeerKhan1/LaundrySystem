import React from 'react'
import './dashbordNav.css'
import { Link,NavLink } from 'react-router-dom'

import Uprofile from '../../../component/Images/mypic.jpg'
import aqbrand from '../../../component/Images/AqBrand2.png'
export default function dashbordNav() {
  return (
    <>
    <nav className='dashbordnav'>
  <div class="navbar-logos aqBrand">
   <img  src={aqbrand} alt="" />
  </div>
  <button class="navbar-toggle">
    <i class="fa fa-bars"></i>
  </button>
  <ul class="navbar-menu">
    <li class=" "><NavLink className='Link'  to='/' >Dashboard</NavLink> </li>
    <li class="navbar-item"><NavLink className='Link' activeClassName="active" to='/payment' >  Payment</NavLink></li>
    <li class="navbar-item"><NavLink className='Link' activeClassName="active" to='/orderRouting' >  Orders</NavLink></li>
    <li class="navbar-item"><NavLink className='Link' activeClassName="active" to='/servicesMain' > Services</NavLink></li>
    <li class="navbar-item"><NavLink className='Link' activeClassName="active" to='/rating' > Rating</NavLink></li>
    <li class="navbar-item"><NavLink className='Link' activeClassName="active" to='/profile' >  Profile</NavLink></li>
  </ul>
  <div class="navbar-logo">
    <img src={Uprofile} alt="" />
  </div>
</nav>

    </>
  )
}

import React from 'react'
import './dashbordNav.css'
import { Link } from 'react-router-dom'

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
    <li class="navbar-item "><Link className='Link'  to='/' >Dashboard</Link> </li>
    <li class="navbar-item"><Link className='Link' to='/payment' >  Payment</Link></li>
    <li class="navbar-item"><Link className='Link' to='/orderRouting' >  Orders</Link></li>
    <li class="navbar-item"><Link className='Link' to='/servicesMain' > Services</Link></li>
    <li class="navbar-item"><Link className='Link' to='/rating' > Rating</Link></li>
    <li class="navbar-item"><Link className='Link' to='/profile' >  Profile</Link></li>
  </ul>
  <div class="navbar-logo">
    <img src={Uprofile} alt="" />
  </div>
</nav>

    </>
  )
}

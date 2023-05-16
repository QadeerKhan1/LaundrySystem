import React from 'react'
import './dashbordNav.css'
import { Link } from 'react-router-dom'

import Uprofile from '../../../component/Images/mypic.jpg'
export default function dashbordNav() {
  return (
    <>
    <nav className='dashbordnav'>
  <div class="navbar-logo">
    <a  id='LaundrySystem'>Laundry System</a>
  </div>
  <button class="navbar-toggle">
    <i class="fa fa-bars"></i>
  </button>
  <ul class="navbar-menu">
    <li class="navbar-item "><Link to='/' > <a href="#">Dashboard</a></Link> </li>
    <li class="navbar-item"><Link to='/payment' > <a href="#">Payment</a></Link></li>
    <li class="navbar-item"><Link to='/orderRouting' > <a href="#">Orders</a></Link></li>
    <li class="navbar-item"><Link to='/servicesMain' > <a href="#">Services</a></Link></li>
    <li class="navbar-item"><Link to='/rating' > <a href="#">Rating</a></Link></li>
    <li class="navbar-item"><Link to='/contact' > <a href="#">Contact</a></Link></li>
  </ul>
  <div class="navbar-logo">
    <img src={Uprofile} alt="" />
  </div>
</nav>

    </>
  )
}

import React from 'react'
import './dashbordNav.css'
import Uprofile from '../../../component/Images/mypic.jpg'
export default function dashbordNav() {
  return (
    <>
    <nav className='dashbordnav'>
  <div class="navbar-logo">
    <a href="#">Laundry System</a>
  </div>
  <button class="navbar-toggle">
    <i class="fa fa-bars"></i>
  </button>
  <ul class="navbar-menu">
    <li class="navbar-item "><a href="#">Dashboard</a></li>
    <li class="navbar-item"><a href="#">Payment</a></li>
    <li class="navbar-item"><a href="#">Orders</a></li>
    <li class="navbar-item"><a href="#">Services</a></li>
    <li class="navbar-item"><a href="#">Rating</a></li>
    <li class="navbar-item"><a href="#">Contact</a></li>
  </ul>
  <div class="navbar-logo">
    <img src={Uprofile} alt="" />
  </div>
</nav>

    </>
  )
}

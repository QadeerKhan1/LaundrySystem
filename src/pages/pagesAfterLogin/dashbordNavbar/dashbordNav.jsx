import React from 'react'
import './dashbordNav.css'
import { NavLink } from 'react-router-dom'

import Uprofile from '../../../component/Images/mypic.jpg'
import aqbrand from '../../../component/Images/AqBrand2.png'
import { useNavigate } from 'react-router-dom'
import {auth} from '../../../Config/firebaseConfig'
export default function DashbordNav() {
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/createAccount'); // Redirect to the homepage or login page
    } catch (error) {
      // Handle logout error
      console.log(error);
    }
  };

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
  <div class="navbar-logo" style={{display:'flex',marginRight:"5px"}}>
  <div><button type="button" style={{borderColor:'gray',borderRadius:"10px",height:"35px",background:"black",marginTop:"10px"}} onClick={handleLogout} class="btn btn-dark">Logout</button>
</div>
    <img src={Uprofile} alt="" />
  </div>
</nav>

    </>
  )
}

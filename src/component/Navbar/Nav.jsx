import React from 'react';
import logo from '../Images/laundryLogo.png';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Nav.css'

export default function Navbar() {
  
  return (
   <>
  <div className="navbarDiv">
  <nav class="navbar navbar-expand-lg navbar-light  ">
  <div class="container-fluid  " id='navMain'>
    <a class="navbar-brand" href="#"><img src={logo} alt="" style={{width:'120px',height:'100px'}} /></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse allitem" id="navbarNav">
      <ul class="navbar-nav mx-auto" >
        <li class="nav-item">
          <a href=""><Link style={{color:"black"}}  to="/">Home</Link>
</a>
        </li>
        <li class="nav-item">
          <a ><Link style={{color:"black"}} to='/services'>Feature</Link></a>
        </li>
        <li class="nav-item">
          <a ><Link style={{color:"black"}}  to='/pricing'>Pricing</Link></a>
        </li>
        <li class="nav-item">
          <a ><Link style={{color:"black"}}  to='/contactUs'>Contact Us</Link></a>
        </li>
        <li class="nav-item">
          <a className='nav-link' href="#" id='orderbtn' class="btn btn-danger font-weight-bold btn-pill"><Link style={{color:"black"}}  to="/signup">Order</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
   
   </>
  )
}

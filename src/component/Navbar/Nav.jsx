import React from 'react';
import logo from '../Images/laundryLogo.png';
import { Outlet, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import './Nav.css'

export default function Navbar() {
  
  return (
   <>
  <div className="navbarDiv">
  <nav className="navbar navbar-expand-lg navbar-light  ">
  <div className="container-fluid  " id='navMain'>
    <a className="navbar-brand" href="#"><img src={logo} alt="" style={{width:'120px',height:'100px' }} /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">   
       <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse allitem" id="navbarNav">
      <ul className="navbar-nav mx-auto" >
        <li className="nav-item">
          <a href=""><Link style={{color:"black"}}  to="/">Home</Link>
</a>
        </li>
        <li className="nav-item">
          <a ><Link style={{color:"black"}} to='/services'>Feature</Link></a>
        </li>
        <li className="nav-item">
          <a ><Link style={{color:"black"}}  to='/pricing'>Pricing</Link></a>
        </li>
        <li className="nav-item">
          <a ><Link style={{color:"black"}}  to='/contactUs'>Contact Us</Link></a>
        </li>
        <li className="nav-item">
          <a className='nav-link' href="#" id='orderbtn' className="btn btn-danger font-weight-bold btn-pill"><Link style={{color:"black"}}  to="/signup">Order</Link></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
   
   </>
  )
}

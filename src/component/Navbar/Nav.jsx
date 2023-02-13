import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './Nav.css'

export default function Navbar() {
  
  return (
   <>
  <div className="navbarDiv">
  <nav class="navbar navbar-expand-lg navbar-light  ">
  <div class="container-fluid  " id='navMain'>
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse allitem" id="navbarNav">
      <ul class="navbar-nav mx-auto" >
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#" >Contact Us</a>
        </li>
        <li class="nav-item">
          <a className='nav-link' href="#" id='orderbtn' class="btn btn-danger font-weight-bold btn-pill">Order</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  </div>
   
   </>
  )
}

import React from 'react'
import './customerNav.css'
import img from '../Images/AqBrand2.png'
import {  MdForwardToInbox} from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';

import { RiUserSearchFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
export default function CustomerNav() {
  return (
    <>
         <nav class="navbaR">
    
      <div className="signUpLogo">
      <img src={img} alt="" />
      <span><h4 style={{color:'white'}}>Laundry</h4></span>
    </div>
    <div className="searchBarWrapper">
        <input type="text" placeholder="Search.." name="search" />
        <li type="submit"><RiUserSearchFill/></li>
    </div>
    <div className="navbarIcons">
    <div><IoNotificationsOutline/></div>
    <div><MdForwardToInbox/></div>
    <div><CgProfile/></div>

    </div>
   
      
   
  </nav>
  
    </>
  )
}
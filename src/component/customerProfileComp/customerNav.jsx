import React from 'react'
import './customerNav.css'
import img from '../Images/AqBrand2.png'
import {  MdForwardToInbox} from 'react-icons/md';
import { IoNotificationsOutline } from 'react-icons/io5';
import ProfileDropdown from './profileDropdownMenu';

import { RiUserSearchFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { getAuth } from 'firebase/auth';
export default function CustomerNav() {

  const handleLogout = async () => {
    const auth = getAuth();
     await auth.signOut().then(() => {
      console.log("Sign-out successful.")
    }).catch((error) => {
      console.log("An error happened.")
    });
  }


  return (
    <>
         <nav class="navbaR">
    
      <div className="signUpLogo">
      <img src={img} alt="" />
      

      <span><h4 style={{color:'white'}}>Laundry</h4></span>
      <button type="button" onClick={handleLogout} class="btn btn-dark">Logout</button>
    </div>
    <div className="searchBarWrapper">
        <input type="text" placeholder="Search.." name="search" />
        <li type="submit"><RiUserSearchFill/></li>
    </div>
    <div className="navbarIcons">
    <div><IoNotificationsOutline/></div>
    <div><MdForwardToInbox/></div>
    <div><CgProfile /></div>

    </div>
   
      
   
  </nav>
  
    </>
  )
}
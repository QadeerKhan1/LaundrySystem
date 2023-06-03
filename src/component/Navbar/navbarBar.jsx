import React from 'react'
import img from '../../component/Images/AqBrand2.png'
import {Link} from 'react-router-dom'
import './Nav.css'
export default function navbarBar() {
  return (
    <>
     <div className="signUpBar">
    <div className="signUpLogo">
    <img src={img} alt="" />

    </div>
    <div className="signUpDesc">
    <Link style={{textDecoration:'none',color:"white"}} to="/"><h4>Home</h4></Link>
      </div>
    </div>
    </>
  )
}

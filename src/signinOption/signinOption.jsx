import React from 'react'
import './signinOption.css'
import { Link } from 'react-router-dom'
import img from '../component/Images/AqBrand2.png'

export default function signinOption({parent}) {

    const getOption=(option)=>{
       
        parent(option)

    }
  return (
    <>
    <div>
    
    <div className="signUpBar">
    <div className="signUpLogo">
      <img src={img} alt="" />
    </div>
    <div className="signUpDesc">
    <Link style={{textDecoration:'none',color:"white"}} to="/"><h4>Home</h4></Link>
      </div>

  </div>
    <div className="optionWrapper">
    <div className='optionMain'>
    <h2>Login as a :</h2>
    <div className="options">
      <button onClick={()=>{getOption("Laundry")}} type="button" className="btn btn-outline-white  mx-10">Laundry</button>
    <button onClick={()=>{getOption("Customer")}} type="button" className="btn btn-outline-white">Customer</button>
     
    </div>

    </div>
  </div>
    </div>
    </>
  )
}

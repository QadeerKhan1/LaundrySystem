import React from 'react'
import DashbordNav from '../dashbordNavbar/dashbordNav'
import SecondNav from '../Orders/OrderRouting/secondNav'
import AllReviews from './allReviews/allReviews'
import './Rating.css'
import { Outlet } from 'react-router-dom'
export default function Rating() {
  return (
    <>
    <div className="">
    <DashbordNav/>
    <SecondNav first={'AllReviews'}/>
    <Outlet/>
    
   
    </div>
    
    
    </>
  )
}

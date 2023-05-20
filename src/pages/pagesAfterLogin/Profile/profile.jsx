import React from 'react'
import DashbordNav from '../../pagesAfterLogin/dashbordNavbar/dashbordNav'
import SecondNav from '../Orders/OrderRouting/secondNav'
import { Outlet } from 'react-router-dom'

export default function profile() {
  return (
    <>
    <DashbordNav/>
    <SecondNav first='MyInformation'  />
    <Outlet/>
    
    </>
  )
}

import React from 'react'
import DashbordNav from '../dashbordNavbar/dashbordNav'
import SecondNav from '../Orders/OrderRouting/secondNav'
import { Outlet } from 'react-router-dom'
export default function servicesMain() {
  return (
    <>
   <div>
   <DashbordNav/>
    <SecondNav first='myServices' second='manageServices' />
    <Outlet/>
         
   </div>

    </>
  )
}

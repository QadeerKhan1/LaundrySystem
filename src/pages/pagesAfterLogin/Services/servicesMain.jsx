import React from 'react'
import DashbordNav from '../dashbordNavbar/dashbordNav'
import SecondNav from '../Orders/OrderRouting/secondNav'
import { Outlet, Outlets } from 'react-router-dom'
import ServiceCard from '../../../component/serviceCards/serviceCard'
export default function servicesMain() {
  const arr=[1,2,3,4,34,4,3,3]
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

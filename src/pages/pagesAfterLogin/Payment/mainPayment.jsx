import React from 'react'
import DashbordNav from '../dashbordNavbar/dashbordNav'
import '../Payment/totalBalance/totalBalance.css'
import SecondNav from '../Orders/OrderRouting/secondNav'
import { Outlet} from 'react-router-dom'
export default function mainPayment() {

  return (
    <>
    <DashbordNav/>
    <SecondNav first='totalBalance' second='receiveBalance' third='pendingBalance' />
    
    <Outlet/>

    </>

  )
}

import React from 'react'
import DashbordNav from '../dashbordNavbar/dashbordNav'
import '../Payment/totalBalance/totalBalance.css'
import SecondNav from '../Orders/OrderRouting/secondNav'
import { Link ,Outlet} from 'react-router-dom'
export default function mainPayment() {

  return (
    <>
    <DashbordNav/>
    <SecondNav first='totalBalance' second='receiveBalance' third='pendingBalance' />
    <div  className='totalBalance'>
      <h1>Total Balance recieved from Orders : 234$</h1>
      
    </div>
    <Outlet/>

    </>

  )
}

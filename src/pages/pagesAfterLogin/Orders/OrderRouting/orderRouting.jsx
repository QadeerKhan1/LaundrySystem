import React from 'react';
import { Link ,Outlet} from 'react-router-dom';
import DashbordNav from '../../dashbordNavbar/dashbordNav';
import SecondNav from './secondNav';
import './orderRouting.css';
export default function OrderRouting() {
  return (
    <>
    <DashbordNav/>
      <SecondNav first='completedOrder' second='pendingOrder' third='cancelOrder'/>
          <Outlet/>


      
    </>
    
  )
}

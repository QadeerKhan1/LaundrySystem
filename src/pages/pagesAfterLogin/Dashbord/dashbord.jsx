import React from 'react'
import DashbordNav from '../dashbordNavbar/dashbordNav'
import DashobordCards from '../../../component/dashbordCards/dashbordCards'
export default function dashbord() {
  return (
    <>
    <div className='dashbordMain'>
    <DashbordNav/> 
    <DashobordCards/>
      </div> 

    </>
  )
}

import React from 'react'
import DashbordNav from '../dashbordNavbar/dashbordNav'
import DashbordCards from './dashbordCards/dashbordCards'

export default function dashbord() {
  return (
    <>
    <div className='dashbordMain'>
    <DashbordNav/> 
     <DashbordCards/>
      </div> 

    </>
  )
}

import React from 'react'
import ServiceCard from '../../../../component/serviceCards/serviceCard'
export default function myServices() {
  const arr=[1,2,3,4]
  return (
    <>
         
    <div className="row">
    {arr.map((item) =>{
      return( <>
     <div className='col-3'>
     <ServiceCard priceBtn={'130pkr'} addRemovebtn={'Remove'} />
     </div>
      </>)
    }  )}
    </div>

    </>
  )
}

import React from 'react'
import ServiceCard from '../../../../component/serviceCards/serviceCard'
export default function manageServices() {
    const arr=[1,2,3,4,4,5,6,4]

  return (
    <>
    manage
       <div className="row">
    {arr.map((item) =>{
      return( <>
     <div className='col-3'>
     <ServiceCard priceBtn={'140pkr'} addRemovebtn={'Add To Cart'} />
     </div>
      </>)
    }  )}
    </div>

    </>
  )
}

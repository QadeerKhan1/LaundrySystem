import React from 'react'
import img1 from '../Images/image3.jpg'

export default function customerHeader() {
  return (
  <>
    
    <div className="customerHeaderMain row">
    <div className="customerHeaderLeft col-4">
        <h2>Hey , Abdul Qadeer</h2>
        <p style={{fontWeight:"bold"}} >Are You Looking For Laundry</p>
    </div>
    <div className="customerHeaderRight col-8">

    <img src={img1} alt="" />
    
    </div>

   </div>



  
  </>
  )
}

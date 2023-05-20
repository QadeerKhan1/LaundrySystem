import React from 'react'
import RatingHeader from '../../../../component/ratingComps/ratingHeader'
import RatingUserReview from '../../../../component/ratingComps/ratingUserReview'

export default function allReviews() {
  const arr=[2,3,4]
 
  return (
    <>
    <RatingHeader/>
   
   <div >
 
   {arr.map((a)=>{ return( <RatingUserReview/>)})  }
   </div>
    </>
  )
}

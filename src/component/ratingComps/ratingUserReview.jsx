import React from 'react'
import image1 from '../Images/person (2).png'
import { FaRegStar } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai'
export default function ratingUserReview() {
    const star =[1,2,3,4]
  return (
    <>
    

        <div className="ratingUserMain row">
        <hr  id='ratingTopBar'/>

            <div className="ratingUserLeft col-4">
                <div><img src={image1} alt="" /></div>
                <div><h5>A Q KHAN</h5></div>
            </div>
            <div className="ratingUserRight col-8">
                <div className="ratingUserTop ">
                <div >
                           {star.map((item,index)=>{
                                 return(
                                    <span key={index} style={{fontSize:'25px',marginLeft:'2px' ,color:'yellow',}}> <AiFillStar/></span>
                                 )
                           })
                           }
                       <span style={{fontSize:'23px',marginLeft:'2px',marginTop:'-10px'}}> <FaRegStar/></span></div>
                    <div className='ratingDate'><h4>2-4-2023</h4></div>
                </div>
                <div className="ratingUserMiddle">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Hic optio odit tenetur nihil quos blanditiis? Ratione porro unde reprehenderit, 
                        at dolores magni facere hic quos a quam deleniti praesentium nihil.Lorem Ipsum 
                        is simply dummy text of the printing and typesetting industry. 
                        </p>
                </div>
                
                <div className="ratingUserBottom">
                <button type="button" className="btn btn-outline-secondary ratingbtnone">Public Comment </button>
                <button type="button" className="btn btn-outline-secondary ratingbtntwo">Direct Comment</button>

                </div>

            
            </div>

        </div>
    
    </>
  )
}

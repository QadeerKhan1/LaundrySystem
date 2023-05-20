import React from 'react'
import { FaRegStar } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai'
import './ratingComps.css'
export default function ratingHeader() {
   const start =[1,2,3,4]
  return (
    <>

    <div className="ratingMain">
        <div className="ratingHeader row">
            <div className="ratingHeaderLeft col-4">
                <h3>Reviews</h3>
                <p>Total Reviews</p>
                <h2>10.2k views</h2>
                </div>
             <div className="ratingHeaderCenter col-4">
             <h4>Average Reviews</h4>
                    <div style={{display:'flex', justifycontent: 'center',
}}>
                        <h2>4.5</h2>
                        <span >
                           {start.map((item,index)=>{
                                 return(
                                    <span key={index} style={{fontSize:'25px',marginLeft:'2px' ,color:'yellow',}}> <AiFillStar/></span>
                                 )
                           })
                           }
                       <span style={{fontSize:'23px',marginLeft:'2px',marginTop:'-10px'}}> <FaRegStar/></span></span>
                    </div>
                    </div>
                <div className="ratingHeaderRight col-4">
                    <div className="ratingOne">
                       <h2>1</h2>
                       <hr className="new1"/><span style={{margin:'0px 0px -4px 5px'}}><h6 >7.4k</h6></span>
                    </div>
                    <div className="ratingTwo">
                    <h2>2</h2>
                       <hr className="new2"/>
                       <span style={{margin:'0px 0px -4px 5px'}}><h6 >7.2k</h6></span>
                    </div>
                    <div className="ratingThree">
                    <h2>3</h2>
                       <hr className="new3"/>
                       <span style={{margin:'0px 0px -4px 5px'}}><h6 >5.6k</h6></span>
                    </div>
                    <div className="ratingFour">
                    <h2>4</h2>
                       <hr className="new4"/>
                       <span style={{margin:'0px 0px -4px 5px'}}><h6 >4.7k</h6></span>
                    </div>
                    <div className="ratingFive">
                    <h2>5</h2>
                       <hr className="new5"/>
                       <span style={{margin:'0px 0px -4px 5px'}}><h6 >3.8k</h6></span>
                    </div>
                    
              
                    </div>
            
        </div>

    </div>
    </>
  )
}

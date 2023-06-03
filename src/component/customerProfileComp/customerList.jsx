import React from 'react'
import conv from '../Images/conv.png'
import './customerNav.css'
import { AiFillStar } from 'react-icons/ai'
export default function customerList() {
  const list=[2,3,4,5,5,6,7,3]
  return (
    <>
    <div className="ListMain row">
      <span ><h2>Most Rated Laundries :</h2></span>
    {list.map((e)=>{
      return(
        <>
        <div className="card col-4 " style={{width:"23rem",marginTop:'20px',marginRight:"20px"}} >
      
      
      <img src={conv} className="card-img-top"  alt="..."/>
      <div className="profileIcon">
        <div className="Picon">
        <img src={conv} className="card-img-top rounded " alt="..."/>
        </div>
            <div className="porfileDesc">
              <span><h6>A Q KHAN</h6></span>
              <span>Top rate seller</span>
            </div>
          </div>
      <div className="card-body">
        <p style={{margin:'0px'}} className="card-text">We have an twenty four hr Service
    Available with Perfect Staff and Machinery.</p>
    <span style={{color: "yellow",fontSize:"30px",margin:'0px'}}> <AiFillStar  /><span style={{color:'black',fontSize:"20px"}}> 5.0 (154)</span></span>
      </div>
      </div>
        </>
      )
    })}
    </div>


    </>
  )
}

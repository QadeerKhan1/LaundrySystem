import React from 'react'
import ServiceCursole from '../../pages/Services/serviceCursole/serviceCursole'
import './midCursole.css'
import { FaSignInAlt } from 'react-icons/fa';


export default function midCursole() {
  let arr=[2,3,4,5]
  return (
   <>
   <div className="topFooter">
   <ServiceCursole/>
   <div className="Topheader">
            <h1>Clean Clothes Have Never Been This Easy!</h1>
            <hr />
            <p>HOW OUR SERVICE WORKS:</p>
        </div>
    
    <div className="mydiv row">
    {arr.map((ar)=>{
      return(
        <div class="mainCardDiv col-md-3 ">
         <div className="cardLogo"><a href="">
            <span><FaSignInAlt/></span>
         </a></div>
        <h4 class="sc_services_item_title"><a style={{color:"black"}}>SignUp</a>
        <hr /></h4>
        <div class="sc_services_item_description">
        <p>Etiam vitae leo et diam pellentesque porta. Sed eleifend ultricies risus, vel rutrum erat commodo ut. Praesent finibus congue euismod. Nullam...</p> </div>
        </div>
      )
     })}
    </div>
   </div>
   </>
  )
}

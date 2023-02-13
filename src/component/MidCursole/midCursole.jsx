import React from 'react'
import ServiceCursole from '../../pages/Services/serviceCursole/serviceCursole'
import './midCursole.css'
import { FaSignInAlt } from 'react-icons/fa';
import { AiFillCar } from 'react-icons/ai';

import { MdCleanHands } from 'react-icons/md';
import { RiUserReceivedFill } from 'react-icons/ri';







export default function midCursole() {
 
let myarr={
  Data:[
    {
      logo:<FaSignInAlt/>,
      action:"SignUp",
      Des:"Etiam vitae leo et diam pellentesque porta.vel rutrum erat commodo ut. Sed eleifend ultricies risus, vel rutrum erat commodo ut."
    },{
      logo:<AiFillCar/>,
      action:"Pick up",
      Des:"Etiam vitae leo et diam pellentesque porta. vel rutrum erat commodo ut. Sed eleifend ultricies risus, vel rutrum erat commodo ut."
    },
    {
      logo:<MdCleanHands/>,
      action:"Cleaning",
      Des:"Etiam vitae leo et diam pellentesque porta vel rutrum erat commodo ut. Sed eleifend ultricies risus, vel rutrum erat commodo ut."
    },{
      logo:<RiUserReceivedFill/>,
      action:"Delevry",
      Des:"Etiam vitae leo et diam pellentesque porta.  vel rutrum erat commodo ut. Sed eleifend ultricies risus, vel rutrum erat commodo ut."
    }
  ]
}
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
    {myarr.Data.map((ar)=>{
      return(
        <div class="mainCardDiv col-md-3 " >
         <div className="cardLogo"><a href="">
          <span>{ar.logo}</span>
         </a></div>
         <h4 class="sc_services_item_title"><a style={{color:"black"}}>{ar.action}</a>
            <hr /></h4>
        
        <div class="sc_services_item_description">
          <p>{ar.Des}</p>
        </div>
        </div>
      )
     })}
    </div>
   </div>
   </>
  )
}

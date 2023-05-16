import React from 'react'
import './orderComp.css'
import Routing from '../../pages/pagesAfterLogin/Orders/OrderRouting/orderRouting'
import { Link ,Outlet} from 'react-router-dom'
export default function orderComp() {
  const arr=[1,2,3,4,5,6,7,8,9,9]
  return (
    <>
        <div className="orderComp">
        <div className="orderNav">
        
        </div>
        <div className="orderTable">
          <div className="MainTableDiv">
            <div className="tableHeader">
              <ul>
                <li>Order#</li>
                <li>Customer</li>
                <li>Amount</li>
                <li>Date</li>
                <li>Payment</li>
                <li>Action</li>
              </ul>
            </div>
            <div className="tableContent">
            <ul>
             {arr.map((item)=>{
               return(
                <li><div className="listDiv">
                <div className="one">01</div>
                <div className="two">A Q KHAN</div>
                <div className="three">2500 $</div>
                <div className="four">EasyPaisa</div>
                <div className="fifth">2/5/2023</div>
                <div className="sixth">Pending</div>
                </div></li>
                )
              }
               )}
                
              </ul>
            </div>
          </div>
            
        </div>
            </div>
    </>
  )
}

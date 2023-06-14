import React,{useState,useEffect} from 'react'
import './orderComp.css'
export default function OrderComp({componentName}) {
  const [checkComp,setCheckComp]=useState([1,2,3,4,5,6,7,8,9,9])

  useEffect(()=>{
    console.log(componentName)
    if(componentName==="completedOrders"){
      setCheckComp([1,2,3,4,5,6,7,8,])
    }
    else if(componentName==="cancelOrder"){
      setCheckComp([1,2,3,4,])
    }
    else if(componentName==="pendingOrders"){

      setCheckComp([1,2,3,4,5,6,7,8])
    }
    else if(componentName==="pendingBalance"){
      setCheckComp([1,2,3,4])
    }
    else if(componentName==="totalBalance"){
      setCheckComp([1,2,3,])
    }
    else if (componentName==="receiveBalance"){
      setCheckComp([1,2,3,4,5,6])
    }
    else{
      setCheckComp([1,2,3,4,5,6,7,8,9,9])
    }
  
  },[])
 
  return (
    <>
        <div className="orderComp">
        
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
             {componentName ? checkComp.map((item)=>{
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
               ): <p>no data</p>}
                
              </ul>
            </div>
          </div>
            
        </div>
            </div>
    </>
  )
}

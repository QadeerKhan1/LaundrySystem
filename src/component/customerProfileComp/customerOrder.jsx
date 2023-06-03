import React from 'react'
import './customerNav.css'
import { AiFillStar } from 'react-icons/ai'
import img2 from '../Images/young.png'
import img1 from '../Images/mypic.jpg'
import shirt from '../Images/pngegg.png'
import { AiFillCloseCircle } from 'react-icons/ai'
export default function customerOrder() {
  const prfstar=[1,2,3,4,5]
  const services=[1,2,3,4]
  return (
    <>
      <div className="customerOrderWrapper">
        <h2>We have an twenty four hr Service Available with Perfect
Staff and Machinery</h2>
        <div className="customerOrderMain row" >
          <div className="customerOrderLeft col-8">
            <div className="customerOrderLeftTop">
              <div className="profileRatedBar">
                <div className="profileIcon">
                <img src={img1} alt="" />

                </div>
                <div className="profileName">
                <h4>A Q KHAN</h4>
                </div>
                <div className="profileRated">
                  <div style={{marginLeft:'20px',color:'#FFB406'}}><h4>Top Rated seller</h4></div>
                  <div><span className='varticle'></span></div>
                  {prfstar.map((e)=>{
                    return(
                      <>
                      <div className='profStar'> <AiFillStar/></div>
                      </>
                    )
                  })
                  }
                  <div style={{display:'flex',alignItems:"center",marginTop:"5px"}}><h4>5.0 (234)</h4></div>
                  </div>
              </div>
              </div>
              <div className="customerOrderLeftBottom">
              <div className="cardDiv">
              <div className="card" style={{width:"50rem"}}>
                  <img src={img2} className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">About Me :</h5>
                    <p className="card-text">
Hello, my name is Bernardino, a professional linguist with over 14 years
of translation experience at Fortune 100 companies and a Top Rated Seller
with over 2,500 completed orders here on Fiverr, specializing in Portuguese
,Spanish, and English legal and business documents.</p>
                   
                  </div>
                </div>              
              </div>
              <div className="customerServices">
                <h3>My Services :</h3>
                <div className="customerServicesList row">
                  {services.map((e)=>{ return(
                    <>
                    <div className="card col-4 mx-5 my-2 ">
                     <div className="card-body m-0 p-0 text-center">
                      <h4 className="card-title">Shirt</h4>
                      <p className="card-text"><img style={{width:"140px",height:"140px"}} src={shirt} alt="" /></p>
                      <div className="paymentSection">
                        <h3 style={{color:"#F32A35"}}>130 pkr</h3>
                       
                    </div>
                    <div className="paymentButton" style={{display:"flex",justifyContent:"space-between",padding:"0px",marginTop:"30px",width:"100%" }}>
                          <div><button style={{background: "linear-gradient(#F32A35, #E5C620)",fontSize:"20px"}} type="button" className="btn ">-</button></div>
                          <div><input style={{width:"140px",height:"30px",fontSize:"15px",marginTop:"5px"}} type="number" placeholder='Enter Amount' /></div>
                          <div><button style={{background: "linear-gradient(#22BBF2, #8D21E5)",fontSize:"20px"}} type="button" className="btn btn-info">+</button></div>
                          

                        </div>
                      </div>
                  </div> 
                    </>
                    )})
                  }
                    
                  </div>
              </div>
              </div>
          </div>
          <div className="customerOrderRight text-center col-4 ">
            <div className="customrOrderList text-center row  " style={{borderRadius:"10px",backgroundColor:"lightgray",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px"
          }}>
              <h2>Your All Orders :</h2>
              {services.map((e)=>{ return(
                    <>
                    <div className="customrOrder col-8" style={{margin:"0% auto"}}>
              <div className="card mb-3" style={{maxwidth:"540px" }}>
  <div className="row text-center  g-0">
    <div className="col-md-5 " style={{paddingTop:"10%",paddingLeft:"5%"}}>
      <img style={{width:"100px", height:"100px"}} src={shirt} className="img-fluid rounded-start" alt="..."/>
      
    </div>
    <div className="col-md-7 " style={{padding:"3%"}}>
      <span style={{marginLeft:"100px",color:'red',fontSize:"25px"}}><AiFillCloseCircle/></span>
      <div className="card-body">
        
        <h3 className="card-title">Shirt</h3>
        <p className="card-text"><h4 className="text-muted">1 * 4</h4></p>
      </div>
    </div>
  </div>
</div>

              </div>
                    </> )})
                  }
                  <div className="paymentBtn" style={{display:"block",paddingBottom:"5%"}}>
                    <div  ><button style={{background: "#22BBF2",fontSize:"14px",fontWeight:"bold",width:"150px"}} type="button" className="btn btn-info">Total Bill: 3040 pkr</button></div>
                
                   <div style={{marginTop:"10px"}}><button style={ {width:"150px",background: "linear-gradient(#F32A35, #E5C620)",fontSize:"20px"}} type="button" className="btn btn-info ">Send Order</button></div>

            </div>
                 </div>
            </div>

        </div>
      </div>
    </>
  )
}

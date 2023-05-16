import React from 'react'
import './serviceCards.css'
import img from '../Images/pngegg.png'
export default function serviceCard({priceBtn,addRemovebtn}) {
  return (
   <>
   <div className="servicesMain">
            <div className="serviceRow-one row">
                <div className="serviceitem  ">
                    <div className="serviceHeader">
                        <h3>Shirt</h3>
                        <p>Discription Company Name</p>
                    </div>
                    <div className="serviceImage">
                        <img src={img} alt="" />
                    </div>
                    <div className="serviceFooter">
                    <button type="button" class="btn btn-outline-danger" style={{borderRadius:'10px',margin:"0px"}}>{priceBtn}</button>
                        <button type="button" class="btn btn-outline-secondary" style={{borderRadius:'10px',borderColor:'rgb(13, 192, 233)'}}>{addRemovebtn}</button>
                        </div>
                </div>

            </div>
         </div>
   </>
  )
}

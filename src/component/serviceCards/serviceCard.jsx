import React from 'react'
import './serviceCards.css'
import img from '../Images/lathercoat.jpg'
export default function serviceCard({priceBtn,addRemovebtn,itemTitle,itemDescription,itemImage,onClick}) {
    const handleService=()=>{
        onClick()
    }

  return (
   <>
   <div className="servicesMain">
            <div className="serviceRow-one row">
                <div className="serviceitem  ">
                    <div className="serviceHeader">
                        <h3>{itemTitle}</h3>
                        <p>{itemDescription}</p>
                    </div>
                    <div className="serviceImage">
                        <img src={itemImage} alt="" />
                    </div>
                    <div className="serviceFooter">
                    <input type="text" placeholder={priceBtn}  style={{borderRadius:'10px',margin:"0px",width:"100px",height:"40px"}}/>
                        <button type="button" class="btn btn-outline-secondary" onClick={handleService} style={{borderRadius:'10px',borderColor:'rgb(13, 192, 233)'}}>{addRemovebtn}</button>
                        </div>
                </div>

            </div>
         </div>
   </>
  )
}

import { useState } from 'react'
import './header.css'
import image from "../Images/third.jpg"
import care from '../Images/care.jpg';
import delivery from '../Images/delivery.jpg'
import result from '../Images/result.jpg';



export default function Header() {
  let myarr={
    Data:[
      {
        img:care,
        action:"Professional Care",
        Des:"We’re a supreme, door-to-door delivery dry cleaning and laundry service. With minimum effort you choose a pick-up & drop-off time and we’ll..."
      },{
        img:delivery,
        action:"Fast Delivery",
        Des:"Overnight dry cleaning and laundry delivery. Your clean clothes will arrive 24h after pick-up. By the time you take off that last shirt, the fresh."
      },
      {
        img:result,
        action:"Excellent Results",
        Des:"We provide high quality dry cleaning, laundry and ironing services from premium facilities, and take custom orders so you can look and feel just"
      }
    ]
  }
  const [arr, setarr] = useState([1,2,3])
  return (
    <>
      <div className="mainHeader">
        <div className="headerPara">
            <h1>Delevring Clean Clothes and Peace of Mind</h1>
            <hr />
            <p>Reason TO Choose Us</p>
        </div>
        <div className="headerCards">
        {
          myarr.Data.map((aq)=>{
            return(
              <div className="card-first">
            <img src={aq.img} class="card-img-top" alt="..." />
            <div class="card-body">
              <h2 class="card-title">{aq.action}</h2>
              <hr />
              <p class="card-text">{aq.Des} </p>
            </div>
               </div>

            )
          })
        }

        </div>
      </div>
    </>
  )
}

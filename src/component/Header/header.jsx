import { useState } from 'react'
import './header.css'
import image from "../Images/third.jpg"
export default function Header() {
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
          arr.map((aq)=>{
            return(
              <div className="card-first">
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h2 class="card-title">Professional Care</h2>
              <hr />
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
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

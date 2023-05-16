import React from 'react'
import './ratingComps.css'
export default function ratingHeader() {
  return (
    <>

    <div className="ratingMain">
        <div className="ratingHeader row">
            <div className="ratingHeaderLeft col-4">
                <h3>Reviews</h3>
                <p>Total Reviews</p>
                <h2>10.2k views</h2>
                </div>
             <div className="ratingHeaderCenter col-4">
             <h4>Average Reviews</h4>
                    <div>
                        <h1>4.5</h1>
                        <span>dkf</span>
                    </div>
                    </div>
                <div className="ratingHeaderRight col-4">
                    <div className="ratingOne">
                       <h1>1</h1>
                       <hr className="new1"/>
                    </div>
                    <div className="ratingTwo">
                    <h1>2</h1>
                       <hr className="new2"/>
                    </div>
                    <div className="ratingThree">
                    <h1>3</h1>
                       <hr className="new3"/>
                    </div>
                    <div className="ratingFour">
                    <h1>4</h1>
                       <hr className="new4"/>
                    </div>
                    <div className="ratingFive">
                    <h1>5</h1>
                       <hr className="new5"/>
                    </div>
                    
              
                    </div>
            
        </div>

    </div>
    </>
  )
}

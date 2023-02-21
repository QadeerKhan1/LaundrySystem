import React from 'react'
import './topUser.css'
import icon from '../../../../component/Images/mypic.jpg'
export default function topUser() {
    let arr=[2,3,4]
  return (
    <>
    <div className="topUserMain">
    <div className="topUserSideBar">
        <span><h1>Top Users</h1></span>
        
        {arr.map((ar)=>{
            return(
                <>
                <div className='topUserList'>
            <div className="TUListIcon">
                <span><img src={icon} alt="" /></span>
                <span><h6>Mr. AQ KHAN</h6><p>I am from Pakistan</p></span>
            </div>
            <div className="TUNumber">
                <h6>56</h6>
            </div>
            <div className="TURate">
                $34,223
            </div>
        </div>
                </>
            )
        })}

    </div>
        </div>
    </>
  )
}

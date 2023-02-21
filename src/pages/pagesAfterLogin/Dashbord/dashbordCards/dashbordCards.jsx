import React from 'react'
import svg from '../../../../component/Images/wave.svg';
import svg1 from '../../../../component/Images/wave3.svg';
import svg2 from '../../../../component/Images/wave4.svg';
import svg3 from '../../../../component/Images/wave6.svg';
import DashboardChart from '../dashboardChart/dashboardChart';
import TopUser from '../topUser/topUser';
import './dashbordCards.css'



export default function dashbordCards() {
    let arr={
        data:[{
            waveh5:"Completed Order Rate",
            waveh1:"0,54%",
            img:svg1
            
        },
        {
            waveh5:"Pending Order Rate",
            waveh1:"1,66%",
            img:svg2
        },
        {
            waveh5:"Canceld Order Rate",
            waveh1:"0,22%",
            img:svg3
            
        },
        {
            waveh5:"Profite Rate",
            waveh1:"0,55%",
            img:svg
        }

    ]
    }
  return (
    <>
    <div className='waveMainCards row'>
    <div className="waveSideBar col-1" ></div>
      <div className="waveCards col-11 ">
    
      <span>
      <h2>Dashbord</h2>
      <p>Mon,feb 11,2023</p>
      </span>
      <div className='row waveCardRow'>
      {
        arr.data.map((d)=>{
            return(
                <><div className="waveCard col-3 " style={{backgroundImage:`url(${d.img})`}}>
                <h5>{d.waveh5}</h5>
                <h1>{d.waveh1}</h1>
            </div>
                </>
            )
        })
       }
      </div>
        <div className='waveChart '>
        <div className='chart'>
        <DashboardChart  />
        </div>
        <div className="topUser">
        <TopUser />
        </div>
            </div>
      </div>

       
    </div>
    </>
  )
}

import React from 'react'
import { NavLink } from 'react-router-dom'

export default function secondNav({first,second,third}) {

  const myStyle={
   

      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: 'center',
      height: '170px',
      width: "90%",
      margin: "0% auto",
      backgroundColor: "aqua",
      borderRadius: "10px",
      textTransform: "capitalize",
      
      boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
    
      
  
  }
  return (
    <>
      <div className="navItems">
            <ul>
              
              <li className='myLi'><NavLink activeClassName="active"  className='myNavLink ' to={first} >{first}</NavLink ></li>
              <li className='myLi'><NavLink activeClassName="active" className='myNavLink'  to={second}>{second}</NavLink></li>
              <li className='myLi'><NavLink activeClassName="active" className='myNavLink'  to={third}> {third}</NavLink></li>
            
              
            </ul>
           {first==='totalBalance' ? <div  style={myStyle}> <h1>{first} You have  : 234$</h1></div>:null }
            
            
            
          </div>
    </>
  )
}

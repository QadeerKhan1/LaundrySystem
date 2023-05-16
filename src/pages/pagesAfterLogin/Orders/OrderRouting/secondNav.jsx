import React from 'react'
import { Link } from 'react-router-dom'

export default function secondNav({first,second,third}) {
  return (
    <>
      <div className="navItems">
            <ul>
              <li><Link className='mylink' to={first} style={{color:"black"}} >{first}</Link></li>
              <li><Link style={{color:"black"}}  to={second} >{second}</Link></li>
              <li><Link style={{color:"black"}}  to={third}>{third}</Link></li>
            </ul>
          </div>
    </>
  )
}

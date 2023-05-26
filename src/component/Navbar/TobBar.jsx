import React from 'react'
import { Link } from 'react-router-dom'

export default function TobBar() {
  return (
    <>
    <div className="topbar">
    <a href="#" className="btn btn-danger btn-shadow font-weight-bold mr-2">
      <Link style={{textDecoration:'none',color:"black"}} to='createAccount'>Login</Link></a>
    </div>
    </>
  )
}

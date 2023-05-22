import React from 'react'
import "./services.css"
import Footer from "../../component/Footer/footer"
import ServiceCursole from './serviceCursole/serviceCursole';
import Center from './center/center';
import { Link } from 'react-router-dom';
export default function services() {
  return (
    <>
    <div class="Topbar-Wrape">
      <div className="ourService"><h2>Our Services</h2></div>
      <div className="homeService">
      <Link style={{textDecoration:'none',color:'black'}} to="/"><h4>Home</h4></Link>

        <span>/</span>
        <span>Our Services</span>
      </div>
 </div>
    <Center/>
    <ServiceCursole/>
    <Footer/>

    </>
  )
}

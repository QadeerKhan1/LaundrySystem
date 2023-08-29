import React from 'react';
import './contactUs.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function ContactUs() {
  return (
     
    <>
    <div>
    <div class="Topbar-Wrape">
      <div className="ourService"><h2>Contact Us</h2></div>
      <div className="homeService">
        <span>
        <div className="signUpDesc">
    <Link style={{textDecoration:'none',color:'black'}} to="/"><h4>Home</h4></Link>
      </div>
        </span>
        <span>/</span>
        <span>My Info</span>
      </div>
 </div>
    </div>
    <div className="contact-us-container">
    <div className="top-bar">
      <h1>Contact Us</h1>
      <p>Get in touch with us for any inquiries or feedback</p>
    </div>

    <div className="contact-cards-container">
      <div className="contact-card">
        <FaMapMarkerAlt />
        <h3>Address</h3>
        <p>123 Main Street<br />Hangu , M.khwaja </p>
      </div>

      <div className="contact-card">
        <FaPhone />
        <h3>Phone</h3>
        <p>(092) 3321970473</p>
      </div>

      <div className="contact-card">
        <FaEnvelope />
        <h3>Email</h3>
        <p>qadeer1911@example.com</p>
      </div>
    </div>

    <form id='form'>
      <label id='my-name'>
        Name:
        <input  type="text" />
      </label>
      <span>
      <label id='my-email'>
        Email:
        <input type="email" />
      </label>
      </span>
      <label>
        Message:
        <textarea />
      </label>
      <button type="submit">Submit</button>
    </form>
  </div>
    </>
  );
}

export default ContactUs;

import React from 'react';
import './contactUs.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

function ContactUs() {
  return (
     
    <>
    <div>
    <div class="Topbar-Wrape">
      <div className="ourService"><h2>Contact Us</h2></div>
      <div className="homeService">
        <span>Home</span>
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
        <p>123 Main Street<br />Anytown, USA 12345</p>
      </div>

      <div className="contact-card">
        <FaPhone />
        <h3>Phone</h3>
        <p>(123) 456-7890</p>
      </div>

      <div className="contact-card">
        <FaEnvelope />
        <h3>Email</h3>
        <p>info@example.com</p>
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

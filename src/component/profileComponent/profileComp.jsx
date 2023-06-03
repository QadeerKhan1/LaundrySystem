import React from 'react';
import './profilecomp.css';
import Img1 from '../Images/mypic.jpg'
const ProfileComp = () => {
  return (
    <div className="profile-container">
      <div className="profileTop">
      <div className="profile-header">
        <img
          className="profile-picture"
          src={Img1}
          alt="profile"
        />
         </div>
        <div className="profile-info">
          <h1 className="profile-name">Abdul Qadeer</h1>
          <p className="profile-location">RawalPendi, Pakistan</p>
          
        </div>
     
      </div><hr  className='profileTopBar'/>
      
     <div className="profilBottom row">
        <div className="profileDescreption col-4">
        <h2 className="descreption-title">About Me</h2>
        <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium doloribus culpa sapiente natus. Sint at quaerat voluptatum ea ad repellendus labore distinctio earum! Explicabo nisi minima rerum officia veritatis accusamus.</p>
        </div>
     <div className="profile-address col-4">
        <h2 className="address-title">Address</h2>
        <p>123 Main Street</p>
        <p>RawalPendi , Pakistan</p>
      </div>
      <div className="profile-contact col-4">
        <h2 className="contact-title">Contact Information</h2>
        <p>Email: qadeer1911@gmail.com</p>
        <p>Phone: 923321970473</p>
      </div>
     </div>
    </div>
  );
};

export default ProfileComp;

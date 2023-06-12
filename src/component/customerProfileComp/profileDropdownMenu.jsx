import React, { useState } from 'react';
import img2 from '../Images/Logo2.jpg'
import './profileDropdownMenu.css';
const ProfileDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="profile-dropdown dropdownStyles">
      <div className=" toggleStyles" onClick={toggleDropdown}>
        <img className="profile-avatar profileimg" src={img2} alt="Profile Image" />
        <span className="profile-name">John Doe</span>
        <i className={`fas fa-chevron-${isDropdownOpen ? 'up' : 'down'}`}></i>
      </div>
      {isDropdownOpen && (
        <ul className="dropdown-menu menuStyles">
          <li><a className='menuItemStyles' href="#">My Profile</a></li>
          <li><a className='menuItemStyles' href="#">Settings</a></li>
          <li><a className='menuItemStyles' href="#">Logout</a></li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;

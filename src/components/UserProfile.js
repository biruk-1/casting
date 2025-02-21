import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsPersonCircle } from 'react-icons/bs';
import { FaSignOutAlt, FaUser, FaCog } from 'react-icons/fa';
import '../styles/UserProfile.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <BsPersonCircle
        size={50}
        className={`user-icon ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
      />
      {isOpen && (
        <div className="dropdown-content">
           <Link to="/logout" className="dropdown-link">
            <FaSignOutAlt className="dropdown-icon" /> Logout
          </Link>
          {/* <Link to="/account" className="dropdown-link">
            <FaUser className="dropdown-icon" /> My Account
          </Link> */}
          <Link to = {'/user-status'} className='dropdown-link'>
          <FaUser className="dropdown-icon" /> My Account
          </Link>
          <Link to="/settings" className="dropdown-link">
            <FaCog className="dropdown-icon" /> Settings
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

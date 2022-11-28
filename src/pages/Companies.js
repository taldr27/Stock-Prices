import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Companies = () => {
  console.log('Companies Page');
  return (
    <>
      <nav className="navBar">
        <NavLink to="/"><IoIosArrowBack /></NavLink>
        <div className="settings">
          <FaMicrophone />
          <IoMdSettings />
        </div>
      </nav>
      <h1>Hi from Companies!</h1>
      <NavLink to="/companies/US/company-details">To Details</NavLink>
    </>
  );
};

export default Companies;

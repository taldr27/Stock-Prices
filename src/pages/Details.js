import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Details = () => {
  console.log('Details Page');
  return (
    <>
      <nav className="navBar">
        <NavLink to="/companies"><IoIosArrowBack /></NavLink>
        <div className="settings">
          <FaMicrophone />
          <IoMdSettings />
        </div>
      </nav>
      <h1>Hi from Details!</h1>
    </>
  );
};

export default Details;

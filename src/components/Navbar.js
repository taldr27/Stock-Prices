import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoIosArrowBack, IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Navbar = ({ back, title }) => {
  console.log('navbar');
  return (
    <nav className="flex justify-between p-4 bg-black text-white text-xl">
      <div className="flex items-center gap-4">
        {back ? <NavLink to="/" className="text-2xl"><IoIosArrowBack /></NavLink> : ''}
        <p>{title}</p>
      </div>
      <div className="flex items-center gap-5">
        <FaMicrophone />
        <IoMdSettings />
      </div>
    </nav>
  );
};

export default Navbar;

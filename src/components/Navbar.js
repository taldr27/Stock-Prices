import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Navbar = () => {
  console.log('navbar');
  return (
    <nav className="navBar">
      <div>
        <p>Countries</p>
      </div>
      <div className="settings">
        <FaMicrophone />
        <IoMdSettings />
      </div>
    </nav>
  );
};

export default Navbar;

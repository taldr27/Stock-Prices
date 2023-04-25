import React from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

// eslint-disable-next-line react/prop-types
const Navbar = ({ back, title }) => (
  <nav className="p-4 bg-blue-800 text-white text-xl lg:p-6 lg:text-3xl h-[7%] lg:h-[8.5%]">
    <div className="flex justify-between lg:mx-10">
      <div className="flex items-center gap-4">
        {back || ''}
        <p>{title}</p>
      </div>
      <div className="flex items-center gap-5">
        <FaMicrophone />
        <IoMdSettings />
      </div>
    </div>
  </nav>
);

export default Navbar;

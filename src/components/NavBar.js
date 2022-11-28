import React from 'react';
import '../styles/NavBar.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';

const NavBar = () => (
  <>
    <nav className="navBar">
      <div className="back-arrow">
        <IoIosArrowBack />
      </div>
      <div className="settings">
        <FaMicrophone />
        <IoMdSettings />
      </div>
    </nav>
  </>
);

export default NavBar;

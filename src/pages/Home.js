import React from 'react';
import '../styles/NavBar.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';

const Home = () => {
  console.log('Home Page');
  return (
    <>
      <nav className="navBar">
        <div>
          <h3>Countries</h3>
        </div>
        <div className="settings">
          <FaMicrophone />
          <IoMdSettings />
        </div>
      </nav>
      <h1>Hi from Home!</h1>
    </>
  );
};

export default Home;

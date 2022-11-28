import React from 'react';
import '../styles/NavBar.css';
import '../styles/Home.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import Country from '../components/Country';

const Home = () => (
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
    <div className="country-container">
      <Country />
    </div>
  </>
);

export default Home;

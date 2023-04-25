import React from 'react';
import Country from '../components/Country';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <div>
      <Navbar title="Countries" />
      <Country />
    </div>
  </>
);

export default Home;

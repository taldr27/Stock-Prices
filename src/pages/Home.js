import React from 'react';
import Country from '../components/Country';
import Navbar from '../components/Navbar';

const Home = () => (
  <>
    <div>
      <Navbar title="Countries" />
      <div className="bg-[#D4D1FF] h-4/5">
        <Country />
      </div>
    </div>
  </>
);

export default Home;

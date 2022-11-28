import React, { useEffect } from 'react';
import '../styles/NavBar.css';
import '../styles/Home.css';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, dataCountries } from '../redux/Home';

const Home = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries(dataCountries));
  }, [dispatch]);
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
      <div className="country-container">
        {countries.map((country) => (
          <div key={country.symbol}>
            {/* <h2>
              {country.countryName}
            </h2> */}
            <NavLink to={`/companies/${country.symbol}`}><img className="flagImg" src={country.countryImg} alt="countryImage" /></NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

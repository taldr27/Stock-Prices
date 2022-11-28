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
  console.log(countries);
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
      <NavLink to="/companies">To companies</NavLink>
      <h1>Hi from Home!</h1>
      <div>
        {countries.map((country) => (
          <div key={country.symbol}>
            <h1>
              {country.countryName}
            </h1>
            <img className="flagImg" src={country.countryImg} alt="countryImage" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;

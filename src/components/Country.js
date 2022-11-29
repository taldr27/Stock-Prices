import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Country.css';
import world from '../images/wrld.png';

const Country = () => {
  const countries = useSelector((state) => state.countries);
  return (
    <>
      <div className="top">
        <div style={{ minWidth: '100%' }}>
          <img
            src={world}
            alt="Example"
            className="example-img"
          />
          <p style={{ fontSize: '1.5rem' }}>World Companies</p>

        </div>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <div key={country.symbol}>
            <NavLink
              to={`/companies/${country.symbol}`}
            >
              <div id={country.symbol} className="img-container">
                <img
                  className="flagImg"
                  src={country.countryImg}
                  alt={country.countryName}
                />
                <p>{country.countryName}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
export default Country;

import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import world from '../images/wrld.png';

const Country = () => {
  const countries = useSelector((state) => state.countries);
  return (
    <>
      <div className="">
        <div className="flex flex-col items-center w-full">
          <img
            src={world}
            alt="Example"
            className="w-full sm:max-w-2xl"
          />
          <p className="text-black text-xl sm:text-3xl">World Companies</p>
        </div>
      </div>
      <div className="grid grid-cols-2 w-full justify-center items-center justify-items-center p-4">
        {countries.map((country) => (
          <div key={country.symbol} className=" text-black">
            <NavLink
              to={`/companies/${country.symbol}`}
            >
              <div id={country.symbol} className="">
                <img
                  className=""
                  src={country.countryImg}
                  alt={country.countryName}
                />
                <p className="text-center text-xl sm:text-2xl">{country.countryName}</p>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};
export default Country;

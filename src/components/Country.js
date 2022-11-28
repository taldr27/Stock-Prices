import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries, dataCountries } from '../redux/Home';

const Country = () => {
  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountries(dataCountries));
  }, [dispatch]);
  const onClickChange = (e) => {
    console.log(e.currentTarget.id);
  };
  return (
    <>
      {countries.map((country) => (
        <div key={country.symbol}>
          <NavLink
            to={`/companies/${country.symbol}`}
          >
            <button id={country.symbol} type="button" onClick={onClickChange}>
              <img
                className="flagImg"
                src={country.countryImg}
                alt={country.countryName}
              />
            </button>
          </NavLink>
        </div>
      ))}
    </>
  );
};
export default Country;

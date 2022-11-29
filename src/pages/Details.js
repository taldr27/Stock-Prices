import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { fetchDetails } from '../redux/Details';
import '../styles/Details.css';

const Details = () => {
  const details = useSelector((state) => state.details);
  const urlElement = window.location.href.split('/')[5];
  const country = window.location.href.split('/')[4];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(urlElement));
  }, [urlElement, dispatch]);
  return (
    <>
      <nav className="navBar">
        <NavLink to={`/companies/${country}`}><IoIosArrowBack /></NavLink>
        <div className="settings">
          <FaMicrophone />
          <IoMdSettings />
        </div>
      </nav>
      {details.map((detail) => (
        <div key={detail.symbol}>
          <div className="price-container">
            <img alt="company-img" src={detail.image} />
            <div className="price-box">
              <h2>{`${detail.companyName}`}</h2>
              <h4>{`Price: $${detail.price}`}</h4>
            </div>
          </div>
          <div>
            <h3>{`Currency: ${detail.currency}`}</h3>
            <h3>{`Industry: ${detail.industry}`}</h3>
            <h3>{`Sector: ${detail.sector}`}</h3>
            <h3>{`CEO: ${detail.ceo}`}</h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;

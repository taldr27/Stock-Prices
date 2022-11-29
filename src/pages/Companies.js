import React, { useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCompanies } from '../redux/Companies';
import '../styles/Company.css';

const Companies = () => {
  const companies = useSelector((state) => state.companies);
  const details = useSelector((state) => state.details);
  const urlElement = window.location.href.split('/')[4];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies(urlElement));
  }, [urlElement, dispatch]);
  return (
    <>
      <nav className="navBar">
        <NavLink to="/"><IoIosArrowBack /></NavLink>
        <div className="settings">
          <FaMicrophone />
          <IoMdSettings />
        </div>
      </nav>
      <div className="companies-container">
        {details.map((detail) => (companies.map((company) => (
          <div key={company.symbol} className="company-field">
            <NavLink to={`/companies/${urlElement}/${(company.symbol).replace(/\s/g, '')}/company-details`}>
              <div className="div-company">
                <div>
                  <img alt="company-img" src={detail.image} />
                  <div className="name-market">
                    <em>{company.companyName}</em>
                    <em>{`Market Cap: $${(company.marketCap)}`}</em>
                  </div>
                </div>
                <p>{`Price: ${detail.price}`}</p>
              </div>
            </NavLink>
          </div>
        ))))}
      </div>
    </>
  );
};

export default Companies;

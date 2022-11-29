import React, { useEffect } from 'react';
import { FaMicrophone } from 'react-icons/fa';
import { IoMdSettings, IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCompanies } from '../redux/Companies';

const Companies = () => {
  const companies = useSelector((state) => state.companies);
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
      {companies.map((company) => (
        <div key={company.symbol}>
          <h2>{company.companyName}</h2>
          <h2>{company.marketCap}</h2>
          <NavLink to={`/companies/${urlElement}/${(company.symbol).replace(/\s/g, '')}/company-details`}>To Details</NavLink>
        </div>
      ))}
    </>
  );
};

export default Companies;

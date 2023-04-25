import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCompanies } from '../redux/Companies';
import Navbar from '../components/Navbar';

const Companies = () => {
  const companies = useSelector((state) => state.companies);
  const urlElement = window.location.href.split('/')[4];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies(urlElement));
  }, [urlElement, dispatch]);
  return (
    <>
      <nav className="">
        <Navbar title="Companies" back={<IoIosArrowBack />} />
      </nav>
      <div className="companies-container">
        {companies.map((company) => (
          <div key={company.symbol} className="company-field">
            <NavLink to={`/companies/${urlElement}/${(company.symbol).replace(/\s/g, '')}/company-details`}>
              <div className="div-company">
                <div>
                  <div className="name-market">
                    <em>{company.companyName}</em>
                    <em>{`Market Cap: $${(company.marketCap)}`}</em>
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </>
  );
};

export default Companies;

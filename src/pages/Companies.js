import React, { useEffect } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchCompanies } from '../redux/Companies';
import Navbar from '../components/Navbar';
import city from '../images/city.jpg';

const Companies = () => {
  const companies = useSelector((state) => state.companies);
  const urlElement = window.location.href.split('/')[4];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCompanies(urlElement));
  }, [urlElement, dispatch]);
  const backElement = <NavLink to="/" className="text-2xl"><IoIosArrowBack /></NavLink>;
  return (
    <div>
      <Navbar title="Companies" back={backElement} />
      <div className="relative">
        <div className="flex flex-col items-center w-full">
          <img
            src={city}
            alt="Example"
            className="w-full sm:max-w-2xl"
          />
          <div className="bg-[#00000047] absolute w-full" />
          <p className="text-white text-2xl absolute left-4 bottom-4 font-bold">World Companies</p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        {companies.map((company) => (
          <div key={company.symbol} className="border-[0.5px] border-gray-400">
            <NavLink to={`/companies/${urlElement}/${(company.symbol).replace(/\s/g, '')}/company-details`}>
              <div className="p-3 relative">
                <div className="">
                  <span className="font-bold">Company Symbol: </span>
                  <span>
                    {company.symbol}
                  </span>
                </div>
                <div className="">
                  <span className="font-bold">Exchange: </span>
                  <span>
                    {company.exchange}
                  </span>
                </div>
                <div className="">
                  <span className="font-bold">Market Cap: </span>
                  <span>
                    {`${Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(company.marketCap).slice(0, -7)}`}
                  </span>
                </div>
                <div className="">
                  <span className="font-bold">Price: </span>
                  <span>
                    {`${Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    }).format(company.price)}`}
                  </span>
                </div>
              </div>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;

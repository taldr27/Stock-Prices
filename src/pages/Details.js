import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';
import { NavLink } from 'react-router-dom';
import { fetchDetails } from '../redux/Details';
import Navbar from '../components/Navbar';

const Details = () => {
  const details = useSelector((state) => state.details);
  const urlElement = window.location.href.split('/')[5];
  const country = window.location.href.split('/')[4];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDetails(urlElement));
  }, [urlElement, dispatch]);
  const backElement = <NavLink to={`/companies/${country}`}><IoIosArrowBack /></NavLink>;
  return (
    <>
      <Navbar title="Details" back={backElement} />
      {details.map((detail) => (
        <div key={detail.symbol} className="flex flex-col items-center h-4/5">
          <div className="">
            <img alt="" src={detail.image} />
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="font-bold">Company name: </span>
            <span>{`${detail.companyName}`}</span>
            <span className="font-bold">Price: </span>
            <span className="">{`$${detail.price}`}</span>
            <span className="font-bold">Currency: </span>
            <span className="">{`${detail.currency}`}</span>
            <span className="font-bold">Industry: </span>
            <span className="">{`${detail.industry}`}</span>
            <span className="font-bold">Sector: </span>
            <span className="">{`${detail.sector}`}</span>
            <span className="font-bold">CEO: </span>
            <span className="">{`${detail.ceo}`}</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default Details;

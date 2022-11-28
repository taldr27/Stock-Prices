import {
  us, ca, br, mx, fi, gb,
} from '../data/data';

export const dataCountries = [
  {
    symbol: 'US',
    countryName: 'United States',
    countryImg: us,
  },
  {
    symbol: 'CA',
    countryName: 'Canada',
    countryImg: ca,
  },
  {
    symbol: 'BR',
    countryName: 'Brasil',
    countryImg: br,
  },
  {
    symbol: 'MX',
    countryName: 'Mexico',
    countryImg: mx,
  },
  {
    symbol: 'FI',
    countryName: 'Finland',
    countryImg: fi,
  },
  {
    symbol: 'GB',
    countryName: 'United Kingdom',
    countryImg: gb,
  },
];

export const getCountries = (payload) => (
  {
    type: 'GET_COUNTRY',
    payload,
  }
);

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_COUNTRY':
      return action.payload;
    default:
      return state;
  }
};
export default countryReducer;

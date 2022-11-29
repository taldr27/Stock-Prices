import {
  us, br, mx, gb,
} from '../data/data';

export const dataCountries = [
  {
    symbol: 'US',
    countryName: 'United States',
    countryImg: us,
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

const countryReducer = (state = dataCountries, action) => {
  switch (action.type) {
    case 'GET_COUNTRY':
      return action.payload;
    default:
      return state;
  }
};
export default countryReducer;

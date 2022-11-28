import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './Companies';
import countryReducer from './Home';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    companies: companiesReducer,
  },
});

export default store;

import { configureStore } from '@reduxjs/toolkit';
import companiesReducer from './Companies';
import countryReducer from './Home';
import detailsReducer from './Details';

const store = configureStore({
  reducer: {
    countries: countryReducer,
    companies: companiesReducer,
    details: detailsReducer,
  },
});

export default store;

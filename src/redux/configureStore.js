import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './Home';

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;

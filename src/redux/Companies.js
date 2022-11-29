import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_COMPANY = 'redux/Companies/GET_COMPANY';
const url = 'https://financialmodelingprep.com/api/v3/stock-screener?limit=6&priceMoreThan=50&country=';
const apiId = '&apikey=7351f286c5c54d7b53b445bf56c21444';

export const fetchCompanies = createAsyncThunk(
  GET_COMPANY, (country) => axios.get(`${url}${country}${apiId}`)
    .then((response) => {
      const companies = response.data;
      return companies;
    }),
);

const initialState = [];

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchCompanies.fulfilled, (_, action) => action.payload);
    builder.addCase(fetchCompanies.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(fetchCompanies.pending, (_, action) => action.payload);
  },
});

export default companiesSlice.reducer;

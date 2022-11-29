import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_DETAILS = 'redux/Companies/GET_DETAILS';
const url = 'https://financialmodelingprep.com/api/v3/profile/';
const apiId = '?apikey=7351f286c5c54d7b53b445bf56c21444';

export const fetchDetails = createAsyncThunk(
  GET_DETAILS, (company) => axios.get(`${url}${company}${apiId}`)
    .then((response) => {
      const details = response.data;
      return details;
    }),
);

const initialState = [];

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (_, action) => action.payload);
    builder.addCase(fetchDetails.rejected, (state) => {
      const newState = state;
      newState.status = 'failed';
    });
    builder.addCase(fetchDetails.pending, (_, action) => action.payload);
  },
});

export default detailsSlice.reducer;

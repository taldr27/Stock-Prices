import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const GET_DETAILS = 'redux/Companies/GET_DETAILS';
const url = 'https://financialmodelingprep.com/api/v3/profile/';
const apiId = '?apikey=d65279feedbacc4f4be890446216fa53';

export const fetchDetails = createAsyncThunk(
  GET_DETAILS, (company) => axios.get(`${url}${company}${apiId}`)
    .then((response) => {
      const details = response.data;
      return details;
    }),
);

const initialState = {
  details: [],
  status: null,
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.status = 'success';
      return state;
    });
    builder.addCase(fetchDetails.rejected, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.status = action.error.message;
    });
    builder.addCase(fetchDetails.pending, (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state = action.payload;
    });
  },
});

export default detailsSlice.reducer;

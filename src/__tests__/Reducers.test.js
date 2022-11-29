import companiesReducer, { fetchCompanies } from '../redux/Companies';
import detailsSlice, { fetchDetails } from '../redux/Details';
// import regionsReducer, { getRegions } from '../redux/home/home';
// import countriesReducer, { getCountries } from '../redux/region/region';

describe('Testing defined reducers', () => {
  const previousState = [];
  it('Should return initial state', () => {
    expect(companiesReducer(undefined, [])).toEqual([]);
  });
  it('Should companies page to be defined', () => {
    expect(companiesReducer(previousState, fetchCompanies())).toBeDefined();
  });
  it('Should details page to be defined', () => {
    expect(detailsSlice(previousState, fetchDetails())).toBeDefined();
  });
});

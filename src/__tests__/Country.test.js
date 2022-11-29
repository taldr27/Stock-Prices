import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import Country from '../components/Country';
import store from '../redux/configureStore';

describe('Testing Country component', () => {
  it('Should match the snapshot Country', () => {
    const country = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Country />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(country).toMatchSnapshot();
  });
});

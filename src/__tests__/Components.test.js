import { render, screen } from '@testing-library/react';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Home from '../pages/Home';
import Companies from '../pages/Companies';
import Details from '../pages/Details';
import '@testing-library/jest-dom';

describe('Testing Home page', () => {
  it('Should match the snapshot', () => {
    const home = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Home />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(home).toMatchSnapshot();
  });

  it('Should have text United States', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('United States')).toBeInTheDocument();
  });

  it('Should have text Mexico', () => {
    render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Mexico')).toBeInTheDocument();
  });
});

describe('Testing Companies page', () => {
  it('Should match the companies snap', () => {
    const companies = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Companies />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(companies).toMatchSnapshot();
  });
});

describe('Testing Details page', () => {
  it('Should match the details snap', () => {
    const companies = render(
      <StrictMode>
        <Router>
          <Provider store={store}>
            <Details />
          </Provider>
        </Router>
      </StrictMode>,
    );
    expect(companies).toMatchSnapshot();
  });
});

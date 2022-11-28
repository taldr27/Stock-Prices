import React from 'react';
// import {
//   Routes,
//   Route,
//   Router,
// } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="companies" element={<Companies />} />
          <Route path="company-details" element={<Details />} />
        </Routes>
      </Router> */}
      <Home />
    </div>
  );
}

export default App;

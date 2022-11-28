import React from 'react';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Companies from './pages/Companies';
import Details from './pages/Details';
import Home from './pages/Home';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies/:country" element={<Companies />} />
        <Route path="/companies/:country/company-details" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homebody from './Components/Home';
import Header1 from './Components/Header1';
import Sobrebody from './Components/Sobre';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<><Header /><Homebody /><Footer /></>} />
          <Route path="/sobre" element={<><Header1 /><Sobrebody /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

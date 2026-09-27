import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ScrollToTop } from './Components/ScrollToTop';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Homebody from './Components/Home';
import Sobrebody from './Components/Sobre';
import Graficobody from './Components/Grafico';
import Uxbody from './Components/Ux';
import Albunsbody from './Components/Albuns';
import GraficoExposicaobody from "./Components/GraficoExposicao";
import GraficoIlustracaobody from './Components/GraficoIlustracao';
import GraficoMinhaMarcabody from './Components/GraficoMinhaMarca';
import GraficoPapelariabody from './Components/GraficoPapelaria';
import GraficoMktDigitalbody from'./Components/GraficoMktDigital';
import GraficoIDVisualbody from'./Components/GraficoIDVisual';


const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<><Header /><Homebody /><Footer /></>} />
          <Route path="/sobre" element={<><Header /><Sobrebody /><Footer /></>} />
          <Route path="/grafico" element={<><Header /><Graficobody /><Footer /></>} />
          <Route path="/graficoexposicao" element={<><Header /><GraficoExposicaobody /><Footer /></>} />
          <Route path="/graficoilustracao" element={<><Header /><GraficoIlustracaobody /><Footer /></>} />
          <Route path="/graficominhamarca" element={<><Header /><GraficoMinhaMarcabody /><Footer /></>} />
          <Route path="/graficopapelaria" element={<><Header /><GraficoPapelariabody /><Footer /></>} />
          <Route path="/graficomktdigital" element={<><Header /><GraficoMktDigitalbody /><Footer /></>} />
          <Route path="/graficoidvisual" element={<><Header /><GraficoIDVisualbody /><Footer /></>} />
          <Route path="/ux" element={<><Header /><Uxbody /><Footer /></>} />
          <Route path="/albuns" element={<><Header /><Albunsbody /><Footer /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

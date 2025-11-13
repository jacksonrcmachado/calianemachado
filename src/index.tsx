  import React from 'react';
  import ReactDOM from 'react-dom/client';
  import App from './App';
  import { BrowserRouter as Router } from "react-router-dom"; // Importar o Router
  
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
  );
/*
  import React from "react";
  import ReactDOM from 'react-dom/client';
  import App from "./App";
  import { BrowserRouter as Router } from "react-router-dom"; // Importar o Router
  
  ReactDOM.render(
    <Router> {/* Envolva o App com Router }
      <App />
    </Router>,
    document.getElementById("root")
  );
*/
  
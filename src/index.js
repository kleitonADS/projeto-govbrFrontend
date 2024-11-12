import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

// Usando 'createRoot' para React 18
const root = ReactDOM.createRoot(document.getElementById('root'));

// Envolva toda a aplicação com o Router aqui
root.render(
  <Router>
    <App />
  </Router>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Router from './Router'
import Navbar from './Componentes/Navbar'
import SideMenu from './Componentes/SideMenu'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <SideMenu />
    <Router />
  </React.StrictMode>
);

reportWebVitals();

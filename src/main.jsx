// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { HashRouter } from 'react-router-dom'; // <--- این را به HashRouter تغییر بده

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter> {/* <--- اینجا هم تغییر بده */}
      <App />
    </HashRouter> {/* <--- اینجا هم تغییر بده */}
  </React.StrictMode>
);
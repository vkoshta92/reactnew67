import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './components/Myhome';
import Myclass from './components/About'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Myclass />
  </React.StrictMode>
);


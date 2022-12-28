import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './components/Myhome';
// import Myclass from './components/About'
import Homecoreui from './coreUI/Homecoreui';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Home />
  <Myclass /> */}
    <Homecoreui />
  </React.StrictMode>
);



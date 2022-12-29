import React from 'react';
import ReactDOM from 'react-dom/client';
import Mybootstrappage from './bootstrapUI/BootstrapHome';
// import Home from './components/Myhome';
// import Myclass from './components/About'
import Homecoreui from './coreUI/Homecoreui';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Home />
  <Myclass /> */}
    {/* <Homecoreui /> */}

<Mybootstrappage/>

  </React.StrictMode>
);



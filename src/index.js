import React from 'react';
import ReactDOM from 'react-dom/client';
import Mybootstrappage from './bootstrapUI/BootstrapHome';
import Materialuihome from './materialUi/Materialuihome';
// import Home from './components/Myhome';
// import Myclass from './components/About'
// import Homecoreui from './coreUI/Homecoreui';
import Reactbootstraphome from './reactbootstrapUI/Reactbootstraphome'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Home />
  <Myclass /> */}
    {/* <Homecoreui /> */}

<Mybootstrappage/>
<h1>react bootstarp  https://react-bootstrap.netlify.app/components/alerts/</h1>
<Reactbootstraphome/>
<h1>material ui  https://mui.com/material-ui/react-button/</h1>
<Materialuihome/>
  </React.StrictMode>
);



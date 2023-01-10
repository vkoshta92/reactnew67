import React from 'react';
import ReactDOM from 'react-dom/client';
// import Mybootstrappage from './bootstrapUI/BootstrapHome';
// import Materialuihome from './materialUi/Materialuihome';
// import Home from './components/Myhome';
// import Myclass from './components/About'
// import Homecoreui from './coreUI/Homecoreui';
// import Reactbootstraphome from './reactbootstrapUI/Reactbootstraphome'
// import Contact from './coreUI/Contact';
import { BrowserRouter as Abc,Route,Routes } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Mydatalist from './components/Mydatalist';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* <Home />
  <Myclass /> */}
    {/* <Homecoreui /> */}

{/* <Mybootstrappage/>
<h1>react bootstarp  https://react-bootstrap.netlify.app/components/alerts/</h1>
<Reactbootstraphome/>
<h1>material ui  https://mui.com/material-ui/react-button/</h1>
<Materialuihome/>
<Contact/> */}

<Abc>
<Routes>
<Route path='' element={<Login/>}/>
{/* <Route path='dashboard' element={<Dashboard/>}/> */}
<Route path='dashboard' element={<Mydatalist/>}/>

</Routes>



</Abc>

  </React.StrictMode>
);



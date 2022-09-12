import React from 'react';
import ReactDOM from 'react-dom/client';
import MyRoutes from './MyRoutes';
import './index.css';
//import App from './App';
//import AppOldWay from './components/AppOldWay';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyRoutes />
  </React.StrictMode>
);


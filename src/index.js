import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';

//import 'antd/dist/antd.css';
//import './index.css';
//import App from './App';

import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

ReactDOM.render(
  <Router/>,
  document.getElementById('root')
);

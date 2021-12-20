import React from 'react';
import logo from './logo.svg';
import './App.css';

// Get the aws resources configuration parameters
import awsconfig from './aws-exports'; // if you are using Amplify CLI

//import { withAuthenticator } from '@aws-amplify/ui-react';
import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify from 'aws-amplify';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to Cypress Labs</h1>
      </header>
    </div>
  );
}

//export default withAuthenticator (App, {includeGreetings: true});
export default withAuthenticator(App);
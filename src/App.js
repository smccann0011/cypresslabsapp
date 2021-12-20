import React from 'react';
import Amplify from 'aws-amplify';
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports'; // if you are using Amplify CLI
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
//import { withAuthenticator } from 'aws-amplify-react-native';

Amplify.configure(awsconfig);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Cypress Labs</h1>
      </header>
    </div>
  );
}

//export default withAuthenticator (App, {includeGreetings: true});
export default withAuthenticator(App);

//const App = () => (
//  <AmplifyAuthenticator>
//    <div>
//      My App
//      <AmplifySignOut />
//    </div>
//  </AmplifyAuthenticator>
//);
import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // if you are using Amplify CLI
import { withAuthenticator } from '@aws-amplify/ui-react';
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import './App.css';

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

//const App = () => (
//  <AmplifyAuthenticator>
//    <div>
//      <h1>Welcome to Cypress Labs</h1>
//      <AmplifySignOut />
//    </div>
//  </AmplifyAuthenticator>
//);

//export default withAuthenticator (App, {includeGreetings: true});
export default withAuthenticator(App);

import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // if you are using Amplify CLI
import { withAuthenticator } from '@aws-amplify/ui-react';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import './App.css';

Amplify.configure(awsconfig);

function App(signOut, user) {
  return (
  <Authenticator>
    {({ signOut, user }) => (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Cypress Labs, {user.username}</h1>
      </header>
      <button onClick={signOut}>Sign out</button>
    </div>
    )}
    </Authenticator>
  );
}

//export default withAuthenticator (App, {includeGreetings: true});
export default withAuthenticator(App);

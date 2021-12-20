import React from 'react';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports'; // if you are using Amplify CLI
import { withAuthenticator } from '@aws-amplify/ui-react';
import {Authenticator} from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import './App.css';

Amplify.configure(awsconfig);

function App() {
  return (
  <Authenticator>
    {({ signOut, user }) => (
    <div className="App">
      <p>
        Hey {user.username}, welcome to my channel, with auth!
      </p>
      <header className="App-header">
        <h1>Welcome to Cypress Labs</h1>
      </header>
    </div>
    )}
    </Authenticator>
  );
}

//export default withAuthenticator (App, {includeGreetings: true});
export default withAuthenticator(App);

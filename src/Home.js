import React from 'react';

import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react'

const heading = {fontSize: 44, fontWeight: 300, marginBottom: 5}

function Home() {
    return (
        <Authenticator>
        {({ signOut, user }) => (
            <div>
                <h1 style={heading}>Cypress Labs Home Page</h1>
            </div>
        )}
        </Authenticator>
    )
}

export default withAuthenticator(Home)

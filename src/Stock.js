import React from 'react';

import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react'

const heading = {fontSize: 44, fontWeight: 300, marginBottom: 5}

function Stock() {
    return (
        //<Authenticator>
        //{({ signOut, user }) => (
            <div className="Stock">
                <h2 style={heading}>Stock Agent</h2>
                <div>                
                    <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Price</th>
                            <th scope="col" align='right'>Market Cap</th>
                            <th scope="col" align='right'>1 hr</th>
                            <th scope="col" align='right'>24 hr</th>
                            <th scope="col" align='right'>7 day</th>
                        </tr>
                    </thead>
                    <tbody>
                    </tbody>
                    </table>
                </div>
            </div>
        //)}
        //</Authenticator>
    )
}

export default withAuthenticator(Stock)

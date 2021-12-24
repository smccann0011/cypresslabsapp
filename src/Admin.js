import React from 'react';
import {Authenticator, withAuthenticator} from '@aws-amplify/ui-react';
//import {Auth} from 'aws-amplify';
//import {Button} from 'antd';

const titleStyle = {
    fontWeight: 'normal',
    margin: '0px 0px 10px 0px'
}

function Admin() {
    return(
        <Authenticator>
        <div>
            <h1 style={titleStyle}>Admin Page</h1>
        </div>
        </Authenticator>
    )
}

export default withAuthenticator(Admin)

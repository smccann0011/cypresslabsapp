import React from 'react';

import {Authenticator, withAuthenticator } from '@aws-amplify/ui-react'

const Nav = (props) => {
    const {current} = props
    console.log("Nav current:" + current)

    var linkStatus1 = ((current === 'home' || current === '')  ? 'nav-link active' : 'nav-link')
    var linkStatus2 = (current === 'todo'   ? 'nav-link active' : 'nav-link')
    var linkStatus3 = (current === 'crypto' ? 'nav-link active' : 'nav-link')
    var linkStatus4 = (current === 'stock'  ? 'nav-link active' : 'nav-link')

    return (
        <Authenticator>
        {({ signOut, user }) => (
        <div>
            <nav className="nav nav-pills">
                <a className={linkStatus1} href="/">Home</a>
                <a className={linkStatus2} href="/todo">ToDo App</a>
                <a className={linkStatus3} href="/crypto">Crypto Agent</a>
                <a className={linkStatus4} href="/stock">Stock Agent</a>
                <a className="nav-link disabled" href="/user">{user.username}</a>
                <button onClick={signOut}>Sign out</button>
            </nav>
        </div>
        )}
        </Authenticator>
    )
}

export default withAuthenticator(Nav)
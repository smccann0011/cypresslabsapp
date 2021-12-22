import React from 'react';
import {Link} from 'react-router-dom'

const footerStyle = {
    borderTop: '1px solid #dd',
    display: 'flex',
    alignItems: 'center',
    padding: 20
}

function Footer() {
    return (
        <div style={footerStyle}>
            <Link to="/admin">
                Admin
            </Link>
        </div>
    )
}

export default Footer;
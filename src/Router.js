import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '@aws-amplify/ui-react/styles.css';

import Home from './Home';
import Todo from './Todo'; 
import Crypto from './Crypto'; 
import Stock from './Stock';
import Admin from './Admin';
import Nav from './Nav';
import Footer from './Footer';
import Container from './Container';

function Router() {
    const [current, setCurrent] = useState('home')

    useEffect( () => {    
        setRoute()
        window.addEventListener('hashchange', setRoute)
        return () => window.removeEventListener('hashchange', setRoute)        
    })

    function setRoute() {
        //console.log("Set Route: "+ window.location)
        console.log("Set Route href: "+ window.location.href)
        console.log("Set Route pathname: "+ window.location.pathname)
        const location = window.location.href.split('/')
        console.log("Set Route location: "+ location)
        const pathname = location[location.length-1]
        console.log("Set Route Pathname: "+ pathname)
        setCurrent(pathname ? pathname : 'home')
    }

    return (
        <BrowserRouter>
            <Nav current = {current} />
            <Container>
                <Routes>
                    <Route exact path="/"       element={<Home />}/>
                    <Route exact path="/todo"   element={<Todo />}/>
                    <Route exact path="/crypto" element={<Crypto />}/>
                    <Route exact path="/stock"  element={<Stock />}/>
                    <Route exact path="/admin"  element={<Admin />}/>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    )
}

export default Router
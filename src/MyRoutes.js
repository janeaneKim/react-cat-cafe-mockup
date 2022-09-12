import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Fragments/Navbar';
import Home from './Home';
import About from './About';
import App from './App';

function MyRoutes(props){
    return(
        <Router>
            <div>
                <Navbar className="navbar"/>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/app" element={<App />}></Route>
                </Routes>
            </div>
        </Router>
    )
}

export default MyRoutes;
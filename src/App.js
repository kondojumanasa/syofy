import React from 'react';
import { BrowserRouter as Router, Route, Routes, useHistory } from 'react-router-dom';
import Dashboard from './Components/dashboard'
import Home from './Components/Home'

const App = () => {
    return (
        <Router>
            <Routes>
                 <Route path="/" element={<Home/>} />
                {/* <Route path="/register" component={RegistrationForm} /> */}
                <Route path="/dashboard" element={ <Dashboard/>} />
               
                {/* new update <Route path="/" component={RegistrationForm} /> */}
            </Routes>
        </Router>
    );
};

export default App;

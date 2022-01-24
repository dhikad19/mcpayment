import React, { useState } from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import RegisterPage from './pages/Register';
import AboutPage from './pages/AboutPage';
import InvoicingPage from './pages/InvoicingPage';
import TransferPage from './pages/TransferPage';
import PaymentPage from './pages/PaymentPage';

function App() {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
    <Router>
        <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} exact/>
        <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/about" component={AboutPage} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={RegisterPage} exact />
        <Route path="/payment" component={PaymentPage} exact />
        <Route path="/invoicing" component={InvoicingPage} exact />
        <Route path="/transfer" component={TransferPage} exact />
        </Switch> 
    </Router>
    
    );
}

export default App;

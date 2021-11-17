import React, { Fragment, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import GettingStarted from './components/gettingStarted/GettingStarted';
import Signin from './components/signin/Signin';
import Signup from './components/signup/Signup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/dashboard/Dashboard';
import Verify from './utils/Verify';
import CreateClients from './components/dashboard/CreateClients';

toast.configure();


const Routes = () => {
    const check = localStorage.token? true: false;
    const [isLoggedin, setIsLoggedin] = useState(check);

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch('http://localhost:8000/api/auth/verify', {
                method: 'GET',
                headers: { token: localStorage.token }
            });
            const resParse = await response.json();
            localStorage.setItem('')
            
            resParse.user_id? setIsLoggedin(true): setIsLoggedin(false);
        }
        fetchApi();
    }, );

    const handleSignin = (loggedin) => {
        setIsLoggedin(loggedin);
    }

    const handleLogout = () => {
        localStorage.removeItem('token');
        toast.success("Successfully Loggedout!")
        handleSignin(false);
    }
    
    if (isLoggedin) {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route path='/dashboard' render={props => <Dashboard isLoggedout={handleLogout} isLoggedin={isLoggedin} {...props} />} exact />
                        <Route path='/create-clients' render={props => <CreateClients isLoggedout={handleLogout} isLoggedin={isLoggedin} {...props} />} exact />
                        <Redirect to='/dashboard' />
                    </Switch>
                </Router>
            </Fragment>
        )
    } else {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route path='/verify/:id' render={props => <Verify {...props} />} exact />
                        <Route path='/signin' render={props => <Signin handleSignin={handleSignin} {...props} />} exact />
                        <Route path='/signup' render={props => <Signup {...props} />} exact />
                        <Route path='/' render={props => <GettingStarted {...props} />} exact />
                        <Redirect to='/signin' />
                    </Switch>
                </Router>
            </Fragment>
        )
    }

};

export default Routes;

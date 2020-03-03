import React from "react";
import { Route, Switch, Link } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import {signupFormContainer, loginFormContainer} from "./form/form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_utils.jsx";

const App = () => {
    return(
        <div className="App">
            <header className="header">
                <Link className="header-logo" to="/">HopCamp</Link>
                <NavbarContainer />
            </header> 
            <Switch>
                <AuthRoute exact path="/signup" component={signupFormContainer} />
                <AuthRoute exact path="/login" component={loginFormContainer} />
            </Switch>
        </div>
    )
};

export default App;
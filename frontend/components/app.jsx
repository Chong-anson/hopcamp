import React from "react";
import { Route, Switch, Link } from 'react-router-dom';

import NavbarContainer from './navbar/navbar_container';
import HomeContainer from './home_container'
import {signupFormContainer, loginFormContainer} from "./session_form/form_container";
import { AuthRoute, ProtectedRoute } from "../util/route_utils.jsx";
import CampsiteShowContainer from "./campsite_show/campsite_show_container";

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
                <Route path="/campsites/:id" component={CampsiteShowContainer} />
                <Route path="/" component={HomeContainer} />
            </Switch>
        </div>
    )
};

export default App;
import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import NavbarContainer from "./navbar/navbar_container";
import SplashContainer from "./splash/splash_container";
import SearchContainer from "./search/search_container";
import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from "../util/route_utils.jsx";
import CampsiteShowContainer from "./campsite_show/campsite_show_container";
import { SignupFormContainer, LoginFormContainer } from "./session_form/form_container";


const App = () => {
    return(
        <div className="App">
            <Modal /> 
            <header className="header">
                <div className="navbar">
                    <Link className="header-logo" to="/">HopCamp</Link>
                    <NavbarContainer />
                </div>
            </header> 
            <Switch>
                <AuthRoute exact path="/campsites/:campsiteId/signup" component={SignupFormContainer} />
                <AuthRoute exact path="/campsites/:campsiteId/login" component={LoginFormContainer} />
                <Route exact path="/campsites/:id" component={CampsiteShowContainer} />
                <Route path="/search" component={SearchContainer} /> 
                <Route path="/" component={SplashContainer} />
            </Switch>
        </div>
    )
};

export default App;
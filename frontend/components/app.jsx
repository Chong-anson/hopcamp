import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import MiniSearchBox from "./navbar/mini_search_container";
import NavbarContainer from "./navbar/navbar_container";
import SplashContainer from "./splash/splash_container";
import SearchContainer from "./search/search_container";
import Footer from "./footer/footer";
import Modal from "./modal/modal";
import { AuthRoute, ProtectedRoute } from "../util/route_utils.jsx";
import CampsiteShowContainer from "./campsite_show/campsite_show_container";
import {
  SignupFormContainer,
  LoginFormContainer,
} from "./session_form/form_container";
import UserComponent from "./users/user";

const App = () => {
  return (
    <div className="App">
      <Modal />
      <header className="header">
        <div className="navbar">
          <div className="left">
            <Link className="header-logo" to="/">
              <div className="logo"></div>
            </Link>
            <Switch>
              <Route path="/:id" component={MiniSearchBox} />
            </Switch>
          </div>
          <div className="right">
            <NavbarContainer />
          </div>
        </div>
      </header>
      <div className="main-content">
        <Switch>
          <AuthRoute
            exact
            path="/campsites/:campsiteId/signup"
            component={SignupFormContainer}
          />
          <AuthRoute
            exact
            path="/campsites/:campsiteId/login"
            component={LoginFormContainer}
          />
          <Route
            exact
            path="/campsites/:id"
            component={CampsiteShowContainer}
          />
          <ProtectedRoute path="/users/:id" component={UserComponent} />
          <Route exact path="/search" component={SearchContainer} />
          <Route path="/" component={SplashContainer} />
        </Switch>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;

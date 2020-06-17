import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from "./store/store";
// TESTING
import * as actions from "./actions/session_actions";
import * as campsiteActions from "./actions/campsite_actions";
import * as venueActions from "./actions/venue_actions";
// TESTING END

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: {
        id: window.currentUser.id,
      },
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  // TESTING
  window.store = store;
  window.actions = actions;
  window.campsiteActions = campsiteActions;
  window.venueActions = venueActions;
  // DELETE ABOVE CODE
  ReactDOM.render(<Root store={store} />, root);
});

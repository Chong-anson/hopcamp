import React from 'react'
import ReactDOM from 'react-dom'
import Root from "./components/root"
import configureStore from "./store/store"
// TESTING
import * as actions from "./actions/session_actions"
// TESTING END

document.addEventListener("DOMContentLoaded", ()=>{
    const store = configureStore()
    const root = document.getElementById("root")
    // TESTING 
    window.store = store;
    window.actions = actions;
    // DELETE ABOVE CODE
    ReactDOM.render(<Root store={store} />, root)
})
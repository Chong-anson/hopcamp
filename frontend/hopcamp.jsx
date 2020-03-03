import React from 'react'
import ReactDOM from 'react-dom'
// import Root from "./components/root"
import configureStore from "./store/store"
import * as actions from "./actions/session_actions"

document.addEventListener("DOMContentLoaded", ()=>{
    const store = configureStore()
    const root = document.getElementById("root")
    window.store = store;
    window.actions = actions;
    // ReactDOM.render(<Root store={store} />, root)
    ReactDOM.render(<h1>okokoko</h1>, root)
})
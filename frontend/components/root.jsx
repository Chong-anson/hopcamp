import React from 'react'
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";

const Root = (props) => {
    return(
        <Provider store={props.store}>
            <HashRouter>
                <h2>This is the rooooot</h2>
                <App /> 
            </HashRouter>
        </Provider>
    )
};

export default Root; 
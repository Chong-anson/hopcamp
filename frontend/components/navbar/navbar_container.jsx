import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Navbar from "./navbar";
import { openModal, closeModal } from "../../actions/modal_actions";
import { logout } from "../../actions/session_actions";

const msp = (state) => ({
    currentUser : state.entities.users[state.session.id],
})

const mdp = (dispatch) => ({
    logout: () => dispatch(logout()),
    signupForm: (
        <button className="special-buttons"  onClick={() => dispatch(openModal("signup"))} >
            Sign up
        </button>
    ),
    loginForm: (
        <button className="navbar-btn" onClick={() => dispatch(openModal("login"))}>
            Login
        </button>
    )
})

export default withRouter(connect(msp, mdp)(Navbar));

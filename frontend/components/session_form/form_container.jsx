import { connect } from 'react-redux'
import React from 'react';
import { withRouter } from 'react-router-dom';
import { signup, login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import SignupForm from "./signup_form";
import { openModal, closeModal } from "../../actions/modal_actions";

const formMSP = (state, ownProps) => {
    return ({
        errors: state.errors,
    })
};

const signupMDP = (dispatch) => ({
    processForm: (user) => (dispatch(signup(user))),
    closeModal: () => dispatch(closeModal()),
    loginForm: (
        <button className="redirect-button" onClick={()=> dispatch(openModal('login'))}>
            Sign in
        </button>   
    )
});

const loginMDP = (dispatch) => ({
    processForm: (user) => (dispatch(login(user))),
    closeModal: () => dispatch(closeModal()),
    signupForm: (
        <button className="redirect-button" onClick={() => dispatch(openModal('signup'))}>
            Sign up!
        </button>
    )
});

export const SignupFormContainer = withRouter(connect(formMSP, signupMDP)(SignupForm));
export const LoginFormContainer = withRouter(connect(formMSP, loginMDP)(LoginForm));
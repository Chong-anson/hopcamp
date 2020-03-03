import { connect } from 'react-redux'
import { signup, login } from "../../actions/session_actions";
import LoginForm from "./login_form";
import SignupForm from "./signup_form";

const formMSP = (state, ownProps) => {
    return ({
        errors: state.errors,
    })
};

const signupMDP = (dispatch) => ({
    processForm: (user) => (dispatch(signup(user)))
});

const loginMDP = (dispatch) => ({
    processForm: (user) => (dispatch(login(user)))
});

export const signupFormContainer = connect(formMSP, signupMDP)(SignupForm);
export const loginFormContainer = connect(formMSP, loginMDP)(LoginForm);
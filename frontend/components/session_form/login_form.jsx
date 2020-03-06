import React from "react";
import { Link } from "react-router-dom";
import ErrorShowContainer from "../error_show";


class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: ""}
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.processForm(user)
            .then(() => {
                const url = this.props.match.url
                if (url.includes("campsite")) {
                    // console.log(url);
                    this.props.clearError();
                    this.props.history.push(url.replace("/login",""));
                }
                else {
                    this.props.closeModal();
                };
            });
    }

    render() {
        const url = this.props.match.url;
        const signupForm = (url.includes("campsites")) ? (
            <button className="redirect-button"
                onClick={() => {
                    this.props.clearErrors();
                    this.props.history.push(url.replace("/login", "/signup"))
                }}>
                Sign up!
            </button>
        ) : this.props.signupForm; 

        return (
            <div className="login-component session-component">
                <form className="login-form form" onSubmit={this.handleSubmit}>
                    <div className="title">
                        <h1>Welcome Back!</h1>
                        <p>It"s about time for another camping trip</p>
                    </div>
                    <input className="form-control" type="text" placeholder="Username:" value={this.state.username} onChange={this.handleChange("username")} />
                    <input className="form-control" type="password" placeholder="Password:"value={this.state.password} onChange={this.handleChange("password")} />
                    <Link to="/">Forgot your password?</Link>
                    <br/>
                    <ErrorShowContainer type={"session"} />
                    <button className="btn session-btn">Log In</button>
                </form>
                <div className="session-component-footer">
                    <span>Don"t have a Hopcamp account? </span>
                    <span>{signupForm}</span>
                </div>

            </div>
        )
    }
}

export default LoginForm; 
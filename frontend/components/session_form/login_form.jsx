import React from "react";
import { Link } from 'react-router-dom';

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
            .then(() => this.props.closeModal());
    }

    render() {
        let errors = ""
        if (this.props.errors.session.length) {
            errors = this.props.errors.session.map(error =>
                (<li>{error}</li>)
            )
        }

        return (
            <div className="login-component session-component">
                <form className="login-form form" onSubmit={this.handleSubmit}>
                    <div className="title">
                        <h1>Welcome Back!</h1>
                        <p>It's about time for another camping trip</p>
                    </div>
                    <input className="form-control" type="text" placeholder="Username:" value={this.state.username} onChange={this.handleChange("username")} />
                    <input className="form-control" type="password" placeholder="Password:"value={this.state.password} onChange={this.handleChange("password")} />
                    <Link to="/">Forgot your password?</Link>
                    <br/>
                    <button className="btn session-btn">Log In</button>
                </form>
                {/* {errors.length ? <h2>Errors</h2> : ""}
                <ul>
                    {errors}
                </ul> */}
                <div className="session-component-footer">
                    <span>Don't have a Hopcamp account? </span>
                    <span>{this.props.signupForm}</span>
                </div>

            </div>
        )
    }
}

export default LoginForm; 
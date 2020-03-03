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
            .then(() => this.props.history.push("/"));
    }

    render() {
        let errors = ""
        if (this.props.errors.session.length) {
            errors = this.props.errors.session.map(error =>
                (<li>{error}</li>)
            )
        }

        return (
            <div className="modal">
                <form className="modal-form login-form form" onSubmit={this.handleSubmit}>
                    <h1>Welcome Back!</h1>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleChange("username")} />
                    </label>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
                    </label>
                    <Link to="/">Forgot your password?</Link>
                    <br/>
                    <button>Log In</button>
                </form>
                <div className="modal-footer">
                    <span>Don't have a Hopcamp account? </span>
                    <Link to="/signup">Sign Up</Link>
                </div>
                {errors.length ? <h2>Errors</h2> : ""}
                <ul>
                    {errors}
                </ul>

            </div>
        )
    }
}

export default LoginForm; 
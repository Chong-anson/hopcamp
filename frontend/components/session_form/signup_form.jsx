import React from "react"
import ErrorShowContainer from './error_show';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: "", password: "", email: "", first_name: "", last_name: ""}
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
                if (url.includes("campsites")){
                    this.props.history.push(url.replace("/signup", ""));
                }
                else{
                    this.props.closeModal();
                };
            });

    }

    render() {
        const url = this.props.match.url;
        const loginForm = (url.includes("campsites")) ? (
            <button className="redirect-button"
             onClick={() => this.props.history.push(url.replace("/signup", "/login"))}>
            Sign in 
            </button>
        ) : this.props.loginForm; 
        let errors = "";
        if (this.props.errors.session.length){
            errors = this.props.errors.session.map(error =>
                (<li>{error}</li>)
            )
        }
        return (
            <div className="signup-component session-component">
                <form className="signup-form form" onSubmit={this.handleSubmit}>
                    <div className="title">
                        <h1>Join HopCamp!</h1>
                        <p>Discover the best campsites near me</p>
                    </div>
                        <input className="form-control" 
                            type="text" 
                            placeholder="Username:"
                            value={this.state.username} 
                            onChange={this.handleChange("username")} 
                        />
                    <div className="name-form">
                        <input 
                            className="form-control" 
                        type="text" 
                        placeholder="First Name
                        :" value={this.state.first_name}
                         onChange={this.handleChange("first_name")} 
                         />
                        <br/>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Last Name
                            :"value={this.state.last_name}
                            onChange={this.handleChange("last_name")} 
                         />
                    </div>
                        <input 
                            className="form-control" 
                            type="text" 
                            placeholder="Email:"
                            value={this.state.email} 
                            onChange={this.handleChange("email")} 
                         />
                        <input 
                            className="form-control" 
                            type="password" 
                            placeholder="Password:"
                            value={this.state.password} 
                            onChange={this.handleChange("password")} 
                        />
                    <button className="btn session-btn">Sign Up</button>
                    <ErrorShowContainer type={"session"} /> 
                </form>
                <div className="session-component-footer">

                    <span>Have an account? </span>{loginForm}
                </div>
                {/* {errors.length ? <h2>Errors</h2> : ""}
                <ul>
                    {errors}
                </ul> */}
            </div>
        )
    }
}

export default SignupForm; 
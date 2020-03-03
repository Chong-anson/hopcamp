import React from "react"


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
            .then(() => this.props.history.push("/"));
    }

    render() {
        let errors = "";
        if (this.props.errors.session.length){
            errors = this.props.errors.session.map(error =>
                (<li>{error}</li>)
            )
        }
        return (
            <div className="modal is-open">
                <form className="modal-form signup-form form" onSubmit={this.handleSubmit}>
                    <h1>Join HopCamp</h1>
                    <p>Discover the best campsites near me</p>
                    <label>Username:
                        <input type="text" value={this.state.username} onChange={this.handleChange("username")} />
                    </label>
                    <br/>
                    <label>First Name:
                        <input type="text" value={this.state.first_name} onChange={this.handleChange("first_name")} />
                    </label>
                    <br/>
                    <label>Last Name:
                        <input type="text" value={this.state.last_name} onChange={this.handleChange("last_name")} />
                    </label>
                    <br/>
                    <label>Email:
                        <input type="text" value={this.state.email} onChange={this.handleChange("email")} />
                    </label>
                    <br/>
                    <label>Password:
                        <input type="password" value={this.state.password} onChange={this.handleChange("password")} />
                    </label>
                    <br/>
                    <button>Sign Up</button>
                </form>
                {errors.length ? <h2>Errors</h2> : ""}
                <ul>
                    {errors}
                </ul>
            </div>
        )
    }
}

export default SignupForm; 
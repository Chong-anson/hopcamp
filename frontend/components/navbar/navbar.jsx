import React from 'react'
import { Link } from "react-router-dom"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        this.props.logout();
    }

    render() {
        if (this.props.currentUser) {
            return (
                <div className="navbar-buttons">
                    <Link to="/">Trips</Link>
                    <br />
                    <Link to="/">Saves</Link>
                    <br />
                    <Link to="/">Messages</Link>
                    <br />
                    <button onClick={this.handleClick}> Sign Out!</button>
                </div>
            )
        }
        else {
            return (
                <div className="navbar-buttons">
                    <Link to="/">Near Me</Link>
                    <Link to="/">Become a Host</Link>
                    <Link to="/">About</Link>
                    {this.props.loginForm}
                    {/* <Link className="special-buttons" to="/signup">Sign up</Link> */}
                    {this.props.signupForm}
                </div>

            )
        }
    }
}

export default Navbar;
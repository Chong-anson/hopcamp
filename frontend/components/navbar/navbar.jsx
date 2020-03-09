import React from "react"
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
        // const searchBox = (

        // )
        if (this.props.currentUser) {
            const  currentUserId = this.props.currentUser.id
            return (
                <div className="navbar-buttons">
                    <Link to={`/users/${currentUserId}/trips`}>Trips</Link>
                    <br />
                    <Link to={`/users/${currentUserId}/Saves`}>Saves</Link>
                    <br />
                    <Link to={`/users/${currentUserId}/Messages`}>Messages</Link>
                    <br />
                    <button className="navbar-btn" onClick={this.handleClick}> Sign Out!</button>
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
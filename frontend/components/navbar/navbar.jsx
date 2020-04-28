import React from "react"
import { Link } from "react-router-dom";

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
            const  currentUserId = this.props.currentUser.id
            return (
                <div className="navbar-buttons" >
                    <ul className="top-nav">
                      <li>
                        <div>
                        Hello, {this.props.currentUser.firstName}
                        </div>
                        <div>
                          <Link to={`/users/${currentUserId}/trips`}>Trips</Link>
                        </div>
                      </li>
                      <li>
                        <div>
                          <button className="navbar-btn" onClick={this.handleClick}> Sign Out!</button>
                        </div>
                      </li>
                    </ul>
                </div>
            )
        }
        else {
            return (
                <div className="navbar-buttons">
                    <ul className="top-nav">
                      <li>
                        <div>
                          {this.props.loginForm}
                        </div>
                      </li>
                      <li>
                        <div>
                          {this.props.signupForm}
                        </div>
                      </li>
                    </ul>
                    <button className="special-buttons-2">Start hosting</button>
                </div>

            )
        }
    }
}

export default Navbar;
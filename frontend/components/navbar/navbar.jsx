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
                    <ul className="top-nav">
                      <li>
                        <Link to={`/users/${currentUserId}/trips`}>Trips</Link>
                      </li>
                      <li>
                        <Link to={`/users/${currentUserId}/Saves`}>Saves</Link>
                      </li>
                      <li>
                        <Link to={`/users/${currentUserId}/Messages`}>Messages</Link>
                      </li>
                      <li>
                        <button className="navbar-btn" onClick={this.handleClick}> Sign Out!</button>
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
                          <Link to="/">Near me</Link>
                        </div>
                      </li>
                      <li>
                        <div>
                          <Link to="/">About</Link>
                        </div>
                      </li>
                      <li>
                        <div>
                          <Link to="/">Earn Hoppcash</Link>
                        </div>
                      </li>
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
                    {/* <Link className="special-buttons" to="/signup">Sign up</Link> */}
                    <button className="special-buttons-2">Start hosting</button>
                </div>

            )
        }
    }
}

export default Navbar;
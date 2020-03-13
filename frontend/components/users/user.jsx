import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { fetchCurrentUser } from '../../actions/session_actions';

const User = (props) => {
    // console.log(props);
    const {firstName, lastName, email}  = props.currentUser;

    let { url } = useRouteMatch();
    // console.log(props.bookings);
    const dispatch = useDispatch();
    let bookings = {};
    // useEffect( () => {dispatch(fetchCurrentUser(props.currentUser.id))}, [props.currentUser.id]);
    // const bookings = useSelector( (state) => (
    //     props.currentUser.bookings.map( id => state.entities.booking)
    // ))
    return(
        <div className="user-container">
            <div className="user-info">
                <table>
                    <thead>
                        <tr>
                        <td>Profile</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>First Name:</td>
                            <td>{firstName}</td>
                        </tr>
                        <tr>
                            <td>Last Name:</td>
                            <td>{lastName}</td>
                        </tr>
                        <tr>
                            <td>Email:</td>
                            <td>{email}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
                {/* <Route path={`${url}/trips`} render={ () => {
                    bookings.map( booking => 
                        <li> {booking.startDate} </li>
                )
                }}
                />  */}
                {/* <Route path="/>  */}
        </div>
    )
}

export default User; 
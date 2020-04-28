import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { fetchCurrentUser } from '../../actions/session_actions';
import TripList from './trip_list';

const User = (props) => {

    const currentUser = useSelector(state => state.entities.users[state.session.id])
    const {firstName, lastName, email}  = currentUser;

    let { url } = useRouteMatch();

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(fetchCurrentUser(currentUser.id))
    }, [])

    return(
        <div className="user-container">
          <div className="left">

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
        </div>

                {/* <Route path={`${url}/trips`} render={ () => {
                    bookings.map( booking => 
                        <li> {booking.startDate} </li>
                )
                }}
                />  */}
                {/* <Route path="/>  */}
            <div className="right">
              <TripList user={currentUser} />
            </div>
        </div>
    )
}

export default User; 
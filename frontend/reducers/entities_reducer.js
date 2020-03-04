import { combineReducers } from "redux";
import usersReducer from "./entities/users_reducer";
import campsitesReducer from "./entities/campsites_reducer";
import venuesReducer from "./entities/venues_reducer";
import bookingsReducer from "./entities/bookings_reducer";

const entitiesReducer = combineReducers({
    users: usersReducer,
    booking: bookingsReducer,
    campsites: campsitesReducer,
    venues: venuesReducer
})

export default entitiesReducer;

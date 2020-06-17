import { combineReducers } from "redux";
import usersReducer from "./entities/users_reducer";
import campsitesReducer from "./entities/campsites_reducer";
import venuesReducer from "./entities/venues_reducer";
import bookingsReducer from "./entities/bookings_reducer";
import tagsReducer from "./entities/tags_reducer";
import reviewsReducer from "./entities/reviews_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  bookings: bookingsReducer,
  campsites: campsitesReducer,
  venues: venuesReducer,
  tags: tagsReducer,
  reviews: reviewsReducer,
});

export default entitiesReducer;

import { RECEIVE_VENUES, RECEIVE_VENUE } from "../../actions/venue_actions";

const _defaultState = {};

const venuesReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_VENUES:
      return action.venues;
    // case RECEIVE_VENUE:
    //     return Object.assign({}, state, { [action.payload.venue.id]: action.payload.venue});
    default:
      return state;
  }
};

export default venuesReducer;

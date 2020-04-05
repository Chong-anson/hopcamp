import { RECEIVE_CAMPSITE, RECEIVE_CAMPSITES } from "../../actions/campsite_actions";
// import { RECEIVE_VENUE } from "../../actions/venue_actions";
import { RECEIVE_BOOKING } from "../../actions/booking_actions";

const _defaultState = {};

const campsitesReducer = (state = _defaultState, {type, payload}) => {
  Object.freeze(state);
  let newState;
  switch(type){
    case RECEIVE_CAMPSITES:
      if(payload.campsites)
          return payload.campsites;
      else
          return _defaultState;
    case RECEIVE_CAMPSITE:
      return Object.assign({}, state, {[payload.campsite.id] : payload.campsite})
    case RECEIVE_BOOKING:
      const { booking } = payload; 
      newState = Object.assign({}, state); 
      newState[booking.campsiteId].bookings.push(booking.id);
      return newState; 
    default: 
        return state;
  }
}

export default campsitesReducer; 
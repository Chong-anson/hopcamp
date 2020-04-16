import { RECEIVE_CAMPSITE, RECEIVE_CAMPSITES } from "../../actions/campsite_actions";
// import { RECEIVE_VENUE } from "../../actions/venue_actions";
import { RECEIVE_BOOKING } from "../../actions/booking_actions";
import { RECEIVE_REVIEW } from "../../actions/review_actions";
import ReviewForm from "../../components/campsite_show/review_form";

const _defaultState = {};

const campsitesReducer = (state = _defaultState, {type, payload}) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state); 
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
      newState[booking.campsiteId].bookings.push(booking.id);
      return newState; 
    case RECEIVE_REVIEW:
      newState[payload.review.campsiteId].reviews.push(payload.review.id);
      return newState;
    default: 
        return state;
  }
}

export default campsitesReducer; 
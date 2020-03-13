import { RECEIVE_BOOKING } from "../../actions/booking_actions";
import { RECEIVE_CAMPSITE } from "../../actions/campsite_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions"

const _defaultState = {};

const bookingsReducer = (state = _defaultState, action) => {
    Object.freeze(state);

    let obj; 
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            obj = {};
            if (action.payload.bookings)
                obj = action.payload.bookings
            return obj
        case RECEIVE_CAMPSITE: 
            obj = {};
            if (action.payload.bookings)
                obj = action.payload.bookings
            return obj
        case RECEIVE_BOOKING:
            return Object.assign({}, state, {[action.booking.id]: action.booking})
        default:
            return state;
    }
}

export default bookingsReducer;
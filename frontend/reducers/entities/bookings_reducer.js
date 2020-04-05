import { RECEIVE_BOOKING } from "../../actions/booking_actions";
import { RECEIVE_CAMPSITE } from "../../actions/campsite_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions"

const _defaultState = {};

const bookingsReducer = (state = _defaultState, {type, payload }) => {
    Object.freeze(state);

    let obj; 
    switch(type){
        case RECEIVE_CURRENT_USER:
            obj = {};
            if (payload.bookings)
                obj = payload.bookings
            return obj
        case RECEIVE_CAMPSITE: 
            obj = {};
            if (payload.bookings)
                obj = payload.bookings
            return obj
        case RECEIVE_BOOKING:
            return Object.assign({}, state, {[payload.booking.id]: payload.booking})
        default:
            return state;
    }
}

export default bookingsReducer;
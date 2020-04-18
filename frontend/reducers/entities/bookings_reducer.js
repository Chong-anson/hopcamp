import { RECEIVE_BOOKING, REMOVE_BOOKING } from "../../actions/booking_actions";
import { RECEIVE_CAMPSITE } from "../../actions/campsite_actions";
import { RECEIVE_CURRENT_USER } from "../../actions/session_actions"

const _defaultState = {};

const bookingsReducer = (state = _defaultState, {type, payload }) => {
    Object.freeze(state);

    let nextState; 
    switch(type){
        case RECEIVE_CURRENT_USER:
            nextState = {};
            if (payload.bookings)
                nextState = payload.bookings
            return nextState
        case REMOVE_BOOKING:
            nextState = Object.assign({}, state);
            delete nextState[payload.bookinId];
            return nextState;
        case RECEIVE_CAMPSITE: 
            nextState = {};
            if (payload.bookings)
                nextState = payload.bookings
            return nextState
        case RECEIVE_BOOKING:
            return Object.assign({}, state, {[payload.booking.id]: payload.booking})
        default:
            return state;
    }
}

export default bookingsReducer;
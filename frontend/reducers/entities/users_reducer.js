import { RECEIVE_CURRENT_USER } from "../../actions/session_actions";
import { RECEIVE_BOOKING } from "../../actions/booking_actions";

const _defaultState = {};

const usersReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, {[action.payload.user.id]: action.payload.user});
        case RECEIVE_BOOKING:
            let newState = Object.assign({}, state);
            const { booking } = action.payload; 
            newState[booking.userId].bookings.push(booking.id)
            return newState;
        default: 
            return state; 
    }
}

export default usersReducer; 
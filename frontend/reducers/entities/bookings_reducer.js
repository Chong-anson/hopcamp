import { RECEIVE_BOOKING } from "../../actions/booking_actions";

const _defaultState = {};

const bookingsReducer = (state = _defaultState, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_BOOKING:
            return Object.assign({}, state, {[action.booking.id]: action.booking})
        default:
            return state;
    }
}

export default bookingsReducer;
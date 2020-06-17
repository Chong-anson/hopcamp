import {
  RECEIVE_BOOKING_ERRORS,
  CLEAR_BOOKING_ERRORS,
} from "../../actions/booking_actions";
import { CLEAR_ALL_ERRORS } from "../../actions/session_actions";

const _defaultState = [];

const bookingErrorsReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_BOOKING_ERRORS:
      return action.errors;
    case CLEAR_BOOKING_ERRORS:
      return _defaultState;
    case CLEAR_ALL_ERRORS:
      return _defaultState;
    default:
      return state;
  }
};

export default bookingErrorsReducer;

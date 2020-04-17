import { RECEIVE_PAYMENT, CLEAR_PAYMENT } from "../../actions/payment_actions"

const _defaultState = {};

const paymentReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PAYMENT:
      return action.payload.booking;
    case CLEAR_PAYMENT:
      return _defaultState;
    default:
      return state;
  }
}

export default paymentReducer; 
import { RECEIVE_REVIEW, DELETE_REVIEW } from "../../actions/review_actions";
import { RECEIVE_CAMPSITE } from "../../actions/campsite_actions";

const _defaultState = {};

export default (state = _defaultState, { type, payload }) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (type) {
    case RECEIVE_REVIEW:
      return Object.assign({}, state, { [payload.review.id]: payload.review });
    case DELETE_REVIEW:
      delete nextState[payload.review.id];
      return nextState;
    case RECEIVE_CAMPSITE:
      nextState = payload.reviews || _defaultState;
      return nextState;
    default:
      return state;
  }
};

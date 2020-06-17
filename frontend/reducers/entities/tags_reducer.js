import { RECEIVE_TAGS } from "../../actions/tag_actions";
import { RECEIVE_CAMPSITE } from "../../actions/campsite_actions";

const _defaultState = {};

const tagsReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  const { type, payload, tag, tags } = action;
  const newState = Object.assign({}, state);
  switch (type) {
    case RECEIVE_TAGS:
      return tags;
    case RECEIVE_CAMPSITE:
      payload.tags.forEach((tag) => (newState[tag.id] = tag));
      return newState;
    default:
      return state;
  }
};

export default tagsReducer;

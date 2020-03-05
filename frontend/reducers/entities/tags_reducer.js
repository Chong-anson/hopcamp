import { RECEIVE_TAG, RECEIVE_TAGS } from "../../actions/tag_actions";

const _defaultState = {};

const tagsReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TAGS:
            return action.tags;
        case RECEIVE_TAG:
            return Object.assign({}, state, { [action.tag.id]: action.tag })
        default:
            return state;
    }
}

export default tagsReducer; 
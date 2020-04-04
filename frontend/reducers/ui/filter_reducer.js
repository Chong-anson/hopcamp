import { UPDATE_FILTER, RESET_TAG_FILTER, UPDATE_TAG_FILTER } from "../../actions/filter_actions";

const _defaultState = {
    bounds: {},
    minCapacity: 0,
    minPrice: null, 
    maxPrice: (1/0),
    type: [],
    selectedCampsites: [], 
    checkedTags: [], 
    appliedFilter: false
};

const filterReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
      case UPDATE_FILTER:
        return Object.assign({}, state,{[action.filter]: action.value});
      case RESET_TAG_FILTER:
        return Object.assign({}, state, {
          minCapacity: 0,
          maxPrice: (1 / 0),
          selectedCampsites: [],
          checkedTags: [],
          appliedFilter: false
        })
      case UPDATE_TAG_FILTER:
        return Object.assign({}, state, action.filter)
      default:
        return state;
    }
}

export default filterReducer;
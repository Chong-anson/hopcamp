import { UPDATE_FILTER, UPDATE_TAGS } from "../../actions/filter_actions";

const _defaultState = {
    bounds: {},
    minCapacity: 0,
    minPrice: null, 
    maxPrice: null,
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
      default:
        return state;
    }
}

export default filterReducer;
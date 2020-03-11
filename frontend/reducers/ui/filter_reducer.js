import { UPDATE_FILTER, UPDATE_APPLIED_FILTER } from "../../actions/filter_actions";

const _defaultState = {
    bounds: {},
    minCapacity: null,
    minPrice: null, 
    maxPrice: null,
    type: null,
    campsites: null, 
    tags: null, 
    appliedFilter: false
};

const filterReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch(action.type){
        case UPDATE_FILTER:
            return Object.assign({}, state,{[action.filter]: action.value});
        case UPDATE_APPLIED_FILTER: 
            return Object.assign({}, state, {appliedFilter: action.appliedFilter})
        default:
            return state;
    }
}

export default filterReducer;
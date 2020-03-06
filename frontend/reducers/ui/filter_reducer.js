import { UPDATE_FILTER } from "../../actions/filter_actions";

const _defaultState = {
    bounds: {},
    minCapacity: 1,
    minPrice: 30, 
    maxPrice: 1000
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
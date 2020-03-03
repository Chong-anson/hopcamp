import { RECEIVE_CAMPSITE, RECEIVE_CAMPSITES } from "../../actions/campsite_actions"

const _defaultState = {};

const campsitesReducer = (state = _defaultState, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CAMPSITES:
            const newState = Object.assign({}, state);
            Object.values(action.payload.campsites).forEach( campsite => 
                newState[campsite.id] = campsite
            )
            return newState;
        case RECEIVE_CAMPSITE:
            return Object.assign({}, state, {[action.payload.campsite.id] : action.payload.campsite})
        default: 
            return state;
    }
}

export default campsitesReducer; 
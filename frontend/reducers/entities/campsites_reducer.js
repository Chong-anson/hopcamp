import { RECEIVE_CAMPSITE, RECEIVE_CAMPSITES } from "../../actions/campsite_actions";
import { RECEIVE_VENUE } from "../../actions/venue_actions";

const _defaultState = {};

const campsitesReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    let newState;
    switch(action.type){
        case RECEIVE_CAMPSITES:
            newState = Object.assign({}, state);
            Object.values(action.payload.campsites).forEach( campsite => 
                newState[campsite.id] = campsite
            )
            return newState;
        case RECEIVE_CAMPSITE:
            return Object.assign({}, state, {[action.campsite.id] : action.campsite})
        case RECEIVE_VENUE:
            newState = Object.assign({}, state);
            Object.values(action.payload.campsites).forEach(campsite =>
                newState[campsite.id] = campsite
            )
            return newState;
        default: 
            return state;
    }
}

export default campsitesReducer; 
import { RECEIVE_CAMPSITES, RECEIVE_CAMPSITE } from "../../actions/campsite_actions";

const _defaultState = {};

const venuesReducer = (state = _defaultState, action) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_CAMPSITES:
            const newState = Object.assign({}, state);
            Object.values(action.payload.venues).forEach(venue =>
                newState[venue.id] = venue
            )
            return newState;
        default: 
            return state; 
    }
}

export default venuesReducer;
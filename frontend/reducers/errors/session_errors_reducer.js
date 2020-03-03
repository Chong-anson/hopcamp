import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER } from "../../actions/session_actions";

const _defaultState = [];

const sessionErrorsReducer = (state = _defaultState, action ) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_ERRORS:
            const newState = [...state];
                newState.push(action.errors)
            return newState;
        case RECEIVE_CURRENT_USER:
            return _defaultState; 
        default:
            return state; 
    }
}

export default sessionErrorsReducer;
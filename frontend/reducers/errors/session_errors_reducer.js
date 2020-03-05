import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS } from "../../actions/session_actions";

const _defaultState = [];

const sessionErrorsReducer = (state = _defaultState, action ) => {
    Object.freeze(state);

    switch(action.type){
        case RECEIVE_ERRORS:
            // const newState = [...state];
            // action.errors.forEach(err => 
            //     newState.push(err)
            // )
            return action.errors;
        case RECEIVE_CURRENT_USER:
            return _defaultState; 
        case CLEAR_ERRORS:
            return _defaultState;
        default:
            return state; 
    }
}

export default sessionErrorsReducer;
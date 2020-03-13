import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from "../actions/session_actions";

const _defaultState = {
    id: null
}

const sessionReducer = (state = _defaultState, {type, payload}) => {
    Object.freeze(state);
    switch(type){
        case RECEIVE_CURRENT_USER:
            return {id: payload.user.id}
        case LOGOUT_CURRENT_USER:
            return _defaultState;
        default:
            return state; 
    }
}

export default sessionReducer;
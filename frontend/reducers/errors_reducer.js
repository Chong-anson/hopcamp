import { combineReducers } from "redux";
import sessionErrorsReducer from "./errors/session_errors_reducer";
import reviewErrorReducer from "./errors/review_errors_reducer";

const errorsReducer = combineReducers({
    session: sessionErrorsReducer,
    review: reviewErrorReducer
})

export default errorsReducer; 

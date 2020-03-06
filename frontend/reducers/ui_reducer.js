import { combineReducers } from "redux";
import modalReducer from "./ui/modal_reducer";
import filterReducer from "./ui/filter_reducer";

const uiReducer = combineReducers({
    modal: modalReducer,
    filter: filterReducer
})

export default uiReducer;
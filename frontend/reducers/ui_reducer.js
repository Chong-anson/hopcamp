import { combineReducers } from "redux";
import modalReducer from "./ui/modal_reducer";
import filterReducer from "./ui/filter_reducer";
import mapReducer from './ui/map_reducer';

const uiReducer = combineReducers({
    modal: modalReducer,
    filter: filterReducer,
    map: mapReducer
})

export default uiReducer;
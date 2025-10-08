import { combineReducers } from "redux";
import profileReducer from "./profileReducer.js";
import contactReducer from "./contactReducer";


export const rootReducer = combineReducers({
    profile: profileReducer,
    contacts: contactReducer
});
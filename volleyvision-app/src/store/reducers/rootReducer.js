import authReducer from "./authReducer";
import matchReducer from "./matchReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
    auth: authReducer,
    match: matchReducer,
    firestore: firestoreReducer
})

export default rootReducer
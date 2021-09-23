import { createStore, combineReducers } from 'redux'

import titleReducer from "./reducers/titleReducer";
import profileReducer from "./reducers/profileReducer";

let reducers = combineReducers ({
    profile:profileReducer,
    document:titleReducer
})

let store = createStore(reducers)
export default store
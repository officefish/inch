// import { createStore, combineReducers } from 'redux'

// import titleReducer from "./reducers/titleReducer";
// import profileReducer from "./reducers/profileReducer";

// let reducers = combineReducers ({
//     profile:profileReducer,
//     document:titleReducer
// })

// let store = createStore(reducers)
// export default store

import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
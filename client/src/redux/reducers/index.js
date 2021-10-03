import { combineReducers } from "redux";

import auth from './auth'
import message from './message'
import connect from './connect'

export default combineReducers({
    auth,
    message,
    connect
})
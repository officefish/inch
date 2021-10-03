import {SET_HOST, SET_PORT} from '../../actions/types'

const initialState = {
    host:'localhost',
    port:3001    
}

const message = (state = initialState, action) => {
    const {type, payload} = action

    switch (type) {
        case SET_PORT:
            return {
                ...state,
                port: payload
            }

        case SET_HOST:
            return {
                ...state,
                host: payload
            }

        default:
            return state
    }
}
export default message
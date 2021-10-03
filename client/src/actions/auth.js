import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE
} from './types'

export const register = (service, username, email, password) => dispatch => {
    
    return service.register(username, email, password)
        .then(
            (response) => {
                dispatch({
                    type: REGISTER_SUCCESS
                })

                dispatch({
                    type: SET_MESSAGE,
                    payload: response.data.message
                })

                return Promise.resolve()
            },
            (error) => {
                const message = (  
                error.response 
                && error.response.data
                && error.response.data.message)
                || error.message
                || error.toString()

                dispatch({
                    type: REGISTER_FAIL
                })

                dispatch({
                    type: SET_MESSAGE,
                    payload: message
                })
                
                return Promise.reject()
            })
}

export const login = (service, username, password) => dispatch => {
    return service.login(username, password)
        .then(
            (data) => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: {user:data}
                })

                return Promise.resolve()
            },
            (error) => {
                const message = (  
                    error.response 
                    && error.response.data
                    && error.response.data.message)
                    || error.message
                    || error.toString()

                dispatch({
                    type: LOGIN_FAIL
                })

                dispatch({
                    type: SET_MESSAGE,
                    payload: message
                })

                return Promise.reject()
    
            })
}

export const logout = (service) => dispatch => {
    service.logout()

    dispatch({
        type: LOGOUT
    })
}
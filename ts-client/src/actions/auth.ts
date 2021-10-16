import AuthService from '../services/auth.service'
import { MessageAction } from './message'

export class AuthAction {
    static REGISTER_SUCCESS: 'REGISTER_SUCCESS'
    static REGISTER_FAIL: 'REGISTER_FAIL'
    static LOGIN_SUCCESS: 'LOGIN_SUCCESS'
    static LOGIN_FAIL: 'LOGIN_FAIL'
    static LOGOUT : 'LOGOUT'
}

export const register = 
    (host:string, port:number) => 
    (username:string, email:string, password:string) => 
    (dispatch:any) => {
        const service:AuthService = new AuthService(host, port)
        return service.register(username, email, password)
            .then((response:any) => {
                dispatch({
                    type: AuthAction.REGISTER_SUCCESS
                })
                dispatch({
                    type: MessageAction.SET_MESSAGE,
                    payload: response.data.message
                })
                return Promise.resolve()
            },
            (error:any) => {
                const message = (
                        error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString()

                dispatch({
                    type: AuthAction.REGISTER_FAIL
                })

                dispatch({
                    type: MessageAction.SET_MESSAGE,
                    payload: message
                })

                return Promise.reject()
            }) 
}  

export const login = 
    (host:string, port:number) => 
    (username:string , password:string , needRemember:boolean) => 
    (dispatch:any ) => {
    const service:AuthService = new AuthService(host, port)
    return service.login(username, password, needRemember)
        .then(
            (data:any) => {
                dispatch({
                    type: AuthAction.LOGIN_SUCCESS,
                    payload: { user: data }
                })

                return Promise.resolve()
            },
            (error:any) => {
                const message = (
                        error.response &&
                        error.response.data &&
                        error.response.data.message) ||
                    error.message ||
                    error.toString()

                dispatch({
                    type: AuthAction.LOGIN_FAIL
                })

                dispatch({
                    type: MessageAction.SET_MESSAGE,
                    payload: message
                })

                return Promise.reject()
            })
}

export const logout = 
    (host:string, port:number) =>  
    (dispatch:any) => {
        const service:AuthService = new AuthService(host, port)    
        service.logout()

    dispatch({
        type: AuthAction.LOGOUT
    })
}

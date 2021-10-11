import { AuthAction } from "../../actions/auth";
import { IUser, getUserFromLocalStorage } from '../../models/user'

interface IAuthState {
    isLoggedIn: boolean,
    user: IUser | null
}

interface IRegisterSuccess {
    type: typeof AuthAction.REGISTER_SUCCESS,
}

interface IRegisterFail {
    type: typeof AuthAction.REGISTER_FAIL,
}

interface ILoginSuccess {
    type: typeof AuthAction.LOGIN_SUCCESS,
    payload: {user: IUser | null}
}

interface ILoginFail {
    type: typeof AuthAction.LOGIN_FAIL,
    payload: {user: IUser | null}
}

type actionType = IRegisterSuccess | IRegisterFail | ILoginSuccess | ILoginFail

const user = getUserFromLocalStorage()
const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null}

const auth = (state = initialState, action:actionType) : IAuthState => {
    switch(action.type) {
        case AuthAction.REGISTER_SUCCESS:
            return {
                ...state,
                isLoggedIn: false
            }
        case AuthAction.REGISTER_FAIL:
            return {
                ...state,
                isLoggedIn: false
            }
        case AuthAction.LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload.user
            }
        case AuthAction.LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                user: action.payload.user
            }
        default:
            return state
    }   
}
export default auth
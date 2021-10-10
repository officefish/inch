import { AuthAction } from "../../actions/aurh";

enum ERoles {
    User,
    Moderator,
    Administrator
}

interface IUser {
    id: number,
    username: string,
    email: string,
    roles: ERoles,
    accessToken: string
}

interface IAuthState {
    isLoggedIn: boolean,
    user: IUser | null
}

interface registerType {
    type: typeof AuthAction.REGISTER,
    payload : string
}

interface loginType {
    type: typeof AuthAction.LOGIN,
    payload: string
}

type actionType = loginType | registerType;

const getUserFromLocalStorage = () :IUser => {
    let userData = localStorage.getItem('user')
    const user = userData
        ? JSON.parse(userData)
        : null
    return user
}

const user = getUserFromLocalStorage()
const initialState = user
    ? {isLoggedIn: true, user}
    : {isLoggedIn: false, user: null}

const auth = (state = initialState, action:actionType) : IAuthState => {
    switch(action) {
        default:
            return state
    }   
}
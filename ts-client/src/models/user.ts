enum ERoles {
    User,
    Moderator,
    Administrator
}

export interface IUser {
    id: number,
    username: string,
    email: string,
    roles: ERoles,
    accessToken: string
}

export const getUserFromLocalStorage = () :IUser => {
    let userData = localStorage.getItem('user')
    const user = userData
        ? JSON.parse(userData)
        : null
    return user
}
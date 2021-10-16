import { IUser, getUserFromLocalStorage } from '../models/user'

// interface IAuthorization {
//     Authorization:string | undefined
// }

const authHeader = () : any => {
    const user:IUser = getUserFromLocalStorage()
        
    if (user && user.accessToken) {
        return {
            Authorization: 'Teachies ' + user.accessToken
        }
    } else {
        return { Authorization:undefined }
    }
}
export default authHeader
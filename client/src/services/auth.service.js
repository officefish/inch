import axios from 'axios'
import { API_URL } from './api-url'
const AUTH_URL = API_URL + '/auth/'

class AuthService {

    login(username, password) {
        return axios
            .post(AUTH_URL + 'signin', {username, password})
            .then((response) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }

                return response.data
        })
    }

    logout() {
        localStorage.removeItem('user')
    }

    register(username, email, password) {
        return axios
            .post(AUTH_URL + 'signup', {
                username,
                email,
                password
            })
        
    }
}

export default new AuthService()
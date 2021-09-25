import axios from 'axios'
import { API_URL } from './api-url'

import authHeader from './auth-header'

const TEST_URL = API_URL + '/test/'

class UserService {
    
    getPublicContent() {
        return axios
            .get(TEST_URL + 'all')
    }

    getUserBoard() {
        return axios
            .get(TEST_URL + 'user', {
                headers: authHeader()
            })
    }

    getModeratorBoard() {
        return axios
            .get(TEST_URL + 'mode', {
                headers: authHeader()    
            })
    }

    getAdminBoard() {
        return axios
            .get(TEST_URL + 'admin', {
                headers: authHeader()
            })
    }
}

export default new UserService()
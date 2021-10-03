import axios from 'axios'
import { API_URL } from './api-url'

import authHeader from './auth-header'

class UserService {

    constructor(host, port) {
        this.api_url = 'http://' + host + ':' + port + '/api'
        this.test_url = this.api_url + '/test/'

        this.getPublicContent = this.getPublicContent.bind(this)
        this.getUserBoard = this.getUserBoard.bind(this)
        this.getModeratorBoard = this.getModeratorBoard.bind(this)
        this.getAdminBoard = this.getAdminBoard.bind(this)
    }
    
    getPublicContent() {
        return axios
            .get(this.test_url + 'all')
    }

    getUserBoard() {
        return axios
            .get(this.test_url + 'user', {
                headers: authHeader()
            })
    }

    getModeratorBoard() {
        return axios
            .get(this.test_url + 'mode', {
                headers: authHeader()    
            })
    }

    getAdminBoard() {
        return axios
            .get(this.test_url + 'admin', {
                headers: authHeader()
            })
    }
}

export default UserService
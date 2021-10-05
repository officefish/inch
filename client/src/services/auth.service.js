import axios from 'axios'

class AuthService {

    constructor(host, port) {
        this.api_url = 'http://' + host + ':' + port + '/api'
        this.auth_url = this.api_url + '/auth'
        this.signin_url = this.auth_url + '/signin'
        this.signup_url = this.auth_url + '/signup'

        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
        this.logout = this.logout.bind(this)
    }

    login(username, password, needRemember) {
        return axios
            .post(this.signin_url, { username, password, needRemember })
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
            .post(this.signup_url, {
                username,
                email,
                password
            })

    }
}

export default AuthService
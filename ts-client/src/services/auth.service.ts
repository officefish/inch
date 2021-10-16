import axios from "axios"

class AuthService {

    private api_url: string
    private auth_url: string
    private signin_url: string
    private signup_url: string

    constructor (host:string, port:number ) {
        this.api_url = 'http://' + host + ':' + port + '/api'
        this.auth_url = this.api_url + '/auth'
        this.signin_url = this.auth_url + '/signin'
        this.signup_url = this.auth_url + '/signup'
    }

    login(username:string, password:string, needRemember:boolean) :any {
        return axios
            .post(this.signin_url, { username, password, needRemember })
            .then((response:any) => {
                if (response.data.accessToken) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                }
                return response.data
            })
    }

    logout() :void {
        localStorage.removeItem('user')
    }

    register(username:string, email:string, password:string) {
        return axios
            .post(this.signup_url, {
                username,
                email,
                password
            })
    }
}
export default AuthService
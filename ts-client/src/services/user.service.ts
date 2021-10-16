import axios from "axios"
import authHeader from "./auth-header"

class UserService {
    private api_url: string
    private test_url: string

    constructor( host: string, port:number) {
        this.api_url = 'http://' + host + ':' + port + '/api'
        this.test_url = this.api_url + '/test/'
    }

    getPublicContent() :any {
        return axios
            .get(this.test_url + 'all')
    }

    getUserBoard() :any {
        return axios
            .get(this.test_url + 'user', {
                headers: authHeader()
            })
    }

    getModeratorBoard() :any {
        return axios
            .get(this.test_url + 'mode', {
                headers: authHeader()    
            })
    }

    getAdminBoard() :any {
        return axios
            .get(this.test_url + 'admin', {
                headers: authHeader()
            })
    }

}
export default UserService
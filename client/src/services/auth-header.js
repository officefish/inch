import axios from 'axios'
import { API_URL } from './api-url'

export default function authHeader() {
    const user = JSON.parse(localStorage
        .getItem('user'))
        
    if (user && user.accessToken) {
        return {
            Authorization: 'Teachies ' + user.accessToken
        }
    } else {
        return {}
    }
}
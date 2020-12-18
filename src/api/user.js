import axios from '@/utils/service'

export default {
    login(params) {
        return axios.post('/login',params)
    }
}
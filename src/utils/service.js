import axios from 'axios'
import { getToken } from './auth'
const instance = axios.create({
    baseURL: 'localhost:8080',
    timeout: 5000
})

instance.interceptors.request.use((config) => {
    if (getToken()) { //如果有token就加
        //在请求头中设置token，header是一个对象
        config.headers["token"] = getToken();
    }
    return config
}, (error) => {
    return Promise.reject(error)
})
instance.interceptors.response.use((response) => {
    const res = response.data;
    if(!res.success){ //如果错误
        return Promise.reject(res.message || '请求错误');
    }
    return res;
},(error) => Promise.reject(error))
export default instance;
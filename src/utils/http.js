import axios from './service'

//get请求
export function get(url,params) {
    const config = {
        method:'get',
        url:url
    }
    if(params) { //如果穿了参数，则赋值
        config.params = params;
    }
    return axios(config)
}

//post请求
export function post(url,params) {
    const config = {
        method:'post',
        url:url
    }
    if(params) { //如果穿了参数，则赋值
        config.data = params;
    }
    return axios(config)
}
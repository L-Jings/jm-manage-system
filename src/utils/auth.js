export function getToken() {
    //获取token
    return sessionStorage.getItem("token");
}

export function setToken(token) {
    //设置token
    return sessionStorage.setItem("token",token);
}

export function removeToken() {
    //删除token
    return sessionStorage.removeItem("token");
}
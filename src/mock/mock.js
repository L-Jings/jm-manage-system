import Mock from 'mockjs';

//模拟登陆接口
Mock.mock("localhost:8080/login", "post", (req) => {
    const { username, password } = JSON.parse(req.body); //结构出username和password数据
    if (username === 'user' && password === '123qwe') {
        return {
            code: 200,
            success: true,
            message: '登录成功',
            token: '3arc9h0vhcr0f8iprpnscmfo8s',
            nickname: '罗大炮'
        }
    } else {
        return {
            code: 100,
            success: false,
            message: '账号或密码有误'
        }
    }
})
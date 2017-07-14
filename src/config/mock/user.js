import Mock from 'mockjs'

var Random = Mock.Random

const userTemplete = {
    'id': '@integer(1, 100)',
    'name': '@cname()',
    'avatar': "@image('200x200', '#51DB89', '#ffffff', '☺')",
    'introduction': '@cparagraph(2)',
    'token': '@guid()',
    'phone': /^1(3|4|5|7|8)\d{9}$/
}

const accounts = [{
    account: 'woshiadmin',
    password: '123456',
    role: 'admin'
}, {
    account: 'woshiuser',
    password: '123456',
    role: 'guest'
}, {
    account: 'woshikefu',
    password: '123456',
    role: 'server'
}]

const users = accounts.map((item) => {
    return Object.assign(item, Mock.mock(userTemplete))
})

function login(config) {
    const { account, password } = JSON.parse(config.body)

    const user = users.filter((item) => {
        if (item.account === account && item.password === password) {
            return item
        }
    })[0]

    return { code: 200, status: true, user: user }
}

export default {
    login
}
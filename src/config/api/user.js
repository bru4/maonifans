import Query from '../query'

function userLogin (formdata) {
    return Query.post('/login', formdata)
}
export {userLogin}
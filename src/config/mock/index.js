import Mock from 'mockjs'
import user from './user'
import category from './category'

Mock.mock(/\/login/, 'post', user.login)

Mock.mock(/\/categories/, 'get', category.getCategories)
import Mock from 'mockjs'
import user from './user'
import category from './category'
import brand from './brand'

const baseUrl = 'https://test.com'
Mock.mock(baseUrl + '/login', 'post', user.login)

Mock.mock(baseUrl + '/categories', 'get', category.getCategories)

Mock.mock(baseUrl + '/brands', 'get', brand.getBrands)
Mock.mock(baseUrl + '/brands/new', 'post', brand.newBrand)
Mock.mock(baseUrl + '/brands/delete', 'delete', brand.DeleteBrand)

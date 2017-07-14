import Query from '../query'

function getAllCategories() {
    return Query.get('/categories')
}
export { getAllCategories }
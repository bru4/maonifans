import Query from '../query'

function BrandList () {
  return Query.get('/brands')
}

function NewBrand(data) {
  return Query.post('/brands/new', data)
}

function DeleteBrand(id) {
  return Query.delete('/brands/delete', {id: id})
}

export {BrandList, NewBrand, DeleteBrand}

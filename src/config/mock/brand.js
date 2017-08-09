import Mock from 'mockjs'

var Random = Mock.Random

const brandTempelete = {
  'name': '@cname()',
  'address': '@city(true)',
  'tel': /^1(3|4|5|7|8)\d{9}$/
}

// const initBrands = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7}].map((item) => {
//     return Object.assign(item, Mock.mock(brandTempelete))
// })
const initBrands = []

for (var i = 1; i <= 20; i++) {
  initBrands[i-1] = Object.assign({id: i}, Mock.mock(brandTempelete))
}

function getBrands (config) {
  return { code: 200, status: true, brands: initBrands }
}

function newBrand (config) {
  const data = JSON.parse(config.body)
  let id = initBrands[initBrands.length - 1].id + 1
  initBrands.push(Object.assign({id: id}, data))
  return { code: 200, status: true, brands: initBrands }
}
function deleteBrand (config) {
  const data = JSON.parse(config.body)
  // initBrands.splice()
  console.log(data);
  return { code: 200, status: true, brands: initBrands }
}

export default {
  getBrands,
  newBrand,
  deleteBrand
}

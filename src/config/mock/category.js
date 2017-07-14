import Mock from 'mockjs'

var Random = Mock.Random

const categoryList = [{
        id: 1,
        name: Mock.mock('@cname()'),
        weight: 1,
        children: [{
            id: 4,
            name: Mock.mock('@cname()'),
            weight: 1
        }, {
            id: 5,
            name: Mock.mock('@cname()'),
            weight: 2
        }]
    },
    { id: 2, name: Mock.mock('@cname()'), weight: 2 },
    { id: 3, name: Mock.mock('@cname()'), weight: 3 }
]

function getCategories() {
    return { code: 200, status: true, categories: categoryList }
}

export default { getCategories }
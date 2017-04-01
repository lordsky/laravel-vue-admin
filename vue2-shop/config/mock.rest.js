var Mock = require('mockjs')
var _ = require('lodash')
const Random = Mock.Random

var data = { users: [], articles: [] , goods1: [] }

  // Create 1000 users
_.times(31, function(n) {
  // data.users.push({ id: i, name: 'user' + i })
  data.users.push(Mock.mock({
    id: Mock.Random.guid(),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1)
  }))
})

_.times(31, function(n) {
  data.articles.push(
    Mock.mock({
      id: n,
      editor: Random.cname(),
      title: Random.ctitle(12),
      littleimg: Random.image('125x125'),
      content: Random.cparagraph(),
      created_at: Random.datetime()
    })
  )
})

_.times(31, function(n) {
  data.goods1.push(
    Mock.mock({
      id: n,
      title: Random.ctitle(12),
      name: Random.ctitle(12),
      littleimg: Random.image('125x125'),
      bigimg: Random.image('200x250'),
      content: Random.cparagraph(),
      created_at: Random.datetime()
    })
  )
})

module.exports = data
const Mock = require('mockjs')
const configs = require('./mock.conf')
const baseUrl = '/api'

module.exports = app => {

  console.log('mockjs routes:')
  console.log(configs)

  configs.forEach(({ url, method = 'get', data }) => {
    app[method](baseUrl + url, (req, res) => {
      const template = typeof data === 'function' ? data(req) : data
      res.send(Mock.mock(template))
    })
  })
}
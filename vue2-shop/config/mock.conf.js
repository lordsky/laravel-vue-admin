var _ = require('lodash')
var goods = require('./mock/goods.json')

module.exports = [
  // template example
  {
    url: '/login',
    method: 'post',
    data(req) {
      return {
        name: "Mock.js"
      }
    }
  },{
    url: '/banner',
    data: {
      'data|1-10': [{
        'id|+1': 1,
        'link':'/#/goods/3',
        'title':'@ctitle(12)',
        'src':'@image(1024x200, #009b72, #fff,banner)'
      }]
    }
  },{
    url: '/goods',
    data(req) {
      return goods
    }
  },{
    url: '/goods/:id',
    data(req) {
      const id = req.param('id')
      console.log('id',id)
      // var item = _.keys(goods.data)
      //const record = goods.data.find(p => p.id === id)
      const record = goods.data.find(function(item){
        return item.id = id
      })
      return {data: record}
//      return item
    }
  },{
    url: '/city',
    method: 'get',
    data: {
      "citys|1-10": {
        "310000": "上海市",
        "320000": "江苏省",
        "330000": "浙江省",
        "340000": "安徽省",
        "350000": "河南省"
      }
    }
  },{
    url: '/bbb/:type',
    data(req) {
      const type = req.param('type')
      if (type === 'array') {
        return {
          "citys|1-10": [
            "Mock.js"
          ]
        }
      }
      return {
        "name": "Mock.js"
      }
    }
  }
]
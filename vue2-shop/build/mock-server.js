var express = require('express')
var jsonServer = require('json-server')
var opn = require('opn')
var restConfig = require('../config/mock.rest.js')

var app = express()
var port = process.env.PORT || 8081
var uri = 'http://localhost:' + port + '/api/db'
  
app.use(express.static('dist'));
// mock router
require('../config/mock.routes')(app)  
app.use('/api', jsonServer.router(restConfig))

module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
})
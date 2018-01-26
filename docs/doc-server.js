const express = require('express')
const port = 9527
const app = express()
app.use(express.static('static'))
var server = app.listen(port, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('server is working at http://%s:%s', host, port)
})

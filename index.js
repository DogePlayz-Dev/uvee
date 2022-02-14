var proxy = new (require('./lib/server'))({prefix: '/service/', title: 'Ultraviolet'})

var server = require('http').Server();server.on('request', (req, res) => {
  proxy.request(req, res)
}).listen(8080)
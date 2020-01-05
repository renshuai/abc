const http = require('http');
const server = http.createServer();
server.on('request', function(req,res) {
    res.end('helo world');
})
server.listen(3000);
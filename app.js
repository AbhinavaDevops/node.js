const http = require('http');

http.createServer((req, res) => {
  res.end("Hello from DevOps Pipeline 🚀");
}).listen(80);


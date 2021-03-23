const http = require('http')
const server = http.createServer((req, res) => {
   console.log(req.url)
   if (req.url == '/') {
       res.write('<b>Hello World  !! 123</b> again 1234');
       res.end();
   }
});
server.listen(8088); // port 8088
console.log('Listening to port 8088');
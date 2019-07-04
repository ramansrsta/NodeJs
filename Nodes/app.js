const http = require('http'); //require is needed for importing modules and files
// const fs = require('fs');

const routes = require('./routes');
const server = http.createServer(routes);
console.log('I am loving it');

server.listen(3000);
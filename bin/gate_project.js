#!/usr/bin/env node

console.log("sever listening port 3000");

var server = require('../index.js');

server.listen(process.env.NODE_PORT || 3000);

console.log("sever listening port 3000");

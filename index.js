var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT);
console.log('hello');
console.log(process.env.PORT);
console.log(process.env.IP);
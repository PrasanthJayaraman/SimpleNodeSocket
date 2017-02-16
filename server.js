var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.get('/', function(req, res, next){
  fs.readStream(__dirname + '/index.html', function(err, data){
    res.sendfile(__dirname + '/index.html');
    return next();
  })
});

io.on('connection', function(socket){
  socket.emit('msg', {'text': 'Welcome to socket programming <3 NodeJS'});
  socket.on('response', function(msg){
    console.log('Message from client ' + msg);
  })
})

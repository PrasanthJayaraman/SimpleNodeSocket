var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.emit('msg', {'text': 'Welcome to socket programming <3 NodeJS'});
  socket.on('response', function(data){
    console.log('Message from client ' + data.msg);
  })
})

server.listen(9000, function(){
  console.log('Server started.');
});

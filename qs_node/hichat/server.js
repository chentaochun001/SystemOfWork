var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var users =[];

// 用server对象启动服务器
app.use('/',express.static(__dirname + '/www'));  //中间件 静态服务器
server.listen(3000);
io.sockets.on('connection', function(socket) {
    socket.on('login', function(nickname) {
        console.log(nickname);
        if (users.indexOf(nickname) > -1) {
            socket.emit('nickExisted')
        } else {
            socket.nickname = nickname;
            users.push(nickname);
            socket.emit('loginSuccess');
            io.sockets.emit('system', nickname, users.length)
        }
    }); 
})

// app.listen(300, function() {
//     console.log('聊天室开聊!');
// })
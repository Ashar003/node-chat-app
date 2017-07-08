const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT|| 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log('New User Connected');


    socket.on('createMessage', (Message) => {
        console.log(Message);
        io.emit('newMessage', { 
            from: Message.from,
            text: Message.text,
            createdAt: new Date().getTime()
        })
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});




server.listen(port, () => {
    console.log(`Server started on port ${port}`);
}); 
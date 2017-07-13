const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage, generateLocationMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT|| 3000;
const app = express();
var server = http.createServer(app);
var io = socketIO(server);


app.use(express.static('public'))

io.on('connection', (socket) => {
    console.log('New User Connected');


   
    socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app')); //Emit to send events
    socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

 


    socket.on('createMessage', (Message, callback) => { //On to listen for events &&acknowldegment of req
        console.log(Message);
        io.emit('newMessage', generateMessage(Message.from, Message.text)); //Io to send events to everyone
        callback('This is from the server');
        
    });

    socket.on('createLocationMessage', (coords) => {
        io.emit('newLocationMessage', generateLocationMessage('Admin', coords.latitude, coords.longitude));
       // io.emit('newLocationMessage', generateLocationMessage('User', `${mapURL}${coords.latitude},${coords.longitude}` ));
    });

    socket.on('disconnect', () => {
        console.log('User was disconnected');
    })
});




server.listen(port, () => {
    console.log(`Server started on port ${port}`);
}); 

        
        var socket = io();

        socket.on('connect', function () {
            console.log('Connected to server');

           socket.on('newMessage', function (Message) {
                console.log(Message);
           });


        socket.on('disconnect', function () {
            console.log('Disconnected from server');
        })

        });
var socket = io();

        socket.on('connect', function () {
            console.log('Connected to server');
        });
        //Connected to Server
           
           
        socket.on('newMessage', function (Message) {
                console.log(Message);
                var li = jQuery('<li></li>');
                li.text(`${Message.from}: ${Message.text}`);

                jQuery('#messages').append(li);
           });

        //Message
        
        socket.on('disconnect', function () {
            console.log('Disconnected from server');
        });
        //Disconnected


        jQuery('#message-form').on('submit', function (e) { //selecting a element using jQuery.
            e.preventDefault();

        socket.emit('createMessage', {
            from: 'User',
            text: jQuery('[name = message]').val()
        }, function () { //callback func

        });
        });
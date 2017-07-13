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
            text: jQuery('[name = message]').val() //any attribute equaling message.
        }, function () { //callback func

        });
    });

        socket.on('newLocationMessage', function (message) {
            var li = jQuery('<li></li>');
            var a = jQuery('<a target = "_blank">My Current Location</a>')

            li.text(`${message.from}:`)
            a.attr('href', message.url)

            li.append(a);
            jQuery('#messages').append(li);
        });

    
    var locationButton = jQuery('#send-location');
    locationButton.on('click', function () {
        if(!navigator.geolocation){
            return alert('Geolocation not supported by your browser.')
        }
        navigator.geolocation.getCurrentPosition( function (position) {
            socket.emit('createLocationMessage', {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
        }, function () { //error handler
            alert('Unable to fetch location.');
        })
    });
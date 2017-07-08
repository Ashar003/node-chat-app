const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const app = express();
const port = process.env.port || 3000;

app.use(express.static('public'))


//make a brand new express app
//configure expres static middleware to serve up pubic folder
// call o port 3000 with the message2

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
}); 
var express = require('express');

var product = require('./routes/paths'); // Imports routes for the products
var app = express();


// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://testtest:1234@cluster0.ndxg6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/people', product);

//post: localhost:1234/people/create
//delete: localhost:1234/people/:id
//get details: localhost:1234/people/:id
//update details: localhost:1234/people/:id/update
//inc likes: localhost:1234/people/:id/like

var port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});

module.exports = { dev_db_url }
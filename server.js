var express = require('express');
var path = require('path');

var app = express();
var port = 80;

/*
app.get(/inrange/, function(req, res) {
	res.sendFile(__dirname + '/inrange.html');
});
app.get(/inview/, function(req, res) {
	res.sendFile(__dirname + '/inview.html');
});
app.get(/inpage/, function(req, res) {
	res.sendFile(__dirname + '/inpage.html');
});
app.get(/vmp/, function(req, res) {
	res.sendFile(__dirname + '/dist/vmp.js');
});
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});
*/
app.use(express.static('.'));	// opening up to the world!
app.listen(port, function(err) {
	console.log('Listening on port:', port, ' and running app on env: ' + process.env.NODE_ENV);
	console.log(err ? "there was a problem starting the app server: " + err:"no errors");
});
var express = require('express');

var app = express();
var port = 80;

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

app.listen(port, function(err) {
	console.log('Listning on port:', port, ' and running app on env: ' + process.env.NODE_ENV);
	console.log(err ? "there was a problem starting the app server: " + err:"no errors");
});
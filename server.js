var express = require('express');

var app = express();
var port = 80;

app.get(/test/, function(req, res) {
	res.sendFile(__dirname + '/test.html');
});
app.get(/vmp/, function(req, res) {
	res.sendFile(__dirname + '/dist/vmp.js');
});

app.listen(port, function(err) {
	console.log('Listning on port:', port, ' and running app on env: ' + process.env.NODE_ENV);
	console.log(err ? "there was a problem starting the app server: " + err:"no errors");
});
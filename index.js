var express = require('express'),
app = express();

app.get('/', function(req, res){
	app.use('/', express.static(__dirname + "/dist"));
	res.sendFile(__dirname + '/dist/index.html');
});

app.get('/home', function(req, res){
  res.send('Hello World');
});

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);

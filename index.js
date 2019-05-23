var express = require('express'),
app = express.createServer();

app.configure(function(){
  app.use(express.static(__dirname + '/dist'));
});

app.get('/home', function(req, res){
  res.send("Hello World!");
});

app.get('/', function(req, res){
  res.sendFile(__dirname + './dist/index.html');
});

const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
var express = require('express'),
app = express.createServer();



app.get('/home', function(req, res){
  res.send("Hello World!");
});



const port = process.env.PORT || 1337;
app.listen(port);

console.log("Server running at http://localhost:%d", port);
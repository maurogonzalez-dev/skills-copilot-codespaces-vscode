// create web server
var express = require('express');
var app = express();

// create a route
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});

// start web server
app.listen(3000, function() {
  console.log('Listening on port 3000');
});
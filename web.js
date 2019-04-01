var express = require('express');
var logger = require('morgan');

var app = express();
var port = process.env.PORT || 5000;
var options = {
  index: "index.html"
};

// app.use(logger);
app.use('/', express.static(__dirname, options));

app.listen(port, function() {
  console.log('Server started on ' + port);
});
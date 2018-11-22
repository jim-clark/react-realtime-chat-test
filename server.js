var express = require('express');
var http = require('http');
var logger = require('morgan');
var path = require('path');

var app = express();
var httpServer = http.Server(app);
require('./io')(httpServer);

var apiRoutes = require('./routes/api');

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/api', apiRoutes);
app.use('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

port = process.env.PORT || 3001;

httpServer.listen(port, function() {
  console.log(`listening on port ${port}`);
});


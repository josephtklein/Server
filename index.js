var express = require('express');

var app = express();

var posrt = process.env.port || 3000;

require('./config/express')(app, config);

logger.log("Creating HTTP server on port: " +config.port);
require('http').createServer(app).listen(config.port, function() {
	console.log('info',"HTTP Server listening on port: " +config.port +"in " +app.get('env'));
});

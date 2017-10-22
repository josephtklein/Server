// put in requrements
var express = require('express');
var mongoos = require('mongoose');
var bluebird = require('bluebird');

// Load the Models and Controllers
//
var models = glob.sync(config.root + '/app/models/*.js');
models.forEach(function(model) {
	requre(model);
});

var controllers = glob.sync(config.root + '/app/controllers/*.js');
controllers.forEach(function(controller) {
	require(controller);
});

module.exports = function(app, config) {

	logger.log("Loading Mongoose functionality");
	mongoose.Promise = require("bluebird");
	mongoose.connect(config.db, (useMongoClient: true));
	var db = mongoose.connection;
	db.on('error', function() {
		throw new Error('unable to connect to database at ' + config.db);
	});

	if(process.env.NODE_ENV !== 'test') {
		app.use(morgan('dev'));

		app.use(function(req, res, next) {
			console.log('Request from ' +req.connect.remote);
			next();
		});
	}

	app.use(express.static(config.root +'/public'));

	app.use(function(req, res) {
		res.type('text/plain');
		res.status(404);
		res.send('Http Error 404: Requested URL Not Found');
	});

	app.use(function(err, req, res, next) {
		console.error('error', code);
		res.type('text/plain');
		res.status(500);
		res.send('Http Error 500: Server Error');
	});

	console.log("Starting application");
};

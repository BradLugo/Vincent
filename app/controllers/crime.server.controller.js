'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	errorHandler = require('./errors.server.controller'),
	Crime = mongoose.model('Crime'),
	_ = require('lodash');

exports.map = function(req, res) {
	res.render('map', {
		request: req
	});
};

exports.search = function(req, res) {
	res.render('search', {
		request: req
	});
};

exports.updatedb = function(req, res) {
	var crimes = req.body.crimes;
	var output = {
		"crimes": []
		};

	for (var data in crimes) {
		var crime  = new Crime(x);
		crime.save(function(err) {
			if(err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				});
			}
		});
		output["crimes"].push(crime);
	}

	res.json(output)
}

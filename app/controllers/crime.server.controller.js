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
	var data = req.body.crimes;
	var output = {
		"crimes": []
		};
	data.forEach(function(x) {
		var c  = new Crime(x);
		c.save(function(err) {
			if(err) {
				return res.status(400).send({
					message: errorHandler.getErrorMessage(err)
				})
			}
		})
		output["crimes"].push(c);
	})
	res.json(output)
}

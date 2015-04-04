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

exports.updateDB = function(req, res) {
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
		console.log(c);
		output["crimes"].push(c);
	})
	res.json(output)
}

exports.getByDate = function(req, res) {
	Crime
		.where('date').equals(req.body.date)
		.sort('-date')
		.exec(function(err, list) {
			if(err) {
				return res.send(err);
			}
			res.json(list);
		})
}

exports.getByLocation = function(req, res) {
	Crime
		.where('location').equals(req.body.location)
		.sort('-date')
		.exec(function(err, list){
			if(err) {
				return res.send(err);
			}
			res.json(list);
		})
}

exports.getPrediction = function(req, res) {
	Crime
		.where('location').equals(req.body.location)
		.where('date').equals(req.body.date)
		.exec(function(err, list){
			if(err) {
				return res.send(err);
			}
		})
}

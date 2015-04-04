'use strict';

/**
 * Module dependencies.
 */
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

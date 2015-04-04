'use strict';

module.exports = function(app) {
	// Root routing
	var crime = require('../../app/controllers/crime.server.controller');
	app.route('/map').get(crime.map);
	app.route('/advancedsearch').get(crime.advancedsearch);
	app.route('/updatedb').post(crime.updatedb);
};

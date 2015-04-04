'use strict';

module.exports = function(app) {
	// Root routing
	var crime = require('../../app/controllers/crime.server.controller');
	app.route('/map').get(crime.map);
	app.route('/search').get(crime.search);
	app.route('/updatedb').post(crime.updateDB);
};

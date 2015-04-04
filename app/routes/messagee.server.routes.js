'use strict';

module.exports = function(app) {
	// Root routing
	var message = require('../../app/controllers/message.server.controller');
	app.route('/getmessage/:begindate/:enddate').get(message.getMessage);
	app.route('/postmessage').post(message.postMessage);
};

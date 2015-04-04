'use strict';

module.exports = function(app) {
	// Root routing
	var messageboard = require('../../app/controllers/messageboard.server.controller');
	app.route('/messageboard').get(messageboard.index);
	app.route('/getmessage/:begindate/:enddate').get(messageboard.getMessage);
	app.route('/postmessage').post(messageboard.postMessage);
};

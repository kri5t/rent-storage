'use strict';

// Booking routes use booking controller
var bookings = require('../controllers/bookings');
var authorization = require('./middlewares/authorization');

// Booking authorization helpers
var hasAuthorization = function(req, res, next) {
	if (req.booking.user.id !== req.user.id) {
		return res.send(401, 'User is not authorized');
	}
	next();
};

module.exports = function(app) {

	app.get('/bookings', bookings.all);
	app.post('/bookings', authorization.requiresLogin, bookings.create);
	app.get('/bookings/:bookingId', bookings.show);
	app.put('/bookings/:bookingId', authorization.requiresLogin, hasAuthorization, bookings.update);
	app.del('/bookings/:bookingId', authorization.requiresLogin, hasAuthorization, bookings.destroy);

	// Finish with setting up the rentalId param
	app.param('bookingId', bookings.booking);
};
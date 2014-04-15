'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Booking = mongoose.model('Booking'),
	User = mongoose.model('User'),
	Rental = mongoose.model('Rental'),
	_ = require('lodash');

/**
 * Find booking by id
 */
exports.booking = function(req, res, next, id) {
	Booking.load(id, function(err, booking) {
		if (err) return next(err);
		if (!booking) return next(new Error('Failed to load booking ' + id));
		req.booking = booking;
		next();
	});
};

/**
 * Create a booking
 */
exports.create = function(req, res) {
	var booking = new Booking(req.body);
	User.findById(booking.owner, function(err, user){
		if (err) return handleError(err);

		user.bookings.push({from: booking.from, to: booking.to, bookingId: booking._id});
		user.save(function (err) {
			if (err) return handleError(err)
			console.log("user saved");
		});
	});

	Rental.findById(booking.rental, function(err, rental){
		if(err) return handleError(err);

		rental.occupied.push({fromDate: booking.from, toDate: booking.to, bookingId: booking._id});

		rental.save(function(err){
			if(err) return handleError(err);
			console.log("rental saved");
		});
	});

	booking.save(function(err) {
		if (err) {
			return res.send('users/signup', {
				errors: err.errors,
				booking: booking
			});
		} else {
			res.jsonp(booking);
		}
	});
};

/**
 * Update a booking
 */
exports.update = function(req, res) {
	var booking = req.booking;

	booking = _.extend(booking, req.body);

	booking.save(function(err) {
		if (err) {
			return res.send('users/signup', {
				errors: err.errors,
				booking: booking
			});
		} else {
			res.jsonp(booking);
		}
	});
};

/**
 * Delete a booking
 */
exports.destroy = function(req, res) {
	var booking = req.booking;

	booking.remove(function(err) {
		if (err) {
			return res.send('users/signup', {
				errors: err.errors,
				booking:booking
			});
		} else {
			res.jsonp(booking);
		}
	});
};

/**
 * Show a booking
 */
exports.show = function(req, res) {
	res.jsonp(req.booking);
};

/**
 * List of bookings
 */
exports.all = function(req, res) {
	Booking.find().sort('-created').populate('user', 'name username').exec(function(err, bookings) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(bookings);
		}
	});
};

'use strict';

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var BookingSchema = new Schema({
	owner: {type: Schema.Types.ObjectId, ref: 'User'},
	customer: {type: Schema.Types.ObjectId, ref: 'User'},
	rental: {type: Schema.Types.ObjectId, ref: 'Rental'},
	from: Date,
	to: Date,
	created: Date,
	comment: String
});

BookingSchema.path('owner').validate(function(owner) {
	return owner.length;
}, 'Owner cannot be blank');

mongoose.model('Booking', BookingSchema);
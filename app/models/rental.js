'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/**
 * Rental Schema
 */
var RentalSchema = new Schema({
    title: {
        type: String,
        default: '',
        trim: true
    },
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    price: {
        type: String,
        required: true
    },
    occupied: [{
        fromDate: Date,
        toDate: Date,
        bookingId: {
            type: Schema.ObjectId,
            ref: 'Booking'
        }
    }],
    period: {
        fromDate: Date,
        toDate: Date
    },
    location: {
        address: String,
        city: String,
        region: String,
        country: String,
        longitude: String,
        latitude: String
    },
    description: {
        type: String,
        default: '',
        trim: true
    },
    storageType: {
        type: String,
        default: '',
        trim: true
    }
});

/**
 * Validations
 */
RentalSchema.path('description').validate(function(title) {
    return title.length;
}, 'Title cannot be blank');

/**
 * Statics
 */
RentalSchema.statics.load = function(id, cb) {
    this.findOne({
        _id: id
    }).populate('user', 'name username').exec(cb);
};

RentalSchema.statics.locateByLocation = function(country, city, cb) {
    this.where('location.city').equals(city)
        .where('location.country').equals(country)
        .populate('user', 'name username').exec(cb);
};

mongoose.model('Rental', RentalSchema);

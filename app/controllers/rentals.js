'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
    Rental = mongoose.model('Rental'),
    _ = require('lodash');


/**
 * Find rental by id
 */
exports.rental = function(req, res, next, id) {
    Rental.load(id, function(err, article) {
        if (err) return next(err);
        if (!article) return next(new Error('Failed to load article ' + id));
        req.article = article;
        next();
    });
};

/**
 * Create a rental
 */
exports.create = function(req, res) {
    var rental = new Rental(req.body);
    rental.user = req.user;

    rental.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                rental: rental
            });
        } else {
            res.jsonp(rental);
        }
    });
};

/**
 * Update a rental
 */
exports.update = function(req, res) {
    var rental = req.rental;

    rental = _.extend(rental, req.body);

    rental.save(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                rental: rental
            });
        } else {
            res.jsonp(rental);
        }
    });
};

/**
 * Delete a rental
 */
exports.destroy = function(req, res) {
    var rental = req.rental;

    rental.remove(function(err) {
        if (err) {
            return res.send('users/signup', {
                errors: err.errors,
                rental:rental
            });
        } else {
            res.jsonp(rental);
        }
    });
};

/**
 * Show a rental
 */
exports.show = function(req, res) {
    res.jsonp(req.rental);
};

/**
 * List of Rentals
 */
exports.all = function(req, res) {
    Rental.find().sort('-created').populate('user', 'name username').exec(function(err, rentals) {
        if (err) {
            res.render('error', {
                status: 500
            });
        } else {
            res.jsonp(rentals);
        }
    });
};

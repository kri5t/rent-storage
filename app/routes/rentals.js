/**
 * Created by Brian on 02-04-14.
 */
'use strict';

// Rentals routes use rentals controller
var rentals = require('../controllers/rentals');
var authorization = require('./middlewares/authorization');

// Rental authorization helpers
var hasAuthorization = function(req, res, next) {
    if (req.rental.user.id !== req.user.id) {
        return res.send(401, 'User is not authorized');
    }
    next();
};

module.exports = function(app) {

    app.get('/rentals', rentals.all);
    app.post('/rentals', authorization.requiresLogin, rentals.create);
    app.get('/rentals/:rentalId', rentals.show);
    app.put('/rentals/:rentalId', authorization.requiresLogin, hasAuthorization, rentals.update);
    app.del('/rentals/:rentalId', authorization.requiresLogin, hasAuthorization, rentals.destroy);

    // Finish with setting up the articleId param
    app.param('articleId', rentals.rental);

};
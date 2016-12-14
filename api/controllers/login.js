var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config/config')();

module.exports = function () {

    var controller = {};

    controller.doLogin = function (req, res, next) {

        var user = req.body;

        if (!user.username) {
            var errUserName = new Error('Missing username');
            errUserName.status = 404;
            errUserName.message = 'missing username';
            return next(errUserName);
        }

        if (!user.password) {
            var errPassword = new Error('Missing password');
            errPassword.status = 404;
            return next(errPassword);
        }

        if (user.username !== 'admin' || user.password !== 'password') {
            var errUnauthorized = new Error('Unauthorized');
            errUnauthorized.status = 401;
            return next(errUnauthorized);
        }

        var expires = moment().add(7, 'days').valueOf();

        var token = jwt.encode({
            iss: 'https://yourdomain.com',
            sub: 'OPTIONAL',
            aud: 'any',
            exp: expires,
            scope: 'login-request',
            iat: moment().valueOf(),
            jti: 'id:XXXXXXX',
        }, config.jwtToken);

        res.json({
            token: token
        });

    };

    return controller;
};
var moment = require('moment');

module.exports = function () {

    var controller = {};

    controller.protectedData = function (req, res, next) {
        res.json('HA HA');
    };

    return controller;
};
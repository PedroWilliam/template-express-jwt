var moment = require('moment');

module.exports = function () {

    var controller = {};

    controller.helloWorld = function (req, res, next) {
        res.json('Hi there!');
    };

    controller.getStatus = function (req, res, next) {
        res.json('pong');
    };

    return controller;
};
var routeConf = require('../routes/index');

module.exports = function (app) {

    var controller = app.controllers.status;

    app.route(routeConf.apiPrefix + '/')
        .get(controller.helloWorld);

    app.route(routeConf.apiPrefix + '/ping')
        .get(controller.getStatus);
};
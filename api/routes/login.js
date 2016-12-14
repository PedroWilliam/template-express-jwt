var routeConf = require('../routes/index');

module.exports = function (app) {

    var controller = app.controllers.login;

    app.route(routeConf.apiPrefix + '/login')
        .post(controller.doLogin);

};
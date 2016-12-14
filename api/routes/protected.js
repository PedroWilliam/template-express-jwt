var routeConf = require('../routes/index');

module.exports = function (app) {

    var controller = app.controllers.protected;

    app.route(routeConf.apiPrefix + '/protected')
        .get(routeConf.middleWareAuth, controller.protectedData);
};
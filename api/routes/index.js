var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config/config')();

exports.apiPrefix = '';

exports.middleWareAuth = function (req, res, next) {
  var token = req.query.token || req.headers["x-access-token"];

  if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    var err = new Error("Forbiden");
    err.status = 403;
    return next(err);
  }

  try {
    var decoded = jwt.decode(token, config.jwtToken);
    var isExpired = moment(decoded.exp).isBefore(new Date());

    if (isExpired) {
      var err = new Error("Unauthorized");
      err.status = 401;
      return next(err);
    } else {
      next();
    }
  } catch (err) {
    var err = new Error("Unauthorized");
    err.status = 401;
    return next(err);
  }
};
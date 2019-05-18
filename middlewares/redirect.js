const _ = require('lodash');

module.exports = () => {
  return (req, res, next) => {
    const redirect = req.session.redirect;
    if (redirect && _.isObject(redirect)) {
      _.merge(res.locals, { data: redirect });
    }
    req.session.redirect = {};
    next();
  };
};

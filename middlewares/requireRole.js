const _ = require('lodash');

/**
 * `requireRoles()` checks the User has the required role.
 * If the user doesn't have the required role,
 * `requireRoles()` returns 403 Forbidden statu code.
 *
 * ```
 * router.get('/admin',
 *   requireRoles('admin','system'),
 *   (req, res, next) => { res.render('admin') }
 * );
 * ```
 */
module.exports = function() {
  const x = Array.from(arguments);
  return (req, res, next) => {
    const y = (req.user && req.user.roles) || [];
    const hasRole = 0 < _.intersection(x, y);
    if (hasRole) {
      next();
    } else {
      // 403 Forbidden
      next(403);
    }
  };
};

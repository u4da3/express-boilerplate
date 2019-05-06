const boolean = require('boolean');

module.exports = () => {
  return (req, res, next) => {
    console.log(req.cookies)
    if (req.cookies['sidebar.iconnav']) {
      let sidebar = {
        iconnav: boolean(req.cookies['sidebar.iconnav']),
      };
      res.locals.sidebar = sidebar;
    }
    next();
  };
};

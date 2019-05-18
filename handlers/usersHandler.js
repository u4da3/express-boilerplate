const _ = require('lodash');
const debug = require('debug')('ehb');

/**
 * 画面表示
 */
module.exports.show = (req, res) => {
  const User = req.app.sequelize.models.User;
  return User.findAll({
    /*where: {title: 'aProject'},*/
    attributes: ['username', 'nickname', 'email', 'groups', 'roles'],
  }).then((users) => {
    debug(JSON.stringify(users));
    var data = {};
    data.usersList = users.map((user) => {
      return {
        username: _.truncate(user.username),
        nickname: _.truncate(user.nickname),
        email: _.truncate(user.email),
        groups: user.groups,
        roles: user.roles,
      }
    });
    return data;
  });
};

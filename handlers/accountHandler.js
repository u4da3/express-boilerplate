const uuid = require('uuid/v1');
const bcrypt = require('bcrypt');

module.exports.signup = (req, res) => {
  console.log(req.param('username'));
  const User = res.app.sequelize.models.User;
  User.create({
    id: uuid(),
    username: req.param('username'),
    password: bcrypt.hashSync(req.param('password'), bcrypt.genSaltSync(10)),
  });
};

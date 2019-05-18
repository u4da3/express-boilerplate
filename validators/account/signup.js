const { check } = require('express-validator/check');
module.exports = [
  check('username')
    .not()
    .isEmpty(),
];
